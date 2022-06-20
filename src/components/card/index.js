import { LitElement, html, unsafeCSS } from 'lit'
import style from './card.scss'

export default class DscCard extends LitElement {

  static get styles () {
    return unsafeCSS(style)
  }

  constructor () {
    super()
  }

  _handleClick () {
    this.dispatchEvent(new CustomEvent('dsc-click', {
        bubbles: true,
        composed: true
    }))
  }

  render() {
    return html`
      <div part="card" class="dscCard" tabindex=0 @click=${this._handleClick}>
        <slot></slot>
      </div>
    `
  }
}

if (!customElements.get('dsc-card')) { 
  customElements.define('dsc-card', DscCard) 
}
