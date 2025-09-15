import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';
import '../components/learning/primer-componente.js';
import '../components/learning/lifecycle.js';
import '../components/learning/form.js';

export class ModuleLearning extends LitElement {
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
        .list-events {
            background: var(--surface);
            border: 4px solid var(--warning);
            border-radius: var(--radius);
            color: var(--text);
            box-shadow: var(--shadow-1);
            height: 630px;
            overflow: auto;
        }
    `];

    constructor() {
        super();
        this.events = [];
    }

    render() {
        return html`
        <h1>Modulo Learning</h1>
        <h3>En este módulo encontrarás ejemplos y prácticas para aprender Lit y sus conceptos fundamentales, como la creación de componentes, el manejo del ciclo de vida, la gestión de estados y propiedades, y la interacción con formularios.</h3>
        <div class="row">
            <div class="col-md-5 col-lg-3">
                <div class="list-events mr-6 my-6 px-4">
                    <p class="muted">Lista de eventos realizados:</p>
                    <ul>
                        ${this.events.map(event => html`<li>${event}</li>`)}
                    </ul>
                </div>
            </div>
            <div class="col-md-7 col-lg-9">
                <div class="row">  
                    <div class="col-12 col-md-6 col-lg-4">
                        <primer-componente title="Contador" @clicked=${this._onClicked}>
                            Contenido proyectado por slot.
                        </primer-componente>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <todo-list @add-todo=${this._onAddTodo}></todo-list>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <app-form></app-form>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    _onClicked(e) {
        console.log('clicked count:', e.detail.count);
        this.events = [...this.events, `Contador - Clicked count: ${e.detail.count}`];
    }

    _onAddTodo(e) {
        console.log('add-todo event:', e.detail);
        this.events = [...this.events, `TodoList - add-todo event: ${e.detail.text}`];
    }
}

customElements.define('module-learning', ModuleLearning);