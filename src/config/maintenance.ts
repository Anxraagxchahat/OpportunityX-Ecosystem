/**
 * Global Maintenance Mode Configuration
 * OpportunityX Ecosystem
 *
 * When MAINTENANCE_MODE is set to true:
 * - The entire application renders the Server Under Maintenance page.
 * - All public and ecosystem routes are protected.
 * - Normal application initialization, route loading, and backend requests are halted.
 *
 * To restore normal operation, simply change this to false:
 * export const MAINTENANCE_MODE = false;
 */
export const MAINTENANCE_MODE: boolean = true;
