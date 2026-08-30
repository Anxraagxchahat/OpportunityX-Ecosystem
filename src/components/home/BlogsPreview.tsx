import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { getAllBlogs } from '@/data/blogData';
import { EmptyState } from '@/components/common/EmptyState';

export const BlogsPreview: React.FC = () => {
  const blogs = getAllBlogs().slice(0, 3);

  return (
    <section
      id="blogs-preview"
      className="relative w-full border-t border-border-subtle py-16 sm:py-20 lg:py-24 bg-canvas"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>Stay Informed</span>
            </div>
            <h2 className="type-h2 text-text-primary font-bold tracking-tight">
              From the OpportunityX Blog
            </h2>
            <p className="type-body text-text-secondary mt-2 text-sm sm:text-base max-w-xl">
              In-depth technical architecture breakdowns, discovery playbooks, and official ecosystem releases.
            </p>
          </div>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-brand hover:text-accent-hover transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-md"
          >
            <span>View all articles</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* 3-Card Grid or Empty State */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="New editorial articles are on the way"
            description="Our engineering and community teams are preparing in-depth guides and architecture breakdowns."
            action={
              <Link
                to="/notifications"
                className="inline-flex items-center gap-2 rounded-lg bg-surface-elevated border border-border-subtle px-4 py-2 text-xs font-medium text-text-primary hover:bg-surface-hover transition-colors"
              >
                Check Platform Notifications
              </Link>
            }
          />
        )}
      </Container>
    </section>
  );
};
