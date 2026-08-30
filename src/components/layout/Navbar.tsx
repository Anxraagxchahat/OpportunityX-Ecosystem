import React, { useState, useRef, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { MobileDrawer } from './MobileDrawer';
import { Container } from '@/components/ui/Container';
import { PRIMARY_NAV_CONFIG, NavItemConfig, NavChildItem } from '@/data/navigationData';

export const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close on outside click or Escape
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.nav-dropdown-container')) {
        setActiveDropdown(null);
      }
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  const handleMouseEnter = useCallback((id: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const handleToggle = useCallback((id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  }, []);

  const isNavActive = (item: NavItemConfig): boolean => {
    if (item.href === '/') return location.pathname === '/';
    if (item.id === 'nav-editorial') {
      return location.pathname.startsWith('/blogs') || location.pathname.startsWith('/editorial');
    }
    if (item.id === 'nav-notifications') return location.pathname.startsWith('/notifications');
    if (item.id === 'nav-downloads') return location.pathname.startsWith('/downloads');
    if (item.id === 'nav-contact') return location.pathname.startsWith('/contact');
    if (item.href && item.href !== '/' && location.pathname.startsWith(item.href)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'border-b border-border-strong/70 bg-canvas/92 backdrop-blur-lg shadow-subtle'
          : 'border-b border-border-subtle bg-canvas/80 backdrop-blur-md'
      }`}
    >
      <Container size="lg">
        <div className="flex h-16 sm:h-[68px] items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring rounded-lg p-1 transition-opacity hover:opacity-90 active:scale-[0.98]"
            aria-label="OpportunityX Home"
          >
            <BrandLogo variant="full" height={34} />
          </Link>

          {/* Desktop Navigation: Home | Editorial ▼ | Notifications ▼ | Community ▼ | Downloads | Contact */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary Navigation">
            {PRIMARY_NAV_CONFIG.map((item) => {
              const active = isNavActive(item);
              const hasDropdown = item.hasDropdown && item.children && item.children.length > 0;
              const isOpen = activeDropdown === item.id;

              // Direct link items (Home, Downloads, Contact)
              if (!hasDropdown) {
                return (
                  <NavLink
                    key={item.id}
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `relative px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 active:scale-[0.98] ${
                        isActive
                          ? 'text-text-primary bg-surface-elevated font-semibold shadow-subtle border border-border-subtle'
                          : 'text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center gap-1.5">
                        {item.label}
                        {isActive && <span className="sr-only" aria-current="page">(Current Page)</span>}
                      </span>
                    )}
                  </NavLink>
                );
              }

              // Dropdown items (Editorial, Notifications, Community)
              return (
                <div
                  key={item.id}
                  className="nav-dropdown-container relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(item.id)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    aria-controls={`dropdown-${item.id}`}
                    className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 active:scale-[0.98] cursor-pointer ${
                      active || isOpen
                        ? 'text-text-primary bg-surface-elevated font-semibold shadow-subtle border border-border-subtle'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-accent-brand' : 'opacity-60'
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* SOLID OPAQUE DROPDOWN — No glassmorphism */}
                  {isOpen && (
                    <div
                      id={`dropdown-${item.id}`}
                      role="menu"
                      aria-label={`${item.label} Menu`}
                      className="absolute top-full left-0 mt-2 w-[340px] rounded-xl border border-border-subtle bg-surface-elevated p-1.5 shadow-lg animate-scale-in z-50"
                      style={{ opacity: 1 }}
                    >
                      {item.children!.map((child: NavChildItem) => {
                        if (child.isExternal) {
                          return (
                            <a
                              key={child.id}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              role="menuitem"
                              className="group flex items-start justify-between gap-3 rounded-lg px-3.5 py-3 hover:bg-surface-hover transition-colors"
                            >
                              <div className="min-w-0">
                                <div className="text-sm font-semibold text-text-primary group-hover:text-accent-brand transition-colors">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <p className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">
                                    {child.description}
                                  </p>
                                )}
                              </div>
                              <ArrowUpRight
                                className="h-3.5 w-3.5 text-text-muted group-hover:text-accent-brand shrink-0 mt-1 transition-colors"
                                aria-hidden="true"
                              />
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={child.id}
                            to={child.href}
                            role="menuitem"
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 rounded-lg px-3.5 py-3 hover:bg-surface-hover transition-colors"
                          >
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-text-primary group-hover:text-accent-brand transition-colors">
                                {child.label}
                              </div>
                              {child.description && (
                                <p className="text-xs text-text-muted mt-0.5 leading-relaxed line-clamp-2">
                                  {child.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right: Theme Switcher Only */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeSwitcher />
          </div>

          {/* Mobile Right: Theme Switcher & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <button
              ref={mobileTriggerRef}
              onClick={() => setIsMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface text-text-secondary hover:text-text-primary hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring active:scale-[0.95] cursor-pointer"
              aria-label="Open main navigation menu"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-drawer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        navConfig={PRIMARY_NAV_CONFIG}
        triggerRef={mobileTriggerRef}
      />
    </header>
  );
};
