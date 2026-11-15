import React, { useState, useEffect } from 'react';
import { ShieldCheck, Flame, Clock, CheckCircle } from 'lucide-react';

interface ActivityItem {
  type: 'booking' | 'new_ad' | 'viewers';
  title: string;
  subtitle: string;
  timeAgo: string;
  locality: string;
}

const ACTIVITIES: ActivityItem[] = [
  {
    type: 'booking',
    title: 'Verified Booking',
    subtitle: 'Hotel Outcall Confirmed',
    timeAgo: '2m ago',
    locality: 'Sector 18 Noida',
  },
  {
    type: 'new_ad',
    title: 'New VIP Profile',
    subtitle: '100% Photo Verified',
    timeAgo: '4m ago',
    locality: 'Sector 62 Noida',
  },
  {
    type: 'viewers',
    title: 'High Activity',
    subtitle: '24 clients exploring',
    timeAgo: 'Live',
    locality: 'Sector 50 Noida',
  },
  {
    type: 'booking',
    title: 'VIP Companion Booked',
    subtitle: 'Doorstep Outcall Ready',
    timeAgo: '6m ago',
    locality: 'Sector 137 Noida',
  },
  {
    type: 'new_ad',
    title: 'VIP Model Added',
    subtitle: 'Direct WhatsApp Booking',
    timeAgo: '8m ago',
    locality: 'Pari Chowk Greater Noida',
  },
  {
    type: 'viewers',
    title: 'Trending Area',
    subtitle: '18 active inquiries',
    timeAgo: 'Live',
    locality: 'Indirapuram NCR',
  },
];

export const LiveActivityToast: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const interval = setInterval(() => {
      setIsVisible(true);
      setCurrentIndex((prev) => (prev + 1) % ACTIVITIES.length);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4500);

      return () => clearTimeout(hideTimer);
    }, 12000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  const current = ACTIVITIES[currentIndex];

  return (
    <div className="fixed bottom-5 left-4 z-40 max-w-[210px] animate-fade-in pointer-events-none select-none">
      <div className="bg-slate-950/90 backdrop-blur-md border border-rose-500/30 rounded-xl p-2 shadow-md flex items-center gap-2 text-white">
        {/* Compact Mini Icon */}
        <div className="w-6 h-6 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
          {current.type === 'booking' && <CheckCircle size={12} />}
          {current.type === 'new_ad' && <ShieldCheck size={12} />}
          {current.type === 'viewers' && <Flame size={12} />}
        </div>

        {/* Compact Content */}
        <div className="flex-1 min-w-0 leading-tight">
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-black text-white truncate">
              {current.title}
            </span>
            <span className="text-[8px] text-rose-400 font-bold shrink-0">
              {current.timeAgo}
            </span>
          </div>
          <p className="text-[9px] text-slate-300 truncate">
            {current.subtitle} • <span className="text-rose-300 font-semibold">{current.locality}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveActivityToast;
