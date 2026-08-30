import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { NotificationCard } from '@/components/notifications/NotificationCard';
import { getLatestNotifications } from '@/data/notificationData';
import { EmptyState } from '@/components/common/EmptyState';

export const NotificationsPreview: React.FC = () => {
  const latestNotifications = getLatestNotifications(3);

  return (
    <section
      id="notifications-preview"
      className="relative w-full border-t border-border-subtle py-16 sm:py-20 lg:py-24 bg-canvas"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-12">
          <div>
            <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2">
              <Bell className="h-4 w-4" aria-hidden="true" />
              <span>Official Updates</span>
            </div>
            <h2 className="type-h2 text-text-primary font-bold tracking-tight">
              Ecosystem Bulletins & Releases
            </h2>
            <p className="type-body text-text-secondary mt-2 text-sm sm:text-base max-w-xl">
              Chronological announcements covering Radar feature updates, developer roadmaps, and community releases.
            </p>
          </div>

          <Link
            to="/notifications"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-brand hover:text-accent-hover transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-md"
          >
            <span>View all updates</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* List of Notifications */}
        {latestNotifications.length > 0 ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {latestNotifications.map((item) => (
              <NotificationCard key={item.id} item={item} defaultExpanded={false} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No new updates right now"
            description="All systems are operating normally. Check back soon for the latest ecosystem releases."
          />
        )}
      </Container>
    </section>
  );
};
