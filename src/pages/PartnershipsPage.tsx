import React from 'react';
import { Link } from 'react-router-dom';
import {
  Handshake,
  Compass,
  ShieldCheck,
  Zap,
  ArrowRight,
  Mail,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

export const PartnershipsPage: React.FC = () => {
  const offerings = [
    {
      icon: Compass,
      title: 'Global Hackathon Indexing on Radar',
      desc: 'Get your university or club hackathon featured on OpportunityX Radar, reaching thousands of verified student developers actively looking for competitions.',
    },
    {
      icon: ShieldCheck,
      title: 'Tamper-Proof Credential Verification',
      desc: 'Issue official OpportunityX verified certificates and badges for your winners, participants, and club executive boards at verify.opportunityx.co.in.',
    },
    {
      icon: Zap,
      title: 'Resume Review & Workshop Tooling',
      desc: 'Equip your members with free ATS resume building sessions and direct AI bullet-point scoring through OpportunityX Resume.',
    },
    {
      icon: Building2,
      title: 'Direct Talent Discovery for Recruiters',
      desc: 'Connect with verified top-performing hackathon participants, open-source contributors, and disciplined builders across our network.',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Partnerships & University Clubs — OpportunityX"
        description="Partner with OpportunityX to co-host hackathons, index student competitions on Radar, and issue verified credentials."
        canonicalPath="/partnerships"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <Handshake className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Institutional Alliances</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Partner with the <span className="text-accent-brand">OpportunityX Ecosystem</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              We collaborate with collegiate tech clubs, student societies, global hackathon organizers, and developer communities to accelerate student talent discovery.
            </p>
          </div>

          {/* Partnership Offerings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-border-subtle bg-surface p-7 sm:p-8 space-y-4 hover:border-accent-brand/40 transition-all shadow-xs"
                >
                  <div className="h-12 w-12 rounded-2xl bg-surface-elevated border border-border-subtle text-accent-brand flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Who We Partner With */}
          <section className="rounded-3xl border border-border-subtle bg-surface/70 p-8 sm:p-10 space-y-6 shadow-xs">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-text-primary">Who We Collaborate With</h2>
              <p className="text-sm text-text-secondary">
                Tailored collaboration models designed for technical organizations of all sizes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-text-primary text-base">
                  <GraduationCap className="h-5 w-5 text-accent-brand" />
                  <span>College Societies & Clubs</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Tech societies (GDSC, ACM, IEEE, Web3 student clubs) get verified listing on Radar and free toolkits for member workshops.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-text-primary text-base">
                  <Zap className="h-5 w-5 text-blue-400" />
                  <span>Hackathon Organizers</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Direct submission routing, automated deadline alerts, and verified participant certificates via QR verification.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 font-bold text-text-primary text-base">
                  <Building2 className="h-5 w-5 text-emerald-400" />
                  <span>Startups & Recruiters</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Early access to verified builder portfolios, hackathon winners, and high-signal student candidates.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Desk */}
          <section className="rounded-3xl border border-accent-brand/30 bg-gradient-to-br from-surface-elevated to-surface p-8 sm:p-12 text-center space-y-6 shadow-elevated">
            <div className="max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Let's explore a partnership
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Reach out to our partnerships team with your club or organization details to get started.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:partnerships@opportunityx.co.in?subject=Partnership%20Inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all shadow-xs"
              >
                <Mail className="h-4 w-4" />
                <span>partnerships@opportunityx.co.in</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors shadow-xs"
              >
                <span>Open Contact Desk</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};
