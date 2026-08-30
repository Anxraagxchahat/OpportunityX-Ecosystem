import React, { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  as?: React.ElementType;
}

const SIZE_MAP = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  full: 'max-w-full',
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  as: Component = 'div',
}) => {
  return (
    <Component className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${SIZE_MAP[size]} ${className}`}>
      {children}
    </Component>
  );
};
