import React, { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

interface ChecksumBadgeProps {
  checksum: string;
  algorithm?: string;
  className?: string;
}

export const ChecksumBadge: React.FC<ChecksumBadgeProps> = ({
  checksum,
  algorithm = 'SHA-256',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(checksum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silent fail
    }
  }, [checksum]);

  // Truncate for display: first 16 chars + ellipsis
  const truncated = checksum.length > 16 ? `${checksum.slice(0, 16)}…` : checksum;

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle font-mono text-xs text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring group ${className}`}
      title={`${algorithm}: ${checksum} — Click to copy`}
      aria-label={`Copy ${algorithm} checksum to clipboard`}
    >
      <span className="text-text-muted text-[10px] font-semibold uppercase tracking-wider">
        {algorithm}
      </span>
      <span className="select-all">{truncated}</span>
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
      ) : (
        <Copy className="h-3.5 w-3.5 text-text-muted group-hover:text-text-secondary shrink-0 transition-colors" aria-hidden="true" />
      )}
      {copied && (
        <span className="sr-only">Checksum copied to clipboard</span>
      )}
    </button>
  );
};
