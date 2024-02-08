// Called in test, should be green.
export function doSomething(): string | undefined {
  if ('does not exist' in window) return untested();

  return undefined;
}

// Bundled, but not executed. Should be red in code coverage.
export function untested(): string {
  return 'I am untested!';
}

// Not bundled. Should be red in code coverage.
export function unreferenced(): string {
  return 'I am unreferenced and will be tree shaken!';
}
