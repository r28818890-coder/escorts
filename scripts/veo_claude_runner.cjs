#!/usr/bin/env node
'use strict';
const https = require('https');

/**
 * veo_claude_runner.cjs
 * Standalone Node CLI runner for Veo-Claude Free AI Engine in Scot Website.
 * Usage:
 *   node scripts/veo_claude_runner.cjs "What are the benefits of Thai Massage in Jaipur?"
 *   node scripts/veo_claude_runner.cjs --model claude-opus --thinking "Write a blog on couple massage"
 */

const MODELS = {
  'claude': { label: 'Claude Sonnet 5', preference: 'claude50sonnet', thinkingPreference: 'claude50sonnetthinking' },
  'claude-sonnet': { label: 'Claude Sonnet 5', preference: 'claude50sonnet', thinkingPreference: 'claude50sonnetthinking' },
  'claude-opus': { label: 'Claude Opus 5', preference: 'claude50opus', thinkingPreference: 'claude50opusthinking' },
  'gpt-terra': { label: 'GPT-5.6 Terra', preference: 'gpt56_terra', thinkingPreference: 'gpt56_terra_thinking' },
  'gemini': { label: 'Gemini 3.7 Flash', preference: 'gemini37flash', thinkingPreference: 'gemini37flashthinking' }
};

function parseArgs() {
  const args = process.argv.slice(2);
  let model = 'claude-sonnet';
  let thinking = false;
  let webSearch = false;
  const promptParts = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--model' && args[i + 1]) {
      model = args[++i];
    } else if (args[i] === '--thinking') {
      thinking = true;
    } else if (args[i] === '--search') {
      webSearch = true;
    } else {
      promptParts.push(args[i]);
    }
  }

  const prompt = promptParts.join(' ').trim() || 'Hello Claude, give a 1-sentence introduction for Jaipur Spa.';
  return { model, thinking, webSearch, prompt };
}

async function runQuery(prompt, options = {}) {
  const modelKey = (options.model || 'claude-sonnet').toLowerCase();
  const modelMeta = MODELS[modelKey] || MODELS['claude-sonnet'];
  const isThinking = !!options.thinking;
  const modelPreference = (isThinking && modelMeta.thinkingPreference)
    ? modelMeta.thinkingPreference
    : modelMeta.preference;

  const modelLabel = isThinking ? `${modelMeta.label} (Thinking)` : modelMeta.label;

  const payload = JSON.stringify({
    query_str: prompt,
    prompt: prompt,
    user_name: '',
    model: modelLabel,
    model_preference: modelPreference,
    frontend_uuid: 'veo-cli-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
    is_related: false,
    web_search: !!options.webSearch,
    messages: []
  });

  return new Promise((resolve, reject) => {
    const req = https.request('https://veoaifree.com/wp-content/themes/really-simple-child/veo-proxy.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Referer': 'https://veoaifree.com/claude/',
        'Origin': 'https://veoaifree.com'
      }
    }, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        return reject(new Error(`Veo AI HTTP Error ${res.statusCode}`));
      }

      let sseBuffer = '';
      const state = { fields: {}, order: [] };

      function getFieldState(key) {
        if (!state.fields[key]) {
          state.fields[key] = { chunksByIndex: {}, usesChunks: false, fullText: '' };
          state.order.push(key);
        }
        return state.fields[key];
      }

      function applyEvent(json) {
        if (!json || !Array.isArray(json.blocks)) return;
        for (const b of json.blocks) {
          if (b.markdown_block || b.ask_text_block) {
            const key = b.markdown_block ? 'markdown_block' : 'ask_text_block';
            const val = b.markdown_block || b.ask_text_block;
            const txt = typeof val === 'string' ? val : (val.markdown || val.answer || val.text || null);
            if (txt !== null) {
              const fs = getFieldState(key);
              if (!fs.usesChunks) fs.fullText = txt;
            }
            continue;
          }
          if (!b.diff_block || !Array.isArray(b.diff_block.patches)) continue;
          const field = b.diff_block.field || 'field';
          const fs = getFieldState(field);

          for (const p of b.diff_block.patches) {
            if (!p) continue;
            const path = p.path || '';
            const chunkMatch = /^\/chunks\/(\d+)$/.exec(path);
            if (chunkMatch && typeof p.value === 'string') {
              fs.chunksByIndex[Number(chunkMatch[1])] = p.value;
              fs.usesChunks = true;
            } else if ((path === '' || path == null) && p.value && Array.isArray(p.value.chunks)) {
              for (let c = 0; c < p.value.chunks.length; c++) fs.chunksByIndex[c] = p.value.chunks[c];
              fs.usesChunks = true;
            } else {
              const val = p.value;
              const txt = typeof val === 'string' ? val : (val ? (val.markdown || val.answer || val.text || null) : null);
              if (txt !== null) {
                if (p.op === 'append') fs.fullText = (fs.fullText || '') + txt;
                else fs.fullText = txt;
              }
            }
          }
        }
      }

      res.on('data', (chunk) => {
        sseBuffer += chunk.toString('utf8');
        const parts = sseBuffer.split(/\n\n|\r\n\r\n/);
        sseBuffer = parts.pop() || '';
        for (const part of parts) {
          const lines = part.split(/\n|\r\n/);
          for (const line of lines) {
            if (line.startsWith('data:')) {
              const dataStr = line.slice(5).trim();
              if (dataStr && dataStr !== '[DONE]') {
                try {
                  const json = JSON.parse(dataStr);
                  applyEvent(json);
                } catch (e) {}
              }
            }
          }
        }
      });

      res.on('end', () => {
        let out = '';
        for (const key of state.order) {
          const fs = state.fields[key];
          if (fs.usesChunks) {
            const indices = Object.keys(fs.chunksByIndex).map(Number).sort((a, b) => a - b);
            for (const idx of indices) out += fs.chunksByIndex[idx];
          } else {
            out += fs.fullText || '';
          }
        }

        let cleaned = out.trim();
        cleaned = cleaned.replace(/[ \t]?\[\d{1,3}(?:\s*,\s*\d{1,3})*\](?:[ \t]?\[\d{1,3}(?:\s*,\s*\d{1,3})*\])*/g, '');
        cleaned = cleaned.replace(/^(?:DONE)?WORKFLOW_COMPLETED\s*/gi, '').replace(/^DONE\s*/gi, '').trim();
        resolve(cleaned || out.trim());
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function main() {
  const { model, thinking, webSearch, prompt } = parseArgs();
  console.log(`[Veo-Claude] Querying Model: ${model} | Thinking: ${thinking} | Search: ${webSearch}`);
  console.log(`[Veo-Claude] Prompt: "${prompt}"\n---`);

  try {
    const response = await runQuery(prompt, { model, thinking, webSearch });
    console.log(response);
    console.log('\n--- [Execution Complete] ---');
  } catch (err) {
    console.error('[Veo-Claude Error]:', err.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { runQuery, MODELS };
