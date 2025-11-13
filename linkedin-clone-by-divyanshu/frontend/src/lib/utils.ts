// src/lib/utils.ts
/**
 * Utility helpers used across the project
 */

/**
 * Classname joiner (Tailwind + conditional classes)
 * Usage: cn("p-2", condition && "text-red-500")
 */
export function cn(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(" ");
}

/**
 * Safe typed sleep (optional helper)
 */
export function sleep(ms = 0) {
  return new Promise((res) => setTimeout(res, ms));
}
