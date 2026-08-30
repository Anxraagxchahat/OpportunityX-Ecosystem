import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { pageTransitionVariants } from '@/utils/motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: shouldReduceMotion ? 'auto' : 'instant',
    });
  }, [location.pathname, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <div className="w-full flex-1">{children}</div>;
  }

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionVariants}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
};
