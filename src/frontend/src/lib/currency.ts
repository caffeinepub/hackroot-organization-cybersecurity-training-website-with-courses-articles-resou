/**
 * Format a number as Indian Rupees (INR) currency
 * @param amount - The amount to format (in rupees)
 * @returns Formatted currency string with ₹ symbol
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
