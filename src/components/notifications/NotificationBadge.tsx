import React from 'react';
import {
  Sparkles,
  Megaphone,
  RefreshCcw,
  Wrench,
  Users,
  AlertTriangle,
} from 'lucide-react';
import { NotificationType, NotificationPriority } from '@/data/notificationData';

interface NotificationTypeBadgeProps {
  type: NotificationType;
  className?: string;
}

export const NotificationTypeBadge: React.FC<NotificationTypeBadgeProps> = ({
  type,
  className = '',
}) => {
  const configMap: Record<
    NotificationType,
    { label: string; icon: React.ReactNode; bg: string; text: string; border: string }
  > = {
    RELEASE: {
      label: 'Release',
      icon: <Sparkles className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-500 dark:text-emerald-400',
      border: 'border-emerald-500/20',
    },
    ANNOUNCEMENT: {
      label: 'Announcement',
      icon: <Megaphone className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-accent-subtle',
      text: 'text-accent-brand',
      border: 'border-accent-brand/20',
    },
    UPDATE: {
      label: 'Update',
      icon: <RefreshCcw className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-blue-500/10',
      text: 'text-blue-500 dark:text-blue-400',
      border: 'border-blue-500/20',
    },
    MAINTENANCE: {
      label: 'Maintenance',
      icon: <Wrench className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-amber-500/10',
      text: 'text-amber-500 dark:text-amber-400',
      border: 'border-amber-500/20',
    },
    COMMUNITY: {
      label: 'Community',
      icon: <Users className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-purple-500/10',
      text: 'text-purple-500 dark:text-purple-400',
      border: 'border-purple-500/20',
    },
    IMPORTANT: {
      label: 'Notice',
      icon: <AlertTriangle className="h-3 w-3" aria-hidden="true" />,
      bg: 'bg-rose-500/10',
      text: 'text-rose-500 dark:text-rose-400',
      border: 'border-rose-500/20',
    },
  };

  const config = configMap[type] || configMap.UPDATE;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${config.bg} ${config.text} border ${config.border} ${className}`}
    >
      {config.icon}
      <span>{config.label}</span>
    </span>
  );
};

interface NotificationPriorityBadgeProps {
  priority: NotificationPriority;
  className?: string;
}

export const NotificationPriorityBadge: React.FC<NotificationPriorityBadgeProps> = ({
  priority,
  className = '',
}) => {
  if (priority === 'NORMAL') return null;

  const isCritical = priority === 'CRITICAL';

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider ${
        isCritical
          ? 'bg-rose-500/15 text-rose-500 border border-rose-500/30'
          : 'bg-accent-subtle text-accent-brand border border-accent-brand/30'
      } ${className}`}
    >
      {isCritical ? 'CRITICAL' : 'IMPORTANT'}
    </span>
  );
};
