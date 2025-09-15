import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';
import '../components/register/product-table.js';

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
        <div class="container">
            <h1>Modulo Register</h1>
            <h3>En este módulo encontrarás ejemplos y prácticas para aprender a consumir datos de una API y mostrarlos en una tabla utilizando Lit. Aprenderás cómo realizar peticiones HTTP, manejar las respuestas, y presentar la información de manera dinámica y eficiente en tu aplicación web.</h3>
            <product-table></product-table>
        </div>
        `;
    }
}

customElements.define('module-register', ModuleRegister);