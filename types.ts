import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StateData {
  id: string;
  name: string;
  count: number;
  path: string; // SVG Path
}

export enum TabType {
  START_NEW = 'START_NEW',
  MARKET_ME = 'MARKET_ME',
  FUND_ME = 'FUND_ME',
  PROTECT_ME = 'PROTECT_ME',
}

export interface StateStats {
  id: string;
  name: string;
  activeClients: number;
  status: 'Market Leader' | 'Emerging Market' | 'Stable' | 'High Potential';
  clients?: string;
  projects?: string;
  growth?: string;
}

// Minimal GeoJSON types needed for D3
export interface GeoJsonFeature {
  type: "Feature";
  id?: string | number;
  properties: {
    NAME_1?: string; // Common in some India geojsons
    name?: string;   // Common in others
    [key: string]: any;
  };
  geometry: any;
}

export interface GeoJsonCollection {
  type: "FeatureCollection";
  features: GeoJsonFeature[];
}

// -------------------------
// Reviews
// -------------------------
export interface ReviewStats {
  googleRating: number;
  googleMax: number;
  trustRating: number;
  trustMax: number;
  trustReviewCount: number;
}

// -------------------------
// Service & Legal Pages
// -------------------------

export type PageId = 
  | 'home'
  | 'contact'
  | 'tax-exemption' 
  | 'startup-certificate' 
  | 'seed-fund' 
  | 'private-funding' 
  | 'msme-funding' 
  | 'terms' 
  | 'refund'
  // Compliance
  | 'iso-certificate'
  | 'iec-certificate'
  | 'msme-certificate'
  | 'fssai'
  | 'trademark'
  | 'legal-compliance'
  // Funding
  | 'seed-funding-consultancy'
  | 'grant-funds'
  | 'business-loan'
  | 'project-loan'
  | 'cgtmse'
  | 'mudra-loan'
  | 'agricultural-loan'
  | 'cgss'
  // Digital
  | 'digital-marketing'
  | 'website-development'
  | 'logo-design'
  | 'ai-services'
  | 'whatsapp-blue-tick';

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