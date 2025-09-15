import { LitElement, html, css, nothing } from 'lit';
import { sharedStyles } from '../styles/shared-styles.js';
import '../components/widget/random-character.js';
import '../components/widget/add-notes.js';
import '../components/widget/view-notes.js';

export class ModuleWidget extends LitElement {
    static properties = { 
        // widgets: {
        //     id: Number,
        //     text: String
        // },
        widgets: {type: Array },
        widgetsCount: {type: Number },
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
        h1 {
            margin: 0 0 12px;
        }
        .danger {
            position: relative;
            top: 20px;
        }
    `];

    constructor() {
        super();
        this.widgets = [];
        this.notes = [];
        this.widgetsCount = 0;
        this.notesNotExist = true;
    }

    onSelectChange(e) {
        const valorSeleccionado = e.target.value;
        switch(valorSeleccionado) {
            case 'random-character':
                this.widgets = [...this.widgets, html`<div class="col-12 col-md-6 col-lg-4"> <button class="danger ml-2" @click=${this.addNew}> Borrar </button> <random-character></random-character> </div>`];
                this.widgetsCount++;
                break;
            case 'add-notes':
                this.widgets = [...this.widgets, html`<div class="col-12 col-md-6 col-lg-4"> <add-notes></add-notes> </div>`];
                this.notesNotExist = false;
                this.widgetsCount++;
                break;
            case 'view-notes':
                this.widgets = [...this.widgets, html`<div class="col-12 col-md-6 col-lg-4"> <view-notes .items=${this.notes}></view-notes> </div>`];
                this.widgetsCount++;
                break;
        }
        console.log("this.widgets", this.widgets)
        e.target.value = "";
    }

    render() {
        return html`
        <div class="container">
            <h1>Modulo Widgets</h1>
            <h3>En este módulo encontrarás ejemplos y prácticas para aprender sobre widgets y su implementación en Lit, incluyendo la composición de widgets reutilizables, la comunicación entre ellos, la personalización mediante propiedades, y las mejores prácticas para integrarlos en tus aplicaciones web.</h3>
        </div>
        <div class="row m-6"> 
            <div class="col-6">
                <select @change=${this.onSelectChange}>
                    <option value="">Generar Widget</option>
                    <option value="random-character">Random Character</option>
                    <!-- <option value="add-notes">Add Notes</option> -->
                    ${this.notesNotExist ? html`<option value="add-notes">Add Notes</option>` : nothing}
                    <option value="view-notes">View Notes</option>
                </select>
            </div>
            <div class="col-6">
                Widgets generados: ${this.widgetsCount}
            </div>
        </div>
        <div class="row">
            ${this.widgets.map(widget => widget)}
        </div>
        `;
    }
}

customElements.define('module-widget', ModuleWidget);