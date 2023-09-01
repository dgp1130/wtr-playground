import { foo } from './foo.js';

describe('foo', () => {
  it('calls bar', () => {
    expect(foo()).toBe('bar says: bar');
  });
});
