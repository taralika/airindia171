import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://airindia171.org';
  return [
    { url: `${base}/`,           lastModified: new Date() },
    { url: `${base}/passengers`, lastModified: new Date() },
    { url: `${base}/resources`,  lastModified: new Date() },
  ];
}
