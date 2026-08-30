import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, ArrowUpRight, Users } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { backdropVariants, drawerSlideVariants } from '@/utils/motion';
import { NavItemConfig, COMMUNITY_PLATFORMS } from '@/data/navigationData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navConfig: NavItemConfig[];
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navConfig,
  triggerRef,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer whenever route changes (including back/forward navigation)
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, location.search]);

  const toggleGroup = (id: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Focus trap, Escape key, and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 60);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    
    // Lock scroll on body and document element
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      triggerRef.current?.focus();
    };
  }, [isOpen, onClose, triggerRef]);

  if (!mounted || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="OpportunityX Navigation Menu"
          className="fixed inset-0 z-50 lg:hidden overflow-hidden"
        >
          {/* Viewport-fixed Backdrop */}
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shouldReduceMotion ? undefined : backdropVariants}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Left-Anchored Drawer Panel */}
          <motion.div
            ref={drawerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={shouldReduceMotion ? undefined : drawerSlideVariants}
            className="fixed inset-y-0 left-0 w-[min(85vw,360px)] max-w-full h-full h-[100dvh] bg-surface-elevated border-r border-border-subtle p-5 sm:p-6 flex flex-col justify-between shadow-elevated z-50 overflow-y-auto overflow-x-hidden pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] pl-[max(1.25rem,env(safe-area-inset-left))]"
          >
            {/* Header: Logo & Close Button */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-border-subtle gap-2">
                <Link
                  to="/"
                  onClick={onClose}
                  className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg p-0.5"
                  aria-label="OpportunityX Home"
                >
                  <BrandLogo variant="full" height={28} />
                </Link>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-[0.95] cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {/* Navigation List */}
              <nav className="mt-5 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navConfig.map((item) => {
                  const hasChildren = item.hasDropdown && item.children && item.children.length > 0;
                  const isExpanded = expandedGroups.has(item.id);

                  // Direct link items: Home, Downloads, Contact
                  if (!hasChildren) {
                    return (
                      <NavLink
                        key={item.id}
                        to={item.href}
                        end={item.href === '/'}
                        onClick={onClose}
                        className={({ isActive }) =>
                          `flex items-center min-h-[44px] px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors active:scale-[0.99] ${
                            isActive
                              ? 'bg-accent-subtle text-accent-brand font-semibold border border-accent-glow'
                              : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                          }`
                        }
                      >
                        <span>{item.label}</span>
                      </NavLink>
                    );
                  }

                  // Accordion items: Editorial, Notifications, Community
                  return (
                    <div key={item.id} className="rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleGroup(item.id)}
                        aria-expanded={isExpanded}
                        aria-controls={`mobile-nav-group-${item.id}`}
                        className="flex w-full items-center justify-between min-h-[44px] px-3.5 py-2.5 text-sm font-semibold text-text-primary hover:bg-surface rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 text-text-muted transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-accent-brand' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>

                      {isExpanded && (
                        <div id={`mobile-nav-group-${item.id}`} className="pl-3 pr-1 pb-2 pt-1 space-y-0.5">
                          {item.children!.map((child) => {
                            if (child.isExternal) {
                              return (
                                <a
                                  key={child.id}
                                  href={child.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={onClose}
                                  className="flex items-center justify-between min-h-[38px] px-3 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
                                >
                                  <span className="font-medium">{child.label}</span>
                                  <ArrowUpRight className="h-3.5 w-3.5 text-text-muted shrink-0" aria-hidden="true" />
                                </a>
                              );
                            }

                            return (
                              <NavLink
                                key={child.id}
                                to={child.href}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `flex items-center min-h-[38px] px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    isActive
                                      ? 'bg-accent-subtle text-accent-brand font-semibold border border-accent-glow'
                                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                                  }`
                                }
                              >
                                {child.label}
                              </NavLink>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Footer: Theme Switcher & Community Quick Links */}
            <div className="pt-5 mt-5 border-t border-border-subtle flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-text-muted">Theme</span>
                <ThemeSwitcher />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={COMMUNITY_PLATFORMS.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 min-h-[40px] rounded-lg bg-surface border border-border-subtle px-3 py-2 text-xs font-semibold text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  <Users className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
                  <span>Discord</span>
                  <ArrowUpRight className="h-3 w-3 opacity-70" aria-hidden="true" />
                </a>
                <a
                  href={COMMUNITY_PLATFORMS.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 min-h-[40px] rounded-lg bg-surface border border-border-subtle px-3 py-2 text-xs font-semibold text-text-primary hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3 opacity-70" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};
