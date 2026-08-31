import React from 'react';
import {
  Sparkles,
  Download,
  Mail,
  Copy,
  Check,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';
import { BrandLogo } from '@/components/ui/BrandLogo';

export const PressPage: React.FC = () => {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedColor(id);
      setTimeout(() => setCopiedColor(null), 2000);
    });
  };

  const brandColors = [
    { id: 'orange', name: 'Electric Orange (Brand Accent)', hex: '#FF6B00', rgb: '255, 107, 0', desc: 'Core brand action color' },
    { id: 'dark-canvas', name: 'Deep Canvas (Dark Theme)', hex: '#09090B', rgb: '9, 9, 11', desc: 'Default background canvas' },
    { id: 'white-canvas', name: 'Pure Canvas (Light & Mono)', hex: '#FFFFFF', rgb: '255, 255, 255', desc: 'Light / Mono mode canvas' },
    { id: 'text-primary', name: 'Text Primary (Dark)', hex: '#FAFAFA', rgb: '250, 250, 250', desc: 'High-contrast typography' },
  ];

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Press Room & Media Kit — OpportunityX"
        description="Official press resources, downloadable logo assets, color specifications, and brand guidelines for OpportunityX."
        canonicalPath="/press"
      />

      <Container size="lg">
        <div className="space-y-16 sm:space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Press & Brand Kit</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Official Media Kit & <span className="text-accent-brand">Brand Assets</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              Official branding resources, logo vectors, color palettes, and boilerplate copy for press, hackathon organizers, and media outlets.
            </p>
          </div>

          {/* Quick Boilerplate Card */}
          <section className="rounded-3xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-text-primary">OpportunityX Boilerplate</h2>
              <button
                onClick={() =>
                  handleCopy(
                    'OpportunityX is a unified student and builder Career Operating System. Founded by Anurag Verma, the ecosystem connects real-time opportunity discovery (Radar), privacy-first ATS resume architecture, cryptographic certificate verification, and developer learning tracks under one authoritative platform.',
                    'boilerplate'
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-elevated border border-border-subtle text-xs font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                {copiedColor === 'boilerplate' ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copy Bio</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface-elevated p-4 rounded-xl border border-border-subtle font-sans">
              "OpportunityX is a unified student and builder Career Operating System. Founded by Anurag Verma, the ecosystem connects real-time opportunity discovery (Radar), privacy-first ATS resume architecture, cryptographic certificate verification, and developer learning tracks under one authoritative platform."
            </p>
          </section>

          {/* Brand Logo Assets */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-text-primary">Official Logo Assets</h2>
              <p className="text-sm text-text-secondary">
                Download the finalized OpportunityX symbol and wordmark in SVG format.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Full Brand Wordmark */}
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 flex flex-col justify-between items-center text-center space-y-6 shadow-xs">
                <div className="py-8 flex items-center justify-center">
                  <BrandLogo variant="full" height={36} />
                </div>
                <div className="w-full pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-xs font-medium text-text-secondary">Full Wordmark (SVG)</span>
                  <a
                    href="/brand/opportunityx-logo-full.svg"
                    download="opportunityx-logo-full.svg"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-brand hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Symbol Icon Only */}
              <div className="rounded-2xl border border-border-subtle bg-surface p-6 flex flex-col justify-between items-center text-center space-y-6 shadow-xs">
                <div className="py-8 flex items-center justify-center">
                  <BrandLogo variant="icon" height={44} />
                </div>
                <div className="w-full pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-xs font-medium text-text-secondary">Symbol Icon (SVG)</span>
                  <a
                    href="/brand/opportunityx-symbol.svg"
                    download="opportunityx-symbol.svg"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-brand hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Monochromatic Variant */}
              <div className="rounded-2xl border border-border-subtle bg-white text-black p-6 flex flex-col justify-between items-center text-center space-y-6 shadow-xs">
                <div className="py-8 flex items-center justify-center">
                  <span className="text-2xl font-black tracking-tight font-sans">
                    Opportunity<span className="text-black">X</span>
                  </span>
                </div>
                <div className="w-full pt-4 border-t border-zinc-200 flex items-center justify-between text-zinc-600">
                  <span className="text-xs font-medium">Monochrome Dark/Light</span>
                  <a
                    href="/brand/opportunityx-monochrome.svg"
                    download="opportunityx-monochrome.svg"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-black hover:underline"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Color Palette Specifications */}
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-text-primary">Color Palette</h2>
              <p className="text-sm text-text-secondary">
                Click any value to copy HEX or RGB color definitions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {brandColors.map((c) => (
                <div
                  key={c.id}
                  onClick={() => handleCopy(c.hex, c.id)}
                  className="rounded-2xl border border-border-subtle bg-surface p-4 space-y-3 cursor-pointer hover:border-accent-brand/40 transition-all shadow-xs group"
                >
                  <div
                    className="h-20 w-full rounded-xl border border-border-subtle flex items-end p-2 transition-transform group-hover:scale-[1.02]"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-text-primary">{c.name}</span>
                      {copiedColor === c.id && (
                        <span className="text-[10px] font-mono text-emerald-500 flex items-center gap-1">
                          <Check className="h-3 w-3" /> Copied
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] font-mono text-text-muted">{c.hex} • {c.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Press Inquiries */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-text-primary">Media & Press Inquiries</h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                For interview requests, event sponsorships, or quote requests with founder Anurag Verma:
              </p>
            </div>
            <a
              href="mailto:press@opportunityx.co.in"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-all shrink-0 shadow-xs"
            >
              <Mail className="h-4 w-4" />
              <span>press@opportunityx.co.in</span>
            </a>
          </section>
        </div>
      </Container>
    </div>
  );
};
