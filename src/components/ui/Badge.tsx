import React, { ReactNode } from 'react';

export type BadgeVariant = 'accent' | 'neutral' | 'live' | 'outline' | 'subtle';

export interface BadgeProps {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const BADGE_VARIANTS: Record<BadgeVariant, string> = {
  accent:
    'bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border border-[var(--color-badge-border)]',
  neutral:
    'bg-surface-elevated text-text-secondary border border-border-subtle',
  live:
    'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
  outline:
    'bg-transparent text-text-secondary border border-border-strong',
  subtle:
    'bg-surface text-text-muted border border-transparent',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'accent',
  children,
  className = '',
  icon,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase font-mono ${BADGE_VARIANTS[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
};
