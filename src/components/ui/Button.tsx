import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'brand';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export type ButtonProps = BaseButtonProps &
  (
    | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ as: 'link'; to: string } & Omit<LinkProps, 'to'>)
    | ({ as: 'a'; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-accent-brand text-white hover:bg-accent-hover shadow-subtle border border-transparent active:scale-[0.98]',
  brand:
    'bg-accent-brand text-white hover:bg-accent-hover shadow-subtle border border-transparent active:scale-[0.98]',
  secondary:
    'bg-surface-elevated text-text-primary hover:bg-surface-hover border border-border-subtle hover:border-border-strong active:scale-[0.98]',
  outline:
    'bg-transparent text-text-primary hover:bg-surface border border-border-subtle hover:border-border-strong active:scale-[0.98]',
  ghost:
    'bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs font-medium rounded-lg gap-1.5',
  md: 'px-4.5 py-2.5 text-sm font-semibold rounded-lg gap-2',
  lg: 'px-6 py-3.5 text-base font-semibold rounded-xl gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      ...restProps
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center select-none font-sans transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed cursor-pointer';

    const classes = `${baseClasses} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

    const content = (
      <>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (restProps.as === 'link') {
      const { as: _, to, ...linkProps } = restProps;
      return (
        <Link
          to={to}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...linkProps}
        >
          {content}
        </Link>
      );
    }

    if (restProps.as === 'a') {
      const { as: _, href, ...anchorProps } = restProps;
      return (
        <a
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    const { as: _, type = 'button', disabled, ...buttonProps } = restProps;
    return (
      <button
        type={type}
        disabled={disabled || isLoading}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonProps}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
