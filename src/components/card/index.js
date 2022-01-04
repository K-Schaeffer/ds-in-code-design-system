import { LitElement, html, unsafeCSS } from 'lit';
import style from './style.scss';

export default class DscCard extends LitElement {

  static get styles(){
    return unsafeCSS(style);
  }

  constructor() {
    super();
  }

  _handleClick() {
    this.dispatchEvent(new CustomEvent('dscClick', {
        bubbles: true,
        composed: true
    }));
  }

  render() {
    return html`
      <div part="card" class="card" tabindex=0>
        <slot></slot>
      </div>
    `
  }
}

if (!customElements.get('dsc-card')) { customElements.define('dsc-card', DscCard); }