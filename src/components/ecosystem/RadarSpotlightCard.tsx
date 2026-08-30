import React from 'react';
import { ArrowUpRight, Radio, Compass, Sparkles, CheckCircle } from 'lucide-react';
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
      className={`relative overflow-hidden rounded-2xl border border-border-subtle hover:border-accent-brand/40 bg-surface-elevated/70 backdrop-blur-sm p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-elevated group ${className}`}
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

      <div className="relative z-10 flex flex-col justify-between h-full gap-8">
        {/* Top Header Row */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-accent-subtle text-accent-brand border border-accent-glow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Flagship Ecosystem Product</span>
            </div>

            <StatusBadge status={product.status} size="md" />
          </div>

          {/* Product Identity */}
          <div className="flex items-start gap-4 mb-4">
            <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-accent-subtle border border-accent-glow text-accent-brand shrink-0">
              <Radio className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
            </div>
            <div>
              <h3 className="type-h2 text-text-primary group-hover:text-accent-brand transition-colors duration-200">
                {product.name}
              </h3>
              <p className="type-caption text-text-muted mt-0.5">
                Official Discovery Portal • radar.opportunityx.co.in
              </p>
            </div>
          </div>

          {/* Tagline & Description */}
          <p className="type-body-lg text-text-primary font-medium mb-3">
            {product.tagline}
          </p>
          <p className="type-body text-text-secondary text-sm sm:text-base leading-relaxed max-w-3xl">
            {product.description}
          </p>
        </div>

        {/* Middle: Indexed Opportunity Category Tags */}
        <div>
          <div className="text-xs uppercase tracking-wider font-mono text-text-muted mb-2.5 flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
            <span>Indexed Opportunity Streams</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-surface text-text-secondary border border-border-subtle hover:border-border-strong hover:text-text-primary transition-colors select-none"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Capabilities & Outbound Action CTA */}
        <div className="pt-6 border-t border-border-subtle flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
            {product.capabilities.map((cap) => (
              <div key={cap} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-500 shrink-0 [html[data-theme='monochromatic']_&]:text-text-primary" aria-hidden="true" />
                <span>{cap}</span>
              </div>
            ))}
          </div>

          {product.externalUrl && (
            <div className="shrink-0">
              <Button
                as="a"
                href={product.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="h-4.5 w-4.5" aria-hidden="true" />}
                className="w-full sm:w-auto font-semibold"
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
