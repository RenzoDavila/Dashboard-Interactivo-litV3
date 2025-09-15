import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import learningIcon from '../../assets/icons/learning.svg?raw';
import registerIcon from '../../assets/icons/register.svg?raw';
import widgetIcon from '../../assets/icons/widget.svg?raw';

export class AppNavbar extends LitElement {
    static styles = [
        sharedStyles, css`
        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--surface);
            padding: var(--space-4);
            border-radius: var(--radius);
            box-shadow: var(--shadow-1);
            margin-bottom: var(--space-5);
        }
        .nav-links {
            display: flex;
            gap: var(--space-4);
        }
        .nav-icon-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5em;
            border-radius: var(--radius);
            color: var(--text-muted);
            transition: color 0.2s, background 0.2s;
        }
        .nav-icon-btn.active,
        .nav-icon-btn:hover {
            color: var(--primary);
            background: var(--surface-variant, #ececec);
        }
        .nav-icon-btn svg {
            width: 32px;
            height: 32px;
            display: block;
        }
        .navbar-right {
            display: flex;
            align-items: center;
            gap: var(--space-3);
        }
        @media (max-width: 600px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
                gap: var(--space-3);
            }
            .navbar-right { 
                width: 100%;
                justify-content: flex-end;
            }
        }
        `
    ];

    static properties = {
        isLight: { type: Boolean },
        active: { type: String }
    };

    constructor() {
        super();
        this.active = 'inicio';
        // ...tu lógica de tema...
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        this.isLight = true;
        } else {
        document.body.removeAttribute('data-theme');
        this.isLight = false;
        }
    }

    firstUpdated() {
        window.addEventListener('theme-changed', (e) => {
        this.isLight = e.detail === 'light';
        this.requestUpdate();
        });
    }

    getCurrentTheme() {
        return document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    toggleTheme() {
        const isLight = this.getCurrentTheme() === 'light';
        if (isLight) {
        document.body.removeAttribute('data-theme'); // dark por defecto
        localStorage.setItem('theme', 'dark');
        this.isLight = false;
        } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        this.isLight = true;
        }
        this.requestUpdate();
    }

    setActive(tab) {
        this.active = tab;
        // Aquí puedes emitir un evento o cambiar la ruta usando tu router
        // Por ejemplo:
        // window.location.hash = tab; 
        // o this.dispatchEvent(new CustomEvent('navigate', {detail: tab}));
    }

    render() {
        return html`
        <nav>
            <div class="nav-links">
            <button 
                class="nav-icon-btn ${this.active === 'learning' ? 'active' : ''}"
                @click=${() => this.setActive('learning')}
                title="Inicio"
                aria-label="Inicio"
            >
                ${unsafeSVG(learningIcon)}
            </button>
            <button 
                class="nav-icon-btn ${this.active === 'register' ? 'active' : ''}"
                @click=${() => this.setActive('register')}
                title="Proyectos"
                aria-label="Proyectos"
            >
                ${unsafeSVG(registerIcon)}
            </button>
            <button 
                class="nav-icon-btn ${this.active === 'widget' ? 'active' : ''}"
                @click=${() => this.setActive('widget')}
                title="Contacto"
                aria-label="Contacto"
            >
                ${unsafeSVG(widgetIcon)}
            </button>
            </div>
            <div class="navbar-right">
            <button @click=${this.toggleTheme}>
                Cambiar a tema ${this.isLight ? 'oscuro' : 'claro'}
            </button>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-navbar', AppNavbar);