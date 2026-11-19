export interface GbpReviewItem {
  id: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  autoReplyGenerated: string;
}

/**
 * 9. Google Business Profile (GBP) & Local Review Intelligence AI Engine
 * Generates SEO-optimized personalized review replies for client reviews.
 */
export const generateGbpReviewReplies = (): GbpReviewItem[] => {
  return [
    {
      id: 'gbp-1',
      reviewerName: 'Vikram Singhania',
      rating: 5,
      comment: 'Fastest hotel outcall service in Sector 18 Noida! She arrived in 20 minutes, 100% matched her photos, and total cash on delivery.',
      date: '2026-11-10',
      autoReplyGenerated: 'Thank you Vikram for your 5-star review! We take immense pride in delivering fast 20-minute hotel doorstep outcalls in Sector 18 Noida with verified real photos and zero advance payment.',
    },
    {
      id: 'gbp-2',
      reviewerName: 'Rohit Verma',
      rating: 5,
      comment: 'Booked an elite Russian companion for a corporate dinner near Sector 62 IT hub. Extremely articulate, polite, and elegant.',
      date: '2026-11-12',
      autoReplyGenerated: 'Thank you Rohit! Our international and VIP Russian companion roster is curated to provide executive-level discretion and charm across Sector 62 and Noida Expressway.',
    },
  ];
};
