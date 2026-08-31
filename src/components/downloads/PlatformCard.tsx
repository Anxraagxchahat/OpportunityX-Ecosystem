import React from 'react';
import { Download, Clock, Wrench, XCircle } from 'lucide-react';
import { DownloadAsset, DownloadStatus, STATUS_LABELS } from '@/data/downloadData';
import { ChecksumBadge } from './ChecksumBadge';
import { getPlatformIcon } from '@/components/common/PlatformIcons';

// --------------------------------------------------------------------------
// Status Badge Styling
// --------------------------------------------------------------------------
const STATUS_STYLES: Record<DownloadStatus, string> = {
  AVAILABLE:
    'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
  COMING_SOON:
    'bg-[var(--color-badge-bg)] text-[var(--color-badge-text)] border-[var(--color-badge-border)]',
  IN_DEVELOPMENT:
    'bg-surface-elevated text-text-secondary border-border-subtle',
  UNAVAILABLE:
    'bg-surface text-text-muted border-border-subtle',
};

const STATUS_ICONS: Record<DownloadStatus, React.ReactNode> = {
  AVAILABLE: <Download className="h-3 w-3" aria-hidden="true" />,
  COMING_SOON: <Clock className="h-3 w-3" aria-hidden="true" />,
  IN_DEVELOPMENT: <Wrench className="h-3 w-3" aria-hidden="true" />,
  UNAVAILABLE: <XCircle className="h-3 w-3" aria-hidden="true" />,
};

interface PlatformCardProps {
  asset: DownloadAsset;
  className?: string;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({
  asset,
  className = '',
}) => {
  const icon = getPlatformIcon(asset.platform, 'h-6 w-6');
  const isAvailable = asset.status === 'AVAILABLE' && asset.downloadUrl;

  return (
    <article
      className={`relative rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-subtle group ${className}`}
    >
      {/* Header: Icon + Platform + Status */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle text-text-primary shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-base font-semibold text-text-primary leading-tight">
              {asset.platformLabel}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">{asset.product}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase font-mono border shrink-0 ${STATUS_STYLES[asset.status]}`}
        >
          {STATUS_ICONS[asset.status]}
          {STATUS_LABELS[asset.status]}
        </span>
      </div>

      {/* Metadata Row — only displayed when real values exist */}
      {(asset.version || asset.architecture || asset.fileType) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary mb-3">
          {asset.version && (
            <span className="font-mono font-medium">{asset.version}</span>
          )}
          {asset.architecture && (
            <span>{asset.architecture}</span>
          )}
          {asset.fileType && (
            <span className="font-mono">{asset.fileType}</span>
          )}
          {asset.fileSize && (
            <span>{asset.fileSize}</span>
          )}
          {asset.releaseDate && (
            <time dateTime={asset.releaseDate}>
              {new Date(asset.releaseDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
          )}
        </div>
      )}

      {/* System Requirements */}
      {asset.requirements && asset.requirements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1.5">
            Requirements
          </h4>
          <ul className="space-y-0.5">
            {asset.requirements.map((req, idx) => (
              <li key={idx} className="text-xs text-text-secondary flex items-start gap-1.5">
                <span className="text-text-muted mt-[3px] shrink-0">·</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Notes */}
      {asset.notes && (
        <p className="text-xs text-text-muted leading-relaxed mb-4">
          {asset.notes}
        </p>
      )}

      {/* Checksum — only when a real checksum exists */}
      {asset.checksum && asset.checksumAlgorithm && (
        <div className="mb-4">
          <ChecksumBadge
            checksum={asset.checksum}
            algorithm={asset.checksumAlgorithm}
          />
        </div>
      )}

      {/* Action */}
      <div className="mt-auto pt-2">
        {isAvailable ? (
          <a
            href={asset.downloadUrl}
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Now
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-elevated px-4 py-2.5 text-sm font-medium text-text-muted cursor-default">
            {asset.status === 'IN_DEVELOPMENT' ? (
              <>
                <Wrench className="h-4 w-4" aria-hidden="true" />
                In Development
              </>
            ) : asset.status === 'COMING_SOON' ? (
              <>
                <Clock className="h-4 w-4" aria-hidden="true" />
                Coming Soon
              </>
            ) : (
              <>
                <XCircle className="h-4 w-4" aria-hidden="true" />
                Unavailable
              </>
            )}
          </span>
        )}
      </div>
    </article>
  );
};
