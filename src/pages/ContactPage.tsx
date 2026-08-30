import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-14 lg:py-16 bg-canvas">
      <SeoManager
        title="Contact"
        description="Reach out to OpportunityX for general inquiries, partnerships, university collaborations, feedback, or support."
        canonicalPath="/contact"
      />

      <Container>
        {/* Page Header */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="flex items-center gap-2 text-accent-brand text-xs font-semibold tracking-wider uppercase mb-2">
            <MessageSquare className="h-4 w-4" aria-hidden="true" />
            <span>Contact Us</span>
          </div>
          <h1 className="type-h1 text-text-primary font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            Let's build what's next
          </h1>
          <p className="type-body-lg text-text-secondary mt-3 text-base sm:text-lg leading-relaxed max-w-2xl">
            Have a question, partnership proposal, or feedback? We'd like to hear from you. Use the form below or reach out directly through our official channels.
          </p>
        </div>

        {/* 2-Column Layout: Form + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main: Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border-subtle bg-surface p-5 sm:p-8 relative">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar: Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </Container>
    </div>
  );
};
