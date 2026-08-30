import React from 'react';
import { Download } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';
import { PlatformCard } from '@/components/downloads/PlatformCard';
import { getOrderedDownloads } from '@/data/downloadData';

export const DownloadsPage: React.FC = () => {
  const downloads = getOrderedDownloads();

  return (
    <div className="w-full py-10 sm:py-14 lg:py-16 bg-canvas">
      <SeoManager
        title="Downloads"
        description="Download OpportunityX applications for Android, Windows, macOS, and Linux. Verified distributions with integrity checksums."
        canonicalPath="/downloads"
      />

      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2">
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Official Distribution</span>
          </div>
          <h1 className="type-h1 text-text-primary font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            OpportunityX, wherever you go
          </h1>
          <p className="type-body-lg text-text-secondary mt-3 text-base sm:text-lg leading-relaxed max-w-2xl">
            Native OpportunityX clients are planned for every major platform. All releases will be distributed through verified official channels with integrity checksums.
          </p>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {downloads.map((asset) => (
            <PlatformCard key={asset.id} asset={asset} />
          ))}
        </div>

        {/* Distribution Notice */}
        <div className="mt-10 rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 max-w-3xl">
          <h2 className="text-sm font-semibold text-text-primary mb-2">
            Distribution & Security
          </h2>
          <p className="text-xs text-text-secondary leading-relaxed">
            All OpportunityX releases will be distributed exclusively through verified official channels.
            Each release will include SHA-256 checksums for tamper verification.
            Never download OpportunityX software from unofficial or third-party sources.
          </p>
        </div>
      </Container>
    </div>
  );
};
