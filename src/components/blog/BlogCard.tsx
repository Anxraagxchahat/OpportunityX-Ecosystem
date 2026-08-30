import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight } from 'lucide-react';
import { BlogPost } from '@/data/blogData';

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, className = '' }) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-subtle ${className}`}
    >
      <div>
        {/* Category & Reading Time Header */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="type-caption inline-flex items-center rounded-md bg-surface-elevated px-2.5 py-1 text-xs font-semibold text-accent-brand border border-border-subtle">
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="type-h3 text-text-primary group-hover:text-accent-brand text-lg font-semibold tracking-tight transition-colors line-clamp-2 mb-2">
          <Link
            to={`/blogs/${post.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-sm before:absolute before:inset-0"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="type-body text-text-secondary text-sm line-clamp-3 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
      </div>

      {/* Footer / Author & Date */}
      <div className="flex items-center justify-between border-t border-border-subtle pt-4 text-xs text-text-muted">
        <div className="flex flex-col">
          <span className="font-medium text-text-primary">{post.author.name}</span>
          <span className="flex items-center gap-1 text-[11px] text-text-muted mt-0.5">
            <Calendar className="h-3 w-3" aria-hidden="true" />
            {formattedDate}
          </span>
        </div>

        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-text-muted transition-colors group-hover:bg-accent-subtle group-hover:text-accent-brand">
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );
};
