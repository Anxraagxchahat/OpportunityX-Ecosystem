import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronDown, ChevronUp, ExternalLink, Pin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { NotificationItem } from '@/data/notificationData';
import {
  NotificationTypeBadge,
  NotificationPriorityBadge,
} from './NotificationBadge';
import { MarkdownRenderer } from '@/components/common/MarkdownRenderer';
import { accordionVariants } from '@/utils/motion';

interface NotificationCardProps {
  item: NotificationItem;
  defaultExpanded?: boolean;
  showExpandable?: boolean;
  className?: string;
}

export const NotificationCard: React.FC<NotificationCardProps> = ({
  item,
  defaultExpanded = false,
  showExpandable = true,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const shouldReduceMotion = useReducedMotion();

  const formattedDate = new Date(item.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const isExternalLink = item.href?.startsWith('http://') || item.href?.startsWith('https://');

  return (
    <div
      className={`relative rounded-xl border transition-all duration-200 bg-surface p-5 sm:p-6 hover:shadow-subtle ${
        item.isPinned
          ? 'border-accent-brand/40 bg-surface-elevated/40 shadow-subtle'
          : 'border-border-subtle hover:border-border-strong'
      } ${className}`}
    >
      {/* Pinned Tag */}
      {item.isPinned && (
        <div className="flex items-center gap-1 text-[11px] font-semibold text-accent-brand uppercase tracking-wider mb-2">
          <Pin className="h-3 w-3 fill-current" aria-hidden="true" />
          <span>Pinned Announcement</span>
        </div>
      )}

      {/* Meta Row: Type Badge + Priority + Version + Date */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
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
          <span>{formattedDate}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="type-h3 text-text-primary text-base sm:text-lg font-semibold tracking-tight mb-2">
        <Link
          to={`/notifications/${item.id}`}
          className="hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm"
        >
          {item.title}
        </Link>
      </h3>

      {/* Summary */}
      <p className="type-body text-text-secondary text-sm leading-relaxed mb-4">
        {item.summary}
      </p>

      {/* Inline Expanded Content with Smooth Accordion Motion */}
      <AnimatePresence initial={false}>
        {showExpandable && isExpanded && item.content && (
          <motion.div
            initial={shouldReduceMotion ? false : 'collapsed'}
            animate="expanded"
            exit={shouldReduceMotion ? undefined : 'collapsed'}
            variants={shouldReduceMotion ? undefined : accordionVariants}
            className="mt-4 mb-4 border-t border-border-subtle pt-4 text-sm bg-surface-elevated/50 rounded-lg p-4"
          >
            <MarkdownRenderer content={item.content} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Controls: Read More / Expand + Action Link */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle pt-3 text-xs">
        <div className="flex items-center gap-3">
          {showExpandable && item.content ? (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 font-semibold text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm py-1 cursor-pointer active:scale-[0.98]"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'Collapse notes' : 'View release details'}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              )}
            </button>
          ) : (
            <Link
              to={`/notifications/${item.id}`}
              className="inline-flex items-center gap-1 font-semibold text-accent-brand hover:underline underline-offset-2"
            >
              <span>Read notice</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          )}

          <Link
            to={`/notifications/${item.id}`}
            className="text-text-muted hover:text-text-secondary transition-colors"
          >
            Permalink
          </Link>
        </div>

        {/* Action Link (e.g. Launch Radar / Join Discord) */}
        {item.href && item.actionText && (
          <div>
            {isExternalLink ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-accent-brand hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm group"
              >
                <span>{item.actionText}</span>
                <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            ) : (
              <Link
                to={item.href}
                className="inline-flex items-center gap-1 font-semibold text-accent-brand hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-focus-ring rounded-sm group"
              >
                <span>{item.actionText}</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
