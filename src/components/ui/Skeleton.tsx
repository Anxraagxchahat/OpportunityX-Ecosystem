import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'rect' | 'circle' | 'text' | 'rounded';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rect',
  ...rest
}) => {
  const variantClass =
    variant === 'circle'
      ? 'rounded-full'
      : variant === 'rounded'
      ? 'rounded-xl'
      : variant === 'text'
      ? 'rounded h-4 my-1'
      : 'rounded-md';

  return (
    <div
      className={`animate-pulse bg-surface-elevated/70 border border-border-subtle/50 ${variantClass} ${className}`}
      aria-hidden="true"
      {...rest}
    />
  );
};

// --------------------------------------------------------------------------
// 1. BLOG CARD SKELETON (Matches BlogCard.tsx)
// --------------------------------------------------------------------------
export const BlogCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 space-y-4 ${className}`}
      role="status"
      aria-label="Loading blog article"
    >
      {/* Category & Read Time */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Title */}
      <div className="space-y-2 pt-1">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
      </div>

      {/* Excerpt */}
      <div className="space-y-1.5 pt-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* Author & Date Footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-border-subtle">
        <Skeleton variant="circle" className="h-8 w-8 shrink-0" />
        <div className="space-y-1 flex-1">
          <Skeleton className="h-3.5 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <span className="sr-only">Loading article...</span>
    </div>
  );
};

// --------------------------------------------------------------------------
// 2. NOTIFICATION CARD SKELETON (Matches NotificationCard.tsx)
// --------------------------------------------------------------------------
export const NotificationCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-xl border border-border-subtle bg-surface p-5 space-y-3.5 ${className}`}
      role="status"
      aria-label="Loading ecosystem notification"
    >
      {/* Header Badges */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-20 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Title */}
      <Skeleton className="h-5 w-4/5" />

      {/* Summary */}
      <div className="space-y-1.5">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-2/3" />
      </div>

      {/* Action / Details */}
      <div className="pt-2 flex items-center justify-between">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-20" />
      </div>
      <span className="sr-only">Loading bulletin...</span>
    </div>
  );
};

// --------------------------------------------------------------------------
// 3. PLATFORM CARD SKELETON (Matches PlatformCard.tsx)
// --------------------------------------------------------------------------
export const PlatformCardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 space-y-4 ${className}`}
      role="status"
      aria-label="Loading platform information"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <Skeleton variant="rounded" className="h-11 w-11 shrink-0" />
          <div className="space-y-1.5">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-3.5 w-32" />
          </div>
        </div>
        <Skeleton className="h-6 w-24 rounded-full" />
      </div>

      {/* Metadata tags */}
      <div className="flex items-center gap-3">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Notes / Description */}
      <div className="space-y-1.5 pt-1">
        <Skeleton className="h-3.5 w-full" />
        <Skeleton className="h-3.5 w-4/5" />
      </div>

      {/* Button */}
      <div className="pt-2">
        <Skeleton className="h-10 w-32 rounded-lg" />
      </div>
      <span className="sr-only">Loading platform download...</span>
    </div>
  );
};
