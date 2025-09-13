import { LitElement, html, css } from 'lit';

export class PrimerComponente extends LitElement {
  static properties = {
    title: { type: String },
    count: { type: Number },
  };

  static styles = css`
    :host {
      display: block;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: var(--space-4);
      color: var(--text);
      box-shadow: var(--shadow-1);
    }
    h2 {
      margin: 0 0 var(--space-3);
      color: var(--text);
    }
    .action {
      background: var(--primary);
      color: #0b0f14;
      border: none;
      border-radius: 8px;
      padding: 8px 12px;
    }
    .action:focus-visible {
      outline: none;
      box-shadow: var(--ring);
    }
  `;

  constructor() { 
    super();
    this.title = 'Hola';
    this.count = 0;
  }

  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('clicked', {
      detail: { count: this.count },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <h2>${this.title}</h2>
      <slot></slot>
      <button
        class="action"
        @click=${this._onClick}
      >
      Click
      </button>
    `;
  }
}
customElements.define('primer-componente', PrimerComponente);