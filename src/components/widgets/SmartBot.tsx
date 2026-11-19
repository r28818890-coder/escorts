import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateSmartBotResponse, isAdminTrigger, isAdminPasswordCheck } from '@/components/widgets/smartbotBrain';
import { performSeoAudit, applySeoAutoFix } from '@/components/widgets/smartbotUtils';
import { requestBrowserPushPermissions } from '@/services/aiAlertDispatcherAI';
import { saveLiveQA } from '@/utils/liveQAStorage';
import { answerSpaInquiryWithClaude } from '@/services/veoClaudeAI';
import { CONTACT } from '@/config/site';

const SmartBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isAwaitingAdminPass, setIsAwaitingAdminPass] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  // ─── Lead Capture State Machine ─────────────────────────────────────────
  const [questionCount, setQuestionCount] = useState(0);
  const [hasCapturedPhone, setHasCapturedPhone] = useState(false);
  const [isAwaitingPhone, setIsAwaitingPhone] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState('');
  const [userPhone, setUserPhone] = useState('');

  const [messages, setMessages] = useState<{text: string, isBot: boolean, isAi?: boolean}[]>([
    { 
      text: "Hello! Welcome to Escorts Hub Noida. I am your VIP AI Assistant powered by Claude Sonnet 5. How can I help you find verified models today?",
      isBot: true, 
      isAi: true 
    }
  ]);
  const [options, setOptions] = useState<string[]>([
    "Verified Models",
    "Check Rates & Packages",
    "Noida Localities",
    "Book on WhatsApp"
  ]);
  const [input, setInput] = useState('');

  // ─── Auto-scroll chat to bottom ───────────────────────────────────────────
  const chatEndRef = useRef<HTMLDivElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current && chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // ─── Prevent page scroll when scrolling inside chat ───────────────────────
  useEffect(() => {
    const chatArea = chatAreaRef.current;
    if (!chatArea) return;

    const preventPageScroll = (e: WheelEvent) => {
      const { scrollTop, scrollHeight, clientHeight } = chatArea;
      const atTop = scrollTop === 0 && e.deltaY < 0;
      const atBottom = Math.abs(scrollTop + clientHeight - scrollHeight) < 2 && e.deltaY > 0;
      if (!atTop && !atBottom) {
        e.stopPropagation();
      }
    };

    chatArea.addEventListener('wheel', preventPageScroll, { passive: true });
    return () => chatArea.removeEventListener('wheel', preventPageScroll);
  }, [isOpen]);

  // ─── Background Dispatch Phone Lead ──────────────────────────────────────
  const sendLeadInBackground = (phone: string, question: string) => {
    const textMessage = `New VIP Lead!\nPhone: ${phone}\nQuestion: ${question || 'Interested in Verified Profiles'}`;
    
    try {
      const img = new Image();
      img.src = `https://api.whatsapp.com/send?phone=${CONTACT.whatsapp1}&text=${encodeURIComponent(textMessage)}`;
    } catch {
      // Ignore background lead error
    }
    
    console.log(`[CHATBOT LEAD CAPTURED] Phone: ${phone} | Question: ${question}`);
  };

  const lastMsgTimeRef = useRef<number[]>([]);

  const checkRateLimit = (): boolean => {
    const now = Date.now();
    lastMsgTimeRef.current = lastMsgTimeRef.current.filter(t => now - t < 10000);
    if (lastMsgTimeRef.current.length >= 6) {
      return false;
    }
    lastMsgTimeRef.current.push(now);
    return true;
  };

  const handleUserMessage = async (message: string) => {
    const text = message.trim();
    if (!text || isTyping) return;

    if (!checkRateLimit()) {
      setMessages(prev => [
        ...prev,
        { text, isBot: false },
        { text: 'Please slow down a moment. Connecting you with our coordinator shortly.', isBot: true }
      ]);
      return;
    }

    // Append User Message
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInput('');

    // ── Phone Input Interception Flow ──
    if (isAwaitingPhone) {
      const cleanedPhone = text.replace(/\D/g, '');
      if (cleanedPhone.length >= 10) {
        setUserPhone(cleanedPhone);
        setHasCapturedPhone(true);
        setIsAwaitingPhone(false);
        sendLeadInBackground(cleanedPhone, pendingQuestion);

        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [
            ...prev,
            { text: `Thank you! Your verified request is logged with phone +91 ${cleanedPhone}. An available escort or coordinator in Noida is reviewing your availability.`, isBot: true }
          ]);
          setOptions(['Book on WhatsApp', 'Russian VIP Models', 'Hotel Outcall Options']);
        }, 800);
        return;
      }
    }

    // ── Admin Command Mode Check ──
    if (isAwaitingAdminPass) {
      if (isAdminPasswordCheck(text)) {
        setIsAdminMode(true);
        setIsAwaitingAdminPass(false);
        setMessages(prev => [
          ...prev,
          { text: 'Admin Access Granted. Available commands:\n1. audit - Run SEO Audit\n2. fix - Auto Fix SEO\n3. exit - Exit Admin Mode', isBot: true }
        ]);
        setOptions(['audit', 'fix', 'exit']);
      } else {
        setIsAwaitingAdminPass(false);
        setMessages(prev => [...prev, { text: 'Invalid Admin Key.', isBot: true }]);
      }
      return;
    }

    if (isAdminTrigger(text)) {
      setIsAwaitingAdminPass(true);
      setMessages(prev => [...prev, { text: 'Enter Administrator Key to proceed:', isBot: true }]);
      return;
    }

    if (isAdminMode) {
      const lower = text.toLowerCase();
      if (lower === 'exit') {
        setIsAdminMode(false);
        setMessages(prev => [...prev, { text: 'Exited Admin Mode.', isBot: true }]);
        setOptions(['Verified Models', 'Check Rates & Packages', 'Noida Localities']);
        return;
      }
      if (lower === 'audit') {
        const report = performSeoAudit();
        setMessages(prev => [...prev, { text: JSON.stringify(report, null, 2), isBot: true }]);
        return;
      }
      if (lower === 'fix') {
        const result = applySeoAutoFix();
        setMessages(prev => [...prev, { text: JSON.stringify(result, null, 2), isBot: true }]);
        return;
      }
    }

    // ── AI Response Generation via Veo Claude AI Engine ──
    setIsTyping(true);

    try {
      const claudeResponse = await answerSpaInquiryWithClaude(text);
      setIsTyping(false);

      if (claudeResponse && claudeResponse.trim().length > 10) {
        setMessages(prev => [...prev, { text: claudeResponse, isBot: true, isAi: true }]);
        setOptions(['Book on WhatsApp', 'VIP Russian Models', 'Hotels & Localities']);
        
        // Save Q&A for dynamic SEO indexation
        if (text.length > 10) {
          saveLiveQA({ question: text, answer: claudeResponse });
        }
      } else {
        // Fallback to local rule engine
        const reply = generateSmartBotResponse(text, false);
        setMessages(prev => [...prev, { text: reply.response, isBot: true }]);
        setOptions(reply.options);

        if (reply.action === 'book') {
          window.dispatchEvent(new CustomEvent('open-lead-modal'));
        }
      }
    } catch {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { text: `Thank you for inquiring! For 100% verified model photos and instant booking in Noida, contact us directly on WhatsApp at ${CONTACT.phoneDisplay}.`, isBot: true }
      ]);
      setOptions(['Book on WhatsApp', 'Check Rates & Packages', 'Noida Localities']);
    }
  };

  const handleOptionClick = (option: string) => {
    handleUserMessage(option);
  };

  const handleSend = () => {
    handleUserMessage(input);
  };

  return (
    <>
      {/* ── Small Circular Toggle Button (Bottom-Left) ─────────────────────── */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Escorts Hub Noida AI Chat"
        className={`fixed left-4 bottom-5 z-50 w-11 h-11 sm:w-12 sm:h-12 bg-slate-900 text-rose-400 border border-rose-500/40 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
        </span>
        <MessageSquare size={20} />
      </button>

      {/* ── Bot Window ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed z-[60] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
            style={{
              left: '1rem',
              bottom: '5rem',
              width: 'min(360px, calc(100vw - 2rem))',
              height: 'min(490px, calc(100vh - 9rem))',
              maxHeight: '490px',
            }}
          >
            {/* Header */}
            <div className="bg-slate-900 border-b border-slate-800 px-3.5 py-2.5 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-rose-500/20 rounded-full flex items-center justify-center text-rose-400 border border-rose-500/30">
                  <Sparkles size={14} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-white text-xs tracking-wide">Escorts Hub Noida</h4>
                    <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[8px] px-1.5 py-0.2 rounded-full font-mono flex items-center gap-0.5">
                      <Zap size={8} /> Sonnet 5
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">24/7 Verified Concierge</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="text-slate-400 hover:text-white transition-colors p-1 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat area */}
            <div
              ref={chatAreaRef}
              className="flex-1 p-3 overflow-y-auto flex flex-col gap-3 bg-slate-950/95"
              style={{
                overscrollBehavior: 'contain',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.isBot
                      ? 'bg-slate-900 text-slate-200 rounded-tl-xs border border-slate-800 font-normal'
                      : 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white rounded-tr-xs font-semibold'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-900 text-rose-400 rounded-xl px-3 py-2 text-[11px] flex items-center gap-1 rounded-tl-xs border border-slate-800">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:0.2s]">●</span>
                    <span className="animate-bounce [animation-delay:0.4s]">●</span>
                    <span className="text-slate-400 ml-1 text-[10px]">Claude Sonnet 5 Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input area */}
            <div className="p-2.5 bg-slate-900 border-t border-slate-800 shrink-0">
              {/* Quick option pills */}
              {options.length > 0 && !isTyping && !isAwaitingPhone && (
                <div className="flex flex-wrap gap-1.5 mb-2 max-h-[75px] overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
                  {options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(opt)}
                      className="px-2.5 py-1 border border-rose-500/30 text-rose-300 hover:bg-rose-500/10 rounded-full text-[11px] font-semibold transition-colors text-left cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* Text input row */}
              <div className="flex gap-1.5">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isTyping}
                  className="flex-1 rounded-full border border-slate-800 bg-slate-950 px-3.5 py-2 text-xs text-white focus:border-rose-500 outline-none disabled:opacity-50"
                  placeholder={isAwaitingPhone ? "Enter 10-digit phone number..." : "Ask about models, rates, localities..."}
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  aria-label="Send message"
                  className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 px-3.5 py-2 text-xs font-bold text-white transition-transform hover:scale-[1.03] disabled:opacity-40 shrink-0 cursor-pointer"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SmartBot;