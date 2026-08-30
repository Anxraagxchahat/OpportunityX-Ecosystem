import React from 'react';
import { ArrowUpRight, Radio, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { EcosystemProduct } from '@/data/ecosystemData';
import { StatusBadge } from './StatusBadge';
import { Button } from '@/components/ui/Button';

export interface RadarSpotlightCardProps {
  product: EcosystemProduct;
  className?: string;
}

export const RadarSpotlightCard: React.FC<RadarSpotlightCardProps> = ({
  product,
  className = '',
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border-subtle hover:border-accent-brand/40 bg-surface-elevated/80 backdrop-blur-md p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-elevated group ${className}`}
    >
      {/* Background Subtle Accent Gradients */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-brand/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-accent-brand/5 blur-2xl transition-opacity duration-300 group-hover:opacity-80 opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-between h-full gap-7">
        {/* Top Section */}
        <div>
          {/* Top Header Row: Flagship Badge & Status */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-accent-subtle text-accent-brand border border-accent-glow shadow-xs">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>Flagship Product</span>
            </div>

            <StatusBadge status={product.status} size="md" />
          </div>

          {/* Product Identity */}
          <div className="flex items-start sm:items-center gap-4 mb-5">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-brand/20 to-accent-brand/5 border border-accent-glow text-accent-brand shadow-xs shrink-0">
              <Radio className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="type-h2 text-text-primary group-hover:text-accent-brand transition-colors duration-200 text-xl sm:text-2xl font-bold">
                {product.name}
              </h3>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-text-muted font-mono mt-1">
                <span>Official Discovery Portal</span>
                <span className="text-border-strong hidden sm:inline">•</span>
                <span className="text-accent-brand/90 font-medium">radar.opportunityx.co.in</span>
              </div>
            </div>
          </div>

          {/* Tagline & Description */}
          <div className="space-y-2 mb-6">
            <p className="text-base sm:text-lg font-semibold text-text-primary leading-snug">
              {product.tagline}
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
              {product.description}
            </p>
          </div>
        </div>

        {/* Middle: Indexed Opportunity Category Tags */}
        <div>
          <div className="text-xs uppercase tracking-wider font-mono text-text-muted mb-3 flex items-center gap-1.5 font-semibold">
            <Compass className="h-3.5 w-3.5 text-accent-brand shrink-0" aria-hidden="true" />
            <span>Indexed Opportunity Streams</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-surface text-text-secondary border border-border-subtle hover:border-accent-brand/30 hover:text-text-primary transition-all select-none shadow-xs"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Capabilities & Outbound Action CTA */}
        <div className="pt-6 border-t border-border-subtle/80 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-text-secondary">
            {product.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 [html[data-theme='monochromatic']_&]:text-text-primary" aria-hidden="true" />
                <span className="font-medium">{cap}</span>
              </div>
            ))}
          </div>

          {product.externalUrl && (
            <div className="shrink-0 w-full sm:w-auto">
              <Button
                as="a"
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="h-4.5 w-4.5" aria-hidden="true" />}
                className="w-full sm:w-auto font-semibold shadow-sm"
              >
                Launch Radar Portal
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
