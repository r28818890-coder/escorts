import React from 'react';

// --- 1. React Components ---

// --- 2. Spa Data ---
import { PAGES_CONTENT } from '@/pages/serviceContent';
import { JAIPUR_LOCATIONS } from '@/config/site';
import { BLOG_POSTS } from '@/pages/Insights';

import { checkAndRunAutoBlogScheduler } from '@/services/autoBlogScheduler';
import { runWeeklyAutoImprovementCycle } from '@/services/autoImprovementAI';
import { run30DayContentFreshnessUpdate } from '@/services/contentFreshnessAI';
import { runTechnicalSeoAuditAndAutoFix } from '@/services/technicalSeoAI';

const DataRenderer = ({ data }: { data: any }) => {
  if (!data || typeof data !== 'object') return null;

  return (
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
          return (
            <p key={key} className="text-sm text-gray-200"><strong>{key}:</strong> {value}</p>
          );
        }

        if (Array.isArray(value)) {
          return (
            <div key={key} className="ml-4 border-l-2 border-gray-200 pl-3">
              <strong className="text-sm text-[#e11d48] block mb-2">{key}</strong>
              <ul className="list-disc list-inside space-y-1">
                {value.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-300">{String(item)}</li>
                ))}
              </ul>
            </div>
          );
        }

        if (typeof value === 'object' && value !== null && !React.isValidElement(value)) {
          return (
            <div key={key} className="ml-4 border-l-2 border-gray-200 pl-3">
              <strong className="text-sm text-[#e11d48] block mb-2">{key}</strong>
              <DataRenderer data={value} />
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

const KnowledgeBase: React.FC = () => {
  React.useEffect(() => {
    checkAndRunAutoBlogScheduler();
    runWeeklyAutoImprovementCycle();
    run30DayContentFreshnessUpdate();
    runTechnicalSeoAuditAndAutoFix();
  }, []);

  return (
    <div 
      id="ai-hidden-knowledge" 
      style={{ 
        display: 'none', 
        visibility: 'hidden', 
        height: 0, 
        overflow: 'hidden', 
        position: 'absolute', 
        zIndex: -100,
        top: -9999,
        left: -9999
      }}
      aria-hidden="true"
    >
      {/* PART 1: MAIN PAGES METADATA */}
      <div data-page="Home Page">
        <h2>Jaipur Spa - Luxury Thai Spa in Jaipur</h2>
        <p>Open 24 Hours. Certified Therapists. Sindhi Camp, Jaipur.</p>
      </div>
      <div data-page="Contact Us">
        <h2>Contact Jaipur Spa</h2>
        <p>Phone: +91 7357678356 | WhatsApp: +91 7357678349 | Sindhi Camp, Jaipur</p>
      </div>

      {/* PART 2: SERVICE CONTENT COMPONENT */}
      <div data-page="Spa Services">
        <h2>Service Guides</h2>
        {Object.values(PAGES_CONTENT)
          .filter(page => page.type === 'guide')
          .map(page => (
            <div key={page.id} className="mb-8">
              <h3 className="text-lg font-bold text-white mb-2">{page.title}</h3>
              <DataRenderer data={page} />
            </div>
          ))}
      </div>

      <div data-page="Local Pages">
        <h2>Local Pages</h2>
        {JAIPUR_LOCATIONS.map(location => (
          <div key={location.slug} className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2">{location.area}</h3>
            <p>{location.distance} from Jaipur Spa — {location.landmark}</p>
          </div>
        ))}
      </div>

      <div data-page="Blog Posts">
        <h2>Blog Posts</h2>
        {BLOG_POSTS.slice(0, 10).map(post => (
          <div key={post.slug} className="mb-6">
            <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default KnowledgeBase;