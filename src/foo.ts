import * as bar from './bar.js';

export function foo(): string {
  // Some code which will be retained in the build, but not executed during the
  // build.
  if ('blah' in window) return untested();

  return `bar says: ${bar.bar()}`;
}

// Should be red in code coverage.
export function untested(): string {
  return 'I am untested!';
}

// Should be red in code coverage.
export function unreferenced(): string {
  return 'I am unreferenced and will be tree shaken!';
}
