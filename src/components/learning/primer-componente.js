import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';

export class PrimerComponente extends LitElement {
    static properties = {
        title: { type: String },
        count: { type: Number },
    };

    static styles = [
    sharedStyles, css`
        :host {
            display: block;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            margin: var(--space-2);
            padding: var(--space-4);
            color: var(--text);
            box-shadow: var(--shadow-1);
            height: 300px;
            overflow: auto;
        }
        h2 {
            margin: 0 0 var(--space-3);
        }
    `];

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
            class="primary mt-6"
            @click=${this._onClick}
          >
            Click aquí para contar
          </button>
        `;
    }
}
customElements.define('primer-componente', PrimerComponente);