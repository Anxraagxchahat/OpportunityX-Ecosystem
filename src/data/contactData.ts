// ==========================================================================
// OPPORTUNITYX CONTACT — DATA MODEL & CLIENT SERVICE BOUNDARY
// Source of Truth: docs/04-FRONTEND-SPECIFICATION.md §17
//
// Integrated Provider: Web3Forms (Real server-side email dispatch)
// Access Key: Configured via VITE_WEB3FORMS_ACCESS_KEY
// ==========================================================================

export type ContactReason =
  | 'general'
  | 'feedback'
  | 'partnership'
  | 'collaboration'
  | 'support'
  | 'bug_report'
  | 'other';

export interface ContactReasonOption {
  value: ContactReason;
  label: string;
}

export const CONTACT_REASONS: ContactReasonOption[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'partnership', label: 'Partnership & Sponsorship' },
  { value: 'collaboration', label: 'University / College Club Collaboration' },
  { value: 'support', label: 'Support Desk' },
  { value: 'bug_report', label: 'Bug / Issue Report' },
  { value: 'other', label: 'Other Help' },
];

export interface ContactFormData {
  name: string;
  email: string;
  reason: ContactReason | '';
  subject: string;
  message: string;
  honeypot: string; // Anti-spam botcheck field
}

export type ContactSubmitResult =
  | { success: true; message: string }
  | { success: false; error: string; code: 'SERVICE_ERROR' | 'NETWORK_ERROR' | 'VALIDATION_ERROR'; mailtoUri?: string };

// --------------------------------------------------------------------------
// FOUNDER & OFFICIAL BRAND CHANNELS (Extracted from OpportunityX Source of Truth)
// --------------------------------------------------------------------------
export const FOUNDER_INFO = {
  name: 'Anurag Verma',
  role: 'Founder & Full Stack Developer',
  tagline: 'Building products that help students discover opportunities, apply smarter, and grow their careers with AI.',
  email: 'anurag@opportunityx.co.in',
  generalEmail: 'hello@opportunityx.co.in',
  supportEmail: 'support@opportunityx.co.in',
  avatarUrl: '/anurag.jpg',
  portfolioUrl: 'https://anurag.opportunityx.co.in',
  githubUrl: 'https://github.com/Anxraagxchahat',
  githubHandle: '@Anxraagxchahat',
  linkedinUrl: 'https://www.linkedin.com/in/anxraag',
  linkedinHandle: 'Anurag Verma',
  xUrl: 'https://x.com/TheOpportunityX',
  xHandle: '@TheOpportunityX',
  instagramUrl: 'https://www.instagram.com/pandaxchahat/',
  instagramHandle: '@pandaxchahat',
  companyInstagramUrl: 'https://www.instagram.com/theopportunityx/',
  companyLinkedinUrl: 'https://www.linkedin.com/company/128134073',
  youtubeUrl: 'https://www.youtube.com/@theopportunityX',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61590766896275',
  discordUrl: 'https://discord.gg/qSjCRDTKN5',
};

export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  type: 'email' | 'url';
  description: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'channel-general',
    label: 'General Inquiries & Brand Desk',
    value: 'hello@opportunityx.co.in',
    type: 'email',
    description: 'For general questions, feedback, and platform inquiries.',
  },
  {
    id: 'channel-support',
    label: 'Support Desk',
    value: 'support@opportunityx.co.in',
    type: 'email',
    description: 'For technical support, account issues, and bug reports.',
  },
  {
    id: 'channel-founder',
    label: 'Founder Direct Desk',
    value: 'anurag@opportunityx.co.in',
    type: 'email',
    description: 'Direct communication with Anurag Verma for partnerships, architecture, and collaborations.',
  },
  {
    id: 'channel-partnerships',
    label: 'Partnerships & Sponsorships',
    value: 'partnerships@opportunityx.co.in',
    type: 'email',
    description: 'For university hackathons, student club partnerships, and recruiter alliances.',
  },
];

// --------------------------------------------------------------------------
// CLIENT UX VALIDATION UTILITIES
// --------------------------------------------------------------------------

export interface FieldError {
  field: keyof ContactFormData;
  message: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const VALIDATION_LIMITS = {
  name: { min: 1, max: 100 },
  email: { min: 1, max: 254 },
  subject: { min: 1, max: 150 },
  message: { min: 20, max: 2000 },
} as const;

export function validateContactForm(data: ContactFormData): FieldError[] {
  const errors: FieldError[] = [];

  // Name validation
  const name = data.name.trim();
  if (!name) {
    errors.push({ field: 'name', message: 'Name is required.' });
  } else if (name.length > VALIDATION_LIMITS.name.max) {
    errors.push({ field: 'name', message: `Name must be ${VALIDATION_LIMITS.name.max} characters or fewer.` });
  }

  // Email validation (UX format check)
  const email = data.email.trim();
  if (!email) {
    errors.push({ field: 'email', message: 'Email address is required.' });
  } else if (!EMAIL_REGEX.test(email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address.' });
  } else if (email.length > VALIDATION_LIMITS.email.max) {
    errors.push({ field: 'email', message: 'Email address is too long.' });
  }

  // Reason validation
  if (!data.reason) {
    errors.push({ field: 'reason', message: 'Please select an inquiry reason.' });
  }

  // Subject validation
  const subject = data.subject.trim();
  if (!subject) {
    errors.push({ field: 'subject', message: 'Subject is required.' });
  } else if (subject.length > VALIDATION_LIMITS.subject.max) {
    errors.push({ field: 'subject', message: `Subject must be ${VALIDATION_LIMITS.subject.max} characters or fewer.` });
  }

  // Message validation
  const message = data.message.trim();
  if (!message) {
    errors.push({ field: 'message', message: 'Message is required.' });
  } else if (message.length < VALIDATION_LIMITS.message.min) {
    errors.push({ field: 'message', message: `Message must be at least ${VALIDATION_LIMITS.message.min} characters.` });
  } else if (message.length > VALIDATION_LIMITS.message.max) {
    errors.push({ field: 'message', message: `Message must be ${VALIDATION_LIMITS.message.max} characters or fewer.` });
  }

  // Honeypot check — if filled, it's an automated bot
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.push({ field: 'honeypot', message: 'Submission rejected.' });
  }

  return errors;
}

/**
 * Builds a safe, URL-encoded mailto: URI prefilled with the user's inquiry as a fallback.
 */
export function buildMailtoUri(data: ContactFormData): string {
  const recipient =
    data.reason === 'partnership' || data.reason === 'collaboration'
      ? 'partnerships@opportunityx.co.in'
      : data.reason === 'support' || data.reason === 'bug_report'
      ? 'support@opportunityx.co.in'
      : 'hello@opportunityx.co.in';

  const reasonLabel =
    CONTACT_REASONS.find((r) => r.value === data.reason)?.label || 'General Inquiry';

  const subject = encodeURIComponent(`[OpportunityX - ${reasonLabel}] ${data.subject.trim()}`);
  const body = encodeURIComponent(
    `From: ${data.name.trim()} (${data.email.trim()})\n` +
    `Reason: ${reasonLabel}\n\n` +
    `Message:\n${data.message.trim()}\n\n` +
    `---\nSent via OpportunityX Contact Gateway (https://opportunityx.co.in/contact)`
  );

  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

// --------------------------------------------------------------------------
// WEB3FORMS CLIENT-SIDE INTEGRATION
// Public/browser-safe Web3Forms access credential used by the client-side
// submission flow.
//
// Security Boundary:
// - Frontend: Input validation, honeypot botcheck, safe JSON construction, and UX feedback.
// - Web3Forms Access Key: Public browser credential (not a server secret).
// - Server-side rate limiting and provider spam controls: Handled by Web3Forms
//   (REQUIRES PROVIDER/BACKEND VERIFICATION).
// --------------------------------------------------------------------------

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'bf25f2c4-6b3a-42ce-9ffc-4e791144fb01';

export async function submitContactForm(data: ContactFormData): Promise<ContactSubmitResult> {
  const errors = validateContactForm(data);
  if (errors.length > 0) {
    return {
      success: false,
      error: errors[0].message,
      code: 'VALIDATION_ERROR',
    };
  }

  // Honeypot bot rejection (silent rejection)
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: true,
      message: 'Your inquiry has been received.',
    };
  }

  const reasonLabel =
    CONTACT_REASONS.find((r) => r.value === data.reason)?.label || 'General Inquiry';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data.name.trim(),
        email: data.email.trim(),
        reason: reasonLabel,
        subject: `[OpportunityX - ${reasonLabel}] ${data.subject.trim()}`,
        message: data.message.trim(),
        from_name: 'OpportunityX Contact Portal',
        botcheck: data.honeypot || '',
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        message: 'Your message has been sent successfully! The OpportunityX team will review your inquiry and reply via email.',
      };
    } else {
      const errorMsg =
        result.message || 'Unable to submit your message at this moment. Please try again or send an email directly.';
      return {
        success: false,
        error: errorMsg,
        code: 'SERVICE_ERROR',
        mailtoUri: buildMailtoUri(data),
      };
    }
  } catch {
    return {
      success: false,
      error: 'Network connection issue. You can retry or open your email client to send directly.',
      code: 'NETWORK_ERROR',
      mailtoUri: buildMailtoUri(data),
    };
  }
}

export const INITIAL_FORM_DATA: ContactFormData = {
  name: '',
  email: '',
  reason: '',
  subject: '',
  message: '',
  honeypot: '',
};
