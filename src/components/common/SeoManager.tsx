import React, { useEffect } from 'react';

interface SeoManagerProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}

export const SeoManager: React.FC<SeoManagerProps> = ({
  title,
  description = 'OpportunityX is a modern career-tech ecosystem empowering ambitious students, developers, and young professionals to discover career-defining opportunities, build real-world products, and validate skills.',
  canonicalPath,
  ogType = 'website',
  publishedTime,
  author,
}) => {
  const HOMEPAGE_TITLE = 'OpportunityX — Student & Builder Ecosystem';

  let fullTitle: string;
  if (
    !title ||
    title === 'Student & Builder Ecosystem' ||
    title === 'The Unified Student & Builder Ecosystem' ||
    title === HOMEPAGE_TITLE
  ) {
    fullTitle = HOMEPAGE_TITLE;
  } else if (title.startsWith('OpportunityX — ')) {
    fullTitle = title;
  } else {
    fullTitle = `OpportunityX — ${title}`;
  }

  const siteUrl = 'https://opportunityx.co.in';
  const fullCanonical = canonicalPath
    ? `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
    : siteUrl;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Set Standard Meta Tags
    setMetaTag('description', description);
    setLinkTag('canonical', fullCanonical);

    // 3. Set Open Graph Tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', fullCanonical, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:site_name', 'OpportunityX', true);

    // 4. Set Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);

    // 5. Article-Specific Tags
    if (ogType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (author) {
        setMetaTag('article:author', author, true);
      }
    }
  }, [fullTitle, description, fullCanonical, ogType, publishedTime, author]);

  return null;
};
