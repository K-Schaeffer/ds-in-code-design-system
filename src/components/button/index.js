import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import style from './button.scss'

export class DscButton extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  static get properties () {
    return {
      disabled: { type: Boolean },
      loading: { type: Boolean }
    }
  }

  constructor() {
    super()

    this.disabled = false
    this.loading = false
  }

  _handleClick () {
    this.dispatchEvent(new CustomEvent('dsc-click', {
        bubbles: true,
        composed: true
    }))
  }

  render () {
    return html`
      <button
        class=${
          classMap({
            [`dscButton`]: true,
            [`dscButton--loading`]: this.loading,
          })
        }
        aria-disabled="${this.disabled}"
        aria-label="${ifDefined(this.loading ? 'Loading' : undefined)}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot>
      </button>
    `
  }
}


if (!customElements.get('dsc-button')) {
  customElements.define('dsc-button', DscButton)
}
