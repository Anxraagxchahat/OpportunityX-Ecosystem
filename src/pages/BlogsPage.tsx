import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { BookOpen, RefreshCw } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { BlogCard } from '@/components/blog/BlogCard';
import { FeaturedBlogCard } from '@/components/blog/FeaturedBlogCard';
import { BlogFilter } from '@/components/blog/BlogFilter';
import { EmptyState } from '@/components/common/EmptyState';
import { SeoManager } from '@/components/common/SeoManager';
import { BlogCategory, searchBlogs, getFeaturedBlog } from '@/data/blogData';

export const BlogsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Determine section type based on path
  const editorialSection = useMemo(() => {
    if (location.pathname === '/editorial/guides') return 'Guides';
    if (location.pathname === '/editorial/articles') return 'Articles';
    if (location.pathname === '/editorial/insights') return 'Insights';
    if (location.pathname === '/editorial') return 'Editorial';
    return 'Blogs';
  }, [location.pathname]);

  const categoryParam = (searchParams.get('category') as BlogCategory) || 'All';
  const queryParam = searchParams.get('q') || '';

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [activeCategory, setActiveCategory] = useState<BlogCategory>(categoryParam);

  useEffect(() => {
    setSearchQuery(queryParam);
    setActiveCategory(categoryParam);
  }, [queryParam, categoryParam]);

  const handleCategoryChange = (category: BlogCategory) => {
    setActiveCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const newParams = new URLSearchParams(searchParams);
    if (!query) {
      newParams.delete('q');
    } else {
      newParams.set('q', query);
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All');
    setSearchParams(new URLSearchParams());
  };

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return searchBlogs(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const featuredBlog = useMemo(() => {
    return getFeaturedBlog();
  }, []);

  const showFeaturedCard =
    activeCategory === 'All' && !searchQuery.trim() && featuredBlog && editorialSection === 'Blogs';

  // If featured is displayed at top, remove it from the grid below
  const gridBlogs = useMemo(() => {
    if (showFeaturedCard && featuredBlog) {
      return filteredBlogs.filter((p) => p.id !== featuredBlog.id);
    }
    return filteredBlogs;
  }, [filteredBlogs, showFeaturedCard, featuredBlog]);

  return (
    <div className="w-full py-10 sm:py-14 lg:py-16 bg-canvas">
      <SeoManager
        title={editorialSection}
        description="Official OpportunityX engineering breakdowns, discovery playbooks, and platform announcements."
        canonicalPath={location.pathname}
      />

      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2 font-mono">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>OpportunityX Editorial</span>
          </div>
          <h1 className="type-h1 text-text-primary font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            {editorialSection === 'Guides'
              ? 'Guides & Playbooks'
              : editorialSection === 'Articles'
              ? 'Articles & Deep Dives'
              : editorialSection === 'Insights'
              ? 'Insights & Research'
              : 'Insights & Engineering'}
          </h1>
          <p className="type-body-lg text-text-secondary mt-3 text-base sm:text-lg leading-relaxed max-w-2xl">
            Deep technical breakdowns, architecture decisions, hackathon strategies, and product updates from the OpportunityX engineering team.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10">
          <BlogFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

        {/* Featured Post (Only when on 'All' category and no active search) */}
        {showFeaturedCard && featuredBlog && (
          <div className="mb-12">
            <FeaturedBlogCard post={featuredBlog} />
          </div>
        )}

        {/* Blog Posts Grid */}
        {gridBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gridBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No editorial pieces match your search"
            description={`We couldn't find any articles in category "${activeCategory}" matching "${searchQuery}".`}
            action={
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset Search & Filters
              </button>
            }
          />
        )}
      </Container>
    </div>
  );
};
