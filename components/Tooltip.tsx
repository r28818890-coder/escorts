import React from 'react';
import { StateStats } from '../types';

interface TooltipProps {
  x: number;
  y: number;
  data: StateStats | null;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ x, y, data, visible }) => {
  if (!visible || !data) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 p-4 transition-opacity duration-150 ease-out"
      style={{
        left: x + 24, 
        top: y - 24,
        opacity: visible ? 1 : 0,
        minWidth: '220px',
      }}
    >
      {/* Light Glass Container */}
      <div className="relative bg-white/95 backdrop-blur-sm border border-teal-200 shadow-lg rounded-lg p-4">
        
        {/* Light corner accent */}
        <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-teal-400"></div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider border-b border-teal-100 pb-2">
            {data.name}
          </h3>
          
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Active Units</span>
            <span className="text-sm font-bold text-gray-900 font-mono">{data.activeClients.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <span className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Sector</span>
            <span 
              className={`text-[10px] px-2 py-1 font-bold uppercase tracking-wider border rounded ${
                data.status === 'Market Leader' ? 'bg-teal-50 text-teal-700 border-teal-200' :
                data.status === 'Emerging Market' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                'bg-gray-50 text-gray-700 border-gray-200'
              }`}
            >
              {data.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
