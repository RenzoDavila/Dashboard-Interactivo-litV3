import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';

export class ModuleRegister extends LitElement {
    static properties = { events: { type: Array } };

    static styles = [
    sharedStyles, css`
        :host {
            display: block;
            padding: 16px;
            background-color: var(--surface-2);
        }
        h1 {
            margin: 0 0 12px;
        }
    `];

    constructor() {
        super();
    }

    render() {
        return html`
        <h1>Modulo Register</h1>
        <h3>En este módulo encontrarás una tabla que consume servicios de un API.</h3>
        `;
    }
}

customElements.define('module-register', ModuleRegister);