import os
import base64
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def generate_assets():
    src_path = r'C:\Users\cutem\.gemini\antigravity\brain\65cfa7e7-6a7f-4aa9-a720-194d8aba8a53\.user_uploaded\media_1794729022465_7fbc3eda.jpg'
    orig = Image.open(src_path).convert('RGBA')

    # 1. Supersampled circular anti-aliased mask
    w, h = orig.size
    scale = 4
    big_mask = Image.new('L', (w * scale, h * scale), 0)
    draw = ImageDraw.Draw(big_mask)
    cx, cy, r = 511.5 * scale, 512.0 * scale, 450.5 * scale
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    mask = big_mask.resize((w, h), Image.Resampling.LANCZOS)
    orig.putalpha(mask)

    # Crop to bounding box
    crop_box = (61, 61, 962, 962)
    cropped = orig.crop(crop_box)

    # 2. Save icon files in public/
    os.makedirs('public', exist_ok=True)
    img_512 = cropped.resize((512, 512), Image.Resampling.LANCZOS)
    img_512.save('public/icon-512.png', 'PNG')

    img_192 = cropped.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save('public/icon-192.png', 'PNG')

    img_180 = cropped.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save('public/apple-touch-icon.png', 'PNG')

    img_32 = cropped.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save('public/favicon-32x32.png', 'PNG')

    img_16 = cropped.resize((16, 16), Image.Resampling.LANCZOS)
    img_16.save('public/favicon-16x16.png', 'PNG')

    # Multi-size ICO
    cropped.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])

    # 3. Base64 encode for embedding in standalone SVG
    with open('public/icon-512.png', 'rb') as f:
        b64_512 = base64.b64encode(f.read()).decode('utf-8')

    # 4. Generate ecj-mark.svg and favicon.svg
    svg_mark = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="markGlow" cx="50%" cy="50%" r="50%">
      <stop offset="60%" stop-color="#7c3aed" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#4c158d" stop-opacity="0" />
    </radialGradient>
  </defs>
  <circle cx="256" cy="256" r="252" fill="url(#markGlow)" />
  <image href="data:image/png;base64,{b64_512}" x="0" y="0" width="512" height="512" />
</svg>'''

    with open('public/ecj-mark.svg', 'w', encoding='utf-8') as f:
        f.write(svg_mark)

    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_mark)

    # 5. Generate ecj-logo.svg (Horizontal logo)
    svg_logo = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 90" width="460" height="90">
  <defs>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>
  <g transform="translate(5, 5)">
    <image href="data:image/png;base64,{b64_512}" x="0" y="0" width="80" height="80" />
  </g>
  <text x="96" y="44" font-family="'Montserrat', 'Segoe UI', system-ui, sans-serif" font-size="25" font-weight="900" fill="#ffffff" letter-spacing="1.5">
    ESCORTS <tspan fill="url(#purpleGrad)">HUB</tspan>
  </text>
  <text x="96" y="68" font-family="'Segoe UI', system-ui, sans-serif" font-size="11" font-weight="700" fill="url(#goldGrad)" letter-spacing="2.5">
    NOIDA &amp; NCR VIP COMPANIONS
  </text>
</svg>'''

    with open('public/ecj-logo.svg', 'w', encoding='utf-8') as f:
        f.write(svg_logo)

    # 6. Generate 1200x630 ecj-og-image.png (High converting OpenGraph banner)
    banner_w, banner_h = 1200, 630
    banner = Image.new('RGBA', (banner_w, banner_h), (10, 4, 20, 255))
    bdraw = ImageDraw.Draw(banner)

    # Subtle purple ambient glow on the left
    glow = Image.new('RGBA', (banner_w, banner_h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((-50, 40, 600, 690), fill=(124, 58, 237, 70))
    gdraw.ellipse((800, -100, 1300, 400), fill=(88, 28, 135, 40))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    banner = Image.alpha_composite(banner, glow)
    bdraw = ImageDraw.Draw(banner)

    # Place the circular logo at (80, 105) with 420x420 size
    logo_og = cropped.resize((420, 420), Image.Resampling.LANCZOS)
    
    # Outer ring for logo in OG image
    bdraw.ellipse((70, 95, 510, 535), outline=(168, 85, 247, 180), width=3)
    bdraw.ellipse((64, 89, 516, 541), outline=(217, 119, 6, 120), width=1)
    banner.paste(logo_og, (80, 105), logo_og)
    bdraw = ImageDraw.Draw(banner)

    # Fonts
    font_bold = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 52)
    font_sub = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 20)
    font_body = ImageFont.truetype(r'C:\Windows\Fonts\segoeui.ttf', 24)
    font_small = ImageFont.truetype(r'C:\Windows\Fonts\segoeuib.ttf', 16)

    # Typography & CTA Elements
    # Badge Pill: "VERIFIED NOIDA & NCR COMPANIONS"
    bdraw.rounded_rectangle((560, 115, 960, 155), radius=20, fill=(88, 28, 135, 180), outline=(192, 132, 252, 255), width=1)
    bdraw.text((580, 122), "VERIFIED NOIDA & NCR VIP DIRECTORY", font=font_small, fill=(251, 191, 36))

    # Main Headline
    bdraw.text((560, 175), "ESCORTS HUB NOIDA", font=font_bold, fill=(255, 255, 255))

    # Highlights
    bullets = [
        " 100% Real Photo Verified Profiles",
        " 24/7 Hotel Outcall & Fast 20-Min Arrival",
        " Complete Discretion & Cash on Delivery",
        " Noida Sectors 18, 62, 137, Expressway & NCR"
    ]
    y_pos = 265
    for b in bullets:
        bdraw.text((560, y_pos), b, font=font_body, fill=(226, 232, 240))
        y_pos += 44

    # Bottom Trust Bar
    bdraw.line((560, 465, 1140, 465), fill=(71, 85, 105), width=1)
    bdraw.text((560, 485), "Official Domain: wenoidaescorts.com", font=font_sub, fill=(168, 85, 247))
    bdraw.text((560, 520), "Strictly 18+  Adult Entertainment & Escort Services", font=font_small, fill=(148, 163, 184))

    banner.convert('RGB').save('public/ecj-og-image.png', 'PNG')
    print('Successfully generated ALL assets!')

if __name__ == '__main__':
    generate_assets()
