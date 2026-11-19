# Google Indexing API Setup Guide (15-Minute Instant Googlebot Crawl)

Google Indexing API ke zariye aapki website ke naye ya updated pages Googlebot Smartphone dwara **5 se 15 minute ke andar** crawl aur index hote hain. Isse Google ka normal indexing delay (Sandbox) bypass hota hai.

---

### Step 1: Google Cloud Project Banayein
1. [Google Cloud Console](https://console.cloud.google.com/) par jayein aur apne Google account se login karein.
2. Upar dropdown par click karke **"New Project"** banayein (e.g. `noida-escorts-indexing`).

### Step 2: "Web Search Indexing API" Enable Karein
1. Left menu me **APIs & Services > Library** par jayein.
2. Search bar me type karein: `Indexing API` ya `Web Search Indexing API`.
3. Us par click karke **"Enable"** button dabayein.

### Step 3: Service Account Banayein & JSON Key Download Karein
1. **APIs & Services > Credentials** par jayein.
2. Upar **"+ CREATE CREDENTIALS"** par click karein aur **"Service Account"** select karein.
3. Service Account ka name rakhein (e.g., `google-indexing-bot`) aur **"Create and Continue"** karein.
4. Role me **"Owner"** ya **"Editor"** select karke **"Done"** karein.
5. Ab Service Account list me bane huye email par click karein (e.g., `google-indexing-bot@your-project.iam.gserviceaccount.com`).
6. Upar **"Keys"** tab me jayein ➔ **"ADD KEY"** ➔ **"Create new key"** ➔ **JSON** select karein ➔ **"Create"**.
7. Ek `.json` file download ho jayegi.

### Step 4: JSON File ko Project me Save Karein
1. Downloaded JSON file ko rename karke **`service_account.json`** naam dein.
2. Is file ko project ke `scripts/` folder me daal dein:
   `E:\new project\ecj scot website\scripts\service_account.json`

### Step 5: Google Search Console me Permission Dein
1. [Google Search Console](https://search.google.com/search-console) me apni property `https://wenoidaescorts.com/` open karein.
2. Left sidebar me **Settings** ➔ **Users and permissions** par jayein.
3. Upar **"Add user"** button par click karein.
4. Apne Service Account ka email (e.g., `google-indexing-bot@your-project.iam.gserviceaccount.com`) daalein.
5. Permission dropdown me **"Owner"** select karein aur **"Add"** par click karein.

---

### Step 6: Command Run Karein!
Ab terminal me sirf ye command chalayein:

```bash
# Core high-priority pages ko Google ko submit karne ke liye:
npm run index:google

# Ya agar sitemap ke sabhi URLs ko ek sath submit karna ho:
node scripts/googleIndexing.cjs --all

# Ya kisi ek specific URL ko submit karna ho:
node scripts/googleIndexing.cjs https://wenoidaescorts.com/call-girls/sector-18/
```

Har URL ke samne `🟢 OK (200)` aayega aur Googlebot kuch hi minutes me page crawl karna shuru kar dega!
