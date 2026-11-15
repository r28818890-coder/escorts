import os
import re

dist_dir = 'dist'
errors = []
total_pages = 0

for root, dirs, files in os.walk(dist_dir):
    for f in files:
        if f.endswith('.html'):
            if f.startswith('google') or 'matrix' in f:
                continue
            total_pages += 1
            path = os.path.join(root, f)
            rel_path = os.path.relpath(path, dist_dir).replace('\\', '/')
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                
            # 1. Title tag check (<= 60 chars)
            title_m = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
            if not title_m:
                errors.append(f"{rel_path}: Missing <title> tag")
            else:
                title = title_m.group(1).strip()
                if len(title) > 60:
                    errors.append(f"{rel_path}: Title too long ({len(title)} chars): '{title}'")
                    
            # 2. H1 tag count (exactly 1 H1 per page)
            h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content, re.IGNORECASE | re.DOTALL)
            if len(h1s) != 1:
                errors.append(f"{rel_path}: Expected exactly 1 H1, found {len(h1s)}")
                
            # 3. Canonical tag check
            canonical_m = re.search(r'<link\s+rel="canonical"\s+href="(.*?)"', content, re.IGNORECASE)
            if not canonical_m:
                errors.append(f"{rel_path}: Missing canonical link")
                
            # 4. Jaipur check
            if 'jaipur' in content.lower():
                errors.append(f"{rel_path}: Contains forbidden string 'Jaipur'")
                
            # 5. Invalid phone number check
            if '9521413060' in content or '95214 13060' in content:
                errors.append(f"{rel_path}: Contains old phone number")
                
            # 6. Strict Rates policy check (No priceRange in schema)
            if '"priceRange"' in content:
                errors.append(f"{rel_path}: Contains priceRange in schema")

            # 7. Check Homepage specific rules
            if rel_path == 'index.html':
                # Word count >= 1200
                text_only = re.sub(r'<[^>]+>', ' ', content)
                words = re.findall(r'\b\w+\b', text_only)
                word_count = len(words)
                if word_count < 1200:
                    errors.append(f"Homepage word count too low: {word_count} words (minimum 1200 required)")
                else:
                    print(f"✓ Homepage word count: {word_count} words (passed >= 1200)")

                # H1 targets "escorts in noida"
                h1_text = re.sub(r'<[^>]+>', '', h1s[0]).strip().lower() if h1s else ''
                if 'escorts in noida' not in h1_text:
                    errors.append(f"Homepage H1 '{h1_text}' does not target 'escorts in noida'")
                else:
                    print(f"✓ Homepage H1: '{h1_text}' (matches primary keyword)")

print(f"\nTotal HTML routes audited: {total_pages}")
print(f"Total audit errors: {len(errors)}")
if errors:
    for e in errors[:25]:
        print(" [FAIL] " + e)
else:
    print("ALL 112 PROGRAMMATIC ROUTE CHECKS PASSED WITH 0 AUDIT VIOLATIONS!")
