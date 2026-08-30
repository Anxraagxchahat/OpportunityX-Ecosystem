import React, { useState } from 'react';
import { Link2, Check, Share2 } from 'lucide-react';

interface ShareButtonsProps {
  url?: string;
  title: string;
  className?: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({
  url,
  title,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  const handleCopyLink = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=OpportunityX`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-xs font-medium text-text-muted flex items-center gap-1.5 mr-1">
        <Share2 className="h-3.5 w-3.5" aria-hidden="true" />
        Share
      </span>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        className="relative inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 text-xs font-medium text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
        aria-label={copied ? 'Article URL copied' : 'Copy article link to clipboard'}
        title="Copy Link"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
            <span className="text-accent-brand font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Copy Link</span>
          </>
        )}
      </button>

      {/* X / Twitter Share */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
        aria-label="Share on X (formerly Twitter)"
        title="Share on X"
      >
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      {/* LinkedIn Share */}
      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5Z" />
        </svg>
      </a>
    </div>
  );
};
