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

    render() {
        return html`
        <h1>Dashboar desde el componente main</h1>
        <app-navbar active=${this.actualTab} @navigate=${this._navigate}></app-navbar>
        ${
            this.actualTab === 'widget' ? html`<module-widget></module-widget>` :
            this.actualTab === 'register' ? html`<module-register></module-register>` :
            this.actualTab === 'learning' ? html`<module-learning></module-learning>` :
            html`<p>Esta pagina no existe</p>`
        }
        
        `;
    }

    _navigate(e) {
        console.log('_navigate', e.detail)
        this.actualTab = e.detail;
    }
}

customElements.define('app-root', AppRoot);