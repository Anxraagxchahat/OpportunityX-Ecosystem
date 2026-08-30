import React from 'react';
import { Mail, Users, ExternalLink, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_CHANNELS, FOUNDER_INFO } from '@/data/contactData';

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

export const ContactInfo: React.FC = () => {
  return (
    <aside className="space-y-6" aria-label="Direct contact channels">
      {/* Founder Direct Connect Card */}
      <div className="rounded-xl border border-accent-brand/30 bg-surface-elevated/80 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-brand font-mono">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Founder Direct
          </span>
          <Link
            to="/founder"
            className="inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-accent-brand transition-colors"
          >
            Meet the Founder <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex items-center gap-3.5">
          <img
            src={FOUNDER_INFO.avatarUrl}
            alt={FOUNDER_INFO.name}
            className="h-12 w-12 rounded-full object-cover border border-accent-brand/40 shadow-sm"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div>
            <h4 className="text-sm font-bold text-text-primary">{FOUNDER_INFO.name}</h4>
            <p className="text-xs text-text-muted">{FOUNDER_INFO.role}</p>
          </div>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed">
          {FOUNDER_INFO.tagline}
        </p>

        {/* Founder Socials Grid */}
        <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-2">
          <a
            href={FOUNDER_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-[#0077b5] hover:bg-[#0077b5]/10 border border-border-subtle transition-all"
            title="LinkedIn"
          >
            <LinkedInIcon className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={FOUNDER_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border-subtle transition-all"
            title="GitHub"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
          </a>

          <a
            href={FOUNDER_INFO.xUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-surface-hover border border-border-subtle transition-all"
            title="X (Twitter)"
          >
            <XIcon className="h-3 w-3" />
            <span>X</span>
          </a>

          <a
            href={FOUNDER_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-[#e1306c] hover:bg-[#e1306c]/10 border border-border-subtle transition-all"
            title="Instagram"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            <span>Instagram</span>
          </a>

          <a
            href={FOUNDER_INFO.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-md bg-surface px-2.5 py-1.5 text-xs font-medium text-text-secondary hover:text-accent-brand hover:bg-accent-subtle border border-border-subtle transition-all"
            title="Portfolio"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>Portfolio</span>
          </a>
        </div>
      </div>

      {/* Direct Email Channels */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Mail className="h-4 w-4 text-accent-brand" aria-hidden="true" />
          Official Inboxes
        </h3>
        <div className="space-y-3">
          {CONTACT_CHANNELS.map((channel) => (
            <a
              key={channel.id}
              href={`mailto:${channel.value}`}
              className="group block rounded-xl border border-border-subtle bg-surface p-4 hover:border-border-strong hover:bg-surface-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-xs font-semibold text-text-muted uppercase tracking-wider font-mono">
                  {channel.label}
                </span>
                <ExternalLink
                  className="h-3.5 w-3.5 text-text-muted group-hover:text-accent-brand transition-colors"
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm font-medium text-accent-brand group-hover:text-accent-hover transition-colors break-all">
                {channel.value}
              </span>
              <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
                {channel.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Community */}
      <div>
        <h3 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <Users className="h-4 w-4 text-accent-brand" aria-hidden="true" />
          Builder Community
        </h3>
        <a
          href={FOUNDER_INFO.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-border-subtle bg-surface p-4 hover:border-border-strong hover:bg-surface-hover transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider font-mono">
              Central Discord
            </span>
            <ExternalLink
              className="h-3.5 w-3.5 text-text-muted group-hover:text-accent-brand transition-colors"
              aria-hidden="true"
            />
          </div>
          <span className="text-sm font-medium text-accent-brand group-hover:text-accent-hover transition-colors">
            OpportunityX Builder Discord
          </span>
          <p className="text-xs text-text-muted mt-1.5 leading-relaxed">
            Join the unified builder community to collaborate on hackathon teams, share daily commits, and get peer architecture reviews.
          </p>
        </a>
      </div>
    </aside>
  );
};
