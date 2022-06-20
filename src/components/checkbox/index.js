import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import style from './checkbox.scss'
import check from 'ds-in-code-assets/dist/assets/icons/check'
import '../icon'

export default class DscCheckbox extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  static get properties () {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      checked: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean }
    }
  }

  get hiddenInput () {
    return this.shadowRoot?.querySelector('input');
  }

  constructor () {
    super()

    this.id = 'dsc-checkbox'
    this.name = 'dsc-checkbox'
    this.label = ''
    this.checked = false
    this.required = false
    this.disabled = false
  }

  updated (changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
        if (propName === 'checked' && oldValue !== undefined) {
          this.hiddenInput.checked = this.checked
          this._handleDispatchEvent()
        }
    })
  }

  _handleChange () {
    this.checked = !this.checked
    this._handleDispatchEvent()
  }

  _handleDispatchEvent = () => {
    this.dispatchEvent(new CustomEvent('dsc-change', {
      detail: {
          checked: this.checked
      },
      bubbles: true,
      composed: true
    }))
  }

  render() {
    return html`
      <label
        class="${classMap({
          [`dscCheckbox`]: true,
          [`dscCheckbox--checked`]: this.checked,
          [`dscCheckbox--disabled`]: this.disabled,
        })}"
        for="${this.name}"
      >
        <input
          type="checkbox"
          .id="${this.id}"
          .name="${this.name}"
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          aria-checked=${this.checked}
          @change="${this._handleChange}"
        >
        <span class="dscCheckbox__checkmark">
          ${ this.checked ?
              html`<dsc-icon .icon="${check}" size="sm"></dsc-icon>`
            : null
          }
        </span>
        ${this.label}
      </label>
    `
  }
}

if (!customElements.get('dsc-checkbox')) { 
  customElements.define('dsc-checkbox', DscCheckbox)
}
