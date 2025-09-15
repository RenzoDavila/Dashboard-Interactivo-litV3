import { LitElement, html, css, nothing } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';
import '../components/widget/random-character.js';
import '../components/widget/add-notes.js';
import '../components/widget/view-notes.js';
import '../components/widget/caculator.js';

export class ModuleWidget extends LitElement {
    static properties = { 
        widgets: { type: Array },
        notes: { type: Array },
        notesNotExist: { type: Boolean },
    };

    static styles = [
    sharedStyles, css`
        :host {
            display: block;
            padding: 16px;
            background-color: var(--surface-2);
        }
        .widget-actions button {
            margin-right: 6px;
            margin-bottom: 6px;
        }
    `];

    constructor() {
        super();
        this.widgets = [];
        this.notes = [];
        this.notesNotExist = true;
        this._nextId = 1; // Para ids únicos
    }

    onSelectChange(e) {
        const valorSeleccionado = e.target.value;
        if (!valorSeleccionado) return;
        const widgetData = { 
            id: this._nextId++,
            type: valorSeleccionado
        };
        this.widgets = [...this.widgets, widgetData];

        if (valorSeleccionado === 'add-notes') this.notesNotExist = false;
        e.target.value = "";
    }

    _deleteWidget(id) {
        this.widgets = this.widgets.filter(w => w.id !== id);
        if (!this.widgets.some(w => w.type === 'add-notes')) this.notesNotExist = true;
    }

    _moveWidget(id, direction) {
        const idx = this.widgets.findIndex(w => w.id === id);
        if (idx === -1) return;
        let newWidgets = [...this.widgets];
        if (direction === 'up' && idx > 0) {
            [newWidgets[idx-1], newWidgets[idx]] = [newWidgets[idx], newWidgets[idx-1]];
        } else if (direction === 'down' && idx < newWidgets.length-1) {
            [newWidgets[idx], newWidgets[idx+1]] = [newWidgets[idx+1], newWidgets[idx]];
        }
        this.widgets = newWidgets;
    }

    _renderWidget(widget, idx) {
        let widgetElement;
        switch(widget.type) {
            case 'random-character':
                widgetElement = html`<random-character></random-character>`;
                break;
            case 'add-notes':
                widgetElement = html`<add-notes @add-note=${this._onAddNote}></add-notes>`;
                break;
            case 'view-notes':
                widgetElement = html`<view-notes .items=${this.notes}></view-notes>`;
                break;
            case 'simple-calculator':
                widgetElement = html`<simple-calculator></simple-calculator>`;
                break;
            default:
                widgetElement = nothing;
        }
        return html`
        <div class="col-12 col-md-6 col-lg-4">
            <div class="widget-actions">
                <button @click=${() => this._moveWidget(widget.id, 'up')} ?disabled=${idx===0}>⬆️</button>
                <button @click=${() => this._moveWidget(widget.id, 'down')} ?disabled=${idx===this.widgets.length-1}>⬇️</button>
                <button class="danger" @click=${() => this._deleteWidget(widget.id)}>🗑️ Borrar</button>
            </div>
            ${widgetElement}
        </div>
        `;
    }

    render() {
        return html`
        <div class="container">
            <h1>Modulo Widgets</h1>
            <h3>En este módulo encontrarás ejemplos y prácticas para aprender sobre widgets y su implementación en Lit, incluyendo la composición de widgets reutilizables, la comunicación entre ellos, la personalización mediante propiedades, y las mejores prácticas para integrarlos en tus aplicaciones web.</h3>
            <div class="row m-6"> 
                <div class="col-6">
                    <select @change=${this.onSelectChange}>
                        <option value="">Generar Widget</option>
                        <option value="random-character">Random Character</option>
                        ${this.notesNotExist ? html`<option value="add-notes">Add Notes</option>` : nothing}
                        <option value="view-notes">View Notes</option>
                        <option value="simple-calculator">calculator</option>
                    </select>
                </div>
                <div class="col-6">
                    Widgets generados: ${this.widgets.length}
                </div>
            </div>
            <div class="row">
                ${this.widgets.map((widget, idx) => this._renderWidget(widget, idx))}
            </div>
        </div>
        `;
    }

    _onAddNote(e) {
        console.log('add-todo event:', e.detail);
        this.events = [...this.events, `TodoList - add-todo event: ${e.detail.text}`];
    }
}

customElements.define('module-widget', ModuleWidget);