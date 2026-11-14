import os

HUB_IMG_DIR = os.path.join(os.path.dirname(__file__), 'assets', 'img', 'hub')
os.makedirs(HUB_IMG_DIR, exist_ok=True)

# 1. Banner SVG (1200x520)
banner_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="1200" height="520">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a0410"/>
      <stop offset="40%" stop-color="#3d0726"/>
      <stop offset="70%" stop-color="#e31777"/>
      <stop offset="100%" stop-color="#0a0106"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#ff4b9b" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#e31777" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f6d365"/>
      <stop offset="100%" stop-color="#fda085"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#bgGrad)"/>
  <rect width="1200" height="520" fill="url(#glow)"/>
  <!-- Decorative Luxury Geometric Lines -->
  <g stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5" fill="none">
    <circle cx="600" cy="260" r="160"/>
    <circle cx="600" cy="260" r="240"/>
    <circle cx="600" cy="260" r="320"/>
    <polygon points="600,60 800,260 600,460 400,260"/>
    <line x1="0" y1="0" x2="1200" y2="520"/>
    <line x1="1200" y1="0" x2="0" y2="520"/>
  </g>
  <!-- Brand Watermark V -->
  <g fill="#ffffff" fill-opacity="0.06">
    <path d="M600 120 L660 340 L620 340 L600 240 L580 340 L540 340 Z"/>
  </g>
  <!-- Sparkles -->
  <g fill="#f6d365" opacity="0.8">
    <polygon points="350,150 354,162 366,166 354,170 350,182 346,170 334,166 346,162"/>
    <polygon points="850,140 853,150 863,153 853,156 850,166 847,156 837,153 847,150"/>
    <polygon points="780,380 783,390 793,393 783,396 780,406 777,396 767,393 777,390"/>
    <polygon points="420,390 423,400 433,403 423,406 420,416 417,406 407,403 417,400"/>
  </g>
  <text x="600" y="270" text-anchor="middle" font-family="'Jost', sans-serif" font-weight="800" font-size="64" fill="#ffffff" letter-spacing="12">VELOURA</text>
  <text x="600" y="315" text-anchor="middle" font-family="'Open Sans', sans-serif" font-weight="600" font-size="18" fill="url(#gold)" letter-spacing="6">NOIDA VIP ESCORTS &amp; COMPANIONS</text>
</svg>'''

with open(os.path.join(HUB_IMG_DIR, 'banner.svg'), 'w', encoding='utf-8') as f:
    f.write(banner_svg)

# 2. About SVG (600x450)
about_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <defs>
    <linearGradient id="abGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a0518"/>
      <stop offset="50%" stop-color="#4d0a2f"/>
      <stop offset="100%" stop-color="#14020b"/>
    </linearGradient>
    <linearGradient id="pinkGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e31777"/>
      <stop offset="100%" stop-color="#ff75b5"/>
    </linearGradient>
  </defs>
  <rect width="600" height="450" rx="16" fill="url(#abGrad)"/>
  <rect x="20" y="20" width="560" height="410" rx="12" fill="none" stroke="#e31777" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Central Emblem -->
  <circle cx="300" cy="200" r="90" fill="#e31777" fill-opacity="0.1" stroke="#e31777" stroke-width="2"/>
  <circle cx="300" cy="200" r="75" fill="none" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1"/>
  <!-- Monogram V -->
  <path d="M300 145 L335 240 L315 240 L300 185 L285 240 L265 240 Z" fill="url(#pinkGold)"/>
  <!-- Stars -->
  <g fill="#f6d365">
    <polygon points="300,105 303,112 311,114 305,119 307,126 300,122 293,126 295,119 289,114 297,112"/>
    <polygon points="265,115 267,120 274,121 269,125 271,131 265,128 259,131 261,125 256,121 263,120"/>
    <polygon points="335,115 337,120 344,121 339,125 341,131 335,128 329,131 331,125 326,121 333,120"/>
  </g>
  <text x="300" y="335" text-anchor="middle" font-family="'Jost', sans-serif" font-weight="700" font-size="24" fill="#ffffff" letter-spacing="3">VELOURA NOIDA</text>
  <text x="300" y="365" text-anchor="middle" font-family="'Open Sans', sans-serif" font-size="13" fill="#ff75b5" letter-spacing="2">PREMIER 5-STAR ESCORT AGENCY</text>
  <text x="300" y="390" text-anchor="middle" font-family="'Open Sans', sans-serif" font-size="11" fill="#999999">EST. 2026 • 100% PHOTO VERIFIED • CASH ON DELIVERY</text>
</svg>'''

with open(os.path.join(HUB_IMG_DIR, 'about.svg'), 'w', encoding='utf-8') as f:
    f.write(about_svg)

# 3. Favicon (64x64)
favicon_svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff4b9b"/>
      <stop offset="100%" stop-color="#c01362"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#favGrad)"/>
  <circle cx="32" cy="32" r="28" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.4"/>
  <path d="M32 16 L44 46 L37 46 L32 28 L27 46 L20 46 Z" fill="#ffffff"/>
</svg>'''

with open(os.path.join(HUB_IMG_DIR, 'favicon.svg'), 'w', encoding='utf-8') as f:
    f.write(favicon_svg)

# 4. Trust Icons (64x64)
trust_icons = {
    'trust-1.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="#fdf2f7" stroke="#e31777" stroke-width="2"/>
  <path d="M32 12 L48 18 V32 C48 42 41 50 32 54 C23 50 16 42 16 32 V18 Z" fill="#e31777"/>
  <path d="M26 31 L30 35 L38 25" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>''',
    'trust-2.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="#fdf2f7" stroke="#e31777" stroke-width="2"/>
  <rect x="15" y="20" width="34" height="24" rx="4" fill="#e31777"/>
  <circle cx="32" cy="32" r="6" fill="#ffffff"/>
  <circle cx="32" cy="32" r="4" fill="#e31777"/>
  <circle cx="21" cy="32" r="2" fill="#ffffff"/>
  <circle cx="43" cy="32" r="2" fill="#ffffff"/>
</svg>''',
    'trust-3.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="#fdf2f7" stroke="#e31777" stroke-width="2"/>
  <rect x="20" y="26" width="24" height="20" rx="3" fill="#e31777"/>
  <path d="M25 26 V20 C25 16.1 28.1 13 32 13 C35.9 13 39 16.1 39 20 V26" stroke="#e31777" stroke-width="3.5" fill="none"/>
  <circle cx="32" cy="35" r="2.5" fill="#ffffff"/>
  <path d="M32 37.5 V41" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
</svg>''',
    'trust-4.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <circle cx="32" cy="32" r="30" fill="#fdf2f7" stroke="#e31777" stroke-width="2"/>
  <circle cx="32" cy="32" r="18" fill="#e31777"/>
  <polyline points="32,22 32,32 39,32" stroke="#ffffff" stroke-width="3" fill="none" stroke-linecap="round"/>
  <polygon points="46,14 42,20 48,20 44,28 52,19 47,19" fill="#f6d365"/>
</svg>'''
}

for name, svg_content in trust_icons.items():
    with open(os.path.join(HUB_IMG_DIR, name), 'w', encoding='utf-8') as f:
        f.write(svg_content)

# 5. CTA Icons (wa.svg, call.svg, tg.svg)
cta_icons = {
    'wa.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
  <circle cx="18" cy="18" r="18" fill="#25d366"/>
  <path d="M18 7.5 C12.2 7.5 7.5 12.2 7.5 18 C7.5 20.1 8.1 22 9.2 23.6 L8 28 L12.6 26.8 C14.2 27.8 16 28.5 18 28.5 C23.8 28.5 28.5 23.8 28.5 18 C28.5 12.2 23.8 7.5 18 7.5 Z" fill="#ffffff"/>
  <path d="M22.8 20.8 C22.6 20.4 22 20.1 21.2 19.7 C20.4 19.3 19.7 19.4 19.3 20 C18.9 20.6 18.5 20.9 18.1 20.7 C17.3 20.3 15.7 18.8 15.3 18 C15.1 17.6 15.4 17.2 16 16.8 C16.4 16.4 16.5 15.7 16.1 14.9 C15.7 14.1 15 12.4 14.4 12.4 C13.8 12.4 13.2 12.7 12.8 13.3 C12.2 14.1 12 15.3 12.8 17.1 C13.8 19.4 16.3 22.4 19.6 23.2 C21.4 23.6 22.4 23.2 23.1 22.4 C23.6 21.8 23.8 21.2 23.8 20.8 C23.8 20.5 23 20.6 22.8 20.8 Z" fill="#25d366"/>
</svg>''',
    'call.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
  <circle cx="18" cy="18" r="18" fill="#e31777"/>
  <path d="M12.5 11.5 C12 11.5 11.2 12 11 12.8 C10.4 14.7 11.5 18.8 15.2 22.5 C18.9 26.2 23 27.3 24.9 26.7 C25.7 26.5 26.2 25.7 26.2 25.2 C26.2 24.2 24.8 23 23.8 22.6 C23 22.2 22.4 22.5 21.8 23.2 C21.2 23.8 20.5 23.8 19.6 23.2 C18.4 22.4 15.3 19.3 14.5 18.1 C13.9 17.2 13.9 16.5 14.5 15.9 C15.2 15.3 15.5 14.7 15.1 13.9 C14.7 12.9 13.5 11.5 12.5 11.5 Z" fill="#ffffff"/>
</svg>''',
    'tg.svg': '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="36" height="36">
  <circle cx="18" cy="18" r="18" fill="#2aabee"/>
  <path d="M10 17.5 L24 11.5 L21.5 24.5 L17 20.5 L15 22.5 L15 19.5 L22.5 13.5 L13 18.5 Z" fill="#ffffff" fill-rule="evenodd"/>
</svg>'''
}

for name, svg_content in cta_icons.items():
    with open(os.path.join(HUB_IMG_DIR, name), 'w', encoding='utf-8') as f:
        f.write(svg_content)

# 6. Profile Images (301.svg to 316.svg - 400x533, 3:4 ratio)
palette = [
    ('#200615', '#e31777', '#ff65a8', 'Aarohi', '20', 'College Girl', 'Sector 62'),
    ('#140520', '#9d1bb2', '#e065ff', 'Shanaya', '23', 'Model', 'Sector 18'),
    ('#220606', '#d62246', '#ff6b8b', 'Ritu', '26', 'Independent', 'Sector 50'),
    ('#041624', '#007bb6', '#4cc3ff', 'Ananya', '28', 'Housewife', 'Sector 137'),
    ('#201402', '#d48806', '#ffd666', 'Kiara', '24', 'VIP', 'Sector 16'),
    ('#052019', '#13a8a8', '#5cdbd3', 'Priya', '22', 'Air Hostess', 'Sector 128'),
    ('#240618', '#eb2f96', '#ff85c0', 'Natasha', '25', 'Russian', 'Sector 142'),
    ('#1d0b28', '#722ed1', '#b37feb', 'Meera', '19', 'College Girl', 'Noida Ext'),
    ('#280816', '#c41d7f', '#ffadd2', 'Ishita', '25', 'Model', 'Gr Noida W'),
    ('#1f0b09', '#cf1322', '#ffa39e', 'Sneha', '27', 'Independent', 'Sector 76'),
    ('#091a1f', '#096dd9', '#91d5ff', 'Tanya', '29', 'Housewife', 'Sector 104'),
    ('#201a03', '#d46b08', '#ffc069', 'Divya', '23', 'VIP', 'Sector 110'),
    ('#041f17', '#389e0d', '#95de64', 'Pooja', '24', 'Air Hostess', 'Sector 75'),
    ('#260517', '#e31777', '#ffa3cb', 'Elena', '22', 'Russian', 'Sector 18'),
    ('#170424', '#531dab', '#9254de', 'Riya', '21', 'College Girl', 'Sector 63'),
    ('#26060c', '#a8071a', '#ff7875', 'Simran', '24', 'Model', 'Sector 93'),
]

for idx, (c1, c2, c3, name, age, cat, area) in enumerate(palette):
    img_name = f"{301 + idx}.svg"
    svg_data = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 533" width="400" height="533">
  <defs>
    <linearGradient id="pGrad{idx}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="60%" stop-color="{c2}"/>
      <stop offset="100%" stop-color="{c1}"/>
    </linearGradient>
    <radialGradient id="pLight{idx}" cx="50%" cy="30%" r="50%">
      <stop offset="0%" stop-color="{c3}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="pShadow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="40%" stop-color="#000000" stop-opacity="0.1"/>
      <stop offset="75%" stop-color="#000000" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.95"/>
    </linearGradient>
  </defs>
  <rect width="400" height="533" fill="url(#pGrad{idx})"/>
  <rect width="400" height="533" fill="url(#pLight{idx})"/>
  <!-- Decorative Backdrop Ring -->
  <circle cx="200" cy="200" r="140" fill="none" stroke="{c3}" stroke-width="1.5" stroke-opacity="0.25"/>
  <circle cx="200" cy="200" r="110" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.15" stroke-dasharray="6,4"/>
  
  <!-- Stylized Elegant Silhouette Avatar -->
  <g fill="{c3}" fill-opacity="0.9">
    <!-- Hair Volume -->
    <path d="M130 190 C125 120 160 80 200 80 C240 80 275 120 270 190 C265 240 280 320 275 360 C260 365 250 320 245 280 C235 295 215 300 200 300 C185 300 165 295 155 280 C150 320 140 365 125 360 C120 320 135 240 130 190 Z"/>
    <!-- Face / Jawline -->
    <path d="M165 160 C165 210 180 235 200 235 C220 235 235 210 235 160 C235 130 220 115 200 115 C180 115 165 130 165 160 Z" fill="#ffe0cc"/>
    <!-- Neck & Shoulders -->
    <path d="M188 230 L188 265 L140 295 C125 315 110 350 100 380 L300 380 C290 350 275 315 260 295 L212 265 L212 230 Z" fill="#ffe0cc"/>
    <!-- Fashion Bodice -->
    <path d="M135 320 Q200 350 265 320 L275 420 L125 420 Z" fill="{c2}"/>
  </g>

  <!-- Verified Badge in Top Right -->
  <g transform="translate(325, 20)">
    <rect width="55" height="24" rx="12" fill="#25d366" fill-opacity="0.95"/>
    <text x="28" y="16" text-anchor="middle" font-family="'Open Sans', sans-serif" font-weight="700" font-size="11" fill="#ffffff">✓ REAL</text>
  </g>

  <!-- Watermark Logo in Top Left -->
  <g transform="translate(20, 20)">
    <circle cx="16" cy="16" r="16" fill="#000000" fill-opacity="0.4"/>
    <text x="16" y="21" text-anchor="middle" font-family="'Jost', sans-serif" font-weight="800" font-size="15" fill="#ffffff">V</text>
  </g>

  <!-- Bottom Dark Gradient for Text Legibility -->
  <rect width="400" height="533" fill="url(#pShadow)"/>
</svg>'''
    with open(os.path.join(HUB_IMG_DIR, img_name), 'w', encoding='utf-8') as f:
        f.write(svg_data)

print(f"Generated all SVG placeholders in {HUB_IMG_DIR}")

