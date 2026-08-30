import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ChevronRight, Tag } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { ShareButtons } from '@/components/common/ShareButtons';
import { SeoManager } from '@/components/common/SeoManager';
import { ErrorState } from '@/components/common/ErrorState';
import { BlogCard } from '@/components/blog/BlogCard';
import { getBlogBySlug, getRelatedBlogs } from '@/data/blogData';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => {
    return slug ? getBlogBySlug(slug) : undefined;
  }, [slug]);

  const relatedBlogs = useMemo(() => {
    return slug ? getRelatedBlogs(slug, 2) : [];
  }, [slug]);

  // Graceful 404 Not Found State
  if (!post) {
    return (
      <div className="w-full py-16 bg-canvas">
        <SeoManager
          title="Article Not Found"
          description="The requested OpportunityX blog article could not be located."
        />
        <Container>
          <ErrorState
            statusCode={404}
            title="Article Not Found"
            description={`The article with identifier "${slug || ''}" does not exist, is still in draft, or has been relocated.`}
            showHomeButton={false}
            onRetry={() => navigate('/blogs')}
          />
        </Container>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedUpdatedDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <div className="w-full py-10 sm:py-14 bg-canvas">
      <SeoManager
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blogs/${post.slug}`}
        ogType="article"
        publishedTime={post.publishedAt}
        author={post.author.name}
      />

      <Container>
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-text-muted">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 overflow-hidden">
            <Link
              to="/"
              className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            <Link
              to="/blogs"
              className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
            >
              Blogs
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>

          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>All Articles</span>
          </Link>
        </div>

        {/* Article Container (Constrained Reading Measure) */}
        <article className="max-w-3xl mx-auto">
          {/* Article Header */}
          <header className="mb-10 pb-8 border-b border-border-subtle">
            <div className="flex items-center gap-2 mb-4">
              <span className="type-caption inline-flex items-center rounded-md bg-accent-subtle px-2.5 py-1 text-xs font-semibold text-accent-brand border border-accent-brand/20">
                {post.category}
              </span>
              <div className="flex items-center gap-1 text-xs text-text-muted">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <h1 className="type-h1 text-text-primary font-extrabold tracking-tight text-2.5xl sm:text-4xl lg:text-4.5xl leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author Card & Date Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border-subtle text-xs sm:text-sm text-text-muted">
              <div>
                <div className="font-semibold text-text-primary text-sm">{post.author.name}</div>
                <div className="text-text-muted text-xs">{post.author.role}</div>
              </div>

              <div className="flex items-center gap-4 text-xs text-text-muted">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Published {formattedDate}</span>
                </div>
                {formattedUpdatedDate && (
                  <span className="hidden md:inline text-text-muted">
                    (Updated {formattedUpdatedDate})
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* Article Main Body (Markdown / Structured Typography) */}
          <main className="mb-12">
            <MarkdownRenderer content={post.content} />
          </main>

          {/* Tags & Sharing Bar */}
          <footer className="border-t border-border-subtle pt-8 space-y-6">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-text-muted flex items-center gap-1 mr-1">
                  <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                  Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="type-mono rounded-md bg-surface-elevated px-2.5 py-1 text-xs text-text-secondary border border-border-subtle"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <ShareButtons title={post.title} />

              <Link
                to="/blogs"
                className="text-xs font-semibold text-accent-brand hover:underline underline-offset-4"
              >
                ← Back to all articles
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Articles Section */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-12 border-t border-border-subtle">
            <h3 className="type-h3 text-text-primary font-bold mb-6 text-xl">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map((relPost) => (
                <BlogCard key={relPost.id} post={relPost} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};
