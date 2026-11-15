import { Sparkles, Heart, Leaf, Wind, Droplets, Smile, Clock, Star, ShieldCheck, CheckCircle, Info, FileText } from 'lucide-react';
import { PageData } from '@/types';

const createPage = (data: PageData): PageData => data;

export const PAGES_CONTENT: Record<string, PageData> = {
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
        image: '/images/escorts-sector-18-noida-riya-01.webp'
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
        image: '/images/escorts-sector-50-noida-aarohi-01.webp'
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
        image: '/images/escorts-sector-62-noida-priya-01.webp'
      }
    ]
  }),
  // ==========================================
  // SPA SERVICES
  // ==========================================
  'thai-massage': createPage({
    id: 'thai-massage',
    title: 'Thai Massage',
    subtitle: 'Traditional acupressure and assisted stretching for deep muscle relief.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'The Art of Thai Healing',
        content: 'Thai Massage is an ancient healing system combining acupressure, Indian Ayurvedic principles, and assisted yoga postures. Unlike traditional western massages, it does not involve the use of oils. Instead, you wear comfortable loose clothing while our certified therapist uses their hands, knees, legs, and feet to move you into a series of yoga-like stretches.',
        icon: Leaf,
        image: 'https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80'
      },
      {
        title: 'Key Benefits',
        content: 'Experience transformative health benefits that last long after your session is over.',
        listItems: [
          'Relieves tension headaches and chronic joint pain',
          'Improves flexibility, posture, and joint mobility',
          'Reduces back pain and muscle spasticity',
          'Stimulates blood circulation and lymphatic drainage'
        ],
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80'
      },
      {
        title: 'What to Expect',
        content: 'Your session begins with a consultation. The therapy is performed on a floor mat to allow the therapist maximum leverage for stretches. Pressure can be adjusted from gentle to firm based on your preference.',
        listItems: [
          '60, 90, or 120-minute sessions available',
          'Performed in a private, sanitized suite',
          'No oils or lotions used',
          'Loose, comfortable clothing provided'
        ],
        icon: Clock,
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'swedish-massage': createPage({
    id: 'swedish-massage',
    title: 'Swedish Massage',
    subtitle: 'Classic European relaxation using long, flowing strokes.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Ultimate Relaxation',
        content: 'Swedish Massage is the most well-known and widely practiced type of therapeutic massage. It focuses on muscle relaxation, targeting superficial muscles (rather than deep connective tissues) and increasing blood circulation. It is perfect for those new to massage or seeking deep relaxation.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
      },
      {
        title: 'Key Benefits',
        content: 'A perfect antidote to modern stress and anxiety.',
        listItems: [
          'Decreases stress hormones and anxiety',
          'Increases blood oxygen levels and circulation',
          'Relieves muscle cramping and spasms',
          'Improves sleep quality and immune system'
        ],
        icon: Sparkles,
        image: 'https://images.unsplash.com/photo-1600334089648-b5d95ce930f1?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'deep-tissue-massage': createPage({
    id: 'deep-tissue-massage',
    title: 'Deep Tissue Massage',
    subtitle: 'Targeted therapy for chronic pain and deep muscle knots.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Advanced Pain Relief',
        content: 'Deep tissue massage targets the inner layers of your muscles and connective tissues. Our therapists use slow, firm strokes and deep finger pressure to relieve chronic tension and break up scar tissue (adhesions) that form following an injury or chronic bad posture.',
        icon: ShieldCheck,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80'
      },
      {
        title: 'Ideal For',
        content: 'This therapy is specifically designed for physical issues.',
        listItems: [
          'Chronic lower back pain or neck stiffness',
          'Recovery from sports injuries',
          'Postural problems from desk work',
          'Limited mobility or repetitive strain injuries'
        ],
        icon: CheckCircle,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'aroma-therapy': createPage({
    id: 'aroma-therapy',
    title: 'Aroma Therapy',
    subtitle: 'Holistic massage enhanced with therapeutic-grade essential oils.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1608248593859-99ce64e43f11?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Scent & Sensation',
        content: 'Aromatherapy massage combines the benefits of Swedish massage with the healing properties of essential oils. As these oils are inhaled and absorbed through the skin, they interact with your limbic system, profoundly affecting your emotional state and nervous system.',
        icon: Wind,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80'
      },
      {
        title: 'Essential Oil Blends',
        content: 'We customize the oil blend based on your needs.',
        listItems: [
          'Lavender & Chamomile: For deep sleep and anxiety relief',
          'Eucalyptus & Peppermint: For respiratory health and energy',
          'Ylang-Ylang & Rose: For mood elevation and romance',
          'Rosemary & Lemon: For mental clarity and focus'
        ],
        icon: Droplets,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'balinese-massage': createPage({
    id: 'balinese-massage',
    title: 'Balinese Massage',
    subtitle: 'Ancient Indonesian healing blending gentle stretches and acupressure.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Island Serenity',
        content: 'Originating from the Indonesian island of Bali, this full-body holistic treatment combines acupressure, reflexology, aromatherapy, and skin rolling techniques. It is a deep tissue massage that uses essential oils to stimulate the flow of blood and energy.',
        icon: Smile,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'couple-massage': createPage({
    id: 'couple-massage',
    title: 'Couple Massage',
    subtitle: 'Side-by-side luxury experience for you and your partner.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1600334089648-b5d95ce930f1?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Shared Relaxation',
        content: 'Our Couple Massage takes place in a premium dual-bed private suite. You and your partner will receive massages simultaneously by two separate therapists. It is a perfect way to celebrate an anniversary, a honeymoon, or simply enjoy quality time together.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
      },
      {
        title: 'The Experience',
        content: 'Customize your shared journey.',
        listItems: [
          'Choose different massage styles (e.g., one Thai, one Swedish)',
          'Complimentary sparkling beverage or herbal tea',
          'Private, romantic suite ambiance with rose petals',
          'Ideal for couples, mothers and daughters, or best friends'
        ],
        icon: Star,
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'body-scrub': createPage({
    id: 'body-scrub',
    title: 'Body Scrub',
    subtitle: 'Revitalizing full-body exfoliation for glowing, soft skin.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Renew Your Skin',
        content: 'A body scrub acts like a facial for your whole body. We use natural exfoliants like sea salt, coffee, or brown sugar mixed with aromatic oils to slough away dead skin cells, unclog pores, and leave your skin incredibly smooth and hydrated.',
        icon: Droplets,
        image: 'https://images.unsplash.com/photo-1608248593859-99ce64e43f11?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'full-body-massage': createPage({
    id: 'full-body-massage',
    title: 'Full Body Massage',
    subtitle: 'Comprehensive head-to-toe relaxation ritual.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Complete Rejuvenation',
        content: 'Our signature Full Body Massage covers every area from your scalp to your toes. The therapist seamlessly transitions between different techniques to ensure every muscle group is relaxed, tension is released, and your energy is restored.',
        icon: Star,
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80'
      }
    ]
  }),

  'steam-bath': createPage({
    id: 'steam-bath',
    title: 'Steam Bath',
    subtitle: 'Purifying herbal steam therapy to detoxify and relax.',
    type: 'guide',
    heroImage: 'https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Deep Detoxification',
        content: 'A steam bath envelops your body in warm, moist heat. This induces sweating, which flushes out toxins, opens up pores, and clears congestion. Often combined with a massage, it is the perfect way to warm up muscles or wash away oils post-therapy.',
        icon: Wind,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80'
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
    heroImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Information Collection',
        content: 'At We Noida Escorts, we collect basic information required to coordinate your bookings, such as your contact preferences. This information is kept strictly confidential and never stored in permanent tracking databases.',
        icon: ShieldCheck
      },
      {
        title: 'Data Usage',
        content: [
          'To confirm your appointment via direct WhatsApp coordination',
          'To ensure safety protocols and direct companion verification',
          'To ensure strict 18+ adult age compliance'
        ],
        icon: FileText
      }
    ]
  }),

  'terms': createPage({
    id: 'terms',
    title: 'Terms & Conditions',
    subtitle: 'Please read these terms carefully before booking.',
    type: 'legal',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Booking & Cancellation',
        content: 'We operate under a strict photo-verification policy. You only settle payment directly upon meeting in person. If you need to reschedule or cancel, please notify the coordinator via WhatsApp at least 1 hour in advance.',
        icon: Clock
      },
      {
        title: 'Etiquette & Compliance',
        content: [
          'All users and advertisers must be strictly 18 years of age or older.',
          'We Noida Escorts strictly enforces mutual respect and discretion. Any illegal or abusive behavior results in immediate blacklisting.',
          'Verified companion service guarantee: never transfer deposits or unauthorized fees.'
        ],
        icon: Info
      }
    ]
  }),

  'refund': createPage({
    id: 'refund',
    title: 'Refund Policy',
    subtitle: 'Our policies regarding payments and cancellations.',
    type: 'legal',
    heroImage: 'https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80',
    sections: [
      {
        title: 'Service Payments',
        content: 'Payments for spa therapies are non-refundable once the service has been provided. If you cancel an advance booking at least 2 hours prior, any advance paid may be adjusted against future bookings.',
        icon: CheckCircle
      }
    ]
  })
};