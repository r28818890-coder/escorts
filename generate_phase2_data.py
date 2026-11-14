#!/usr/bin/env python3
"""
Generate comprehensive Phase 2 dataset:
- data/sectors.json (25 sectors with verified hotels, metro, Hindi, 2-para intro, 3 FAQs, nearby sectors & landmarks)
- data/landmarks.json (10 landmarks with how to reach, what is around, hotel proximity, 3 FAQs)
- data/categories.json (8 categories with who suits, rate details, 3 FAQs, linked sectors)
- data/legal.json (7 legal pages with 400+ words of real, robust legal copy)
"""

import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), 'network', 'data')
os.makedirs(DATA_DIR, exist_ok=True)

# ── 1. SECTORS DATA (25 Sectors) ──────────────────────────────
sectors_raw = [
    ("sector-18", "Sector 18", "market/commercial hub", "Sector 18 Metro", "0m",
     ["Radisson Blu Hotel Noida Sector 18", "Mosaic Hotel Sector 18", "Savoy Suites Sector 16"],
     ["sector-15", "sector-16", "sector-62"],
     ["near-dlf-mall-of-india", "near-sector-18-metro"],
     "नोएडा सेक्टर 18 में उच्च स्तरीय कॉलगर्ल और वीआईपी एस्कॉर्ट सेवाएं पूरी तरह से सुरक्षित और गोपनीय हैं। डीएलएफ मॉल और अट्टा मार्केट के पास फाइव स्टार होटलों में 24 घंटे कैश ऑन डिलीवरी आउटकॉल की सुविधा उपलब्ध है।",
     "Sector 18 stands as the vibrant commercial epicenter and entertainment heartbeat of Noida, anchored by iconic landmarks such as DLF Mall of India and The Great India Place. Business travelers and sophisticated visitors seeking upscale companionship will find verified call girls and VIP independent models readily accessible throughout this bustling sector with direct WhatsApp confirmation and zero advance payments.",
     "Whether you are lodging at the five-star Radisson Blu or hosting an executive dinner date near Centerstage Mall, our companions offer prompt doorstep arrival within 25 minutes. Each model is thoroughly verified for photo authenticity, personal hygiene, and graceful social etiquette, guaranteeing an unhurried, discreet experience in total privacy."
    ),
    ("sector-15", "Sector 15", "older residential, market edge", "Sector 15 Metro", "200m",
     ["Savoy Suites Sector 16", "Mosaic Hotel Sector 18", "Ginger Hotel Sector 59"],
     ["sector-18", "sector-16", "sector-70"],
     ["near-atta-market", "near-sector-18-metro"],
     "सेक्टर 15 नोएडा की शांत आवासीय कॉलोनियों और अट्टा मार्केट के पास स्थित है। यहां पर स्वतंत्र कॉलगर्ल्स बिना किसी अग्रिम भुगतान के सीधे कैश ऑन डिलीवरी पर उपलब्ध हैं।",
     "Sector 15 offers a charming blend of established residential neighborhoods situated right on the periphery of central Noida commercial hubs. Visitors staying in quiet guesthouses or local boutique properties enjoy peaceful stays coupled with swift access to verified independent call girls and sweet college models.",
     "Our verified companions in Sector 15 understand the value of utmost confidentiality and personal warmth. With doorstep hotel outcall delivery available around the clock, you can connect directly through our coordinator and welcome a stunning, polite companion to your suite without any hidden charges or upfront deposit demands."
    ),
    ("sector-16", "Sector 16", "Film City, media offices", "Sector 16 Metro", "300m",
     ["Fortune Inn Grazia Sector 27", "Savoy Suites Sector 16", "Radisson Blu Hotel Sector 18"],
     ["sector-18", "sector-15", "sector-125"],
     ["near-film-city", "near-sector-18-metro"],
     "सेक्टर 16 फिल्म सिटी और प्रमुख मीडिया कार्यालयों का केंद्र है। यहां वीआईपी मॉडल और कॉर्पोरेट परिचारिकाएं पांच सितारा होटलों में सीधे आउटकॉल सेवा देती हैं।",
     "Sector 16 is widely recognized as Noida Film City, home to India's leading national television broadcasting studios, corporate production houses, and upscale business complexes. Executives, creative professionals, and media delegates visiting the area can enjoy premium companionship from top-rated models and corporate hostesses.",
     "Our Sector 16 escort service guarantees complete non-disclosure agreements and absolute discretion. Companions arrive dressed in elegant, casual corporate attire suitable for five-star hotel lobbies such as Fortune Inn Grazia, ensuring your romantic or social rendezvous remains seamless, respectful, and genuinely memorable."
    ),
    ("sector-62", "Sector 62", "IT/BPO hub, corporate", "Sector 62 Metro", "0m",
     ["Park Ascent Sector 62", "Ginger Hotel Noida Sector 62", "Treebo Trend Sector 62"],
     ["sector-63", "sector-18", "sector-70"],
     ["near-expo-mart", "near-botanical-garden-metro"],
     "सेक्टर 62 नोएडा का प्रमुख आईटी और बहुराष्ट्रीय कंपनियों का केंद्र है। सॉफ्टवेयर प्रोफेशनल्स और बिजनेस टूरिस्ट्स के लिए यहां स्वतंत्र एस्कॉर्ट्स कैश ऑन डिलीवरी पर उपलब्ध हैं।",
     "Sector 62 represents the premier corporate information technology park of Noida, housing multinational IT giants, institutional universities, and business processing headquarters. Traveling software architects, consultants, and business executives can easily schedule private meetings with gorgeous independent call girls after intensive corporate meetings.",
     "With prime corporate hotels like Park Ascent and Ginger Hotel conveniently located right by Sector 62 Metro Station, our verified escorts ensure rapid 30-minute outcall arrivals. We uphold a strict cash-on-delivery standard, eliminating online transfer scams and offering true peace of mind during your Noida stay."
    ),
    ("sector-63", "Sector 63", "industrial + IT", "Sector 62 Metro", "900m",
     ["Park Ascent Sector 62", "Ginger Hotel Sector 62", "Hotel PK Budget Sector 63"],
     ["sector-62", "sector-71", "sector-72"],
     ["near-expo-mart", "near-botanical-garden-metro"],
     "सेक्टर 63 औद्योगिक और आईटी कंपनियों का बड़ा क्षेत्र है। यहां पर थके हुए कारोबारियों के लिए व्यक्तिगत इन-कॉल और होटल आउटकॉल एस्कॉर्ट सेवा उपलब्ध है।",
     "Sector 63 is a bustling nexus of corporate manufacturing units, software startups, and industrial export houses. Hardworking business executives and traveling entrepreneurs frequenting Sector 63 often seek warm, relaxing companionship to unwind after demanding factory visits and board meetings.",
     "Our verified companions in Sector 63 offer both sanitized private in-call apartment accommodations and swift outcall visits to nearby business hotels. Expect affectionate communication, transparent tariff structures, and completely authentic photograph verification on every booking."
    ),
    ("sector-70", "Sector 70", "residential", "Sector 52 Metro", "2km",
     ["Bloom Hotel Sector 70", "The Fern Residency Sector 70", "Hotel Golden Tulip"],
     ["sector-71", "sector-72", "sector-62"],
     ["near-botanical-garden-metro", "near-atta-market"],
     "सेक्टर 70 में आधुनिक सोसायटियों और होटलों के लिए सुरक्षित कॉलगर्ल सेवा उपलब्ध है। बिना किसी अग्रिम राशि के केवल सीधे मिलने पर भुगतान करें।",
     "Sector 70 features modern gated residential societies, wide tree-lined boulevards, and contemporary boutique hotels like Bloom Hotel and The Fern Residency. Discerning residents and domestic travelers visiting this peaceful sector can connect with sweet college girls and mature housewife companions for cozy private meetings.",
     "We ensure that every escort visiting Sector 70 maintains exemplary discretion, blending effortlessly into residential apartment lobbies without drawing unwanted attention. All bookings are managed with complete transparency and zero advance booking fees."
    ),
    ("sector-71", "Sector 71", "residential", "Sector 71 Metro", "0m",
     ["Hotel Kashish Sector 71", "Bloom Hotel Sector 70", "Radisson Blu Hotel Sector 18"],
     ["sector-70", "sector-72", "sector-74"],
     ["near-sector-18-metro", "near-atta-market"],
     "सेक्टर 71 मेट्रो स्टेशन के निकट सुरक्षित आवासीय क्षेत्र में वास्तविक सत्यापित कॉलगर्ल्स उपलब्ध हैं। पूरी तरह से गोपनीय और विश्वसनीय सेवाएं।",
     "Sector 71 serves as a pivotal transit and residential intersection, benefiting from its dedicated Metro station and proximity to central Noida transit corridors. Clients staying in local guesthouses or private apartments can book authentic, real-photo verified independent companions in minutes.",
     "From passionate romantic dinner dates to serene overnight stays, our companions in Sector 71 provide unmatched warmth, polite manners, and absolute personal safety. Settle charges only upon arrival in cash or via UPI."
    ),
    ("sector-72", "Sector 72", "residential", "Sector 72 Metro", "0m",
     ["The Fern Residency", "Hotel Kashish Sector 71", "Bloom Hotel Sector 70"],
     ["sector-71", "sector-74", "sector-75"],
     ["near-botanical-garden-metro", "near-atta-market"],
     "सेक्टर 72 में शांत वातावरण में उच्च श्रेणी की एस्कॉर्ट सेवाएं उपलब्ध हैं। यहां कॉलेज गर्ल्स और हाउसवाइफ मॉडल्स के साथ मिलें।",
     "Sector 72 is characterized by tranquil residential enclaves and rapid connectivity to commercial sectors. Gentlemen seeking an escape from busy corporate routines can invite charming independent models for intimate conversations and genuine emotional comfort.",
     "Our agency strictly screens every Sector 72 escort profile to verify recent photographs and hygiene protocols. Enjoy an unhurried, respectful encounter with complete assurance of financial safety and cash-on-delivery convenience."
    ),
    ("sector-74", "Sector 74", "residential", "Sector 74 Metro", "0m",
     ["Supertech Capetown Stays", "Hotel Kashish Sector 71", "Bloom Hotel Sector 70"],
     ["sector-72", "sector-75", "sector-76"],
     ["near-botanical-garden-metro", "near-expo-mart"],
     "सेक्टर 74 में केपटाउन जैसी बड़ी सोसायटियों के निकट सत्यापित कॉलगर्ल आउटकॉल सेवा 24 घंटे उपलब्ध है। सुरक्षित और पारदर्शी बुकिंग।",
     "Sector 74 is famous for expansive high-rise townships like Supertech Capetown, offering state-of-the-art residential infrastructure. Residents and visiting guests seeking discreet companionship will appreciate the promptness and elegance of our independent escorts.",
     "Every model available in Sector 74 is trained in polite guest hospitality and respectful boundaries. We never demand advance UPI payments or online registration charges, ensuring a completely scam-free engagement."
    ),
    ("sector-75", "Sector 75", "residential", "Sector 75 Metro", "0m",
     ["Golf City Suites Sector 75", "Hotel Grand Mookkannoor", "Bloom Hotel Sector 70"],
     ["sector-74", "sector-76", "sector-77"],
     ["near-botanical-garden-metro", "near-dlf-mall-of-india"],
     "सेक्टर 75 गोल्फ सिटी के पास स्वतंत्र कॉलगर्ल और वीआईपी मॉडल्स के साथ रोमांटिक पलों का आनंद लें। नकद भुगतान की पूरी सुविधा।",
     "Sector 75 hosts luxury high-rise developments such as Golf City, attracting young professionals, executives, and couples. Our verified escort directory connects you with sweet, educated female models who appreciate romantic conversations and pleasant evenings.",
     "Booking an escort in Sector 75 is as effortless as sending a quick WhatsApp message to our female concierge. Expect punctual doorstep arrivals within 30 minutes, authentic photo likeness, and absolute confidentiality."
    ),
    ("sector-76", "Sector 76", "residential", "Sector 76 Metro", "0m",
     ["Silicon City Suites Sector 76", "Hotel Grand Sector 76", "Bloom Hotel Sector 70"],
     ["sector-75", "sector-77", "sector-78"],
     ["near-botanical-garden-metro", "near-great-india-place"],
     "सेक्टर 76 में सिलिकॉन सिटी और नजदीकी मेट्रो से सुलभ एस्कॉर्ट सेवाएं। 100% असली फोटो और शून्य अग्रिम भुगतान गारंटी।",
     "Sector 76 is a flourishing residential hotspot featuring landmark gated communities like Amrapali Silicon City and Sethi Max Royal. If you are residing in or visiting Sector 76, our verified independent call girls offer warm, friendly companionship.",
     "Whether you desire a soothing two-hour evening date or an overnight package, our Sector 76 models provide attentive, unhurried companionship with complete privacy safeguards."
    ),
    ("sector-77", "Sector 77", "residential", "Sector 77 Metro", "0m",
     ["Express Zenith Stays Sector 77", "Silicon City Suites Sector 76", "Bloom Hotel Sector 70"],
     ["sector-76", "sector-78", "sector-117"],
     ["near-botanical-garden-metro", "near-expo-mart"],
     "सेक्टर 77 एक्सप्रेस जेनिथ के आसपास वीआईपी एस्कॉर्ट्स और कॉलगर्ल्स उपलब्ध हैं। घर या होटल में सीधी डिलीवरी।",
     "Sector 77 is home to premium residential enclaves such as Express Zenith and Griha Pravesh. It attracts residents and business travelers seeking quiet luxury away from highway congestion.",
     "Our verified companions in Sector 77 bring beauty, intelligence, and genuine affection to every date. Settle payments safely on arrival and enjoy discreet private time."
    ),
    ("sector-78", "Sector 78", "residential", "Sector 78 Metro", "0m",
     ["Antriksh Golf City Suites", "Hyde Park Suites Sector 78", "Bloom Hotel Sector 70"],
     ["sector-76", "sector-77", "sector-117"],
     ["near-botanical-garden-metro", "near-dlf-mall-of-india"],
     "सेक्टर 78 हाइड पार्क और अंतरिक्ष गोल्फ सिटी के पास सुरक्षित कॉलगर्ल सेवा। वास्तविक मॉडल्स और तुरंत व्हाट्सएप कन्फर्मेशन।",
     "Sector 78 is recognized for its upscale lifestyle complexes like Hyde Park and Mahagun Moderne. Discerning gentlemen seeking companionship will discover educated college students and elegant corporate escorts ready for doorstep visits.",
     "We guarantee complete anonymity for our Sector 78 clients. Companions arrive dressed with understated sophistication, ensuring a private, worry-free encounter."
    ),
    ("sector-93", "Sector 93", "residential", "Sector 93 Metro (Aqua)", "400m",
     ["Grand Omaxe Suites Sector 93", "Park Ascent", "Radisson Blu Hotel Sector 18"],
     ["sector-100", "sector-104", "sector-128"],
     ["near-jaypee-greens", "near-sector-18-metro"],
     "सेक्टर 93 ग्रैंड ओमेक्स के निकट वीआईपी एस्कॉर्ट्स सेवा। 24 घंटे कैश ऑन डिलीवरी और उत्कृष्ट गोपनीयता।",
     "Sector 93 is renowned for premium residential developments like Grand Omaxe and Eldeco Utopia along the expressway connector. Clients in this affluent sector enjoy access to top-tier VIP models and international Russian companions.",
     "Our Sector 93 escorts arrive within 30 to 40 minutes at your private residence or executive hotel suite, delivering royalty-grade hospitality with zero advance deposit requirements."
    ),
    ("sector-100", "Sector 100", "residential", "Sector 101 Metro (Aqua)", "1km",
     ["Lotus Boulevard Suites Sector 100", "Hotel White Castle", "Radisson Blu Hotel Sector 18"],
     ["sector-93", "sector-104", "sector-110"],
     ["near-jaypee-greens", "near-botanical-garden-metro"],
     "सेक्टर 100 लोटस बुलेवार्ड के पास सत्यापित कॉलगर्ल्स और एस्कॉर्ट सेवाएं। सीधी बुकिंग और पूरी गोपनीयता।",
     "Sector 100 features landmark green luxury projects like Lotus Boulevard, housing senior corporate directors and international delegates. For gentlemen who appreciate refined feminine elegance, our agency offers bespoke companion bookings.",
     "Each model attending Sector 100 is vetted for articulate communication, personal hygiene, and graceful demeanor, providing an unforgettable romantic experience."
    ),
    ("sector-104", "Sector 104", "residential", "Sector 101 Metro (Aqua)", "1.5km",
     ["Hazipur Luxury Suites Sector 104", "Hotel White Castle", "Radisson Blu Hotel Sector 18"],
     ["sector-100", "sector-110", "sector-93"],
     ["near-amity-university", "near-jaypee-greens"],
     "सेक्टर 104 में हाजीपुर और मुख्य बाजार के पास स्वतंत्र कॉलगर्ल सेवा। कैश ऑन डिलीवरी पर सुरक्षित मुलाकात।",
     "Sector 104 has emerged as a trendy dining and lifestyle destination with chic cafes, luxury bakeries, and upscale residential suites. Guests looking for charming company for dinner dates or private hotel stays can book verified call girls easily.",
     "Our independent companions in Sector 104 arrive promptly with zero advance demands, allowing you to settle tariffs comfortably upon in-person verification."
    ),
    ("sector-110", "Sector 110", "residential", "Sector 110 Metro (Aqua)", "0m",
     ["Lotus Panache Suites Sector 110", "Hotel White Castle", "Radisson Blu Hotel Sector 18"],
     ["sector-104", "sector-100", "sector-117"],
     ["near-jaypee-greens", "near-expo-mart"],
     "सेक्टर 110 में लोटस पनाश के निकट सत्यापित कॉल गर्ल्स और मॉडल्स। सुरक्षित इन-कॉल और आउटकॉल सेवाएं।",
     "Sector 110 hosts major residential gated communities such as Lotus Panache, providing easy transit via the Aqua Line metro. Clients seeking sincere warmth and non-commercial vibes will love our handpicked college girls and housewives.",
     "Discretion, hygiene, and mutual respect are strictly maintained throughout Sector 110 appointments, ensuring a delightful and relaxing private interlude."
    ),
    ("sector-117", "Sector 117", "residential", "Sector 117 Metro (Aqua)", "0m",
     ["Supertech Romano Suites Sector 117", "Hotel Kashish", "Bloom Hotel"],
     ["sector-110", "sector-120", "sector-122"],
     ["near-expo-mart", "near-botanical-garden-metro"],
     "सेक्टर 117 में सुपरटेक रोमानो के पास वास्तविक फोटो वाली कॉलगर्ल्स। कोई एडवांस नहीं, केवल कैश ऑन डिलीवरी।",
     "Sector 117 is an evolving modern residential enclave featuring premium Italian-style architecture at Supertech Romano. Visitors and residents can experience sweet, intimate companionship with verified local models.",
     "Our coordinator provides real-time portfolio updates on WhatsApp with authentic pictures, ensuring you meet the exact companion you selected without unpleasant surprises."
    ),
    ("sector-120", "Sector 120", "residential", "Sector 120 Metro (Aqua)", "0m",
     ["Amrapali Zodiac Stays Sector 120", "Hotel Kashish", "Bloom Hotel"],
     ["sector-117", "sector-122", "sector-71"],
     ["near-botanical-garden-metro", "near-atta-market"],
     "सेक्टर 120 में आम्रपाली जोडिएक के पास सुरक्षित और गोपनीय एस्कॉर्ट सेवाएं। तुरंत 30 मिनट में आउटकॉल सेवा।",
     "Sector 120 is centered around expansive residential societies like Amrapali Zodiac and Prateek Laurel. Gentlemen seeking discreet feminine company after busy workdays can book genuine independent escorts with total privacy.",
     "We uphold zero advance deposit rules, meaning you pay directly in cash or UPI only when your companion arrives at your door in Sector 120."
    ),
    ("sector-122", "Sector 122", "residential", "Sector 122 Metro (Aqua)", "0m",
     ["Parthala Suites Sector 122", "Hotel Kashish", "Bloom Hotel"],
     ["sector-120", "sector-117", "sector-71"],
     ["near-botanical-garden-metro", "near-sector-18-metro"],
     "सेक्टर 122 पर्थला चौक के पास वीआईपी कॉलगर्ल सेवाएं। 100% सत्यापित प्रोफाइल और व्यक्तिगत आउटकॉल सुविधा।",
     "Sector 122 enjoys strategic connectivity near Parthala Flyover and Noida Extension gateways. It provides a peaceful setting for executive visitors to unwind in the company of educated models and passionate independent companions.",
     "All our Sector 122 escort bookings prioritize client confidentiality, transparent pricing, and punctual doorstep service."
    ),
    ("sector-125", "Sector 125", "Amity University student belt", "Sector 125 Metro (Aqua)", "0m",
     ["Sandal Suites by Lemon Tree", "Amity Guest Suites Sector 125", "Radisson Blu Hotel Sector 18"],
     ["sector-16", "sector-128", "sector-132"],
     ["near-amity-university", "near-film-city"],
     "सेक्टर 125 एमिटी यूनिवर्सिटी छात्र बेल्ट में युवा और सुंदर कॉलेज गर्ल्स एस्कॉर्ट्स। केवल वयस्क ग्राहकों के लिए।",
     "Sector 125 is the energetic academic and student hub of Noida, famous for the sprawling Amity University campus and bustling youth cafes. Young corporate professionals and visiting alumni can book youthful, vibrant college models for coffee dates and private meetings.",
     "Our Sector 125 companions are sweet, fluent in English and Hindi, and possess charming social etiquette, making every shared moment energetic and joyful."
    ),
    ("sector-128", "Sector 128", "residential", "Sector 128 Metro (Aqua)", "0m",
     ["Jaypee Greens Wish Town Sector 128", "Sandal Suites by Lemon Tree", "Savoy Suites Sector 16"],
     ["sector-125", "sector-132", "sector-137"],
     ["near-jaypee-greens", "near-amity-university"],
     "सेक्टर 128 जेपी ग्रीन्स विश टाउन के पास प्रीमियम वीआईपी एस्कॉर्ट्स। फाइव स्टार होटल आउटकॉल सेवा 24 घंटे उपलब्ध।",
     "Sector 128 represents luxury expressway living, anchored by Jaypee Greens Wish Town and pristine golf pavilions. High-profile executives and luxury resort guests can book elite VIP models and glamorous air hostesses for unmatched companionship.",
     "Enjoy royalty-grade personal attention, sanitized in-room visits, and complete peace of mind with our strict cash-on-delivery assurance in Sector 128."
    ),
    ("sector-132", "Sector 132", "residential/expressway", "Sector 132 Metro (Aqua)", "0m",
     ["Step By Step Suites Sector 132", "Sandal Suites by Lemon Tree", "Jaypee Greens Wish Town"],
     ["sector-128", "sector-137", "sector-168"],
     ["near-jaypee-greens", "near-expo-mart"],
     "सेक्टर 132 नोएडा एक्सप्रेसवे पर कॉर्पोरेट और लक्जरी स्टे के लिए विश्वसनीय कॉलगर्ल सेवा। शून्य एडवांस पॉलिसी।",
     "Sector 132 is a prime expressway node featuring premier schools, corporate medical complexes, and luxury condominium towers. Discerning clients can book sweet, polite independent companions for private meetings and overnight stays.",
     "We never request advance fees or deposit links. Pay directly in person and relish an unhurried, cozy encounter in Sector 132."
    ),
    ("sector-137", "Sector 137", "residential, Aqua Line", "Sector 137 Metro (Aqua)", "0m",
     ["Felix Hospital Executive Suites", "Sandal Suites by Lemon Tree", "Jaypee Greens Wish Town"],
     ["sector-132", "sector-168", "sector-142"],
     ["near-jaypee-greens", "near-expo-mart"],
     "सेक्टर 137 फेलिक्स अस्पताल और एक्वा लाइन मेट्रो के पास स्वतंत्र कॉलगर्ल और वीआईपी मॉडल्स। सुरक्षित और गोपनीय सेवा।",
     "Sector 137 is one of Noida Expressway's most densely populated and modern residential sectors, served by its own Aqua Line Metro Station and Felix Hospital hub. IT managers, doctors, and visiting corporate delegates can find 100% verified companions for evening dates.",
     "Our Sector 137 models ensure punctual arrivals, gentle conversation, and genuine warmth without any financial deception or online pre-payments."
    ),
    ("sector-168", "Sector 168", "new residential, expressway", "Sector 168 Metro (Aqua)", "0m",
     ["Paras Tierea Executive Stays", "Golden Palm Suites Sector 168", "Sandal Suites by Lemon Tree"],
     ["sector-137", "sector-132", "sector-128"],
     ["near-expo-mart", "near-jaypee-greens"],
     "सेक्टर 168 पारस टिएरा के निकट नए आवासीय टावरों में वीआईपी एस्कॉर्ट्स आउटकॉल सेवा। 24 घंटे कैश ऑन डिलीवरी।",
     "Sector 168 features massive modern residential high-rises including Paras Tierea and The Golden Palms along the expressway. It provides a peaceful setting for weekend relaxation with genuine, attractive companions.",
     "Connect directly on WhatsApp with our 24/7 concierge to receive real photos and secure an instant 35-minute doorstep outcall to Sector 168."
    )
]

# Convert sectors_raw to dictionary list
sectors = []
for item in sectors_raw:
    slug, name, char, metro, dist, hotels, nearby, landmarks, hindi, p1, p2 = item
    sectors.append({
        "slug": slug,
        "name": name,
        "character": char,
        "metro": metro,
        "distance": dist,
        "hotels": hotels,
        "nearby": nearby,
        "landmarks": landmarks,
        "hindi": hindi,
        "intro": [p1, p2],
        "faqs": [
            {
                "q": f"How do I book a verified call girl in {name} Noida?",
                "a": f"Booking an escort in {name} is fast and 100% discreet. Tap the Call or WhatsApp button on Veloura, confirm your hotel or residential address in {name}, and your selected companion will arrive within 25 to 40 minutes with zero advance payment."
            },
            {
                "q": f"Are companion photos in {name} 100% authentic?",
                "a": f"Yes. Every profile listed under {name} undergoes strict in-person verification. What you view on our portal is exactly the charming, polite companion who meets you in person."
            },
            {
                "q": f"Is cash on delivery available for {name} hotel outcalls?",
                "a": f"Absolutely. Veloura enforces a strict zero-advance policy across all sectors in Noida. You pay directly in cash or UPI only after meeting your companion in your private room."
            }
        ]
    })

with open(os.path.join(DATA_DIR, 'sectors.json'), 'w', encoding='utf-8') as f:
    json.dump(sectors, f, indent=2, ensure_ascii=False)

print(f"Generated data/sectors.json with {len(sectors)} sectors.")

# ── 2. LANDMARKS DATA (10 Landmarks) ──────────────────────────
landmarks_raw = [
    ("dlf-mall-of-india", "DLF Mall of India",
     "DLF Mall of India is India's largest shopping mall located in Sector 18 Noida. It is easily reachable via Sector 18 Metro Station on the Blue Line (Gate 2) with direct access from DND Flyway.",
     "Surrounded by upscale multiplexes, high-end fine dining restaurants, Radisson Blu Hotel, and Atta Market shopping plazas.",
     "Radisson Blu Hotel Noida and Mosaic Hotel are located within 300 meters walking distance, allowing companions to arrive within 15 minutes of booking.",
     "DLF Mall of India stands as the premier lifestyle and luxury landmark of Noida. Business travelers, shoppers, and executives visiting this iconic center can connect with verified VIP models and charming dinner companions for romantic evenings.",
     "Our companions near DLF Mall of India are cultured, fashion-conscious, and adept in fine-dining etiquette, making them ideal partners for upscale social gatherings, shopping sprees, or quiet hotel room encounters.",
     ["sector-18", "sector-15", "sector-16"]
    ),
    ("great-india-place", "Great India Place",
     "The Great India Place (GIP) mall is situated opposite Sector 38A, directly adjacent to Worlds of Wonder amusement park and accessible via Sector 18 and Botanical Garden Metro Stations.",
     "Surrounded by family entertainment zones, corporate business offices, luxury retail stores, and upscale hotel chains across Sector 18 and 38.",
     "Located within 500 meters of premier hotel suites in Sector 18, ensuring rapid outcall dispatch in under 20 minutes.",
     "Great India Place has long served as a classic landmark for shopping and leisure in Noida. Travelers staying in nearby accommodations can enjoy private accompaniment from stunning independent call girls and college models.",
     "Every companion serving the GIP precinct is verified for authentic photo likeness and personal hygiene, providing warm hospitality without any financial advance payment risks.",
     ["sector-18", "sector-16", "sector-125"]
    ),
    ("atta-market", "Atta Market",
     "Atta Market is Noida's historic central commercial bazaar, located right beneath Sector 18 Metro Station with immediate access from Sector 27 and Sector 15.",
     "Surrounded by bustling electronic shops, local fashion boutiques, street culinary gems, and budget-to-luxury guesthouses.",
     "Walking distance of 100 meters to Sector 18 hotels and nearby guest houses, enabling rapid companion arrivals within 20 minutes.",
     "Atta Market offers an authentic, lively slice of Noida commercial energy. If you are lodging in neighboring hotels or private suites, our verified escorts offer affectionate, unhurried companionship.",
     "We maintain transparent rates starting from ₹1,999 for short meets and ₹2,999 for full hour dates, with strict cash on delivery terms upon arrival.",
     ["sector-18", "sector-15", "sector-16"]
    ),
    ("sector-18-metro", "Sector 18 Metro",
     "Sector 18 Metro Station is an elevated station on the Delhi Metro Blue Line, offering direct connectivity between Rajiv Chowk, Noida City Centre, and Electronic City.",
     "Surrounded by banks, financial institutions, corporate headquarters, luxury jewelry showrooms, and DLF Mall of India.",
     "Walking distance of 2 to 5 minutes to premier hotel towers including Radisson Blu and Mosaic Hotel.",
     "Serving thousands of corporate executives and travelers daily, Sector 18 Metro is the most accessible transit gateway in Noida. Our escort agency provides swift outcall services to all hotels surrounding the station.",
     "Connect directly with our coordinator on WhatsApp to select from independent college girls, models, and air hostesses with direct in-room delivery.",
     ["sector-18", "sector-15", "sector-16"]
    ),
    ("botanical-garden-metro", "Botanical Garden Metro",
     "Botanical Garden Metro Station is a major interchange hub connecting the Blue Line and the Magenta Line with rapid direct access to Indira Gandhi International Airport Terminal 1.",
     "Surrounded by Amity University access roads, corporate transit corridors, and green parks in Sector 37 and Sector 38.",
     "Located within 5 to 10 minutes drive of leading hospitality properties in central Noida and Sector 18.",
     "Botanical Garden is the busiest transit hub for corporate travelers arriving from Delhi and Noida expressway sectors. Our verified companions provide 24/7 outcall service to all hotels and guest suites near the station.",
     "Enjoy royal care and complete privacy with our verified independent models, backed by our zero-advance payment integrity guarantee.",
     ["sector-18", "sector-16", "sector-125"]
    ),
    ("film-city", "Film City",
     "Film City in Sector 16A Noida is easily accessed via DND Flyway, Sector 16 Metro Station, and the Noida-Greater Noida Expressway.",
     "Surrounded by major national news television networks (Zee, Aaj Tak, Network18), film institutes, and modern media towers.",
     "Located within 800 meters of Fortune Inn Grazia and Savoy Suites, ensuring 20-minute outcall delivery.",
     "Noida Film City attracts high-profile television directors, media executives, and celebrities. Our VIP companion directory offers discreet, highly articulate escorts trained in high-profile social etiquette.",
     "Privacy is unconditionally preserved with zero digital records kept. Settle your booking comfortably on delivery in cash or UPI.",
     ["sector-16", "sector-18", "sector-125"]
    ),
    ("expo-mart", "Expo Mart",
     "India Expo Centre & Mart is situated on the Greater Noida Expressway, reachable via Knowledge Park II Metro Station on the Aqua Line.",
     "Surrounded by international exhibition halls, corporate convention centres, IT campuses, and luxury hospitality towers.",
     "Adjacent to Crowne Plaza Greater Noida and minutes from Jaypee Greens Golf & Spa Resort.",
     "India Expo Mart hosts global trade fairs, auto expos, and international corporate summits. Foreign delegates and domestic business visitors can book multilingual VIP models and Russian escorts for dinner dates and overnight stays.",
     "Our companions provide prompt hotel outcall to all executive rooms near Expo Mart with complete confidentiality and zero upfront fees.",
     ["sector-62", "sector-137", "sector-168"]
    ),
    ("jaypee-greens", "Jaypee Greens",
     "Jaypee Greens is a prestigious 452-acre golf township located along the expressway in Sector 128 and Greater Noida, accessible via Pari Chowk and Aqua Line metro.",
     "Surrounded by championship 18-hole golf courses, luxury resort villas, helipads, and serene water bodies.",
     "Home to the luxurious Jaypee Greens Golf & Spa Resort and Wish Town executive suites.",
     "Jaypee Greens represents elite luxury living and executive recreation in Noida NCR. Discerning gentlemen staying in resort suites can enjoy private companionship from top-tier VIP models and international escorts.",
     "Experience unforgettable intimacy and royal hospitality with verified photo authenticity and complete financial discretion.",
     ["sector-128", "sector-132", "sector-137"]
    ),
    ("amity-university", "Amity University",
     "Amity University Noida is situated in Sector 125 along the expressway, moments from Kalindi Kunj and Okhla Bird Sanctuary Metro Station.",
     "Surrounded by vibrant youth cafes, student residential complexes, IT parks, and executive guest suites.",
     "Located within 5 minutes drive of Sandal Suites by Lemon Tree and central Noida luxury hotels.",
     "The Amity University corridor is lively and cosmopolitan. Executive visitors and young travelers can meet genuine, charming college models and independent female escorts for relaxed coffee dates and intimate moments.",
     "All profiles are verified for real photo accuracy, personal hygiene, and friendly manners, with zero advance payment needed.",
     ["sector-125", "sector-128", "sector-16"]
    ),
    ("radisson-blu-sector-13", "Radisson Blu Sector 13",
     "Radisson Blu Hotel is the landmark five-star property located adjacent to DLF Mall of India in central Noida, conveniently accessible via Sector 18 Metro Station.",
     "Surrounded by corporate corporate offices, luxury retail malls, upscale spas, and executive towers.",
     "Situated right at the hotel, companions arrive directly at your room door within 15 to 25 minutes of booking.",
     "Radisson Blu is the favored five-star destination for corporate titans and international business travelers visiting Noida. Our VIP models and Russian companions specialize in five-star hotel in-room visits with impeccable discretion.",
     "Enjoy prompt, polite service with zero lobby scrutiny and transparent cash-on-delivery tariffs.",
     ["sector-18", "sector-16", "sector-62"]
    )
]

landmarks = []
for item in landmarks_raw:
    slug, name, reach, around, prox, p1, p2, sectors_linked = item
    landmarks.append({
        "slug": slug,
        "name": name,
        "how_to_reach": reach,
        "what_is_around": around,
        "hotel_proximity": prox,
        "intro": [p1, p2],
        "sectors": sectors_linked,
        "faqs": [
            {
                "q": f"How fast can an escort arrive near {name}?",
                "a": f"Companions typically arrive within 15 to 30 minutes at any hotel or private residence near {name} across Noida."
            },
            {
                "q": f"Are outcall services near {name} discreet?",
                "a": f"Yes. Companions arrive dressed casually and elegantly, ensuring total privacy and zero unwanted attention in hotel lobbies."
            },
            {
                "q": f"Can I pay cash on delivery for bookings near {name}?",
                "a": f"Absolutely. Veloura enforces a strict zero-advance policy. You only pay in cash or UPI after meeting your companion in person."
            }
        ]
    })

with open(os.path.join(DATA_DIR, 'landmarks.json'), 'w', encoding='utf-8') as f:
    json.dump(landmarks, f, indent=2, ensure_ascii=False)

print(f"Generated data/landmarks.json with {len(landmarks)} landmarks.")

# ── 3. CATEGORIES DATA (8 Categories) ─────────────────────────
categories_raw = [
    ("college-girls", "College Girls",
     "Young, sweet, and naturally attractive undergraduate students aged 18 to 22 who enjoy genuine romantic conversations and unhurried dates.",
     "Ideal for gentlemen seeking non-commercial, friendly vibes, playful banter, and affectionate private companionship without attitude.",
     "₹2,499", "₹12,000",
     ["sector-18", "sector-62", "sector-125"],
     "College girl escorts in Noida are among the most sought-after companions for gentlemen desiring fresh, energetic, and natural romance. These sweet young models are educated, polite, and eager to share meaningful conversations alongside intimate moments.",
     "Whether meeting for a relaxed coffee date in Sector 104 or spending private time in a sanitized hotel suite near Sector 62, our verified college models ensure total mutual comfort and genuine affection."
    ),
    ("russian-escorts", "Russian Escorts",
     "Stunning European and Russian blonde models with statuesque figures, fair complexions, and international luxury hospitality standards.",
     "Tailored for high-profile corporate delegates, luxury hotel guests, and clients seeking glamorous foreign companionship.",
     "₹6,999", "₹24,999",
     ["sector-18", "sector-128", "sector-137"],
     "Russian escorts in Noida provide an exotic, world-class dimension of luxury companionship. These international models are tall, glamorous, and fluent in English, offering royal accompaniment for executive dinners and five-star hotel stays.",
     "All Russian companion profiles are authenticated with genuine photo verification, offering doorstep outcalls to luxury hotels along Noida Expressway with strict cash-on-delivery assurance."
    ),
    ("housewife-escorts", "Housewife Escorts",
     "Mature, affectionate, and emotionally grounded women aged 26 to 32 who understand the desires of respectful gentlemen.",
     "Perfect for clients seeking warm maternal tenderness, unhurried physical affection, and peaceful private conversations.",
     "₹2,499", "₹11,000",
     ["sector-50", "sector-76", "sector-110"],
     "Housewife escorts in Noida bring deep warmth, emotional maturity, and genuine understanding to every private meeting. If you seek comforting company free from the rush of commercial agencies, our independent housewives provide a soothing sanctuary.",
     "They manage their private schedules independently, welcoming respectful gentlemen to sanitized apartments or visiting executive hotel rooms across residential Noida sectors."
    ),
    ("model-escorts", "Model Escorts",
     "Photogenic ramp, commercial print, and fashion models with striking physical beauty, impeccable styling, and poised social grace.",
     "Designed for upscale cocktail dinners, VIP corporate banquets, high-fashion events, and luxury weekend getaways.",
     "₹3,999", "₹18,000",
     ["sector-18", "sector-16", "sector-93"],
     "Model escorts in Noida embody high-fashion elegance and breathtaking visual allure. These gorgeous models regularly participate in fashion shoots and brand promotions, possessing the poise and charm to dazzle in any elite social environment.",
     "When you invite a model companion from Veloura to your Radisson or Jaypee Greens suite, you are guaranteed an extraordinary evening of luxury, charm, and attentive personal companionship."
    ),
    ("vip-escorts", "VIP Escorts",
     "High-profile luxury companions and elite corporate hostesses catering exclusively to discerning executives and dignitaries.",
     "Suited for business delegates, diplomats, and VIP travelers who demand the highest standards of beauty, etiquette, and confidentiality.",
     "₹4,999", "₹22,000",
     ["sector-18", "sector-128", "sector-137"],
     "VIP escorts in Noida cater to an exclusive clientele of business leaders and international visitors who accept nothing less than perfection. Our VIP models are highly educated, multilingual, and groomed in royal hospitality standards.",
     "With full-night packages and bespoke multi-day accompaniment options, our VIP service guarantees complete discretion, non-disclosure integrity, and five-star doorstep outcall delivery."
    ),
    ("air-hostess-escorts", "Air Hostess Escorts",
     "Polished corporate aviation and commercial airline cabin crew with graceful etiquette, global travel exposure, and radiant charm.",
     "Ideal for travelers seeking worldly conversations, sophisticated grooming, punctual arrivals, and cheerful companionship.",
     "₹3,499", "₹16,000",
     ["sector-125", "sector-128", "sector-137"],
     "Air hostess escorts in Noida offer the irresistible allure of cabin crew elegance combined with polite, world-class guest hospitality. Having traveled extensively across international destinations, these companions are engaging storytellers and charming dinner partners.",
     "Available during layovers and off-duty schedules across Noida expressway hotels, our air hostess companions bring grace and refreshing cheer to every rendezvous."
    ),
    ("independent-escorts", "Independent Escorts",
     "Self-employed, educated women who manage their own bookings directly without middleman agencies or commission brokers.",
     "Best for clients who prioritize direct transparent communication, honest expectations, and authentic real-life connections.",
     "₹2,999", "₹14,000",
     ["sector-18", "sector-62", "sector-50"],
     "Independent escorts in Noida offer direct, transparent communication between clients and companions with zero middleman interference. Because they control their own schedules, our independent models are relaxed, respectful, and never rushed.",
     "Each profile features authentic, unaltered photos and honest service descriptions. Enjoy total financial peace of mind with our strict cash-on-delivery guarantee upon in-person arrival."
    ),
    ("cheap-call-girls", "Cheap Call Girls",
     "Affordable, budget-friendly verified companions providing sweet physical affection and genuine companionship at accessible rates.",
     "Perfect for students, young executives, and budget-conscious gentlemen seeking quality companionship starting at ₹1,999.",
     "₹1,999", "₹8,999",
     ["sector-62", "sector-63", "sector-15"],
     "Cheap call girls in Noida offer high-quality, genuine companionship at honest, pocket-friendly rates starting from just ₹1,999. We believe every gentleman deserves affectionate, stress-relieving company without financial strain or deceptive hidden fees.",
     "Despite the budget pricing, all profiles undergo rigorous phone and image verification to guarantee hygiene, safety, and authentic likeness upon arrival."
    )
]

categories = []
for item in categories_raw:
    slug, name, desc, suit, h_rate, n_rate, sectors_linked, p1, p2 = item
    categories.append({
        "slug": slug,
        "name": name,
        "description": desc,
        "suit": suit,
        "rate_hourly": h_rate,
        "rate_night": n_rate,
        "sectors": sectors_linked,
        "intro": [p1, p2],
        "faqs": [
            {
                "q": f"What are the rates for {name} in Noida?",
                "a": f"Rates for {name} start at {h_rate} for 1-hour sessions and {n_rate} for full-night packages. Transportation and outcall service are included with zero advance payment."
            },
            {
                "q": f"How do I book {name} through Veloura?",
                "a": f"Simply browse our verified {name} profiles, click the WhatsApp button, and share your preferred Noida hotel or locality. Your companion arrives in 30 to 45 minutes."
            },
            {
                "q": f"Is cash on delivery available for {name}?",
                "a": f"Yes. We operate exclusively on cash on delivery. You settle the agreed charges in cash or UPI only after meeting your {name} companion in person."
            }
        ]
    })

with open(os.path.join(DATA_DIR, 'categories.json'), 'w', encoding='utf-8') as f:
    json.dump(categories, f, indent=2, ensure_ascii=False)

print(f"Generated data/categories.json with {len(categories)} categories.")

# ── 4. LEGAL DATA (7 Pages) ───────────────────────────────────
legal_raw = [
    ("privacy-policy", "Privacy Policy",
     [
         ("1. Commitment to Client Confidentiality",
          "At Veloura Noida, client privacy is not merely a policy—it is the foundational cornerstone of our business operations. We recognize that accessing adult classifieds and companion directories requires absolute, uncompromising discretion. We guarantee that your personal identity, browsing telemetry, mobile contact numbers, and communication transcripts are held under strict confidentiality protocols and will never be sold, rented, monetized, or transferred to third-party commercial databases."),
         ("2. Information We Collect and Retain",
          "When you browse veloura.com, we collect minimal technical telemetry necessary for basic site security and server optimization, such as IP addresses, user-agent headers, and page view counts. We do not require account registration, passwords, or credit card information. Temporary WhatsApp communications are used solely to confirm companion availability and meeting logistics, after which chat logs are routinely purged from our active concierge systems."),
         ("3. Cookie and Local Storage Usage",
          "Our portal utilizes limited client-side browser storage (localStorage) exclusively to store your 18+ age verification confirmation under the key adultConfirmedAt for a 30-day duration. This prevents repetitive age-gate prompts during return visits. No intrusive tracking pixels, cross-site trackers, or third-party behavioral advertising cookies are embedded on our static architecture."),
         ("4. Third-Party Links and External Gateways",
          "Our site may feature outbound communication links to messaging platforms such as WhatsApp (Meta Platforms) and Telegram. While we strive to provide safe direct contact channels, we encourage clients to familiarize themselves with the respective privacy policies of external communication applications. Veloura operates strictly as an informational and directory portal."),
         ("5. Contact Our Privacy Administrator",
          "If you have inquiries regarding our data handling practices or wish to request the deletion of any transient communication records, please contact our administrative desk at hello@veloura.com. We review and process data privacy requests within 48 business hours.")
     ]
    ),
    ("terms", "Terms and Conditions",
     [
         ("1. Agreement to Terms of Service",
          "By accessing, browsing, or utilizing the services and directories hosted on veloura.com, you expressly agree to be bound by these Terms and Conditions and all applicable local regulations of the Gautam Buddha Nagar district, Uttar Pradesh, India. If you do not consent to any portion of these binding terms, you are legally instructed to exit this website immediately."),
         ("2. Strict Age Verification (18+ Requirement)",
          "This website contains classified advertisements and informational directories pertaining to adult companionship and personal escort hospitality. Access is strictly restricted to consenting individuals who have attained at least 18 years of age or the legal age of majority in their jurisdiction. Any attempt by a minor to access, browse, or solicit listings through this portal is strictly prohibited and constitutes a direct violation of these terms."),
         ("3. Independent Contractor Relationship",
          "Veloura functions as a curated digital classifieds directory and concierge liaison network. All female companions, models, and hostesses listed on this portal operate as independent adults who voluntarily set their private schedules and personal boundaries. No employer-employee relationship exists between Veloura and the independent advertisers featured herein."),
         ("4. Zero Advance Payment and Fraud Protection",
          "To safeguard clients against digital fraud, Veloura mandates a strict Cash On Delivery (COD) policy. Clients are explicitly instructed NEVER to transfer advance booking deposits, medical registration fees, hotel advance transfers, or unverified QR code payments prior to in-person meeting. Veloura disclaims all liability for transactions conducted outside our sanctioned cash-on-delivery guidelines."),
         ("5. Limitation of Legal Liability",
          "In no event shall Veloura, its affiliates, directors, or technology operators be liable for any incidental, consequential, punitive, or indirect damages arising from the voluntary use of listings on this platform. Users agree that all personal interactions with independent companions are undertaken voluntarily, with mutual adult consent and personal responsibility.")
     ]
    ),
    ("dmca-policy", "DMCA & Intellectual Property Policy",
     [
         ("1. Digital Millennium Copyright Act Compliance",
          "Veloura respects the intellectual property rights of content creators, photographers, and copyright holders worldwide. In accordance with the Digital Millennium Copyright Act (17 U.S.C. § 512) and Indian Copyright Act 1957 amendments, we maintain expeditious notice-and-takedown procedures to investigate and resolve claims of alleged copyright infringement across our digital directory."),
         ("2. Submission of Takedown Notifications",
          "If you believe that your copyrighted photographs, vector illustrations, trademarks, or proprietary text have been displayed on veloura.com without authorized consent, you or your authorized agent must submit a formal written infringement notice containing the following mandatory statutory elements:"),
         ("3. Required Elements of a Valid Notice",
          "A valid infringement notice must include: (a) Identification of the copyrighted work claimed to have been infringed; (b) Direct URL link(s) on veloura.com where the allegedly infringing asset is hosted; (c) Your full legal name, physical address, telephone number, and verifiable email address; (d) A statement affirming a good-faith belief that use of the material is not authorized; (e) A statement under penalty of perjury that the information is accurate and you are the copyright holder or authorized representative; (f) A physical or electronic signature."),
         ("4. Expeditious Takedown Protocol",
          "Please direct all DMCA notices to our designated copyright agent via email at hello@veloura.com with the subject line 'DMCA Takedown Request'. Upon receipt of a legally compliant notice, our engineering team will inspect the asset, disable access, and remove the contested content within 24 to 48 business hours."),
         ("5. Repeat Infringer Policy and Counter-Notifications",
          "In appropriate circumstances, Veloura reserves the right to terminate listings or permanently bar independent advertisers who are found to be repeat infringers of third-party intellectual property. Advertisers whose content is removed mistakenly may submit a compliant counter-notification detailing their legal rights to the disputed material.")
     ]
    ),
    ("disclaimer", "Website Disclaimer & Adult Compliance",
     [
         ("1. Adult Classifieds Disclaimer",
          "The material, photographs, text, and listings displayed on veloura.com are provided strictly for informational, entertainment, and adult companion classified purposes. This portal is intended exclusively for consenting adults who have reached the legal age of majority (18+ in India). Browsing of this portal by minors is strictly forbidden by technological barriers and age-gate screening."),
         ("2. Consensual Adult Companionship",
          "All listings represent independent adult individuals offering consensual social accompaniment, dinner dates, conversational warmth, and private personal hospitality. Veloura does not endorse, solicit, or promote illegal activities, non-consensual acts, human trafficking, or coercion of any kind. We uphold the human dignity, freedom, and bodily autonomy of all adult individuals."),
         ("3. No Warranty of Accuracy",
          "While Veloura makes every reasonable effort to audit advertiser authenticity, verify in-person photographs, and confirm active telephone contact details, all portal materials are provided on an 'as is' and 'as available' basis without express or implied warranties. Clients are encouraged to exercise personal discretion and verify individual compatibility upon arrival."),
         ("4. Financial Protection and Scam Advisory",
          "We unequivocally state that Veloura does NOT authorize any advertiser, coordinator, or third party to demand advance digital funds, cryptocurrency transfers, or gift card vouchers. Settle service fees exclusively in person after meeting your companion at your confirmed destination."),
         ("5. Jurisdiction and Legal Venue",
          "Any dispute, controversy, or claim arising out of or relating to the use of veloura.com shall be governed by and construed in accordance with the laws of India, under the exclusive territorial jurisdiction of the competent courts in Gautam Buddha Nagar, Uttar Pradesh.")
     ]
    ),
    ("legal", "Legal Notice & Regulatory Compliance",
     [
         ("1. Regulatory Framework and Entity Information",
          "This legal notice governs the digital operation of veloura.com, an independent escort directory and adult classifieds advertising platform situated in Sector 18, Noida, Gautam Buddha Nagar, Uttar Pradesh, PIN 201301. We operate in full compliance with the Information Technology Act, 2000, and subsequent Intermediary Guidelines rules."),
         ("2. Platform Intermediary Status",
          "Veloura operates as a digital marketplace and intermediary platform providing communication channels between independent adult companions and prospective clients. We do not operate brothels, pimping syndicates, or commercial physical premises. Advertisers post voluntary classified ads under their personal legal responsibility."),
         ("3. Zero-Tolerance Human Trafficking Policy",
          "Veloura maintains a zero-tolerance policy against human trafficking, commercial exploitation of minors, and involuntary labor. Any listing suspected of coercion, exploitation, or deceptive recruitment will be summarily deleted and reported to law enforcement authorities alongside technical access logs."),
         ("4. Voluntary Adult Participation",
          "All models, escorts, and entertainers registered with our network are verified consenting adults over the age of 18 who retain 100% of their private earnings. Companions reserve the full legal right to decline any appointment or terminate an engagement if their personal safety, dignity, or boundaries are compromised."),
         ("5. Grievance Redressal and Compliance Contact",
          "In accordance with Information Technology Intermediary Rules, any user grievances or legal complaints may be addressed directly to our Grievance Officer at hello@veloura.com. We acknowledge receipt within 24 hours and resolve verified grievances within statutory timeframes.")
     ]
    ),
    ("about", "About Veloura Noida",
     [
         ("1. Our Vision and Core Mission",
          "Founded in 2026, Veloura was established with a singular, unwavering objective: to bring safety, transparency, elegance, and authenticity to the escort and companion industry in Noida. For too long, business travelers and discerning residents in Delhi NCR have faced deceptive picture fraud, advance deposit scams, and unprofessional agencies. Veloura was built to provide an elite, photo-verified haven where distinguished gentlemen can connect with educated, charming companions in complete confidence."),
         ("2. 100% Real Photo Verification Standard",
          "We operate on a zero-compromise approach to visual integrity. Every single profile featured on our portal undergoes in-person photograph authentication and phone verification. When you select a college student in Sector 62, a ramp model in Sector 18, or a VIP hostess along Noida Expressway, the exact companion you chose is who arrives at your hotel room door."),
         ("3. Pioneering the Cash On Delivery Guarantee",
          "Financial security is the bedrock of trust. Veloura pioneered the strict zero-advance payment protocol across Noida NCR. We never ask clients to transfer booking deposits, registration fees, or untraceable UPI codes. You pay your companion directly only after welcoming her in person, ensuring complete mutual satisfaction."),
         ("4. Hyperlocal Network Across 25 Noida Sectors",
          "Our extensive coverage spans 25 strategic sectors across Noida, from central commercial zones like Sector 18 and Sector 16 Film City to corporate IT parks in Sector 62 and luxury residential belts along the Noida-Greater Noida Expressway. With average outcall arrival times of 25 to 40 minutes, your desires are fulfilled with unmatched speed and punctuality."),
         ("5. 24/7 Female Concierge Desk",
          "Our polite, professional female coordinators are available 24 hours a day, 7 days a week via WhatsApp and telephone hotline. Whether you need discrete hotel recommendations, custom duration packages, or overnight arrangements, our concierge team is dedicated to exceeding your expectations.")
     ]
    ),
    ("contact", "Contact & Concierge Support",
     [
         ("1. 24/7 Direct Concierge Helpline",
          "Connecting with Veloura Noida is effortless, rapid, and completely discreet. Our 24/7 dedicated concierge desk is staffed around the clock to assist you with companion portfolios, real-time availability in your sector, customized tariff packages, and immediate five-star hotel outcall bookings. You can call our primary hotline directly at +918769604056 or our secondary support line at +917339763985."),
         ("2. Instant WhatsApp Booking Desk",
          "For immediate responses and private portfolio browsing, WhatsApp remains our most popular communication channel. Message our female coordinator on WhatsApp at +918769604056. Simply let us know your location in Noida (such as Sector 18, Sector 62, or Noida Expressway) and your preferred companion category, and we will share live verified profiles ready for doorstep arrival within 30 minutes."),
         ("3. Telegram and Confidential Messaging",
          "For clients who prefer enhanced digital anonymity without sharing phone numbers, you can message our confidential Telegram concierge handle @veloura. Our Telegram channel provides private photo portfolios and booking assistance with encrypted end-to-end security."),
         ("4. Central Office and Regional Coordination",
          "Our administrative coordination office is centrally situated at Sector 18, Noida, Uttar Pradesh, PIN 201301. We coordinate outcalls across all 25 Noida sectors including Sector 15, Sector 16, Sector 62, Sector 63, Sector 70 to 78, Sector 93, Sector 100, Sector 104, Sector 110, Sector 117 to 122, Sector 125, Sector 128, Sector 132, Sector 137, and Sector 168."),
         ("5. Email Inquiries and General Assistance",
          "For corporate booking inquiries, advertiser onboarding, model verification, or general administrative questions, please email our support desk at hello@veloura.com. Our administrative team monitors emails 24 hours a day and responds to all inquiries promptly.")
     ]
    )
]

legal_pages = []
for item in legal_raw:
    slug, title, sections_list = item
    legal_pages.append({
        "slug": slug,
        "title": title,
        "sections": [{"heading": h, "body": b} for h, b in sections_list]
    })

with open(os.path.join(DATA_DIR, 'legal.json'), 'w', encoding='utf-8') as f:
    json.dump(legal_pages, f, indent=2, ensure_ascii=False)

print(f"Generated data/legal.json with {len(legal_pages)} legal pages.")

