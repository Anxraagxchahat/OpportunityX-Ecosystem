import React, { ReactNode } from 'react';
import { Inbox } from 'lucide-react';

export interface EmptyStateProps {
  icon?: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title = 'No items found',
  description = 'There are no active records or updates available in this view.',
  action,
  className = '',
}) => {
  return (
    <div
      className={`flex min-h-[280px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-border-subtle bg-surface/80 p-8 text-center transition-colors ${className}`}
      role="region"
      aria-label={title}
    >
      <div className="mb-3.5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface-elevated text-text-muted border border-border-subtle shadow-subtle">
        {icon || <Inbox className="h-6 w-6" aria-hidden="true" />}
      </div>
      <h3 className="type-h3 text-text-primary text-base font-semibold mb-1.5">{title}</h3>
      <p className="type-body text-text-secondary text-sm max-w-sm mb-5 leading-relaxed">{description}</p>
      {action && <div className="mt-1">{action}</div>}
    </div>
  );
};
