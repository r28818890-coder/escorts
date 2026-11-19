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
        question: "Are verified hotel outcall escorts available near Sector 18 Noida right now?",
        answer: "Yes! We operate 24/7 across Noida & NCR. Verified independent models and VIP companions are active near Sector 18, DLF Mall, and Noida Expressway. You can confirm availability instantly via WhatsApp."
      },
      {
        question: "How fast do companions arrive for 5-star hotel visits?",
        answer: "Doorstep arrival is typically 20 to 30 minutes across Sector 18, Sector 62, Advant Navis Expressway, and Greater Noida Pari Chowk. Zero advance payment is required."
      },
      {
        question: "What verification process do profiles go through?",
        answer: "Every companion profile is 100% photo-verified with direct phone authentication. You meet your chosen companion face-to-face in the privacy of your hotel suite."
      }
    ];
    
    initial.forEach(saveLiveQA);
  }
};
