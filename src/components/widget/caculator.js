import { LitElement, html, css } from 'lit';
import { sharedStyles } from '../../styles/shared-styles.js';

class SimpleCalculator extends LitElement {
    static properties = {
        displayValue: { type: String },
        firstOperand: { type: Number },
        waitingForSecondOperand: { type: Boolean },
        operator: { type: String },
    };

    static styles = [
        sharedStyles,
        css`
        :host {
            display: block;
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            margin: var(--space-2);
            padding: var(--space-4);
            color: var(--text);
            box-shadow: var(--shadow-1);
            width: 250px;
            user-select: none;
        }
        .display {
            background: #222;
            color: #fff;
            font-size: 2rem;
            padding: 0.5em;
            border-radius: var(--radius);
            margin-bottom: var(--space-3);
            text-align: right;
            min-height: 2.5em;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-2);
        }
        button {
            font-size: 1.2rem;
            padding: 0.7em 0;
            border: none;
            border-radius: var(--radius);
            background: var(--surface-2, #eee);
            cursor: pointer;
            transition: background 0.2s;
        }
        button:active {
            background: var(--highlight, #ccc);
        }
        button.operator {
            background: var(--primary, #3bb);
            color: #fff;
        }
        button.equal {
            background: var(--accent, #fb0);
            color: #333;
        }
        button.clear {
            background: #e33;
            color: #fff;
        }
        `
    ];

    constructor() {
        super();
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForSecondOperand = false;
        this.operator = null;
    }

    _inputDigit(digit) {
        if (this.waitingForSecondOperand) {
        this.displayValue = digit;
        this.waitingForSecondOperand = false;
        } else {
        this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
        }
    }

    _inputDecimal() {
        if (!this.displayValue.includes('.')) {
        this.displayValue += '.';
        }
    }

    _handleOperator(nextOperator) {
        const inputValue = parseFloat(this.displayValue);

        if (this.operator && this.waitingForSecondOperand) {
        this.operator = nextOperator;
        return;
        }

        if (this.firstOperand == null && !isNaN(inputValue)) {
        this.firstOperand = inputValue;
        } else if (this.operator) {
        const result = this._performCalculation(this.operator, this.firstOperand, inputValue);
        this.displayValue = String(result);
        this.firstOperand = result;
        }

        this.operator = nextOperator;
        this.waitingForSecondOperand = true;
    }

    _performCalculation(operator, firstOperand, secondOperand) {
        switch (operator) {
        case '+': return firstOperand + secondOperand;
        case '-': return firstOperand - secondOperand;
        case '*': return firstOperand * secondOperand;
        case '/': return secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
        default: return secondOperand;
        }
    }

    _clear() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitingForSecondOperand = false;
    }

    render() {
        return html`
        <h2>Calculadora</h2>
        <div class="display">${this.displayValue}</div>
        <div class="buttons">
            <button class="clear" @click=${this._clear}>C</button>
            <button @click=${() => this._inputDigit('7')}>7</button>
            <button @click=${() => this._inputDigit('8')}>8</button>
            <button @click=${() => this._inputDigit('9')}>9</button>
            <button class="operator" @click=${() => this._handleOperator('/')}>÷</button>
            <button @click=${() => this._inputDigit('4')}>4</button>
            <button @click=${() => this._inputDigit('5')}>5</button>
            <button @click=${() => this._inputDigit('6')}>6</button>
            <button class="operator" @click=${() => this._handleOperator('*')}>×</button>
            <button @click=${() => this._inputDigit('1')}>1</button>
            <button @click=${() => this._inputDigit('2')}>2</button>
            <button @click=${() => this._inputDigit('3')}>3</button>
            <button class="operator" @click=${() => this._handleOperator('-')}>−</button>
            <button @click=${() => this._inputDigit('0')}>0</button>
            <button @click=${this._inputDecimal}>.</button>
            <button class="equal" @click=${() => this._handleOperator('=')}>=</button>
            <button class="operator" @click=${() => this._handleOperator('+')}>+</button>
        </div>
        `;
    }
}

customElements.define('simple-calculator', SimpleCalculator);