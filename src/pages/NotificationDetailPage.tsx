import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { SeoManager } from '@/components/common/SeoManager';
import { ErrorState } from '@/components/common/ErrorState';
import {
  NotificationTypeBadge,
  NotificationPriorityBadge,
} from '@/components/notifications/NotificationBadge';
import { getNotificationById } from '@/data/notificationData';

export const NotificationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const item = useMemo(() => {
    return id ? getNotificationById(id) : undefined;
  }, [id]);

  // Graceful 404 Not Found State
  if (!item) {
    return (
      <div className="w-full py-16 bg-canvas">
        <SeoManager
          title="Notice Not Found"
          description="The requested OpportunityX announcement could not be located."
        />
        <Container>
          <ErrorState
            statusCode={404}
            title="Notice Not Found"
            description={`The notification bulletin with ID "${id || ''}" does not exist or has expired.`}
            showHomeButton={false}
            onRetry={() => navigate('/notifications')}
          />
        </Container>
      </div>
    );
  }

  const formattedDate = new Date(item.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const isExternalLink = item.href?.startsWith('http://') || item.href?.startsWith('https://');

  return (
    <div className="w-full py-10 sm:py-14 bg-canvas">
      <SeoManager
        title={item.title}
        description={item.summary}
        canonicalPath={`/notifications/${item.id}`}
        ogType="article"
        publishedTime={item.publishedAt}
      />

      <Container>
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-text-muted">
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 overflow-hidden">
            <Link
              to="/"
              className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
            >
              Home
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            <Link
              to="/notifications"
              className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
            >
              Notifications
            </Link>
            <ChevronRight className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
            <span className="text-text-primary font-medium truncate max-w-[200px] sm:max-w-xs">
              {item.title}
            </span>
          </nav>

          <Link
            to="/notifications"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border-subtle bg-surface px-3 py-1.5 text-xs font-medium text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>All Updates</span>
          </Link>
        </div>

        {/* Notice Detail Box */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 lg:p-10 shadow-subtle">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-subtle">
            <div className="flex flex-wrap items-center gap-2">
              <NotificationTypeBadge type={item.type} />
              <NotificationPriorityBadge priority={item.priority} />
              {item.version && (
                <span className="type-mono rounded bg-surface-elevated px-2 py-0.5 text-xs font-semibold text-text-secondary border border-border-subtle">
                  {item.version}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Published {formattedDate}</span>
            </div>
          </div>

          {/* Title & Summary */}
          <div className="py-6 border-b border-border-subtle">
            <h1 className="type-h2 text-text-primary font-bold tracking-tight text-2xl sm:text-3xl mb-3">
              {item.title}
            </h1>
            <p className="type-body text-text-secondary text-base leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Full Markdown Notes */}
          {item.content && (
            <div className="py-6">
              <MarkdownRenderer content={item.content} />
            </div>
          )}

          {/* Action Link / Outbound Routing */}
          {item.href && item.actionText && (
            <div className="pt-6 border-t border-border-subtle flex items-center justify-between">
              {isExternalLink ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  <span>{item.actionText}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  <span>{item.actionText}</span>
                  <ArrowLeft className="h-4 w-4 rotate-180" aria-hidden="true" />
                </Link>
              )}

              <Link
                to="/notifications"
                className="text-xs font-semibold text-text-muted hover:text-text-primary"
              >
                ← Back to feed
              </Link>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
