// ==========================================================================
// OPPORTUNITYX DOWNLOAD MANIFEST — DATA MODEL & SERVICE LAYER
// Source of Truth: docs/04-FRONTEND-SPECIFICATION.md §16
// ==========================================================================

export type DownloadStatus = 'AVAILABLE' | 'COMING_SOON' | 'IN_DEVELOPMENT' | 'UNAVAILABLE';

export type PlatformId = 'android' | 'windows' | 'macos' | 'linux' | 'ios';

export interface DownloadAsset {
  id: string;
  platform: PlatformId;
  platformLabel: string;
  product: string;
  status: DownloadStatus;
  version?: string;
  releaseDate?: string; // ISO 8601
  downloadUrl?: string;
  fileType?: string;
  fileSize?: string;
  architecture?: string;
  minOsVersion?: string;
  checksum?: string;
  checksumAlgorithm?: string;
  requirements?: string[];
  notes?: string;
}

export const PLATFORM_ORDER: PlatformId[] = [
  'android',
  'windows',
  'macos',
  'linux',
  'ios',
];

export const STATUS_LABELS: Record<DownloadStatus, string> = {
  AVAILABLE: 'Available',
  COMING_SOON: 'Coming Soon',
  IN_DEVELOPMENT: 'In Development',
  UNAVAILABLE: 'Unavailable',
};

// --------------------------------------------------------------------------
// DOWNLOAD MANIFEST
// All statuses reflect the actual product state as of this build.
// No fake versions, no fake URLs, no fake checksums.
// --------------------------------------------------------------------------
export const DOWNLOAD_ASSETS: DownloadAsset[] = [
  {
    id: 'dl-android-apk',
    platform: 'android',
    platformLabel: 'Android',
    product: 'OpportunityX Mobile',
    status: 'IN_DEVELOPMENT',
    architecture: 'Universal (ARM64 / ARMv7)',
    fileType: '.apk',
    requirements: [
      'Android 8.0 (Oreo) or later',
      'Minimum 100 MB free storage',
    ],
    notes:
      'The Android client is currently under active development. Official APK distribution will be available through verified channels once the build reaches public beta.',
  },
  {
    id: 'dl-windows-x64',
    platform: 'windows',
    platformLabel: 'Windows',
    product: 'OpportunityX Desktop',
    status: 'COMING_SOON',
    architecture: 'x64',
    fileType: '.exe',
    requirements: [
      'Windows 10 version 1903 or later',
      'Minimum 200 MB free storage',
      '4 GB RAM recommended',
    ],
    notes:
      'The Windows desktop client will provide native access to the full OpportunityX ecosystem with offline-capable features and system-level notifications.',
  },
  {
    id: 'dl-macos-universal',
    platform: 'macos',
    platformLabel: 'macOS',
    product: 'OpportunityX Desktop',
    status: 'COMING_SOON',
    architecture: 'Universal (Apple Silicon & Intel)',
    fileType: '.dmg',
    requirements: [
      'macOS 12 (Monterey) or later',
      'Minimum 200 MB free storage',
      'Apple Silicon or Intel processor',
    ],
    notes:
      'A universal macOS build supporting both Apple Silicon and Intel architectures is planned. The application will be distributed as a signed DMG installer.',
  },
  {
    id: 'dl-linux-appimage',
    platform: 'linux',
    platformLabel: 'Linux',
    product: 'OpportunityX Desktop',
    status: 'COMING_SOON',
    architecture: 'x64',
    fileType: '.AppImage',
    requirements: [
      'Ubuntu 20.04+ / Fedora 35+ / Arch (latest)',
      'glibc 2.31 or later',
      'Minimum 200 MB free storage',
    ],
    notes:
      'Linux distribution will be provided as a portable AppImage for broad compatibility across major distributions. A .deb package may follow.',
  },
  {
    id: 'dl-ios-testflight',
    platform: 'ios',
    platformLabel: 'iOS',
    product: 'OpportunityX Mobile',
    status: 'COMING_SOON',
    architecture: 'ARM64',
    fileType: 'TestFlight / App Store',
    requirements: [
      'iOS 16 or later',
      'iPhone 8 or newer recommended',
    ],
    notes:
      'iOS availability will be through TestFlight during beta, followed by official App Store distribution. Timeline is dependent on mobile development milestones.',
  },
];

// --------------------------------------------------------------------------
// QUERY METHODS
// --------------------------------------------------------------------------

export function getAllDownloads(): DownloadAsset[] {
  return DOWNLOAD_ASSETS;
}

export function getDownloadsByStatus(status: DownloadStatus): DownloadAsset[] {
  return DOWNLOAD_ASSETS.filter((asset) => asset.status === status);
}

export function getAvailableDownloads(): DownloadAsset[] {
  return getDownloadsByStatus('AVAILABLE');
}

export function getDownloadById(id: string): DownloadAsset | undefined {
  return DOWNLOAD_ASSETS.find((asset) => asset.id === id);
}

export function getDownloadByPlatform(platform: PlatformId): DownloadAsset | undefined {
  return DOWNLOAD_ASSETS.find((asset) => asset.platform === platform);
}

export function getOrderedDownloads(): DownloadAsset[] {
  return PLATFORM_ORDER
    .map((platformId) => DOWNLOAD_ASSETS.find((a) => a.platform === platformId))
    .filter((asset): asset is DownloadAsset => asset !== undefined);
}
