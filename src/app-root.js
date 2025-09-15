import { LitElement, html, css } from 'lit';
import './components/shared/app-navbar.js';
import './views/learning.js';
import './views/widget.js';
import './views/register.js';

export class AppRoot extends LitElement {
    static properties = { actualTab: { type: String }};

    static styles = css`
        :host { 
            display: block;
            padding: 16px;
        }
        h1 {
            margin: 0 0 12px;
        }
        .theme-btn {
            margin-bottom: 24px;
        }
    `;

    constructor() {
        super();
        // Valor inicial de la pestaña activa
        this.actualTab = 'widget';
    }

    _renderSwitch(opcion) {
        switch(opcion) {
            case 'widget': return html`<module-widget></module-widget>`;
            case 'register': return html`<module-register></module-register>`;
            case 'learning': return html`<module-learning></module-learning>`;
            default: return html`<h2>404</h2>`;
        }
    }

    render() {
        return html`
        <h1>Dashboar desde el componente main</h1>
        <app-navbar active=${this.actualTab} @navigate=${this._navigate}></app-navbar>
        ${this._renderSwitch(this.actualTab)}
        `;
    }

    _navigate(e) {
        console.log('_navigate', e.detail)
        this.actualTab = e.detail;
    }
}

customElements.define('app-root', AppRoot);