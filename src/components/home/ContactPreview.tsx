import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';

export const ContactPreview: React.FC = () => {
  return (
    <section
      id="contact-preview"
      className="relative w-full border-t border-border-subtle py-16 sm:py-20 lg:py-24 bg-canvas"
    >
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Eyebrow */}
          <div className="flex items-center justify-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-3">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>Get in Touch</span>
          </div>

          {/* Headline */}
          <h2 className="type-h2 text-text-primary font-bold tracking-tight mb-3">
            Have something to build together?
          </h2>

          {/* Subtitle */}
          <p className="type-body text-text-secondary text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you're a student community, university partner, recruiter, or builder with an idea — we'd like to hear from you.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring group"
          >
            <span>Contact OpportunityX</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
