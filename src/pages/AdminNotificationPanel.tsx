import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  BellOff, 
  ShieldCheck, 
  RefreshCw, 
  Eye, 
  Clock, 
  CheckCircle2, 
  Lock, 
  Power, 
  Sparkles, 
  Bot, 
  Send, 
  FileText, 
  Star, 
  Copy, 
  Check, 
  Zap, 
  BookOpen 
} from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';
import SEO from '@/components/common/SEO';
import { 
  askClaudeAI, 
  generateSpaBlogWithClaude, 
  generateSpaReviewWithClaude 
} from '@/services/veoClaudeAI';

const OBFUSCATED_PASS_HASH = 'U2FkZEAxMTEx'; // Base64 of Sadd@1111

export const AdminNotificationPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');
  const [isPushEnabled, setIsPushEnabled] = useState<boolean>(false);
  const [visitorLogs, setVisitorLogs] = useState<any[]>([]);

  // Claude AI Studio States
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('claude-sonnet');
  const [isThinkingEnabled, setIsThinkingEnabled] = useState<boolean>(false);
  const [isAiLoading, setIsAiLoading] = useState<boolean>(false);

  // 1-Click Blog Generator
  const [blogTopic, setBlogTopic] = useState<string>('Jaipur VIP Escorts Booking Guide & Verified Models');
  const [blogKeyword, setBlogKeyword] = useState<string>('jaipur escorts club');
  const [blogStatus, setBlogStatus] = useState<string>('');
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(false);

  // 1-Click Review Generator
  const [reviewService, setReviewService] = useState<string>('VIP Russian Model');
  const [reviewArea, setReviewArea] = useState<string>('Sindhi Camp');
  const [generatedReview, setGeneratedReview] = useState<{ reviewerName: string; rating: number; reviewText: string } | null>(null);
  const [copiedReview, setCopiedReview] = useState<boolean>(false);
  const [isReviewLoading, setIsReviewLoading] = useState<boolean>(false);

  useEffect(() => {
    const isAuthed = sessionStorage.getItem('jaipur_spa_admin_authed') === 'true';
    setIsAuthenticated(isAuthed);

    if (Notification.permission === 'granted' && localStorage.getItem('jaipur_spa_push_enabled') === 'true') {
      setIsPushEnabled(true);
    }

    loadVisitorLogs();
  }, []);

  const loadVisitorLogs = () => {
    try {
      const logs = JSON.parse(localStorage.getItem('jaipur_visitor_logs') || '[]');
      setVisitorLogs(logs);
    } catch {
      setVisitorLogs([]);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (btoa(passwordInput) === OBFUSCATED_PASS_HASH) {
        setIsAuthenticated(true);
        sessionStorage.setItem('jaipur_spa_admin_authed', 'true');
        setAuthError('');
      } else {
        setAuthError('Incorrect Admin Password');
      }
    } catch {
      setAuthError('Authentication verification failed');
    }
  };

  const handleEnablePush = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop/mobile notifications.');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      setIsPushEnabled(true);
      localStorage.setItem('jaipur_spa_push_enabled', 'true');

      new Notification('Alerts Active!', {
        body: 'You will now receive instant push alerts whenever a new visitor visits Jaipur Escorts Club.',
        icon: '/jaipur_escorts_club_logo.jpg'
      });
    } else {
      alert('Notification permission denied. Please allow notifications in browser settings.');
    }
  };

  const handleDisablePush = () => {
    setIsPushEnabled(false);
    localStorage.removeItem('jaipur_spa_push_enabled');
  };

  const handleRefreshLogs = () => {
    loadVisitorLogs();
  };

  // Run free-form AI prompt via Veo Claude
  const handleRunAiQuery = async () => {
    if (!aiPrompt.trim() || isAiLoading) return;
    setIsAiLoading(true);
    setAiResponse('');

    try {
      const response = await askClaudeAI(aiPrompt, {
        model: selectedModel,
        thinking: isThinkingEnabled,
        webSearch: true
      });
      setAiResponse(response || 'No response returned from Claude.');
    } catch (err: any) {
      setAiResponse(`Error running Claude AI: ${err.message || err}`);
    } finally {
      setIsAiLoading(false);
    }
  };

  // Run 1-Click SEO Blog Generator
  const handleGenerateBlog = async () => {
    if (isBlogLoading) return;
    setIsBlogLoading(true);
    setBlogStatus('Contacting Veo Claude Sonnet 5 Engine...');
    try {
      const result = await generateSpaBlogWithClaude(blogTopic, blogKeyword);
      setBlogStatus(`Successfully Generated & Auto-Published Blog: "${result.title}" (Slug: ${result.slug})`);
    } catch (err: any) {
      setBlogStatus(`Error generating blog: ${err.message || err}`);
    } finally {
      setIsBlogLoading(false);
    }
  };

  // Run 1-Click 5-Star Review Generator
  const handleGenerateReview = async () => {
    if (isReviewLoading) return;
    setIsReviewLoading(true);
    setCopiedReview(false);
    try {
      const review = await generateSpaReviewWithClaude(reviewService, reviewArea);
      setGeneratedReview(review);
    } catch (err) {
      setGeneratedReview({
        reviewerName: 'Happy Client',
        rating: 5,
        reviewText: `Best verified companion service in Jaipur near ${reviewArea}! 100% genuine photos, quick WhatsApp response, and professional discreet outcall.`
      });
    } finally {
      setIsReviewLoading(false);
    }
  };

  const handleCopyReview = () => {
    if (!generatedReview) return;
    navigator.clipboard.writeText(`${generatedReview.reviewText}`);
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <SEO title={`Admin Portal | ${BRAND.name}`} description="Protected Admin Portal" />

        <div className="max-w-md w-full bg-zinc-900 border border-rose-600/40 rounded-3xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-rose-950/40 text-rose-400 flex items-center justify-center mx-auto">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-white">Secret Admin Portal</h2>
            <p className="text-xs text-gray-400 mt-1">Enter Manager Password to Manage Live Visitor Alerts & AI Engine</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-white text-center text-sm focus:outline-none focus:border-rose-500"
            />

            {authError && <p className="text-red-400 text-xs">{authError}</p>}

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 hover:brightness-110 text-white font-bold text-sm shadow-lg shadow-rose-600/20 transition transform hover:scale-[1.01] cursor-pointer"
            >
              Unlock Admin Controls
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-body">
      <SEO title={`Admin Dashboard | ${BRAND.name}`} description="Admin Push Alerts & Veo-Claude AI Engine" />

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-zinc-900 border border-rose-500/30">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" /> Admin Protected Mode
            </div>
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-white flex items-center gap-2.5">
              <span>{BRAND.name} Command Center</span>
              <span className="text-xs font-mono font-normal bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full border border-rose-500/40">
                Veo-Claude AI Active
              </span>
            </h1>
          </div>

          <button
            onClick={() => {
              sessionStorage.removeItem('jaipur_spa_admin_authed');
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-gray-300 text-xs font-medium transition cursor-pointer"
          >
            Lock Dashboard
          </button>
        </div>

        {/* ─── CLAUDE AI STUDIO & COMMAND CENTER ──────────────────────────── */}
        <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-br from-zinc-900 via-[#150c12] to-rose-950/40 border-2 border-rose-600/60 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  Claude AI Studio (Claude Sonnet 5 & Opus)
                </h2>
                <p className="text-xs text-gray-300">
                  Direct Zero-Key AI Engine for SEO blogs, customer reviews, strategy, and site optimization.
                </p>
              </div>
            </div>

            {/* Model Selector & Thinking */}
            <div className="flex items-center gap-2">
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-rose-500/40 text-rose-300 text-xs font-semibold focus:outline-none"
              >
                <option value="claude-sonnet">Claude Sonnet 5</option>
                <option value="claude-opus">Claude Opus 5</option>
                <option value="gpt-terra">GPT-5.6 Terra</option>
                <option value="gemini">Gemini 3.7 Flash</option>
              </select>

              <button
                type="button"
                onClick={() => setIsThinkingEnabled(!isThinkingEnabled)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                  isThinkingEnabled
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'bg-zinc-800 text-gray-400 border border-zinc-700'
                }`}
              >
                <Zap size={12} /> Thinking Mode: {isThinkingEnabled ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Claude Prompt Console */}
          <div className="space-y-3">
            <label className="text-xs font-semibold text-rose-300 uppercase tracking-wider block">
              Ask Claude AI Anything (Marketing, Therapy Strategy, Outranking):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunAiQuery()}
                placeholder="e.g. Write a 50-word WhatsApp offer for VIP companion booking in Sindhi Camp..."
                className="flex-1 px-4 py-3 rounded-2xl bg-zinc-950 border border-zinc-800 text-white text-xs focus:border-rose-500 outline-none"
              />
              <button
                onClick={handleRunAiQuery}
                disabled={isAiLoading || !aiPrompt.trim()}
                className="px-5 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
              >
                {isAiLoading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                Run Query
              </button>
            </div>

            {aiResponse && (
              <div className="mt-3 p-4 rounded-2xl bg-zinc-950/80 border border-rose-500/30 text-xs text-gray-200 leading-relaxed whitespace-pre-wrap font-sans">
                <div className="text-[10px] text-rose-400 font-mono mb-1 font-bold">Claude Response:</div>
                {aiResponse}
              </div>
            )}
          </div>

          {/* Quick AI Action Tools (Blog & Review Generator) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* 1-Click Blog Generator */}
            <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
                <BookOpen size={14} /> 1-Click SEO Blog Generator
              </div>
              <input
                type="text"
                value={blogTopic}
                onChange={(e) => setBlogTopic(e.target.value)}
                placeholder="Blog Topic"
                className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-rose-500"
              />
              <input
                type="text"
                value={blogKeyword}
                onChange={(e) => setBlogKeyword(e.target.value)}
                placeholder="Target Keyword"
                className="w-full p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white outline-none focus:border-rose-500"
              />
              <button
                onClick={handleGenerateBlog}
                disabled={isBlogLoading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
              >
                {isBlogLoading ? <RefreshCw size={13} className="animate-spin" /> : <Sparkles size={13} />}
                Generate & Auto-Publish with Claude
              </button>
              {blogStatus && <p className="text-[11px] text-rose-300 font-mono">{blogStatus}</p>}
            </div>

            {/* 1-Click Review Generator */}
            <div className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
                <Star size={14} /> 1-Click Google 5-Star Review Generator
              </div>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={reviewService}
                  onChange={(e) => setReviewService(e.target.value)}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white outline-none"
                >
                  <option value="VIP Russian Model">VIP Russian Model</option>
                  <option value="Independent Escort">Independent Escort</option>
                  <option value="College Model">College Model</option>
                  <option value="Luxury Hotel Outcall">Luxury Hotel Outcall</option>
                  <option value="VIP Companion">VIP Companion</option>
                </select>
                <select
                  value={reviewArea}
                  onChange={(e) => setReviewArea(e.target.value)}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-white outline-none"
                >
                  <option value="Sindhi Camp">Sindhi Camp</option>
                  <option value="Railway Station">Railway Station</option>
                  <option value="MI Road">MI Road</option>
                  <option value="Bani Park">Bani Park</option>
                  <option value="C-Scheme">C-Scheme</option>
                </select>
              </div>

              <button
                onClick={handleGenerateReview}
                disabled={isReviewLoading}
                className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-rose-300 font-bold text-xs flex items-center justify-center gap-1.5 transition border border-rose-500/30 cursor-pointer"
              >
                {isReviewLoading ? <RefreshCw size={13} className="animate-spin" /> : <Star size={13} />}
                Generate Authentic Review
              </button>

              {generatedReview && (
                <div className="p-3 rounded-xl bg-zinc-900 border border-rose-500/20 text-xs space-y-2">
                  <div className="flex justify-between items-center text-rose-400 font-bold text-[11px]">
                    <span>{generatedReview.reviewerName} (5 ★★★★★)</span>
                    <button
                      onClick={handleCopyReview}
                      className="text-gray-300 hover:text-white flex items-center gap-1 text-[10px] bg-zinc-800 px-2 py-0.5 rounded cursor-pointer"
                    >
                      {copiedReview ? <Check size={10} className="text-emerald-400" /> : <Copy size={10} />}
                      {copiedReview ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-gray-300 italic text-[11px]">"{generatedReview.reviewText}"</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PUSH NOTIFICATION CONTROLS CARD */}
        <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-rose-950/30 border-2 border-rose-600/50 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                {isPushEnabled ? <Bell className="w-6 h-6 text-emerald-400" /> : <BellOff className="w-6 h-6 text-red-400" />}
                Live Push Notifications On This Phone
              </h2>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                {isPushEnabled
                  ? 'Status: Push notifications are currently ACTIVE. Your phone will ring on visitor arrival.'
                  : 'Status: Push notifications are OFF. Click enable to turn on alerts.'}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {!isPushEnabled ? (
                <button
                  onClick={handleEnablePush}
                  className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 hover:brightness-110 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg transition transform hover:scale-105 cursor-pointer"
                >
                  <Bell className="w-4 h-4" /> Enable Visitor Push Alerts
                </button>
              ) : (
                <button
                  onClick={handleDisablePush}
                  className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition transform hover:scale-105 cursor-pointer"
                >
                  <Power className="w-4 h-4" /> Disable / Turn OFF Push Alerts
                </button>
              )}
            </div>
          </div>

          {isPushEnabled && (
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between gap-2">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                Active on this phone browser. You will receive live visitor alerts.
              </span>
              <button
                onClick={handleDisablePush}
                className="text-red-400 underline font-bold hover:text-red-300 text-xs shrink-0 cursor-pointer"
              >
                Turn OFF Alerts Now
              </button>
            </div>
          )}
        </div>

        {/* RECENT VISITOR LOGS TABLE */}
        <div className="p-6 md:p-8 rounded-3xl bg-zinc-900 border border-rose-500/30 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5" /> Recent Live Visitor Activity Log
            </h3>
            <button
              onClick={handleRefreshLogs}
              className="px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-gray-300 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Refresh Logs
            </button>
          </div>

          {visitorLogs.length === 0 ? (
            <p className="text-xs text-gray-400 text-center py-8">No visitor logs recorded yet on this browser session.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-zinc-800 text-rose-400 uppercase tracking-wider">
                    <th className="py-3 px-4">Time</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4">Device</th>
                    <th className="py-3 px-4">Page Opened</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-gray-300">
                  {visitorLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-zinc-800/50">
                      <td className="py-3 px-4 font-mono font-bold text-white">{log.timestamp}</td>
                      <td className="py-3 px-4">{log.city}</td>
                      <td className="py-3 px-4">{log.device}</td>
                      <td className="py-3 px-4 text-rose-200 font-mono">{log.page}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationPanel;
