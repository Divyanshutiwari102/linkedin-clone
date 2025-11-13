// src/utils/helpers/functions.ts
/**
 * Small helper utilities
 */

/**
 * Return a random integer between max and min (inclusive).
 * Usage: getRandomIntNumberBetween(100, 0)
 */
export function getRandomIntNumberBetween(max: number, min = 0): number {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  // guard if max < min
  if (maximum < minimum) return minimum;
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
