import React from 'react';
import { LucideIcon } from 'lucide-react';

// ── Basic UI Types ───────────────────────────────────────────
export interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

// ── Review Stats ─────────────────────────────────────────────
export interface ReviewStats {
  googleRating: number;
  googleMax: number;
  trustRating: number;
  trustMax: number;
  trustReviewCount: number;
}

// ── Service & Page IDs ────────────────────────────────────────
export type PageId =
  | 'home'
  | 'contact'
  | 'legal'
  | 'privacy'
  | 'terms'
  | 'refund'
  | 'faq'
  | 'about'
  // Escort Services
  | 'vip-hotel-outcall'
  | 'private-incall'
  | 'russian-escorts'
  | 'dinner-dates'
  | 'celebrity-models'
  | 'full-night-stay'
  // Spa / Legacy Services (kept for backward-compatible routing)
  | 'thai-massage'
  | 'swedish-massage'
  | 'deep-tissue-massage'
  | 'aroma-therapy'
  | 'balinese-massage'
  | 'couple-massage'
  | 'body-scrub'
  | 'full-body-massage'
  | 'steam-bath'
  // Noida Location Pages
  | 'sector-18'
  | 'sector-62'
  | 'sector-50'
  | 'sector-137'
  | 'sector-18-film-city'
  | 'sector-76-78'
  | 'sector-128'
  | 'sector-142'
  | 'pari-chowk'
  | 'noida-extension'
  | (string & {});

// ── Content Page Data ─────────────────────────────────────────
export interface GuideSection {
  title: string;
  content: string;
  icon?: LucideIcon;
  image?: string;
  listItems?: string[];
  subSections?: undefined;
  sectionNumber?: undefined;
}

export interface LegalSection {
  title: string;
  content: string | string[];
  icon?: LucideIcon;
  sectionNumber?: string;
  subSections?: { title: string; content: string }[];
  listItems?: undefined;
  image?: undefined;
}

export interface PageData {
  id: PageId;
  title: string;
  subtitle?: string;
  type: 'guide' | 'legal' | 'contact';
  heroGradient?: string;
  heroImage?: string;
  sections: (GuideSection | LegalSection)[];
}

// ── Spa-Specific Types ────────────────────────────────────────
export interface SpaService {
  id: string;
  title: string;
  slug: string;
  heroTitle: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  benefits: string[];
  techniques: string[];
  duration: { time: string; price: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
  keywords: string[];
}

export interface LocationPage {
  area: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  intro: string;
  distance: string;
  landmark: string;
  directions: string;
  nearbyLandmarks: string[];
  services: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tag: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image?: string;
  relatedPosts: string[];
  keywords: string[];
  scheduledPublishTime?: string;
  author?: string;
  primaryKeyword?: string;
}

export interface BacklinkRecord {
  id: string;
  domain: string;
  domainAuthority: number;
  anchorText: string;
  targetUrl: string;
  targetPage: string;
  category: 'Directory' | 'Guest Citation' | 'Web 2.0' | 'City Portal' | 'Forum Profile' | 'Review Hub';
  publishTime: string;
  dateDisplay: string;
  status: 'Live' | 'Indexed' | 'Scheduled';
  contextSnippet: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}