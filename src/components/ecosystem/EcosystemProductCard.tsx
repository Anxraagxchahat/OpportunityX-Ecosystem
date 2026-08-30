import React from 'react';
import {
  Briefcase,
  Terminal,
  FileText,
  LayoutGrid,
  ShieldCheck,
  GraduationCap,
  Users,
  Bot,
  Compass,
  LifeBuoy,
  Trophy,
  ArrowUpRight,
  Check,
  AlertCircle,
  LucideIcon,
  Radio,
} from 'lucide-react';
import { EcosystemProduct } from '@/data/ecosystemData';
import { StatusBadge } from './StatusBadge';

export interface EcosystemProductCardProps {
  product: EcosystemProduct;
  className?: string;
  featured?: boolean;
}

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  radar: Radio,
  verification: ShieldCheck,
  resume: FileText,
  learn: GraduationCap,
  freelance: Terminal,
  jobs: Briefcase,
  portfolio: LayoutGrid,
  'community-platform': Users,
  ai: Bot,
  mentorship: Compass,
  support: LifeBuoy,
  arena: Trophy,
};

export const EcosystemProductCard: React.FC<EcosystemProductCardProps> = ({
  product,
  className = '',
  featured = false,
}) => {
  const Icon = PRODUCT_ICONS[product.id] || LayoutGrid;
  const isLive = product.status === 'live';
  const isInDevelopment = product.status === 'in-development';
  const isOnHold = product.status === 'on-hold';

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface hover:bg-surface-elevated/95 hover:border-border-strong p-6 sm:p-7 transition-all duration-200 shadow-subtle ${
        featured || product.isDevelopmentPriority
          ? 'ring-1 ring-accent-brand/20 bg-surface-elevated/80'
          : ''
      } ${className}`}
    >
      {/* Background Glow for Priority In-Development item */}
      {product.isDevelopmentPriority && (
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-blue-500/5 dark:bg-blue-500/10 blur-2xl opacity-60"
          aria-hidden="true"
        />
      )}

      <div>
        {/* Card Header: Icon + Priority Tag / Status Badge */}
        <div className="flex items-start justify-between gap-3 mb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle text-text-primary group-hover:text-accent-brand group-hover:border-accent-brand/30 transition-colors shadow-sm">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <StatusBadge status={product.status} size="sm" />
            {product.isDevelopmentPriority && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary [html[data-theme='monochromatic']_&]:!border-border-strong">
                Current Priority
              </span>
            )}
          </div>
        </div>

        {/* Product Title & Tagline */}
        <h4 className="type-h3 text-text-primary group-hover:text-accent-brand transition-colors text-lg font-bold mb-1 flex items-center justify-between gap-2">
          <span>{product.name}</span>
          {isLive && product.externalUrl && (
            <ArrowUpRight
              className="h-4 w-4 text-text-muted group-hover:text-accent-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              aria-hidden="true"
            />
          )}
        </h4>

        <p className="text-xs font-mono text-text-muted mb-3 leading-relaxed">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="type-body text-text-secondary text-sm leading-relaxed mb-5">
          {product.description}
        </p>

        {/* On Hold Status Reason Notice */}
        {isOnHold && product.statusReason && (
          <div className="mb-4 p-3 rounded-lg bg-surface-elevated/70 border border-border-subtle text-xs text-text-muted flex items-start gap-2">
            <AlertCircle
              className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="leading-snug">{product.statusReason}</span>
          </div>
        )}
      </div>

      {/* Capabilities & Footer Area */}
      <div className="pt-4 border-t border-border-subtle/80 space-y-3 mt-auto">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2">
            {isLive ? 'Active Capabilities' : 'Key Scope & Capabilities'}
          </span>
          <div className="space-y-1.5">
            {product.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-2 text-xs text-text-secondary"
              >
                <Check
                  className={`h-3.5 w-3.5 shrink-0 ${
                    isLive
                      ? 'text-emerald-500'
                      : isInDevelopment
                      ? 'text-blue-500'
                      : 'text-text-muted'
                  } [html[data-theme='monochromatic']_&]:!text-text-primary`}
                  aria-hidden="true"
                />
                <span className="line-clamp-1">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Action link for Live products */}
        {isLive && product.externalUrl && (
          <div className="pt-2">
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-surface-elevated hover:bg-surface-hover text-text-primary border border-border-subtle hover:border-accent-brand/40 transition-colors shadow-sm cursor-pointer"
            >
              <span>Launch {product.shortName}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-accent-brand [html[data-theme='monochromatic']_&]:!text-text-primary" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
