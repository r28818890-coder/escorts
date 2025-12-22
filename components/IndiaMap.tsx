import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';
import { GeoJsonCollection, GeoJsonFeature, StateStats, ReviewStats } from '../types';
import { generateStateData } from '../utils/mockData';
import Tooltip from './Tooltip';
import ReviewWidget from './ReviewWidget';

// URL for India GeoJSON
const INDIA_GEOJSON_URL = 'https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson';

const insightCards = [
  { title: 'Customer Retention', value: '92%', desc: 'Multi-year advisory retainers' },
  { title: 'Average Go-Live', value: '45 days', desc: 'From onboarding to execution' },
  { title: 'Net Promoter', value: '68', desc: 'Referral-first growth flywheel' },
];

const reviewStats: ReviewStats = {
  googleRating: 4.5,
  googleMax: 5,
  trustRating: 4.8,
  trustMax: 5,
  trustReviewCount: 27,
};

const IndiaMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [geoData, setGeoData] = useState<GeoJsonCollection | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Auto-rotation state
  const [activeStateIndex, setActiveStateIndex] = useState(0);
  const [activeStateName, setActiveStateName] = useState<string | null>(null);

  const WIDTH = 800;
  const HEIGHT = 700;

  // Cache state data and list
  const stateDataMap = useMemo(() => {
    const map = new Map<string, StateStats>();
    if (geoData) {
      geoData.features.forEach(feature => {
        const name = feature.properties.NAME_1 || feature.properties.name || "Unknown";
        map.set(name, generateStateData(name));
      });
    }
    return map;
  }, [geoData]);

  const stateNames = useMemo(() => {
    if (!geoData) return [];
    return geoData.features.map(feature => 
      feature.properties.NAME_1 || feature.properties.name || "Unknown"
    ).filter(Boolean);
  }, [geoData]);

  // Load Data
  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const data = await d3.json(INDIA_GEOJSON_URL) as GeoJsonCollection;
        setGeoData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load GeoJSON:", error);
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  // Auto-rotation effect - optimized for performance
  useEffect(() => {
    if (stateNames.length === 0) return;

    // Set initial state
    if (stateNames.length > 0 && !activeStateName) {
      setActiveStateName(stateNames[0]);
      setActiveStateIndex(0);
    }

    const interval = setInterval(() => {
      setActiveStateIndex((prev) => {
        const next = (prev + 1) % stateNames.length;
        setActiveStateName(stateNames[next]);
        return next;
      });
    }, 3000); // Change state every 3 seconds

    return () => clearInterval(interval);
  }, [stateNames]);

  // Initial Map Render (Geometry) - Only once
  useEffect(() => {
    if (!geoData || !svgRef.current) return;

    const svg = d3.select(svgRef.current);
    
    // Define projection
    const projection = d3.geoMercator();
    projection.fitSize([WIDTH, HEIGHT], geoData as any);
    
    const pathGenerator = d3.geoPath().projection(projection);

    // Bind data
    let g = svg.select<SVGGElement>(".map-group");
    if (g.empty()) {
      g = svg.append("g").attr("class", "map-group");
    }

    // Draw paths if they don't exist
    const paths = g.selectAll<SVGPathElement, GeoJsonFeature>("path")
      .data(geoData.features, (d) => d.properties.NAME_1 || d.properties.name);

    paths.enter()
      .append("path")
      .attr("d", (d) => pathGenerator(d as any) || "")
      .attr("class", "state-path") 
      .attr("fill", "#f0fdfa") // Light teal background
      .attr("stroke", "#14b8a6") // Teal stroke
      .attr("stroke-width", "1")
      .style("transition", "all 0.6s ease-out");

  }, [geoData]);

  // Update map highlighting based on active state - optimized
  useEffect(() => {
    if (!geoData || !svgRef.current || !activeStateName) return;

    // Use requestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
      const svg = d3.select(svgRef.current);
      if (!svg.node()) return;
      
      const paths = svg.selectAll<SVGPathElement, GeoJsonFeature>(".state-path");

      paths.each(function(d) {
        const name = d.properties.NAME_1 || d.properties.name;
        const isActive = name === activeStateName;
        
        d3.select(this)
          .attr("fill", isActive ? "#ccfbf1" : "#f0fdfa")
          .attr("stroke", isActive ? "#0d9488" : "#14b8a6")
          .attr("stroke-width", isActive ? "2.5" : "1");
      });
    });
  }, [activeStateName, geoData]);

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Map Visuals */}
        <div className="w-full lg:w-1/2 relative rounded-[32px] border border-[rgba(30,60,50,0.08)] p-4 lg:p-8 cursor-default overflow-hidden min-h-[520px] flex items-center justify-center bg-white"
          style={{
            background: 'linear-gradient(180deg, #f8ffff 0%, #f3fbfa 40%, #eef9f5 100%)',
            boxShadow: '0 20px 80px rgba(10,20,30,0.12)',
            contain: 'layout style paint'
          }}
        >
          <div className="absolute top-4 left-4 sm:top-5 sm:left-6 z-10 pointer-events-none">
            <div className="bg-white/85 backdrop-blur-md px-3 py-2 rounded-full shadow-sm border border-teal-50">
              <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-teal-800 font-semibold leading-tight">LIVE DATA</p>
              <p className="text-base sm:text-lg font-black text-teal-900 leading-tight">INDIA OPERATIONS</p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
              <span className="text-teal-600 font-semibold tracking-[0.2em] text-sm">Loading Map...</span>
            </div>
          )}

          {/* D3 SVG Map */}
          {!loading && (
            <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
              <svg 
                ref={svgRef}
                className="w-full h-full max-w-[1000px] max-h-[800px] block"
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
                style={{ 
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <g className="map-group" />
              </svg>
            </div>
          )}

          {/* Tooltip - Shows active state info */}
          {activeStateName && (() => {
            const stateData = stateDataMap.get(activeStateName);
            if (!stateData) return null;
            return (
              <div 
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-teal-100 p-4 min-w-[200px] max-w-[280px] transition-opacity duration-500"
                style={{ willChange: 'opacity', transform: 'translateZ(0)' }}
              >
                <h4 className="font-bold text-teal-900 text-lg mb-2">{activeStateName}</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-600"><span className="font-semibold">Clients:</span> {stateData.clients}</p>
                  <p className="text-gray-600"><span className="font-semibold">Projects:</span> {stateData.projects}</p>
                  <p className="text-gray-600"><span className="font-semibold">Growth:</span> {stateData.growth}</p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Content Side */}
        <div className="w-full lg:w-5/12">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold mb-4 tracking-[0.4em] uppercase">
              PAN INDIA PRESENCE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-[1.05]">
              We keep <span className="font-black">current customers</span> delighted across India with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-400 italic px-2">full-stack consultancy</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Customer pods in each state are run by in-market strategists, legal experts, and digital growth leads working from the same playbook. Every engagement is measured live so you always know where your growth runway stands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={() => {
                  const phoneNumber = '919660030903';
                  const message = encodeURIComponent('Hello, I would like to book a customer walkthrough.');
                  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                }}
                className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-[0_20px_60px_rgba(15,118,110,0.35)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
              >
                Book Customer Walkthrough
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-1">Live CSAT</p>
                <p className="text-3xl font-black text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-500">Based on 840 active retainers</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {insightCards.map((card) => (
                <div key={card.title} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-lg">
                  <p className="text-[11px] tracking-[0.4em] uppercase text-gray-400 mb-2">{card.title}</p>
                  <p className="text-3xl font-black text-gray-900">{card.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Row Below Map */}
      <div className="mt-10 px-4">
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm px-6 py-4">
          <ReviewWidget stats={reviewStats} />
        </div>
      </div>
    </section>
  );
};

export default IndiaMap;
