import { LitElement, html, css } from 'lit';
import './app-root.js';
import './styles/global.scss';
import './components/primer-componente/primer-componente.js';
import './components/life-cycle/life-cycle.js';

export class AppRoot extends LitElement {
  static styles = css`
    :host { display: block; padding: 16px; }
    h1 { margin: 0 0 12px; }
  `;

  render() {
    return html`
      <h1>Dashboar desde el componente main</h1>
      <primer-componente
        title="Componente listo"
        @clicked=${this._onClicked}
      >
        Contenido proyectado por slot.
      </primer-componente>
      <todo-list></todo-list>
    `;
  }

  _onClicked(e) {
    console.log('clicked count:', e.detail.count);
  }
}

customElements.define('app-main', AppRoot);