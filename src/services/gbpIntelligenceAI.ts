export interface GbpReviewItem {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  autoReplyGenerated: string;
}

/**
 * 9. Google Business Profile (GBP) AI Engine
 * Generates SEO-optimized personalized review replies for Google Maps reviews.
 */
export const generateGbpReviewReplies = (): GbpReviewItem[] => {
  return [
    {
      id: 'gbp-1',
      reviewerName: 'Vikram Singh',
      rating: 5,
      comment: 'Best Thai massage in Jaipur! Very clean private suites and professional therapists near Sindhi Camp.',
      date: '2026-07-25',
      autoReplyGenerated: 'Thank you Vikram for your 5-star review! We are delighted you enjoyed our authentic Thai massage and sanitized private suites at Jaipur Spa near Sindhi Camp, Jaipur. Looking forward to welcoming you back!',
    },
    {
      id: 'gbp-2',
      reviewerName: 'Neha Sharma',
      rating: 5,
      comment: 'Wonderful couple spa experience. Soundproof room, soothing aroma oils, and delicious herbal tea.',
      date: '2026-07-26',
      autoReplyGenerated: 'Thank you Neha for your wonderful feedback! We take pride in offering Jaipur’s premier luxury couple spa package with soundproof private suites and organic aromatherapy. We hope to see you again soon at Jaipur Spa!',
    },
  ];
};
