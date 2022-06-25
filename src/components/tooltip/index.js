import { LitElement, html, unsafeCSS } from 'lit'
import {classMap} from 'lit/directives/class-map.js'
import style from './tooltip.scss'

export class DscTooltip extends LitElement {

  static get styles () {
    return unsafeCSS(style)
}

static get properties () {
    return {
        label: { type: String },
        placement: { type: String }
    }
  }

  constructor () {
    super()

    this.label = ''
    this.placement = ''
  }

  get patternPlacement () {
    return [ 'bottom-end',
             'bottom-start',
             'bottom',
             'left-end',
             'left-start',
             'left',
             'right-end',
             'right-start',
             'right',
             'top-end',
             'top-start',
             'top'
            ].includes(this.placement) ?
            this.placement :
            'top'
  }

  render () {
    return html`
        <div class="${
            classMap({
                [`dscTooltip`]: true,
                [`dscTooltip--${this.patternPlacement}`]: true
            })
        }">
            <span class="dscTooltip__label">${this.label}</span>
            <slot></slot>
        </div>
    `
  }
}

if (!customElements.get('dsc-tooltip')) { 
  customElements.define('dsc-tooltip', DscTooltip)
}
