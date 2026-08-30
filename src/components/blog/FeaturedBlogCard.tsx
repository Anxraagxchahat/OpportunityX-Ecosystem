import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface FeaturedBlogCardProps {
  post: BlogPost;
  className?: string;
}

export const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({ post, className = '' }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-surface to-surface-elevated p-6 sm:p-8 lg:p-10 transition-all duration-200 hover:border-border-strong hover:shadow-elevated ${className}`}
    >
      {/* Featured Eyebrow Tag */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold text-accent-brand border border-accent-brand/20">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Featured Editorial
        </span>
        <span className="type-caption text-xs font-semibold text-text-muted">
          {post.category}
        </span>
      </div>

      {/* Main Headline */}
      <h2 className="type-h2 text-text-primary group-hover:text-accent-brand text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 transition-colors">
        <Link
          to={`/blogs/${post.slug}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-sm before:absolute before:inset-0"
        >
          {post.title}
        </Link>
      </h2>

      {/* Excerpt */}
      <p className="type-body-lg text-text-secondary text-base sm:text-lg max-w-3xl mb-8 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta & Tags Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-6">
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted">
          <div>
            <span className="font-semibold text-text-primary">{post.author.name}</span>
            <span className="text-text-muted hidden sm:inline"> • {post.author.role}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Read Article Action */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-brand group-hover:translate-x-1 transition-transform">
          Read Full Article
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};
