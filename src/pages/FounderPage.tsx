import React from 'react';
import { Link } from 'react-router-dom';
import {
  Code,
  Zap,
  Terminal,
  Server,
  Flame,
  Database,
  Paintbrush,
  Sparkles,
  Network,
  Globe,
  Mail,
  ArrowRight,
  User,
  Layers,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';
import { FOUNDER_INFO } from '@/data/contactData';

// Custom Brand SVG Icons
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
  const techStack = [
    { name: 'React', icon: Code, color: '#61DAFB' },
    { name: 'Vite', icon: Zap, color: '#646CFF' },
    { name: 'TypeScript', icon: Terminal, color: '#3178C6' },
    { name: 'FastAPI', icon: Server, color: '#009688' },
    { name: 'Firebase', icon: Flame, color: '#FFCA28' },
    { name: 'Firestore', icon: Database, color: '#FFCA28' },
    { name: 'Tailwind CSS', icon: Paintbrush, color: '#38BDF8' },
    { name: 'AI Integration', icon: Sparkles, color: '#F59E0B' },
    { name: 'REST APIs', icon: Network, color: '#10B981' },
    { name: 'GitHub', icon: Globe, color: '#F8FAFC' },
  ];

  const timeline = [
    {
      step: '01',
      title: 'Programming Foundations',
      desc: 'Began building coding foundations, working with Python, algorithms, system architecture, and modern web protocols.',
    },
    {
      step: '02',
      title: 'First Projects & Tooling',
      desc: 'Developed interactive command-line tooling, high-performance responsive frontend frameworks, and distributed web modules.',
    },
    {
      step: '03',
      title: 'Full-Stack & Client Solutions',
      desc: 'Delivered bespoke full-stack applications, intelligent automation pipelines, and developer workflows for clients worldwide.',
    },
    {
      step: '04',
      title: 'Founded OpportunityX',
      desc: 'Envisioned a streamlined ecosystem to consolidate internships, hackathons, open-source grants, and scholarships for student builders.',
    },
    {
      step: '05',
      title: 'OpportunityX Radar & Public Alpha',
      desc: 'Shipped OpportunityX Radar, enabling fast real-time opportunity indexing, skill matching, and unified builder collaboration.',
    },
    {
      step: '06',
      title: 'Ecosystem Expansion',
      desc: 'Expanding the parent platform to encompass Career Planning, Portfolio Validation, Resume intelligence, and developer ecosystems.',
    },
  ];

  const currentProjects = [
    {
      title: 'OpportunityX Ecosystem',
      subtitle: 'Student & Builder Career Operating System',
      status: 'Active',
      description:
        'AI-powered platform unifying hackathons, scholarships, internships, and open-source grants with skill discovery and team matchmaking.',
      link: '/',
    },
    {
      title: 'Neev',
      subtitle: 'Personal AI Operating System',
      status: 'In Development',
      description:
        'An intelligent workspace engineered to streamline context aggregation, local note tasks, and personalized builder productivity.',
      link: null,
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 bg-canvas">
      <SeoManager
        title="Founder"
        description="Meet Anurag Verma, Founder of OpportunityX, building the unified technology ecosystem for student discovery, developer tooling, and career growth."
        canonicalPath="/founder"
      />

      <Container size="lg">
        <div className="space-y-16 lg:space-y-20">
          {/* Hero Section */}
          <section className="rounded-3xl border border-border-subtle bg-surface/70 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-md relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text Area */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {FOUNDER_INFO.role}
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
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={FOUNDER_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all hover:scale-105"
                    title="LinkedIn"
                    aria-label="Anurag Verma on LinkedIn"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-surface-hover transition-all hover:scale-105"
                    title="GitHub"
                    aria-label="Anurag Verma on GitHub"
                  >
                    <GitHubIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.xUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-text-primary/50 hover:bg-surface-hover transition-all hover:scale-105"
                    title="X (Twitter)"
                    aria-label="Anurag Verma on X (Twitter)"
                  >
                    <XIcon className="h-3.5 w-3.5" />
                  </a>

                  <a
                    href={FOUNDER_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#e1306c] hover:border-[#e1306c]/50 hover:bg-[#e1306c]/10 transition-all hover:scale-105"
                    title="Instagram"
                    aria-label="Anurag Verma on Instagram"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={FOUNDER_INFO.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-subtle transition-all hover:scale-105"
                    title="Personal Portfolio"
                    aria-label="Anurag Verma Portfolio"
                  >
                    <Globe className="h-4 w-4" />
                  </a>

                  <a
                    href={`mailto:${FOUNDER_INFO.email}`}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-elevated border border-border-subtle text-text-secondary hover:text-accent-brand hover:border-accent-brand/50 hover:bg-accent-subtle transition-all hover:scale-105"
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
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-2 border-accent-brand/30 shadow-2xl bg-surface-elevated relative z-10 transition-transform duration-300 group-hover:scale-[1.02]">
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

          {/* About Me & Why I Built OpportunityX */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Me */}
            <section className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-accent-subtle text-accent-brand">
                  <User className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="type-h3 text-xl font-bold text-text-primary">About Me</h3>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
                <p>
                  I am Anurag Verma, the founder of OpportunityX and a Full Stack Developer. Driven by curiosity and a passion for engineering, I build software solutions that address tangible bottlenecks in talent discovery and student career progression.
                </p>
                <p>
                  As an AI enthusiast, I design and program systems that blend modern UX ergonomics with intelligent backend services—helping student builders discover opportunities and collaborate without friction.
                </p>
                <p>
                  I believe in writing clean, maintainable architecture, shipping in public, and building lasting platforms that provide immediate utility to the developer community.
                </p>
              </div>
            </section>

            {/* Why I Built OpportunityX */}
            <section className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-accent-subtle text-accent-brand">
                  <Layers className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="type-h3 text-xl font-bold text-text-primary">Why I Built OpportunityX</h3>
              </div>
              <div className="space-y-3.5 text-sm sm:text-base text-text-secondary leading-relaxed">
                <p>
                  Throughout my academic and technical journey, I observed that thousands of ambitious students miss crucial hackathon registrations, internships, and fellowships simply because opportunities are scattered across fragmented channels.
                </p>
                <p>
                  I created OpportunityX to centralize discovery into a single authoritative stream while giving builders the tools to match skills, assemble hackathon teams, and prepare effectively.
                </p>
                <div className="rounded-xl bg-surface-elevated border border-border-subtle p-4 text-center mt-4">
                  <p className="text-sm font-mono font-bold text-accent-brand uppercase tracking-wider">
                    Discover. Apply. Grow.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Tech Stack */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="type-h2 text-2xl font-bold text-text-primary">Core Tech Stack</h3>
              <p className="text-sm text-text-muted">Technologies powering the OpportunityX ecosystem architecture</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {techStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-4 rounded-xl border border-border-subtle bg-surface hover:border-accent-brand/40 hover:bg-surface-hover transition-all text-center group"
                  >
                    <div
                      className="h-10 w-10 rounded-lg flex items-center justify-center mb-2 transition-transform group-hover:scale-110"
                      style={{ color: tech.color, backgroundColor: `${tech.color}15` }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-text-primary">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Journey Timeline */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="type-h2 text-2xl font-bold text-text-primary">Journey Timeline</h3>
              <p className="text-sm text-text-muted">Milestones along the path of building and shipping</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 space-y-3 relative hover:border-border-strong transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-accent-brand px-2 py-0.5 rounded bg-accent-subtle border border-accent-glow">
                      Milestone {item.step}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-text-primary">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Current Projects */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h3 className="type-h2 text-2xl font-bold text-text-primary">Active Systems</h3>
              <p className="text-sm text-text-muted">Platforms currently under active development and operation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProjects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-accent-brand/30 transition-all"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-lg font-bold text-text-primary">{project.title}</h4>
                      <span
                        className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded ${
                          project.status === 'Active'
                            ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                            : 'bg-accent-subtle text-accent-brand border border-accent-glow'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-text-muted">{project.subtitle}</p>
                    <p className="text-sm text-text-secondary leading-relaxed pt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-subtle">
                    {project.link ? (
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-brand hover:underline underline-offset-2"
                      >
                        <span>Explore Platform</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    ) : (
                      <span className="text-xs font-mono text-text-muted">Coming Soon</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Connect CTA */}
          <section className="rounded-3xl border border-accent-brand/30 bg-gradient-to-br from-surface-elevated to-surface p-8 sm:p-12 text-center space-y-6">
            <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-accent-brand">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>

            <div className="max-w-xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Let's build something meaningful together.
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Whether you want to partner on a hackathon, collaborate on architecture, or exchange ideas, feel free to reach out directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 max-w-lg mx-auto">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Contact Desk</span>
              </Link>

              <a
                href={FOUNDER_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-[#0077b5] hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={FOUNDER_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-surface-elevated border border-border-subtle px-5 py-3 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
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
