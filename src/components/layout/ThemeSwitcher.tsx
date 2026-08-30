import React from 'react';
import { Moon, Sun, CircleDot } from 'lucide-react';
import { useTheme, Theme } from '@/context/ThemeContext';

export const ThemeSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();

  const themes: Array<{ id: Theme; label: string; icon: React.ReactNode }> = [
    { id: 'dark', label: 'Dark', icon: <Moon className="h-3.5 w-3.5" aria-hidden="true" /> },
    { id: 'light', label: 'Light', icon: <Sun className="h-3.5 w-3.5" aria-hidden="true" /> },
    {
      id: 'monochromatic',
      label: 'Mono',
      icon: <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />,
    },
  ];

  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher"
      className={`inline-flex items-center rounded-lg border border-border-subtle bg-surface p-0.5 sm:p-1 shadow-subtle ${className}`}
    >
      {themes.map((t) => {
        const isSelected = theme === t.id;
        return (
          <button
            key={t.id}
            role="radio"
            aria-checked={isSelected}
            aria-label={`${t.label} theme`}
            onClick={() => setTheme(t.id)}
            className={`relative flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-all duration-150 active:scale-[0.95] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring ${
              isSelected
                ? 'bg-surface-elevated text-text-primary shadow-sm border border-border-subtle font-semibold'
                : 'text-text-muted hover:text-text-primary hover:bg-surface-hover border border-transparent'
            }`}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        );
      })}
    </div>
  );
};
