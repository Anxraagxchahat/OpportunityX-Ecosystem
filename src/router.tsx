import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { HomePage } from '@/pages/HomePage';
import { LoadingState } from '@/components/common/LoadingState';

// Lazy-loaded secondary routes for optimal initial chunk size
const FounderPage = lazy(() =>
  import('@/pages/FounderPage').then((m) => ({ default: m.FounderPage }))
);
const BlogsPage = lazy(() =>
  import('@/pages/BlogsPage').then((m) => ({ default: m.BlogsPage }))
);
const BlogDetailPage = lazy(() =>
  import('@/pages/BlogDetailPage').then((m) => ({ default: m.BlogDetailPage }))
);
const NotificationsPage = lazy(() =>
  import('@/pages/NotificationsPage').then((m) => ({ default: m.NotificationsPage }))
);
const NotificationDetailPage = lazy(() =>
  import('@/pages/NotificationDetailPage').then((m) => ({ default: m.NotificationDetailPage }))
);
const DownloadsPage = lazy(() =>
  import('@/pages/DownloadsPage').then((m) => ({ default: m.DownloadsPage }))
);
const ContactPage = lazy(() =>
  import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense
    fallback={
      <div className="py-20 flex items-center justify-center">
        <LoadingState size="lg" message="Loading ecosystem view..." />
      </div>
    }
  >
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    errorElement: withSuspense(NotFoundPage),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'founder',
        element: withSuspense(FounderPage),
      },
      {
        path: 'meet-the-founder',
        element: <Navigate to="/founder" replace />,
      },
      // Editorial Central Content Hub & Backward Compatibility
      {
        path: 'editorial',
        element: withSuspense(BlogsPage),
      },
      {
        path: 'editorial/blogs',
        element: <Navigate to="/blogs" replace />,
      },
      {
        path: 'editorial/guides',
        element: withSuspense(BlogsPage),
      },
      {
        path: 'editorial/articles',
        element: withSuspense(BlogsPage),
      },
      {
        path: 'editorial/insights',
        element: withSuspense(BlogsPage),
      },
      {
        path: 'blogs',
        element: withSuspense(BlogsPage),
      },
      {
        path: 'blogs/:slug',
        element: withSuspense(BlogDetailPage),
      },
      // Notifications & Categories
      {
        path: 'notifications',
        element: withSuspense(NotificationsPage),
      },
      {
        path: 'notifications/releases',
        element: withSuspense(NotificationsPage),
      },
      {
        path: 'notifications/announcements',
        element: withSuspense(NotificationsPage),
      },
      {
        path: 'notifications/updates',
        element: withSuspense(NotificationsPage),
      },
      {
        path: 'notifications/:id',
        element: withSuspense(NotificationDetailPage),
      },
      // Downloads & Contact
      {
        path: 'downloads',
        element: withSuspense(DownloadsPage),
      },
      {
        path: 'contact',
        element: withSuspense(ContactPage),
      },
      {
        path: '*',
        element: withSuspense(NotFoundPage),
      },
    ],
  },
]);
