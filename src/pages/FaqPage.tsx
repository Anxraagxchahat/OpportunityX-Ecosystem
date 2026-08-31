import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  HelpCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Compass,
  FileText,
  ShieldCheck,
  Zap,
  Mail,
  Sparkles,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SeoManager } from '@/components/common/SeoManager';

interface FaqItem {
  id: string;
  category: 'general' | 'radar' | 'resume' | 'verification' | 'pricing';
  question: string;
  answer: string;
}

export const FaqPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      category: 'general',
      question: 'What is the OpportunityX Ecosystem?',
      answer:
        'OpportunityX is a unified student and builder Career Operating System. It brings together real-time opportunity discovery (Radar), privacy-first ATS resume building (Resume), cryptographic certificate and association verification (Verify), and developer learning tracks under one authoritative platform.',
    },
    {
      id: 'faq-2',
      category: 'pricing',
      question: 'Is OpportunityX free to use, or are there paid plans?',
      answer:
        'Most of the OpportunityX ecosystem is completely free to use. Standard opportunity discovery on Radar, ATS resume creation, watermark-free PDF exports, public credential verification, and joining the Discord builder community have zero cost. Advanced AI-powered capabilities (such as high-volume AI resume optimization, automated bullet-point generations, extended AI token usage, and API integrations) operate on a token-based system with generous free credits and flexible premium upgrade plans.',
    },
    {
      id: 'faq-10',
      category: 'pricing',
      question: 'How do AI Tokens and Premium Plans work?',
      answer:
        'AI Tokens power our intelligent career assistance features, including automated bullet rephrasing, JD match scoring, and AI developer tools. Every user receives a free starter quota of AI tokens. For power users and teams who need heavy generation or developer APIs, we offer affordable token top-ups and dedicated premium plans.',
    },
    {
      id: 'faq-3',
      category: 'radar',
      question: 'How does OpportunityX Radar discover and verify opportunities?',
      answer:
        'Radar utilizes an automated ingestion pipeline that monitors official university portals, global hackathon organizers, open-source repositories, and verified partner announcements. Opportunities are categorized by domain, eligibility, format (Virtual/In-Person), and synchronized with your local timezone deadlines.',
    },
    {
      id: 'faq-4',
      category: 'resume',
      question: 'How is the OpportunityX Resume Builder ATS-compliant?',
      answer:
        'The Resume Builder follows strict Applicant Tracking System (ATS) parsing standards: single-column semantic hierarchy, machine-readable typography, AI-guided action-verb bullet scoring, and clean A4 PDF generation without complex nested graphics that confuse parsing algorithms.',
    },
    {
      id: 'faq-5',
      category: 'resume',
      question: 'Does OpportunityX store or sell my resume data?',
      answer:
        'No. OpportunityX Resume operates with a privacy-first architecture. Your resume drafts and personal contact details are stored locally in your browser session or encrypted securely. We never sell student data to third-party brokers or advertisers.',
    },
    {
      id: 'faq-6',
      category: 'verification',
      question: 'How does OpportunityX Verification work?',
      answer:
        'OpportunityX Verify provides a tamper-proof public lookup ledger. Each certificate, fellowship completion, or official club association credential issued by OpportunityX contains a unique cryptographic ID and QR code that recruiters or institutions can verify in real time at verify.opportunityx.co.in.',
    },
    {
      id: 'faq-7',
      category: 'general',
      question: 'How can student clubs or hackathons partner with OpportunityX?',
      answer:
        'Student tech clubs, college societies, and hackathon organizers can partner with us to list their competitions on Radar, co-host developer challenges, and issue verified participant credentials. Reach out through our Partnerships Desk at partnerships@opportunityx.co.in or visit the Contact page.',
    },
    {
      id: 'faq-8',
      category: 'general',
      question: 'How do I join the OpportunityX Builder Community?',
      answer:
        'OpportunityX maintains a single, unified Discord server for the entire ecosystem. You can join at discord.gg/qSjCRDTKN5 to find hackathon teammates, share code reviews, participate in build-in-public sessions, and interact directly with the core development team.',
    },
    {
      id: 'faq-9',
      category: 'radar',
      question: 'Can I submit my own hackathon or student program to Radar?',
      answer:
        'Yes! Organizers can submit opportunities for review. Once our team validates the organizers and eligibility requirements, the event is indexed globally on Radar.',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General & Ecosystem', icon: Sparkles },
    { id: 'radar', label: 'Opportunity Radar', icon: Compass },
    { id: 'resume', label: 'Resume Builder', icon: FileText },
    { id: 'verification', label: 'Verification & Trust', icon: ShieldCheck },
    { id: 'pricing', label: 'Pricing & Privacy', icon: Zap },
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full py-12 sm:py-16 lg:py-20 bg-canvas">
      <SeoManager
        title="Frequently Asked Questions (FAQ) — OpportunityX"
        description="Find answers to common questions about OpportunityX Radar, Resume Builder, Verification, student opportunities, and ecosystem privacy."
        canonicalPath="/faq"
      />

      <Container size="lg">
        <div className="space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-subtle px-3.5 py-1 text-xs font-semibold text-accent-brand border border-accent-glow font-mono uppercase tracking-wider">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Knowledge Desk</span>
            </div>
            <h1 className="type-h1 text-3xl sm:text-4xl lg:text-5xl font-black text-text-primary tracking-tight">
              Frequently Asked <span className="text-accent-brand">Questions</span>
            </h1>
            <p className="type-body-lg text-text-secondary text-base sm:text-lg leading-relaxed">
              Everything you need to know about using the OpportunityX ecosystem, discovering hackathons, crafting ATS resumes, and verifying credentials.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., ATS resume, Radar, free, verification)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-surface border border-border-subtle text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-focus-ring focus:border-transparent transition-all shadow-xs text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-accent-brand text-white shadow-xs'
                      : 'bg-surface border border-border-subtle text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 max-w-4xl">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isOpen = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="rounded-2xl border border-border-subtle bg-surface transition-all overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 hover:bg-surface-hover/50 transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-text-primary">
                        {faq.question}
                      </span>
                      <div className="p-1 rounded-lg bg-surface-elevated text-text-secondary shrink-0">
                        {isOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle pt-4 bg-surface-elevated/40">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-border-subtle bg-surface p-12 text-center space-y-3">
                <HelpCircle className="h-8 w-8 mx-auto text-text-muted" />
                <h3 className="text-base font-bold text-text-primary">No questions found</h3>
                <p className="text-xs sm:text-sm text-text-secondary">
                  We couldn't find any questions matching "{searchQuery}". Try a different keyword or reach out directly.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-accent-brand hover:underline pt-2"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Still have questions CTA */}
          <section className="rounded-3xl border border-border-subtle bg-surface-elevated p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs max-w-4xl">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-text-primary">Still have a question?</h3>
              <p className="text-xs sm:text-sm text-text-secondary">
                Our team is always available to assist students, organizers, and developers.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-accent-brand px-5 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-accent-hover transition-all shrink-0 shadow-xs"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Support Desk</span>
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
};
