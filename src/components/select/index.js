import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import style from './select.scss'

export class DscSelect extends LitElement {

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
      error: { type: Boolean }
    }
  }

  get selectContainer () {
    return this.shadowRoot.querySelector('.dscSelect')
  }

  get slot () {
    return this.shadowRoot?.querySelector('slot')
  }

  get select () {
    return this.shadowRoot.querySelector('select')
  }

  constructor () {
    super()
    
    this.id = ''
    this.name = ''
    this.value = ''
    this.label = ''
    this.placeholder = ''
    this.helperText = ''
    this.required = false
    this.disabled = false
    this.error = false
  }

  firstUpdated () {
		const childNodes = this.slot?.assignedNodes({ flatten: true })

		childNodes.forEach(node => {
			if (node.nodeName === 'OPTION') {
        this.select?.appendChild(node)
			}
		})
  }

  _handleFocus () {
    this.dispatchEvent(new CustomEvent('dsc-focus', {
      bubbles: true,
      composed: true
    }))
  }

  _handleBlur () {
    console.log('aqui')
    this.selectContainer.classList.remove('dscSelect--focus')

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
      this.selectContainer.classList.add('dscSelect--focus');
    }
  }

  render () {
    return html`
      <div class="${
        classMap({
          [`dscSelect`]: true,
          [`dscSelect--disabled`]: this.disabled,
          [`dscSelect--error`]: this.error
        })}"
        @keyup="${(event) => this._handleKeyup(event)}"
      >
        <label for="${this.id}">${this.label}</label>
        <div class="dscSelect__wrapper">
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
            <option value="" disabled selected hidden>${this.placeholder}</option>
          </select>
        </div>
        <span class="dscSelect__helperText">
          ${this.helperText}
        </span>
      </div>
      <slot>
    `
  }
}

if (!customElements.get('dsc-select')) { 
  customElements.define('dsc-select', DscSelect)
}
