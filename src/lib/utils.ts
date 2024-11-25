/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(callback: Function, delay: number) {
  let wait = false;
  return function () {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, delay);
    }
  };
}
