import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ArrowRight,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

export const ResearchPage: React.FC = () => {
  const papers = [
    {
      title: 'The Student Opportunity Discovery Problem: A Systems Analysis',
      category: 'Ecosystem Whitepaper',
      date: 'September 2026',
      readTime: '8 min read',
      summary:
        'Why ambitious students miss life-changing hackathons, fellowships, and internships due to discovery fragmentation, and how centralized ingestion engines level the playing field.',
      link: '/blogs/students-dont-have-an-opportunity-problem-they-have-a-discovery-problem',
    },
    {
      title: 'ATS Resume Parsing Ergonomics for Early-Career Engineers',
      category: 'Career Intelligence',
      date: 'August 2026',
      readTime: '6 min read',
      summary:
        'An empirical evaluation of parser failure modes in modern Applicant Tracking Systems and why single-column machine-readable typography maximizes interview callbacks.',
      link: '/blogs/how-to-build-a-resume-when-you-have-little-or-no-experience',
    },
    {
      title: 'Cryptographic Credential Verification in Decentralized Student Ecosystems',
      category: 'Security & Trust',
      date: 'August 2026',
      readTime: '5 min read',
      summary:
        'Architecting a tamper-proof verification ledger for university clubs and hackathon organizers to eliminate fraudulent certificate claims.',
      link: '/blogs/from-a-hackathon-alert-bot-to-opportunityx',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Research & Case Studies — OpportunityX"
        description="Explore technical research, architecture whitepapers, and data-driven insights from the OpportunityX ecosystem."
        canonicalPath="/research"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Technical Research</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Research & <span className="text-accent-brand">Case Studies</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              In-depth systems analyses, parser evaluations, and career engineering whitepapers published by the OpportunityX architecture team.
            </p>
          </div>

          {/* Research List */}
          <div className="space-y-6 max-w-4xl">
            {papers.map((paper, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-accent-brand/40 transition-all shadow-xs"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-accent-subtle text-accent-brand">
                      {paper.category}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted">
                      {paper.date} • {paper.readTime}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-text-primary">
                    <Link to={paper.link} className="hover:text-accent-brand transition-colors">
                      {paper.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {paper.summary}
                  </p>
                </div>

                <Link
                  to={paper.link}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-surface-elevated border border-border-subtle text-xs font-semibold text-text-primary hover:text-accent-brand hover:border-accent-brand/50 transition-all shrink-0 shadow-xs"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Editorial CTA */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 sm:p-10 text-center space-y-4 max-w-3xl mx-auto shadow-xs">
            <h3 className="text-xl font-bold text-text-primary">Explore our Full Editorial Hub</h3>
            <p className="text-xs sm:text-sm text-text-secondary max-w-lg mx-auto">
              Read all technical guides, student playbooks, and architectural stories in the OpportunityX Editorial Hub.
            </p>
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-5 py-2.5 text-xs font-semibold text-white hover:bg-accent-hover transition-all shadow-xs"
            >
              <span>View All Articles & Guides</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};
