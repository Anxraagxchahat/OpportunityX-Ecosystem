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
  CheckCircle2,
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
      className={`group relative flex flex-col justify-between rounded-2xl border border-border-subtle bg-surface hover:bg-surface-elevated/95 hover:border-accent-brand/30 p-6 sm:p-7 transition-all duration-200 shadow-subtle hover:shadow-elevated ${
        featured || product.isDevelopmentPriority
          ? 'ring-1 ring-accent-brand/30 bg-surface-elevated/80'
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
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle text-text-primary group-hover:text-accent-brand group-hover:border-accent-brand/30 group-hover:bg-accent-brand/5 transition-all duration-200 shadow-xs">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1.5">
            <StatusBadge status={product.status} size="sm" />
            {product.isDevelopmentPriority && (
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary [html[data-theme='monochromatic']_&]:!border-border-strong">
                Current Priority
              </span>
            )}
          </div>
        </div>

        {/* Product Title & Domain */}
        <div>
          <h4 className="type-h3 text-text-primary group-hover:text-accent-brand transition-colors text-lg font-bold mb-0.5 flex items-center gap-1.5">
            <span>{product.name}</span>
            {isLive && product.externalUrl && (
              <ArrowUpRight
                className="h-4 w-4 text-text-muted group-hover:text-accent-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 opacity-70 group-hover:opacity-100"
                aria-hidden="true"
              />
            )}
          </h4>

          {product.externalUrl && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-text-muted font-mono mb-3">
              <span>Official {product.shortName} Portal</span>
              <span className="text-border-strong hidden sm:inline">•</span>
              <span className="text-accent-brand/90 font-medium">{product.externalUrl.replace('https://', '')}</span>
            </div>
          )}
        </div>

        {/* Tagline */}
        <p className="text-sm font-semibold text-text-primary mb-2 leading-snug">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="type-body text-text-secondary text-sm leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Category / Feature Chips */}
        {product.categories && product.categories.length > 0 && (
          <div className="mb-5">
            <div className="flex flex-wrap gap-1.5">
              {product.categories.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-surface-elevated text-text-secondary border border-border-subtle hover:border-accent-brand/30 hover:text-text-primary transition-all select-none shadow-xs"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* On Hold Status Reason Notice */}
        {isOnHold && product.statusReason && (
          <div className="mb-4 p-3 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs text-text-muted flex items-start gap-2">
            <AlertCircle
              className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="leading-snug">{product.statusReason}</span>
          </div>
        )}
      </div>

      {/* Capabilities & Footer Area */}
      <div className="pt-4 border-t border-border-subtle/80 space-y-3.5 mt-auto">
        <div>
          <span className="text-xs font-semibold text-text-secondary block mb-2.5">
            {isLive ? 'Active Capabilities' : 'Key Scope & Capabilities'}
          </span>
          <div className="space-y-2">
            {product.capabilities.map((cap) => (
              <div
                key={cap}
                className="flex items-center gap-2 text-xs text-text-secondary"
              >
                <CheckCircle2
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

        {/* Footer Actions / Status Indicators */}
        {isLive && product.externalUrl ? (
          <div className="pt-2">
            <a
              href={product.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-accent-brand hover:bg-accent-hover text-white transition-all duration-150 shadow-xs hover:shadow-accent-glow cursor-pointer group/btn active:scale-[0.98]"
            >
              <span>Launch {product.shortName} Portal</span>
              <ArrowUpRight className="h-4 w-4 text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        ) : isInDevelopment ? (
          <div className="pt-2">
            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-600 dark:text-blue-400 font-medium">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="font-semibold">Active Engineering Phase</span>
              </div>
              <span className="text-[11px] font-mono text-text-muted">In Progress</span>
            </div>
          </div>
        ) : isOnHold ? (
          <div className="pt-2">
            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs text-text-muted font-medium">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400"></span>
                <span>Development Paused</span>
              </div>
              <span className="text-[11px] font-mono text-text-muted">On Hold</span>
            </div>
          </div>
        ) : (
          <div className="pt-2">
            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-surface-elevated/70 border border-border-subtle text-xs text-text-muted font-medium">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500/80"></span>
                <span>Upcoming on Roadmap</span>
              </div>
              <span className="text-[11px] font-mono text-text-muted">Planned</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
