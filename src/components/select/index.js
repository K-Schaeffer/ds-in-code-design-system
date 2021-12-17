import { LitElement, html, unsafeCSS } from 'lit'
import {classMap} from 'lit/directives/class-map.js';
import style from './style.scss';

export class DscSelect extends LitElement {

  static get styles(){
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      value: { type: String },
      label: { type: String },
      placeholder: { type: String },
      helperText: { type: String },
      required: { type: Boolean },
      disabled: { type: Boolean },
      error: { type: Boolean }
    }
  }

  constructor() {
    super();
    this.id = '';
    this.name = '';
    this.value = '';
    this.label = '';
    this.placeholder = '';
    this.helperText = '';
    this.required = '';
    this.disabled = '';
    this.error = '';
  }

  get selectContainer() {
    return this.shadowRoot.querySelector('.select');
  }

  get select() {
    return this.shadowRoot.querySelector('select');
  }

  firstUpdated(){
    const slot = this.shadowRoot?.querySelector('slot');
		const childNodes = slot?.assignedNodes({flatten: true});
		Array.prototype.map?.call(childNodes, (node) => {
			if(node.nodeName === 'OPTION') {
        this.select?.appendChild(node);
			}
		});
  }

  _handleFocus() {
    this.dispatchEvent(new CustomEvent('dscFocus', {
      bubbles: true,
      composed: true
    }));
  }

  _handleBlur() {
    this.selectContainer.classList.remove('select--focus');
    this.dispatchEvent(new CustomEvent('dscBlur', {
      bubbles: true,
      composed: true
    }));
  }

  _handleChange(event) {
    this.value = event.target.value;
    this.dispatchEvent(new CustomEvent('dscChange', {
      detail: {
        value: this.value
      },
      bubbles: true,
      composed: true
    }));
  }

  _handleKeyup(event) {
    if (event.code === 'Tab') {
      this.selectContainer.classList.add('select--focus');
    }
  }


  render () {
    return html`
      <div class="${
        classMap({
          [`select`]: true,
          [`select--disabled`]: this.disabled,
          [`select--error`]: this.error
        })}"
        @keyup="${(event) => this._handleKeyup(event)}"
      >
        <label for="${this.id}">${this.label}</label>
        <select
          id="${this.id}"
          .name="${this.name}"
          .value="${this.value}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @input="${(event) => this._handleChange(event)}"
        >
          <option value="${this.placeholder}" disabled selected hidden>${this.placeholder}</option>
        </select>
        <span class="select__helper-text">
          ${this.helperText}
        </span>
      </div>
      <slot></slot>
    `
  }
}

if (!customElements.get('dsc-select')) { customElements.define('dsc-select', DscSelect); }
