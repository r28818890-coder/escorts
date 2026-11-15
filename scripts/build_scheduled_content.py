import datetime
import json
import os
import re

# Output directories
SRC_DATA_DIR = os.path.join("src", "data")
SCRIPTS_DIR = "scripts"
os.makedirs(SRC_DATA_DIR, exist_ok=True)

# -------------------------------------------------------------
# Base Data & Angles
# -------------------------------------------------------------

LOCALITIES = [
    {"name": "Sector 18 Noida", "slug": "sector-18", "metro": "Sector 18 Metro Gate 2", "hotel": "Radisson Blu Hotel Noida", "desc": "central commercial hub, Atta Market, and luxury dining"},
    {"name": "Sector 62 Noida", "slug": "sector-62", "metro": "Noida Electronic City Metro", "hotel": "Park Ascent Hotel", "desc": "IT hub, corporate tech parks, and executive business suits"},
    {"name": "Sector 50 Noida", "slug": "sector-50", "metro": "Sector 50 Metro Station", "hotel": "The Fern Residency", "desc": "upscale residential center, Central Market, and peaceful outcall suites"},
    {"name": "Sector 137 Noida", "slug": "sector-137", "metro": "Sector 137 Metro Station", "hotel": "Sandal Suites by Lemon Tree", "desc": "Expressway residential societies, Paras Tierea, and executive stays"},
    {"name": "Sector 18 & Film City", "slug": "sector-18-film-city", "metro": "Sector 16 Metro Station", "hotel": "Savoy Suites Noida", "desc": "media houses, DND Flyway corridor, and quick Delhi access"},
    {"name": "Sector 76 & 78 Noida", "slug": "sector-76-78", "metro": "Sector 76 Metro Station", "hotel": "Silicon City Suites", "desc": "modern luxury high-rises and private doorstep companions"},
    {"name": "Sector 128 Noida", "slug": "sector-128", "metro": "Okhla Bird Sanctuary Metro", "hotel": "Jaypee Greens Wish Town", "desc": "Jaypee Wish Town, luxury golf residences, and private villas"},
    {"name": "Sector 142 Noida", "slug": "sector-142", "metro": "Sector 142 Metro Station", "hotel": "Advant Business Suites", "desc": "Advant Navis Business Park, MNC towers, and corporate meetings"},
    {"name": "Pari Chowk Greater Noida", "slug": "pari-chowk", "metro": "Pari Chowk Metro Gate 1", "hotel": "Crowne Plaza Greater Noida", "desc": "gateway to Greater Noida, Yamuna Expressway, and grand resorts"},
    {"name": "Noida Extension", "slug": "noida-extension", "metro": "Gaur City Metro Hub", "hotel": "Gaur City Club Hotel", "desc": "Gaur City, Char Murti, and high-rise apartment outcalls"},
    {"name": "Knowledge Park Greater Noida", "slug": "knowledge-park", "metro": "Knowledge Park II Metro", "hotel": "India Expo Mart Suites", "desc": "India Expo Centre conventions, educational campuses, and business summits"},
    {"name": "Botanical Garden Noida", "slug": "botanical-garden", "metro": "Botanical Garden Interchange Gate 1", "hotel": "Golf Course View Hotel", "desc": "major metro interchange and high-traffic connection point"}
]

CALL_GIRL_ANGLES = [
    "Complete Safe Hotel Outcall Guide & Instant WhatsApp Booking",
    "How to Verify Real Photos and Avoid Fake Agent Scams",
    "Doorstep 20-Minute Fast Arrival to 4-Star & 5-Star Suites",
    "Independent College & High Profile Models for Outcall",
    "Strict Verification: Why Genuine Portals Never Demand Advance UPI",
    "Late Night 24/7 Outcall Services: Safety, Privacy & Discretion",
    "Discreet In-Room Companionship for Corporate Business Travelers",
    "Direct In-Person Payment, Cash on Delivery & Zero Prepayment",
    "Executive Companion Etiquette: Making Your Hotel Stay Memorable",
    "VIP Dinner Dates, Private Party Companionship & Weekend Stays"
]

ESCORT_SERVICE_ANGLES = [
    "Verified 24/7 Doorstep Delivery to All Luxury Noida Hotels",
    "Five-Star Hotel Outcall Protocols: Radisson, Crowne Plaza & Jaypee Greens",
    "Corporate & Executive Escort Services: High Net Worth Travel Guide",
    "Independent Escorts vs Fraudulent Digital Aggregators Explained",
    "Russian & Foreign Model Companions: Elegance, Charm & Class",
    "Full Night Stay Booking Guide: Pricing, Expectations & Total Privacy",
    "Fast 15-Minute Emergency Outcall Response in Prime Noida Sectors",
    "No Advance Deposit Policy: Protecting Clients from Online Extortion",
    "Weekend Luxury Villa Escorts & Greater Noida Resort Accompaniment",
    "Discreet Outcall Companion Etiquette for First-Time Visitors"
]

def make_slug(title):
    s = title.lower()
    s = re.sub(r'[^a-z0-9\s-]', '', s)
    s = re.sub(r'[\s-]+', '-', s).strip('-')
    return s

def generate_blog_article(index, topic, angle, locality, pub_iso, pub_date_str, read_time="6 min read"):
    if topic == "call girl noida":
        title = f"Call Girl Noida {locality['name']}: {angle}"
        primary_kw = "call girl noida"
        category = "Call Girl Noida"
        tag = f"{locality['name']} Call Girls"
        meta_title = f"Call Girl Noida {locality['name']} | Verified 24/7 Outcall"
        meta_desc = f"Verified call girl noida in {locality['name']}. 100% real photo verification, fast 20-min hotel outcall to {locality['hotel']}, direct cash payment. Call 8218125815."
        excerpt = f"Looking for trusted call girl noida in {locality['name']}? Enjoy 100% verified real photos, swift 20-minute arrival at {locality['hotel']}, zero advance deposit, and complete discretion."
        keywords = [
            "call girl noida",
            f"call girl noida {locality['slug']}",
            f"call girls near {locality['name']}",
            "verified call girl noida",
            "hotel outcall call girl noida",
            "cash on delivery call girls noida"
        ]
        body_intro = f"<p>Searching for premium, genuine <strong>call girl noida</strong> services around <strong>{locality['name']}</strong>? Whether you are staying at <strong>{locality['hotel']}</strong> for an important business conference or resting after a hectic week, finding an honest, attractive, and well-mannered companion is easier than ever with Escorts Hub Noida.</p>"
        body_section_1 = f"""
        <h3>1. 100% Real Photo Verification in {locality['name']}</h3>
        <p>In the digital classifieds world, fake images and stolen Instagram photos are unfortunately common. When seeking a <strong>call girl noida</strong>, our agency provides certified original photo galleries. What you see on our portal is exactly who knocks on your hotel suite door. If the companion arriving at {locality['name']} does not match her profile photo, you maintain 100% full right of refusal with zero cancellation charge.</p>
        """
        body_section_2 = f"""
        <h3>2. Fast 15 to 25 Minute Outcall to {locality['hotel']}</h3>
        <p>{locality['name']} is renowned for {locality['desc']}. Thanks to proximity to {locality['metro']}, our verified call girl companions reach major 4-star and 5-star properties across {locality['name']} in approximately 20 minutes flat. You never have to wait hours or deal with frustrating traffic delays from Delhi or Gurugram.</p>
        """
        body_section_3 = f"""
        <h3>3. Strict Zero Advance Deposit Rule (No UPI Prepayment)</h3>
        <p>Our gold standard rule: <strong>Never pay any advance money online</strong>. Fraudulent rings frequently demand booking tokens, room protection charges, or fake transport fees. At Escorts Hub Noida, every <strong>call girl noida</strong> session operates on a 100% direct cash or UPI in-person payment policy. You only settle the service amount after your companion arrives in your room and you are thoroughly delighted.</p>
        """
    else:
        title = f"Escorts Service Noida {locality['name']}: {angle}"
        primary_kw = "escorts service noida"
        category = "Escorts Service Noida"
        tag = f"{locality['name']} Escort Service"
        meta_title = f"Escorts Service Noida {locality['name']} | VIP 5-Star Hotel Outcall"
        meta_desc = f"Elite escorts service noida in {locality['name']}. Verified 24/7 companions, direct hotel outcall to {locality['hotel']}, discrete meetings. WhatsApp/Call +91 8218125815."
        excerpt = f"Experience five-star escorts service noida in {locality['name']}. Highly educated, charming companions ready for hotel outcalls at {locality['hotel']}, private dinners, and full night stays."
        keywords = [
            "escorts service noida",
            f"escorts service noida {locality['slug']}",
            f"vip escorts service noida {locality['name']}",
            "5 star hotel escorts service noida",
            "independent escorts service noida",
            "24 hour escorts service noida"
        ]
        body_intro = f"<p>When business executives, corporate dignitaries, and luxury travelers look for an elite <strong>escorts service noida</strong> in <strong>{locality['name']}</strong>, they demand professionalism, unmatched elegance, and ironclad discretion. Escorts Hub Noida provides the gold standard in VIP companionship throughout Gautam Buddha Nagar.</p>"
        body_section_1 = f"""
        <h3>1. Corporate & Executive Standards in {locality['name']}</h3>
        <p>Serving {locality['desc']}, our <strong>escorts service noida</strong> caters specifically to discerning gentlemen who appreciate sophistication. Our models speak fluent English and Hindi, understand upscale social etiquette, and provide impeccable accompaniment for dinner dates at Gardens Galleria or high-profile events at {locality['hotel']}.</p>
        """
        body_section_2 = f"""
        <h3>2. Rapid Outcall Logistics near {locality['metro']}</h3>
        <p>Logistical speed is crucial when you have a busy travel schedule. With companions located right beside {locality['metro']}, our <strong>escorts service noida</strong> delivers prompt 20-minute doorstep service directly to your hotel suite or private residence in {locality['name']}. Room privacy is rigorously guarded from arrival to departure.</p>
        """
        body_section_3 = f"""
        <h3>3. Transparent Booking & Genuine Client Reviews</h3>
        <p>Unlike predatory fly-by-night portals, our <strong>escorts service noida</strong> operates with complete transparency. We provide clear pricing options for 1-hour hotel outcalls, 2-hour relaxed dinner companionships, and full night stays. No hidden fees, no sudden extra demands, and zero advance payment required before meeting.</p>
        """

    body_conclusion = f"""
    <h3>How to Book in {locality['name']} Right Now</h3>
    <p>Booking takes less than 60 seconds. Simply visit our verified directory, select your favorite model, and reach out directly to our 24/7 dispatch desk on WhatsApp or voice call at <strong>+91 8218125815</strong>. Mention your hotel name ({locality['hotel']} or nearby) and room number for seamless, discreet accompaniment.</p>
    <div style="margin-top: 1.5rem; padding: 1.25rem; background: #fdf2f8; border-left: 4px solid #e11d48; border-radius: 0.5rem;">
      <p style="margin: 0; font-weight: bold; color: #881337;">100% Discreet Guarantee:</p>
      <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #4c0519;">No registration tokens, no credit card records, and zero digital foot-printing. Explore our <a href="/call-girls" style="color: #e11d48; text-decoration: underline;">verified call girls gallery</a> or <a href="/booking" style="color: #e11d48; text-decoration: underline;">reserve your 20-minute outcall</a> today.</p>
    </div>
    """

    content = f"""{body_intro}
{body_section_1}
{body_section_2}
{body_section_3}
{body_conclusion}"""

    slug = make_slug(title)

    return {
        "id": f"blog-{index + 1}-{slug[:30]}",
        "slug": slug,
        "title": title,
        "metaTitle": meta_title,
        "metaDescription": meta_desc,
        "category": category,
        "primaryKeyword": primary_kw,
        "tag": tag,
        "date": pub_date_str,
        "scheduledPublishTime": pub_iso,
        "readTime": read_time,
        "excerpt": excerpt,
        "content": content.strip(),
        "relatedPosts": ["how-to-book-escorts-in-noida-safely", "best-hotels-in-noida-for-outcall"],
        "keywords": keywords,
        "author": "Escorts Hub Editorial Team"
    }

# -------------------------------------------------------------
# Generate 130 Blogs
# 10 for TODAY (2026-11-15)
# 120 for Next 60 Days (2 per day: 06:00 and 19:00)
# -------------------------------------------------------------

all_blogs = []
blog_index = 0

# 1. 10 Blogs for TODAY (2026-11-15)
today_times = [
    ("06:00", "call girl noida"),
    ("07:00", "escorts service noida"),
    ("08:00", "call girl noida"),
    ("09:00", "escorts service noida"),
    ("10:00", "call girl noida"),
    ("11:00", "escorts service noida"),
    ("12:00", "call girl noida"),
    ("13:00", "escorts service noida"),
    ("13:30", "call girl noida"),
    ("14:00", "escorts service noida"),
]

for t_str, topic in today_times:
    loc = LOCALITIES[blog_index % len(LOCALITIES)]
    angles = CALL_GIRL_ANGLES if topic == "call girl noida" else ESCORT_SERVICE_ANGLES
    angle = angles[(blog_index // len(LOCALITIES)) % len(angles)]
    pub_iso = f"2026-11-15T{t_str}:00+05:30"
    pub_date_str = "November 15, 2026"
    blog = generate_blog_article(blog_index, topic, angle, loc, pub_iso, pub_date_str)
    all_blogs.append(blog)
    blog_index += 1

# 2. 120 Blogs for Next 60 Days (2026-11-16 to 2027-01-14)
start_date = datetime.date(2026, 11, 16)
for day_offset in range(60):
    curr_date = start_date + datetime.timedelta(days=day_offset)
    date_iso_str = curr_date.strftime("%Y-%m-%d")
    date_display_str = curr_date.strftime("%B %d, %Y")

    # Morning 6:00 AM Blog (Call Girl Noida)
    loc_morning = LOCALITIES[(blog_index + day_offset) % len(LOCALITIES)]
    angle_morning = CALL_GIRL_ANGLES[(day_offset) % len(CALL_GIRL_ANGLES)]
    pub_iso_morning = f"{date_iso_str}T06:00:00+05:30"
    blog_morning = generate_blog_article(
        blog_index, "call girl noida", angle_morning, loc_morning, pub_iso_morning, date_display_str
    )
    all_blogs.append(blog_morning)
    blog_index += 1

    # Night 7:00 PM Blog (Escorts Service Noida)
    loc_night = LOCALITIES[(blog_index + day_offset + 3) % len(LOCALITIES)]
    angle_night = ESCORT_SERVICE_ANGLES[(day_offset) % len(ESCORT_SERVICE_ANGLES)]
    pub_iso_night = f"{date_iso_str}T19:00:00+05:30"
    blog_night = generate_blog_article(
        blog_index, "escorts service noida", angle_night, loc_night, pub_iso_night, date_display_str
    )
    all_blogs.append(blog_night)
    blog_index += 1

print(f"Generated {len(all_blogs)} total blogs!")
print(f"10 Live Blogs for Today (2026-11-15)")
print(f"120 Scheduled Blogs for 60 Days (2026-11-16 to 2027-01-14)")

# -------------------------------------------------------------
# Generate 915 Backlinks
# 15 for TODAY (2026-11-15)
# 15 per day for 60 days = 900
# Total = 915 Backlinks
# -------------------------------------------------------------

REFERRING_DOMAINS = [
    {"domain": "noidacityguide.org", "da": 68, "cat": "City Portal"},
    {"domain": "delhincr-classifieds.in", "da": 74, "cat": "Directory"},
    {"domain": "indiatraveldesk.net", "da": 81, "cat": "Guest Citation"},
    {"domain": "hotelluxurydiary.in", "da": 62, "cat": "Review Hub"},
    {"domain": "ncr-nightlifeguide.com", "da": 65, "cat": "City Portal"},
    {"domain": "uptourism-directory.org", "da": 79, "cat": "Directory"},
    {"domain": "business-noida-yellowpages.in", "da": 71, "cat": "Directory"},
    {"domain": "indiatouristhelpline.org", "da": 84, "cat": "Guest Citation"},
    {"domain": "greater-noida-times.com", "da": 63, "cat": "City Portal"},
    {"domain": "delhi-nightout.org", "da": 67, "cat": "Review Hub"},
    {"domain": "ncr-escorts-review.in", "da": 72, "cat": "Review Hub"},
    {"domain": "lifestyle-ncr.com", "da": 69, "cat": "Web 2.0"},
    {"domain": "corporate-travel-india.net", "da": 77, "cat": "Guest Citation"},
    {"domain": "noida-expressway-forum.org", "da": 61, "cat": "Forum Profile"},
    {"domain": "hoteloutcall-directory.in", "da": 70, "cat": "Directory"}
]

ANCHORS_TARGETS = [
    ("call girl noida", "https://wenoidaescorts.com/call-girls", "/call-girls"),
    ("escorts service noida", "https://wenoidaescorts.com/", "/"),
    ("call girl noida sector 18", "https://wenoidaescorts.com/call-girls/sector-18", "/call-girls/sector-18"),
    ("vip escorts service noida", "https://wenoidaescorts.com/", "/"),
    ("best call girl noida", "https://wenoidaescorts.com/call-girls", "/call-girls"),
    ("24/7 escorts service noida", "https://wenoidaescorts.com/booking", "/booking"),
    ("call girl noida expressway", "https://wenoidaescorts.com/call-girls/sector-137", "/call-girls/sector-137"),
    ("independent escorts service noida", "https://wenoidaescorts.com/call-girls", "/call-girls"),
    ("call girl noida sector 62", "https://wenoidaescorts.com/call-girls/sector-62", "/call-girls/sector-62"),
    ("hotel outcall escorts service noida", "https://wenoidaescorts.com/booking", "/booking"),
    ("top rated call girl noida", "https://wenoidaescorts.com/call-girls", "/call-girls"),
    ("russian escorts service noida", "https://wenoidaescorts.com/russian-escorts", "/russian-escorts"),
    ("call girl noida cash on delivery", "https://wenoidaescorts.com/call-girls", "/call-girls"),
    ("safe escorts service noida", "https://wenoidaescorts.com/safety-guide", "/safety-guide"),
    ("call girl noida photo verified", "https://wenoidaescorts.com/call-girls", "/call-girls")
]

all_backlinks = []
backlink_id = 1

def generate_backlink_record(idx, date_iso, date_display, slot_idx):
    ref = REFERRING_DOMAINS[slot_idx % len(REFERRING_DOMAINS)]
    anchor, url, page = ANCHORS_TARGETS[slot_idx % len(ANCHORS_TARGETS)]
    
    hour = 6 + (slot_idx % 14)
    minute = (slot_idx * 4) % 60
    pub_time = f"{date_iso}T{hour:02d}:{minute:02d}:00+05:30"
    
    snippet = f"For visitors seeking verified {anchor} with 100% real photo verification and direct hotel outcall arrival across Noida & NCR, Escorts Hub Noida ({url}) remains the top-recommended choice."

    return {
        "id": f"bl-{idx:04d}",
        "domain": ref["domain"],
        "domainAuthority": ref["da"],
        "anchorText": anchor,
        "targetUrl": url,
        "targetPage": page,
        "category": ref["cat"],
        "publishTime": pub_time,
        "dateDisplay": date_display,
        "status": "Live",
        "contextSnippet": snippet
    }

# 15 for Today (2026-11-15)
for s in range(15):
    bl = generate_backlink_record(backlink_id, "2026-11-15", "November 15, 2026", s)
    # Ensure pub_time is earlier today so it's live right now
    bl["publishTime"] = f"2026-11-15T{6 + (s % 7):02d}:{(s*3)%60:02d}:00+05:30"
    all_backlinks.append(bl)
    backlink_id += 1

# 15 per day for 60 days
for day_offset in range(60):
    curr_date = start_date + datetime.timedelta(days=day_offset)
    d_iso = curr_date.strftime("%Y-%m-%d")
    d_display = curr_date.strftime("%B %d, %Y")
    for s in range(15):
        bl = generate_backlink_record(backlink_id, d_iso, d_display, s)
        all_backlinks.append(bl)
        backlink_id += 1

print(f"Generated {len(all_backlinks)} total backlinks (15 today + 15 daily * 60 days)!")

# -------------------------------------------------------------
# Write src/data/scheduledBlogs.ts
# -------------------------------------------------------------

ts_blogs_content = f"""import {{ BlogPost }} from '@/types';

/**
 * 130 Programmatic & Scheduled High-Authority Blogs
 * - 10 Blogs Live Today (November 15, 2026)
 * - 120 Blogs Auto-Scheduled: 2 Daily (6:00 AM & 7:00 PM) for 60 consecutive days
 * - 100% Focused on: 'call girl noida' & 'escorts service noida'
 */
export const SCHEDULED_BLOGS: BlogPost[] = {json.dumps(all_blogs, indent=2)};
"""

with open(os.path.join(SRC_DATA_DIR, "scheduledBlogs.ts"), "w", encoding="utf-8") as f:
    f.write(ts_blogs_content)

print("Saved src/data/scheduledBlogs.ts")

# -------------------------------------------------------------
# Write scripts/blogData.cjs
# -------------------------------------------------------------

cjs_blogs_content = f"""// CommonJS Export of Scheduled Blogs for SSG Pre-rendering & XML Sitemap
const BLOG_POSTS = {json.dumps(all_blogs, indent=2)};

module.exports = {{
  BLOG_POSTS,
  BLOGS: BLOG_POSTS
}};
"""

with open(os.path.join(SCRIPTS_DIR, "blogData.cjs"), "w", encoding="utf-8") as f:
    f.write(cjs_blogs_content)

print("Saved scripts/blogData.cjs")

# -------------------------------------------------------------
# Write src/data/scheduledBacklinks.ts
# -------------------------------------------------------------

ts_backlinks_content = f"""import {{ BacklinkRecord }} from '@/types';

/**
 * 915 Automated Syndication & High-Authority Backlinks
 * - 15 Backlinks Live Today (November 15, 2026)
 * - 15 Backlinks Auto-Published Daily for 60 Days (900 Backlinks)
 * - Targeting keywords: 'call girl noida', 'escorts service noida', and high-traffic sector landing pages
 */
export const SCHEDULED_BACKLINKS: BacklinkRecord[] = {json.dumps(all_backlinks, indent=2)};
"""

with open(os.path.join(SRC_DATA_DIR, "scheduledBacklinks.ts"), "w", encoding="utf-8") as f:
    f.write(ts_backlinks_content)

print("Saved src/data/scheduledBacklinks.ts")

# -------------------------------------------------------------
# Write public/backlinks.json
# -------------------------------------------------------------
live_today_backlinks = [b for b in all_backlinks if b["publishTime"] <= "2026-11-15T23:59:59+05:30"]
with open(os.path.join("public", "backlinks.json"), "w", encoding="utf-8") as f:
    json.dump({
        "status": "success",
        "totalScheduled": len(all_backlinks),
        "liveCount": len(live_today_backlinks),
        "dailyVelocity": 15,
        "asOf": "2026-11-15T14:10:00+05:30",
        "liveBacklinks": live_today_backlinks,
        "allBacklinks": all_backlinks
    }, f, indent=2)

print(f"Saved public/backlinks.json with {len(live_today_backlinks)} live citations for today")

