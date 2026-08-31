import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '@/components/ui/BrandLogo';
import {
  Check,
  ArrowUp,
  ArrowUpRight,
  Copy,
  Globe,
} from 'lucide-react';
import { FOUNDER_INFO } from '@/data/contactData';

// Custom SVG Icons for Brands
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

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(FOUNDER_INFO.generalEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/80 backdrop-blur-xl relative overflow-hidden transition-colors duration-200">
      {/* Ambient background glow */}
      <div
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent-brand/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent-brand/5 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 1. Pre-Footer Live Network Bar */}
      <div className="border-b border-border-subtle bg-surface-elevated/40">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-2 text-text-secondary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono font-medium text-text-primary">Ecosystem:</span>
            <span className="text-emerald-400 font-medium">All Systems Operational</span>
            <span className="text-text-muted hidden sm:inline">•</span>
            <span className="text-text-muted hidden sm:inline font-mono">Radar v2.1 Live</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={FOUNDER_INFO.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-accent-brand hover:text-accent-hover transition-colors group text-xs"
            >
              <DiscordIcon className="h-3.5 w-3.5" />
              <span>Join Builder Discord</span>
              <ArrowUpRight className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Architecture Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* ============================================================ */}
          {/* Brand Header Column (Full width on mobile, 4 Cols on Desktop) */}
          {/* ============================================================ */}
          <div className="lg:col-span-4 space-y-4">
            {/* Top Row: Brand Logo + Social Channels directly beside it */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <BrandLogo variant="full" height={34} />

              <div className="flex items-center gap-1.5 pt-0.5">
                <a
                  href={FOUNDER_INFO.companyLinkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#0077b5] hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all shadow-xs"
                  title="LinkedIn"
                  aria-label="OpportunityX on LinkedIn"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong hover:bg-surface-hover transition-all shadow-xs"
                  title="GitHub"
                  aria-label="Anurag Verma on GitHub"
                >
                  <GitHubIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.companyInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#e1306c] hover:border-[#e1306c]/50 hover:bg-[#e1306c]/10 transition-all shadow-xs"
                  title="Instagram"
                  aria-label="OpportunityX on Instagram"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong hover:bg-surface-hover transition-all shadow-xs"
                  title="X (Twitter)"
                  aria-label="OpportunityX on X (Twitter)"
                >
                  <XIcon className="h-3 w-3" />
                </a>

                <a
                  href={FOUNDER_INFO.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#5865F2] hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all shadow-xs"
                  title="Discord"
                  aria-label="OpportunityX Discord"
                >
                  <DiscordIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-8 w-8 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-[#ff0000] hover:border-[#ff0000]/50 hover:bg-[#ff0000]/10 transition-all shadow-xs"
                  title="YouTube"
                  aria-label="OpportunityX on YouTube"
                >
                  <YoutubeIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              The unified student & builder Career Operating System. Connecting real-time opportunity discovery, ATS resume architecture, and verified credentials.
            </p>

            {/* Quick Inquiries Card */}
            <div className="rounded-xl border border-border-subtle bg-surface-elevated/60 p-3 sm:p-3.5 space-y-1.5 max-w-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-text-muted uppercase tracking-wider text-[10px]">
                  Direct Inquiries
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-accent-brand hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${FOUNDER_INFO.generalEmail}`}
                className="text-xs sm:text-sm font-mono font-semibold text-text-primary hover:text-accent-brand transition-colors block truncate"
              >
                {FOUNDER_INFO.generalEmail}
              </a>
            </div>
          </div>

          {/* ============================================================ */}
          {/* Navigation Links Grid: 2 COLUMNS ON MOBILE (Left & Right), 8 Cols on Desktop */}
          {/* ============================================================ */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-8">
            {/* Column A (Left on Mobile): Platforms & Tools */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
                Platforms
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://radar.opportunityx.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <span className="group-hover:text-accent-brand transition-colors">Radar</span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://verify.opportunityx.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <span className="group-hover:text-accent-brand transition-colors">Verify</span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://resume.opportunityx.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-text-secondary hover:text-text-primary transition-colors"
                  >
                    <span className="group-hover:text-accent-brand transition-colors">Resume</span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#ecosystem-overview"
                    className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors"
                  >
                    <span>Learning Hub</span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      Dev
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/#ecosystem-overview"
                    className="group inline-flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors"
                  >
                    <span>Arena</span>
                    <span className="text-[9px] font-mono font-semibold px-1.5 py-0.2 rounded bg-surface-elevated text-text-muted border border-border-subtle">
                      Soon
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    to="/downloads"
                    className="inline-block text-text-secondary hover:text-accent-brand transition-colors"
                  >
                    Apps & Downloads
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column B (Right on Mobile, Column 2 on Tablet/Desktop): Organization */}
            <div className="space-y-3.5">
              <h3 className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
                Organization
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                <li>
                  <Link to="/about" className="hover:text-accent-brand transition-colors block">
                    About & Mission
                  </Link>
                </li>
                <li>
                  <Link to="/founder" className="hover:text-accent-brand transition-colors font-semibold text-text-primary block">
                    Meet the Founder
                  </Link>
                </li>
                <li>
                  <Link to="/roadmap" className="hover:text-accent-brand transition-colors block">
                    Public Roadmap
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-accent-brand transition-colors block">
                    Builder Network
                  </Link>
                </li>
                <li>
                  <Link to="/partnerships" className="hover:text-accent-brand transition-colors block">
                    Clubs & Alliances
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="hover:text-accent-brand transition-colors block">
                    Press & Media Kit
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-accent-brand transition-colors block">
                    Contact Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column C (Spans column 1 on mobile lower row, Column 3 on Desktop): Resources */}
            <div className="space-y-3.5 col-span-2 md:col-span-1 border-t md:border-t-0 border-border-subtle pt-6 md:pt-0">
              <h3 className="text-xs font-mono font-bold text-text-primary uppercase tracking-wider">
                Resources & Help
              </h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs sm:text-sm text-text-secondary">
                <li>
                  <Link to="/blogs" className="hover:text-accent-brand transition-colors block">
                    Editorial Hub
                  </Link>
                </li>
                <li>
                  <Link to="/editorial/guides" className="hover:text-accent-brand transition-colors block">
                    Student Guides
                  </Link>
                </li>
                <li>
                  <Link to="/editorial/insights" className="hover:text-accent-brand transition-colors block">
                    Career Insights
                  </Link>
                </li>
                <li>
                  <Link to="/research" className="hover:text-accent-brand transition-colors block">
                    Research Papers
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-accent-brand transition-colors block">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/notifications" className="hover:text-accent-brand transition-colors block">
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. Bottom Legal & Attribution Bar */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted text-center sm:text-left">
          <div className="space-y-0.5">
            <p>
              © {currentYear} OpportunityX. Operating under Founder & Systems Architect{' '}
              <Link to="/founder" className="font-semibold text-text-secondary hover:text-accent-brand transition-colors">
                {FOUNDER_INFO.name}
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
              <Globe className="h-3.5 w-3.5 text-accent-brand" />
              <span>opportunityx.co.in</span>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong transition-all cursor-pointer shadow-xs active:scale-95 text-xs"
              title="Scroll to top of page"
            >
              <span>Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
