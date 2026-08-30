import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { PageTransition } from '@/components/common/PageTransition';

export const AppShell: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-text-primary transition-colors duration-200">
      {/* Skip to Main Content Landmark (a11y) */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Area with Page Transition Wrapper */}
      <main id="main-content" className="flex-1 w-full focus:outline-none flex flex-col" tabIndex={-1}>
        <ErrorBoundary>
          <PageTransition>
            <Outlet />
          </PageTransition>
        </ErrorBoundary>
      </main>

      {/* Ecosystem Footer Shell */}
      <Footer />
    </div>
  );
};
