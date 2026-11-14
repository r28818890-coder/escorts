import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT } from '@/config/site';
import { trackCallClick, trackWhatsAppClick } from '@/services/analytics';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col gap-2.5 items-end">
      {/* ── 1. Direct Phone Call Floating Button (Small & Clean) ── */}
      <a
        href={CONTACT.phoneHref}
        onClick={() => trackCallClick(CONTACT.phone, 'floating_call_btn')}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-[0_4px_16px_rgba(37,99,235,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative border border-white/20"
        aria-label="Direct Phone Call"
        title={`Call ${CONTACT.phoneDisplay}`}
      >
        <Phone size={18} className="group-hover:rotate-12 transition-transform duration-200" />
        <span className="sr-only">Call {CONTACT.phoneDisplay}</span>
      </a>

      {/* ── 2. WhatsApp Line 2 Floating Button ── */}
      <a
        href={CONTACT.whatsapp2Href + '?text=' + encodeURIComponent('Hello Escorts Hub Jaipur (Line 2), I would like to inquire about verified companion availability.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(CONTACT.whatsapp2, 'floating_wa_line2')}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative border border-white/30"
        aria-label="WhatsApp Line 2"
        title={`WhatsApp 2: ${CONTACT.whatsapp2Display}`}
      >
        <span className="absolute -top-1 -left-1 bg-indigo-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-xs">
          2
        </span>
        <WhatsAppIcon className="w-5 h-5" />
        <span className="sr-only">WhatsApp 2 ({CONTACT.whatsapp2Display})</span>
      </a>

      {/* ── 3. WhatsApp Line 1 Floating Button (Main Desk) ── */}
      <a
        href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent('Hello Escorts Hub Jaipur (Line 1), I would like to inquire about verified companion availability.')}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(CONTACT.whatsapp1, 'floating_wa_line1')}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 group relative border border-white/40"
        aria-label="WhatsApp Line 1"
        title={`WhatsApp 1: ${CONTACT.whatsapp1Display}`}
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <span className="absolute -top-1 -left-1 bg-rose-600 text-white text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-white shadow-xs">
          1
        </span>
        <WhatsAppIcon className="w-6 h-6" />
        <span className="sr-only">WhatsApp 1 ({CONTACT.whatsapp1Display})</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;