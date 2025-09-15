import { LitElement, html, css } from 'lit';
import './components/shared/app-navbar.js';
import './components/learning/learning.js';

export class AppRoot extends LitElement {
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
    }

    render() {
        return html`
        <h1>Dashboar desde el componente main</h1>
        <app-navbar></app-navbar>
        <module-learning></module-learning>
        `;
    }
}

customElements.define('app-root', AppRoot);