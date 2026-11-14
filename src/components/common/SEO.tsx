import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BRAND, CONTACT } from '@/config/site';
import SchemaReviewMarkup from '@/components/common/SchemaReviewMarkup';
import GeoSeoEngine from '@/components/common/GeoSeoEngine';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  schema?: object | object[];
  breadcrumbs?: { name: string; url: string }[];
  keywords?: string;
  noIndex?: boolean;
}

const defaultImage = BRAND.ogImage;

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = defaultImage,
  url,
  type = 'website',
  schema,
  breadcrumbs,
  keywords,
  noIndex = false,
}) => {
  const location = useLocation();
  const canonical = url || `${BRAND.domain}${(location.pathname.endsWith("/") ? location.pathname : location.pathname + "/")}`;
  const fullTitle = (title ? title : 'Escorts in Noida | Verified 24/7 Hotel Outcall').slice(0, 58);
  const fullDesc =
    description ||
    `${BRAND.name} — Premier verified directory for independent escorts, VIP models, hotel outcall companions, and luxury spa in Noida & NCR. 24/7 WhatsApp booking.`;

  useEffect(() => {
    // ── Title ─────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper ────────────────────────────────────────────────
    const setMeta = (name: string, content: string, attr: string = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard SEO ──────────────────────────────────────────
    setMeta('description', fullDesc);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1');
    setLink('canonical', canonical);

    // ── Open Graph ────────────────────────────────────────────
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', fullDesc, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:site_name', BRAND.name, 'property');
    setMeta('og:locale', 'en_IN', 'property');

    // ── Twitter Card ──────────────────────────────────────────
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', fullDesc);
    setMeta('twitter:image', image);

    // ── Breadcrumb Schema ─────────────────────────────────────
    const removeSchema = (id: string) => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    };

    if (breadcrumbs && breadcrumbs.length > 0) {
      removeSchema('seo-breadcrumb-schema');
      const bcList = [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BRAND.domain}/` },
        ...breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: b.name,
          item: b.url,
        })),
      ];
      const bcSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: bcList,
      };
      const script = document.createElement('script');
      script.id = 'seo-breadcrumb-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(bcSchema);
      document.head.appendChild(script);
    }

    // ── Custom Schema ─────────────────────────────────────────
    if (schema) {
      removeSchema('seo-page-schema');
      const schemaData = Array.isArray(schema) ? schema : [schema];
      const script = document.createElement('script');
      script.id = 'seo-page-schema';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': schemaData,
      });
      document.head.appendChild(script);
    }
  }, [fullTitle, fullDesc, canonical, image, type, schema, breadcrumbs, keywords, noIndex]);

  return (
    <>
      <SchemaReviewMarkup />
      <GeoSeoEngine />
    </>
  );
};

export default SEO;
