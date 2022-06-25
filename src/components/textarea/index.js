import { LitElement, html, unsafeCSS } from 'lit'
import {classMap} from 'lit/directives/class-map.js'
import style from './textarea.scss'

export class DscTextarea extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  static get properties () {
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

  constructor () {
    super()

    this.id = ''
    this.name = ''
    this.value = ''
    this.label = ''
    this.placeholder = ''
    this.helperText = ''
    this.required = ''
    this.disabled = ''
    this.error = ''
    this.autocomplete = false
    this.maxlength = ''
  }

  get inputTextContainer () {
    return this.shadowRoot.querySelector('.dscTextarea')
}

  _handleFocus () {
    this.dispatchEvent(new CustomEvent('dsc-focus', {
      bubbles: true,
      composed: true
    }))
  }

  _handleBlur () {
    this.inputTextContainer.classList.remove('dscTextarea--focus')
    this.dispatchEvent(new CustomEvent('dsc-blur', {
      bubbles: true,
      composed: true
    }))
  }

  _handleChange (event) {
    this.value = event.target.value
    this.dispatchEvent(new CustomEvent('dsc-change', {
      detail: {
        value: this.value
      },
      bubbles: true,
      composed: true
    }))
  }

  _handleKeyup (event) {
    if (event.code === 'Tab') {
      this.inputTextContainer.classList.add('dscTextarea--focus')
    }
  }


  render () {
    return html`
      <div class="${
        classMap({
          [`dscTextarea`]: true,
          [`dscTextarea--disabled`]: this.disabled,
          [`dscTextarea--error`]: this.error
        })}"
        @keyup="${(event) => this._handleKeyup(event)}"
      >
        <label for="${this.id}">${this.label}</label>
        <textarea
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
        ></textarea>
        <span class="dscTextArea__helperText">
          ${this.helperText}
        </span>
      </div>
    `
  }
}

if (!customElements.get('dsc-textarea')) { 
  customElements.define('dsc-textarea', DscTextarea)
}
