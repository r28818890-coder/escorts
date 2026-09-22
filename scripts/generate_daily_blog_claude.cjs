#!/usr/bin/env node
'use strict';

/**
 * generate_daily_blog_claude.cjs
 * Generates fresh SEO blog posts using Claude Sonnet 5 via Veo Claude Engine
 * and outputs clean Markdown / HTML for Scot Website.
 */

const { runQuery } = require('./veo_claude_runner.cjs');

const TOPICS = [
  { topic: 'best massage spa near sindhi camp jaipur', keyword: 'spa near sindhi camp jaipur' },
  { topic: 'thai massage jaipur price benefits and posture relief', keyword: 'thai massage jaipur' },
  { topic: 'deep tissue massage for chronic back pain relief jaipur', keyword: 'deep tissue massage jaipur' },
  { topic: 'romantic couple massage private suite experience jaipur', keyword: 'couple massage jaipur' },
  { topic: 'late night 24 hour spa near jaipur railway station', keyword: '24 hour spa jaipur' },
  { topic: 'aromatherapy and organic body scrub benefits jaipur', keyword: 'aromatherapy jaipur' }
];

async function generateBlog(customTopic, customKeyword) {
  const selected = customTopic 
    ? { topic: customTopic, keyword: customKeyword || 'spa in jaipur' }
    : TOPICS[Math.floor(Math.random() * TOPICS.length)];

  console.log(`[Claude Blog Generator] Creating article for: "${selected.topic}" (Keyword: "${selected.keyword}")`);

  const prompt = `You are a real customer and wellness enthusiast sharing an authentic experience at Jaipur Spa, located at Motilal Atal Road, Sindhi Camp, Jaipur (Phone: +91 73576 78356).

Write a high-ranking, 100% human-sounding wellness blog post about: "${selected.topic}".

CRITICAL GUIDELINES:
- Perspective: First-person ("I", "we", "my visit")
- Length: 550-700 words
- Naturally include keyword "${selected.keyword}" 2-3 times
- Use <h3> for headings and <p> for paragraphs
- Mention private suites, hygienic showers, certified therapists, and Sindhi Camp location
- End with phone +91 73576 78356 for direct booking

Provide the complete blog with Title, Meta Description, and HTML Content.`;

  const result = await runQuery(prompt, { model: 'claude-sonnet', thinking: true });
  console.log('\n=== GENERATED BLOG WITH CLAUDE SONNET 5 ===\n');
  console.log(result);
  console.log('\n===========================================\n');
}

const args = process.argv.slice(2);
const customTopic = args[0];
const customKeyword = args[1];

generateBlog(customTopic, customKeyword).catch(console.error);
