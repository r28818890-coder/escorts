import os
import re
import json

def audit():
    print("=" * 75)
    print("🔍 AUDIT: HOMEPAGE (/) TO NOIDA MASTER PAGE (/escorts-in-noida/)")
    print("=" * 75)

    home_dist_path = 'dist/index.html'
    home_src_path = 'src/pages/Home.tsx'
    noida_dist_path = 'dist/escorts-in-noida/index.html'
    noida_src_path = 'src/pages/NoidaMasterHubPage.tsx'

    # 1. HOMEPAGE CHECKS
    print("\n[PART 1: HOMEPAGE TECHNICAL & ON-PAGE SEO]")
    if os.path.exists(home_dist_path):
        c = open(home_dist_path, encoding='utf-8').read()
        title = re.search(r'<title>(.*?)</title>', c)
        desc = re.search(r'<meta name="description" content="(.*?)"', c)
        canon = re.search(r'<link rel="canonical" href="(.*?)"', c)
        h1 = re.findall(r'<h1[^>]*>(.*?)</h1>', c, re.DOTALL)
        h2 = re.findall(r'<h2[^>]*>(.*?)</h2>', c, re.DOTALL)
        schemas = re.findall(r'<script type="application/ld\+json">(.*?)</script>', c, re.DOTALL)

        print(f"  ✓ Title: {title.group(1) if title else 'MISSING'}")
        print(f"  ✓ Meta Description: {desc.group(1) if desc else 'MISSING'}")
        print(f"  ✓ Canonical: {canon.group(1) if canon else 'MISSING'}")
        print(f"  ✓ H1 Tags ({len(h1)}): {[re.sub(r'<[^>]+>', '', x).strip() for x in h1]}")
        print(f"  ✓ H2 Tags ({len(h2)} count): Sample -> {[re.sub(r'<[^>]+>', '', x).strip() for x in h2[:2]]}")
        print(f"  ✓ Schema.org JSON-LD Blocks: {len(schemas)}")

        # Check links pointing to /escorts-in-noida from Homepage
        links_to_noida = re.findall(r'<a[^>]+href="([^"]*escorts-in-noida[^"]*)"[^>]*>(.*?)</a>', c, re.DOTALL)
        print(f"\n  👉 Links on Homepage pointing to /escorts-in-noida: {len(links_to_noida)}")
        for href, text in links_to_noida:
            clean_text = re.sub(r'<[^>]+>', '', text).strip()
            print(f"     • href='{href}' | Anchor Text: '{clean_text}'")

    # Check Home.tsx source for internal linking opportunities
    if os.path.exists(home_src_path):
        home_src = open(home_src_path, encoding='utf-8').read()
        noida_kw_mentions = len(re.findall(r'(?i)noida', home_src))
        print(f"  ✓ Keyword 'Noida' occurrences in Home.tsx: {noida_kw_mentions}")
        has_direct_body_link = '/escorts-in-noida' in home_src
        print(f"  ✓ In-content body link to /escorts-in-noida inside Home.tsx body: {has_direct_body_link}")

    # 2. NOIDA MASTER PAGE CHECKS
    print("\n[PART 2: NOIDA MASTER PAGE TECHNICAL & ON-PAGE SEO]")
    if os.path.exists(noida_dist_path):
        nc = open(noida_dist_path, encoding='utf-8').read()
        ntitle = re.search(r'<title>(.*?)</title>', nc)
        ndesc = re.search(r'<meta name="description" content="(.*?)"', nc)
        ncanon = re.search(r'<link rel="canonical" href="(.*?)"', nc)
        nh1 = re.findall(r'<h1[^>]*>(.*?)</h1>', nc, re.DOTALL)
        nh2 = re.findall(r'<h2[^>]*>(.*?)</h2>', nc, re.DOTALL)
        nschemas = re.findall(r'<script type="application/ld\+json">(.*?)</script>', nc, re.DOTALL)
        nimages = re.findall(r'<img[^>]+src="([^"]+)"[^>]*alt="([^"]*)"', nc)

        print(f"  ✓ Title: {ntitle.group(1) if ntitle else 'MISSING'}")
        print(f"  ✓ Meta Description: {ndesc.group(1) if ndesc else 'MISSING'}")
        print(f"  ✓ Canonical: {ncanon.group(1) if ncanon else 'MISSING'}")
        print(f"  ✓ H1 Tags ({len(nh1)}): {[re.sub(r'<[^>]+>', '', x).strip() for x in nh1]}")
        print(f"  ✓ H2 Tags ({len(nh2)} count): {[re.sub(r'<[^>]+>', '', x).strip() for x in nh2[:4]]}")
        print(f"  ✓ Schema.org JSON-LD Blocks: {len(nschemas)}")
        print(f"  ✓ Pre-rendered Images with Alt tags: {len(nimages)}")

        # Outgoing Internal links on Noida page
        internal_anchors = re.findall(r'<a[^>]+href="(/[^"#?]+)"[^>]*>(.*?)</a>', nc, re.DOTALL)
        unique_targets = set(href for href, _ in internal_anchors)
        print(f"\n  👉 Outgoing Internal Anchor Links on Noida page: {len(internal_anchors)}")
        print(f"  👉 Unique Internal Page Destinations Linked: {len(unique_targets)}")

        # Breakdown of link categories
        area_links = [h for h in unique_targets if h.startswith('/area/')]
        cat_links = [h for h in unique_targets if any(h.startswith(f'/{c}/') for c in ['call-girls', 'russian-escorts', 'vip-escorts', 'independent-escorts', 'celebrity-escorts', 'transsexual', 'adult-meetings'])]
        guide_links = [h for h in unique_targets if any(g in h for g in ['booking', 'safety-guide', 'noida-areas', 'noida-escorts', 'gallery', 'faq', 'about', 'contact', 'blog'])]

        print(f"     • 18 Hyperlocal Area Pages (/area/*): {len(area_links)} / 18")
        print(f"     • Category & Hyperlocal Combinations: {len(cat_links)}")
        print(f"     • Institutional Guides & Safety Pages: {len(guide_links)}")

    # 3. SCHEMA INTEGRITY CHECK
    print("\n[PART 3: SCHEMA.ORG VALIDATION]")
    if os.path.exists(noida_dist_path):
        for idx, s in enumerate(nschemas):
            try:
                parsed = json.loads(s.strip())
                stype = parsed.get('@type') or (parsed.get('@graph') and [g.get('@type') for g in parsed['@graph']])
                print(f"  ✓ Schema #{idx + 1} Valid JSON -> Types: {stype}")
            except Exception as e:
                print(f"  ❌ Schema #{idx + 1} Syntax Error: {e}")

    print("\n" + "=" * 75)
    print("AUDIT COMPLETED")
    print("=" * 75)

if __name__ == '__main__':
    audit()
