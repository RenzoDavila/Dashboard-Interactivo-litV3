import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';
import './primer-componente.js';
import './lifecycle.js';
import './form.js';

export class AppRoot extends LitElement {
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

    render() {
        return html`
        <h1>Modulo Learning</h1>
        <primer-componente title="Componente listo" @clicked=${this._onClicked}>
            Contenido proyectado por slot.
        </primer-componente>
        <todo-list @add-todo=${this._onAddTodo}></todo-list>
        <app-form></app-form>
        `;
    }

    _onClicked(e) {
        console.log('clicked count:', e.detail.count);
    }

    _onAddTodo(e) {
        // Handle the add-todo event here
        console.log('add-todo event:', e.detail);
    }
}

customElements.define('module-learning', AppRoot);