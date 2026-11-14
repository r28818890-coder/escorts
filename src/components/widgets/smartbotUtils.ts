// Utility functions for SmartBot

export interface SeoAuditReport {
  score: number;
  details: string[];
  fixedCount: number;
}

export function performSeoAudit(): SeoAuditReport {
  const details: string[] = [];
  let score = 100;

  // 1. Title Check
  const title = document.title;
  if (!title || title.length < 10) {
    details.push(' Page Title is missing or too short.');
    score -= 15;
  } else {
    details.push(` Title: "${title.substring(0, 45)}..."`);
  }

  // 2. Meta Description Check
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!metaDesc || metaDesc.length < 20) {
    details.push(' Meta Description is missing or short.');
    score -= 15;
  } else {
    details.push(' Meta Description tag present & optimized.');
  }

  // 3. Canonical URL Check
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  if (!canonical) {
    details.push(' Canonical link tag missing.');
    score -= 10;
  } else {
    details.push(` Canonical URL: ${canonical}`);
  }

  // 4. Heading H1 Check
  const h1Count = document.querySelectorAll('h1').length;
  if (h1Count === 0) {
    details.push(' No <h1> heading found on page.');
    score -= 15;
  } else if (h1Count > 1) {
    details.push(`️ Multiple <h1> headings found (${h1Count}). Recommended: 1.`);
    score -= 5;
  } else {
    details.push(' Single <h1> heading structured properly.');
  }

  // 5. Image Alt Check
  const images = Array.from(document.querySelectorAll('img'));
  const missingAlt = images.filter(img => !img.hasAttribute('alt') || !img.getAttribute('alt')?.trim());
  if (missingAlt.length > 0) {
    details.push(`️ ${missingAlt.length} images missing 'alt' attributes.`);
    score -= Math.min(20, missingAlt.length * 4);
  } else {
    details.push(` All ${images.length} images have 'alt' attributes.`);
  }

  // 6. Schema JSON-LD Check
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  if (schemas.length === 0) {
    details.push(' Structured Schema (JSON-LD) missing.');
    score -= 15;
  } else {
    details.push(` ${schemas.length} Structured Schema (JSON-LD) tag(s) verified.`);
  }

  return {
    score: Math.max(0, score),
    details,
    fixedCount: 0
  };
}

export function applySeoAutoFix(): SeoAuditReport {
  let fixedCount = 0;

  // Fix 1: Title
  if (!document.title || document.title.length < 10) {
    document.title = 'Noida Spa | Luxury Thai Spa Noida | Open 24 Hours';
    fixedCount++;
  }

  // Fix 2: Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  if (!metaDesc.getAttribute('content')) {
    metaDesc.setAttribute('content', 'Noida Spa — Noida premier luxury Thai spa in Sindhi Camp. Certified therapists offering Thai Massage, Swedish, Deep Tissue, Aromatherapy, Couple Spa & more. Open 24 hours.');
    fixedCount++;
  }

  // Fix 3: Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  if (!canonical.getAttribute('href')) {
    canonical.setAttribute('href', window.location.href);
    fixedCount++;
  }

  // Fix 4: OpenGraph Tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.setAttribute('content', document.title);
    document.head.appendChild(ogTitle);
    fixedCount++;
  }

  // Fix 5: Image Alt tags
  const images = Array.from(document.querySelectorAll('img'));
  images.forEach((img, idx) => {
    if (!img.hasAttribute('alt') || !img.getAttribute('alt')?.trim()) {
      img.setAttribute('alt', `Noida Spa Noida Image ${idx + 1}`);
      fixedCount++;
    }
  });

  // Fix 6: Multiple H1 Headings Fix (Keep first H1, convert extra H1s to H2)
  const h1Elements = Array.from(document.querySelectorAll('h1'));
  if (h1Elements.length > 1) {
    for (let i = 1; i < h1Elements.length; i++) {
      const oldH1 = h1Elements[i];
      const h2 = document.createElement('h2');
      h2.innerHTML = oldH1.innerHTML;
      Array.from(oldH1.attributes).forEach((attr) => h2.setAttribute(attr.name, attr.value));
      oldH1.parentNode?.replaceChild(h2, oldH1);
      fixedCount++;
    }
  }

  const audit = performSeoAudit();
  audit.fixedCount = fixedCount;
  return audit;
}

export function calculateSpaQuote(therapyName: string, durationMin: number = 60, includeSteam: boolean = false): { priceText: string; durationText: string; total: number } {
  let basePrice = 999;
  const nameLower = therapyName.toLowerCase();

  if (nameLower.includes('thai')) basePrice = 1099;
  else if (nameLower.includes('swedish')) basePrice = 999;
  else if (nameLower.includes('balinese')) basePrice = 1199;
  else if (nameLower.includes('deep tissue')) basePrice = 1199;
  else if (nameLower.includes('aroma')) basePrice = 1299;
  else if (nameLower.includes('full body')) basePrice = 1099;
  else if (nameLower.includes('couple')) basePrice = 2499;
  else if (nameLower.includes('scrub')) basePrice = 1499;

  let multiplier = 1;
  if (durationMin === 90) multiplier = 1.3;
  else if (durationMin === 120) multiplier = 1.6;

  let total = Math.round(basePrice * multiplier);
  if (includeSteam) total += 499;

  return {
    total,
    priceText: `₹${total.toLocaleString('en-IN')}`,
    durationText: `${durationMin} mins`
  };
}
