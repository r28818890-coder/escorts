import { StateStats } from '../types';

// More corporate/business statuses
const STATUSES = ['Market Leader', 'Emerging Market', 'Stable', 'High Potential'] as const;

// Generate consistent random numbers based on state name hash
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

export const generateStateData = (stateName: string): StateStats => {
  const hash = hashString(stateName);
  
  // Generate consistent random numbers between 1-20
  const clients = (hash % 20) + 1;
  const projects = ((hash * 7) % 20) + 1;
  const growth = ((hash * 13) % 20) + 1; // 1-20%
  
  const status = STATUSES[hash % STATUSES.length];

  return {
    id: stateName,
    name: stateName,
    activeClients: clients,
    status,
    clients: `${clients}`,
    projects: `${projects}`,
    growth: `${growth}%`,
  };
};

export const MOCK_STATS = [
  { label: "Enterprise Clients", value: "5,000+" },
  { label: "Service Verticals", value: "24" },
  { label: "Regional Hubs", value: "120+" },
];

