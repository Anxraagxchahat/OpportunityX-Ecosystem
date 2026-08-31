import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Layers,
  ShieldCheck,
  Compass,
  ArrowRight,
  UserCheck,
  Zap,
  Globe,
  Award,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: 'Real-Time Discovery',
      desc: 'Ending opportunity fragmentation by indexing verified hackathons, fellowships, internships, and open-source programs into a single authoritative stream.',
    },
    {
      icon: Target,
      title: 'Actionable Career Tools',
      desc: 'Bridging discovery with preparation through free ATS resume architecture, cryptographic credential verification, and structured skill roadmaps.',
    },
    {
      icon: ShieldCheck,
      title: 'Zero Gatekeeping & 100% Free',
      desc: 'Every essential student builder tool is engineered without paywalls, artificial lockouts, or exploitative data collection.',
    },
    {
      icon: Zap,
      title: 'Single Unified Community',
      desc: 'Rejecting splintered product silos. Radar users, open-source contributors, and developers all collaborate in one central network.',
    },
  ];

  const values = [
    {
      title: 'Utility Over Hype',
      desc: 'We build tangible tools that solve real bottlenecks in how students find work, build proof-of-work, and connect with global opportunities.',
    },
    {
      title: 'Build in Public',
      desc: 'Transparent architecture decisions, public milestone roadmaps, open changelogs, and direct feedback loops with the student community.',
    },
    {
      title: 'Compounding Proof of Work',
      desc: 'Careers are cumulative. We help students turn small projects, hackathons, and certifications into verified evidence of engineering ability.',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="About OpportunityX — Mission, Vision & Ecosystem"
        description="Learn about OpportunityX, the unified student Career OS connecting opportunity discovery, ATS resume architecture, credential verification, and builder networks."
        canonicalPath="/about"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Header Section */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>About the Ecosystem</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              One ecosystem. <br />
              <span className="text-accent-brand">Endless possibilities.</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              OpportunityX was created to solve a fundamental imbalance: talented, driven students miss career-defining hackathons, internships, fellowships, and scholarships simply because opportunities are scattered across hundreds of disconnected channels.
            </p>
          </div>

          {/* Mission & Vision Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="rounded-3xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-subtle text-accent-brand">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                To democratize early-career opportunity discovery for every student and builder worldwide — eliminating information friction, replacing generic job boards with real-time verified intelligence, and equipping creators with modern tooling to build undeniable proof of work.
              </p>
            </div>

            <div className="rounded-3xl border border-border-subtle bg-surface p-7 sm:p-10 space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-subtle text-accent-brand">
                  <Globe className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-text-primary">The Vision</h2>
              </div>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                A seamless, interconnected student Career Operating System where discovering an opportunity, crafting an ATS-optimized resume, proving credentials with cryptographic verification, and assembling a hackathon team happens under one unified umbrella.
              </p>
            </div>
          </div>

          {/* Core Ecosystem Pillars */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Architectural Pillars
              </h2>
              <p className="text-sm text-text-secondary">
                The foundational principles behind everything built under the OpportunityX network.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 shadow-xs hover:border-accent-brand/40 hover:bg-surface-hover transition-all"
                  >
                    <div className="h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle flex items-center justify-center text-accent-brand">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{pillar.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Story & Origin */}
          <section className="rounded-3xl border border-border-subtle bg-surface/70 backdrop-blur-md p-7 sm:p-10 lg:p-12 space-y-6 shadow-elevated">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent-subtle text-accent-brand">
                <Layers className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
                From a Small Alert Bot to a Complete Career OS
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
              <p>
                OpportunityX did not start as a company or a massive corporate initiative. It began with a simple problem faced by its founder, Anurag Verma: finding hackathons before their deadlines passed.
              </p>
              <p>
                The initial Telegram bot scraped and delivered alerts directly to students. But as more builders joined, it became evident that hackathons were only one facet of a much deeper problem. Students needed scholarships, internships, fellowships, resume guidance, verified certificates, and peer collaboration.
              </p>
              <p>
                Today, OpportunityX encompasses live products including **Radar** (discovery), **Resume** (ATS builder), **Verification** (tamper-proof credentials), and the upcoming **Learning Hub**, **Arena**, and **Freelancing** platforms.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/founder"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-brand hover:underline underline-offset-4"
              >
                <UserCheck className="h-4 w-4" />
                <span>Read the Founder's Full Story</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </section>

          {/* Values Grid */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Our Operating Principles
              </h2>
              <p className="text-sm text-text-secondary">
                How we make product decisions, ship features, and serve the global builder network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 shadow-xs"
                >
                  <div className="inline-flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated font-mono text-xs font-bold text-accent-brand border border-border-subtle">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-text-primary">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="rounded-3xl border border-accent-brand/30 bg-gradient-to-br from-surface-elevated to-surface p-8 sm:p-12 text-center space-y-6 shadow-elevated">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-subtle text-accent-brand">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Join the OpportunityX Network
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Start discovering high-impact hackathons, building your ATS resume, and collaborating with fellow developers today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
              <a
                href="https://radar.opportunityx.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-xs"
              >
                <span>Launch Radar Engine</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="https://discord.gg/qSjCRDTKN5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors shadow-xs"
              >
                <span>Join Discord Community</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};
