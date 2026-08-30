import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Smartphone, Monitor, Apple, Terminal, Tablet, Clock, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { getOrderedDownloads, DownloadAsset, DownloadStatus } from '@/data/downloadData';

// Compact platform icon mapping
const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  android: <Smartphone className="h-5 w-5" aria-hidden="true" />,
  windows: <Monitor className="h-5 w-5" aria-hidden="true" />,
  macos: <Apple className="h-5 w-5" aria-hidden="true" />,
  linux: <Terminal className="h-5 w-5" aria-hidden="true" />,
  ios: <Tablet className="h-5 w-5" aria-hidden="true" />,
};

const STATUS_LABEL: Record<DownloadStatus, { text: string; icon: React.ReactNode }> = {
  AVAILABLE: { text: 'Available', icon: <Download className="h-3 w-3" aria-hidden="true" /> },
  COMING_SOON: { text: 'Coming Soon', icon: <Clock className="h-3 w-3" aria-hidden="true" /> },
  IN_DEVELOPMENT: { text: 'In Development', icon: <Wrench className="h-3 w-3" aria-hidden="true" /> },
  UNAVAILABLE: { text: 'Unavailable', icon: null },
};

const STATUS_STYLE: Record<DownloadStatus, string> = {
  AVAILABLE: 'text-emerald-500',
  COMING_SOON: 'text-[var(--color-badge-text)]',
  IN_DEVELOPMENT: 'text-text-secondary',
  UNAVAILABLE: 'text-text-muted',
};

function PlatformPill({ asset }: { asset: DownloadAsset }) {
  const icon = PLATFORM_ICONS[asset.platform];
  const status = STATUS_LABEL[asset.status];
  const statusStyle = STATUS_STYLE[asset.status];

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border-subtle bg-surface p-4 sm:p-5 hover:border-border-strong hover:bg-surface-hover transition-all group">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border-subtle text-text-primary group-hover:text-accent-brand transition-colors">
        {icon}
      </div>
      <span className="text-sm font-semibold text-text-primary">
        {asset.platformLabel}
      </span>
      <span className={`flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider font-mono ${statusStyle}`}>
        {status.icon}
        {status.text}
      </span>
    </div>
  );
}

export const DownloadsPreview: React.FC = () => {
  const downloads = getOrderedDownloads();

  return (
    <section
      id="downloads-preview"
      className="relative w-full border-t border-border-subtle py-16 sm:py-20 lg:py-24 bg-canvas"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2">
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Platform Availability</span>
            </div>
            <h2 className="type-h2 text-text-primary font-bold tracking-tight">
              OpportunityX, wherever you go
            </h2>
            <p className="type-body text-text-secondary mt-2 text-sm sm:text-base max-w-xl">
              Native clients for every major platform are on the roadmap. Verified distributions will be available through official channels.
            </p>
          </div>

          <Link
            to="/downloads"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-brand hover:text-accent-hover transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-md"
          >
            <span>View Downloads</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Platform Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {downloads.map((asset) => (
            <PlatformPill key={asset.id} asset={asset} />
          ))}
        </div>
      </Container>
    </section>
  );
};
