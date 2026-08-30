import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export interface BrandLogoProps {
  variant?: 'full' | 'icon';
  className?: string;
  height?: number;
  priority?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  height = 36,
}) => {
  const { theme } = useTheme();

  // Canonical paths per docs/07-BRAND-ASSET-REGISTRY.md (monochromatic maps to monochrome folder)
  const folderName = theme === 'monochromatic' ? 'monochrome' : theme;
  const iconSrc = `/brand/icon/${folderName}/opportunityx-icon-${folderName}.png`;

  if (variant === 'icon') {
    return (
      <img
        src={iconSrc}
        alt="OpportunityX Core Mark"
        width={height}
        height={height}
        className={`inline-block select-none object-contain ${className}`}
        loading="eager"
        decoding="async"
      />
    );
  }

  // Full Logo Lockup: Authoritative Icon Mark + Wordmark
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <img
        src={iconSrc}
        alt="OpportunityX Logo Mark"
        width={height}
        height={height}
        className="object-contain"
        style={{ height: `${height}px`, width: `${height}px` }}
        loading="eager"
        decoding="async"
      />
      <div className="flex items-baseline font-bold tracking-tight text-xl leading-none">
        <span
          className={
            theme === 'dark'
              ? 'text-white'
              : theme === 'monochromatic'
              ? 'text-black'
              : 'text-[#09090B]'
          }
        >
          Opportunity
        </span>
        <span
          className={
            theme === 'monochromatic'
              ? 'text-black font-extrabold ml-[1px]'
              : 'text-accent-brand font-extrabold ml-[1px]'
          }
        >
          X
        </span>
      </div>
    </div>
  );
};
