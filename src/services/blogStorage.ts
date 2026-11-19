/**
 * blogStorage.ts
 * Permanent localStorage-based blog CMS for Escorts Hub Noida.
 * Blogs saved here persist across page reloads.
 */

import { BlogPost } from '@/types';

const STORAGE_KEY = 'purebliss_blog_posts';
const LAST_BLOG_DATE_KEY = 'purebliss_last_blog_date';

/** Save a new blog post to localStorage */
export const saveBlogToStorage = (post: BlogPost): void => {
  try {
    const existing = getStoredBlogs();
    // Avoid duplicates by slug
    const alreadyExists = existing.some(p => p.slug === post.slug);
    if (!alreadyExists) {
      const updated = [post, ...existing];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    }
  } catch {
    // localStorage might be unavailable in some environments
  }
};

/** Get all blogs saved in localStorage */
export const getStoredBlogs = (): BlogPost[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return [];
  }
};

/** Check if today's blog has already been published */
export const hasTodaysBlogBeenPublished = (): boolean => {
  try {
    const lastDate = localStorage.getItem(LAST_BLOG_DATE_KEY);
    const today = new Date().toISOString().split('T')[0];
    return lastDate === today;
  } catch {
    return false;
  }
};

/** Mark today as published */
export const markTodayAsPublished = (): void => {
  try {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(LAST_BLOG_DATE_KEY, today);
  } catch {
    // ignore
  }
};

/** Get how many days the auto-blog has been running */
export const getBlogDayCount = (): number => {
  try {
    const stored = getStoredBlogs();
    return stored.length;
  } catch {
    return 0;
  }
};
