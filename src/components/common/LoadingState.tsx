import React from 'react';
import { Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/Skeleton';

export interface LoadingStateProps {
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'skeleton';
  skeletonCount?: number;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading ecosystem resources...',
  className = '',
  size = 'md',
  variant = 'spinner',
  skeletonCount = 3,
}) => {
  if (variant === 'skeleton') {
    return (
      <div className={`space-y-4 w-full ${className}`} role="status" aria-live="polite">
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <div key={i} className="rounded-xl border border-border-subtle bg-surface p-5 space-y-3">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
        <span className="sr-only">{message}</span>
      </div>
    );
  }

  const iconSizeClass = size === 'sm' ? 'h-5 w-5' : size === 'lg' ? 'h-9 w-9' : 'h-7 w-7';
  const textSizeClass = size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm';

  return (
    <div
      className={`flex min-h-[220px] w-full flex-col items-center justify-center p-6 text-center ${className}`}
      role="status"
      aria-live="polite"
    >
      <Loader2
        className={`animate-spin text-accent-brand ${iconSizeClass} mb-3`}
        aria-hidden="true"
      />
      <p className={`type-body text-text-secondary ${textSizeClass} font-medium`}>
        {message}
      </p>
      <span className="sr-only">Loading content, please wait.</span>
    </div>
  );
};
