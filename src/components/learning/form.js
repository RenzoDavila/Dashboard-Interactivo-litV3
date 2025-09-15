import { LitElement, html, css, nothing } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';

class MyForm extends LitElement {
    static properties = { value: { type: String } };

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
        this.value = '';
    }

    render() {
    return html`
        <h2>Formulario</h2>
        <input
        .value=${this.value}              
        @input=${e => (this.value = e.target.value)}
        placeholder="Escribe algo" />
        <p>Valor: ${this.value}</p>
    `;
    }
}
customElements.define('app-form', MyForm);