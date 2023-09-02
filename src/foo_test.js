import * as bar from './bar.js';
import { foo } from './foo.js';

describe('foo', () => {
  it('calls bar', () => {
    expect(foo()).toBe('bar says: bar');
  });

  it('spies on bar', () => {
    expect(() => spyOn(bar, 'bar').and.returnValue('baz')).toThrowError();
  });

  it('spies on export let', () => {
    expect(() => spyOnProperty(bar, 'prop', 'get').and.returnValue('prop'))
        .toThrowError();
  });
});
