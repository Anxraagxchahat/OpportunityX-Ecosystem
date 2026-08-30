import React from 'react';
import { Terminal, Users2, GitPullRequest, Code2, Sparkles } from 'lucide-react';
import { COMMUNITY_CONFIG } from '@/data/ecosystemData';

const SNIPPET_ICONS = [Users2, GitPullRequest, Code2];

export const CommunityVisual: React.FC = () => {
  const { snippets } = COMMUNITY_CONFIG;

  return (
    <div className="relative flex flex-col gap-4 w-full">
      {/* Decorative Watermark / Ambient Glow */}
      <div
        className="pointer-events-none absolute -right-8 -bottom-8 h-64 w-64 rounded-full bg-accent-brand/5 blur-3xl"
        aria-hidden="true"
      />

      {/* Demonstration Header Label */}
      <div className="flex items-center justify-between gap-2 px-1 text-[11px] font-mono uppercase tracking-wider text-text-muted">
        <span className="flex items-center gap-1.5 text-accent-brand">
          <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
          Builder Interaction Preview
        </span>
        <span>Simulated Exchange</span>
      </div>

      {/* Snippet Cards */}
      {snippets.map((snippet, idx) => {
        const Icon = SNIPPET_ICONS[idx % SNIPPET_ICONS.length];

        return (
          <div
            key={snippet.id}
            className="group relative rounded-xl border border-border-subtle hover:border-accent-brand/30 bg-surface-elevated/80 backdrop-blur-sm p-5 sm:p-6 transition-all duration-200 shadow-subtle hover:shadow-elevated"
          >
            {/* Top Row: Tag & Topic */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-surface text-accent-brand border border-border-subtle shrink-0">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
                <span className="text-xs font-semibold text-text-primary">
                  {snippet.category}
                </span>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface text-text-muted border border-border-subtle">
                {snippet.tag}
              </span>
            </div>

            {/* Topic Title */}
            <h4 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-accent-brand transition-colors">
              {snippet.topic}
            </h4>

            {/* Discussion Content */}
            <p className="type-body text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 italic">
              {snippet.content}
            </p>

            {/* Snippet Metadata Footer */}
            <div className="flex items-center justify-between pt-2.5 border-t border-border-subtle/60 text-[11px] font-mono text-text-muted">
              <span>{snippet.meta}</span>
              <span className="flex items-center gap-1 text-accent-brand opacity-80">
                <Sparkles className="h-3 w-3" aria-hidden="true" />
                Active Channel
              </span>
            </div>
          </div>
        );
      })}

      {/* Bottom Visual Disclaimer */}
      <div className="px-1 text-[11px] font-mono text-text-muted text-center sm:text-left">
        * Architectural demonstration of builder exchanges within the single OpportunityX community.
      </div>
    </div>
  );
};
