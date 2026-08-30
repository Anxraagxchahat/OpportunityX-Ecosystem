export interface BlogAuthor {
  name: string;
  role: string;
  avatarUrl?: string;
}

export type BlogCategory =
  | 'All'
  | 'Ecosystem'
  | 'Radar & Opportunities'
  | 'Engineering & Architecture'
  | 'Community & Building';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Exclude<BlogCategory, 'All'>;
  author: BlogAuthor;
  publishedAt: string; // ISO 8601
  updatedAt?: string;
  coverImage?: string;
  tags: string[];
  readingTime: string;
  isFeatured?: boolean;
  status: 'published' | 'draft' | 'archived';
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Ecosystem',
  'Radar & Opportunities',
  'Engineering & Architecture',
  'Community & Building',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-01',
    slug: 'radar-v2-1-live-launch',
    title: 'OpportunityX Radar v2.1: The Real-Time Discovery Engine for Global Student Opportunities',
    excerpt:
      'Explore how OpportunityX Radar aggregates, verifies, and indexes high-impact hackathons, internships, scholarships, and open-source grants into a single unified stream.',
    category: 'Radar & Opportunities',
    author: {
      name: 'OpportunityX Core Team',
      role: 'Platform Engineering & Product',
    },
    publishedAt: '2026-02-15T09:00:00.000Z',
    updatedAt: '2026-02-18T14:30:00.000Z',
    tags: ['Radar', 'Product Launch', 'Hackathons', 'Internships', 'Open Source'],
    readingTime: '5 min read',
    isFeatured: true,
    status: 'published',
    content: `## The Fragmented Landscape of Student Opportunities

Every semester, thousands of student developers, designers, and researchers navigate a chaotic labyrinth of Discord servers, Telegram groups, unindexed job boards, and fragmented social feeds just to discover upcoming hackathons, internships, and technical fellowships. 

Opportunities frequently slip past application deadlines simply because they were buried in ephemeral chat channels or siloed within specific university networks.

OpportunityX Radar was engineered from the ground up to solve this fundamental discovery problem.

---

### Core Pillars of Radar v2.1

Radar v2.1 introduces a centralized, verifiable index designed specifically for builders:

1. **Real-Time Indexing & Deduplication:** Continuous monitoring across verified international organizers, hackathon platforms, and open-source foundations.
2. **Deterministic Domain Filtering:** Granular tagging across **Hackathons**, **Internships**, **Scholarships**, **Open Source**, **Fellowships**, and **Technical Workshops**.
3. **Application Deadline Intelligence:** Strict tracking with localized timezone awareness to eliminate missed submission cutoffs.
4. **Direct Application Pathways:** Outbound links route directly to official organizer submission portals with zero intermediary paywalls.

\`\`\`typescript
// Example OpportunityX Radar Ingestion Signature
export interface OpportunityNode {
  id: string;
  title: string;
  organizer: string;
  category: 'HACKATHON' | 'INTERNSHIP' | 'SCHOLARSHIP' | 'OPEN_SOURCE' | 'FELLOWSHIP';
  deadline: string; // ISO 8601
  isVerified: boolean;
  applicationUrl: string;
}
\`\`\`

---

### Verifiable Proof of Skill

Radar does not exist in isolation. It forms the discovery vanguard of the wider OpportunityX ecosystem. Discoveries made through Radar feed directly into your proof-of-work history, allowing verified project submissions and open-source milestones to build cryptographic proof of engineering ability.

> "Opportunities should find the builders whose curiosity and dedication earn them. Radar exists to bridge curiosity with direct action."

Launch the live application today at [radar.opportunityx.co.in](https://radar.opportunityx.co.in) to explore active registrations worldwide.`,
  },
  {
    id: 'blog-02',
    slug: 'engineering-the-opportunityx-ecosystem',
    title: 'Engineering the OpportunityX Ecosystem: A Unified Architecture for Builders',
    excerpt:
      'A technical teardown of how OpportunityX connects discovery, roadmaps, bounties, and proof-of-work under a decoupled, high-performance web architecture.',
    category: 'Engineering & Architecture',
    author: {
      name: 'OpportunityX Core Team',
      role: 'Systems Architecture',
    },
    publishedAt: '2026-02-10T12:00:00.000Z',
    tags: ['Architecture', 'Design Systems', 'TypeScript', 'Performance', 'React'],
    readingTime: '6 min read',
    isFeatured: false,
    status: 'published',
    content: `## Beyond Single-Purpose Platforms

Most student developer platforms suffer from architectural fragmentation. A student uses one tool to find hackathons, another to track roadmap skills, a third to find freelance bounties, and a disjointed PDF resume to apply for engineering roles.

The OpportunityX technical architecture was designed as a cohesive umbrella ecosystem spanning six specialized product nodes:

- **OpportunityX Radar:** Live real-time discovery engine.
- **OpportunityX Career:** Structured engineering tracks & milestone progression.
- **OpportunityX Freelancing:** Verified client bounties & team contracts.
- **OpportunityX Resume:** ATS-optimized markdown technical resume builder.
- **OpportunityX Portfolio:** Live repository-backed proof-of-work showcasing.
- **OpportunityX Verification:** Cryptographic credential ledger.

---

### Frontend Design System & Tri-Mode Theming

To maintain visual unity across independent product domains, we established a strict token architecture supporting three first-class visual themes:

- **Dark Mode:** Deep zinc canvas (\`#09090B\`) with OpportunityX electric amber accents.
- **Light Mode:** Crisp slate canvas (\`#FFFFFF\`) with warm amber accents.
- **Monochromatic Mode:** High-contrast pitch canvas with pure grayscale tokens and zero chromatic orange.

\`\`\`css
/* Semantic Design Token Contract */
:root[data-theme="monochromatic"] {
  --color-canvas: #FFFFFF;
  --color-surface: #F4F4F5;
  --color-text-primary: #000000;
  --color-accent-brand: #000000; /* Zero orange allowed */
}
\`\`\`

---

### Zero-FOUC Synchronization

Theme preferences are persisted to \`localStorage\` and applied synchronously in the initial HTML document head before React hydration occurs. This eliminates visual flash-of-unstyled-content (FOUC) and ensures seamless rendering on mobile and desktop viewports.`,
  },
  {
    id: 'blog-03',
    slug: 'building-in-public-with-opportunityx',
    title: 'Building in Public: Why We United Students, Engineers, and Open Source',
    excerpt:
      'Discover the philosophy behind the single unified OpportunityX builder community and why we reject fragmented product silos.',
    category: 'Community & Building',
    author: {
      name: 'OpportunityX Community Team',
      role: 'Developer Relations',
    },
    publishedAt: '2026-02-01T15:00:00.000Z',
    tags: ['Community', 'Open Source', 'Build In Public', 'Collaboration'],
    readingTime: '4 min read',
    isFeatured: false,
    status: 'published',
    content: `## One Community. Zero Silos.

When modern platforms release multiple products, they often create separate community channels for each tool. A user interested in hackathons gets isolated from an engineer building distributed systems or a student looking for code review.

OpportunityX deliberately rejects product-specific community fragmentation.

---

### The Three Tenets of the OpportunityX Builder Network

1. **Unified Network:** Radar discoverers, open-source contributors, and career roadmap learners all share a single room.
2. **Build in Public:** Daily commits, architecture RFCs, and project teardowns are shared openly for constructive feedback.
3. **Collaborative Team Formation:** Instant matchmaking for hackathons and open-source bounties based on real proof-of-work rather than inflated resumes.

> "True engineering growth happens when beginner curiosity collides with senior mentorship in a transparent public forum."

Join our central builder Discord at [discord.gg/qSjCRDTKN5](https://discord.gg/qSjCRDTKN5) to participate in upcoming code reviews and hackathon team formations.`,
  },
];

// Content Access Queries
export const getAllBlogs = (): BlogPost[] => {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getFeaturedBlog = (): BlogPost | undefined => {
  return (
    BLOG_POSTS.find((p) => p.isFeatured && p.status === 'published') ||
    getAllBlogs()[0]
  );
};

export const getBlogBySlug = (slug: string): BlogPost | undefined => {
  if (!slug) return undefined;
  const sanitized = slug.trim().toLowerCase();
  return BLOG_POSTS.find((p) => p.slug.toLowerCase() === sanitized && p.status === 'published');
};

export const getRelatedBlogs = (currentSlug: string, limit = 2): BlogPost[] => {
  const current = getBlogBySlug(currentSlug);
  if (!current) return [];

  return getAllBlogs()
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => {
      const aMatches = a.tags.filter((t) => current.tags.includes(t)).length;
      const bMatches = b.tags.filter((t) => current.tags.includes(t)).length;
      return bMatches - aMatches;
    })
    .slice(0, limit);
};

export const getCategories = (): BlogCategory[] => {
  return BLOG_CATEGORIES;
};

export const searchBlogs = (query: string, category: BlogCategory = 'All'): BlogPost[] => {
  let results = getAllBlogs();

  if (category && category !== 'All') {
    results = results.filter((p) => p.category === category);
  }

  if (query && query.trim()) {
    const q = query.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.author.name.toLowerCase().includes(q)
    );
  }

  return results;
};
