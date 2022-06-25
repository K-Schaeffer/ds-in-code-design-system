import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import style from './style.scss'
import Brand from './Brand.js'
import { createSvgElement } from '../../../utils/js/svgHelper'
import { hostContextHelper } from '../../../utils/js/hostContextHelper'
import menu from 'ds-in-code-assets/dist/assets/icons/menu'
import close from 'ds-in-code-assets/dist/assets/icons/close'
import '../icon'

export default class DscHeader extends LitElement {

  static get styles (){ 
    return unsafeCSS(style)
  }

  static get properties () {
    return {
      opened: { type: Boolean }
    }
  }

  constructor () {
    super()
    
    this.opened = false
  }

  updated () {
    hostContextHelper(this)
  }

  _handleChange () {
    this.opened = !this.opened
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

  render () {
    return html`
      <div class="${classMap({
        [`dscHeader`]: true,
        [`dscHeader--opened`]: this.opened,
      })}">
        <div class="dscHeader__brand">
          ${createSvgElement(Brand)}
        </div>
        <div class="dscHeader__button">
          <dsc-icon
            .icon="${this.opened ? close : menu }"
            size="lg"
            @click="${this._handleChange}"
          >
          </dsc-icon>
        </div>
        <div class="dscHeader__nav">
          <slot></slot>
        </div>
      </div>
    `
  }
}

if (!customElements.get('dsc-header')) { 
  customElements.define('dsc-header', DscHeader)
}
