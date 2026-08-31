import React from 'react';
import { Terminal, Smartphone } from 'lucide-react';

export const AppleLogo: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.64-.78 1.08-1.86.96-2.95-1 .04-2.16.66-2.84 1.45-.59.68-1.12 1.77-.98 2.82 1.12.09 2.22-.54 2.86-1.32" />
  </svg>
);

export const WindowsLogo: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
  </svg>
);

export const AndroidLogo: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1568-.2716.064-.619-.2076-.7758-.2715-.1568-.619-.064-.7758.2076l-2.0224 3.503c-1.3787-.6286-2.9234-.9845-4.5717-.9845-1.6484 0-3.1931.3559-4.5718.9845L5.7058 5.299c-.1568-.2716-.5043-.3644-.7758-.2076-.2716.1568-.3644.5042-.2076.7758l1.996 3.4572C3.003 11.2334 1 15.0444 1 19.3857h22c0-4.3413-2.003-8.1523-5.6185-10.0643" />
  </svg>
);

export const LinuxLogo: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <Terminal className={className} aria-hidden="true" />
);

export function getPlatformIcon(platform: string, className = 'h-5 w-5'): React.ReactNode {
  switch (platform.toLowerCase()) {
    case 'macos':
      return <AppleLogo className={className} />;
    case 'ios':
      return <AppleLogo className={className} />;
    case 'windows':
      return <WindowsLogo className={className} />;
    case 'android':
      return <AndroidLogo className={className} />;
    case 'linux':
      return <LinuxLogo className={className} />;
    default:
      return <Smartphone className={className} aria-hidden="true" />;
  }
}
