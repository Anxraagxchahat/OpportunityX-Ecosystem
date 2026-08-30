import React from 'react';
import {
  CheckCircle2,
  Hammer,
  Clock,
  PauseCircle,
  XCircle,
  LucideIcon,
} from 'lucide-react';
import { ProductStatus, STATUS_CONFIGS } from '@/data/ecosystemData';

export interface StatusBadgeProps {
  status: ProductStatus | string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  pulse?: boolean;
}

const STATUS_ICONS: Record<ProductStatus, LucideIcon> = {
  live: CheckCircle2,
  'in-development': Hammer,
  planned: Clock,
  'on-hold': PauseCircle,
  cancelled: XCircle,
};

// Normalize any casing variations (e.g. 'LIVE' -> 'live', 'IN DEVELOPMENT' -> 'in-development')
const normalizeStatus = (status: string): ProductStatus => {
  const s = status.toLowerCase().trim();
  if (s === 'live') return 'live';
  if (s === 'in development' || s === 'in-development' || s === 'dev')
    return 'in-development';
  if (s === 'on hold' || s === 'on-hold' || s === 'paused') return 'on-hold';
  if (
    s === 'cancelled' ||
    s === 'archived' ||
    s === 'cancelled / archived' ||
    s === 'retired'
  )
    return 'cancelled';
  return 'planned';
};

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = '',
  size = 'md',
  showIcon = true,
  pulse = true,
}) => {
  const normStatus = normalizeStatus(status);
  const config = STATUS_CONFIGS[normStatus] || STATUS_CONFIGS.planned;
  const Icon = STATUS_ICONS[normStatus] || Clock;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[11px] gap-1.5',
    md: 'px-2.5 py-1 text-xs gap-2',
    lg: 'px-3 py-1.5 text-xs font-semibold gap-2',
  }[size];

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4',
  }[size];

  return (
    <span
      className={`inline-flex items-center rounded-full font-mono font-medium border select-none transition-all duration-150 [html[data-theme="monochromatic"]_&]:!border-border-strong [html[data-theme="monochromatic"]_&]:!bg-surface-elevated [html[data-theme="monochromatic"]_&]:!text-text-primary ${config.badgeClasses} ${sizeClasses} ${className}`}
      aria-label={`Product status: ${config.label} — ${config.description}`}
      title={`${config.label}: ${config.description}`}
    >
      {/* Status Icon or Dot Indicator */}
      {showIcon ? (
        <Icon
          className={`${iconSizes} shrink-0 opacity-95 [html[data-theme="monochromatic"]_&]:!text-text-primary`}
          aria-hidden="true"
        />
      ) : (
        <span
          className={`h-1.5 w-1.5 rounded-full shrink-0 ${
            normStatus === 'live' && pulse ? 'animate-pulse' : ''
          } ${config.dotColor} [html[data-theme="monochromatic"]_&]:!bg-text-primary`}
          aria-hidden="true"
        />
      )}

      {/* Status Text Label */}
      <span className="tracking-tight whitespace-nowrap">{config.label}</span>
    </span>
  );
};
