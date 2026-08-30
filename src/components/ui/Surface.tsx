import React, { ReactNode } from 'react';

export interface SurfaceProps {
  children: ReactNode;
  variant?: 'base' | 'elevated' | 'card' | 'interactive';
  className?: string;
  as?: React.ElementType;
  onClick?: () => void;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  variant = 'base',
  className = '',
  as: Component = 'div',
  onClick,
}) => {
  const variantStyles = {
    base: 'bg-surface border border-border-subtle rounded-xl',
    elevated: 'bg-surface-elevated border border-border-subtle shadow-elevated rounded-xl',
    card: 'bg-surface border border-border-subtle hover:border-border-strong rounded-xl p-6 transition-all duration-200',
    interactive:
      'bg-surface border border-border-subtle hover:border-border-strong hover:bg-surface-hover active:scale-[0.99] rounded-xl p-6 transition-all duration-150 cursor-pointer',
  };

  return (
    <Component
      className={`${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...(onClick ? { role: 'button', tabIndex: 0 } : {})}
    >
      {children}
    </Component>
  );
};
