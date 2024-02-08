import { doSomething } from './tree_shaking.js';

// Tests some code which gets tree shaken.
describe('tree_shaking', () => {
  it('does something', () => {
    expect(doSomething()).toBeUndefined();
  });
});
