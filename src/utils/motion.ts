// ==========================================================================
// OPPORTUNITYX MOTION & INTERACTION SYSTEM
// Standards: Emil Kowalski Motion Physics & docs/04-FRONTEND-SPECIFICATION.md
// Target Motion Intensity: 5 (Fast, subtle, informative, zero slop)
// ==========================================================================

import { Variants, Transition } from 'framer-motion';

// --------------------------------------------------------------------------
// 1. TIMING & EASING TOKENS
// --------------------------------------------------------------------------
export const DURATION = {
  instant: 0.01,
  fast: 0.15,      // 150ms — micro-interactions, clicks, toggles
  standard: 0.22,  // 220ms — UI transitions, dropdowns, page route cross-fades
  entrance: 0.35,  // 350ms — section reveals, modals, sheet drawers
  complex: 0.45,   // 450ms — hero elements, staggered containers
} as const;

export const EASING = {
  // Apple / Emil Kowalski signature fast-enter, soft-decelerate curve
  smooth: [0.16, 1, 0.3, 1] as const,
  // Standard CSS ease-out
  easeOut: [0, 0, 0.2, 1] as const,
  // Standard CSS ease-in
  easeIn: [0.4, 0, 1, 1] as const,
  // Snappy spring config for tactile elements
  springSnappy: {
    type: 'spring',
    stiffness: 400,
    damping: 30,
    mass: 1,
  } as Transition,
  // Gentle spring for drawer and overlays
  springGentle: {
    type: 'spring',
    stiffness: 300,
    damping: 28,
    mass: 1,
  } as Transition,
};

// --------------------------------------------------------------------------
// 2. PAGE ROUTE TRANSITION VARIANTS
// Fast, subtle cross-fade with 4px vertical shift to maintain spatial continuity.
// --------------------------------------------------------------------------
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 6,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: {
      duration: DURATION.fast,
      ease: EASING.easeIn,
    },
  },
};

// --------------------------------------------------------------------------
// 3. CONTAINER STAGGER VARIANTS
// For sequencing cards, list rows, or pill grids fluidly.
// --------------------------------------------------------------------------
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASING.smooth,
    },
  },
};

// --------------------------------------------------------------------------
// 4. SECTION FADE-UP VARIANTS
// Non-blocking entrance for section titles and primary groupings.
// --------------------------------------------------------------------------
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.entrance,
      ease: EASING.smooth,
    },
  },
};

// --------------------------------------------------------------------------
// 5. MODAL & DRAWER OVERLAY VARIANTS
// --------------------------------------------------------------------------
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.fast, ease: EASING.easeOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, ease: EASING.easeIn },
  },
};

export const drawerSlideVariants: Variants = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.25,
      ease: EASING.smooth,
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.2,
      ease: EASING.easeIn,
    },
  },
};

// --------------------------------------------------------------------------
// 6. ACCORDION / EXPANDABLE PANEL TRANSITIONS
// --------------------------------------------------------------------------
export const accordionVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    overflow: 'hidden',
    transition: {
      height: { duration: DURATION.fast, ease: EASING.smooth },
      opacity: { duration: 0.1 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    overflow: 'visible',
    transition: {
      height: { duration: DURATION.standard, ease: EASING.smooth },
      opacity: { duration: DURATION.standard, delay: 0.05 },
    },
  },
};
