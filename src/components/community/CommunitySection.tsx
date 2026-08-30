import React from 'react';
import { Users, ArrowUpRight, ArrowDown, Sparkles, ShieldCheck, Globe, Terminal } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { COMMUNITY_CONFIG } from '@/data/ecosystemData';
import { CommunityVisual } from './CommunityVisual';

export interface CommunitySectionProps {
  onExploreClick?: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({
  onExploreClick,
}) => {
  const { narrative, communityUrl, pillars } = COMMUNITY_CONFIG;

  const handleScrollToEcosystem = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const target = document.getElementById('ecosystem-overview');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return Globe;
      case 1:
        return Terminal;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      id="community-section"
      className="relative py-16 sm:py-20 lg:py-28 border-t border-border-subtle overflow-hidden bg-surface/30"
      aria-labelledby="community-heading"
    >
      {/* Background Accent Mesh */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-brand/5 blur-[120px] opacity-60"
        aria-hidden="true"
      />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Narrative & Values (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="accent" icon={<Users className="h-3 w-3" aria-hidden="true" />}>
                Centralized Builder Network
              </Badge>
            </div>

            <h2
              id="community-heading"
              className="type-display text-text-primary text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              One community.{' '}
              <span className="text-accent-brand">Everyone building together.</span>
            </h2>

            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {narrative}
            </p>

            {/* Core Community Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-2 text-left">
              {pillars.map((pillar, index) => {
                const IconComponent = getPillarIcon(index);

                return (
                  <div
                    key={pillar.title}
                    className="group rounded-2xl border border-border-subtle bg-surface/70 backdrop-blur-sm p-5 hover:border-border-strong hover:bg-surface-hover transition-all duration-200 shadow-sm flex flex-col justify-start"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-subtle text-accent-brand border border-accent-glow mb-3.5 transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="h-4.5 w-4.5" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-bold text-text-primary tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                as="a"
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                leftIcon={<Users className="h-4.5 w-4.5" aria-hidden="true" />}
                rightIcon={<ArrowUpRight className="h-4.5 w-4.5 opacity-80" aria-hidden="true" />}
                className="w-full sm:w-auto font-semibold"
              >
                Join OpportunityX Community
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={handleScrollToEcosystem}
                leftIcon={<ArrowDown className="h-4 w-4" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Explore Products
              </Button>
            </div>

            {/* Community Quality Guarantee */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-text-muted pt-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0 [html[data-theme='monochromatic']_&]:text-text-secondary" aria-hidden="true" />
              <span>Zero Product Silos • Open Collaboration • Verified Builders</span>
            </div>
          </div>

          {/* Right Column: Text-First Community Preview Canvas (5 Cols) */}
          <div className="lg:col-span-5 w-full">
            <CommunityVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
