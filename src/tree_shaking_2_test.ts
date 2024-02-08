import { doSomething } from './tree_shaking.js';

// Just here so `./tree_shaking.js` gets bundled into a shared chunk and shown in code coverage.
describe('tree_shaking', () => {
  it('does something', () => {
    expect(doSomething()).toBeUndefined();
  });
});
