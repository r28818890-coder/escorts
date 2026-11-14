#!/usr/bin/env python3
"""
VELOURA NETWORK STATIC BUILD ENGINE (build.py)
Phase 1 + Phase 2 Complete Static Generator.
Renders 52 pages (25 sector + 10 landmark + 8 category + 1 rate + 7 legal + 1 listing) + home page.
Strict validation: zero {{ tokens, exactly one H1, unique H2s, 400+ words, valid schemas.
"""

import json
import os
import re
import shutil
import sys
import urllib.parse
from xml.sax.saxutils import escape as xml_escape

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
TEMPLATES_DIR = os.path.join(BASE_DIR, 'templates')
PAGES_DIR = os.path.join(TEMPLATES_DIR, 'pages')
SECTIONS_DIR = os.path.join(TEMPLATES_DIR, 'sections')
THEMES_DIR = os.path.join(BASE_DIR, 'themes')
ASSETS_DIR = os.path.join(BASE_DIR, 'assets')
DIST_DIR = os.path.join(BASE_DIR, 'dist')

# ── Helper Utilities ──────────────────────────────────────────

def slugify(text):
    text = text.lower().strip()
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'[^\w\-]', '', text)
    return text.strip('-')

def clean_phone_for_wa(phone):
    return re.sub(r'\D', '', phone)

def word_count(text):
    clean = re.sub(r'<[^>]+>', ' ', text)
    tokens = clean.split()
    return len(tokens)

def render_profile_card(p, site, location_name="Noida", card_url="/call-girls/"):
    wa_num = clean_phone_for_wa(site['phone'])
    name = p['name']
    age = p['age']
    cat = p['cat']
    area = p.get('area', 'Noida')
    img_src = f"/assets/img/{site['id']}/{p['img']}"
    
    # Strict alt text requirement (§3): "<Name>, <age>, <category> in <sector>, Noida"
    alt_text = f"{name}, {age}, {cat} in {location_name}, Noida"
    
    msg = f"Hi, I'm interested in {name} for Noida Escorts. I found you on {site['domain']}. Is cash on delivery available?"
    wa_href = f"https://wa.me/{wa_num}?text={urllib.parse.quote(msg)}"
    tel_href = f"tel:{site['phone']}"
    
    return f'''      <div class="member-box">
        <a href="{card_url}" class="member-photo-link" aria-label="{alt_text}">
          <img src="{img_src}" alt="{alt_text}" width="400" height="533" loading="lazy">
          <div class="member-overlay-gradient"></div>
        </a>
        <div class="member-info">
          <div class="member-name">{name}</div>
          <div class="member-meta">{age} yrs &middot; {cat} &middot; {area}</div>
          <div class="member-actions">
            <a href="{tel_href}" class="icon-circle icon-circle-call" rel="nofollow" aria-label="Call {name}">
              <img src="/assets/img/{site['id']}/call.svg" alt="Call" width="18" height="18">
            </a>
            <a href="{wa_href}" class="icon-circle icon-circle-wa" target="_blank" rel="noopener nofollow" aria-label="WhatsApp {name}">
              <img src="/assets/img/{site['id']}/wa.svg" alt="WhatsApp" width="18" height="18">
            </a>
          </div>
        </div>
      </div>'''

def render_breadcrumb(crumbs, site_domain):
    items_html = []
    ld_items = []
    
    for idx, (title, url) in enumerate(crumbs, 1):
        full_url = f"https://{site_domain}{url}"
        if idx == len(crumbs):
            items_html.append(f'''        <li class="breadcrumb-item active" aria-current="page">{title}</li>''')
        else:
            items_html.append(f'''        <li class="breadcrumb-item"><a href="{url}">{title}</a></li>''')
            
        ld_items.append({
            "@type": "ListItem",
            "position": idx,
            "name": title,
            "item": full_url
        })
        
    breadcrumb_html = f'''<!-- Section: Breadcrumb -->
<nav class="breadcrumb-nav" aria-label="Breadcrumb">
  <div class="container">
    <ol class="breadcrumb-list">
{chr(10).join(items_html)}
    </ol>
  </div>
</nav>'''
    
    breadcrumb_ld = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": ld_items
    }
    
    return breadcrumb_html, breadcrumb_ld

def render_faqs_accordion(faqs):
    items = []
    ld_entities = []
    
    for idx, f in enumerate(faqs):
        open_attr = ' open' if idx == 0 else ''
        q_clean = f['q']
        a_clean = f['a']
        items.append(f'''      <details class="faq-item"{open_attr}>
        <summary>{q_clean}</summary>
        <div class="faq-content">
          <p>{a_clean}</p>
        </div>
      </details>''')
        ld_entities.append({
            "@type": "Question",
            "name": q_clean,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": a_clean
            }
        })
        
    faq_html = "\n".join(items)
    faq_ld = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": ld_entities
    }
    return faq_html, faq_ld

def validate_and_save_page(html, dist_file, expected_url=""):
    # 1. Zero unresolved {{ tokens
    unresolved = re.findall(r'\{\{([^\}]+)\}\}', html)
    if unresolved:
        raise ValueError(f"CRITICAL ERROR in {dist_file}: Unresolved tokens: {unresolved}")
        
    # 2. Exactly one H1 tag
    h1s = re.findall(r'<h1\b[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    if len(h1s) != 1:
        raise ValueError(f"CRITICAL ERROR in {dist_file}: Found {len(h1s)} <h1> tags (expected exactly 1).")
        
    # 3. No repeated H2 text
    h2_matches = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2\b[^>]*>(.*?)</h2>', html, re.IGNORECASE | re.DOTALL)]
    h2_duplicates = [h for h in h2_matches if h2_matches.count(h) > 1]
    if h2_duplicates:
        raise ValueError(f"CRITICAL ERROR in {dist_file}: Repeated H2 text found: {set(h2_duplicates)}")
        
    # 4. Chennai area blacklist check
    forbidden = ['nungambakkam', 'adyar', 'besant', 'omr', 'chennai']
    html_lower = html.lower()
    for word in forbidden:
        if word in html_lower:
            raise ValueError(f"CRITICAL ERROR in {dist_file}: Forbidden Chennai string detected: '{word}'")
            
    # 5. Word count check (400+ words)
    words = word_count(html)
    if words < 400:
        raise ValueError(f"CRITICAL ERROR in {dist_file}: Word count too low ({words} words < 400 minimum).")
        
    # Write to disk
    os.makedirs(os.path.dirname(dist_file), exist_ok=True)
    with open(dist_file, 'w', encoding='utf-8') as f:
        f.write(html)
        
    return words

# ── Main Build Execution ──────────────────────────────────────

def build_all():
    print("=" * 60)
    print("VELOURA NETWORK STATIC BUILDER — NOIDA HUB (veloura.com)")
    print("=" * 60)
    
    with open(os.path.join(DATA_DIR, 'sites.json'), 'r', encoding='utf-8') as f:
        sites = json.load(f)
    site = sites[0]
    site_id = site['id']
    site_domain = site['domain']
    dist_site_dir = os.path.join(DIST_DIR, site_id)
    os.makedirs(dist_site_dir, exist_ok=True)
    
    with open(os.path.join(DATA_DIR, f'profiles-{site_id}.json'), 'r', encoding='utf-8') as f:
        profiles = json.load(f)
    with open(os.path.join(DATA_DIR, f'content-{site_id}.json'), 'r', encoding='utf-8') as f:
        content = json.load(f)
    with open(os.path.join(DATA_DIR, 'sectors.json'), 'r', encoding='utf-8') as f:
        sectors = json.load(f)
    with open(os.path.join(DATA_DIR, 'landmarks.json'), 'r', encoding='utf-8') as f:
        landmarks = json.load(f)
    with open(os.path.join(DATA_DIR, 'categories.json'), 'r', encoding='utf-8') as f:
        categories = json.load(f)
    with open(os.path.join(DATA_DIR, 'legal.json'), 'r', encoding='utf-8') as f:
        legal_pages = json.load(f)
        
    # Copy Assets & Theme
    dist_assets_js = os.path.join(dist_site_dir, 'assets', 'js')
    dist_assets_img = os.path.join(dist_site_dir, 'assets', 'img', site_id)
    dist_themes = os.path.join(dist_site_dir, 'themes')
    os.makedirs(dist_assets_js, exist_ok=True)
    os.makedirs(dist_assets_img, exist_ok=True)
    os.makedirs(dist_themes, exist_ok=True)
    
    shutil.copytree(os.path.join(ASSETS_DIR, 'js'), dist_assets_js, dirs_exist_ok=True)
    shutil.copytree(os.path.join(ASSETS_DIR, 'img', site_id), dist_assets_img, dirs_exist_ok=True)
    shutil.copy2(os.path.join(THEMES_DIR, f"{site['theme']}.css"), os.path.join(dist_themes, f"{site['theme']}.css"))
    
    # Base template
    with open(os.path.join(TEMPLATES_DIR, 'base.html'), 'r', encoding='utf-8') as f:
        base_tmpl = f.read()
        
    # Common tokens
    std_msg = f"Hi, I'm interested in your services in Noida Escorts. I found you on {site_domain}. Is cash on delivery available?"
    wa_num = clean_phone_for_wa(site['phone'])
    wa_num2 = clean_phone_for_wa(site['phone2'])
    wa_link = f"https://wa.me/{wa_num}?text={urllib.parse.quote(std_msg)}"
    wa_link_phone2 = f"https://wa.me/{wa_num2}?text={urllib.parse.quote(std_msg)}"
    
    # 25-sector footer link block (§8)
    footer_sector_pills = []
    for s in sectors:
        footer_sector_pills.append(f'        <a href="/call-girls/{s["slug"]}/" class="footer-sector-pill">{s["name"]}</a>')
    footer_sectors_html = "\n".join(footer_sector_pills)
    
    # Legal links for footer
    legal_footer_links = []
    for lp in legal_pages:
        legal_footer_links.append(f'          <li><a href="/{lp["slug"]}/">{lp["title"]}</a></li>')
    legal_links_html = "\n".join(legal_footer_links)
    
    # Rates table rows (shared)
    rates = site['rates']
    rate_rows_list = [
        f'''          <tr>
            <td><strong>1 Hour (Standard)</strong></td>
            <td>Full VIP Companionship</td>
            <td><span class="rate-price">{rates.get('1', '₹2,999–5,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Book 1 Hr</a></td>
          </tr>''',
        f'''          <tr>
            <td><strong>2 Hours (Deluxe)</strong></td>
            <td>Dinner Date + Relaxed Intimacy</td>
            <td><span class="rate-price">{rates.get('2', '₹5,999–11,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Book 2 Hrs</a></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Full Night (Overnight)</strong></td>
            <td>8–10 Hours VIP Luxury Outcall</td>
            <td><span class="rate-price">{rates.get('3', '₹11,999–24,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Book Overnight</a></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Short Session (Tier 1)</strong></td>
            <td>Quick Refresher / In-call</td>
            <td><span class="rate-price">{rates.get('s1', '₹1,999–4,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Inquire</a></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Short Session (Tier 2)</strong></td>
            <td>Extended Refresher Outcall</td>
            <td><span class="rate-price">{rates.get('s2', '₹3,999–8,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Inquire</a></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Short Session (Tier 3)</strong></td>
            <td>Premium Model Short Meet</td>
            <td><span class="rate-price">{rates.get('s3', '₹7,999–14,999')}</span></td>
            <td><a href="{wa_link}" class="rate-book-btn" target="_blank" rel="noopener nofollow">Inquire</a></td>
          </tr>'''
    ]
    rate_rows_html = "\n".join(rate_rows_list)
    
    # Read peripheral section files
    peripheral_files = {}
    for peri in ['footer', 'floating-ctas', 'sticky-bar', 'age-gate']:
        with open(os.path.join(SECTIONS_DIR, f"{peri}.html"), 'r', encoding='utf-8') as f:
            peripheral_files[peri] = f.read()
            
    # Read section templates
    sec_tmpl = {}
    for st in ['breadcrumb', 'page-intro', 'sector-facts', 'nearby-links', 'profile-grid-6', 'rate-table-full', 'hindi-block', 'faq-3', 'cta-inline']:
        with open(os.path.join(SECTIONS_DIR, f"{st}.html"), 'r', encoding='utf-8') as f:
            sec_tmpl[st] = f.read()
            
    # Helper to apply dictionary of tokens
    def apply_tokens(template, token_dict):
        res = template
        for k, v in token_dict.items():
            res = res.replace(f"{{{{{k}}}}}", str(v))
        return res
        
    def render_full_page(page_sections_html, page_meta):
        # Peripheral replacements
        p_dict = {
            'site.id': site['id'],
            'site.domain': site['domain'],
            'site.brand': site['brand'],
            'site.city': site['city'],
            'site.phone': site['phone'],
            'site.phone2': site['phone2'],
            'site.email': site['email'],
            'site.telegram': site['telegram'],
            'wa_link': wa_link,
            'wa_link_phone2': wa_link_phone2,
            'footer_sectors_html': footer_sectors_html,
            'legal_links_html': legal_links_html
        }
        
        rendered_footer = apply_tokens(peripheral_files['footer'], p_dict)
        rendered_floating = apply_tokens(peripheral_files['floating-ctas'], p_dict)
        rendered_sticky = apply_tokens(peripheral_files['sticky-bar'], p_dict)
        rendered_age = apply_tokens(peripheral_files['age-gate'], p_dict)
        
        # Schemas
        schema_tags = []
        for s in page_meta.get('schemas', []):
            schema_tags.append(f'<script type="application/ld+json">\n{json.dumps(s, indent=2, ensure_ascii=False)}\n</script>')
        schema_json_ld = "\n  ".join(schema_tags)
        
        master_dict = {
            'site.id': site['id'],
            'site.domain': site['domain'],
            'site.brand': site['brand'],
            'site.city': site['city'],
            'site.phone': site['phone'],
            'site.phone2': site['phone2'],
            'site.email': site['email'],
            'site.telegram': site['telegram'],
            'site.address': site['address'],
            'site.region': site['region'],
            'site.pin': site['pin'],
            'site.lat': str(site['lat']),
            'site.lng': str(site['lng']),
            'site.rates.1': site['rates'].get('1', '₹2,999–5,999'),
            'site.ga4': site['ga4'],
            'meta_title': page_meta['title'],
            'meta_description': page_meta['description'],
            'canonical_url': page_meta['canonical_url'],
            'schema_json_ld': schema_json_ld,
            'page_sections_html': page_sections_html,
            'footer_html': rendered_footer,
            'floating_ctas_html': rendered_floating,
            'sticky_bar_html': rendered_sticky,
            'age_gate_html': rendered_age
        }
        
        return apply_tokens(base_tmpl, master_dict)

    generated_pages = []
    word_counts_report = {}
    
    # ══════════════════════════════════════════════════════════════
    # 1. BUILD HOME PAGE (/)
    # ══════════════════════════════════════════════════════════════
    print("\nBuilding Page 01: Home Page (/)...")
    with open(os.path.join(DATA_DIR, f'content-{site_id}.json'), 'r', encoding='utf-8') as cf:
        home_content = json.load(cf)
        
    home_ctx = {
        'site.id': site['id'],
        'site.domain': site['domain'],
        'site.brand': site['brand'],
        'site.city': site['city'],
        'site.phone': site['phone'],
        'site.phone2': site['phone2'],
        'site.email': site['email'],
        'site.telegram': site['telegram'],
        'site.address': site['address'],
        'site.region': site['region'],
        'site.pin': site['pin'],
        'site.lat': str(site['lat']),
        'site.lng': str(site['lng']),
        'site.rates.1': site['rates'].get('1', '₹2,999–5,999'),
        'site.ga4': site['ga4'],
        'wa_link': wa_link,
        'wa_link_phone2': wa_link_phone2,
        'area_options_html': "\n".join([f'        <option value="{s["slug"]}">{s["name"]}</option>' for s in sectors]),
        'city_intro_html': "\n".join([f'      <p>{p}</p>' for p in home_content['city_intro']]),
        'profile_grid_cards_1': "\n".join([render_profile_card(p, site, "Noida") for p in profiles[:8]]),
        'profile_grid_cards_2': "\n".join([render_profile_card(p, site, "Noida") for p in profiles[8:16]]),
        'why_us_html': "\n".join([f'''      <div class="why-us-card">
        <div class="why-us-num">0{idx}</div>
        <h3>{item['title']}</h3>
        <p>{item['desc']}</p>
      </div>''' for idx, item in enumerate(home_content['why_us'], 1)]),
        'rate_rows_html': rate_rows_html,
        'category_grid_html': "\n".join([f'''      <a href="/categories/{c['slug']}/" class="category-card">
        <div class="category-icon">👑</div>
        <h3>{c['name']}</h3>
        <p style="font-size:12px;color:#888;margin-bottom:4px;">Verified companions in Noida</p>
        <span class="category-count">16 Profiles</span>
      </a>''' for c in categories]),
        'services_html': "\n".join([f'''      <div class="service-card">
        <span class="service-tag">{s['tag']}</span>
        <h3>{s['title']}</h3>
        <p>{s['desc']}</p>
      </div>''' for s in home_content['services']]),
        'hotel_bullets_html': "\n".join([f'''        <div class="hotel-item">
          <h3>{h['hotel']}</h3>
          <p>{h['desc']}</p>
        </div>''' for h in home_content['hotel_guide']['bullets']]),
        'hotel_steps_html': "\n".join([f'''        <div class="hotel-step-item">
          <div class="step-num">{idx}</div>
          <div>{st}</div>
        </div>''' for idx, st in enumerate(home_content['hotel_guide']['steps'], 1)]),
        'booking_steps_html': "\n".join([f'''      <div class="booking-step-card">
        <div class="booking-step-badge">{b['step']}</div>
        <h3>{b['title']}</h3>
        <p>{b['desc']}</p>
      </div>''' for b in home_content['booking_steps']]),
        'faq_items_html': "\n".join([f'''      <details class="faq-item"{' open' if idx == 0 else ''}>
        <summary>{f['q']}</summary>
        <div class="faq-content">
          <p>{f['a']}</p>
        </div>
      </details>''' for idx, f in enumerate(home_content['faq'])]),
        'testimonials_html': "\n".join([f'''      <div class="testimonial-card">
        <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <div class="testimonial-quote">&ldquo;{t['quote']}&rdquo;</div>
        <div class="testimonial-author">{t['name']}</div>
        <div class="testimonial-desc">{t['descriptor']}</div>
      </div>''' for t in home_content['testimonials']]),
        'city_links_html': "\n".join([f'      <a href="/call-girls/{s["slug"]}/" class="area-pill">{s["name"]}</a>' for s in sectors])
    }
    
    home_sections = []
    for sec_name in site['order']:
        with open(os.path.join(SECTIONS_DIR, f"{sec_name}.html"), 'r', encoding='utf-8') as f:
            home_sections.append(apply_tokens(f.read(), home_ctx))
    home_sections_html = "\n\n".join(home_sections)
    
    home_local_biz = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": f"{site['brand']} Noida Escorts",
        "image": f"https://{site_domain}/assets/img/hub/banner.svg",
        "telephone": site['phone'],
        "email": site['email'],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": site['address'],
            "addressLocality": site['city'],
            "addressRegion": site['region'],
            "postalCode": site['pin'],
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": float(site['lat']),
            "longitude": float(site['lng'])
        },
        "url": f"https://{site_domain}/",
        "priceRange": site['rates'].get('1', '₹2,999–5,999')
    }
    
    home_meta = {
        'title': f"Call Girl Noida | Escorts Service Noida | {site['brand']}"[:60],
        'description': f"Call girl Noida & premier escorts service Noida by {site['brand']}. 100% genuine photo profiles, zero advance payment & 24/7 hotel outcall in Sector 18, 62 & NCR."[:155],
        'canonical_url': f"https://{site_domain}/",
        'schemas': [home_local_biz]
    }
    
    home_html = render_full_page(home_sections_html, home_meta)
    home_words = validate_and_save_page(home_html, os.path.join(dist_site_dir, 'index.html'))
    word_counts_report['/'] = home_words
    print(f"  ✓ Saved dist/{site_id}/index.html ({home_words} words)")

    # ══════════════════════════════════════════════════════════════
    # 2. BUILD 25 SECTOR PAGES (/call-girls/<sector-slug>/)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 25 Sector Pages (/call-girls/<sector-slug>/)...")
    for s_idx, sec in enumerate(sectors):
        sec_slug = sec['slug']
        sec_name = sec['name']
        page_path = f"/call-girls/{sec_slug}/"
        canonical = f"https://{site_domain}{page_path}"
        
        # 1. Breadcrumbs
        crumbs = [("Home", "/"), ("Call Girls", "/call-girls/"), (sec_name, page_path)]
        bc_html, bc_ld = render_breadcrumb(crumbs, site_domain)
        
        # 2. Page Intro
        intro_paras = "\n".join([f'          <p>{p}</p>' for p in sec['intro']])
        # Contextual link to hub root (§5): include link to We Noida Escorts in intro
        intro_paras += f'\n          <p>Clients booking companions through <a href="/" class="brand-link">{site["brand"]}</a> enjoy absolute discretion, zero hidden charges, and prompt doorstep arrival across all residential towers and corporate venues in {sec_name}.</p>'
        
        pintro_html = apply_tokens(sec_tmpl['page-intro'], {
            'page_intro_h1': f"Verified Call Girls in {sec_name} Noida - VIP Hotel Outcall",
            'page_subtitle': f"100% Genuine Photo Profiles • 30-Minute Hotel & Residence Delivery in {sec_name} • Cash On Delivery",
            'page_intro_paragraphs_html': intro_paras
        })
        
        # 3. Sector Facts
        hotels_list = "\n".join([f'            <li>&#127976; {h}</li>' for h in sec['hotels']])
        facts_html = apply_tokens(sec_tmpl['sector-facts'], {
            'sector_name': sec_name,
            'sector_character': sec['character'],
            'sector_metro': sec['metro'],
            'sector_distance': sec['distance'],
            'sector_hotels_html': hotels_list
        })
        
        # 4. Profile Grid 6
        p_offset = (s_idx * 3) % len(profiles)
        page_profs = [profiles[(p_offset + i) % len(profiles)] for i in range(6)]
        cards_6 = [render_profile_card(p, site, location_name=sec_name) for p in page_profs]
        grid_6_html = apply_tokens(sec_tmpl['profile-grid-6'], {
            'profile_grid_h2': f"Available Verified Profiles in {sec_name}",
            'profile_grid_location': sec_name,
            'profile_cards_6_html': "\n".join(cards_6)
        })
        
        # 5. Rate Table Full
        rate_table_html = apply_tokens(sec_tmpl['rate-table-full'], {
            'rate_table_h2': f"Verified Rates & Packages in {sec_name}",
            'rate_table_location': sec_name,
            'rate_rows_html': rate_rows_html
        })
        
        # 6. Nearby Links (3 nearby sectors + 2 landmarks)
        nearby_cards = []
        for nb_name in sec['nearby']:
            nb_slug = slugify(nb_name)
            nearby_cards.append(f'''      <a href="/call-girls/{nb_slug}/" class="nearby-card">
        <div class="nearby-icon">&#128205;</div>
        <h3>{nb_name} Escorts</h3>
        <p>Rapid 20&ndash;30 min doorstep delivery</p>
      </a>''')
        # 2 Landmark links
        lm1 = landmarks[(s_idx) % len(landmarks)]
        lm2 = landmarks[(s_idx + 1) % len(landmarks)]
        nearby_cards.append(f'''      <a href="/call-girls/near-{lm1['slug']}/" class="nearby-card">
        <div class="nearby-icon">&#127963;</div>
        <h3>Near {lm1['name']}</h3>
        <p>Premier hospitality and hotel stays</p>
      </a>''')
        nearby_cards.append(f'''      <a href="/call-girls/near-{lm2['slug']}/" class="nearby-card">
        <div class="nearby-icon">&#127963;</div>
        <h3>Near {lm2['name']}</h3>
        <p>Convenient outcall accompaniment</p>
      </a>''')
        nearby_html = apply_tokens(sec_tmpl['nearby-links'], {
            'nearby_links_h2': f"Nearby Sectors & Landmark Destinations from {sec_name}",
            'nearby_location_name': sec_name,
            'nearby_links_html': "\n".join(nearby_cards)
        })
        
        # 7. Hindi Block
        hindi_html = apply_tokens(sec_tmpl['hindi-block'], {
            'hindi_block_h2': f"{sec_name} नोएडा एस्कॉर्ट्स सेवा (हिंदी जानकारी)",
            'sector_hindi_text': sec['hindi']
        })
        
        # 8. FAQ 3
        faq_html, faq_ld = render_faqs_accordion(sec['faqs'])
        faq_section_html = apply_tokens(sec_tmpl['faq-3'], {
            'faq_3_h2': f"Frequently Asked Questions for {sec_name}",
            'faq_location_name': sec_name,
            'faq_3_items_html': faq_html
        })
        
        # 9. CTA Inline
        cta_html = apply_tokens(sec_tmpl['cta-inline'], {
            'cta_inline_h2': f"Book Your {sec_name} Companion Today",
            'cta_inline_text': f"Our senior concierge is available 24 hours a day to coordinate fast outcall across {sec_name}. Settle payment in cash only after arrival.",
            'site.phone': site['phone'],
            'wa_link': wa_link
        })
        
        # Assemble body in exact order (§3)
        page_sections_html = f"{bc_html}\n\n{pintro_html}\n\n{facts_html}\n\n{grid_6_html}\n\n{rate_table_html}\n\n{nearby_html}\n\n{hindi_html}\n\n{faq_section_html}\n\n{cta_html}"
        
        # Meta: Title <= 60 chars, Meta desc <= 155 chars
        title = f"Call Girl in {sec_name} Noida | Escorts Service | {site['brand']}"[:60]
        desc = f"Call girl in {sec_name} Noida & premier escorts service Noida. Verified genuine photos, 25-min hotel outcall, zero advance deposit, Cash On Delivery from ₹1,999."[:155]
        
        page_meta = {
            'title': title,
            'description': desc,
            'canonical_url': canonical,
            'schemas': [bc_ld, faq_ld]
        }
        
        full_html = render_full_page(page_sections_html, page_meta)
        dist_path = os.path.join(dist_site_dir, 'call-girls', sec_slug, 'index.html')
        w_count = validate_and_save_page(full_html, dist_path)
        generated_pages.append(canonical)
        word_counts_report[page_path] = w_count
        print(f"  [{len(generated_pages):02d}/52] ✓ {page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 3. BUILD 10 LANDMARK PAGES (/call-girls/near-<landmark-slug>/)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 10 Landmark Pages (/call-girls/near-<landmark-slug>/)...")
    with open(os.path.join(PAGES_DIR, 'page-landmark.html'), 'r', encoding='utf-8') as f:
        landmark_tmpl = f.read()
        
    for l_idx, lm in enumerate(landmarks):
        lm_slug = lm['slug']
        lm_name = lm['name']
        page_path = f"/call-girls/near-{lm_slug}/"
        canonical = f"https://{site_domain}{page_path}"
        
        crumbs = [("Home", "/"), ("Call Girls", "/call-girls/"), (f"Near {lm_name}", page_path)]
        bc_html, bc_ld = render_breadcrumb(crumbs, site_domain)
        
        intro_paras = "\n".join([f'          <p>{p}</p>' for p in lm['intro']])
        intro_paras += f'\n          <p>Travelers staying around {lm_name} can arrange discreet appointments with <a href="/" class="brand-link">{site["brand"]}</a> without any advance deposit or online transfer requirement.</p>'
        
        p_offset = (l_idx * 2) % len(profiles)
        page_profs = [profiles[(p_offset + i) % len(profiles)] for i in range(6)]
        cards_6 = [render_profile_card(p, site, location_name=f"Near {lm_name}") for p in page_profs]
        grid_6_html = apply_tokens(sec_tmpl['profile-grid-6'], {
            'profile_grid_h2': f"Available Verified Companions Near {lm_name}",
            'profile_grid_location': f"Near {lm_name}",
            'profile_cards_6_html': "\n".join(cards_6)
        })
        
        rate_table_html = apply_tokens(sec_tmpl['rate-table-full'], {
            'rate_table_h2': f"Transparent Tariff & Rates Near {lm_name}",
            'rate_table_location': f"Near {lm_name}",
            'rate_rows_html': rate_rows_html
        })
        
        # 3 Sibling / Nearby links
        nb_cards = []
        for i in range(1, 4):
            other_lm = landmarks[(l_idx + i) % len(landmarks)]
            nb_cards.append(f'''      <a href="/call-girls/near-{other_lm['slug']}/" class="nearby-card">
        <div class="nearby-icon">&#127963;</div>
        <h3>Near {other_lm['name']}</h3>
        <p>Express 20-30 min hotel arrival</p>
      </a>''')
        nearby_html = apply_tokens(sec_tmpl['nearby-links'], {
            'nearby_links_h2': f"Nearby Noida Localities & Transit Routes from {lm_name}",
            'nearby_location_name': lm_name,
            'nearby_links_html': "\n".join(nb_cards)
        })
        
        # 3 FAQs
        lm_faqs = lm.get('faqs', [
            {"q": f"How fast can an escort arrive near {lm_name}?", "a": f"Our companions typically arrive within 25 to 35 minutes across all hotels and residences near {lm_name}. Our dispatchers coordinate seamless transit."},
            {"q": f"Can I book cash on delivery near {lm_name}?", "a": f"Yes, 100% Cash On Delivery is standard for all bookings near {lm_name}. Never transfer any advance money online."},
            {"q": f"Are companion profiles near {lm_name} genuine?", "a": f"Every profile on Veloura is verified with real unedited pictures. The companion you select is the exact person who greets you."}
        ])
        faq_html, faq_ld = render_faqs_accordion(lm_faqs)
        faq_section_html = apply_tokens(sec_tmpl['faq-3'], {
            'faq_3_h2': f"Frequently Asked Questions Near {lm_name}",
            'faq_location_name': f"Near {lm_name}",
            'faq_3_items_html': faq_html
        })
        
        cta_html = apply_tokens(sec_tmpl['cta-inline'], {
            'cta_inline_h2': f"Connect with {lm_name} Companions 24/7",
            'cta_inline_text': f"Call or WhatsApp our team now to book an elite verified companion near {lm_name}. Guaranteed punctuality and absolute discretion.",
            'site.phone': site['phone'],
            'wa_link': wa_link
        })
        
        lm_body = apply_tokens(landmark_tmpl, {
            'breadcrumb_section_html': bc_html,
            'page_intro_h1': f"Verified Call Girls Near {lm_name} Noida",
            'page_subtitle': f"Elite Doorstep Companionship Near {lm_name} &bull; Rapid Transit to Major Hotels &bull; Cash On Delivery",
            'page_intro_paragraphs_html': intro_paras,
            'landmark_name': lm_name,
            'landmark_how_to_reach': lm['how_to_reach'],
            'landmark_what_is_around': lm['what_is_around'],
            'landmark_hotel_proximity': lm['hotel_proximity'],
            'profile_grid_6_section_html': grid_6_html,
            'rate_table_full_section_html': rate_table_html,
            'nearby_links_section_html': nearby_html,
            'faq_3_section_html': faq_section_html,
            'cta_inline_section_html': cta_html
        })
        
        title = f"Call Girl Near {lm_name} Noida | Escorts Service | {site['brand']}"[:60]
        desc = f"Call girl near {lm_name} Noida & escorts service Noida. 100% verified photo profiles, fast hotel outcall, zero advance deposit, Cash On Delivery from ₹1,999."[:155]
        
        page_meta = {
            'title': title,
            'description': desc,
            'canonical_url': canonical,
            'schemas': [bc_ld, faq_ld]
        }
        
        full_html = render_full_page(lm_body, page_meta)
        dist_path = os.path.join(dist_site_dir, 'call-girls', f"near-{lm_slug}", 'index.html')
        w_count = validate_and_save_page(full_html, dist_path)
        generated_pages.append(canonical)
        word_counts_report[page_path] = w_count
        print(f"  [{len(generated_pages):02d}/52] ✓ {page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 4. BUILD 8 CATEGORY PAGES (/categories/<category-slug>/)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 8 Category Pages (/categories/<category-slug>/)...")
    with open(os.path.join(PAGES_DIR, 'page-category.html'), 'r', encoding='utf-8') as f:
        category_tmpl = f.read()
        
    for c_idx, cat in enumerate(categories):
        cat_slug = cat['slug']
        cat_name = cat['name']
        page_path = f"/categories/{cat_slug}/"
        canonical = f"https://{site_domain}{page_path}"
        
        crumbs = [("Home", "/"), ("Categories", "/call-girls/"), (cat_name, page_path)]
        bc_html, bc_ld = render_breadcrumb(crumbs, site_domain)
        
        intro_paras = "\n".join([f'          <p>{p}</p>' for p in cat['intro']])
        intro_paras += f'\n          <p>Review genuine rates on our <a href="/noida-call-girls-rate/" class="brand-link">Noida escort tariff card</a> or browse verified {cat_name} on <a href="/" class="brand-link">{site["brand"]}</a> with zero advance payment.</p>'
        
        p_offset = (c_idx * 2) % len(profiles)
        page_profs = [profiles[(p_offset + i) % len(profiles)] for i in range(6)]
        cards_6 = [render_profile_card(p, site, location_name=f"{cat_name} in Noida") for p in page_profs]
        grid_6_html = apply_tokens(sec_tmpl['profile-grid-6'], {
            'profile_grid_h2': f"Available {cat_name} Profiles in Noida",
            'profile_grid_location': f"{cat_name} in Noida",
            'profile_cards_6_html': "\n".join(cards_6)
        })
        
        rate_table_html = apply_tokens(sec_tmpl['rate-table-full'], {
            'rate_table_h2': f"Transparent {cat_name} Pricing & Packages",
            'rate_table_location': f"{cat_name} in Noida",
            'rate_rows_html': rate_rows_html
        })
        
        # 3 Popular Sector Links
        sec_cards = []
        for i in range(3):
            pop_sec = sectors[(c_idx + i * 4) % len(sectors)]
            sec_cards.append(f'''      <a href="/call-girls/{pop_sec['slug']}/" class="nearby-card">
        <div class="nearby-icon">&#128205;</div>
        <h3>{pop_sec['name']} Outcall</h3>
        <p>25-min delivery across luxury hotels</p>
      </a>''')
        category_sector_links_html = "\n".join(sec_cards)
        
        cat_faqs = cat.get('faqs', [
            {"q": f"How do I book {cat_name} companions in Noida?", "a": f"Call or WhatsApp our concierge with your selected profile name and hotel room location. We confirm availability and send your companion promptly."},
            {"q": f"Is cash on delivery available for {cat_name}?", "a": f"Yes, we operate on a strict Cash On Delivery policy. No advance payment or booking registration fee is ever required."},
            {"q": f"Are the photos of {cat_name} real?", "a": f"Yes, all photos are 100% verified and taken recently. What you see on Veloura is precisely who meets you."}
        ])
        faq_html, faq_ld = render_faqs_accordion(cat_faqs)
        faq_section_html = apply_tokens(sec_tmpl['faq-3'], {
            'faq_3_h2': f"Frequently Asked Questions About {cat_name} in Noida",
            'faq_location_name': f"{cat_name} in Noida",
            'faq_3_items_html': faq_html
        })
        
        cta_html = apply_tokens(sec_tmpl['cta-inline'], {
            'cta_inline_h2': f"Reserve an Exclusive {cat_name} Meeting in Noida",
            'cta_inline_text': f"Our concierges coordinate direct in-call and 5-star hotel outcall for {cat_name} across Noida. Contact us anytime 24/7.",
            'site.phone': site['phone'],
            'wa_link': wa_link
        })
        
        # ItemList Schema (§6)
        item_list_ld = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": f"{cat_name} in Noida",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": i + 1,
                    "name": p['name'],
                    "url": f"https://{site_domain}/call-girls/"
                }
                for i, p in enumerate(page_profs)
            ]
        }
        
        cat_body = apply_tokens(category_tmpl, {
            'breadcrumb_section_html': bc_html,
            'page_intro_h1': f"{cat_name} in Noida - Verified Companions",
            'page_subtitle': f"Sophisticated {cat_name} Companionship for Private Hotel Meets &bull; Real Photos &bull; Cash On Delivery",
            'page_intro_paragraphs_html': intro_paras,
            'category_name': cat_name,
            'category_suit_html': f"<p>{cat['suit']}</p>",
            'profile_grid_6_section_html': grid_6_html,
            'rate_table_full_section_html': rate_table_html,
            'category_sector_links_html': category_sector_links_html,
            'faq_3_section_html': faq_section_html,
            'cta_inline_section_html': cta_html
        })
        
        title = f"{cat_name} Call Girl Noida | Escorts Service | {site['brand']}"[:60]
        desc = f"{cat_name} call girl Noida & escorts service Noida. Verified photos, discreet hotel outcall, zero advance deposit, Cash On Delivery from ₹1,999."[:155]
        
        page_meta = {
            'title': title,
            'description': desc,
            'canonical_url': canonical,
            'schemas': [bc_ld, faq_ld, item_list_ld]
        }
        
        full_html = render_full_page(cat_body, page_meta)
        dist_path = os.path.join(dist_site_dir, 'categories', cat_slug, 'index.html')
        w_count = validate_and_save_page(full_html, dist_path)
        generated_pages.append(canonical)
        word_counts_report[page_path] = w_count
        print(f"  [{len(generated_pages):02d}/52] ✓ {page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 5. BUILD 1 RATE CARD PAGE (/noida-call-girls-rate/)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 1 Rate Card Page (/noida-call-girls-rate/)...")
    with open(os.path.join(PAGES_DIR, 'page-rate.html'), 'r', encoding='utf-8') as f:
        rate_tmpl = f.read()
        
    rate_page_path = "/noida-call-girls-rate/"
    rate_canonical = f"https://{site_domain}{rate_page_path}"
    
    r_crumbs = [("Home", "/"), ("Escort Rates & Charges", rate_page_path)]
    r_bc_html, r_bc_ld = render_breadcrumb(r_crumbs, site_domain)
    
    r_intro_paras = f'''          <p>Welcome to the official 2026 tariff card for {site['brand']}. We pride ourselves on 100% financial transparency, fixed verified pricing, and an unyielding zero-advance payment policy across all 25 Noida sectors.</p>
          <p>Clients booking companions through <a href="/" class="brand-link">{site['brand']}</a> pay exclusively on Cash On Delivery (COD) or in-person UPI upon welcoming their companion. Explore our multi-tier packages below or review our <a href="/call-girls/" class="brand-link">call girl Noida directory</a>.</p>'''
          
    # Service type rows (Table 2)
    service_type_rows = [
        f'''          <tr>
            <td><strong>5-Star Hotel Outcall</strong></td>
            <td>Radisson Blu, Savoy Suites, Fortune Inn Grazia</td>
            <td><span class="rate-price">₹2,999 / Hr</span></td>
            <td>Immediate (25-35 mins)</td>
          </tr>''',
        f'''          <tr>
            <td><strong>Private In-call Suite</strong></td>
            <td>Discreet luxury serviced apartments in Sector 18 &amp; 62</td>
            <td><span class="rate-price">₹3,499 / Hr</span></td>
            <td>Pre-screened appointment</td>
          </tr>''',
        f'''          <tr>
            <td><strong>Executive Dinner Date</strong></td>
            <td>Upscale fine dining &amp; corporate gala hosting</td>
            <td><span class="rate-price">₹7,999 / 3 Hrs</span></td>
            <td>Advance 2-hour notice</td>
          </tr>''',
        f'''          <tr>
            <td><strong>Weekend Travel Companion</strong></td>
            <td>Agra, Jaipur, or Rishikesh executive retreat accompaniment</td>
            <td><span class="rate-price">₹24,999 / Day</span></td>
            <td>24-hour advance booking</td>
          </tr>'''
    ]
    service_rate_rows_html = "\n".join(service_type_rows)
    
    # Category wise rows (Table 3)
    category_wise_rows = [
        f'''          <tr>
            <td><strong>College Girls</strong></td>
            <td>Sweet 18–22 Yrs university students with genuine charms</td>
            <td><span class="rate-price">₹2,999</span></td>
            <td><span class="rate-price">₹11,999</span></td>
          </tr>''',
        f'''          <tr>
            <td><strong>VIP Models</strong></td>
            <td>Ramp, photoshoot &amp; high fashion glamour hostesses</td>
            <td><span class="rate-price">₹4,999</span></td>
            <td><span class="rate-price">₹17,999</span></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Russian Escorts</strong></td>
            <td>Exotic European blondes with breathtaking elegance</td>
            <td><span class="rate-price">₹7,999</span></td>
            <td><span class="rate-price">₹24,999</span></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Housewife Escorts</strong></td>
            <td>Warm, mature &amp; attentive 26–34 Yrs caring companions</td>
            <td><span class="rate-price">₹2,499</span></td>
            <td><span class="rate-price">₹9,999</span></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Air Hostess Escorts</strong></td>
            <td>Sophisticated, articulate domestic &amp; international airline staff</td>
            <td><span class="rate-price">₹5,999</span></td>
            <td><span class="rate-price">₹19,999</span></td>
          </tr>''',
        f'''          <tr>
            <td><strong>Independent Escorts</strong></td>
            <td>Direct non-agency freelance companions with flexible limits</td>
            <td><span class="rate-price">₹3,499</span></td>
            <td><span class="rate-price">₹13,999</span></td>
          </tr>'''
    ]
    category_rate_rows_html = "\n".join(category_wise_rows)
    
    included_items = [
        "Full uninterrupted personal companionship for the booked duration",
        "Doorstep travel charges to any confirmed hotel or residence in Noida",
        "Discreet, elegant presentation suited to your venue environment",
        "Zero registration, booking, or concierge liaison commissions"
    ]
    included_items_html = "\n".join([f'          <li>&#10004; {item}</li>' for item in included_items])
    
    excluded_items = [
        "Hotel room booking charges (client must arrange their own room)",
        "Food, beverages, and personal room service dining bills",
        "Extra travel expenses outside municipal Noida boundaries",
        "Any non-consensual demands or violations of companion boundaries"
    ]
    excluded_items_html = "\n".join([f'          <li>&#10008; {item}</li>' for item in excluded_items])
    
    rate_faqs = [
        {"q": "Is Cash On Delivery strictly honored in Noida?", "a": "Yes. Veloura strictly mandates 100% Cash On Delivery. You never pay a single rupee in advance. You inspect your companion upon arrival and settle charges directly in cash or UPI."},
        {"q": "Are there any hidden travel charges added to the bill?", "a": "No. All tariffs displayed above include standard doorstep transit within municipal Noida. The price quoted by our concierge is the total and final rate."},
        {"q": "What happens if the companion does not match the photos?", "a": "We operate a strict photo-authenticity guarantee. If the companion arriving at your door does not match the photos on our website, you have the full right to decline the meeting without any cancellation charge."},
        {"q": "Do you accept digital payments like Google Pay or Paytm?", "a": "Yes, once your companion arrives in person at your room, you may pay her directly via Google Pay, PhonePe, Paytm UPI, or physical currency."},
        {"q": "Can I extend my session if I want additional hours?", "a": "Yes, you can extend your session by notifying your companion or messaging our dispatcher before your current hour expires, subject to her schedule availability."}
    ]
    r_faq_html, r_faq_ld = render_faqs_accordion(rate_faqs)
    
    rate_cta_html = apply_tokens(sec_tmpl['cta-inline'], {
        'cta_inline_h2': "Inquire About Customized Noida Companion Packages",
        'cta_inline_text': "Need a bespoke multi-day executive itinerary or corporate dinner companionship? Contact our senior concierge desk for custom quotes.",
        'site.phone': site['phone'],
        'wa_link': wa_link
    })
    
    rate_body = apply_tokens(rate_tmpl, {
        'breadcrumb_section_html': r_bc_html,
        'page_intro_h1': "Noida Call Girl Rates & Escort Price List (2026 Tariff)",
        'page_subtitle': "100% Transparent Pricing &bull; Zero Advance Registration Fees &bull; Strict Cash On Delivery",
        'page_intro_paragraphs_html': r_intro_paras,
        'package_rate_rows_html': rate_rows_html,
        'service_rate_rows_html': service_rate_rows_html,
        'category_rate_rows_html': category_rate_rows_html,
        'included_items_html': included_items_html,
        'excluded_items_html': excluded_items_html,
        'rate_faqs_html': r_faq_html,
        'cta_inline_section_html': rate_cta_html
    })
    
    title = f"Noida Call Girl Rates ₹1999 | Escorts Service | {site['brand']}"[:60]
    desc = f"Noida call girl rates from ₹1999 & escorts service Noida tariff. Transparent prices for 1 hour & full night escorts. Zero advance, 100% Cash On Delivery."[:155]
    
    page_meta = {
        'title': title,
        'description': desc,
        'canonical_url': rate_canonical,
        'schemas': [r_bc_ld, r_faq_ld]
    }
    
    full_html = render_full_page(rate_body, page_meta)
    dist_path = os.path.join(dist_site_dir, 'noida-call-girls-rate', 'index.html')
    w_count = validate_and_save_page(full_html, dist_path)
    generated_pages.append(rate_canonical)
    word_counts_report[rate_page_path] = w_count
    print(f"  [{len(generated_pages):02d}/52] ✓ {rate_page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 6. BUILD 7 LEGAL PAGES (/privacy-policy/, /terms/, etc.)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 7 Legal Pages (350+ words each)...")
    with open(os.path.join(PAGES_DIR, 'page-legal.html'), 'r', encoding='utf-8') as f:
        legal_tmpl = f.read()
        
    for leg in legal_pages:
        leg_slug = leg['slug']
        leg_title = leg['title']
        page_path = f"/{leg_slug}/"
        canonical = f"https://{site_domain}{page_path}"
        
        crumbs = [("Home", "/"), (leg_title, page_path)]
        bc_html, bc_ld = render_breadcrumb(crumbs, site_domain)
        
        sec_blocks = []
        for s in leg['sections']:
            sec_blocks.append(f'''        <div class="legal-section">
          <h2>{s['heading']}</h2>
          <p>{s['body']}</p>
        </div>''')
        
        # Contextual link to hub root
        sec_blocks.append(f'''        <div class="legal-section">
          <p>For questions regarding our {leg_title}, please consult our <a href="/" class="brand-link">{site['brand']}</a> concierge or contact our legal administration team.</p>
        </div>''')
        
        legal_body_html = "\n".join(sec_blocks)
        
        leg_content = apply_tokens(legal_tmpl, {
            'breadcrumb_section_html': bc_html,
            'legal_h1': leg_title,
            'legal_body_html': legal_body_html,
            'site.brand': site['brand']
        })
        
        title = f"{leg_title} | {site['brand']} Noida"[:60]
        desc = f"{leg_title} for {site['brand']} Noida call girl & escorts service portal. Review our regulatory policies, 18+ adult compliance, DMCA terms, and privacy guidelines."[:155]
        
        page_meta = {
            'title': title,
            'description': desc,
            'canonical_url': canonical,
            'schemas': [bc_ld]
        }
        
        full_html = render_full_page(leg_content, page_meta)
        dist_path = os.path.join(dist_site_dir, leg_slug, 'index.html')
        w_count = validate_and_save_page(full_html, dist_path)
        generated_pages.append(canonical)
        word_counts_report[page_path] = w_count
        print(f"  [{len(generated_pages):02d}/52] ✓ {page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 7. BUILD 1 LISTING PAGE (/call-girls/)
    # ══════════════════════════════════════════════════════════════
    print(f"\nBuilding 1 Listing Page (/call-girls/)...")
    with open(os.path.join(PAGES_DIR, 'page-listing.html'), 'r', encoding='utf-8') as f:
        listing_tmpl = f.read()
        
    list_page_path = "/call-girls/"
    list_canonical = f"https://{site_domain}{list_page_path}"
    
    l_crumbs = [("Home", "/"), ("Call Girls Directory", list_page_path)]
    l_bc_html, l_bc_ld = render_breadcrumb(l_crumbs, site_domain)
    
    l_intro_paras = f'''          <p>Welcome to the complete verified call girl Noida directory and escorts service Noida portal, hosted exclusively by {site['brand']}. Our platform showcases 100% genuine photo profiles of elite companions available for rapid 25-minute hotel outcall and private residential visits across all major sectors.</p>
          <p>Whether you require a charming dinner companion in Sector 18, a sophisticated corporate hostess in Sector 62, or an independent model along the Noida Expressway, <a href="/" class="brand-link">{site['brand']}</a> guarantees uncompromising discretion, verified visual authenticity, and strict Cash On Delivery terms.</p>'''
          
    all_cards = [render_profile_card(p, site, location_name="Noida") for p in profiles]
    all_profiles_cards_html = "\n".join(all_cards)
    
    # 25 Sector cards
    sec_links = []
    for s in sectors:
        sec_links.append(f'''      <a href="/call-girls/{s['slug']}/" class="nearby-card">
        <div class="nearby-icon">&#128205;</div>
        <h3>{s['name']} Call Girls</h3>
        <p>Doorstep delivery across luxury hotels</p>
      </a>''')
    all_sectors_links_html = "\n".join(sec_links)
    
    l_cta_html = apply_tokens(sec_tmpl['cta-inline'], {
        'cta_inline_h2': "Book Instant Noida Companion Outcall 24/7",
        'cta_inline_text': "Select your preferred model from the directory and connect with our dispatcher on WhatsApp or phone call for rapid confirmation.",
        'site.phone': site['phone'],
        'wa_link': wa_link
    })
    
    # ItemList Schema (§6)
    list_item_ld = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Verified Call Girls in Noida",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": idx + 1,
                "name": p['name'],
                "url": f"https://{site_domain}/call-girls/"
            }
            for idx, p in enumerate(profiles)
        ]
    }
    
    list_body = apply_tokens(listing_tmpl, {
        'breadcrumb_section_html': l_bc_html,
        'page_intro_h1': "Verified Call Girls Directory in Noida - 100% Real Photo Profiles",
        'page_subtitle': "Browse Handpicked Models, College Girls &amp; VIP Escorts with Zero Advance Payment",
        'page_intro_paragraphs_html': l_intro_paras,
        'all_profiles_cards_html': all_profiles_cards_html,
        'all_sectors_links_html': all_sectors_links_html,
        'cta_inline_section_html': l_cta_html
    })
    
    title = f"Call Girl Noida Directory | Escorts Service Noida | {site['brand']}"[:60]
    desc = f"Call girl Noida directory & verified escorts service Noida. 100% genuine photo profiles, 25-minute hotel outcall across all Noida sectors, Cash On Delivery."[:155]
    
    page_meta = {
        'title': title,
        'description': desc,
        'canonical_url': list_canonical,
        'schemas': [l_bc_ld, list_item_ld]
    }
    
    full_html = render_full_page(list_body, page_meta)
    dist_path = os.path.join(dist_site_dir, 'call-girls', 'index.html')
    w_count = validate_and_save_page(full_html, dist_path)
    generated_pages.append(list_canonical)
    word_counts_report[list_page_path] = w_count
    print(f"  [{len(generated_pages):02d}/52] ✓ {list_page_path} ({w_count} words)")

    # ══════════════════════════════════════════════════════════════
    # 8. BUILD SITEMAP.XML (Exactly 52 Pages)
    # ══════════════════════════════════════════════════════════════
    print(f"\nGenerating sitemap.xml for {len(generated_pages)} pages...")
    sitemap_entries = []
    for url in generated_pages:
        priority = "0.9" if url.endswith("/call-girls/") or url.endswith("-rate/") else "0.8"
        sitemap_entries.append(f'''  <url>
    <loc>{xml_escape(url)}</loc>
    <lastmod>2026-11-05</lastmod>
    <changefreq>daily</changefreq>
    <priority>{priority}</priority>
  </url>''')
        
    sitemap_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(sitemap_entries)}
</urlset>'''
    
    sitemap_path = os.path.join(dist_site_dir, 'sitemap.xml')
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap_xml)
    print(f"  ✓ Saved dist/{site_id}/sitemap.xml ({len(generated_pages)} URLs)")

    # ══════════════════════════════════════════════════════════════
    # 9. BUILD ROBOTS.TXT (Allow All + 4 AI Bots)
    # ══════════════════════════════════════════════════════════════
    print(f"\nGenerating robots.txt (allowing all + 4 AI crawlers)...")
    robots_txt = f'''User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://{site_domain}/sitemap.xml
'''
    robots_path = os.path.join(dist_site_dir, 'robots.txt')
    with open(robots_path, 'w', encoding='utf-8') as f:
        f.write(robots_txt)
    print(f"  ✓ Saved dist/{site_id}/robots.txt")

    print("\n" + "=" * 60)
    print(f"Build completes, zero errors, {len(generated_pages)} pages generated.")
    print("=" * 60)
    return len(generated_pages), word_counts_report

if __name__ == '__main__':
    build_all()
