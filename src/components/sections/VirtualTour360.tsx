import React, { useState, useRef, useEffect } from 'react';
import { Compass, RotateCw, ZoomIn, ZoomOut, Maximize2, Sparkles, ShieldCheck, Waves, BedDouble, Droplets, Info } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage position
  y: number;
  title: string;
  description: string;
}

interface RoomTourData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  bgUrl: string;
  badge: string;
  hotspots: Hotspot[];
}

const ROOM_TOURS: RoomTourData[] = [
  {
    id: 'therapy-suite',
    title: 'Luxury 5-Star Hotel Suite',
    subtitle: 'Private sanitized executive suites with ambient lighting for discreet hotel meetings',
    icon: <BedDouble className="w-4 h-4 text-rose-400" />,
    bgUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80',
    badge: '100% Verified Private Suites',
    hotspots: [
      {
        id: 'h1',
        x: 35,
        y: 45,
        title: 'Executive Suite Bedroom',
        description: 'Sanitized luxury bedding in 5-star Jaipur hotels with complete privacy.',
      },
      {
        id: 'h2',
        x: 65,
        y: 35,
        title: 'Relaxation & Lounge Ambiance',
        description: 'Quiet, peaceful, and discreet atmosphere for executive client meetings.',
      },
      {
        id: 'h3',
        x: 50,
        y: 70,
        title: 'Ambient Mood Setup',
        description: 'Soft warm illumination ensuring total relaxation and comfort.',
      },
    ],
  },
  {
    id: 'steam-shower',
    title: 'Private Resort Suite Setup',
    subtitle: 'Luxury resort and private villa outcall accommodations across Jaipur',
    icon: <Droplets className="w-4 h-4 text-indigo-400" />,
    bgUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80',
    badge: 'Discreet Outcall Setup',
    hotspots: [
      {
        id: 'h4',
        x: 40,
        y: 50,
        title: 'Private Bathroom Setup',
        description: 'Hot hydro showers and fresh clean towels.',
      },
      {
        id: 'h5',
        x: 60,
        y: 40,
        title: 'Private Balcony & Views',
        description: 'Private serene views across luxury resort destinations in Jaipur.',
      },
    ],
  },
];

export const VirtualTour360: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState<string>(ROOM_TOURS[0].id);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [rotationX, setRotationX] = useState<number>(50);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeRoom = ROOM_TOURS.find((r) => r.id === activeRoomId) || ROOM_TOURS[0];

  // Auto rotation loop
  useEffect(() => {
    if (!autoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotationX((prev) => (prev >= 100 ? 0 : prev + 0.15));
    }, 40);
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Touch and Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setStartX(e.clientX);
    setRotationX((prev) => {
      let next = prev - delta * 0.15;
      if (next < 0) next = 100;
      if (next > 100) next = 0;
      return next;
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const toggleFullscreen = () => {
    if (containerRef.current) {
      if (!document.fullscreenElement) {
        containerRef.current.requestFullscreen().catch((err) => console.error(err));
      } else {
        document.exitFullscreen().catch((err) => console.error(err));
      }
    }
  };

  return (
    <section className="py-8 md:py-16 px-2.5 md:px-4 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] md:text-xs font-semibold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" /> 360° Visual Ambiance
          </div>
          <h2 className="text-xl md:text-5xl font-black text-white tracking-tight">
            Explore VIP Accommodations
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mt-1 text-xs md:text-sm">
            Interactive preview of luxury 5-star hotel suites and resort environments in Jaipur.
          </p>
        </div>

        {/* Room Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4 md:mb-6">
          {ROOM_TOURS.map((room) => {
            const isActive = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setActiveRoomId(room.id);
                  setActiveHotspot(null);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-600 to-indigo-600 text-white shadow-md font-semibold scale-105'
                    : 'bg-slate-900 text-slate-300 border border-slate-800'
                }`}
              >
                {room.icon}
                <span>{room.title}</span>
              </button>
            );
          })}
        </div>

        {/* 360 View Container */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="relative h-[260px] md:h-[450px] w-full rounded-xl md:rounded-3xl overflow-hidden border border-rose-500/40 shadow-2xl cursor-grab active:cursor-grabbing select-none group"
        >
          {/* Panoramic Background View */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-100 ease-out"
            style={{
              backgroundImage: `url('${activeRoom.bgUrl}')`,
              transform: `scale(${zoomLevel}) translateX(${(rotationX - 50) * 0.4}%)`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          {/* Top Info Badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-rose-500/30 text-rose-300 text-[10px] md:text-xs">
            <Compass className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{activeRoom.badge}</span>
          </div>

          {/* Controls Bar */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-zinc-800 text-slate-300 text-xs">
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`p-1.5 rounded hover:bg-zinc-800 cursor-pointer ${autoRotate ? 'text-rose-400' : ''}`}
              title="Toggle Auto Rotate"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
              className="p-1.5 rounded hover:bg-zinc-800 cursor-pointer"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel((z) => Math.max(1.0, z - 0.1))}
              className="p-1.5 rounded hover:bg-zinc-800 cursor-pointer"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded hover:bg-zinc-800 cursor-pointer"
              title="Fullscreen"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Hotspots */}
          {activeRoom.hotspots.map((spot) => (
            <div
              key={spot.id}
              style={{ top: `${spot.y}%`, left: `${spot.x}%` }}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot);
                }}
                className="relative group/spot flex items-center justify-center cursor-pointer"
              >
                <span className="absolute w-6 h-6 rounded-full bg-rose-400/40 animate-ping" />
                <span className="relative w-4 h-4 rounded-full bg-rose-500 border border-black shadow-lg flex items-center justify-center text-white text-[9px] font-bold">
                  +
                </span>
              </button>
            </div>
          ))}

          {/* Active Hotspot Modal Info Popup */}
          {activeHotspot && (
            <div className="absolute bottom-3 left-3 right-3 md:left-6 md:right-auto md:max-w-xs z-30 bg-slate-900/95 border border-rose-500/50 p-3 rounded-xl shadow-2xl backdrop-blur-md text-white">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="font-bold text-rose-300 text-xs flex items-center gap-1">
                  <Info className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  {activeHotspot.title}
                </h4>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="text-slate-400 hover:text-white text-xs p-0.5 cursor-pointer"
                >
                  ✕
                </button>
              </div>
              <p className="text-slate-300 text-[10px] md:text-xs leading-relaxed">
                {activeHotspot.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VirtualTour360;
