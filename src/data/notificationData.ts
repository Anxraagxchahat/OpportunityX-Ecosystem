export type NotificationType =
  | 'RELEASE'
  | 'ANNOUNCEMENT'
  | 'UPDATE'
  | 'MAINTENANCE'
  | 'COMMUNITY'
  | 'IMPORTANT';

export type NotificationPriority = 'NORMAL' | 'IMPORTANT' | 'CRITICAL';

export type NotificationStatus = 'ACTIVE' | 'ARCHIVED';

export interface NotificationItem {
  id: string;
  title: string;
  summary: string;
  content?: string;
  type: NotificationType;
  priority: NotificationPriority;
  publishedAt: string; // ISO 8601
  updatedAt?: string;
  version?: string;
  href?: string;
  actionText?: string;
  isPinned?: boolean;
  status: NotificationStatus;
}

export const NOTIFICATION_TYPES: { label: string; value: NotificationType | 'ALL' }[] = [
  { label: 'All Updates', value: 'ALL' },
  { label: 'Releases', value: 'RELEASE' },
  { label: 'Announcements', value: 'ANNOUNCEMENT' },
  { label: 'Platform Updates', value: 'UPDATE' },
  { label: 'Maintenance', value: 'MAINTENANCE' },
  { label: 'Community', value: 'COMMUNITY' },
];

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  {
    id: 'notif-resume-builder-testing-sep2026',
    title: 'Resume Builder Is Now Live for Testing',
    summary:
      'OpportunityX Resume Builder is now publicly available for testing. Create ATS-compliant technical resumes directly within the ecosystem.',
    content: `### Resume Builder Is Now Live for Testing

**September 1, 2026**

OpportunityX Resume Builder is now publicly available for testing.

You can now create and work on your resume directly through the OpportunityX ecosystem.

This release marks an important step toward building a more complete career toolkit for students.

The Resume Builder is ready for real-world testing, but development doesn't stop here.

As more students use it, we will continue identifying issues, improving the experience, and refining the product.

Found something that doesn't work as expected?

Report it or tag us with the issue so we can investigate and improve it.

**Build your resume. Test the experience. Help us make it better.**

— OpportunityX`,
    type: 'RELEASE',
    priority: 'IMPORTANT',
    publishedAt: '2026-09-01T10:00:00.000Z',
    version: 'v2.0.0-beta',
    href: 'https://resume.opportunityx.co.in',
    actionText: 'Launch Resume Builder ↗',
    isPinned: true,
    status: 'ACTIVE',
  },
  {
    id: 'notif-ecosystem-live-sep2026',
    title: 'OpportunityX Ecosystem Is Now Live',
    summary:
      'Today marks the proper public launch of the OpportunityX ecosystem. Discover how a small hackathon bot evolved into a broader career toolkit.',
    content: `### OpportunityX Ecosystem Is Now Live

**September 1, 2026**

Today marks the proper public launch of the OpportunityX ecosystem.

What started as a small hackathon alert bot has gradually evolved into a broader ecosystem designed around student opportunities, career preparation, and useful career tools.

The ecosystem is now entering its next phase.

The OpportunityX identity has reached its final logo direction.

The interface has been refined.

The Radar system has been improved.

A new **Monochromatic Mode** has been introduced.

And new products are beginning to become available inside the ecosystem.

This is not the end of development.

It is the beginning of building OpportunityX in public — continuously improving the products, fixing issues, and adding useful capabilities over time.

Welcome to the next chapter of OpportunityX.

**Discover. Build. Grow.**`,
    type: 'ANNOUNCEMENT',
    priority: 'IMPORTANT',
    publishedAt: '2026-09-01T09:00:00.000Z',
    version: 'v1.0.0',
    href: '/',
    actionText: 'Explore Ecosystem',
    isPinned: true,
    status: 'ACTIVE',
  },
  {
    id: 'notif-visual-product-update-sep2026',
    title: 'OpportunityX Gets a New Visual & Product Update',
    summary:
      'Finalized logo direction, improved interface refinements, updated Radar discovery engine, and the introduction of Monochromatic Mode.',
    content: `### OpportunityX Gets a New Visual & Product Update

**September 1, 2026**

OpportunityX is receiving a major product refinement update.

#### Final Logo Direction
The OpportunityX logo has now reached its final direction. From this point forward, the focus shifts away from changing the brand identity and toward improving the products built under it.

#### Improved UI
The interface has received another round of refinements to make the overall ecosystem cleaner, more consistent, and easier to use. UI improvements will continue over time as the platform evolves.

#### Radar Improvements
The OpportunityX Radar system has also been improved, strengthening the way opportunities can be discovered across the ecosystem.

#### Introducing Monochromatic Mode
A new **Monochromatic Mode** is now available as part of the OpportunityX visual experience. It provides a more minimal, restrained interface while maintaining the core identity of the ecosystem.

This is another step in making OpportunityX more flexible without losing consistency.

More improvements will follow.

**This ecosystem is still being built.**`,
    type: 'UPDATE',
    priority: 'NORMAL',
    publishedAt: '2026-09-01T08:00:00.000Z',
    href: '/',
    actionText: 'Explore Updates',
    isPinned: false,
    status: 'ACTIVE',
  },
  {
    id: 'notif-radar-2-1-release',
    title: 'OpportunityX Radar v2.1.0 Production Release',
    summary:
      'OpportunityX Radar v2.1 is officially live with real-time student hackathon indexing, direct application links, and enhanced search filtering.',
    content: `### Release Overview — OpportunityX Radar v2.1.0

We are excited to announce the production release of **OpportunityX Radar v2.1.0**. This release represents a significant milestone in bringing real-time discovery intelligence to student builders worldwide.

#### What's New:
- **Global Indexing Pipeline:** Automated ingestion across 100+ verified organizers and universities.
- **Granular Categories:** Fast filtering across Hackathons, Internships, Open-Source Grants, and Fellowships.
- **Timezone-Aware Deadlines:** Automatic countdowns synchronized to the user's local timezone.
- **Direct Submission Routing:** One-click navigation to official application pages.

Visit [radar.opportunityx.co.in](https://radar.opportunityx.co.in) to explore opportunities currently open for registration.`,
    type: 'RELEASE',
    priority: 'NORMAL',
    publishedAt: '2026-02-15T09:00:00.000Z',
    version: 'v2.1.0',
    href: 'https://radar.opportunityx.co.in',
    actionText: 'Launch Radar ↗',
    isPinned: false,
    status: 'ACTIVE',
  },
  {
    id: 'notif-ecosystem-web-launch',
    title: 'OpportunityX Main Ecosystem Portal Online',
    summary:
      'The unified OpportunityX main website is now live, introducing the connected multi-product directory, community gateways, and editorial insights.',
    content: `### Welcome to OpportunityX

The official OpportunityX Main Ecosystem Website is now live.

This portal serves as the authoritative umbrella for all current and upcoming OpportunityX products, including **Radar**, **Career**, **Freelancing**, **Resume**, **Portfolio**, and **Verification**.

#### Key Features:
- **Product Registry & Roadmap:** Live tracking of product releases and developmental milestones.
- **Centralized Builder Community:** Direct bridges to join peer code review sessions and hackathon teams.
- **Editorial Hub:** In-depth technical architecture breakdowns and builder playbooks.
- **Tri-Mode Theming:** Seamless support for Dark, Light, and Monochromatic design modes.`,
    type: 'ANNOUNCEMENT',
    priority: 'NORMAL',
    publishedAt: '2026-02-12T10:00:00.000Z',
    version: 'v1.0.0',
    href: '/',
    actionText: 'Explore Ecosystem',
    isPinned: false,
    status: 'ACTIVE',
  },
  {
    id: 'notif-community-discord-launch',
    title: 'Central OpportunityX Builder Discord Launched',
    summary:
      'Join the single, unified builder community to collaborate on hackathons, share daily progress, and receive peer architecture reviews.',
    content: `### Uniting Student Builders

OpportunityX maintains one central, unified Discord server for all members of the ecosystem. Whether you are using Radar to find competitions or contributing to open-source components, everyone shares the same space.

#### Community Channels:
- \`#hackathon-teams\`: Form multidisciplinary teams with designers and engineers.
- \`#build-in-public\`: Share daily milestones and technical roadblocks.
- \`#code-reviews\`: Get constructive feedback on repository pull requests and system design.

Join the conversation: [discord.gg/qSjCRDTKN5](https://discord.gg/qSjCRDTKN5)`,
    type: 'COMMUNITY',
    priority: 'NORMAL',
    publishedAt: '2026-02-05T14:00:00.000Z',
    href: 'https://discord.gg/qSjCRDTKN5',
    actionText: 'Join Discord Community ↗',
    isPinned: false,
    status: 'ACTIVE',
  },
  {
    id: 'notif-scheduled-maintenance-q1',
    title: 'Scheduled Discovery Indexer Infrastructure Optimization',
    summary:
      'Completed scheduled query optimization and caching enhancements on the Radar ingestion pipeline with zero downtime.',
    content: `### Maintenance Completed

The OpportunityX infrastructure team completed routine query index optimization on the background data ingestion workers.

- **Downtime:** 0 minutes
- **Impact:** 30% reduction in query latency on Radar search filters
- **Status:** All systems operational`,
    type: 'MAINTENANCE',
    priority: 'NORMAL',
    publishedAt: '2026-01-28T04:00:00.000Z',
    isPinned: false,
    status: 'ACTIVE',
  },
];

export const getAllNotifications = (): NotificationItem[] => {
  return [...NOTIFICATIONS_DATA].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
};

export const getLatestNotifications = (limit = 3): NotificationItem[] => {
  return getAllNotifications()
    .filter((n) => n.status === 'ACTIVE')
    .slice(0, limit);
};

export const getNotificationById = (id: string): NotificationItem | undefined => {
  if (!id) return undefined;
  const sanitized = id.trim().toLowerCase();
  return NOTIFICATIONS_DATA.find(
    (n) => n.id.toLowerCase() === sanitized && n.status === 'ACTIVE'
  );
};

export const filterNotifications = (
  type: NotificationType | 'ALL' = 'ALL'
): NotificationItem[] => {
  const all = getAllNotifications();
  if (type === 'ALL') return all;
  return all.filter((n) => n.type === type);
};
