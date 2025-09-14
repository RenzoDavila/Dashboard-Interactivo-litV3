import { LitElement, html, css, nothing } from 'lit';

class MyForm extends LitElement {
    static properties = { value: { type: String } };

    static styles = css`
        :host { display: block; padding: 16px;  }
    `;

    constructor() {
        super();
        this.value = '';
    }

    render() {
    return html`
        <input
        .value=${this.value}              
        @input=${e => (this.value = e.target.value)}
        placeholder="Escribe algo" />
        <p>Valor: ${this.value}</p>
    `;
    }
}
customElements.define('app-form', MyForm);