import { LitElement, html, unsafeCSS } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { createSvgElement } from '../../../utils/js/svgHelper'
import style from './icon.scss'

export default class DscIcon extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  static get properties () {
    return {
      size: { type: String },
      icon: { type: String }
    }
  }

  constructor () {
    super()
    this.size = ''
    this.icon = ""
  }

  get currentSize () {
    return ['sm', 'md', 'lg'].includes(this.size) ? this.size : 'md'
  }

  render () {
    return html`
      <div part="icon"
        class="${classMap({
          [`dscIcon`]: true,
          [`dscIcon--${this.currentSize}`]: true
        })
      }">
        ${createSvgElement(this.icon)}
      </div>
    `
  }
}

if (!customElements.get('dsc-icon')) { 
  customElements.define('dsc-icon', DscIcon)
}
