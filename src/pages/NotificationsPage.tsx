import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Bell, RefreshCw } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { NotificationCard } from '@/components/notifications/NotificationCard';
import { EmptyState } from '@/components/common/EmptyState';
import { SeoManager } from '@/components/common/SeoManager';
import {
  NotificationType,
  NOTIFICATION_TYPES,
  filterNotifications,
} from '@/data/notificationData';

export const NotificationsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // Route-based default filter detection
  const routeDefaultType = useMemo((): NotificationType | 'ALL' => {
    if (location.pathname === '/notifications/releases') return 'RELEASE';
    if (location.pathname === '/notifications/announcements') return 'ANNOUNCEMENT';
    if (location.pathname === '/notifications/updates') return 'UPDATE';
    const typeParam = searchParams.get('type') as NotificationType | 'ALL';
    return typeParam || 'ALL';
  }, [location.pathname, searchParams]);

  const [activeType, setActiveType] = useState<NotificationType | 'ALL'>(routeDefaultType);

  useEffect(() => {
    setActiveType(routeDefaultType);
  }, [routeDefaultType]);

  const handleTypeChange = (type: NotificationType | 'ALL') => {
    setActiveType(type);
    const newParams = new URLSearchParams(searchParams);
    if (type === 'ALL') {
      newParams.delete('type');
    } else {
      newParams.set('type', type);
    }
    setSearchParams(newParams);
  };

  const filteredNotifications = useMemo(() => {
    return filterNotifications(activeType);
  }, [activeType]);

  return (
    <div className="w-full py-10 sm:py-14 lg:py-16 bg-canvas">
      <SeoManager
        title="Notifications"
        description="Official changelog, feature updates, and ecosystem announcements across the OpportunityX network."
        canonicalPath={location.pathname}
      />

      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2 font-mono">
            <Bell className="h-4 w-4" aria-hidden="true" />
            <span>OpportunityX Changelog</span>
          </div>
          <h1 className="type-h1 text-text-primary font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            Updates & Announcements
          </h1>
          <p className="type-body-lg text-text-secondary mt-3 text-base sm:text-lg leading-relaxed">
            The official real-time timeline for product releases, infrastructure notices, and builder community bulletins.
          </p>
        </div>

        {/* Filter Tab Bar */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none"
          role="tablist"
          aria-label="Notification Types"
        >
          {NOTIFICATION_TYPES.map((tab) => {
            const isActive = activeType === tab.value;
            return (
              <button
                key={tab.value}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTypeChange(tab.value)}
                className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer ${
                  isActive
                    ? 'bg-accent-brand text-white shadow-subtle'
                    : 'border border-border-subtle bg-surface text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Notifications Feed */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-4 max-w-4xl">
            {filteredNotifications.map((item) => (
              <NotificationCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No updates in this category"
            description="There are currently no announcements matching the selected filter."
            action={
              <button
                onClick={() => handleTypeChange('ALL')}
                className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                View All Updates
              </button>
            }
          />
        )}
      </Container>
    </div>
  );
};
