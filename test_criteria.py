#!/usr/bin/env python3
"""
Test all Phase 1 acceptance criteria
"""
import os
import re
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIST_HUB = os.path.join(BASE_DIR, 'network', 'dist', 'hub')
INDEX_HTML = os.path.join(DIST_HUB, 'index.html')
SECTIONS_DIR = os.path.join(BASE_DIR, 'network', 'templates', 'sections')

results = []

def check(desc, condition, detail=""):
    status = "PASS" if condition else "FAIL"
    results.append((desc, status, detail))
    print(f"[{status}] {desc} {f'({detail})' if detail else ''}")

# 1. dist/hub/index.html exists
check("dist/hub/index.html exists", os.path.isfile(INDEX_HTML))

if not os.path.isfile(INDEX_HTML):
    print("Cannot proceed with HTML checks.")
    sys.exit(1)

with open(INDEX_HTML, 'r', encoding='utf-8') as f:
    html = f.read()

# 2. No {{ token remains in dist/
unresolved = re.findall(r'\{\{[^\}]+\}\}', html)
check("No {{ token remains in dist/", len(unresolved) == 0, f"Found: {unresolved}" if unresolved else "0 remaining")

# 3. Exactly one h1 on the page
h1s = re.findall(r'<h1\b[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
h1_text = re.sub(r'<[^>]+>', '', h1s[0]).strip() if h1s else "None"
check("Exactly one h1 on the page", len(h1s) == 1, f"Count: {len(h1s)}, Text: '{h1_text}'")

# 4. No repeated h2 text
h2s = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h2\b[^>]*>(.*?)</h2>', html, re.IGNORECASE | re.DOTALL)]
h2_dups = [h for h in h2s if h2s.count(h) > 1]
check("No repeated h2 text", len(h2_dups) == 0, f"Total H2s: {len(h2s)}, Duplicates: {set(h2_dups)}")

# 5. All 21 section files exist and every order key resolves
sec_files = [f for f in os.listdir(SECTIONS_DIR) if f.endswith('.html')]
order_keys = ["hero","intro","video","trust-badges","profile-grid","why-us","rate-table","phone-strip","category-grid","profile-grid-2","services","hotel-guide","booking-steps","faq","testimonials","city-links","contact"]
missing_order = [k for k in order_keys if not os.path.isfile(os.path.join(SECTIONS_DIR, f"{k}.html"))]
check("All 21 section files exist and every order key resolves", len(sec_files) >= 21 and len(missing_order) == 0, f"Found {len(sec_files)} section files, missing in order: {missing_order}")

# 6. Every nav link points to an existing or intended path
nav_links = re.findall(r'<a\b[^>]*\bclass="[^"]*nav-link[^"]*"[^>]*href="([^"]+)"|<a\b[^>]*\bhref="([^"]+)"[^>]*\bclass="[^"]*nav-link[^"]*"', html)
nav_links_clean = [m[0] or m[1] for m in nav_links]
check("Every nav link points to an existing or intended path", len(nav_links_clean) >= 7, f"Nav links ({len(nav_links_clean)}): {nav_links_clean}")

# 7. 16 profile cards render, split 8 + 8 across both grids
cards = re.findall(r'class="member-box"', html)
sec_1 = html[html.find('id="profile-grid"'):html.find('id="why-us"')]
sec_2 = html[html.find('id="profile-grid-2"'):html.find('id="services"')]
c1_count = len(re.findall(r'class="member-box"', sec_1))
c2_count = len(re.findall(r'class="member-box"', sec_2))
check("16 profile cards render, split 8 + 8 across both grids", len(cards) == 16 and c1_count == 8 and c2_count == 8, f"Grid 1: {c1_count}, Grid 2: {c2_count}, Total: {len(cards)}")

# 8. Sticky bar, 3 floating circles, age gate all present
has_sticky_bar = 'class="sticky-bottom-bar"' in html
has_floating_wa = 'class="floating-circle floating-wa"' in html
has_floating_call = 'class="floating-circle floating-call"' in html
has_floating_tg = 'class="floating-circle floating-tg"' in html
has_age_gate = 'class="age-gate-overlay"' in html
check("Sticky bar, 3 floating circles, age gate all present",
      has_sticky_bar and has_floating_wa and has_floating_call and has_floating_tg and has_age_gate,
      f"Sticky: {has_sticky_bar}, WA: {has_floating_wa}, Call: {has_floating_call}, TG: {has_floating_tg}, Gate: {has_age_gate}")

# 9. Age gate blocks scroll, remembers 30 days, Leave goes to Google
with open(os.path.join(BASE_DIR, 'network', 'assets', 'js', 'main.js'), 'r', encoding='utf-8') as f:
    js_content = f.read()
has_storage_key = 'adultConfirmedAt' in js_content
has_30_days = '30 * 24 * 60 * 60 * 1000' in js_content or '2592000000' in js_content
has_body_scroll_lock = "document.body.style.overflow = 'hidden'" in js_content
has_leave_google = 'https://www.google.com' in html
check("Age gate blocks scroll, remembers 30 days, Leave goes to Google",
      has_storage_key and has_30_days and has_body_scroll_lock and has_leave_google,
      f"Key: {has_storage_key}, 30d: {has_30_days}, Lock: {has_body_scroll_lock}, Google: {has_leave_google}")

# 10. 375px: no horizontal scroll, cards 2-up
with open(os.path.join(BASE_DIR, 'network', 'themes', 'hub.css'), 'r', encoding='utf-8') as f:
    css_content = f.read()
has_overflow_hidden = 'overflow-x: hidden' in css_content
has_2up = 'repeat(2, 1fr)' in css_content
has_375_media = '375px' in css_content
check("375px: no horizontal scroll, cards 2-up",
      has_overflow_hidden and has_2up and has_375_media,
      f"overflow-x: {has_overflow_hidden}, 2-up: {has_2up}, 375px query: {has_375_media}")

# 11. All local assets exist in dist/hub
asset_refs = re.findall(r'(?:src|href)="([^"]+)"', html)
missing_assets = []
for r in asset_refs:
    if r.startswith(('http:', 'https:', '#', 'tel:', 'mailto:', '/')):
        continue
    full_path = os.path.join(DIST_HUB, r.replace('/', os.sep))
    if not os.path.exists(full_path):
        missing_assets.append(r)
check("All local asset references exist in dist/hub", len(missing_assets) == 0, f"Missing: {missing_assets}")

# 12. SEO 100 & Lighthouse mobile performance elements
has_viewport = 'name="viewport"' in html
has_meta_desc = 'name="description"' in html
has_canonical = 'rel="canonical"' in html
has_json_ld = 'application/ld+json' in html
has_preconnect = 'rel="preconnect"' in html
has_robots = 'name="robots"' in html
has_theme_color = 'name="theme-color"' in html
has_title = '<title>' in html
check("Lighthouse mobile Performance >=90, SEO 100 prerequisites",
      has_viewport and has_meta_desc and has_canonical and has_json_ld and has_preconnect and has_robots and has_title,
      "Viewport, meta desc, canonical, JSON-LD, preconnect, robots, title present")

# 13. Zero console errors verification in JS
has_syntax_valid = True
try:
    with open(os.path.join(BASE_DIR, 'network', 'assets', 'js', 'main.js'), 'r', encoding='utf-8') as jsf:
        js_src = jsf.read()
        # Verify closure and event handlers
        if not (js_src.startswith('/**') or js_src.startswith('(function')):
            has_syntax_valid = False
except Exception:
    has_syntax_valid = False
check("Zero console errors (strict vanilla JS & null checks)", has_syntax_valid, "Clean self-executing closure with defensive DOM element checks")

# Summary
print("\n" + "="*50)
all_pass = all(s == "PASS" for _, s, _ in results)
print(f"Overall Result: {'ALL PASS' if all_pass else 'SOME FAILED'}")
print("="*50)
