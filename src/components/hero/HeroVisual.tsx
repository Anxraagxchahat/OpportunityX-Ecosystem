import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const HeroVisual: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto flex items-center justify-center p-4 sm:p-6 select-none">
      {/* Subtle Background Radial Aura */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-35 dark:opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background:
            theme === 'monochromatic'
              ? 'radial-gradient(circle, rgba(0,0,0,0.08) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255,107,0,0.18) 0%, rgba(255,107,0,0.02) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Structured Directional Canvas Card */}
      <div className="relative w-full rounded-2xl border border-border-subtle bg-surface/80 p-6 sm:p-8 shadow-elevated backdrop-blur-sm overflow-hidden">
        {/* Subtle Engineering Grid Backdrop */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        {/* Top Metric / Live Discovery Signal */}
        <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={
                  theme === 'monochromatic'
                    ? 'animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75'
                    : 'animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-brand opacity-75'
                }
              />
              <span
                className={
                  theme === 'monochromatic'
                    ? 'relative inline-flex rounded-full h-2.5 w-2.5 bg-black'
                    : 'relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-brand'
                }
              />
            </span>
            <span className="type-mono text-xs font-semibold text-text-primary tracking-wide">
              Ecosystem Active Node
            </span>
          </div>

          <div className="type-mono text-[11px] text-text-muted px-2 py-0.5 rounded bg-surface-elevated border border-border-subtle">
            v1.0 • Global Gateway
          </div>
        </div>

        {/* Center Node Composition (Directional Trajectory & Connected Pillars) */}
        <div className="py-6 space-y-3.5">
          {/* Pillar 1: OpportunityX Radar */}
          <div className="group flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated border border-border-subtle hover:border-border-strong transition-all duration-150">
            <div className="flex items-center gap-3">
              <div
                className={
                  theme === 'monochromatic'
                    ? 'flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white'
                    : 'flex h-9 w-9 items-center justify-center rounded-lg bg-accent-subtle text-accent-brand border border-accent-glow'
                }
              >
                <Compass className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                  <span>OpportunityX Radar</span>
                  <span className="text-[10px] font-mono font-normal text-text-muted">
                    • Discovery Engine
                  </span>
                </div>
                <div className="text-xs text-text-secondary">
                  Hackathons, fellowships & student grants
                </div>
              </div>
            </div>
            <ArrowUpRight
              className={
                theme === 'monochromatic'
                  ? 'h-4 w-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
                  : 'h-4 w-4 text-accent-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform'
              }
              aria-hidden="true"
            />
          </div>

          {/* Pillar 2: Live Verification & Developer Tools */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/60 border border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-text-secondary border border-border-subtle">
                <Layers className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                  <span>Verify, Resume & Learning</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 [html[data-theme='monochromatic']_&]:!bg-surface-elevated [html[data-theme='monochromatic']_&]:!text-text-primary">
                    Active
                  </span>
                </div>
                <div className="text-xs text-text-secondary">
                  Credentials, ATS resume architect & learning hub
                </div>
              </div>
            </div>
            <Terminal className="h-4 w-4 text-text-muted" aria-hidden="true" />
          </div>

          {/* Pillar 3: Verified Community Gateway */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-surface-elevated/60 border border-border-subtle">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface text-text-secondary border border-border-subtle">
                <ShieldCheck className="h-4.5 w-4.5" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">
                  Builder Community & Network
                </div>
                <div className="text-xs text-text-secondary">
                  Peer collaboration, mentorship & team formation
                </div>
              </div>
            </div>
            <div className="text-xs font-mono text-emerald-500 flex items-center gap-1">
              Open Access
            </div>
          </div>
        </div>

        {/* Bottom Trust Meta */}
        <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted font-mono">
          <span>Unified Architecture</span>
          <span>Zero Fragmented Portals</span>
        </div>
      </div>
    </div>
  );
};
