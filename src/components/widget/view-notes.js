import { LitElement, html, css, nothing } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

class ViewNotes extends LitElement {
    static properties = {
        items: { type: Array },
        count: { type: Number },
    };

    static styles = [
    sharedStyles, css`
        :host {
            display: block;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            margin: var(--space-2);
            padding: var(--space-4);
            color: var(--text);
            box-shadow: var(--shadow-1);
            height: 300px;
            overflow: auto;
        }
        h2 {
            margin: 0 0 var(--space-3);
        }
        li.done { text-decoration: line-through; color: #999; }
    `];

    constructor() {
        super();
        this.items = [
            { id: 1, text: 'Mi primeroa nota' },
        ];
        this.count = 0;
        console.log('this.count en constructor (learning-lifecycle) ==>', this.count);
    }

    render() {
        return html`
        <h2>View Notes Widget</h2>
        <ul>
            ${this.items.map(item => html`
                <tr>
                    ${Object.values(item).map(val => html`<td>${val}</td>`)}
                </tr>
            `)}
        </ul>
        ${this.items.length === 0 ? html`<p>No hay items</p>` : nothing}
        `;
    }

    _toggle(id) {
        this.items = this.items.map(i => i.id === id ? {...i, done: !i.done} : i);
    }
}
customElements.define('view-notes', ViewNotes);