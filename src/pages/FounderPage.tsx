import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Zap,
  Terminal,
  Server,
  Database,
  Sparkles,
  Globe,
  Mail,
  ArrowUpRight,
  User,
  Layers,
  ShieldCheck,
  Compass,
  FileText,
  Cpu,
  Lock,
  Radio,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';
import { FOUNDER_INFO } from '@/data/contactData';

// Custom Social Brand Icons
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GitHubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const FounderPage: React.FC = () => {
  // Systems & Products engineered by Anurag in E:\OpportunityX
  const builtProjects = [
    {
      id: 'radar',
      title: 'OpportunityX Radar',
      tagline: 'Real-Time Opportunity Discovery Engine',
      category: 'Flagship Discovery',
      status: 'Live & Operational',
      statusType: 'live',
      description:
        'A high-performance automated ingestion engine indexing hackathons, fellowships, internships, scholarships, and open-source grants across 100+ international organizers into a unified discovery stream.',
      tech: ['React 19', 'TypeScript', 'FastAPI', 'Vite', 'Firebase', 'Tailwind CSS'],
      link: 'https://radar.opportunityx.co.in',
      isExternal: true,
      icon: Compass,
      accentColor: 'text-accent-brand',
      bgGlow: 'from-accent-brand/15 to-accent-brand/5',
    },
    {
      id: 'resume',
      title: 'OpportunityX Resume',
      tagline: '100% Free Privacy-First ATS Resume Architect',
      category: 'Career Intelligence',
      status: 'Live & Operational',
      statusType: 'live',
      description:
        'Engineered for students and developers to create pixel-perfect ATS-compliant resumes with zero watermarks, AI bullet-point scoring, GitHub repository sync, and instant A4 PDF export.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'AI Engine', 'PDF Generation'],
      link: 'https://resume.opportunityx.co.in',
      isExternal: true,
      icon: FileText,
      accentColor: 'text-blue-400',
      bgGlow: 'from-blue-500/15 to-blue-500/5',
    },
    {
      id: 'verify',
      title: 'OpportunityX Verification',
      tagline: 'Public Tamper-Proof Credential Ledger',
      category: 'Credentials & Trust',
      status: 'Live & Operational',
      statusType: 'live',
      description:
        'A public verification portal engineered for recruiters, colleges, and members to authenticate OpportunityX certificates, fellowship records, course completions, and association IDs instantly via QR or direct lookup.',
      tech: ['React', 'TypeScript', 'Cryptographic Verification', 'Firestore', 'Tailwind'],
      link: 'https://verify.opportunityx.co.in',
      isExternal: true,
      icon: ShieldCheck,
      accentColor: 'text-emerald-400',
      bgGlow: 'from-emerald-500/15 to-emerald-500/5',
    },
    {
      id: 'orivex',
      title: 'Orivex Ecosystem',
      tagline: 'High-Speed Personal Device Management & Telemetry',
      category: 'Systems & Security',
      status: 'Production Hardened',
      statusType: 'live',
      description:
        'A comprehensive multi-device management ecosystem connecting Windows PCs, Android, and tablets with direct TLS-encrypted LAN file transfer (port 8443), real-time presence telemetry, hardware monitoring, and DPAPI-secured defensive state machines.',
      tech: ['.NET 8 Worker Services', 'WPF Desktop', 'C++ Win32', 'FastAPI', 'PostgreSQL', 'WebSockets'],
      link: null,
      isExternal: false,
      icon: Cpu,
      accentColor: 'text-violet-400',
      bgGlow: 'from-violet-500/15 to-violet-500/5',
    },
    {
      id: 'career',
      title: 'OpportunityX Career Path & Learn',
      tagline: 'Interactive 15+ Domain Engineering Tracks',
      category: 'Education & Roadmap',
      status: 'Active Priority',
      statusType: 'dev',
      description:
        'Interactive developer curriculum offering structured engineering roadmaps, compensation benchmarks, domain milestone quests, and AI-driven skill path progression for emerging engineers.',
      tech: ['React', 'TypeScript', 'Interactive Graph Visualizer', 'Vite', 'Tailwind CSS'],
      link: '/ecosystem#career',
      isExternal: false,
      icon: Layers,
      accentColor: 'text-amber-400',
      bgGlow: 'from-amber-500/15 to-amber-500/5',
    },
    {
      id: 'arena',
      title: 'OpportunityX Arena & Freelance',
      tagline: 'Competitive Coding Sprints & Verified Bounties',
      category: 'Competitions & Work',
      status: 'In Roadmap',
      statusType: 'roadmap',
      description:
        'Competitive developer arena hosting timed algorithmic challenges, virtual hackathon staging, verified student technical bounties, and collaborative client contracts.',
      tech: ['React', 'TypeScript', 'Automated Test Runner', 'WebSocket Relays', 'FastAPI'],
      link: '/ecosystem#arena',
      isExternal: false,
      icon: Zap,
      accentColor: 'text-rose-400',
      bgGlow: 'from-rose-500/15 to-rose-500/5',
    },
  ];

  // Tech stack categorized by domains
  const techCategories = [
    {
      title: 'Frontend & UI Engineering',
      skills: [
        { name: 'React 19', icon: Code, color: '#61DAFB' },
        { name: 'TypeScript', icon: Terminal, color: '#3178C6' },
        { name: 'Vite', icon: Zap, color: '#646CFF' },
        { name: 'Tailwind CSS', icon: Sparkles, color: '#38BDF8' },
        { name: 'WPF & XAML', icon: Cpu, color: '#A855F7' },
      ],
    },
    {
      title: 'Backend & Systems Architecture',
      skills: [
        { name: 'FastAPI (Python)', icon: Server, color: '#009688' },
        { name: '.NET 8 Services', icon: Cpu, color: '#512BD4' },
        { name: 'Node.js', icon: Terminal, color: '#22C55E' },
        { name: 'C++ Win32', icon: Code, color: '#00599C' },
        { name: 'WebSockets & Async', icon: Radio, color: '#EC4899' },
      ],
    },
    {
      title: 'Databases, Cloud & Security',
      skills: [
        { name: 'PostgreSQL', icon: Database, color: '#336791' },
        { name: 'Firebase & Firestore', icon: Database, color: '#FFCA28' },
        { name: 'SQLite', icon: Database, color: '#003B57' },
        { name: 'ECDSA & DPAPI', icon: Lock, color: '#10B981' },
        { name: 'Git & GitHub Actions', icon: FolderGit2, color: '#F8FAFC' },
      ],
    },
  ];

  // Milestones
  const timeline = [
    {
      step: '01',
      period: 'Phase 1',
      title: 'Programming Foundations & First Tooling',
      desc: 'Built core foundations across Python, algorithms, system architecture, command-line utilities, and distributed backend networks.',
    },
    {
      step: '02',
      period: 'The Spark',
      title: 'Telegram Hackathon Alert Bot',
      desc: 'Observed that students were constantly missing hackathons due to fragmented channels. Engineered an automated scraper and Telegram bot to deliver instant alerts.',
    },
    {
      step: '03',
      period: 'Milestone 03',
      title: 'Conceiving the OpportunityX Vision',
      desc: 'Recognized that the discovery problem spanned far beyond hackathons to internships, grants, scholarships, and open source. Formulated the multi-product Career OS architecture.',
    },
    {
      step: '04',
      period: 'Milestone 04',
      title: 'OpportunityX Radar & Public Alpha',
      desc: 'Built and shipped OpportunityX Radar (radar.opportunityx.co.in) featuring real-time verified indexing, categorized search, and direct application routing.',
    },
    {
      step: '05',
      period: 'Milestone 05',
      title: 'Credential Verification & Resume Builder',
      desc: 'Shipped OpportunityX Verify (tamper-proof certificate ledger) and OpportunityX Resume (100% free, privacy-first ATS resume builder with zero watermarks).',
    },
    {
      step: '06',
      period: 'Milestone 06',
      title: 'Orivex Ecosystem & Full Launch',
      desc: 'Engineered Orivex personal device ecosystem (.NET 8 / C++ / FastAPI) and launched the finalized OpportunityX ecosystem in public.',
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Meet the Founder — Anurag Verma"
        description="Meet Anurag Verma, the founder and systems architect behind OpportunityX and Orivex. Building student opportunity discovery, ATS career tooling, and distributed systems."
        canonicalPath="/founder"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* ================================================================ */}
          {/* 1. HERO SPOTLIGHT CARD */}
          {/* ================================================================ */}
          <section className="relative rounded-3xl border border-border-subtle bg-surface/80 p-6 sm:p-10 lg:p-12 shadow-elevated backdrop-blur-md overflow-hidden">
            {/* Ambient Background Aura */}
            <div
              className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-accent-brand/10 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent-brand/5 blur-3xl pointer-events-none -z-10"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text & Socials Area */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{FOUNDER_INFO.role}</span>
                </div>

                <div className="space-y-2">
                  <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
                    Meet the <span className="text-accent-brand">Founder</span>
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-bold text-text-secondary">
                    {FOUNDER_INFO.name}
                  </h2>
                </div>

                <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl">
                  {FOUNDER_INFO.tagline}
                </p>

                {/* Social Connect Icons */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
                  <a
                    href={FOUNDER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all hover:scale-105 shadow-xs"
                    title="LinkedIn"
                    aria-label="Anurag Verma on LinkedIn"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong hover:bg-surface-hover transition-all hover:scale-105 shadow-xs"
                    title="GitHub"
                    aria-label="Anurag Verma on GitHub"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong hover:bg-surface-hover transition-all hover:scale-105 shadow-xs"
                    title="X (Twitter)"
                    aria-label="Anurag Verma on X (Twitter)"
                  >
                    <XIcon className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={FOUNDER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#e1306c] hover:border-[#e1306c]/50 hover:bg-[#e1306c]/10 transition-all hover:scale-105 shadow-xs"
                    title="Instagram"
                    aria-label="Anurag Verma on Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-subtle transition-all hover:scale-105 shadow-xs"
                    title="Personal Portfolio"
                    aria-label="Anurag Verma Portfolio"
                  >
                    <Globe className="h-4 w-4" />
                  </a>

                  <a
                    href={`mailto:${FOUNDER_INFO.email}`}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-surface-elevated border border-border-subtle text-text-secondary hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-subtle transition-all hover:scale-105 shadow-xs"
                    title="Direct Email"
                    aria-label="Email Anurag Verma"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Portrait Image Area */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-border-subtle group-hover:border-accent-brand/40 shadow-2xl bg-surface-elevated relative z-10 transition-all duration-300 group-hover:scale-[1.01]">
                    <img
                      src={FOUNDER_INFO.avatarUrl}
                      alt={FOUNDER_INFO.name}
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent-brand/20 to-accent-brand/5 rounded-3xl blur-xl -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </section>

          {/* ================================================================ */}
          {/* 2. PHILOSOPHY & ABOUT CARDS */}
          {/* ================================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* About Anurag */}
            <section className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-accent-subtle text-accent-brand">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="type-h3 text-xl font-bold text-text-primary">About Anurag</h3>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
                <p>
                  I am Anurag Verma, a Full Stack Engineer and the solo creator behind OpportunityX. Driven by curiosity and a commitment to high-craft engineering, I design and build production software that eliminates systemic barriers for students and early-career builders.
                </p>
                <p>
                  From full-stack web platforms and automated data pipelines to low-level Windows worker services and TLS transport protocols, I enjoy crafting complete, robust software systems from end to end.
                </p>
                <p>
                  I believe in writing clean, maintainable architecture, shipping transparently in public, and building lasting platforms that provide immediate, tangible utility.
                </p>
              </div>
            </section>

            {/* Why OpportunityX Exists */}
            <section className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-accent-subtle text-accent-brand">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="type-h3 text-xl font-bold text-text-primary">Why I Built OpportunityX</h3>
                </div>
                <div className="space-y-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
                  <p>
                    Throughout college, I noticed that thousands of talented students miss life-changing hackathons, internships, fellowships, and scholarships simply because opportunities are scattered across hundreds of disconnected channels.
                  </p>
                  <p>
                    What started as a simple Telegram hackathon alert bot gradually evolved into a unified Career Operating System — connecting real-time opportunity discovery with ATS resume architecture, credential verification, and developer learning tracks.
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-surface-elevated border border-border-subtle p-3.5 text-center mt-4">
                <p className="text-xs font-mono font-bold text-accent-brand uppercase tracking-wider">
                  Discover. Build. Verify. Grow.
                </p>
              </div>
            </section>
          </div>

          {/* ================================================================ */}
          {/* 3. SYSTEMS & PROJECTS BUILT BY ANURAG */}
          {/* ================================================================ */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-accent-brand text-xs font-mono font-semibold tracking-wider uppercase mb-1">
                <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Production Portfolio</span>
              </div>
              <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Systems & Applications Engineered
              </h2>
              <p className="text-sm text-text-secondary">
                Production platforms, developer utilities, and distributed desktop services built and maintained across the OpportunityX ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {builtProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group rounded-2xl border border-border-subtle bg-surface p-5 sm:p-6 flex flex-col justify-between hover:border-accent-brand/40 hover:bg-surface-hover/60 transition-all duration-200 shadow-xs relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      {/* Card Header: Icon + Category + Status */}
                      <div className="flex items-center justify-between gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle ${project.accentColor} group-hover:scale-105 transition-transform`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <span
                          className={`inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                            project.statusType === 'live'
                              ? 'bg-emerald-500/10 text-emerald-500'
                              : project.statusType === 'dev'
                              ? 'bg-blue-500/10 text-blue-400'
                              : 'bg-surface-elevated text-text-muted border border-border-subtle'
                          }`}
                        >
                          {project.statusType === 'live' && (
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          )}
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-brand transition-colors mt-0.5">
                          {project.title}
                        </h3>
                        <p className="text-xs font-medium text-text-secondary mt-1">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border-subtle"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="pt-4 mt-5 border-t border-border-subtle">
                      {project.link ? (
                        project.isExternal ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-brand hover:text-accent-hover transition-colors group/link"
                          >
                            <span>Launch Live Application</span>
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            to={project.link}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-brand hover:text-accent-hover transition-colors group/link"
                          >
                            <span>Explore Platform Details</span>
                            <ArrowUpRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </Link>
                        )
                      ) : (
                        <span className="text-xs font-mono text-text-muted">
                          Under Active System Development
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ================================================================ */}
          {/* 4. TECHNICAL MASTERY & CORE STACK */}
          {/* ================================================================ */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Technical Stack & Architecture
              </h2>
              <p className="text-sm text-text-secondary">
                Languages, frameworks, database architectures, and protocols powering the OpportunityX ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-2xl border border-border-subtle bg-surface p-5 sm:p-6 space-y-4 shadow-xs"
                >
                  <h3 className="text-sm font-mono font-bold text-text-primary uppercase tracking-wider border-b border-border-subtle pb-3">
                    {cat.title}
                  </h3>
                  <div className="space-y-2.5">
                    {cat.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-surface-elevated border border-border-subtle hover:border-border-strong transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className="h-8 w-8 rounded-lg flex items-center justify-center"
                              style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
                            >
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <span className="text-xs font-semibold text-text-primary">
                              {skill.name}
                            </span>
                          </div>
                          <CheckCircle2 className="h-3.5 w-3.5 text-accent-brand opacity-60" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================ */}
          {/* 5. JOURNEY TIMELINE */}
          {/* ================================================================ */}
          <section className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <h2 className="type-h2 text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Engineering Journey & Milestones
              </h2>
              <p className="text-sm text-text-secondary">
                From a solo hackathon alert script to a multi-product student Career OS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 relative hover:border-border-strong hover:bg-surface-hover/50 transition-all duration-200 shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent-brand px-2.5 py-0.5 rounded-md bg-accent-subtle">
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-text-muted">#{item.step}</span>
                  </div>
                  <h3 className="text-base font-bold text-text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ================================================================ */}
          {/* 6. FOUNDER COLLABORATION / REACH OUT */}
          {/* ================================================================ */}
          <section className="rounded-3xl border border-accent-brand/30 bg-gradient-to-br from-surface-elevated to-surface p-8 sm:p-12 text-center space-y-6 shadow-elevated">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-subtle text-accent-brand">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Let's build something meaningful together.
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you want to partner on a hackathon, discuss architecture, or exchange ideas, feel free to reach out directly to Anurag.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring shadow-xs"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact Desk</span>
              </Link>

              <a
                href={FOUNDER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-[#0077b5] hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring shadow-xs"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring shadow-xs"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};
