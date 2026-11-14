export interface LiveQA {
  id: string;
  question: string;
  answer: string;
  date: string;
}

const STORAGE_KEY = 'purebliss_live_qa';

export const getLiveQAs = (): LiveQA[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('[LiveQA] Error reading from localStorage', error);
    return [];
  }
};

export const saveLiveQA = (qa: Omit<LiveQA, 'id' | 'date'>): LiveQA => {
  const existing = getLiveQAs();
  
  // Prevent duplicate questions to keep SEO clean
  if (existing.some(q => q.question.toLowerCase() === qa.question.toLowerCase())) {
    return existing.find(q => q.question.toLowerCase() === qa.question.toLowerCase()) as LiveQA;
  }

  const newQA: LiveQA = {
    ...qa,
    id: `qa_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    date: new Date().toISOString(),
  };

  const updated = [newQA, ...existing].slice(0, 50); // Keep latest 50 questions
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('[LiveQA] Error saving to localStorage', error);
  }
  
  return newQA;
};

// Seed with some initial realistic local queries for immediate SEO benefit
export const seedInitialQAs = () => {
  if (getLiveQAs().length === 0) {
    const initial: Omit<LiveQA, 'id' | 'date'>[] = [
      {
        question: "Is there any couple massage available near Sector 18 Noida right now?",
        answer: "Yes! We are open 24/7. Our premium couple massage suites are fully sanitized and available near Sector 18, Noida. You can book instantly via WhatsApp."
      },
      {
        question: "What is the price for a 60 min Deep Tissue massage?",
        answer: "Our 60-minute Deep Tissue Massage is priced at ₹1199. It focuses on releasing chronic muscle tension and is highly recommended for travelers."
      },
      {
        question: "Do you have female therapists for female clients?",
        answer: "Absolutely. We ensure complete comfort and privacy with professional female therapists available for our female guests."
      }
    ];
    
    initial.forEach(saveLiveQA);
  }
};
