import { BlogPost, BacklinkRecord } from '@/types';
import { SCHEDULED_BLOGS } from '@/data/scheduledBlogs';
import { SCHEDULED_BACKLINKS } from '@/data/scheduledBacklinks';

/**
 * ══════════════════════════════════════════════════════════════════════════════
 * AUTOMATED TIME-BASED PUBLISHING ENGINE
 * ══════════════════════════════════════════════════════════════════════════════
 * - 10 Blogs Live Immediately Today (November 15, 2026)
 * - 120 Blogs Scheduled: Auto-released 2x Daily at 6:00 AM & 7:00 PM for 60 Days
 * - 15 Backlinks Auto-released Daily with Verified High-DA Citations
 * - Sorted Descending: 1st Blog is always the newest/latest published article
 * - Zero Public Navigation Button (accessible via deep-links, search engines, and /blog)
 * ══════════════════════════════════════════════════════════════════════════════
 */

export const getLiveBlogs = (referenceTime: Date = new Date()): BlogPost[] => {
  const refMs = referenceTime.getTime();

  return SCHEDULED_BLOGS
    .filter((blog) => {
      if (!blog.scheduledPublishTime) return true;
      const pubMs = new Date(blog.scheduledPublishTime).getTime();
      return pubMs <= refMs;
    })
    .sort((a, b) => {
      const timeA = a.scheduledPublishTime ? new Date(a.scheduledPublishTime).getTime() : 0;
      const timeB = b.scheduledPublishTime ? new Date(b.scheduledPublishTime).getTime() : 0;
      return timeB - timeA; // Latest published blog is strictly first (#1)
    });
};

export const getLiveBlogBySlug = (slug: string, referenceTime: Date = new Date()): BlogPost | undefined => {
  const live = getLiveBlogs(referenceTime);
  const found = live.find((b) => b.slug === slug || b.id === slug);
  if (found) return found;

  // Fallback check against all scheduled in case of direct preview
  return SCHEDULED_BLOGS.find((b) => b.slug === slug || b.id === slug);
};

export const getUpcomingScheduledBlogs = (count = 4, referenceTime: Date = new Date()): BlogPost[] => {
  const refMs = referenceTime.getTime();

  return SCHEDULED_BLOGS
    .filter((blog) => {
      if (!blog.scheduledPublishTime) return false;
      const pubMs = new Date(blog.scheduledPublishTime).getTime();
      return pubMs > refMs;
    })
    .sort((a, b) => {
      const timeA = new Date(a.scheduledPublishTime!).getTime();
      const timeB = new Date(b.scheduledPublishTime!).getTime();
      return timeA - timeB; // Ascending: Next to go live first
    })
    .slice(0, count);
};

export const getLiveBacklinks = (referenceTime: Date = new Date()): BacklinkRecord[] => {
  const refMs = referenceTime.getTime();

  return SCHEDULED_BACKLINKS
    .filter((bl) => {
      const pubMs = new Date(bl.publishTime).getTime();
      return pubMs <= refMs;
    })
    .sort((a, b) => {
      const timeA = new Date(a.publishTime).getTime();
      const timeB = new Date(b.publishTime).getTime();
      return timeB - timeA;
    });
};

export const getBacklinkStats = (referenceTime: Date = new Date()) => {
  const live = getLiveBacklinks(referenceTime);
  const total = SCHEDULED_BACKLINKS.length;
  const avgDa = live.length > 0 
    ? Math.round(live.reduce((acc, curr) => acc + curr.domainAuthority, 0) / live.length) 
    : 72;

  return {
    liveCount: live.length,
    scheduledTotal: total,
    dailyVelocity: 15,
    avgDa,
    lastReleaseDate: live[0]?.dateDisplay || 'November 15, 2026'
  };
};

export const getPublishingMetrics = (referenceTime: Date = new Date()) => {
  const liveBlogs = getLiveBlogs(referenceTime);
  const upcomingBlogs = getUpcomingScheduledBlogs(10, referenceTime);
  const backlinkStats = getBacklinkStats(referenceTime);

  return {
    totalScheduledBlogs: SCHEDULED_BLOGS.length,
    liveBlogsCount: liveBlogs.length,
    upcomingBlogsCount: upcomingBlogs.length,
    nextSlot: upcomingBlogs[0] ? {
      title: upcomingBlogs[0].title,
      scheduledTime: upcomingBlogs[0].scheduledPublishTime,
      slotDate: upcomingBlogs[0].date
    } : null,
    backlinkStats
  };
};
