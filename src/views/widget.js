import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';

export class ModuleWidget extends LitElement {
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
        <h1>Modulo Widgets</h1>
        <h3>En este módulo encontrarás ejemplos y prácticas para aprender sobre widgets y su implementación en Lit, incluyendo la composición de widgets reutilizables, la comunicación entre ellos, la personalización mediante propiedades, y las mejores prácticas para integrarlos en tus aplicaciones web.</h3>
        `;
    }
}

customElements.define('module-widget', ModuleWidget);