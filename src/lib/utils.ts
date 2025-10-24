import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPlateNumber(plate: string): string {
  // Remove spaces and convert to uppercase
  return plate.replace(/\s/g, '').toUpperCase()
}

export function validatePlateNumber(plate: string): boolean {
  // Check if plate is not empty and contains only valid characters
  const trimmedPlate = plate.trim()
  if (trimmedPlate.length === 0) return false
  
  // Regex for most countries' license plates: letters, numbers, spaces, hyphens, dots
  const plateRegex = /^[A-Z0-9\s\-\.]+$/
  return plateRegex.test(trimmedPlate)
}
