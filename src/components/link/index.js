import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import style from './link.scss'

export default class DscLink extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  static get properties () {
    return {
      href: { type: String },
      target: { type: String },
      disabled: { type: Boolean }
    }
  }


  constructor () {
    super()

    this.href = ''
    this.target = ''
    this.disabled = false
  }

  get patternTarget() {
    return ['_blank', '_self', '_parent', '_top'].includes(this.target) ? this.target : '_self';
  }

  render () {
    return html`
      <a
        class="${
          classMap({
              [`dscLink`]: true,
              [`dscLink--disabled`]: this.disabled
          })
        }"
        .target="${this.patternTarget}"
        .href="${this.href}"
        aria-disabled="${this.disabled}"
      >
        <slot></slot>
      </a>
    `
  }
}

if (!customElements.get('dsc-link')) { 
  customElements.define('dsc-link', DscLink)
}
