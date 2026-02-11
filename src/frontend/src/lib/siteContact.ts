/**
 * Shared site contact information constants
 */

export const SITE_PHONE_NUMBER = '7527050563';
export const SITE_EMAIL = 'hackrootorg82@gmail.com';

/**
 * Generate WhatsApp chat URL for the site phone number
 * @returns WhatsApp web URL with the site phone number
 */
export function getWhatsAppUrl(): string {
  // Format: https://wa.me/[country_code][phone_number]
  // Assuming Indian number (+91)
  return `https://wa.me/91${SITE_PHONE_NUMBER}`;
}
