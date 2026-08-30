import React from 'react';
import { Search, X } from 'lucide-react';
import { BlogCategory, BLOG_CATEGORIES } from '@/data/blogData';

interface BlogFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: BlogCategory;
  onCategoryChange: (category: BlogCategory) => void;
  className?: string;
}

export const BlogFilter: React.FC<BlogFilterProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Input Bar */}
      <div className="relative w-full max-w-lg">
        <label htmlFor="blog-search-input" className="sr-only">
          Search articles by title, topic, or keyword
        </label>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-text-muted">
          <Search className="h-4 w-4" aria-hidden="true" />
        </div>
        <input
          id="blog-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search articles, roadmaps, architecture..."
          className="w-full rounded-xl border border-border-subtle bg-surface py-2.5 pl-10 pr-10 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-brand focus:bg-surface-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring transition-colors"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-text-muted hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-md"
            aria-label="Clear search query"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Category Pills Tab Bar */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none"
        role="tablist"
        aria-label="Blog Categories"
      >
        {BLOG_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat)}
              className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
                isActive
                  ? 'bg-accent-brand text-white shadow-subtle'
                  : 'border border-border-subtle bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};
