/**
 * dailyBlogScheduler.ts
 * Daily companion blog scheduler for Escorts Hub Noida.
 * Single source of truth powered by @/data/scheduledBlogs.
 */

import { BlogPost } from '@/types';
import { saveBlogToStorage, hasTodaysBlogBeenPublished, markTodayAsPublished, getBlogDayCount } from '@/services/blogStorage';
import { generateAndSaveBlogWithGemini } from '@/services/geminiAI';
import { SCHEDULED_BLOGS } from '@/data/scheduledBlogs';

export { SCHEDULED_BLOGS };

const today = () => {
  return new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const runDailyBlogScheduler = async (): Promise<BlogPost | null> => {
  if (hasTodaysBlogBeenPublished()) return null;

  const dayIndex = getBlogDayCount();

  if (dayIndex < SCHEDULED_BLOGS.length) {
    const template = SCHEDULED_BLOGS[dayIndex];
    const newPost: BlogPost = {
      ...template,
      id: `auto-${template.slug}`,
      date: today(),
    };
    saveBlogToStorage(newPost);
    markTodayAsPublished();
    console.log('[Scheduler] Blog published (Day', dayIndex + 1, '):', newPost.title);
    return newPost;
  }

  try {
    const geminiPost = await generateAndSaveBlogWithGemini(dayIndex);
    if (geminiPost) {
      markTodayAsPublished();
      console.log('[Scheduler] AI blog published (Day', dayIndex + 1, '):', geminiPost.title);
      return geminiPost;
    }
  } catch {
    console.warn('[Scheduler] AI generation unavailable today. Will retry tomorrow.');
  }

  return null;
};
