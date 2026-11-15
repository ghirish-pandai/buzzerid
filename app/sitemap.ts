import { MetadataRoute } from 'next';
import { allServices } from '@/lib/services';
import { blogPosts } from '@/lib/services';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/ratecard`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${base}/kontak`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = allServices.map((svc) => ({
    url: `${base}/layanan/${svc.platform}/${svc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
