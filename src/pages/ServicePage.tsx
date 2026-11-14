import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES } from '@/services/pureblissBrain';
import SEO from '@/components/common/SEO';
import { ArrowLeft, Clock, Info, Heart, ShieldCheck, MessageCircle } from 'lucide-react';
import { BRAND, CONTACT } from '@/config/site';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = SERVICES.find(s => s.slug === slug);
    if (found) {
      setService(found);
    }
  }, [slug]);

  if (!slug) return <Navigate to="/" />;
  
  if (service === null) {
    const found = SERVICES.find(s => s.slug === slug);
    if (!found) {
      return <Navigate to="/call-girls" />;
    }
  }

  if (!service) return null;

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0f172a] pt-12 pb-20">
      <SEO 
        title={`${service.name} in Jaipur | Verified Companions | ${BRAND.name}`}
        description={`Explore verified ${service.name.toLowerCase()} listings in Jaipur with ${BRAND.name}. 100% genuine photos, 24/7 hotel outcall visits.`}
        keywords={service.keywords.join(', ')}
        schema={{
          '@type': 'Service',
          'name': service.name,
          'description': service.description,
          'provider': {
            '@type': 'LocalBusiness',
            'name': BRAND.name
          },
        }}
        breadcrumbs={[
          { name: 'Home', url: `${BRAND.domain}/` },
          { name: service.name, url: `${BRAND.domain}/services/${service.slug}` }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8 font-bold text-xs uppercase tracking-wider transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          Back to Directory
        </Link>

        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-rose-900 border border-rose-300 bg-rose-50 px-4 py-1.5 rounded-full mb-6">
              Verified Category
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
              {service.name} <span className="block text-rose-600">in Jaipur</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 border-l-4 border-rose-600 pl-6">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="text-rose-600" size={20} />
                  <h3 className="text-base font-black text-slate-900">Key Features</h3>
                </div>
                <ul className="space-y-2">
                  {service.best_for.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <span className="text-rose-600 mr-2 font-bold">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-rose-600" size={20} />
                  <h3 className="text-base font-black text-slate-900">Meeting Options</h3>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">Short Date</span>
                    <span className="font-bold text-rose-600">1 - 2 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-600">Half Night</span>
                    <span className="font-bold text-rose-600">4 - 5 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-600">Full Night VIP</span>
                    <span className="font-bold text-rose-600">Overnight</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                  <Info className="text-rose-600" size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Booking Format</h4>
                  <p className="text-xs text-slate-600">{service.technique}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-rose-600" size={20} />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm mb-0.5">Verification Guarantee</h4>
                  <p className="text-xs text-slate-600">100% Genuine photo verified profiles with zero advance deposit policy.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-100 text-center">
              <p className="text-xs text-slate-500 mb-4">24/7 Hotel Outcall • Doorstep Arrival in Jaipur</p>
              <a 
                href={CONTACT.whatsapp1Href + '?text=' + encodeURIComponent(`Hello Escorts Hub Jaipur, I want to inquire about ${service.name} companion in Jaipur.`)}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-600 via-rose-700 to-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-transform shadow-md gap-2 cursor-pointer"
              >
                <MessageCircle size={16} /> Book {service.name} on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
