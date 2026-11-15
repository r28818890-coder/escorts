import os
import json
import re
from PIL import Image

# 18 Noida localities
LOCALITIES = [
    {"slug": "sector-18", "name": "Sector 18 Noida", "landmark": "DLF Mall of India, Atta Market & Metro Gate 2"},
    {"slug": "sector-62", "name": "Sector 62 Noida", "landmark": "Electronic City, Fortis Hospital & IT Park"},
    {"slug": "sector-50", "name": "Sector 50 Noida", "landmark": "Wave City Center, Central Market & Metro"},
    {"slug": "sector-137", "name": "Sector 137 Noida", "landmark": "Noida-Greater Noida Expressway & Felix Hospital"},
    {"slug": "sector-18-film-city", "name": "Sector 16 & Film City", "landmark": "Film City, DND Flyway & World Trade Tower"},
    {"slug": "sector-76-78", "name": "Sector 76 & 78 Noida", "landmark": "Silicon City, Amrapali Silicon & Metro"},
    {"slug": "sector-128", "name": "Sector 128 Noida", "landmark": "Jaypee Wish Town, Kalindi Kunj & Sultanpur"},
    {"slug": "sector-142", "name": "Sector 142 Noida", "landmark": "Advant Navis Business Park & Aqua Line Metro"},
    {"slug": "pari-chowk", "name": "Pari Chowk Greater Noida", "landmark": "Alpha 1, Ansal Plaza & India Expo Mart"},
    {"slug": "noida-extension", "name": "Noida Extension (Gr Noida West)", "landmark": "Gaur City Mall, Char Murti & Kisan Chowk"},
    {"slug": "knowledge-park", "name": "Knowledge Park Greater Noida", "landmark": "India Expo Centre, Galgotias & Sharda"},
    {"slug": "indirapuram", "name": "Indirapuram Ghaziabad", "landmark": "Shipra Mall, Habitat Centre & Swarna Jayanti"},
    {"slug": "vaishali", "name": "Vaishali Ghaziabad", "landmark": "Vaishali Metro Station & Max Super Speciality Hospital"},
    {"slug": "vasundhara", "name": "Vasundhara Ghaziabad", "landmark": "Mewar Institute, Sector 10 & Mohan Nagar link"},
    {"slug": "crossings-republik", "name": "Crossings Republik", "landmark": "NH-24, ABES Engineering & Gaur City Border"},
    {"slug": "kaushambi", "name": "Kaushambi", "landmark": "Radisson Blu & Anand Vihar Inter-State Border"},
    {"slug": "mayur-vihar", "name": "Mayur Vihar", "landmark": "Phase 1 & DND Noida Toll Border"},
    {"slug": "botanical-garden", "name": "Botanical Garden (Sector 37)", "landmark": "Magenta/Blue Line Interchange Metro & Amity"}
]

# Source images pool
SOURCE_IMAGES = [
    "model_1.jpg", "model_2.jpg", "model_3.jpg", "model_4.jpg",
    "model_5.jpg", "model_6.jpg", "model_7.jpg", "model_8.jpg",
    "model_9.jpg", "model_10.jpg", "model_11.jpg", "model_12.jpg",
    "model_13.jpg", "model_14.jpg", "model_15.jpg", "model_unsplash_1.jpg"
]

# 100 Unique Names
GIRL_NAMES = [
    "Riya", "Ananya", "Pooja", "Kavya", "Simran", "Tanya", "Priya", "Muskan", "Neha", "Meera",
    "Shreya", "Sneha", "Aarohi", "Natasha", "Divya", "Payal", "Ishita", "Zara", "Alisha", "Komal",
    "Sonali", "Tanvi", "Akanksha", "Bhavna", "Chhavi", "Deepika", "Esha", "Garima", "Harshita", "Isha",
    "Jhanvi", "Khushi", "Lavanya", "Mahima", "Nidhi", "Ojasvi", "Prachi", "Radhika", "Sakshi", "Trisha",
    "Urvi", "Vaishnavi", "Yamini", "Zoya", "Avani", "Barkha", "Charu", "Disha", "Ekta", "Falguni",
    "Gauri", "Hina", "Inaya", "Juhi", "Kritika", "Lipika", "Mansi", "Navya", "Palak", "Rachna",
    "Sanya", "Tara", "Urvashi", "Vidhi", "Yukti", "Aashi", "Binita", "Chetna", "Damini", "Eva",
    "Geet", "Heena", "Indu", "Jyoti", "Kanika", "Lata", "Monika", "Nandini", "Parul", "Ritu",
    "Swati", "Tanisha", "Upasana", "Vandana", "Yashika", "Aastha", "Bani", "Chahat", "Devika", "Farah",
    "Gargi", "Honey", "Ira", "Jaya", "Kashish", "Leena", "Maya", "Nikita", "Poonam", "Roshni"
]

print(f"Total names available: {len(GIRL_NAMES)}")
assert len(GIRL_NAMES) == 100

# Distribution: 10 localities have 6 girls, 8 localities have 5 girls -> total 100
profiles = []
audit_rows = []
photo_usage = {}

img_idx = 0
name_idx = 0

for loc_idx, loc in enumerate(LOCALITIES):
    num_girls = 6 if loc_idx < 10 else 5
    for g in range(num_girls):
        name = GIRL_NAMES[name_idx]
        name_slug = name.lower()
        source_img = SOURCE_IMAGES[img_idx % len(SOURCE_IMAGES)]
        img_idx += 1
        name_idx += 1
        
        # New WebP filename format: escorts-[locality-slug]-noida-[name-slug]-01.webp
        new_filename = f"escorts-{loc['slug']}-noida-{name_slug}-01.webp"
        
        # Alt text: "Riya, verified VIP model for hotel outcall in Sector 18 Noida" (60-90 chars)
        alt_text = f"{name}, verified VIP model for hotel outcall in {loc['name']} Noida"
        alt_len = len(alt_text)
        if alt_len < 60:
            alt_text = f"{name}, verified VIP companion for hotel outcall in {loc['name']} Noida"
            alt_len = len(alt_text)
        if alt_len > 90:
            alt_text = f"{name}, verified VIP model for outcall in {loc['name']} Noida"
            alt_len = len(alt_text)
        
        assert 60 <= len(alt_text) <= 90, f"Alt text len error ({len(alt_text)}): {alt_text}"
        
        # Category assignment (mostly call-girls, with others represented)
        if name_idx <= 75:
            cat_slug = "call-girls"
            cat_id = "call-girls"
            cat_name = "Call Girls & Escorts"
        elif name_idx <= 85:
            cat_slug = "massages"
            cat_id = "massages"
            cat_name = "Massages & Luxury Spa"
        elif name_idx <= 90:
            cat_slug = "male-escorts"
            cat_id = "male-escorts"
            cat_name = "Male Escorts & Call Boys"
        elif name_idx <= 95:
            cat_slug = "transsexual"
            cat_id = "transsexual"
            cat_name = "Transsexual & TS Escorts"
        else:
            cat_slug = "adult-meetings"
            cat_id = "adult-meetings"
            cat_name = "Adult Meetings & Casual Dating"
            
        profile_slug = f"{name_slug}-verified-vip-model-{loc['slug']}"
        profile_url = f"https://wenoidaescorts.com/{cat_slug}/{loc['slug']}/{profile_slug}"
        
        # Track photo usage
        if source_img not in photo_usage:
            photo_usage[source_img] = []
        photo_usage[source_img].append(loc['name'])
        
        ad_id = f"ad-cg-{name_idx:03d}"
        age = 20 + ((name_idx * 3) % 7)
        rating = 4.8 + ((name_idx % 3) * 0.1)
        reviews = 18 + ((name_idx * 7) % 80)
        price_num = 2500 + ((name_idx % 4) * 500)
        
        profile = {
            "id": ad_id,
            "title": f"{name} - Verified VIP Model in {loc['name']}",
            "slug": profile_slug,
            "categoryId": cat_id,
            "categorySlug": cat_slug,
            "locality": loc['name'],
            "localitySlug": loc['slug'],
            "city": "Noida",
            "age": age,
            "phone": "8218125815",
            "whatsapp": "918218125815",
            "images": [
                f"/images/{new_filename}",
                f"/images/{new_filename}"
            ],
            "alt": alt_text,
            "isVerified": True,
            "isVip": (name_idx % 3 == 1),
            "isOnline": (name_idx % 2 == 0),
            "rating": round(rating, 2),
            "reviewsCount": reviews,
            "services": [
                "5-Star Hotel Outcall",
                "Dinner Dates",
                "Private In-call",
                "Discreet Meetings"
            ],
            "description": f"Hello gentlemen! I am {name}, an elegant, verified 24/7 companion in {loc['name']}. Available for prompt 20-minute hotel doorstep outcalls near {loc['landmark']}. 100% genuine real photographs, zero advance payment, and cash on delivery after arrival.",
            "postedAt": f"{(name_idx % 50) + 2} mins ago",
            "views": 1200 + (name_idx * 37),
            "rates": {
                "perHour": f"₹{price_num:,}",
                "perSession": f"₹{price_num + 2000:,}",
                "fullNight": f"₹{price_num * 4:,}"
            }
        }
        profiles.append(profile)
        audit_rows.append({
            "old_filename": source_img,
            "new_filename": new_filename,
            "profile_url": profile_url,
            "sector": loc['name'],
            "alt": alt_text,
            "name": name
        })

print(f"Generated {len(profiles)} profiles successfully!")

# Convert and save all 100 WebP images
public_img_dir = 'public/images'
os.makedirs(public_img_dir, exist_ok=True)

print("Converting and saving 100 WebP images in public/images/...")
for row in audit_rows:
    src_path = os.path.join(public_img_dir, row["old_filename"])
    dst_path = os.path.join(public_img_dir, row["new_filename"])
    if not os.path.exists(dst_path):
        im = Image.open(src_path)
        im_resized = im.resize((400, 533), Image.Resampling.LANCZOS)
        im_resized.save(dst_path, 'WEBP', quality=85)

print("WebP image generation complete!")

# Save profiles to json for inspection
with open('profiles_100.json', 'w', encoding='utf-8') as f:
    json.dump(profiles, f, indent=2)

# Build table
table_lines = [
    "| Old Filename | New Keyword WebP Filename | Profile URL | Sectors Where Photo Repeats | Reused Flag |",
    "| :--- | :--- | :--- | :--- | :--- |"
]

for row in audit_rows:
    src = row["old_filename"]
    repeats = list(set(photo_usage[src]))
    repeats_str = ", ".join(repeats[:3]) + (f" (+{len(repeats)-3} more)" if len(repeats) > 3 else "")
    flag = "[DUPLICATE REUSED]" if len(photo_usage[src]) > 1 else "[UNIQUE]"
    table_lines.append(f"| `{row['old_filename']}` | `{row['new_filename']}` | [{row['name']}]({row['profile_url']}) | {repeats_str} | **{flag}** |")

with open('audit_table.md', 'w', encoding='utf-8') as f:
    f.write("\n".join(table_lines))

print(f"Audit table generated with {len(audit_rows)} rows!")
