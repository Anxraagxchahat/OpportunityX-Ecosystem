import React, { useState } from 'react';
import {
  Layers,
  Info,
  Hammer,
  Clock,
  PauseCircle,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import {
  ECOSYSTEM_PRODUCTS,
  ROADMAP_DISCLAIMER,
  ProductStatus,
  STATUS_CONFIGS,
  getFlagshipProduct,
  getLiveProducts,
  getInDevelopmentProducts,
  getPlannedProducts,
  getOnHoldProducts,
  getArchivedProducts,
  getEcosystemStats,
} from '@/data/ecosystemData';
import { RadarSpotlightCard } from './RadarSpotlightCard';
import { EcosystemProductCard } from './EcosystemProductCard';

type FilterTab = 'all' | ProductStatus;

export const EcosystemSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');

  const stats = getEcosystemStats();
  const flagship = getFlagshipProduct();
  const liveProducts = getLiveProducts();
  const otherLiveProducts = liveProducts.filter((p) => !p.isFlagship);
  const inDevProducts = getInDevelopmentProducts();
  const plannedProducts = getPlannedProducts();
  const onHoldProducts = getOnHoldProducts();
  const archivedProducts = getArchivedProducts();

  // Filtered products when a specific status tab is active
  const displayedFilteredProducts =
    activeFilter === 'all'
      ? ECOSYSTEM_PRODUCTS.filter((p) => !p.archived && p.status !== 'cancelled')
      : activeFilter === 'cancelled'
      ? archivedProducts
      : ECOSYSTEM_PRODUCTS.filter((p) => p.status === activeFilter && !p.archived);

  return (
    <section
      id="ecosystem-overview"
      className="relative py-16 sm:py-20 lg:py-28 border-t border-border-subtle overflow-hidden"
      aria-labelledby="ecosystem-heading"
    >
      {/* Background Subtle Ambience */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 -translate-x-1/2 h-96 w-full max-w-7xl bg-accent-brand/5 blur-[100px] opacity-50 [html[data-theme='monochromatic']_&]:hidden"
        aria-hidden="true"
      />

      <Container size="lg">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex">
            <Badge
              variant="accent"
              icon={<Layers className="h-3.5 w-3.5" aria-hidden="true" />}
            >
              Ecosystem Products & Roadmap
            </Badge>
          </div>

          <h2
            id="ecosystem-heading"
            className="type-display text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            One ecosystem.{' '}
            <span className="text-accent-brand [html[data-theme='monochromatic']_&]:text-text-primary">
              Multiple ways to move forward.
            </span>
          </h2>

          <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
            OpportunityX is the parent digital umbrella uniting verified discovery,
            engineering career roadmaps, proof-of-work systems, and collaborative student tooling.
          </p>
        </div>

        {/* Status Legend Bar & Filter Controls */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-surface-elevated/70 border border-border-subtle backdrop-blur-sm space-y-4">
          {/* Top row: Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-text-muted shrink-0">
              <Filter className="h-3.5 w-3.5 text-accent-brand [html[data-theme='monochromatic']_&]:text-text-primary" />
              <span>Roadmap View:</span>
            </div>

            <div
              className="flex items-center gap-1.5 p-1 rounded-xl bg-surface border border-border-subtle overflow-x-auto max-w-full scrollbar-none"
              role="tablist"
              aria-label="Ecosystem product filter tabs"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'all'}
                onClick={() => setActiveFilter('all')}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-surface-elevated text-text-primary font-semibold shadow-xs border border-border-subtle'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                All ({stats.totalActive})
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'live'}
                onClick={() => setActiveFilter('live')}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === 'live'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/30 shadow-xs [html[data-theme="monochromatic"]_&]:!bg-surface-elevated [html[data-theme="monochromatic"]_&]:!text-text-primary'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 [html[data-theme='monochromatic']_&]:bg-text-primary" />
                <span>Live ({stats.liveCount})</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'in-development'}
                onClick={() => setActiveFilter('in-development')}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === 'in-development'
                    ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold border border-blue-500/30 shadow-xs [html[data-theme="monochromatic"]_&]:!bg-surface-elevated [html[data-theme="monochromatic"]_&]:!text-text-primary'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 [html[data-theme='monochromatic']_&]:bg-text-primary" />
                <span>In Dev ({stats.inDevelopmentCount})</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'planned'}
                onClick={() => setActiveFilter('planned')}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === 'planned'
                    ? 'bg-amber-500/15 text-amber-700 dark:text-amber-400 font-semibold border border-amber-500/30 shadow-xs [html[data-theme="monochromatic"]_&]:!bg-surface-elevated [html[data-theme="monochromatic"]_&]:!text-text-primary'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 [html[data-theme='monochromatic']_&]:bg-text-muted" />
                <span>Planned ({stats.plannedCount})</span>
              </button>

              <button
                type="button"
                role="tab"
                aria-selected={activeFilter === 'on-hold'}
                onClick={() => setActiveFilter('on-hold')}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                  activeFilter === 'on-hold'
                    ? 'bg-zinc-500/15 text-zinc-700 dark:text-zinc-400 font-semibold border border-zinc-500/30 shadow-xs [html[data-theme="monochromatic"]_&]:!bg-surface-elevated [html[data-theme="monochromatic"]_&]:!text-text-primary'
                    : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0 [html[data-theme='monochromatic']_&]:bg-text-muted" />
                <span>On Hold ({stats.onHoldCount})</span>
              </button>

              {stats.archivedCount > 0 && (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === 'cancelled'}
                  onClick={() => setActiveFilter('cancelled')}
                  className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                    activeFilter === 'cancelled'
                      ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 font-semibold border border-rose-500/30 shadow-xs'
                      : 'text-text-muted hover:text-text-primary hover:bg-surface-hover'
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                  <span>Archived ({stats.archivedCount})</span>
                </button>
              )}
            </div>
          </div>

          {/* Bottom row: Compact Status Legend */}
          <div className="pt-3.5 border-t border-border-subtle/80 flex flex-col md:flex-row md:items-center gap-3 text-xs">
            <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted shrink-0 font-semibold">
              Lifecycle Legend:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-center gap-x-6 gap-y-2 text-xs">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 [html[data-theme='monochromatic']_&]:text-text-primary shrink-0" />
                <span className="text-text-secondary">
                  <strong className="text-text-primary font-medium">Live:</strong> Genuinely available
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Hammer className="h-3.5 w-3.5 text-blue-500 [html[data-theme='monochromatic']_&]:text-text-primary shrink-0" />
                <span className="text-text-secondary">
                  <strong className="text-text-primary font-medium">In Dev:</strong> Currently being developed
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-500 [html[data-theme='monochromatic']_&]:text-text-muted shrink-0" />
                <span className="text-text-secondary">
                  <strong className="text-text-primary font-medium">Planned:</strong> Part of current roadmap
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <PauseCircle className="h-3.5 w-3.5 text-zinc-400 [html[data-theme='monochromatic']_&]:text-text-muted shrink-0" />
                <span className="text-text-secondary">
                  <strong className="text-text-primary font-medium">On Hold:</strong> Temporarily paused
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        {activeFilter === 'all' ? (
          <div className="space-y-12 sm:space-y-16">
            {/* 1. LIVE PRODUCTS SECTION */}
            {liveProducts.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse [html[data-theme='monochromatic']_&]:bg-text-primary shrink-0" />
                      <h3 className="type-h3 text-text-primary text-lg sm:text-xl font-bold">
                        Live Ecosystem Products
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      Production-grade platforms and tools actively operational across the ecosystem.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 [html[data-theme='monochromatic']_&]:text-text-primary px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 [html[data-theme='monochromatic']_&]:bg-surface-elevated [html[data-theme='monochromatic']_&]:border-border-strong shrink-0 self-start sm:self-center">
                    {stats.liveCount} Operational
                  </span>
                </div>

                {/* Flagship Radar Spotlight */}
                {flagship && (
                  <div>
                    <RadarSpotlightCard product={flagship} />
                  </div>
                )}

                {/* Other Live Products Grid */}
                {otherLiveProducts.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {otherLiveProducts.map((product) => (
                      <EcosystemProductCard
                        key={product.id}
                        product={product}
                        featured
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. IN DEVELOPMENT SECTION (CURRENT PRIORITY) */}
            {inDevProducts.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-blue-500 [html[data-theme='monochromatic']_&]:bg-text-primary shrink-0" />
                      <h3 className="type-h3 text-text-primary text-lg sm:text-xl font-bold">
                        Active Development Focus
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      Core learning pathways and developer curriculum currently under active buildout.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 [html[data-theme='monochromatic']_&]:text-text-primary px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 [html[data-theme='monochromatic']_&]:bg-surface-elevated [html[data-theme='monochromatic']_&]:border-border-strong shrink-0 self-start sm:self-center">
                    Current Priority
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inDevProducts.map((product) => (
                    <EcosystemProductCard
                      key={product.id}
                      product={product}
                      featured={product.isDevelopmentPriority}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 3. PLANNED ROADMAP SECTION */}
            {plannedProducts.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 [html[data-theme='monochromatic']_&]:bg-text-muted shrink-0" />
                      <h3 className="type-h3 text-text-primary text-lg sm:text-xl font-bold">
                        Planned Ecosystem Projects
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      Specialized platforms and builder tooling scheduled on the upcoming OpportunityX roadmap.
                    </p>
                  </div>

                  <span className="text-xs font-mono text-amber-700 dark:text-amber-400 [html[data-theme='monochromatic']_&]:text-text-muted px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 [html[data-theme='monochromatic']_&]:bg-surface-elevated [html[data-theme='monochromatic']_&]:border-border-subtle shrink-0 self-start sm:self-center">
                    {stats.plannedCount} Planned
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {plannedProducts.map((product) => (
                    <EcosystemProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}

            {/* 4. ON HOLD SECTION */}
            {onHoldProducts.length > 0 && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 pb-3 border-b border-border-subtle">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-zinc-400 [html[data-theme='monochromatic']_&]:bg-text-muted shrink-0" />
                      <h3 className="type-h3 text-text-primary text-lg sm:text-xl font-bold">
                        On Hold Projects
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary mt-1 leading-relaxed">
                      Temporarily paused while active engineering resources focus on core learning and verification infrastructure.
                    </p>
                  </div>

                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 [html[data-theme='monochromatic']_&]:text-text-muted px-2.5 py-0.5 rounded-full bg-zinc-500/10 border border-zinc-500/20 [html[data-theme='monochromatic']_&]:bg-surface-elevated [html[data-theme='monochromatic']_&]:border-border-subtle shrink-0 self-start sm:self-center">
                    {stats.onHoldCount} On Hold
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {onHoldProducts.map((product) => (
                    <EcosystemProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Filtered View Grid */
          <div className="space-y-6">
            <div className="flex items-center justify-between gap-4 pb-3 border-b border-border-subtle">
              <div className="flex items-center gap-2">
                <h3 className="type-h3 text-text-primary text-xl font-bold capitalize">
                  {STATUS_CONFIGS[activeFilter as ProductStatus]?.label || activeFilter} Products
                </h3>
                <span className="text-xs font-mono text-text-muted">
                  ({displayedFilteredProducts.length} items)
                </span>
              </div>
            </div>

            {displayedFilteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedFilteredProducts.map((product) => (
                  <EcosystemProductCard
                    key={product.id}
                    product={product}
                    featured={product.isFlagship || product.isDevelopmentPriority}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-2xl bg-surface border border-border-subtle text-text-muted">
                <p className="text-sm">No products currently under this status.</p>
              </div>
            )}
          </div>
        )}

        {/* REQUIRED ROADMAP DISCLAIMER BOX */}
        <div className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl border border-border-subtle bg-surface/80 text-text-secondary text-xs sm:text-sm leading-relaxed flex items-start gap-3.5 shadow-subtle">
          <Info
            className="h-5 w-5 text-accent-brand [html[data-theme='monochromatic']_&]:text-text-primary shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <p className="text-text-secondary">
            {ROADMAP_DISCLAIMER}
          </p>
        </div>
      </Container>
    </section>
  );
};
