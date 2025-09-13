import { LitElement, html, css, nothing } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

class TodoList extends LitElement {
    static properties = {
        items: { type: Array },
        filterDone: { type: Boolean, attribute: 'filter-done', reflect: true },
    };

    static styles = css`
        :host { display: block; padding: 16px;  }
        li.done { text-decoration: line-through; color: #999; }
    `;

    constructor() {
        super();
        this.items = [
        { id: 1, text: 'Aprender Lit', done: true },
        { id: 2, text: 'Construir un componente', done: false },
        ];
        this.filterDone = false;
    }

    firstUpdated() {
    console.log('Primer render listo');
    }
    
    updated(changed) {
    if (changed.has('filterDone')) {
        console.log('cambió filterDone', this.filterDone);
    }
    }

    render() {
        const filtered = this.filterDone ? this.items.filter(i => !i.done) : this.items;
        return html`
            <!-- <slot></slot> -->
        <button @click=${() => (this.filterDone = !this.filterDone)}>
            ${this.filterDone ? 'Mostrar todos' : 'Ocultar hechos'}
        </button>

        <ul>
            ${repeat(
            filtered,
            i => i.id,
            i => html`
                <li class=${classMap({done: i.done})} style=${styleMap({cursor: 'pointer'})}
                    @click=${() => this._toggle(i.id)}>
                ${i.text}
                </li>
            `
            )}
        </ul>

        ${filtered.length === 0 ? html`<p>No hay items</p>` : nothing}
        `;
    }

    _toggle(id) {
        this.items = this.items.map(i => i.id === id ? {...i, done: !i.done} : i);
    }
}
customElements.define('todo-list', TodoList);