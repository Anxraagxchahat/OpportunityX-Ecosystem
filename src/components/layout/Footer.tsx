import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Container } from '@/components/ui/Container';
import { ShieldCheck, Globe, Code2, Mail, Check } from 'lucide-react';
import { FOUNDER_INFO } from '@/data/contactData';

// Custom SVG Icons for Brands with precise hover color styling
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
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

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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

  return (
    <footer className="w-full border-t border-border-subtle bg-surface/50 mt-auto transition-colors duration-200">
      <Container size="lg">
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Brand, Purpose & Socials */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <BrandLogo variant="full" height={32} />

              {/* Interactive Brand Social Icons */}
              <div className="flex items-center gap-2 pt-0.5">
                <a
                  href={FOUNDER_INFO.companyLinkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:shadow-[0_0_10px_rgba(0,119,181,0.25)] hover:-translate-y-0.5 transition-all"
                  title="LinkedIn"
                  aria-label="OpportunityX on LinkedIn"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.companyInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-[#e1306c] hover:border-[#e1306c]/40 hover:shadow-[0_0_10px_rgba(225,48,108,0.25)] hover:-translate-y-0.5 transition-all"
                  title="Instagram"
                  aria-label="OpportunityX on Instagram"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.xUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-text-primary hover:border-border-strong hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 transition-all"
                  title="X (Twitter)"
                  aria-label="OpportunityX on X (Twitter)"
                >
                  <XIcon className="h-3 w-3" />
                </a>

                <a
                  href={FOUNDER_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-[#1877f2] hover:border-[#1877f2]/40 hover:shadow-[0_0_10px_rgba(24,119,242,0.25)] hover:-translate-y-0.5 transition-all"
                  title="Facebook"
                  aria-label="OpportunityX on Facebook"
                >
                  <FacebookIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={FOUNDER_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-[#ff0000] hover:border-[#ff0000]/40 hover:shadow-[0_0_10px_rgba(255,0,0,0.25)] hover:-translate-y-0.5 transition-all"
                  title="YouTube"
                  aria-label="OpportunityX on YouTube"
                >
                  <YoutubeIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={`mailto:${FOUNDER_INFO.generalEmail}`}
                  className="flex items-center justify-center h-7 w-7 rounded-lg bg-surface-elevated border border-border-subtle text-text-muted hover:text-[#ea4335] hover:border-[#ea4335]/40 hover:shadow-[0_0_10px_rgba(234,67,53,0.25)] hover:-translate-y-0.5 transition-all cursor-pointer"
                  title={`Email ${FOUNDER_INFO.generalEmail}`}
                  aria-label={`Send email to ${FOUNDER_INFO.generalEmail}`}
                  onClick={handleCopyEmail}
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Mail className="h-3.5 w-3.5" />}
                </a>
              </div>
            </div>

            <p className="type-body text-text-secondary text-sm max-w-md">
              OpportunityX is the technology ecosystem uniting career discovery, developer tooling, skill validation, and builder communities under a unified platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-text-muted font-mono pt-2">
              <span className="inline-flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
                opportunityx.co.in
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
                Authoritative Parent Brand
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="type-caption text-text-primary mb-3">Ecosystem</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link to="/" className="hover:text-text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/editorial" className="hover:text-text-primary transition-colors">
                  Editorial
                </Link>
              </li>
              <li>
                <Link to="/notifications" className="hover:text-text-primary transition-colors">
                  Notifications
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-text-primary transition-colors">
                  Downloads
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-text-primary transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-accent-brand transition-colors font-medium">
                  Meet the Founder
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Ecosystem Platforms */}
          <div>
            <h3 className="type-caption text-text-primary mb-3">Ecosystem Roadmap</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <a
                  href="https://radar.opportunityx.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-brand transition-colors inline-flex items-center gap-1.5"
                >
                  <span>OpportunityX Radar</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary">
                    Live
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://verify.opportunityx.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-brand transition-colors inline-flex items-center gap-1.5"
                >
                  <span>OpportunityX Verify</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary">
                    Live
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://resume.opportunityx.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-brand transition-colors inline-flex items-center gap-1.5"
                >
                  <span>OpportunityX Resume</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary">
                    Live
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/#ecosystem-overview"
                  className="hover:text-accent-brand transition-colors inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary"
                >
                  <span>OpportunityX Learning Hub</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-500 border border-blue-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary">
                    In Dev
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {currentYear} OpportunityX. Operated by <span className="font-semibold text-text-secondary">{FOUNDER_INFO.name}</span>.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono">Contact: <a href={`mailto:${FOUNDER_INFO.generalEmail}`} className="text-accent-brand hover:underline">{FOUNDER_INFO.generalEmail}</a></span>
            <div className="hidden md:flex items-center gap-1.5 text-text-muted">
              <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Engineered for Builders</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
