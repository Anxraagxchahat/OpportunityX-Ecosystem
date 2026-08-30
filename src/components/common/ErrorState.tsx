import React, { useState, useEffect } from 'react';
import { AlertOctagon, RefreshCw, Home, ArrowLeft, WifiOff, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export type HttpErrorCode = 400 | 403 | 404 | 500 | 502 | 503 | 504 | 505 | 'offline' | 'network' | number;

export interface ErrorStateProps {
  statusCode?: HttpErrorCode;
  title?: string;
  description?: string;
  onRetry?: () => void;
  showHomeButton?: boolean;
  showBackButton?: boolean;
}

interface ErrorMessageDetail {
  title: string;
  description: string;
  badge: string;
  iconType?: 'alert' | 'wifi' | 'shield';
}

const ERROR_DICTIONARY: Record<string, ErrorMessageDetail> = {
  '400': {
    title: 'Invalid Request',
    description: 'The server could not understand the parameters in your request. Please verify the URL or input.',
    badge: 'Status 400',
    iconType: 'alert',
  },
  '403': {
    title: 'Access Restricted',
    description: 'You do not have permission to access this ecosystem resource.',
    badge: 'Status 403',
    iconType: 'shield',
  },
  '404': {
    title: 'Page Not Found',
    description: 'The ecosystem resource you requested does not exist or has been relocated.',
    badge: 'Status 404',
    iconType: 'alert',
  },
  '500': {
    title: 'Internal Gateway Error',
    description: 'An unexpected condition was encountered on our servers. Please try again shortly.',
    badge: 'Status 500',
    iconType: 'alert',
  },
  '502': {
    title: 'Bad Gateway',
    description: 'The ecosystem gateway received an invalid response from an upstream product node.',
    badge: 'Status 502',
    iconType: 'alert',
  },
  '503': {
    title: 'Service Temporarily Unavailable',
    description: 'The platform is undergoing scheduled optimization or heavy capacity load.',
    badge: 'Status 503',
    iconType: 'alert',
  },
  '504': {
    title: 'Gateway Timeout',
    description: 'The request took too long to complete. Please check your connectivity and retry.',
    badge: 'Status 504',
    iconType: 'alert',
  },
  '505': {
    title: 'HTTP Version Not Supported',
    description: 'The server does not support the HTTP protocol version used in the request.',
    badge: 'Status 505',
    iconType: 'alert',
  },
  'offline': {
    title: 'Connection Lost',
    description: 'You appear to be offline. Please check your internet connection and try again.',
    badge: 'Network Offline',
    iconType: 'wifi',
  },
  'network': {
    title: 'Network Communication Error',
    description: 'Unable to establish a secure connection with OpportunityX servers. Please retry.',
    badge: 'Network Error',
    iconType: 'wifi',
  },
};

export const ErrorState: React.FC<ErrorStateProps> = ({
  statusCode = 500,
  title,
  description,
  onRetry,
  showHomeButton = true,
  showBackButton = true,
}) => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const activeKey = isOffline ? 'offline' : String(statusCode);
  const fallback = ERROR_DICTIONARY[activeKey] || ERROR_DICTIONARY['500'];

  const finalTitle = title || fallback.title;
  const finalDesc = description || fallback.description;
  const finalBadge = fallback.badge;

  const handleReload = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div
      className="flex min-h-[460px] w-full flex-col items-center justify-center p-6 text-center"
      role="alert"
      aria-live="assertive"
    >
      {/* Icon Badge */}
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-subtle text-accent-brand border border-border-subtle shadow-subtle">
        {fallback.iconType === 'wifi' ? (
          <WifiOff className="h-7 w-7" aria-hidden="true" />
        ) : fallback.iconType === 'shield' ? (
          <ShieldAlert className="h-7 w-7" aria-hidden="true" />
        ) : (
          <AlertOctagon className="h-7 w-7" aria-hidden="true" />
        )}
      </div>

      {/* Status Monospace Badge */}
      <div className="type-mono text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2 px-2.5 py-0.5 rounded-full bg-accent-subtle border border-accent-glow inline-flex">
        {finalBadge}
      </div>

      {/* Main Error Heading */}
      <h1 className="type-h2 text-text-primary mb-3 text-2xl sm:text-3xl font-bold tracking-tight">
        {finalTitle}
      </h1>

      {/* User-friendly calm description */}
      <p className="type-body text-text-secondary max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        {finalDesc}
      </p>

      {/* Action Recovery Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={handleReload}
          className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-5 py-2.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-accent-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring shadow-subtle cursor-pointer"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          <span>Try Again</span>
        </button>

        {showHomeButton && (
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-elevated px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-150 hover:bg-surface-hover hover:border-border-strong active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            <span>Return to Home</span>
          </Link>
        )}

        {showBackButton && (
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-lg border border-transparent px-4 py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-text-primary cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Go Back</span>
          </button>
        )}
      </div>
    </div>
  );
};
