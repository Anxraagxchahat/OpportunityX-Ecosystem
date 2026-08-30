import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { EcosystemSection } from '@/components/ecosystem/EcosystemSection';
import { CommunitySection } from '@/components/community/CommunitySection';
import { BlogsPreview } from '@/components/home/BlogsPreview';
import { NotificationsPreview } from '@/components/home/NotificationsPreview';
import { DownloadsPreview } from '@/components/home/DownloadsPreview';
import { ContactPreview } from '@/components/home/ContactPreview';
import { SeoManager } from '@/components/common/SeoManager';

export const HomePage: React.FC = () => {
  const handleExplore = () => {
    const target = document.getElementById('ecosystem-overview');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <SeoManager
        title="OpportunityX — Student & Builder Ecosystem"
        description="OpportunityX connects student opportunities, real-world engineering roadmaps, verified credentials, and a global builder network."
        canonicalPath="/"
      />

      {/* 1. Flagship Hero Section */}
      <Hero onExploreClick={handleExplore} />

      {/* 2. Ecosystem Directory Section */}
      <EcosystemSection />

      {/* 3. Centralized Community Section */}
      <CommunitySection onExploreClick={handleExplore} />

      {/* 4. Editorial Blogs Preview Section */}
      <BlogsPreview />

      {/* 5. Official Notifications Feed Preview Section */}
      <NotificationsPreview />

      {/* 6. Platform Downloads Preview Section */}
      <DownloadsPreview />

      {/* 7. Contact Gateway Section */}
      <ContactPreview />
    </div>
  );
};

