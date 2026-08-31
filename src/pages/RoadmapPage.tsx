import React, { useState } from 'react';
import {
  Sparkles,
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

interface RoadmapItem {
  id: string;
  title: string;
  quarter: string;
  phase: string;
  status: 'LIVE' | 'IN_DEV' | 'PLANNED';
  category: string;
  description: string;
  milestones: string[];
  link?: string;
}

export const RoadmapPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'LIVE' | 'IN_DEV' | 'PLANNED'>('ALL');

  const roadmapItems: RoadmapItem[] = [
    {
      id: 'road-1',
      title: 'OpportunityX Radar v2.1',
      quarter: 'Q1 - Q2 2026',
      phase: 'Phase 1 — Discovery Foundation',
      status: 'LIVE',
      category: 'Flagship Discovery',
      description:
        'Real-time automated ingestion pipeline indexing 100+ verified hackathons, fellowships, internships, and grants with localized timezone countdowns.',
      milestones: [
        'Global organizer indexing pipeline',
        'Direct application routing',
        'Granular category & eligibility filters',
        'Production release on radar.opportunityx.co.in',
      ],
      link: 'https://radar.opportunityx.co.in',
    },
    {
      id: 'road-2',
      title: 'OpportunityX Resume Builder v2.0',
      quarter: 'Q3 2026',
      phase: 'Phase 2 — Career Intelligence',
      status: 'LIVE',
      category: 'Career Tools',
      description:
        '100% Free, privacy-first ATS resume architect with AI bullet-point scoring, GitHub repo sync, and instant watermark-free A4 PDF export.',
      milestones: [
        'Semantic single-column ATS engine',
        'Live typography & spacing customizer',
        'Zero watermark A4 PDF export',
        'Public launch on resume.opportunityx.co.in',
      ],
      link: 'https://resume.opportunityx.co.in',
    },
    {
      id: 'road-3',
      title: 'OpportunityX Verification Ledger',
      quarter: 'Q3 2026',
      phase: 'Phase 2 — Trust & Credentials',
      status: 'LIVE',
      category: 'Verification & Trust',
      description:
        'Tamper-proof public verification portal for authenticating OpportunityX certificates, fellowship awards, and verified club credentials via QR lookup.',
      milestones: [
        'Cryptographic certificate ID generation',
        'Public recruiter verification portal',
        'Club and association badge ledger',
        'Public launch on verify.opportunityx.co.in',
      ],
      link: 'https://verify.opportunityx.co.in',
    },
    {
      id: 'road-4',
      title: 'OpportunityX Learning Hub & Roadmaps',
      quarter: 'Q4 2026',
      phase: 'Phase 3 — Developer Education',
      status: 'IN_DEV',
      category: 'Engineering Tracks',
      description:
        'Interactive 15+ engineering domain tracks with guided milestones, compensation benchmarks, curated resources, and skill progression quests.',
      milestones: [
        'Interactive DAG roadmap visualizer',
        'Beginner to Advanced progression tracks',
        'Verified project blueprint checklists',
        'Community peer review integration',
      ],
    },
    {
      id: 'road-5',
      title: 'Orivex Secure Device Ecosystem (v1.0)',
      quarter: 'Q4 2026',
      phase: 'Phase 3 — Systems Architecture',
      status: 'IN_DEV',
      category: 'Systems & Security',
      description:
        'High-performance personal device management connecting Windows PCs, Android & tablets with direct TLS LAN file transfer (port 8443) and telemetry.',
      milestones: [
        '.NET 8 Worker Services & WPF Desktop Shell',
        'Direct TLS 1.3 encrypted LAN streaming',
        'DPAPI secured defensive state machine',
        'Real-time CPU/RAM hardware health telemetry',
      ],
    },
    {
      id: 'road-6',
      title: 'OpportunityX Arena & Competitions',
      quarter: 'Q1 2027',
      phase: 'Phase 4 — Competitive Sprints',
      status: 'PLANNED',
      category: 'Competitive Arena',
      description:
        'Timed algorithmic coding sprints, virtual collegiate hackathons, live leaderboards, and collaborative team showdowns.',
      milestones: [
        'In-browser test case execution runner',
        'Real-time WebSocket leaderboard telemetry',
        'Virtual hackathon staging arenas',
        'Automated code quality evaluation',
      ],
    },
    {
      id: 'road-7',
      title: 'OpportunityX Freelance & Bounties',
      quarter: 'Q2 2027',
      phase: 'Phase 5 — Work & Escrow',
      status: 'PLANNED',
      category: 'Student Economy',
      description:
        'Verified technical micro-bounties and client contract marketplace with student-friendly escrow protection.',
      milestones: [
        'Verified student builder profile matching',
        'Escrow contract milestone verification',
        'Direct startup task assignment',
        'Reputation & skill verification badges',
      ],
    },
  ];

  const filteredItems = roadmapItems.filter(
    (item) => filter === 'ALL' || item.status === filter
  );

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Product Roadmap & Milestones — OpportunityX"
        description="Explore the official OpportunityX development roadmap, feature milestones, and upcoming platforms across our career technology ecosystem."
        canonicalPath="/roadmap"
      />

      <Container size="lg">
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Public Product Roadmap</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Ecosystem Roadmap & <span className="text-accent-brand">Milestones</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              We believe in building in public. Here is our strategic timeline, showing live platforms, features currently under active development, and upcoming horizons.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Milestones', value: 'ALL' },
              { label: 'Live Systems (3)', value: 'LIVE' },
              { label: 'In Active Development (2)', value: 'IN_DEV' },
              { label: 'Planned Horizons (2)', value: 'PLANNED' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab.value
                    ? 'bg-accent-brand text-white shadow-xs'
                    : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Roadmap Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 flex flex-col justify-between hover:border-accent-brand/40 transition-all shadow-xs space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-mono font-semibold text-accent-brand px-2.5 py-0.5 rounded-md bg-accent-subtle">
                      {item.quarter}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        item.status === 'LIVE'
                          ? 'bg-emerald-500/10 text-emerald-500'
                          : item.status === 'IN_DEV'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-surface-elevated text-text-muted border border-border-subtle'
                      }`}
                    >
                      {item.status === 'LIVE' && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />}
                      {item.status === 'LIVE' ? 'Live Platform' : item.status === 'IN_DEV' ? 'In Development' : 'Planned'}
                    </span>
                  </div>

                  {/* Title & Phase */}
                  <div>
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                      {item.phase}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>

                  {/* Milestones Checklist */}
                  <div className="space-y-2 pt-2 border-t border-border-subtle">
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {item.milestones.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-text-secondary">
                          <CheckCircle2
                            className={`h-3.5 w-3.5 shrink-0 ${
                              item.status === 'LIVE' ? 'text-emerald-500' : 'text-accent-brand opacity-70'
                            }`}
                          />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-border-subtle">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-brand hover:underline"
                    >
                      <span>Access Live Portal</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-text-muted inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>Release in Progress</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Build in Public Disclaimer */}
          <div className="rounded-2xl border border-border-subtle bg-surface-elevated/60 p-6 sm:p-8 space-y-2 text-xs sm:text-sm text-text-muted leading-relaxed">
            <h4 className="font-semibold text-text-primary flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent-brand" />
              <span>Continuous Public Evolution</span>
            </h4>
            <p>
              Roadmap priorities are dynamically shaped by direct feedback from student developers and university partners. Features and targeted release windows are subject to iterative architectural improvements.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
