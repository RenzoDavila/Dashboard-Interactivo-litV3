import { LitElement, html, css, nothing } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

class TodoList extends LitElement {
    static properties = {
        items: { type: Array },
        filterDone: { type: Boolean, attribute: 'filter-done', reflect: true },
        count: { type: Number },
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
        this.count = 0;
        this.filterDone = false;
        console.log('this.count en constructor (learning-lifecycle) ==>', this.count);
    }

    updated(changed) {
            console.log('changed en updated (learning-lifecycle) ==>', changed);
        if (changed.has('filterDone')) {
            console.log('cambió updated filterDone (learning-lifecycle) ==>', this.filterDone);
        }
    }

    firstUpdated() {
        console.log('Primer render listo firstUpdated (learning-lifecycle)');
    }

    addNew() {
        this.count++;
        console.log('this.count addNew (learning-lifecycle) ==>', this.count);
        this.items = [...this.items, { id: Date.now(), text: `Nuevo ítem ${this.count}`, done: false }];
        // this.dispatchEvent(new CustomEvent('add-todo', {
        //     detail: { text: 'Nuevo ítem' },
        //     bubbles: true,
        //     composed: true
        // }));
    }

    render() {
        const filtered = this.filterDone ? this.items.filter(i => !i.done) : this.items;
        return html`
            <!-- <slot></slot> -->
        <button @click=${() => (this.filterDone = !this.filterDone)}>
            ${this.filterDone ? 'Mostrar todos' : 'Ocultar hechos'}
        </button>
        <button
            class="action"
            @click=${this.addNew}
        >
            Agregar Nueva tarea
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