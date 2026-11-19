#!/usr/bin/env python3
"""
Comprehensive Image Optimization & Renaming Script for Escorts Hub Noida
1. Converts all images to optimized .webp format with quality=82 and max-width 800px.
2. Renames profile images to: [name]-[companion-type]-escorts-[locality]-noida.webp (e.g. riya-vip-escorts-sector-18-noida.webp).
3. Renames non-profile images using targeted SEO keyword patterns.
4. Generates rich SEO alt tags: e.g. alt="Riya 23 Yrs VIP Escort in Sector 18 Noida".
5. Synchronizes src/config/portalData.ts and scripts/portalData.cjs.
"""

import os
import re
import json
from PIL import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES_DIR = os.path.join(BASE_DIR, 'public', 'images')
PORTAL_DATA_TS = os.path.join(BASE_DIR, 'src', 'config', 'portalData.ts')
PORTAL_DATA_CJS = os.path.join(BASE_DIR, 'scripts', 'portalData.cjs')

KEYWORD_IMAGE_MAPPINGS = {
    'model_1.jpg': 'independent-escorts-sector-18-noida.webp',
    'model_2.jpg': 'luxury-call-girls-sector-62-noida.webp',
    'model_3.jpg': 'vip-russian-escorts-noida-expressway.webp',
    'model_4.jpg': 'hotel-outcall-escorts-pari-chowk-noida.webp',
    'model_5.jpg': 'college-girl-escorts-sector-50-noida.webp',
    'model_6.jpg': 'high-profile-escorts-sector-137-noida.webp',
    'model_7.jpg': 'cash-on-delivery-escorts-indirapuram-noida.webp',
    'model_8.jpg': 'verified-call-girls-greater-noida.webp',
    'model_9.jpg': 'discreet-escorts-sector-128-noida.webp',
    'model_10.jpg': '24-7-hotel-outcall-sector-142-noida.webp',
    'model_11.jpg': 'air-hostess-escorts-botanical-garden-noida.webp',
    'model_12.jpg': 'foreign-models-escorts-knowledge-park-noida.webp',
    'model_13.jpg': 'genuine-call-girls-vaishali-noida.webp',
    'model_14.jpg': 'top-rated-escorts-vasundhara-noida.webp',
    'model_15.jpg': 'premium-escorts-crossings-republik-noida.webp',
    'model_unsplash_1.jpg': 'vip-companions-kaushambi-noida.webp',
    'logo-original.jpg': 'escorts-hub-noida-luxury-logo.webp',
    'header-logo.png': 'escorts-hub-noida-header-logo.webp'
}

def optimize_image(src_path, dest_path, max_width=800, quality=82):
    """Resizes and compresses image to webp with metadata stripped"""
    with Image.open(src_path) as img:
        if img.mode in ('RGBA', 'LA', 'P'):
            # Convert with white background for transparency if saving as RGB
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1])
            img = background
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        if img.width > max_width:
            new_height = int(img.height * (max_width / img.width))
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

        img.save(dest_path, 'WEBP', quality=quality, method=6)

def process_portal_data():
    with open(PORTAL_DATA_TS, 'r', encoding='utf-8') as f:
        ts_content = f.read()

    # Extract INITIAL_CLASSIFIED_ADS json block
    match = re.search(r'(export const INITIAL_CLASSIFIED_ADS: ClassifiedAd\[\] = )(\[.*?\]);', ts_content, re.DOTALL)
    if not match:
        raise ValueError("Could not find INITIAL_CLASSIFIED_ADS in portalData.ts")

    prefix = match.group(1)
    ads = json.loads(match.group(2))
    old_files_to_remove = set()
    new_files_created = set()

    print(f"Processing {len(ads)} profile ads...")

    for ad in ads:
        title = ad['title']
        raw_name = title.split(' - ')[0].strip()
        name_slug = re.sub(r'[^a-z0-9]+', '-', raw_name.lower()).strip('-')
        cat = ad.get('categorySlug', 'call-girls')
        loc_slug = ad.get('localitySlug', 'sector-18')
        loc_name = ad.get('locality', 'Sector 18 Noida')
        age = ad.get('age', 23)

        # Determine companion type slug & title for alt tag
        if cat == 'russian-escorts':
            cat_slug = 'russian-escorts'
            cat_title = 'VIP Russian Escort'
        elif cat == 'transsexual':
            cat_slug = 'trans-escorts'
            cat_title = 'VIP Trans Escort'
        elif cat == 'adult-meetings':
            cat_slug = 'adult-escorts'
            cat_title = 'VIP Dating Companion'
        elif ad.get('isVip', False):
            cat_slug = 'vip-escorts'
            cat_title = 'VIP Escort'
        else:
            cat_slug = 'vip-escorts'
            cat_title = 'VIP Escort'

        new_filename = f"{name_slug}-{cat_slug}-{loc_slug}-noida.webp"
        new_alt = f"{raw_name} {age} Yrs {cat_title} in {loc_name}"

        # Current image path
        current_img_rel = ad['images'][0] if ad.get('images') and len(ad['images']) > 0 else None
        if current_img_rel:
            current_img_rel = current_img_rel.lstrip('/')
            current_img_path = os.path.join(BASE_DIR, 'public', current_img_rel.replace('/', os.sep))
            target_img_path = os.path.join(IMAGES_DIR, new_filename)

            if os.path.exists(current_img_path):
                optimize_image(current_img_path, target_img_path)
                new_files_created.add(new_filename)
                if current_img_path != target_img_path and current_img_path.endswith('.webp'):
                    old_files_to_remove.add(current_img_path)
            else:
                print(f"Warning: Source image not found: {current_img_path}")

        # Update ad object
        ad['images'] = [f"/images/{new_filename}"]
        ad['alt'] = new_alt

    # Process keyword-based non-profile images
    print("Converting non-profile images to keyword-optimized .webp...")
    for old_file, new_file in KEYWORD_IMAGE_MAPPINGS.items():
        src_path = os.path.join(IMAGES_DIR, old_file)
        dest_path = os.path.join(IMAGES_DIR, new_file)
        if os.path.exists(src_path):
            optimize_image(src_path, dest_path)
            new_files_created.add(new_file)
            old_files_to_remove.add(src_path)
            print(f"  ✓ Converted: {old_file} -> {new_file}")

    # Remove old images that have been superseded
    for old_path in old_files_to_remove:
        try:
            if os.path.exists(old_path) and os.path.basename(old_path) not in new_files_created:
                os.remove(old_path)
        except Exception as e:
            print(f"Error removing {old_path}: {e}")

    # Format updated ads JSON
    updated_ads_json = json.dumps(ads, indent=2, ensure_ascii=False)

    # 1. Update src/config/portalData.ts
    new_ts_content = ts_content[:match.start()] + prefix + updated_ads_json + ';\n' + ts_content[match.end():]
    with open(PORTAL_DATA_TS, 'w', encoding='utf-8') as f:
        f.write(new_ts_content)
    print(f"✓ Updated {PORTAL_DATA_TS}")

    # 2. Update scripts/portalData.cjs
    with open(PORTAL_DATA_CJS, 'r', encoding='utf-8') as f:
        cjs_content = f.read()

    cjs_match = re.search(r'(const CLASSIFIED_ADS = )(\[.*?\]);', cjs_content, re.DOTALL)
    if cjs_match:
        new_cjs_content = cjs_content[:cjs_match.start()] + cjs_match.group(1) + updated_ads_json + ';\n' + cjs_content[cjs_match.end():]
        with open(PORTAL_DATA_CJS, 'w', encoding='utf-8') as f:
            f.write(new_cjs_content)
        print(f"✓ Updated {PORTAL_DATA_CJS}")

    print(f"\nSuccessfully optimized and renamed {len(new_files_created)} images to .webp with exact locality and companion type alt tags!")

if __name__ == '__main__':
    process_portal_data()
