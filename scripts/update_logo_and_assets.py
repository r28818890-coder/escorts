import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_brand_assets():
    # 1. Create a 512x512 high-resolution luxury logo badge
    size = 512
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    cx, cy = size // 2, size // 2
    r_outer = 246

    # Draw subtle background glow
    glow = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((cx - r_outer, cy - r_outer, cx + r_outer, cy + r_outer), fill=(168, 85, 247, 80))
    glow = glow.filter(ImageFilter.GaussianBlur(15))
    img = Image.alpha_composite(img, glow)
    draw = ImageDraw.Draw(img)

    # Base luxury circle (Deep obsidian navy to royal purple)
    # Radial dark gradient approximation
    for i in range(r_outer, 0, -1):
        ratio = i / r_outer
        # From #2e1065 (46, 16, 101) edge to #0a0414 (10, 4, 20) center
        r = int(10 + (46 - 10) * ratio)
        g = int(4 + (16 - 4) * ratio)
        b = int(20 + (101 - 20) * ratio)
        draw.ellipse((cx - i, cy - i, cx + i, cy + i), fill=(r, g, b, 255))

    # Outer double gold ring
    draw.ellipse((cx - 240, cy - 240, cx + 240, cy + 240), outline=(245, 158, 11, 255), width=5)
    draw.ellipse((cx - 228, cy - 228, cx + 228, cy + 228), outline=(251, 191, 36, 180), width=2)

    # Crown on top
    crown_top = 75
    crown_points = [
        (cx - 70, crown_top + 60),
        (cx - 60, crown_top + 15),
        (cx - 25, crown_top + 45),
        (cx, crown_top + 5),
        (cx + 25, crown_top + 45),
        (cx + 60, crown_top + 15),
        (cx + 70, crown_top + 60),
    ]
    draw.polygon(crown_points, fill=(245, 158, 11, 255), outline=(251, 191, 36, 255))
    draw.rectangle((cx - 68, crown_top + 60, cx + 68, crown_top + 70), fill=(251, 191, 36, 255))
    
    # Jewels on crown
    for jx, jy in [(cx - 60, crown_top + 15), (cx, crown_top + 5), (cx + 60, crown_top + 15)]:
        draw.ellipse((jx - 6, jy - 6, jx + 6, jy + 6), fill=(254, 240, 138, 255), outline=(217, 119, 6, 255))

    # Try loading bold Segoe UI or Arial Bold font
    try:
        font_main = ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf', 125)
        font_sub = ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf', 24)
        font_vip = ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf', 18)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_vip = ImageFont.load_default()

    # Stylized Monogram "EH"
    # Shadow
    draw.text((cx - 103, 168), "EH", font=font_main, fill=(0, 0, 0, 180))
    # Main golden text
    draw.text((cx - 105, 165), "EH", font=font_main, fill=(251, 191, 36, 255))

    # Sparkle / Diamond in between
    d_pts = [(cx, 220), (cx + 12, 235), (cx, 250), (cx - 12, 235)]
    draw.polygon(d_pts, fill=(254, 240, 138, 255))

    # Banner ribbon at bottom: "ESCORTS HUB" & "NOIDA"
    b_y1, b_y2 = 330, 375
    draw.rounded_rectangle((cx - 150, b_y1, cx + 150, b_y2), radius=10, fill=(30, 27, 75, 230), outline=(245, 158, 11, 255), width=2)
    draw.text((cx - 105, b_y1 + 10), "ESCORTS HUB", font=font_sub, fill=(255, 255, 255, 255))

    # Lower gold tag: "NOIDA & NCR"
    draw.text((cx - 65, 395), "★ NOIDA VIP ★", font=font_vip, fill=(245, 158, 11, 255))

    # Save PNG formats in public/ and dist/
    os.makedirs('public', exist_ok=True)
    os.makedirs('public/images', exist_ok=True)

    img.save('public/icon-512.png', 'PNG')
    
    img_192 = img.resize((192, 192), Image.Resampling.LANCZOS)
    img_192.save('public/icon-192.png', 'PNG')

    img_180 = img.resize((180, 180), Image.Resampling.LANCZOS)
    img_180.save('public/apple-touch-icon.png', 'PNG')

    img_96 = img.resize((96, 96), Image.Resampling.LANCZOS)
    img_96.save('public/favicon-96x96.png', 'PNG')

    img_48 = img.resize((48, 48), Image.Resampling.LANCZOS)
    img_48.save('public/favicon-48x48.png', 'PNG')

    img_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    img_32.save('public/favicon-32x32.png', 'PNG')

    img_16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    img_16.save('public/favicon-16x16.png', 'PNG')

    img.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])

    # Also save header logo PNG for instant crisp loading
    img.resize((120, 120), Image.Resampling.LANCZOS).save('public/images/header-logo.png', 'PNG')

    # 2. Generate crisp standalone vector SVG: public/ecj-mark.svg and public/favicon.svg
    svg_mark = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="35%" stop-color="#fbbf24" />
      <stop offset="70%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#92400e" />
    </linearGradient>
    <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="50%" stop-color="#090514" />
      <stop offset="100%" stop-color="#180e29" />
    </linearGradient>
    <radialGradient id="markGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c084fc" stop-opacity="0.3" />
      <stop offset="80%" stop-color="#7c3aed" stop-opacity="0.05" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="goldDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.8" />
    </filter>
  </defs>

  <!-- Ambient Glow & Obsidian Disc -->
  <circle cx="256" cy="256" r="248" fill="url(#markGlow)" />
  <circle cx="256" cy="256" r="240" fill="url(#shieldGrad)" />

  <!-- Double Golden Ring -->
  <circle cx="256" cy="256" r="236" fill="none" stroke="url(#goldGrad)" stroke-width="4" />
  <circle cx="256" cy="256" r="224" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-dasharray="8,6" opacity="0.85" />

  <!-- Royal Crown -->
  <g transform="translate(186, 75) scale(0.7)" filter="url(#goldDrop)">
    <path d="M20,120 L40,35 L90,75 L100,15 L110,75 L160,35 L180,120 Z" fill="url(#goldGrad)" stroke="#78350f" stroke-width="2" />
    <circle cx="40" cy="30" r="9" fill="#fef08a" />
    <circle cx="100" cy="12" r="11" fill="#fef08a" />
    <circle cx="160" cy="30" r="9" fill="#fef08a" />
    <rect x="25" y="115" width="150" height="15" rx="4" fill="url(#goldGrad)" />
  </g>

  <!-- Interlocking Monogram EH -->
  <!-- E -->
  <path d="M140,185 L220,185 L220,218 L180,218 L180,246 L216,246 L216,278 L180,278 L180,312 L222,312 L222,345 L140,345 Z" fill="url(#goldGrad)" filter="url(#goldDrop)" />
  <!-- H -->
  <path d="M292,185 L332,185 L332,246 L372,246 L372,185 L412,185 L412,345 L372,345 L372,280 L332,280 L332,345 L292,345 Z" fill="url(#goldGrad)" filter="url(#goldDrop)" />

  <!-- Center Diamond Sparkle -->
  <polygon points="256,240 265,258 285,258 269,271 275,290 256,278 237,290 243,271 227,258 247,258" fill="#fef08a" filter="url(#goldDrop)" />

  <!-- Lower Banner Ribbon -->
  <path d="M110,380 Q256,415 402,380 L392,425 Q256,458 122,425 Z" fill="#1e1b4b" stroke="url(#goldGrad)" stroke-width="2" />
  <text x="256" y="416" font-family="'Montserrat', 'Arial Black', sans-serif" font-size="22" font-weight="900" fill="url(#goldGrad)" text-anchor="middle" letter-spacing="4">NOIDA VIP</text>

  <!-- Stars -->
  <polygon points="80,256 84,264 92,264 86,270 88,278 80,273 72,278 74,270 68,264 76,264" fill="url(#goldGrad)" />
  <polygon points="432,256 436,264 444,264 438,270 440,278 432,273 424,278 426,270 420,264 428,264" fill="url(#goldGrad)" />
</svg>'''

    with open('public/ecj-mark.svg', 'w', encoding='utf-8') as f:
        f.write(svg_mark)

    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_mark)

    # 3. Generate horizontal vector SVG: public/ecj-logo.svg
    #    The crest is inlined from svg_mark, so its <defs> (gradients + drop shadow filter)
    #    MUST be carried over too. Otherwise every `url(#goldGrad)` reference resolves to
    #    nothing and the emblem renders completely blank inside the logo lockup.
    #    Ids are namespaced to `mark*` so they cannot collide with the text gradients.
    crest_defs = svg_mark[svg_mark.find('<defs>') + len('<defs>'):svg_mark.find('</defs>')]
    crest_body = svg_mark[svg_mark.find('<circle cx="256"'):svg_mark.rfind('</svg>')]
    id_renames = [
        ('goldDrop', 'markGoldDrop'),
        ('goldGrad', 'markGoldGrad'),
        ('shieldGrad', 'markShieldGrad'),
        ('markGlow', 'markGlowGrad'),
    ]
    for old_id, new_id in id_renames:
        crest_defs = crest_defs.replace(f'id="{old_id}"', f'id="{new_id}"')
        crest_defs = crest_defs.replace(f'url(#{old_id})', f'url(#{new_id})')
        crest_body = crest_body.replace(f'url(#{old_id})', f'url(#{new_id})')

    svg_logo = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 90" width="460" height="90">
  <defs>
    <linearGradient id="hGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fde047" />
      <stop offset="40%" stop-color="#fbbf24" />
      <stop offset="80%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#b45309" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
{crest_defs}  </defs>

  <!-- Left Crest Emblem -->
  <g transform="translate(5, 5) scale(0.156)">
{crest_body}  </g>

  <!-- Typography -->
  <text x="96" y="44" font-family="'Montserrat', 'Segoe UI', system-ui, sans-serif" font-size="25" font-weight="900" fill="#0f172a" letter-spacing="1.5">
    ESCORTS <tspan fill="url(#purpleGrad)">HUB</tspan>
  </text>
  <text x="96" y="68" font-family="'Segoe UI', system-ui, sans-serif" font-size="11" font-weight="800" fill="url(#hGoldGrad)" letter-spacing="2.5">
    NOIDA &amp; NCR VIP COMPANIONS
  </text>
</svg>'''

    with open('public/ecj-logo.svg', 'w', encoding='utf-8') as f:
        f.write(svg_logo)

    # 4. Generate 1200x630 OpenGraph Banner: public/ecj-og-image.png
    banner_w, banner_h = 1200, 630
    banner = Image.new('RGBA', (banner_w, banner_h), (10, 4, 20, 255))
    bdraw = ImageDraw.Draw(banner)

    # Ambient glows
    glow = Image.new('RGBA', (banner_w, banner_h), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.ellipse((-50, 40, 600, 690), fill=(124, 58, 237, 70))
    gdraw.ellipse((800, -100, 1300, 400), fill=(217, 119, 6, 50))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    banner = Image.alpha_composite(banner, glow)
    bdraw = ImageDraw.Draw(banner)

    # Paste crest logo
    logo_og = img.resize((400, 400), Image.Resampling.LANCZOS)
    banner.paste(logo_og, (80, 115), logo_og)

    # Text content on right side
    try:
        font_og_h1 = ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf', 48)
        font_og_body = ImageFont.truetype(r'C:\Windows\Fonts\segoeui.ttf', 24)
        font_og_sub = ImageFont.truetype(r'C:\Windows\Fonts\arialbd.ttf', 18)
    except:
        font_og_h1 = ImageFont.load_default()
        font_og_body = ImageFont.load_default()
        font_og_sub = ImageFont.load_default()

    # Pill badge
    bdraw.rounded_rectangle((540, 120, 960, 160), radius=20, fill=(88, 28, 135, 180), outline=(192, 132, 252, 255), width=1)
    bdraw.text((560, 128), "VERIFIED NOIDA & NCR VIP DIRECTORY", font=font_og_sub, fill=(251, 191, 36, 255))

    bdraw.text((540, 180), "ESCORTS HUB NOIDA", font=font_og_h1, fill=(255, 255, 255, 255))

    bullets = [
        " 100% Real Photo Verified Profiles",
        " 24/7 Hotel Outcall & Prompt 20-Min Arrival",
        " Complete Discretion & Doorstep Meeting",
        " Noida Sectors 18, 62, 137, Expressway & NCR"
    ]
    y = 265
    for b in bullets:
        bdraw.text((540, y), b, font=font_og_body, fill=(226, 232, 240, 255))
        y += 44

    # Bottom line
    bdraw.line((540, 465, 1140, 465), fill=(71, 85, 105, 255), width=1)
    bdraw.text((540, 485), "Official Domain: wenoidaescorts.com", font=font_og_sub, fill=(168, 85, 247, 255))
    bdraw.text((540, 515), "Strictly 18+  Adult Entertainment & Escort Services", font=font_og_sub, fill=(148, 163, 184, 255))

    banner.convert('RGB').save('public/ecj-og-image.png', 'PNG')
    print("Successfully generated all logo assets, favicons, and OG image!")

if __name__ == '__main__':
    create_brand_assets()
