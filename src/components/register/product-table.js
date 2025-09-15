import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';

class ProductTable extends LitElement {
    static properties = {
        products: { type: Array },
        loading: { type: Boolean },
        error: { type: String },
    };

    static styles = [
        sharedStyles,css`
            :host {
                display: block;
                margin: var(--space-5) 0;
            }
            h2 {
                margin-bottom: var(--space-4);
                font-size: 1.3rem;
                font-weight: 600;
            }
            .center {
                text-align: center;
            }
            .table-container {
                overflow-x: auto;
            }
        `
    ];

    constructor() {
        super();
        this.products = [];
        this.loading = false;
        this.error = '';
    }

    connectedCallback() {
        super.connectedCallback();
        this.fetchProducts();
    }

    async fetchProducts() {
        this.loading = true;
        this.error = '';
        try {
            const response = await fetch('http://148.230.78.65:8000/rest/v1/rpc/search_products?limit_count=10&', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer',
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlIiwiZXhwIjo2MjM1ODY4OTU1MywiaWF0IjoxNzU2MjUzMDQzfQ.7mRoqcW19vJ1JN1Ii8p7WYSmAtdLt2vUsOjV05WITk4',
                    'Content-Type': 'application/json',
                }
            });
            if (!response.ok) throw new Error('Error en la petición');
            const data = await response.json();
            this.products = data;
        } catch (err) {
            this.error = err.message;
        } finally {
            this.loading = false;
        }
    }

    render() {
        return html`
        <div class="container">
            <h2>Listado de Productos</h2>
            <div class="mt-6 table-container">
                ${
                    this.loading
                    ? html`<p class="center">Cargando...</p>`
                    : this.error
                    ? html`<p class="center" style="color:var(--danger);">Error: ${this.error}</p>`
                    : html`
                        <table>
                            <thead>
                            <tr>
                                ${this.products.length 
                                ? Object.keys(this.products[0]).map(key => html`<th>${key}</th>`)
                                : html`<th>No hay datos</th>`
                                }
                            </tr>
                            </thead>
                            <tbody>
                            ${this.products.map(prod => html`
                                <tr>
                                ${Object.values(prod).map(val => html`<td>${val}</td>`)}
                                </tr>
                            `)}
                            </tbody>
                            <caption>${this.products.length} productos encontrados</caption>
                        </table>
                        `
                }
            </div>
        </div>
        `;
    }
}

customElements.define('product-table', ProductTable);