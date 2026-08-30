export type ProductStatus =
  | 'live'
  | 'in-development'
  | 'planned'
  | 'on-hold'
  | 'cancelled';

export interface StatusMetadata {
  key: ProductStatus;
  label: string;
  shortLabel: string;
  description: string;
  dotColor: string;
  badgeClasses: string;
  borderClasses: string;
  monochromeDotColor: string;
  monochromeBadgeClasses: string;
}

export const STATUS_CONFIGS: Record<ProductStatus, StatusMetadata> = {
  live: {
    key: 'live',
    label: 'Live',
    shortLabel: 'Live',
    description: 'Genuinely available and operational.',
    dotColor: 'bg-emerald-500',
    badgeClasses:
      'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
    borderClasses: 'border-emerald-500/30',
    monochromeDotColor: 'bg-text-primary',
    monochromeBadgeClasses:
      'bg-surface-elevated text-text-primary border-border-strong',
  },
  'in-development': {
    key: 'in-development',
    label: 'In Development',
    shortLabel: 'In Dev',
    description: 'Active development is currently underway.',
    dotColor: 'bg-blue-500',
    badgeClasses:
      'bg-blue-500/10 text-blue-600 border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30',
    borderClasses: 'border-blue-500/30',
    monochromeDotColor: 'bg-text-primary',
    monochromeBadgeClasses:
      'bg-surface-elevated text-text-primary border-border-subtle',
  },
  planned: {
    key: 'planned',
    label: 'Planned',
    shortLabel: 'Planned',
    description: 'Part of the current roadmap; development has not started yet.',
    dotColor: 'bg-amber-500',
    badgeClasses:
      'bg-amber-500/10 text-amber-700 border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
    borderClasses: 'border-amber-500/30',
    monochromeDotColor: 'bg-text-muted',
    monochromeBadgeClasses:
      'bg-surface-elevated text-text-muted border-border-subtle',
  },
  'on-hold': {
    key: 'on-hold',
    label: 'On Hold',
    shortLabel: 'On Hold',
    description: 'Development or planning has been temporarily paused.',
    dotColor: 'bg-zinc-400 dark:bg-zinc-500',
    badgeClasses:
      'bg-zinc-500/10 text-zinc-700 border-zinc-500/30 dark:bg-zinc-500/10 dark:text-zinc-400 dark:border-zinc-500/30',
    borderClasses: 'border-zinc-500/30',
    monochromeDotColor: 'bg-text-muted',
    monochromeBadgeClasses:
      'bg-surface-elevated text-text-muted border-border-subtle border-dashed',
  },
  cancelled: {
    key: 'cancelled',
    label: 'Cancelled / Archived',
    shortLabel: 'Archived',
    description: 'Officially dropped, cancelled, retired, or archived.',
    dotColor: 'bg-rose-500',
    badgeClasses:
      'bg-rose-500/10 text-rose-700 border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/30',
    borderClasses: 'border-rose-500/30',
    monochromeDotColor: 'bg-text-muted',
    monochromeBadgeClasses:
      'bg-surface-elevated text-text-muted border-border-subtle line-through opacity-70',
  },
};

export interface EcosystemProduct {
  id: string;
  name: string;
  shortName: string;
  status: ProductStatus;
  isFlagship?: boolean;
  tagline: string;
  description: string;
  category: string;
  categories: string[];
  capabilities: string[];
  externalUrl?: string;
  statusReason?: string;
  isDevelopmentPriority?: boolean;
  archived?: boolean;
  releaseInfo?: string;
}

export const ROADMAP_DISCLAIMER =
  'Planned projects represent our current vision and are not guaranteed to enter development or launch. Plans may change, be postponed, or be cancelled as priorities, resources, and feasibility evolve.';

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  // ==========================================
  // 1. LIVE PRODUCTS (Operational & Available)
  // ==========================================
  {
    id: 'radar',
    name: 'OpportunityX Radar',
    shortName: 'Radar',
    status: 'live',
    isFlagship: true,
    tagline: 'The real-time discovery engine for global student opportunities.',
    description:
      'Aggregates, categorizes, and indexes high-impact hackathons, early-career internships, fellowships, open-source grants, and technical summits into a single verified stream.',
    externalUrl: 'https://radar.opportunityx.co.in',
    category: 'Discovery',
    categories: [
      'Hackathons',
      'Internships',
      'Scholarships',
      'Open Source',
      'Fellowships',
      'Workshops',
    ],
    capabilities: [
      'Real-time verified indexing',
      'Domain & category filtering',
      'Direct application routing',
      'Global deadline tracking',
    ],
    releaseInfo: 'Production v2.1 Live',
  },
  {
    id: 'verification',
    name: 'OpportunityX Verify',
    shortName: 'Verify',
    status: 'live',
    isFlagship: false,
    tagline: 'Cryptographic & peer-validated proof of skill.',
    description:
      'Tamper-proof digital credentials and verification infrastructure verifying hackathon wins, open-source contributions, and technical project validations.',
    externalUrl: 'https://verify.opportunityx.co.in',
    category: 'Credentials',
    categories: ['Credentials', 'Proof of Skill', 'Integrity', 'Verification'],
    capabilities: [
      'Tamper-proof credential ledger',
      'Instant employer verification',
      'Skill validation hashes',
      'Verified badge exports',
    ],
    releaseInfo: 'Operational Ledger v1.0',
  },
  {
    id: 'resume',
    name: 'OpportunityX Resume',
    shortName: 'Resume',
    status: 'live',
    isFlagship: false,
    tagline: 'ATS-optimized engineering resume architect.',
    description:
      'Markdown-powered, typography-first technical resume builder designed for engineering hiring managers and modern automated parsing pipelines.',
    externalUrl: 'https://resume.opportunityx.co.in',
    category: 'Career Tools',
    categories: ['Resume Builder', 'ATS Scoring', 'Markdown', 'Career'],
    capabilities: [
      'Code & markdown-first editor',
      'Real-time ATS parsing audit',
      'Clean PDF & JSON exports',
      'Engineering templates',
    ],
    releaseInfo: 'Production Editor v1.2',
  },

  // ==========================================
  // 2. IN DEVELOPMENT (Active Priority)
  // ==========================================
  {
    id: 'learn',
    name: 'OpportunityX Learning Hub',
    shortName: 'Learn',
    status: 'in-development',
    isDevelopmentPriority: true,
    tagline: 'Structured learning pathways & developer curriculum.',
    description:
      'Comprehensive engineering curriculum, hands-on tutorials, architecture blueprints, and guided skill tracks built for student developers transitioning from fundamentals to production systems.',
    category: 'Education',
    categories: [
      'Education',
      'Curriculum',
      'Developer Tracks',
      'Skill Building',
    ],
    capabilities: [
      'Structured learning pathways',
      'Interactive coding guides',
      'Architecture deep dives',
      'Hands-on practice modules',
    ],
    releaseInfo: 'Current Active Engineering Priority',
  },

  // ==========================================
  // 3. ON HOLD (Paused Development)
  // ==========================================
  {
    id: 'freelance',
    name: 'OpportunityX Freelancing',
    shortName: 'Freelancing',
    status: 'on-hold',
    tagline: 'Bounties, micro-gigs & collaborative client projects.',
    description:
      'Connecting student builders with verified technical bounties, startup contracts, and paid client problem statements.',
    statusReason:
      'Project previously developed to a baseline; development is temporarily paused to focus on core learning and verification priorities.',
    category: 'Bounties',
    categories: ['Bounties', 'Micro-gigs', 'Client Work', 'Contracts'],
    capabilities: [
      'Verified client bounties',
      'Escrow-backed milestones',
      'Collaborative team contracts',
    ],
  },

  // ==========================================
  // 4. PLANNED ROADMAP
  // ==========================================
  {
    id: 'jobs',
    name: 'OpportunityX Jobs',
    shortName: 'Jobs',
    status: 'planned',
    tagline: 'Curated early-career tech jobs & student hiring network.',
    description:
      'Direct connection to startup and enterprise engineering roles, internships, and entry-level developer positions with transparent requirements and direct recruiter matches.',
    category: 'Hiring',
    categories: ['Job Board', 'Internships', 'Hiring', 'Startups'],
    capabilities: [
      'Verified employer postings',
      'Direct recruiter referrals',
      'Skill-matched applications',
    ],
  },
  {
    id: 'portfolio',
    name: 'OpportunityX Portfolio',
    shortName: 'Portfolio',
    status: 'planned',
    tagline: 'Dynamic proof-of-work showcasing.',
    description:
      'Deployable personal developer portfolios linked directly to GitHub contributions, hackathon achievements, and verified ecosystem credentials.',
    category: 'Showcase',
    categories: ['Proof of Work', 'GitHub Sync', 'Showcase', 'Websites'],
    capabilities: [
      'GitHub repository sync',
      'Custom domain deployment',
      'Verified achievement showcase',
    ],
  },
  {
    id: 'community-platform',
    name: 'OpportunityX Community',
    shortName: 'Community',
    status: 'planned',
    tagline: 'Integrated builder network & peer collaboration platform.',
    description:
      'Deep platform tooling for peer code review, study pods, hackathon team formation, and real-time community engagement.',
    category: 'Community',
    categories: ['Collaboration', 'Peer Review', 'Teams', 'Mentorship'],
    capabilities: [
      'Hackathon team finder',
      'Peer code review exchange',
      'Study pod coordination',
    ],
  },
  {
    id: 'ai',
    name: 'OpportunityX AI',
    shortName: 'AI Mentor',
    status: 'planned',
    tagline: 'AI-assisted career navigation & code mentor.',
    description:
      'Intelligent career navigation engine providing contextual resume feedback, opportunity matching algorithms, and automated mock interviews.',
    category: 'Intelligence',
    categories: ['Artificial Intelligence', 'Smart Matching', 'Career AI'],
    capabilities: [
      'Smart opportunity matching',
      'AI resume refinement',
      'Technical mock assessments',
    ],
  },
  {
    id: 'mentorship',
    name: 'OpportunityX Mentorship',
    shortName: 'Mentorship',
    status: 'planned',
    tagline: '1-on-1 industry guidance & engineering office hours.',
    description:
      'Direct mentorship sessions with senior engineers, open-source maintainers, and tech leaders to guide students through architecture and career decisions.',
    category: 'Mentorship',
    categories: ['Mentorship', 'Office Hours', 'Career Guidance'],
    capabilities: [
      '1-on-1 booking calendar',
      'Structured session roadmaps',
      'Mentor feedback notes',
    ],
  },
  {
    id: 'support',
    name: 'OpportunityX Support Platform',
    shortName: 'Support',
    status: 'planned',
    tagline: 'Centralized support desk, documentation & user assistance.',
    description:
      'Dedicated support infrastructure offering unified ticketing, knowledge bases, and developer documentation across all OpportunityX tools.',
    category: 'Support',
    categories: ['Support', 'Helpdesk', 'Knowledge Base', 'Documentation'],
    capabilities: [
      'Unified support tickets',
      'Searchable docs & FAQs',
      'Fast SLA resolution',
    ],
  },
  {
    id: 'arena',
    name: 'OpportunityX Arena',
    shortName: 'Arena',
    status: 'planned',
    tagline: 'Competitive developer challenges & algorithmic sprints.',
    description:
      'Timed coding challenges, algorithmic arenas, and collaborative virtual hackathon hosting environments for high-velocity problem solving.',
    category: 'Competitions',
    categories: ['Competitions', 'Hackathons', 'Algorithm Arena', 'Sprints'],
    capabilities: [
      'Real-time leaderboards',
      'Virtual hackathon staging',
      'Automated code execution test suites',
    ],
  },
];

export interface CommunitySnippet {
  id: string;
  tag: string;
  topic: string;
  category: string;
  content: string;
  meta: string;
}

export interface CommunityConfig {
  headline: string;
  subtitle: string;
  narrative: string;
  communityUrl: string;
  snippets: CommunitySnippet[];
  pillars: {
    title: string;
    description: string;
  }[];
}

export const COMMUNITY_CONFIG: CommunityConfig = {
  headline: 'One community. Everyone building together.',
  subtitle: 'The centralized network for student developers, builders, and innovators.',
  narrative:
    'OpportunityX maintains exactly one unified builder community. Rather than splintering into isolated product silos, all members share discovery insights, collaborate on hackathons, conduct peer code reviews, and build in public together.',
  communityUrl: 'https://discord.gg/qSjCRDTKN5',
  pillars: [
    {
      title: 'Unified Network',
      description:
        'Zero product fragmentation. Radar users, open-source contributors, and builders all collaborate in one space.',
    },
    {
      title: 'Build in Public',
      description:
        'Share daily progress, architecture decisions, and real project milestones with constructive peer feedback.',
    },
    {
      title: 'Opportunity Exchange',
      description:
        'Form hackathon teams, find co-builders for side projects, and exchange early career insights.',
    },
  ],
  snippets: [
    {
      id: 'snippet-1',
      tag: 'Team Formation',
      category: 'Hackathon Collaboration',
      topic: 'Web3 & Distributed Systems Hackathon',
      content:
        'Looking for 2 frontend engineers with React + TypeScript experience to collaborate on a decentralized credential visualizer for the upcoming global hackathon.',
      meta: 'Radar Opportunity Match • Open to All Levels',
    },
    {
      id: 'snippet-2',
      tag: 'Build In Public',
      category: 'Open Source',
      topic: 'OpportunityX Ecosystem Core',
      content:
        'Merged our first open-source PR to the OpportunityX core documentation and design tokens! Verified cross-theme contrast accessibility across all mobile breakpoints.',
      meta: 'Verified Contribution • Architecture & Design System',
    },
    {
      id: 'snippet-3',
      tag: 'Peer Review',
      category: 'Proof of Work',
      topic: 'Distributed Systems Portfolio Architecture',
      content:
        'Seeking candid feedback on my distributed cache project architecture diagram and API spec before applying for upcoming summer backend internships.',
      meta: 'Technical Showcase • Constructive Peer Review',
    },
  ],
};

// ==========================================
// Centralized Query Helpers (Derived Data)
// ==========================================

export const getFlagshipProduct = (): EcosystemProduct => {
  const flagship = ECOSYSTEM_PRODUCTS.find((p) => p.isFlagship && !p.archived);
  if (!flagship) {
    return ECOSYSTEM_PRODUCTS[0];
  }
  return flagship;
};

export const getLiveProducts = (): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter((p) => p.status === 'live' && !p.archived);
};

export const getInDevelopmentProducts = (): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter(
    (p) => p.status === 'in-development' && !p.archived
  );
};

export const getPlannedProducts = (): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter(
    (p) => p.status === 'planned' && !p.archived
  );
};

export const getOnHoldProducts = (): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter(
    (p) => p.status === 'on-hold' && !p.archived
  );
};

export const getArchivedProducts = (): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter(
    (p) => p.status === 'cancelled' || p.archived === true
  );
};

export const getProductsByStatus = (status: ProductStatus): EcosystemProduct[] => {
  return ECOSYSTEM_PRODUCTS.filter((p) => p.status === status && !p.archived);
};

export const getEcosystemStats = () => {
  const activeProducts = ECOSYSTEM_PRODUCTS.filter((p) => !p.archived && p.status !== 'cancelled');
  const live = activeProducts.filter((p) => p.status === 'live');
  const inDevelopment = activeProducts.filter((p) => p.status === 'in-development');
  const planned = activeProducts.filter((p) => p.status === 'planned');
  const onHold = activeProducts.filter((p) => p.status === 'on-hold');
  const archived = ECOSYSTEM_PRODUCTS.filter((p) => p.status === 'cancelled' || p.archived);

  return {
    totalActive: activeProducts.length,
    totalAll: ECOSYSTEM_PRODUCTS.length,
    liveCount: live.length,
    inDevelopmentCount: inDevelopment.length,
    plannedCount: planned.length,
    onHoldCount: onHold.length,
    archivedCount: archived.length,
  };
};
