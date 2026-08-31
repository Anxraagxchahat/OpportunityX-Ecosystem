import React from 'react';
import {
  Sparkles,
  Users,
  Code2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

export const CareersPage: React.FC = () => {
  const roles = [
    {
      title: 'Open Source Core Contributor',
      category: 'Engineering & Architecture',
      type: 'Open Source / Remote',
      desc: 'Help architect discovery scrapers, ATS parser algorithms, frontend React components, and local indexing pipelines for the OpportunityX ecosystem.',
      skills: ['React', 'TypeScript', 'FastAPI', 'Node.js', 'Git'],
      action: 'mailto:careers@opportunityx.co.in?subject=Core%20Contributor%20Application',
    },
    {
      title: 'Student Campus Ambassador Lead',
      category: 'Community & Growth',
      type: 'Campus Fellowship',
      desc: 'Represent OpportunityX at your college or university, organize local hackathon teams, host resume review workshops, and bridge student clubs.',
      skills: ['Community Leadership', 'Hackathon Organizing', 'Public Speaking'],
      action: 'mailto:partnerships@opportunityx.co.in?subject=Campus%20Ambassador%20Application',
    },
    {
      title: 'Technical Content & Career Writer',
      category: 'Editorial & Research',
      type: 'Contributor / Remote',
      desc: 'Author high-impact engineering guides, student opportunity breakdowns, hackathon playbooks, and tech career insights for the OpportunityX Editorial Hub.',
      skills: ['Technical Writing', 'Markdown', 'Career Research', 'SEO'],
      action: 'mailto:editorial@opportunityx.co.in?subject=Editorial%20Writer%20Application',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Careers & Builder Community — OpportunityX"
        description="Join OpportunityX as an open-source contributor, campus ambassador, or technical writer to empower student builders worldwide."
        canonicalPath="/careers"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Builder Network</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Build with Us at <span className="text-accent-brand">OpportunityX</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              We are a community-driven ecosystem building mission-critical tools for the next generation of software engineers and student builders.
            </p>
          </div>

          {/* Culture / Why Join */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-accent-subtle text-accent-brand flex items-center justify-center">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Real-World Proof of Work</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Work on production software used by thousands of students worldwide. Your pull requests and code impact are public and verified.
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-accent-subtle text-accent-brand flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Direct Founder Mentorship</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Collaborate directly with founder Anurag Verma on architectural decisions, feature scoping, and system scaling.
              </p>
            </div>

            <div className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 shadow-xs">
              <div className="h-10 w-10 rounded-xl bg-accent-subtle text-accent-brand flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-text-primary">Verified Credentials</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Core contributors and leads receive verified cryptographic credentials on OpportunityX Verify for their portfolio.
              </p>
            </div>
          </div>

          {/* Open Roles */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-text-primary">Open Opportunities</h2>
              <p className="text-sm text-text-secondary">
                Select a track below to apply or get involved with the core engineering group.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl">
              {roles.map((role, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-accent-brand/40 transition-all shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-accent-subtle text-accent-brand">
                        {role.category}
                      </span>
                      <span className="text-[11px] font-mono text-text-muted">
                        • {role.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-text-primary">{role.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
                      {role.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {role.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border-subtle"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={role.action}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-accent-brand text-xs font-semibold text-white hover:bg-accent-hover transition-all shrink-0 shadow-xs"
                  >
                    <span>Apply / Inquire</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Discord CTA */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 sm:p-10 text-center space-y-4 max-w-3xl mx-auto shadow-xs">
            <h3 className="text-xl font-bold text-text-primary">Want to contribute informally?</h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto">
              Join our centralized Discord builder community. Hop into #build-in-public or #code-reviews and share your ideas directly.
            </p>
            <a
              href="https://discord.gg/qSjCRDTKN5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-surface border border-border-subtle px-5 py-2.5 text-xs font-semibold text-text-primary hover:bg-surface-hover hover:border-border-strong transition-all shadow-xs"
            >
              <span>Join Discord Gateway</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </section>
        </div>
      </Container>
    </div>
  );
};
