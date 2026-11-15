import json
import os

with open('src/data/scheduledBlogs.ts', 'r', encoding='utf-8') as f:
    text = f.read()

total_blogs = text.count('"id":')
print(f"Total scheduled blogs in TS: {total_blogs}")

with open('public/backlinks.json', 'r', encoding='utf-8') as f:
    bl_data = json.load(f)

print(f"Total scheduled backlinks: {bl_data['totalScheduled']}")
print(f"Live backlinks today: {bl_data['liveCount']}")
print(f"Daily backlink release velocity: {bl_data['dailyVelocity']}")

# Verify first 3 blog titles
import re
titles = re.findall(r'"title":\s*"(.*?)"', text)[:5]
print("Top 5 Blog Titles (1st is latest):")
for i, t in enumerate(titles):
    print(f"  {i+1}. {t}")
