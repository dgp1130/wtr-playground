import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';

export function bar(): string {
  return 'bar';
}

export let prop = 'test';

@customElement('my-element')
class MyElement extends LitElement {
  protected render(): TemplateResult {
    return html`<div>Hello, World!</div>`;
  }
}
