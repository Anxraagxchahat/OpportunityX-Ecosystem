import React from 'react';
import { ArrowRight, Users, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { HeroVisual } from './HeroVisual';

export interface HeroProps {
  onExploreClick?: () => void;
  communityUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  communityUrl = 'https://discord.gg/qSjCRDTKN5',
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Positioning & CTAs (7 Columns on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Eyebrow Context Badge */}
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="accent" icon={<Sparkles className="h-3 w-3" aria-hidden="true" />}>
                The Parent Technology Ecosystem
              </Badge>
            </div>

            {/* Main Primary Headline (Single Logical H1 on Home) */}
            <h1 className="type-display text-text-primary">
              One ecosystem. <br className="hidden sm:inline" />
              <span className="text-accent-brand">Endless possibilities.</span>
            </h1>

            {/* Fluff-Free Value Proposition */}
            <p className="type-body-lg text-text-secondary mx-auto lg:mx-0">
              OpportunityX connects ambitious students, builders, and developers with career-defining hackathons, fellowships, internships, and modern engineering tooling under a single unified platform.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreClick}
                rightIcon={<ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Explore Ecosystem
              </Button>

              <Button
                as="a"
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                leftIcon={<Users className="h-4.5 w-4.5" aria-hidden="true" />}
                rightIcon={<ArrowUpRight className="h-4 w-4 opacity-75" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Join Community
              </Button>
            </div>

            {/* Trust Signal Pillars */}
            <div className="pt-6 sm:pt-8 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-secondary">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-brand shrink-0" aria-hidden="true" />
                <span>Verified Discovery Engine</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-brand shrink-0" aria-hidden="true" />
                <span>Modern Builder Tooling</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent-brand shrink-0" aria-hidden="true" />
                <span>Zero Gatekeeping</span>
              </div>
            </div>
          </div>

          {/* Right Column: Directional Geometric Kinetic Visual (5 Columns on Desktop) */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
};
