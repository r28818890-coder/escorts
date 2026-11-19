import { Sparkles, Heart, Clock, ShieldCheck, CheckCircle, Info, FileText, Star, UserCheck, Moon, Wine } from 'lucide-react';
import { PageData } from '@/types';

const createPage = (data: PageData): PageData => data;

export const PAGES_CONTENT: Record<string, PageData> = {
  // ==========================================
  // VIP ESCORT & COMPANION SERVICES
  // ==========================================
  'vip-hotel-outcall': createPage({
    id: 'vip-hotel-outcall',
    title: 'VIP Hotel Outcall Companions',
    subtitle: 'Direct 24/7 doorstep companion service to all luxury hotels in Noida & NCR.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: '24/7 Prompt Hotel Delivery',
        content: 'Our verified VIP escort models provide fast 20 to 30 minute arrival to luxury 4-star and 5-star hotels across Sector 18, Sector 62, Greater Noida, and Noida Expressway corridors. Every companion is 100% photo-verified with strict privacy guarantees.',
        icon: Sparkles,
        image: '/images/24-7-hotel-outcall-sector-142-noida.webp'
      },
      {
        title: 'Key Advantages',
        content: 'Enjoy stress-free luxury accompaniment in the comfort and privacy of your hotel room.',
        listItems: [
          'Direct arrival to Radisson Blu, Mosaic, Savoy Suites, and Crowne Plaza',
          'Multi-point biometric and real-time photo verification',
          'Zero prepayment required — payment settled upon mutual satisfaction in person',
          'Complete discretion and 100% privacy protection'
        ],
        icon: ShieldCheck,
        image: '/images/aarohi-vip-escorts-sector-50-noida.webp'
      }
    ]
  }),

  'russian-escorts': createPage({
    id: 'russian-escorts',
    title: 'Russian & Foreign VIP Escorts',
    subtitle: 'Elite European, Russian, and international models for hotel outcalls and dinner dates.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'International Elegance',
        content: 'Connect with elite Russian escorts and foreign companions in Noida. Charming, elegant, and sophisticated models ready to make your luxury hotel stay memorable.',
        icon: Heart,
        image: '/images/vip-russian-escorts-noida-expressway.webp'
      },
      {
        title: 'VIP Standards',
        content: 'World-class accompaniment for executive business travelers and dignitaries.',
        listItems: [
          'Verified European and Russian hostesses with authentic documentation',
          'Fluent in English with refined social dining etiquette',
          'Doorstep hotel visits across Sector 18 and Greater Noida Expressway',
          'Total client confidentiality guaranteed'
        ],
        icon: Star,
        image: '/images/foreign-models-escorts-knowledge-park-noida.webp'
      }
    ]
  }),

  'private-incall': createPage({
    id: 'private-incall',
    title: 'Private In-Call Companion Suites',
    subtitle: 'Discreet, safe, and hygienic private residential apartment in-calls.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Private Sanctuaries in Noida',
        content: 'For gentlemen seeking a quiet, secure venue away from busy hotel lobbies, our private in-call residential suites in Sector 18, Sector 50, and Sector 137 offer total peace of mind.',
        icon: ShieldCheck,
        image: '/images/independent-escorts-sector-18-noida.webp'
      },
      {
        title: 'Features & Amenities',
        content: 'Every private in-call suite is maintained to the highest hygiene and hospitality standards.',
        listItems: [
          'Private gated apartment communities with discreet visitor access',
          'Air-conditioned suites with complimentary refreshments and warm hospitality',
          'Zero advance registration tokens required',
          'Unhurried 1-hour to full-evening bookings'
        ],
        icon: UserCheck,
        image: '/images/college-girl-escorts-sector-50-noida.webp'
      }
    ]
  }),

  'dinner-dates': createPage({
    id: 'dinner-dates',
    title: 'VIP Dinner & Event Companions',
    subtitle: 'Sophisticated companions for fine dining, corporate events, and social galas.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Charming Social Accompaniment',
        content: 'Attending an executive business summit at India Expo Mart or dining at Gardens Galleria? Our articulate, well-dressed companions make every social evening delightful.',
        icon: Wine,
        image: '/images/luxury-call-girls-sector-62-noida.webp'
      }
    ]
  }),

  'celebrity-models': createPage({
    id: 'celebrity-models',
    title: 'Celebrity & Air Hostess Companions',
    subtitle: 'Elite fashion models and cabin crew hostesses for discerning VIP clients.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Top Tier Glamour',
        content: 'Experience company with high-profile fashion models, college freshers, and airline hostesses offering extraordinary charm and beauty.',
        icon: Star,
        image: '/images/air-hostess-escorts-botanical-garden-noida.webp'
      }
    ]
  }),

  'full-night-stay': createPage({
    id: 'full-night-stay',
    title: 'Full Night VIP Accompaniment',
    subtitle: 'Unhurried overnight companionship for luxury hotels and private suites.',
    type: 'guide',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Overnight Luxury Stays',
        content: 'Spend an unhurried night of warmth and conversation with your preferred companion. Overnight bookings typically span 8 to 10 hours of attentive, dedicated companionship.',
        icon: Moon,
        image: '/images/pooja-vip-escorts-sector-18-noida.webp'
      }
    ]
  }),

  // ==========================================
  // LEGAL & POLICY PAGES
  // ==========================================
  'privacy': createPage({
    id: 'privacy',
    title: 'Privacy Policy',
    subtitle: 'How we handle and protect your personal information.',
    type: 'legal',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Information Collection & Privacy',
        content: 'At Escorts Hub Noida, we collect only the minimum details required to coordinate your bookings, such as hotel location and contact preferences. This information is strictly confidential and never stored in permanent tracking databases or shared with third parties.',
        icon: ShieldCheck
      },
      {
        title: 'Data Usage & Security Protocols',
        content: [
          'To coordinate arrival via direct WhatsApp or voice helpline',
          'To ensure real-time photo verification and client safety',
          'To enforce strict 18+ adult age compliance rules',
          'Zero digital footprints — records purged after booking completion'
        ],
        icon: FileText
      }
    ]
  }),

  'terms': createPage({
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Please review our service guidelines before reserving.',
    type: 'legal',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Direct Hotel Outcall Terms',
        content: 'We operate under a 100% verified real-photo policy. Clients pay directly in cash or UPI upon in-person arrival and mutual satisfaction. If you need to reschedule, notify dispatch at least 1 hour in advance.',
        icon: Clock
      },
      {
        title: 'Safety, Age & Compliance Rules',
        content: [
          'All users and models must be strictly 18 years of age or older.',
          'Escorts Hub Noida strictly enforces mutual respect, safety, and discretion. Any aggressive or non-consensual behavior results in immediate cancellation.',
          'Zero Advance Deposit Guarantee: Never transfer booking fees or registration tokens online.'
        ],
        icon: Info
      }
    ]
  }),

  'refund': createPage({
    id: 'refund',
    title: 'Payment & Satisfaction Policy',
    subtitle: 'Clear terms on our zero-advance and right-of-refusal guarantees.',
    type: 'legal',
    heroImage: '/images/hero-hot-model-bg.webp',
    sections: [
      {
        title: 'Zero Prepayment & Right of Refusal',
        content: 'Because Escorts Hub Noida operates on a strict zero-advance cash-on-delivery model, you never risk money upfront. When your companion arrives at your hotel room, if her appearance does not match her verified photographs, you retain 100% right of refusal with zero cancellation fee.',
        icon: CheckCircle
      }
    ]
  })
};
