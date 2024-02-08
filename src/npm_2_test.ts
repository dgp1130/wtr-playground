import { html, render } from 'lit-html';

// Just here so `lit-html` gets bundled into a shared chunk and shown in code coverage.
describe('npm_test', () => {
  it('does a thing with a dependency', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    render(html`Hello, World!`, container);

    expect(container.textContent).toContain('Hello, World!');

    container.remove();
  });
});
