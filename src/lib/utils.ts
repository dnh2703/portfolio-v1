import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createArray(num: number): number[] {
  return Array.from({ length: num }, (_, index) => index + 1);
}
