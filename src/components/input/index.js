import { LitElement, html, unsafeCSS } from 'lit'
import {classMap} from 'lit/directives/class-map.js';
import style from './style.scss';

export class DscInputText extends LitElement {

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
      error: { type: Boolean },
      autocomplete: { type: Boolean },
      maxlength: { type: Number }
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
    this.autocomplete = false;
    this.maxlength = '';
  }

  get inputTextContainer() {
    return this.shadowRoot.querySelector('.input-text');
}

  _handleFocus() {
    this.dispatchEvent(new CustomEvent('dscFocus', {
      bubbles: true,
      composed: true
    }));
  }

  _handleBlur() {
    this.inputTextContainer.classList.remove('input-text--focus');
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
      this.inputTextContainer.classList.add('input-text--focus');
    }
  }


  render () {
    return html`
      <div class="${
        classMap({
          [`input-text`]: true,
          [`input-text--disabled`]: this.disabled,
          [`input-text--error`]: this.error
        })}"
        @keyup="${(event) => this._handleKeyup(event)}"
      >
        <label for="${this.id}">${this.label}</label>
        <input
          type="text"
          id="${this.id}"
          .name="${this.name}"
          .value="${this.value}"
          .placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?disabled="${this.disabled}"
          ?aria-autocomplete="${this.autocomplete}"
          maxlength="${this.maxlength}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @input="${(event) => this._handleChange(event)}"
        />
        <span class="input-text__helper-text">
          ${this.helperText}
        </span>
      </div>
    `
  }
}

if (!customElements.get('dsc-input-text')) { customElements.define('dsc-input-text', DscInputText); }
