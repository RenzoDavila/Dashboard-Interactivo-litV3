import { LitElement, html, css } from 'lit';
import './components/learning/learning.js';

export class AppRoot extends LitElement {
    static styles = css`
        :host { display: block; padding: 16px; }
        h1 { margin: 0 0 12px; }
    `;

    render() {
        return html`
        <h1>Dashboar desde el componente main</h1>
        <module-learning></module-learning>
        `;
    }
}

customElements.define('app-root', AppRoot);