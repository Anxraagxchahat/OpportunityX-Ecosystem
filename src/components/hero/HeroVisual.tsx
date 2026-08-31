import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const HeroVisual: React.FC = () => {
  const { theme } = useTheme();
  const isMono = theme === 'monochromatic';

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto select-none">
      {/* Background Radial Glow Aura */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 dark:opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: isMono
            ? 'radial-gradient(circle, rgba(0,0,0,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(255,107,0,0.2) 0%, rgba(255,107,0,0.02) 65%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Main Glassmorphic Showcase Card */}
      <div className="relative w-full rounded-2xl border border-border-subtle bg-surface/90 p-5 sm:p-6 shadow-elevated backdrop-blur-md">
        {/* Top Header Row */}
        <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  isMono ? 'bg-black dark:bg-white' : 'bg-emerald-500'
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  isMono ? 'bg-black dark:bg-white' : 'bg-emerald-500'
                }`}
              />
            </span>
            <span className="type-mono text-xs font-semibold text-text-primary tracking-wide">
              Ecosystem Core Nodes
            </span>
          </div>

          <div className="type-mono text-[11px] text-text-muted px-2.5 py-0.5 rounded-md bg-surface-elevated border border-border-subtle">
            v1.0 • Global Gateway
          </div>
        </div>

        {/* 3 Core Ecosystem Pillars */}
        <div className="py-4 space-y-3">
          {/* Pillar 1: OpportunityX Radar (Flagship) */}
          <a
            href="https://radar.opportunityx.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/90 border border-border-subtle hover:border-accent-brand/40 hover:bg-surface-hover hover:scale-[1.01] transition-all duration-200 shadow-xs"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isMono
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-accent-subtle text-accent-brand'
                }`}
              >
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-text-primary group-hover:text-accent-brand transition-colors">
                  OpportunityX Radar
                </div>
                <div className="text-xs text-text-secondary mt-0.5">
                  Hackathons, grants & fellowships
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <ArrowUpRight
                className={`h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isMono ? 'text-text-primary' : 'text-accent-brand'
                }`}
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Pillar 2: Live Verification & Developer Tools */}
          <a
            href="https://verify.opportunityx.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/90 border border-border-subtle hover:border-border-strong hover:bg-surface-hover hover:scale-[1.01] transition-all duration-200 shadow-xs"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isMono
                    ? 'bg-surface text-text-primary'
                    : 'bg-blue-500/10 text-blue-400'
                }`}
              >
                <Layers className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-text-primary group-hover:text-text-primary transition-colors">
                  Verify & Career Tools
                </div>
                <div className="text-xs text-text-secondary mt-0.5">
                  Verified credentials & ATS resume
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <ArrowUpRight
                className="h-4.5 w-4.5 text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                aria-hidden="true"
              />
            </div>
          </a>

          {/* Pillar 3: Verified Community Gateway */}
          <a
            href="https://discord.gg/qSjCRDTKN5"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/90 border border-border-subtle hover:border-border-strong hover:bg-surface-hover hover:scale-[1.01] transition-all duration-200 shadow-xs"
          >
            <div className="flex items-center gap-3.5 min-w-0 flex-1">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isMono
                    ? 'bg-surface text-text-primary'
                    : 'bg-emerald-500/10 text-emerald-400'
                }`}
              >
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-text-primary group-hover:text-text-primary transition-colors">
                  Builder Community
                </div>
                <div className="text-xs text-text-secondary mt-0.5">
                  Peer network & team matching
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 ml-3">
              <ArrowUpRight
                className="h-4.5 w-4.5 text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                aria-hidden="true"
              />
            </div>
          </a>
        </div>

        {/* Bottom Trust Meta */}
        <div className="pt-3.5 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-mono">
          <span className="flex items-center gap-1.5">
            <Sparkles
              className={`h-3 w-3 ${isMono ? 'text-text-primary' : 'text-accent-brand'}`}
            />
            Unified Platform
          </span>
          <span>Zero Gatekeeping</span>
        </div>
      </div>
    </div>
  );
};
