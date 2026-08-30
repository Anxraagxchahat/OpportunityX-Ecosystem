// ==========================================================================
// OPPORTUNITYX NAVIGATION ARCHITECTURE & INFORMATION ARCHITECTURE
// Source of Truth for Primary Navigation, Child Categorization & Community
// ==========================================================================

export interface NavChildItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  badge?: string;
}

export interface NavItemConfig {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChildItem[];
}

// --------------------------------------------------------------------------
// CENTRALIZED COMMUNITY PLATFORMS CONFIGURATION
// --------------------------------------------------------------------------
export const COMMUNITY_PLATFORMS = {
  discord: {
    id: 'discord',
    label: 'Discord',
    subLabel: 'Builder Community',
    description: 'Real-time discussions, hackathon teams, and peer reviews.',
    url: 'https://discord.gg/qSjCRDTKN5',
    isExternal: true,
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'WhatsApp',
    subLabel: 'Announcement Channel',
    description: 'Instant official notifications, alerts, and platform broadcasts.',
    url: 'https://whatsapp.com/channel/0029VbCJPeEGU3BK1bvZl32c',
    isExternal: true,
  },
} as const;

// --------------------------------------------------------------------------
// MANDATORY PRIMARY NAVIGATION ORDER (1. Home -> 2. Editorial -> 3. Notifications -> 4. Community -> 5. Downloads -> 6. Contact)
// --------------------------------------------------------------------------
export const PRIMARY_NAV_CONFIG: NavItemConfig[] = [
  {
    id: 'nav-home',
    label: 'Home',
    href: '/',
  },
  {
    id: 'nav-editorial',
    label: 'Editorial',
    href: '/editorial',
    hasDropdown: true,
    children: [
      {
        id: 'editorial-blogs',
        label: 'Blogs',
        href: '/blogs',
        description: 'Regular OpportunityX posts, updates, announcements, and learning content.',
      },
      {
        id: 'editorial-guides',
        label: 'Guides',
        href: '/editorial/guides',
        description: 'Practical step-by-step resources, playbooks, and career guides.',
      },
      {
        id: 'editorial-articles',
        label: 'Articles',
        href: '/editorial/articles',
        description: 'Long-form educational, technical, and architectural breakdowns.',
      },
      {
        id: 'editorial-insights',
        label: 'Insights',
        href: '/editorial/insights',
        description: 'Ecosystem research, industry observations, and analysis.',
      },
    ],
  },
  {
    id: 'nav-notifications',
    label: 'Notifications',
    href: '/notifications',
    hasDropdown: true,
    children: [
      {
        id: 'notif-releases',
        label: 'Releases',
        href: '/notifications/releases',
        description: 'Platform version releases, feature changelogs, and milestones.',
      },
      {
        id: 'notif-announcements',
        label: 'Announcements',
        href: '/notifications/announcements',
        description: 'Major platform bulletins, events, and community news.',
      },
      {
        id: 'notif-updates',
        label: 'Updates',
        href: '/notifications/updates',
        description: 'General system improvements, notices, and status updates.',
      },
    ],
  },
  {
    id: 'nav-community',
    label: 'Community',
    href: '/#community-section',
    hasDropdown: true,
    children: [
      {
        id: 'community-discord',
        label: 'Discord',
        href: COMMUNITY_PLATFORMS.discord.url,
        description: COMMUNITY_PLATFORMS.discord.description,
        isExternal: true,
      },
      {
        id: 'community-whatsapp',
        label: 'WhatsApp',
        href: COMMUNITY_PLATFORMS.whatsapp.url,
        description: COMMUNITY_PLATFORMS.whatsapp.description,
        isExternal: true,
      },
    ],
  },
  {
    id: 'nav-downloads',
    label: 'Downloads',
    href: '/downloads',
  },
  {
    id: 'nav-contact',
    label: 'Contact',
    href: '/contact',
  },
];
