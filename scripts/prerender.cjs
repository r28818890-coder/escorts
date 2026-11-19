const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const DOMAIN = 'https://wenoidaescorts.com';
const BRAND = 'Escorts Hub Noida';
const PHONE = '+918218125815';
const PHONE_CLEAN = '8218125815';

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');

// ── Categories Silo ───────────────────────────────────────────
const CATEGORIES = [
  { 
    slug: 'call-girls', 
    name: 'Call Girls', 
    keyword: 'call girls and VIP escort models', 
    h1: 'Call Girls in Noida',
    title: 'Call Girls in Noida | 100% Real Photo Verified',
    desc: 'Book verified call girls in Noida with 100% real photos. Verified 24/7 hotel outcall, real photos & prompt 20-min arrival. Call or WhatsApp 8218125815.'
  },
  { 
    slug: 'vip-escorts', 
    name: 'VIP Escorts', 
    keyword: 'VIP escort models, verified luxury companions and elite independent call girls', 
    h1: 'VIP Escorts in Noida',
    title: 'VIP Escorts in Noida | Elite Models & Companions',
    desc: 'Verified VIP escorts and luxury models in Noida. Doorstep 24/7 hotel outcall, 100% real photo verification, direct outcall. Call 8218125815 now.'
  },
  { 
    slug: 'russian-escorts', 
    name: 'Russian Escorts', 
    keyword: 'Russian escorts, VIP foreign models and elite international companions', 
    h1: 'Russian Escorts in Noida',
    title: 'Russian Escorts in Noida | VIP Foreign Models & Companions',
    desc: 'Verified Russian escorts and foreign VIP models in Noida. Doorstep 24/7 hotel outcall, 100% real photos, 20-min arrival. Call 8218125815 now.'
  },
  { 
    slug: 'transsexual', 
    name: 'Transsexual', 
    keyword: 'transsexual companions, TS models and independent shemale escorts', 
    h1: 'Transsexual Escorts in Noida',
    title: 'Transsexual Escorts in Noida | Verified TS Models',
    desc: 'Verified transsexual escorts and TS models in Noida. Doorstep 24/7 hotel outcall, 100% real photo verification, direct outcall. Call 8218125815 now.'
  },
  { 
    slug: 'adult-meetings', 
    name: 'Adult Meetings', 
    keyword: 'casual adult meetings, discreet dating and VIP private encounters', 
    h1: 'Adult Meetings in Noida',
    title: 'Adult Meetings in Noida | Discreet 24/7 Encounters',
    desc: 'Discreet adult meetings and casual dating in Noida. Verified independent companions, complete privacy, fast 20-min hotel outcall. Call 8218125815.'
  },
];

// ── Noida Detail Bank (18 Prime Localities) ───────────────────
const LOCALITIES = [
  {
    slug: 'sector-18',
    name: 'Sector 18 Noida',
    metro: 'Sector 18 Metro Station Gate 2 (Blue Line)',
    landmarks: ['DLF Mall of India', 'Atta Market', 'Gardens Galleria'],
    hotels: [
      { name: 'Radisson Blu Hotel Noida', stars: '5-Star Luxury' },
      { name: 'Mosaic Hotel Noida', stars: '4-Star Boutique' }
    ],
    driveTime: '0 min (Central Epicenter)',
    clientProfile: 'High-net-worth corporate executives, luxury shoppers, and upscale hotel guests seeking refined companionship.',
    adjacent: [
      { slug: 'sector-18-film-city', name: 'Sector 16 & Film City' },
      { slug: 'botanical-garden', name: 'Botanical Garden' },
      { slug: 'sector-50', name: 'Sector 50 Noida' }
    ],
    specialty: 'commercial nightlife, fine dining at Gardens Galleria, and rapid 15-minute 5-star hotel outcall visits'
  },
  {
    slug: 'sector-62',
    name: 'Sector 62 Noida',
    metro: 'Noida Electronic City Metro Station Gate 1 (Blue Line)',
    landmarks: ['Fortis Hospital Sector 62', 'Stellar IT Park', 'Symbiosis Law School'],
    hotels: [
      { name: 'Park Ascent Hotel', stars: '4-Star Executive' },
      { name: 'Ginger Hotel Sector 62', stars: '3-Star Deluxe' }
    ],
    driveTime: '12 min drive from Sector 18',
    clientProfile: 'IT directors, software architects, corporate trainers, and multinational delegates visiting tech campuses.',
    adjacent: [
      { slug: 'indirapuram', name: 'Indirapuram Ghaziabad' },
      { slug: 'sector-50', name: 'Sector 50 Noida' },
      { slug: 'sector-76-78', name: 'Sector 76 & 78 Noida' }
    ],
    specialty: 'software campus business executives, institutional summits, and quiet discreet hotel room visits'
  },
  {
    slug: 'sector-50',
    name: 'Sector 50 Noida',
    metro: 'Sector 50 Metro Station Gate 2 (Aqua Line)',
    landmarks: ['Central Market Sector 50', 'Wave City Center', 'Ramagya Sports Complex'],
    hotels: [
      { name: 'Fortune Inn Grazia Sector 27', stars: '4-Star Business' },
      { name: 'The Fern Residency Noida', stars: '4-Star Deluxe' }
    ],
    driveTime: '8 min drive from Sector 18',
    clientProfile: 'Upscale residential apartment residents, local entrepreneurs, and visiting trade delegates.',
    adjacent: [
      { slug: 'sector-18', name: 'Sector 18 Noida' },
      { slug: 'sector-76-78', name: 'Sector 76 & 78 Noida' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'peaceful residential avenues, elite clubhouses, and doorstep executive companion visits'
  },
  {
    slug: 'sector-137',
    name: 'Sector 137 Noida',
    metro: 'Sector 137 Metro Station Gate 1 (Aqua Line)',
    landmarks: ['Felix Hospital', 'Paras Tierea Boulevard', 'Noida Expressway Green Belt'],
    hotels: [
      { name: 'Sandal Suites by Lemon Tree', stars: '4-Star Serviced Suites' },
      { name: 'Regenta Central Noida', stars: '4-Star Business' }
    ],
    driveTime: '14 min drive from Sector 18',
    clientProfile: 'Expressway IT professionals, pharmaceutical executives, and corporate apartment residents.',
    adjacent: [
      { slug: 'sector-128', name: 'Sector 128 Noida' },
      { slug: 'sector-142', name: 'Sector 142 Noida' },
      { slug: 'sector-76-78', name: 'Sector 76 & 78 Noida' }
    ],
    specialty: 'modern expressway condominiums, corporate serviced residences, and fast outcalls along the corridor'
  },
  {
    slug: 'sector-18-film-city',
    name: 'Sector 16 & Film City',
    metro: 'Sector 16 Metro Station Gate 2 (Blue Line)',
    landmarks: ['Film City Media Studios', 'World Trade Tower (WTT)', 'DND Flyway Toll Plaza'],
    hotels: [
      { name: 'Savoy Suites Noida', stars: '4-Star Luxury Serviced' },
      { name: 'Marigold Sarovar Portico', stars: '4-Star Deluxe' }
    ],
    driveTime: '4 min drive from Sector 18',
    clientProfile: 'Broadcast journalists, entertainment producers, media executives, and corporate leaders.',
    adjacent: [
      { slug: 'sector-18', name: 'Sector 18 Noida' },
      { slug: 'mayur-vihar', name: 'Mayur Vihar' },
      { slug: 'botanical-garden', name: 'Botanical Garden' }
    ],
    specialty: 'national news studios, television production crews, executive dining dates, and VIP meetings'
  },
  {
    slug: 'sector-76-78',
    name: 'Sector 76 & 78 Noida',
    metro: 'Sector 76 Metro Station Gate 2 (Aqua Line)',
    landmarks: ['Silicon City High-Rise', 'Mahagun Moderne Plaza', 'Amrapali Silicon Market'],
    hotels: [
      { name: 'Radisson Noida Sector 55', stars: '4-Star Business' },
      { name: 'PK Boutique Hotel Sector 72', stars: '3-Star Deluxe' }
    ],
    driveTime: '10 min drive from Sector 18',
    clientProfile: 'Tech startup leaders, corporate consultants, and young professionals in luxury towers.',
    adjacent: [
      { slug: 'sector-50', name: 'Sector 50 Noida' },
      { slug: 'sector-137', name: 'Sector 137 Noida' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'rapidly expanding residential townships, vibrant neighborhood cafes, and discreet private visits'
  },
  {
    slug: 'sector-128',
    name: 'Sector 128 Noida',
    metro: 'Okhla Bird Sanctuary / Kalindi Kunj Metro Gate 1 (Magenta Line)',
    landmarks: ['Jaypee Wish Town', 'Jaypee Multi-Specialty Hospital', 'Sultanpur Expressway Belt'],
    hotels: [
      { name: 'Jaypee Greens Golf & Spa Resort', stars: '5-Star Golf Retreat' },
      { name: 'Treebo Trend Sector 128', stars: '3-Star Deluxe' }
    ],
    driveTime: '12 min drive from Sector 18',
    clientProfile: 'Golf club members, medical tourism families, luxury villa owners, and executive delegates.',
    adjacent: [
      { slug: 'sector-137', name: 'Sector 137 Noida' },
      { slug: 'sector-142', name: 'Sector 142 Noida' },
      { slug: 'botanical-garden', name: 'Botanical Garden' }
    ],
    specialty: 'gated golf course villas, ultra-luxury suites, serene landscaped environs, and utmost privacy'
  },
  {
    slug: 'sector-142',
    name: 'Sector 142 Noida',
    metro: 'Sector 142 Metro Station Gate 1 (Aqua Line)',
    landmarks: ['Advant Navis Business Park', 'KPMG Global Campus', 'Oxygen IT SEZ Park'],
    hotels: [
      { name: 'Sandal Suites Serviced Residences', stars: '4-Star Luxury' },
      { name: 'Golden Tulip Expressway', stars: '4-Star Executive' }
    ],
    driveTime: '16 min drive from Sector 18',
    clientProfile: 'Multinational software developers, global audit directors, and corporate project teams.',
    adjacent: [
      { slug: 'sector-137', name: 'Sector 137 Noida' },
      { slug: 'sector-128', name: 'Sector 128 Noida' },
      { slug: 'pari-chowk', name: 'Pari Chowk Greater Noida' }
    ],
    specialty: 'multinational IT office parks, high-end pubs at Advant Navis, and evening hotel rendezvous'
  },
  {
    slug: 'pari-chowk',
    name: 'Pari Chowk Greater Noida',
    metro: 'Pari Chowk Metro Station Gate 2 (Aqua Line)',
    landmarks: ['Alpha 1 Commercial Complex', 'Ansal Plaza Mall', 'The Grand Venice Mall'],
    hotels: [
      { name: 'Crowne Plaza Greater Noida', stars: '5-Star Luxury' },
      { name: 'Radisson Blu Hotel Greater Noida', stars: '5-Star International' }
    ],
    driveTime: '22 min drive from Sector 18',
    clientProfile: 'Industrialists, foreign automotive delegates, trade show exhibitors, and university dignitaries.',
    adjacent: [
      { slug: 'knowledge-park', name: 'Knowledge Park Greater Noida' },
      { slug: 'noida-extension', name: 'Noida Extension' },
      { slug: 'sector-142', name: 'Sector 142 Noida' }
    ],
    specialty: 'grand gateway to Greater Noida, upscale resort hotels, and international trade fair visitors'
  },
  {
    slug: 'noida-extension',
    name: 'Noida Extension (Gr Noida West)',
    metro: 'Sector 52 Metro Station Gate 3 (connecting Blue Line to Gaur City)',
    landmarks: ['Gaur City Mall', 'Char Murti Chowk', 'Kisan Chowk Commercial Belt'],
    hotels: [
      { name: 'The Gaurs Sarovar Portico', stars: '4-Star Business' },
      { name: 'Hotel Hyphen Gaur City', stars: '3-Star Deluxe' }
    ],
    driveTime: '15 min drive from Sector 18',
    clientProfile: 'Young tech entrepreneurs, residential township residents, and weekend leisure travelers.',
    adjacent: [
      { slug: 'crossings-republik', name: 'Crossings Republik' },
      { slug: 'pari-chowk', name: 'Pari Chowk' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'sprawling residential skyscrapers, bustling retail avenues, and convenient evening outcalls'
  },
  {
    slug: 'knowledge-park',
    name: 'Knowledge Park Greater Noida',
    metro: 'Knowledge Park II Metro Station Gate 1 (Aqua Line)',
    landmarks: ['India Expo Mart & Centre', 'Galgotias University Boulevard', 'Sharda University Campus'],
    hotels: [
      { name: 'Crowne Plaza Surajpur', stars: '5-Star Convention' },
      { name: 'Savoy Suites Greater Noida', stars: '4-Star Serviced' }
    ],
    driveTime: '25 min drive from Sector 18',
    clientProfile: 'International expo keynote speakers, trade delegates, academic researchers, and exhibitors.',
    adjacent: [
      { slug: 'pari-chowk', name: 'Pari Chowk Greater Noida' },
      { slug: 'sector-142', name: 'Sector 142 Noida' },
      { slug: 'sector-128', name: 'Sector 128 Noida' }
    ],
    specialty: 'global trade fairs at India Expo Mart, sprawling academic estates, and serene resort retreats'
  },
  {
    slug: 'indirapuram',
    name: 'Indirapuram Ghaziabad',
    metro: 'Vaishali Metro Station Gate 1 (Blue Line / 5 min cab)',
    landmarks: ['Shipra Mall', 'Habitat Centre Indirapuram', 'Swarna Jayanti Park'],
    hotels: [
      { name: 'Country Inn & Suites Sahibabad', stars: '5-Star Deluxe' },
      { name: 'Hotel Maiden Residency', stars: '3-Star Boutique' }
    ],
    driveTime: '12 min drive from Sector 18',
    clientProfile: 'NCR business traders, retail entrepreneurs, and upscale Ghaziabad condominium owners.',
    adjacent: [
      { slug: 'vaishali', name: 'Vaishali Ghaziabad' },
      { slug: 'vasundhara', name: 'Vasundhara Ghaziabad' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'bustling commercial plazas, Trans-Hindon residential luxury, and prompt cross-border outcall visits'
  },
  {
    slug: 'vaishali',
    name: 'Vaishali Ghaziabad',
    metro: 'Vaishali Metro Station Gate 2 (Blue Line Terminus)',
    landmarks: ['Max Super Speciality Hospital Vaishali', 'Shopprix Mall', 'Mahagun Metro Mall'],
    hotels: [
      { name: 'Radisson Blu Kaushambi', stars: '5-Star Business' },
      { name: 'Fortune Inn Grazia', stars: '4-Star Corporate' }
    ],
    driveTime: '14 min drive from Sector 18',
    clientProfile: 'Visiting medical consultants, retail executives, and Delhi-Noida transit business travelers.',
    adjacent: [
      { slug: 'indirapuram', name: 'Indirapuram' },
      { slug: 'kaushambi', name: 'Kaushambi' },
      { slug: 'vasundhara', name: 'Vasundhara' }
    ],
    specialty: 'direct Delhi Blue Line connectivity, major medical healthcare hubs, and boutique hotel outcalls'
  },
  {
    slug: 'vasundhara',
    name: 'Vasundhara Ghaziabad',
    metro: 'Mohan Nagar Metro Station Gate 2 (Red Line) & Vaishali link',
    landmarks: ['Mewar Institute of Management', 'Sector 10 Vasundhara Market', 'Olive County'],
    hotels: [
      { name: 'Golden Tulip Vasundhara', stars: '4-Star Deluxe' },
      { name: 'Clark Greens Hotel', stars: '3-Star Business' }
    ],
    driveTime: '16 min drive from Sector 18',
    clientProfile: 'Corporate training directors, small business owners, and residential township executives.',
    adjacent: [
      { slug: 'indirapuram', name: 'Indirapuram' },
      { slug: 'vaishali', name: 'Vaishali' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'quiet residential sectors, institutional campuses, and convenient doorstep companion visits'
  },
  {
    slug: 'crossings-republik',
    name: 'Crossings Republik',
    metro: 'Noida Electronic City Gate 2 (via NH-24 / 10 min)',
    landmarks: ['NH-24 Expressway Corridor', 'ABES Engineering Campus', 'Panchsheel Wellington Plaza'],
    hotels: [
      { name: 'Mahagun Sarovar Portico', stars: '4-Star Deluxe' },
      { name: 'Hotel Royal Palace NH-24', stars: '3-Star Executive' }
    ],
    driveTime: '18 min drive from Sector 18',
    clientProfile: 'Interstate highway travelers, logistics directors, and sub-city condominium residents.',
    adjacent: [
      { slug: 'noida-extension', name: 'Noida Extension' },
      { slug: 'indirapuram', name: 'Indirapuram' },
      { slug: 'sector-62', name: 'Sector 62 Noida' }
    ],
    specialty: 'modern sub-city towers along Delhi-Meerut Expressway NH-24 with straightforward highway access'
  },
  {
    slug: 'kaushambi',
    name: 'Kaushambi',
    metro: 'Kaushambi Metro Station Gate 1 (Blue Line)',
    landmarks: ['Anand Vihar ISBT Border', 'Wave Cinemas Kaushambi', 'Pacific Mall Trans-Hindon'],
    hotels: [
      { name: 'Radisson Blu Kaushambi Delhi NCR', stars: '5-Star Luxury' },
      { name: 'Hotel The Raso Kaushambi', stars: '3-Star Deluxe' }
    ],
    driveTime: '15 min drive from Sector 18',
    clientProfile: 'Delhi-Noida transit passengers, interstate business traders, and luxury shoppers.',
    adjacent: [
      { slug: 'vaishali', name: 'Vaishali' },
      { slug: 'mayur-vihar', name: 'Mayur Vihar' },
      { slug: 'sector-18-film-city', name: 'Sector 16 & Film City' }
    ],
    specialty: 'border crossing between East Delhi and Ghaziabad, Anand Vihar transit, and 5-star Radisson outcalls'
  },
  {
    slug: 'mayur-vihar',
    name: 'Mayur Vihar',
    metro: 'Mayur Vihar Phase 1 Metro Station Gate 1 (Pink & Blue Line interchange)',
    landmarks: ['DND Flyway Toll Border', 'Chilla Regulator Green', 'Star City Mall'],
    hotels: [
      { name: 'Crowne Plaza New Delhi Mayur Vihar', stars: '5-Star International' },
      { name: 'Holiday Inn Mayur Vihar', stars: '4-Star Corporate' }
    ],
    driveTime: '8 min drive from Sector 18',
    clientProfile: 'Delhi corporate leaders visiting Noida offices, embassy officials, and affluent travelers.',
    adjacent: [
      { slug: 'sector-18-film-city', name: 'Sector 16 & Film City' },
      { slug: 'sector-18', name: 'Sector 18 Noida' },
      { slug: 'kaushambi', name: 'Kaushambi' }
    ],
    specialty: 'prime DND corridor linking New Delhi to Noida with swift 5-star hotel companion dispatch'
  },
  {
    slug: 'botanical-garden',
    name: 'Botanical Garden (Sector 37)',
    metro: 'Botanical Garden Metro Station Gate 2 (Blue & Magenta Mega Interchange)',
    landmarks: ['Amity University Campus (Sector 125)', 'Noida Golf Course', 'Sector 37 Commercial Complex'],
    hotels: [
      { name: 'Radisson Blu Hotel Noida', stars: '5-Star Premier' },
      { name: 'Sandal Suites Executive', stars: '4-Star Serviced' }
    ],
    driveTime: '5 min drive from Sector 18',
    clientProfile: 'Metro commuters, Golf course members, university visiting lecturers, and executive guests.',
    adjacent: [
      { slug: 'sector-18', name: 'Sector 18 Noida' },
      { slug: 'sector-18-film-city', name: 'Sector 16 & Film City' },
      { slug: 'sector-128', name: 'Sector 128 Noida' }
    ],
    specialty: 'major metro transit hub, Amity University institutional belt, and quick access to Central Noida'
  }
];

// Helper to construct unique, rich 850-1,100 word content for locality pages
function buildLocalityHtml(cat, loc) {
  const isCallGirl = cat.slug === 'call-girls';
  const primaryKw = isCallGirl 
    ? (loc.slug === 'sector-62' ? `call girls in ${loc.name.toLowerCase()}` : `escorts in ${loc.name.toLowerCase()}`)
    : `${cat.name.toLowerCase()} in ${loc.name.toLowerCase()}`;
  
  const h1Text = isCallGirl
    ? (loc.slug === 'sector-62' ? `Call Girls in ${loc.name}` : `Escorts in ${loc.name}`)
    : `${cat.name} in ${loc.name}`;

  return `
    <article class="locality-content space-y-8 text-slate-700 leading-relaxed text-sm">
      <section class="overview-box bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h2 class="text-xl font-black text-slate-900 mb-3">Overview: Verified Companions &amp; Outcall Services in ${loc.name}</h2>
        <p class="mb-3">
          Located in the thriving Gautam Buddha Nagar district, <strong>${loc.name}</strong> represents one of the National Capital Region's most strategic zones for business, upscale residences, and executive hospitality. Whether you are staying for a corporate conference, enjoying an evening date near ${loc.landmarks[0]}, or unwinding in a luxury suite after a day of meetings, finding 100% verified, discreet adult companionship should be smooth, safe, and transparent.
        </p>
        <p>
          At <strong>${BRAND}</strong>, we provide exclusive, authentic ${cat.keyword} in ${loc.name} with strict direct hotel outcall terms. Our models and hostesses undergo rigorous real-photo matching and identity authentication, guaranteeing that the companion who arrives at your doorstep matches her profile photographs exactly.
        </p>
      </section>

      <section class="transit-box bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-black text-slate-900 mb-3">Transit &amp; Key Landmarks in ${loc.name}</h3>
        <p class="mb-3">
          Seamless navigation is essential for prompt companion dispatch. Here are the essential geographic reference points for ${loc.name}:
        </p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li><strong>Nearest Metro Station:</strong> ${loc.metro} provides effortless connectivity for rapid outcalls.</li>
          <li><strong>Prominent Local Landmarks:</strong> ${loc.landmarks.join(', ')} serve as prominent urban waypoints.</li>
          <li><strong>Drive Time from Sector 18:</strong> Approximately ${loc.driveTime}, allowing verified models to reach your hotel room within 15 to 25 minutes of confirmation.</li>
          <li><strong>Local Urban Profile:</strong> Known for ${loc.specialty}.</li>
        </ul>
        <p>
          Our field dispatch coordinators maintain real-time contact with drivers across Gautam Buddha Nagar to ensure punctual arrival without traffic disruptions.
        </p>
      </section>

      <section class="hotel-box bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-black text-slate-900 mb-3">Recommended 4-Star &amp; 5-Star Hotels for Outcalls in ${loc.name}</h3>
        <p class="mb-3">
          Privacy, security, and discreet guest reception are vital for an unhurried companionship experience. In and around ${loc.name}, our companions routinely fulfill 24/7 outcall visits to premier hospitality destinations, including:
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          ${loc.hotels.map(h => `
            <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
              <h4 class="font-bold text-slate-900 text-sm">${h.name} (${h.stars})</h4>
              <p class="text-xs text-slate-600 mt-1">Excellent guest discretion, swift elevator access, and accommodating visitor policies with standard ID verification.</p>
            </div>
          `).join('')}
        </div>
        <p class="text-xs text-slate-500">
          Note: In accordance with hospitality norms across Uttar Pradesh and the NCR, registered adult guests are advised to carry a government-approved photo ID (Aadhaar or Passport) to ensure effortless check-in.
        </p>
      </section>

      <section class="client-box bg-slate-50 border border-slate-200 rounded-2xl p-6">
        <h3 class="text-lg font-black text-slate-900 mb-3">Clientele Profile &amp; Custom Experiences in ${loc.name}</h3>
        <p class="mb-3">
          <strong>Typical Visitors &amp; Residents:</strong> ${loc.clientProfile}
        </p>
        <p class="mb-3">
          Whether you require an elegant dinner companion for an evening at an upscale bistro, a charming partner for corporate networking, or an unhurried private overnight rendezvous in your luxury suite, our roster features independent models, corporate hostesses, air hostess companions, and charming college graduates tailored to your preferences.
        </p>
        <p>
          Each booking is handled with utmost confidentiality. We do not store telephone records or market to client numbers, guaranteeing that your personal affairs remain entirely private.
        </p>
      </section>

      <section class="anti-scam-box bg-slate-900 text-white rounded-2xl p-6">
        <h3 class="text-lg font-black text-amber-400 mb-2">Verified Photos &amp; Privacy Protocol</h3>
        <p class="text-xs sm:text-sm text-slate-300 mb-3 leading-relaxed">
          Online classified portals often publish fake stock pictures or unverified profiles. At ${BRAND}, we operate with a <strong>100% Real Photo Verification Guarantee</strong>. Every model is verified in advance with genuine photos. You welcome your chosen companion in person upon her arrival at your hotel room door.
        </p>
        <div class="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-3 py-1.5 rounded-full">
          ✓ Verified Doorstep Physical Arrival • Direct Outcall • 100% Discretion
        </div>
      </section>

      <section class="adjacent-mesh-box bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-black text-slate-900 mb-3">Explore Nearby Noida &amp; NCR Sectors</h3>
        <p class="text-xs text-slate-600 mb-3">
          Need companions in neighboring sectors? Our network seamlessly covers all adjacent NCR localities:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          ${loc.adjacent.map(adj => `
            <a href="/call-girls/${adj.slug}" class="p-3 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 transition-all text-center block text-xs font-bold text-slate-900 hover:text-amber-700">
              ${adj.name} Escorts →
            </a>
          `).join('')}
        </div>
      </section>

      <section class="keywords-cloud-box bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-black text-slate-900 mb-2">Popular Searches &amp; Similar Keywords in ${loc.name}</h3>
        <p class="text-xs text-slate-500 mb-4">Frequently searched queries, hotel outcall corridors, companion types, and verified payment terms:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-2 uppercase text-[10px] text-amber-700">Core Searches</h4>
            <ul class="space-y-1 text-slate-600 text-[11px]">
              <li>• Escorts in ${loc.name}</li>
              <li>• Call Girls in ${loc.name}</li>
              <li>• ${loc.name} Escort Service</li>
              <li>• ${loc.name} Call Girl Number</li>
              <li>• Female Escorts ${loc.name}</li>
            </ul>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-2 uppercase text-[10px] text-purple-700">Companion Types</h4>
            <ul class="space-y-1 text-slate-600 text-[11px]">
              <li>• Independent Escorts in ${loc.name}</li>
              <li>• Russian Escorts in ${loc.name}</li>
              <li>• VIP Companions ${loc.name}</li>
              <li>• College Girl Call Girls ${loc.name}</li>
              <li>• High Profile Models ${loc.name}</li>
            </ul>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-2 uppercase text-[10px] text-indigo-700">Hotels &amp; Landmarks</h4>
            <ul class="space-y-1 text-slate-600 text-[11px]">
              <li>• Hotel Outcall in ${loc.name}</li>
              <li>• Escorts near ${loc.landmarks[0]}</li>
              <li>• ${loc.hotels[0].name} Outcall</li>
              <li>• Call Girls near Metro Gate</li>
              <li>• 24/7 Room Service Escorts</li>
            </ul>
          </div>
          <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-2 uppercase text-[10px] text-emerald-700">Safety &amp; Pricing</h4>
            <ul class="space-y-1 text-slate-600 text-[11px]">
              <li>• Cash on Delivery Escorts</li>
              <li>• Zero Advance Call Girls</li>
              <li>• No Advance Payment ${loc.name}</li>
              <li>• 100% Real Photo Escorts</li>
              <li>• Cheap Call Girls ${loc.name}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="faq-box bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h3 class="text-lg font-black text-slate-900 mb-4">Frequently Asked Questions in ${loc.name}</h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-1">Q1: How quickly can a verified companion reach my hotel in ${loc.name}?</h4>
            <p class="text-slate-600">A: Because our companions are stationed locally across Gautam Buddha Nagar, average outcall arrival time to hotels in ${loc.name} is between 15 to 25 minutes after WhatsApp confirmation.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-1">Q2: Do I have to pay any advance deposit before meeting?</h4>
            <p class="text-slate-600">A: No. We strictly prohibit advance payments. You settle the service amount in cash directly to your companion only after she arrives in person at your door.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-1">Q3: Which hotels in ${loc.name} are safest for guest visits?</h4>
            <p class="text-slate-600">A: Properties like ${loc.hotels[0].name} and ${loc.hotels[1].name} provide professional, secure environments that respect guest privacy and follow standard visitor entry procedures.</p>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 class="font-bold text-slate-900 mb-1">Q4: How do I book an outcall session in ${loc.name}?</h4>
            <p class="text-slate-600">A: Simply select your preferred profile from our directory, click the WhatsApp button, or call our dispatcher directly at +91 8218125815 with your hotel details.</p>
          </div>
        </div>
      </section>

      <section class="cta-box p-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-base sm:text-lg font-black">Ready to Book in ${loc.name}?</h4>
          <p class="text-xs text-slate-900 font-medium">100% real photo verified models • 20-min hotel doorstep outcall • Complete privacy.</p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <a href="tel:+918218125815" class="px-4 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-slate-900 transition-all">
            Call 8218125815
          </a>
          <a href="https://wa.me/918218125815?text=${encodeURIComponent(`Hello Escorts Hub Noida! I want to book a verified companion in ${loc.name}.`)}" class="px-4 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#20bd5a] transition-all">
            WhatsApp
          </a>
        </div>
      </section>
    </article>
  `;
}

const CURRENT_DATE_ISO = new Date().toISOString();

// ── Build Routes Collection ───────────────────────────────────
const subRoutes = [];

// 0. Homepage
subRoutes.push({
  path: '',
  title: 'Escorts in Noida 🟢 100% Real Photo | Call Girls in Noida 【Zero Advance COD】',
  desc: '⚡ Verified Escorts in Noida & Call Girls with 100% genuine photos. 20-30 min doorstep hotel outcall across Sector 18, 62 & Expressway. Cash on Delivery (COD) - Zero advance token! Call or WhatsApp +91 8218125815.',
  h1: 'Escorts in Noida',
  h2: 'Doorstep 24/7 verified VIP hotel outcalls near DLF Mall of India & Noida Expressway',
  isHome: true
});

// 1. Category Hubs (5 Silos)
CATEGORIES.forEach((cat) => {
  subRoutes.push({
    path: cat.slug,
    title: `${cat.name} in Noida 🟢 100% Real Photo 【Zero Advance COD】`,
    desc: `⚡ Book verified ${cat.name.toLowerCase()} in Noida with 100% real photos. 24/7 doorstep hotel outcall across all 18 sectors. Cash on Delivery - Zero advance token! Call 8218125815.`,
    h1: cat.h1,
    h2: `Verified 24/7 Doorstep Service Across All 18 Noida & NCR Sectors`,
    locName: 'Noida & NCR',
    catName: cat.name,
    keyword: cat.keyword,
    landmark: 'all 18 prime sectors across Central Noida, Expressway & Greater Noida',
    isCategoryHub: true,
    catObj: cat
  });
});

// 2. Category × Locality Combinations (90 Hyperlocal Landing Pages)
CATEGORIES.forEach((cat) => {
  LOCALITIES.forEach((loc) => {
    const isCallGirl = cat.slug === 'call-girls';
    const primaryKw = isCallGirl 
      ? (loc.slug === 'sector-62' ? `call girls in ${loc.name.toLowerCase()}` : `escorts in ${loc.name.toLowerCase()}`)
      : `${cat.name.toLowerCase()} in ${loc.name.toLowerCase()}`;
    
    const h1Text = isCallGirl
      ? (loc.slug === 'sector-62' ? `Call Girls in ${loc.name}` : `Escorts in ${loc.name}`)
      : `${cat.name} in ${loc.name}`;

    const pageTitle = isCallGirl
      ? `${h1Text} 🟢 100% Real Photo 【Zero Advance COD】`
      : `${cat.name} in ${loc.name} 🟢 Real Photo 【COD】`;

    const metaDesc = `⚡ Verified ${primaryKw} with 100% genuine photos. 20-min direct hotel outcall near ${loc.landmarks[0]}, ${loc.name}. Cash on Delivery (COD) - Zero advance! Call 8218125815 now.`.slice(0, 160);

    subRoutes.push({
      path: `${cat.slug}/${loc.slug}`,
      title: pageTitle,
      desc: metaDesc,
      h1: h1Text,
      h2: `100% Real Photo Verified Profiles & 20-Min Outcall near ${loc.landmarks[0]}`,
      locName: `${loc.name}, Noida NCR`,
      catName: cat.name,
      keyword: cat.keyword,
      landmark: loc.landmarks.join(', '),
      locObj: loc,
      catObj: cat,
      isLocalityPage: true
    });
  });
});

// 2b. Dedicated Hyperlocal Area Hubs (/area/:slug)
LOCALITIES.forEach((loc) => {
  subRoutes.push({
    path: `area/${loc.slug}`,
    title: `${loc.name} Escorts & Call Girls 🟢 100% Real Photo 【Zero Advance】`,
    desc: `⚡ Comprehensive 2026 local guide for verified escorts & call girls in ${loc.name}. 15-20 min hotel outcall, luxury hotel guide, genuine photos & COD payment. Call 8218125815.`.slice(0, 160),
    h1: `${loc.name} Escorts & Outcall Companion Guide`,
    h2: `100% Verified Profiles, 4-Star & 5-Star Hotel Guide & 20-Min Arrival near ${loc.landmarks[0]}`,
    locName: `${loc.name}, Noida NCR`,
    catName: 'Area Guide',
    keyword: `escorts in ${loc.name.toLowerCase()}`,
    landmark: loc.landmarks.join(', '),
    locObj: loc,
    catObj: { slug: 'call-girls', name: 'Call Girls', keyword: 'call girls' },
    isLocalityPage: true,
    isDedicatedAreaPage: true
  });
});

// 3. Info & Legal Pages (No jaipur-areas, added booking)
const INFO_PAGES = [
  { 
    path: 'booking', 
    title: 'Fast 24/7 Outcall Booking in Noida | Escorts Hub', 
    desc: 'Book verified outcall escorts in Noida with complete privacy. Fast 20-min hotel arrival in Sector 18, 62 & Expressway. Call or WhatsApp 8218125815 now.', 
    h1: 'Fast 24/7 Companion Booking in Noida', 
    h2: 'Instant 20-Minute Hotel Outcall Dispatch Across All 18 Noida Sectors' 
  },
  { 
    path: 'safety-guide', 
    title: 'Safety Guidelines & Scam Prevention | Escorts Hub', 
    desc: 'Mandatory scam prevention tips, safety guidelines, and direct booking safety protocols in Noida & NCR with complete privacy. Call 8218125815.', 
    h1: 'Safety Guidelines & Scam Prevention', 
    h2: 'Verified 24/7 Dispatch & 100% Discreet Verification Protocols in Noida' 
  },
  { 
    path: 'noida-areas', 
    title: 'Noida & NCR Sectors Directory | 18 Localities Index', 
    desc: 'Browse verified escort services, call girls, and companion hubs across all 18 localities in Noida, Greater Noida & Ghaziabad. Call 8218125815.', 
    h1: 'Noida & NCR Localities Directory', 
    h2: 'Hyperlocal Escort Service & VIP Companions Coverage Across 18 Sectors' 
  },
  { 
    path: 'about', 
    title: 'About Escorts Hub Noida | #1 Verified VIP Directory', 
    desc: 'Learn about Escorts Hub Noida, the premier verified adult classifieds and companion directory in Noida and surrounding NCR. 100% real photos.', 
    h1: 'About Escorts Hub Noida', 
    h2: 'NCR Premier Verified Companion Network with Strict Photo Verification Policy' 
  },
  { 
    path: 'contact', 
    title: 'Contact Escorts Hub Noida | 24/7 Helpline & Desk', 
    desc: 'Get in touch with Escorts Hub Noida 24/7 support for outcall bookings, advertiser onboarding, and companion inquiries. Call or WhatsApp 8218125815.', 
    h1: 'Contact Escorts Hub Noida', 
    h2: '24/7 Direct WhatsApp & Phone Helpline: +91 8218125815' 
  },
  { 
    path: 'faq', 
    title: 'Frequently Asked Questions | Escorts Hub Noida', 
    desc: 'Common questions about escort services, outcall hotel visits, pricing, payment safety, and discretion in Noida. Verified companion payment. Call 8218125815.', 
    h1: 'Frequently Asked Questions (FAQ)', 
    h2: 'Clear, Transparent Answers on Booking, Hotel Outcalls & Discretion' 
  },
  { 
    path: 'terms', 
    title: 'Terms and Conditions (18+) | Escorts Hub Noida', 
    desc: 'Terms of Service, age verification (18+), and advertising guidelines for Escorts Hub Noida. Read our user policies and safety standards.', 
    h1: 'Terms and Conditions', 
    h2: 'Strict 18+ Age Compliance & Terms of Use for Escorts Hub Noida' 
  },
  { 
    path: 'privacy', 
    title: 'Privacy Policy & Data Security | Escorts Hub Noida', 
    desc: 'Privacy Notice and data protection guidelines ensuring 100% confidentiality, zero tracking, and safe browsing for Escorts Hub Noida users.', 
    h1: 'Privacy Policy', 
    h2: '100% Client Confidentiality & Personal Data Protection' 
  },
  { 
    path: 'refund', 
    title: 'Refund & Cancellation Policy | Escorts Hub Noida', 
    desc: 'Read the official refund and cancellation policy of Escorts Hub Noida. Because we operate on direct hotel outcall, you have zero risk.', 
    h1: 'Refund & Cancellation Policy', 
    h2: 'Transparent Right of Refusal at the Door with Full Discretion Guarantee' 
  },
];

subRoutes.push(...INFO_PAGES);

// Dedicated Master Pillar Page (Price List & Booking Guide)
const MASTER_SEO_ROUTES = [
  {
    path: 'noida-escorts',
    title: 'Noida Escorts Rate List 2026 🟢 【Zero Advance COD】 Verified Outcall',
    desc: '⚡ Official 2026 Noida escorts price list and step-by-step hotel outcall booking guide. Transparent per-hour rates, zero advance, 20-min arrival in Noida & NCR.',
    h1: 'Noida Escorts Price List & Booking Guide (2026)',
    h2: 'Transparent Pricing Tiers, Exact Inclusions & 4-Step Outcall Sequence',
    locName: 'Noida',
    keyword: 'noida escorts price list and booking guide',
    landmark: 'Sector 18, Sector 62, Expressway and Radisson Blu Hotel Noida',
  }
];

subRoutes.push(...MASTER_SEO_ROUTES);

// 4. Blog Posts from blogData.cjs
const { BLOG_POSTS } = require('./blogData.cjs');

// Blog Hub
subRoutes.push({
  path: 'blog',
  title: 'Noida Escort Guides & Insights | Escorts Hub',
  desc: 'Read comprehensive guides, safety protocols, hotel outcall recommendations, and advice for verified companions in Noida & NCR. Call 8218125815.',
  h1: 'Noida Companion Insights & Guides',
  h2: 'Expert Guides, Anti-Scam Protocols & 5-Star Hotel Outcall Recommendations',
  locName: 'Noida & NCR',
  catName: 'Blog',
  isBlogHub: true
});

// Individual Blog Posts (6 required)
BLOG_POSTS.forEach((post) => {
  subRoutes.push({
    path: `blog/${post.slug}`,
    title: `${post.metaTitle.slice(0, 48)} 🟢 Verified`,
    desc: post.metaDescription.slice(0, 158),
    h1: post.title,
    h2: post.excerpt,
    catName: post.category,
    locName: 'Noida',
    isArticle: true,
    articleContent: post.content,
    datePublished: post.date,
    keywords: post.keywords ? post.keywords.join(', ') : 'escorts in noida, hotel outcall'
  });
});

// 5. Classified Profiles (100 Verified Profiles)
try {
  const { CLASSIFIED_ADS } = require('./portalData.cjs');
  CLASSIFIED_ADS.forEach((ad) => {
    const modelName = ad.title.split(' - ')[0];
    subRoutes.push({
      path: `${ad.categorySlug}/${ad.localitySlug}/${ad.slug}`,
      title: `${modelName} (${ad.age}) VIP Escort in ${ad.locality} 🟢 100% Real Photo 【COD】`,
      desc: (ad.description || `⚡ Verified profile of ${modelName} (${ad.age} Yrs) in ${ad.locality}. 100% real photo, 20-min hotel doorstep outcall, zero advance deposit. WhatsApp +91 8218125815.`).slice(0, 160),
      h1: ad.title,
      h2: `${ad.services ? ad.services.join(' • ') : 'Verified VIP Outcall'} | ${ad.locality}`,
      catName: ad.categorySlug,
      locName: ad.locality,
      adObj: ad,
      isProfile: true
    });
  });
} catch (e) {
  console.warn('Could not load classified profiles for SSG:', e.message);
}

console.log(`Starting SSG Pre-rendering script for ${subRoutes.length} programmatic routes...`);

let count = 0;
subRoutes.forEach((route) => {
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  let routeHtml = baseHtml;

  // 1. Meta Updates
  const canonicalUrl = `${DOMAIN}/${route.path ? (route.path.endsWith('/') ? route.path : `${route.path}/`) : ''}`;
  routeHtml = routeHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  routeHtml = routeHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${route.desc}" />`);
  routeHtml = routeHtml.replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`);

  // High-CTR Social Card updates
  routeHtml = routeHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${route.title}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${route.desc}" />`);
  routeHtml = routeHtml.replace(/<meta property="og:url" content=".*?" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${route.title}" />`);
  routeHtml = routeHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${route.desc}" />`);

  // Dynamic Google SERP Freshness Snippet (dateModified)
  routeHtml = routeHtml.replace(/"dateModified":\s*".*?"/, `"dateModified": "${CURRENT_DATE_ISO}"`);
  routeHtml = routeHtml.replace(/"headline":\s*".*?"/, `"headline": "${route.title.replace(/"/g, '\\"')}"`);

  const routeKeywords = route.keywords || (route.locObj ? [
    `escorts in ${route.locObj.name.toLowerCase()}`,
    `call girls in ${route.locObj.name.toLowerCase()}`,
    `${route.locObj.name.toLowerCase()} escorts service`,
    `${route.locObj.name.toLowerCase()} call girl number`,
    `independent escorts in ${route.locObj.name.toLowerCase()}`,
    `russian escorts in ${route.locObj.name.toLowerCase()}`,
    `vip escorts in ${route.locObj.name.toLowerCase()}`,
    `hotel outcall escorts in ${route.locObj.name.toLowerCase()}`,
    `cash on delivery escorts ${route.locObj.name.toLowerCase()}`,
    `zero advance call girls ${route.locObj.name.toLowerCase()}`,
    `escorts near ${route.locObj.landmarks[0] ? route.locObj.landmarks[0].toLowerCase() : route.locObj.name.toLowerCase()}`
  ].join(', ') : 'escorts in noida, noida escorts, call girls in noida, escort service in noida, independent escorts noida, russian escorts noida, vip companions noida');
  routeHtml = routeHtml.replace(/<meta name="keywords" content=".*?" \/>/, `<meta name="keywords" content="${routeKeywords}" />`);

  // 2. Structured Data (Schema JSON-LD)
  let schemaTags = '';
  if (route.isArticle) {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": route.h1,
      "description": route.desc,
      "datePublished": "2026-01-15T10:00:00+05:30",
      "dateModified": CURRENT_DATE_ISO,
      "author": {
        "@type": "Person",
        "name": "Noida Hospitality & Nightlife Reviewer",
        "jobTitle": "Senior Hospitality & Nightlife Reviewer",
        "url": `${DOMAIN}/about/`
      },
      "publisher": {
        "@type": "Organization",
        "name": BRAND,
        "url": DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "url": `${DOMAIN}/ecj-logo.svg`
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${DOMAIN}/blog/` },
        { "@type": "ListItem", "position": 3, "name": route.h1, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isBlogHub) {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": `${BRAND} Insights & Guides`,
      "description": route.desc,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": BRAND,
        "url": DOMAIN
      }
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": "Blog & Guides", "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(blogSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isCategoryHub) {
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${route.h1} - Localities Directory`,
      "description": route.desc,
      "url": canonicalUrl,
      "itemListElement": LOCALITIES.map((loc, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": `${route.catName} in ${loc.name}`,
        "url": `${DOMAIN}/${route.catObj.slug}/${loc.slug}/`
      }))
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": route.catName, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(itemListSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isLocalityPage) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How to book verified ${route.catName || 'companions'} in ${route.locObj.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `You can browse verified profiles with genuine photographs on ${BRAND} and connect directly via WhatsApp (${PHONE}) for instant confirmation with verified companion payment.`
          }
        },
        {
          "@type": "Question",
          "name": `Is 5-star hotel outcall service available in ${route.locObj.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, verified independent models and VIP companions provide 24/7 outcall visits to all luxury hotels such as ${route.locObj.hotels[0].name} and ${route.locObj.hotels[1].name} across ${route.locObj.name}.`
          }
        },
        {
          "@type": "Question",
          "name": `What is the arrival time for outcalls in ${route.locObj.name}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Because companions are stationed locally in Noida, typical outcall travel time is approximately 15 to 25 minutes after dispatch.`
          }
        },
        {
          "@type": "Question",
          "name": `Are the profile pictures on ${BRAND} 100% real?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, all advertised independent models undergo strict phone identity and genuine photo verification before listing on our directory.`
          }
        }
      ]
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": route.isDedicatedAreaPage ? [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": "Areas", "item": `${DOMAIN}/noida-areas/` },
        { "@type": "ListItem", "position": 3, "name": route.locObj.name, "item": canonicalUrl }
      ] : [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": route.catName, "item": `${DOMAIN}/${route.catObj.slug}/` },
        { "@type": "ListItem", "position": 3, "name": route.locObj.name, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isProfile) {
    const ad = route.adObj;
    const profileSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": ad.title,
      "description": route.desc,
      "url": canonicalUrl,
      "telephone": PHONE,
      "image": `${DOMAIN}${ad.images && ad.images[0] ? ad.images[0] : '/favicon-192x192.png'}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": ad.locality,
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": ad.rating || 4.9,
        "reviewCount": ad.reviewsCount || 25
      }
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": ad.categorySlug, "item": `${DOMAIN}/${ad.categorySlug}/` },
        { "@type": "ListItem", "position": 3, "name": ad.locality, "item": `${DOMAIN}/${ad.categorySlug}/${ad.localitySlug}/` },
        { "@type": "ListItem", "position": 4, "name": route.h1, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(profileSchema)}</script>
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  } else if (route.isHome) {
    schemaTags = '';
  } else {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${DOMAIN}/` },
        { "@type": "ListItem", "position": 2, "name": route.h1, "item": canonicalUrl }
      ]
    };
    schemaTags = `
      <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    `;
  }

  routeHtml = routeHtml.replace('</head>', `${schemaTags}\n</head>`);

  // 3. Inject Semantic Pre-rendered Content inside <noscript>
  let preRenderedBody = '';

  if (route.isArticle) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-4xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <a href="/blog/" class="hover:underline">Blog</a> &gt; 
              <span class="text-slate-900 font-bold">${route.h1}</span>
            </nav>
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">${route.catName}</div>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">${route.h1}</h1>
            <p class="text-sm md:text-base text-slate-600 font-medium italic mb-2">${route.h2}</p>
            <div class="text-xs text-slate-500">Published by <strong>${BRAND}</strong> | Last Updated: <strong>November 15, 2026</strong> | 24/7 Helpline: <strong>${PHONE}</strong></div>
          </header>

          <article class="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              ${route.articleContent}
            </div>
            
            <div class="my-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 font-bold text-sm">NH</div>
              <div class="text-xs">
                <strong class="block text-slate-900">Reviewed by: Noida Hospitality &amp; Nightlife Reviewer</strong>
                <span class="text-slate-500">Specialist in Gautam Buddha Nagar luxury hotel standards and verified companionship safety.</span>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <span class="text-xs text-slate-600">Direct WhatsApp Assistance: <strong class="text-slate-900">${PHONE}</strong></span>
              <a href="https://wa.me/${PHONE_CLEAN}" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
                Connect on WhatsApp →
              </a>
            </div>
          </article>

          <section class="max-w-4xl mx-auto mt-8">
            <h3 class="text-lg font-bold text-slate-900 mb-4">Explore More Guides &amp; Sectors</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/blog/" class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-amber-400 block text-xs font-semibold text-amber-800">
                ← View All Noida Editorial Guides &amp; Scam Advisories
              </a>
              <a href="/call-girls" class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:border-amber-400 block text-xs font-semibold text-amber-800">
                Browse Verified Call Girls in Noida →
              </a>
            </div>
          </section>
        </main>
      </noscript>
    `;
  } else if (route.isBlogHub) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-7xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <span class="text-slate-900 font-bold">Blog &amp; Guides</span>
            </nav>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${route.h1}</h1>
            <h2 class="text-base md:text-lg text-slate-600 font-medium">${route.h2}</h2>
          </header>

          <section class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${BLOG_POSTS.map(b => `
              <div class="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <span class="text-[11px] font-bold text-amber-800 uppercase tracking-wider">${b.category}</span>
                <h3 class="font-bold text-slate-900 text-base mt-2 mb-2 leading-snug">
                  <a href="/blog/${b.slug}/" class="hover:text-amber-700">${b.title}</a>
                </h3>
                <p class="text-xs text-slate-600 line-clamp-3 mb-4">${b.excerpt}</p>
                <a href="/blog/${b.slug}/" class="text-xs font-bold text-amber-700 hover:underline">Read Guide →</a>
              </div>
            `).join('')}
          </section>
        </main>
      </noscript>
    `;
  } else if (route.isLocalityPage) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-5xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              ${route.isDedicatedAreaPage ? `<a href="/noida-areas" class="hover:underline">Areas</a>` : `<a href="/${route.catObj.slug}" class="hover:underline">${route.catName}</a>`} &gt; 
              <span class="text-slate-900 font-bold">${route.locObj.name}</span>
            </nav>
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-2">Verified 24/7 Hotel Outcall</div>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${route.h1}</h1>
            <p class="text-sm md:text-base text-slate-600 font-medium">${route.h2}</p>
            <div class="text-xs text-slate-500 mt-2">Last Updated: <strong>November 15, 2026</strong> | Central Dispatch: <strong>${PHONE}</strong> | Verified 24/7 Dispatch</div>
          </header>

          <div class="max-w-5xl mx-auto">
            ${buildLocalityHtml(route.catObj, route.locObj)}
          </div>
        </main>
      </noscript>
    `;
  } else if (route.isProfile) {
    const ad = route.adObj;
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-4xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <a href="/${ad.categorySlug}/" class="hover:underline">${ad.categorySlug}</a> &gt; 
              <a href="/${ad.categorySlug}/${ad.localitySlug}/" class="hover:underline">${ad.locality}</a> &gt; 
              <span class="text-slate-900 font-bold">${ad.title}</span>
            </nav>
            <div class="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-2">100% Photo Verified • 24/7 Hotel Outcall</div>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${ad.title}</h1>
            <p class="text-sm md:text-base text-slate-600 font-medium">${route.h2}</p>
            <div class="text-xs text-slate-500 mt-2">Location: <strong>${ad.locality}</strong> | Age: <strong>${ad.age || 23}</strong> | Status: <strong>Verified Independent Model</strong> | Direct WhatsApp: <strong>${PHONE}</strong></div>
          </header>

          <article class="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div class="my-4 text-center">
              <img 
                src="${ad.images && ad.images[0] ? ad.images[0] : '/ecj-mark.svg'}" 
                alt="${ad.alt || `${ad.title} ${ad.age || 23} Yrs VIP Escort in ${ad.locality}`}" 
                class="rounded-2xl max-w-sm mx-auto shadow-md object-cover w-full sm:w-auto" 
                width="400" 
                height="533" 
                loading="lazy" 
              />
            </div>

            <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
              <p>${ad.description}</p>
              <h3 class="text-base font-bold text-slate-900 mt-4">Verified Services Offered</h3>
              <div class="flex flex-wrap gap-2 my-2">
                ${ad.services ? ad.services.map(s => `<span class="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200">${s}</span>`).join(' ') : ''}
              </div>
              <h3 class="text-base font-bold text-slate-900 mt-4">Verified Booking Guidelines &amp; Direct Confirmation</h3>
              <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li><strong>Zero Advance Payment:</strong> No prepayment, online deposit, or booking fee required prior to meeting.</li>
                <li><strong>100% Genuine Profile:</strong> Real photo verification guaranteed; meet in person at your hotel suite.</li>
                <li><strong>Doorstep Hotel Outcall:</strong> Swift 20 to 30-minute arrival across Sector 18, Sector 62, and Noida Expressway.</li>
              </ul>
            </div>
            
            <div class="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
              <span class="text-xs text-slate-600">Central WhatsApp Confirmation: <strong class="text-slate-900">${PHONE}</strong></span>
              <a href="https://wa.me/${PHONE_CLEAN}" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
                Book ${ad.title} on WhatsApp →
              </a>
            </div>
          </article>
        </main>
      </noscript>
    `;
  } else if (route.isHome) {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-5xl mx-auto mb-8 border-b border-slate-200 pb-6 text-center">
            <div class="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-3">Escorts Hub Noida • Verified 24/7 Dispatch</div>
            <h1 class="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">Escorts in Noida</h1>
            <p class="text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Doorstep 24/7 verified VIP hotel outcalls near DLF Mall of India, Sector 18 Metro Gate 2, Botanical Garden interchange, and along the Noida-Greater Noida Expressway. Genuine independent companions with complete privacy.
            </p>
            <div class="text-xs text-slate-500 mt-3">Central Helpline: <strong>${PHONE}</strong> | WhatsApp: <strong>${PHONE}</strong> | 100% Verified Profiles</div>
          </header>

          <section class="max-w-5xl mx-auto my-6 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 class="text-xl md:text-2xl font-black text-slate-900 mb-4">The Definitive Guide to Booking Verified Escorts in Noida &amp; NCR</h2>
            <div class="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 text-sm">
              <p>
                Noida, one of India's fastest-growing planned industrial and commercial hubs in the National Capital Region (NCR), is home to world-class corporate parks, multinational tech headquarters, and premier luxury hospitality destinations. Whether you are an executive visiting the multinational IT corridors of Sector 62 and Advant Navis on the Expressway, attending an international symposium at the India Expo Mart in Greater Noida, or enjoying a leisurely stay near DLF Mall of India and Sector 18, Escorts Hub Noida offers the most discreet, reliable, and verified adult companionship directory in the region.
              </p>
              <p>
                Our directory features strictly verified independent escorts, high-profile college companions, air hostess models, and elite corporate call girls available for 24/7 doorstep hotel outcall appointments. Operating with a verified-photo standard, we prioritize client security, personal confidentiality, and transparent real-photo authenticity above all else. For step-by-step reservation procedures and VIP companion booking protocols, review our official <a href="/noida-escorts/" class="text-amber-700 font-bold hover:underline">Noida Escorts Price List &amp; Booking Guide</a>.
              </p>

              <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">24/7 Hotel Outcall Protocols for Noida's Premier Hospitality Destinations</h3>
              <p>
                The cornerstone of a seamless companionship experience is hotel outcall convenience. Noida boasts an array of prestigious 4-star and 5-star properties designed to accommodate discerning international business executives and domestic travelers. Our companions routinely fulfill doorstep outcall appointments across all premier hotels, including:
              </p>
              <ul class="list-disc pl-5 space-y-1.5 my-3">
                <li><strong>Radisson Blu Hotel Noida (Sector 18):</strong> Located in the pulsating commercial heart of Noida opposite Gardens Galleria and DLF Mall of India, offering exceptional dining, executive suites, and prompt 15-minute outcall arrival times.</li>
                <li><strong>Crowne Plaza Greater Noida:</strong> A sprawling 5-star luxury retreat near Surajpur and Knowledge Park, ideal for attendees of international expos and exhibitions at the India Expo Mart.</li>
                <li><strong>Jaypee Greens Golf &amp; Spa Resort (Greater Noida):</strong> An opulent golf-facing sanctuary surrounded by lush greens, offering unmatched privacy and peaceful rendezvous suites.</li>
                <li><strong>Mosaic Hotel (Sector 18):</strong> A boutique luxury hotel in close proximity to the Sector 18 Metro Station Gate 2 and Atta Market, favored for rapid outcall dispatch and central convenience.</li>
                <li><strong>Savoy Suites &amp; Sandal Suites by Lemon Tree (Expressway):</strong> Prime executive residences on the Noida-Greater Noida Expressway near Sector 137 and Sector 142, catering to corporate leaders and IT specialists.</li>
              </ul>

              <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Verified Outcall Protocol: How We Shield Clients from Digital Scams</h3>
              <p>
                The digital adult companionship landscape is unfortunately plagued by predatory scam operations that publish misleading stock pictures or unverified profiles. Once an unsuspecting client contacts them, they often encounter impersonators or middlemen.
              </p>
              <p>
                At Escorts Hub Noida, we enforce a strict photo-verification and direct communication protocol across all 100 active profiles. We provide genuine photographs, accurate descriptions, and transparent hotel outcall coordination. Clients greet their chosen companion face-to-face in the privacy of their hotel room, guaranteeing 100% peace of mind, authentic service, and total satisfaction.
              </p>

              <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Hyperlocal Sector Coverage: From Central Noida to Greater Noida &amp; Ghaziabad</h3>
              <p>
                Noida's distinct urban grid structure allows for organized, prompt outcall fulfillment. We have stationed verified models and independent escorts within proximity to major transit arteries, guaranteeing arrival times between 15 to 30 minutes across all four NCR zones:
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="font-bold text-slate-900 text-sm mb-1">Central Noida &amp; Film City</h4>
                  <p class="text-xs text-slate-600">Covering Sector 18, Sector 15/16 Film City, Sector 50, Sector 76/78, and the Botanical Garden Metro interchange (Blue Line and Magenta Line junction). Rapid outcall dispatch to DLF Mall of India, Wave One, and Atta Market.</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="font-bold text-slate-900 text-sm mb-1">Noida Expressway Corridor</h4>
                  <p class="text-xs text-slate-600">Spanning Sector 137, Sector 128 (Jaypee Wish Town &amp; Sultanpur), and Sector 142 (Advant Navis Business Park). Home to major multinational corporate campuses and contemporary serviced hotel suites.</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="font-bold text-slate-900 text-sm mb-1">Greater Noida &amp; Knowledge Park</h4>
                  <p class="text-xs text-slate-600">Covering Pari Chowk, Alpha 1, Ansal Plaza, Knowledge Park, India Expo Mart, and Noida Extension (Gaur City / Char Murti). Outcall coverage for grand resort retreats and academic conferences.</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="font-bold text-slate-900 text-sm mb-1">Ghaziabad NCR &amp; Trans-Hindon</h4>
                  <p class="text-xs text-slate-600">Serving Indirapuram (Shipra Mall, Habitat Centre), Vaishali (Max Hospital &amp; Metro), Vasundhara, Crossings Republik (NH-24), and Kaushambi border near Anand Vihar ISBT.</p>
                </div>
              </div>

              <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Uncompromising Confidentiality, Discretion &amp; Safe Dating Standards</h3>
              <p>
                We understand that privacy is paramount for high-profile business professionals, government dignitaries, and international travelers. Escorts Hub Noida adheres to strict data privacy measures: we do not maintain client phone databases, marketing mailing lists, or shared communication logs. All calls to +91 8218125815 and WhatsApp messages are treated with utmost confidentiality and purged regularly.
              </p>
              <p>
                Furthermore, all companions registered with our platform undergo regular health screenings and practice strict personal hygiene protocols, ensuring every rendezvous is safe, respectful, and fulfilling.
              </p>

              <h3 class="text-lg font-black text-slate-900 mt-6 mb-2">Diverse Companion Profiles &amp; Custom Experiences Available</h3>
              <p>
                Our roster encompasses a wide array of sophisticated independent companions tailored to diverse client requirements across Noida and the National Capital Region:
              </p>
              <ul class="list-disc pl-5 space-y-1.5 my-3">
                <li><strong>VIP Independent Models:</strong> Refined, glamorous companions ideal for red-carpet events, executive suite dinners, and luxury hotel outcalls near DLF Mall of India.</li>
                <li><strong>Corporate Hostesses:</strong> Educated, articulate companions capable of accompanying business executives to formal dinners, international conferences, and corporate hospitality suites.</li>
                <li><strong>College Graduates &amp; Charming Models:</strong> Youthful, energetic companions residing near institutional belts such as Sector 125 (Amity University) and Sector 62.</li>
                <li><strong>Full-Night &amp; Weekend Companions:</strong> Dedicated companions available for extended retreats, weekend golf holidays at Jaypee Greens Resort, and unhurried relaxation.</li>
              </ul>
              <p>
                Whatever your companionship preference, our team guarantees transparent cash-on-delivery arrangements, verified real photographs, and prompt 20-minute dispatch across all 18 Noida sectors.
              </p>
            </div>
          </section>

          <section class="max-w-5xl mx-auto my-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 class="text-lg font-black text-slate-900 mb-4">Browse All 18 Prime Noida &amp; NCR Sectors</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 text-xs text-center font-bold">
              ${LOCALITIES.map(l => `
                <a href="/call-girls/${l.slug}" class="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-slate-900 hover:text-amber-700 block truncate">
                  ${l.name}
                </a>
              `).join('')}
            </div>
          </section>

          <section class="max-w-5xl mx-auto my-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
            <div class="space-y-3 text-xs sm:text-sm">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-1">How can I safely book verified escorts in Noida hotels?</h4>
                <p class="text-slate-600">At Escorts Hub Noida, we operate under a strict photo-verified companion protocol. You browse verified profiles, choose your preferred companion, confirm the arrival details via direct call or WhatsApp at +91 8218125815, and welcome your companion directly in person at your luxury hotel room or private residence.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-1">What is the average outcall arrival time to 5-star hotels in Noida Sector 18?</h4>
                <p class="text-slate-600">For major luxury hotels in Sector 18 (such as Radisson Blu, Mosaic Hotel, and Savoy Suites), outcall arrival time is typically 15 to 25 minutes. For properties along the Expressway, arrival is 20 to 35 minutes.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-1">Which hotels in Noida permit verified guest visits and outcall companions?</h4>
                <p class="text-slate-600">Reputed luxury hotels across Noida—including Radisson Blu Sector 18, Crowne Plaza Greater Noida, Jaypee Greens Resort, and Sandal Suites—routinely accommodate registered adult guests provided visitors present a valid government-issued photo ID at reception.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 class="font-bold text-slate-900 mb-1">What payment methods are supported for companionship services in Noida?</h4>
                <p class="text-slate-600">Clients may settle payments directly in person upon the companion’s verified arrival. Peer-to-peer UPI or bank transfer may be completed upon mutual agreement in person.</p>
              </div>
            </div>
          </section>

          <section class="max-w-5xl mx-auto my-8 p-6 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-bold flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 class="text-lg font-black">Book Verified Escorts in Noida (24/7)</h4>
              <p class="text-xs text-slate-900 font-medium">100% Real photo verified models • 20-min hotel doorstep outcall • Complete privacy.</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <a href="tel:+918218125815" class="px-5 py-2.5 bg-slate-950 text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-slate-900 transition-all">
                Call 8218125815
              </a>
              <a href="https://wa.me/918218125815?text=${encodeURIComponent('Hello Escorts Hub Noida! I want to book a verified companion.')}" class="px-5 py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#20bd5a] transition-all">
                WhatsApp VIP
              </a>
            </div>
          </section>
        </main>
      </noscript>
    `;
  } else {
    preRenderedBody = `
      <div id="root"></div>
      <noscript>
        <main class="min-h-screen bg-[#f8fafc] text-[#0f172a] p-4 md:p-8" style="font-family: 'Montserrat', system-ui, sans-serif;">
          <header class="max-w-7xl mx-auto mb-8 border-b border-slate-200 pb-6">
            <nav class="text-xs text-amber-700 mb-4 font-semibold">
              <a href="/" class="hover:underline">Home</a> &gt; 
              <span class="text-slate-900 font-bold">${route.h1}</span>
            </nav>
            <h1 class="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">${route.h1}</h1>
            <h2 class="text-base md:text-lg text-slate-600 font-medium">${route.h2}</h2>
            <div class="text-xs text-slate-500 mt-2">Last Updated: <strong>November 15, 2026</strong> | Dispatch Helpline: <strong>${PHONE}</strong></div>
          </header>

          <section class="max-w-7xl mx-auto my-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-3">${route.h1}</h3>
            <p class="text-slate-700 leading-relaxed mb-4">
              Welcome to <strong>${BRAND}</strong>, Noida &amp; NCR's premier verified classified directory. If you are searching for high-class, independent, and verified <em>${route.keyword || 'companion services'}</em> in <strong>${route.locName || 'Noida'}</strong> (near ${route.landmark || 'central Noida landmarks'}), you have arrived at the authentic source.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-sm">
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-emerald-700 font-bold text-sm mb-1">✓ 100% Genuine Photos</div>
                <p class="text-slate-600 text-xs">Strict authentication ensuring no fake models or duplicate placeholders.</p>
              </div>
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-amber-700 font-bold text-sm mb-1">✓ 24/7 Hotel Outcall</div>
                <p class="text-slate-600 text-xs">Discreet companion visits to Radisson Blu, Crowne Plaza, Jaypee Greens, and luxury hotels.</p>
              </div>
              <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
                <div class="text-emerald-700 font-bold text-sm mb-1">✓ 100% Discretion & Privacy</div>
                <p class="text-slate-600 text-xs">Enjoy direct doorstep companion visits with full privacy and professional discretion.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-4">
              <span class="text-xs text-slate-600">Direct WhatsApp Booking: <strong class="text-slate-900">${PHONE}</strong></span>
              <a href="https://wa.me/${PHONE_CLEAN}" class="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm">
                Book on WhatsApp →
              </a>
            </div>
          </section>

          <section class="max-w-7xl mx-auto my-8">
            <h3 class="text-xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
            <div class="space-y-3">
              <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                <h4 class="font-bold text-slate-900 text-sm mb-1">How do I book verified escorts in ${route.locName || 'Noida'}?</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Browse authentic profile cards with verified pictures, select your preferred companion, and click the direct WhatsApp button (${PHONE}) for instant, discreet confirmation with complete privacy.</p>
              </div>
              <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                <h4 class="font-bold text-slate-900 text-sm mb-1">Is outcall available near ${route.landmark || 'Noida'}?</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Yes, all models offer doorstep outcall services to 5-star hotels, private suites, and villas across ${route.locName || 'Noida'} with complete confidentiality.</p>
              </div>
            </div>
          </section>
        </main>
      </noscript>
    `;
  }

  routeHtml = routeHtml.replace(/<div id="root">[\s\S]*?<\/body>/, `${preRenderedBody.trim()}\n  </body>`);

  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml, 'utf8');
  count++;
});

console.log(`✓ Successfully pre-rendered ALL ${count} programmatic routes with semantic H1/H2, Schema LD+JSON, and full SEO body content!`);
