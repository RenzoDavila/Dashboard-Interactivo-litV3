import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';

export class RandomCharacter extends LitElement {
    static properties = {
        character: { type: Object },
        loading: { type: Boolean },
        error: { type: String },
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
        }
        h2 {
            margin: 0 0 var(--space-3);
        }
        img {
            width: 100%;
            display: block;
        }
        .status {
            display: inline-block;
            padding: 0.2em 0.6em;
            border-radius: 12px;
            font-size: 0.85em;
            background: #eee;
            color: #555;
            margin-bottom: 0.5em;
        }
        .status.Alive {
            background: #c8e6c9;
            color: #256029;
        }
        .status.Dead {
            background: #ffcdd2;
            color: #c62828;
        }
        .status.unknown {
            background: #e0e0e0;
            color: #616161;
        }
    `];

    constructor() {
        super();
        this.character = null;
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchCharacter();
    }

    async fetchCharacter() {
        const randomNumber = Math.floor(Math.random() * 826) + 1;
        console.log('randomNumber', randomNumber)
        const res = await fetch('https://rickandmortyapi.com/api/character/' + randomNumber);
        this.character = await res.json();
    }

    render() {
        if (!this.character) {
        return html`<div class="card"><div class="content">Cargando...</div></div>`;
        }
        return html`
        <h2>random character widget</h2>
        <div class="card p-4">
            <img src="${this.character.image}" alt="${this.character.name}" />
            <div class="content">
            <h2>${this.character.name}</h2>
            <div class="status ${this.character.status}">
                ${this.character.status}
            </div>
            <div><strong>Species:</strong> ${this.character.species}</div>
            <div><strong>Gender:</strong> ${this.character.gender}</div>
            <div><strong>Origin:</strong> ${this.character.origin.name}</div>
            <div><strong>Location:</strong> ${this.character.location.name}</div>
            </div>
        </div>
        `;
    }
}

customElements.define('random-character', RandomCharacter);