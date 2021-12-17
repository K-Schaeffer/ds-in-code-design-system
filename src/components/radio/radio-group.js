import { LitElement, html, unsafeCSS } from "lit";
import style from './style-group.scss';

export class DscRadioGroup extends LitElement {


  static get styles(){
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      currentIndex: { type: Number },
      previousIndex: { type: Number }
    }
  }

  constructor() {
    super();
    this.currentIndex = 0;
    this.previousIndex = -1;
    this.value = '';
  }

  get slotElement() {
    return this.shadowRoot.querySelector('slot');
  }

  get radioElements() {
      return this.querySelectorAll('dsc-radio');
  }

  dispatchEventChange() {
      this.dispatchEvent(new CustomEvent('dscChange', {
          detail: {
              value: this.value
          },
          bubbles: true,
          composed: true
      }));
  }

  checkCurrentRadio() {
      const currentRadio = this.radioElements[this.currentIndex];
      // currentRadio.checked = true;
      currentRadio.setAttribute('checked', true);
  }

  uncheckPreviousRadio() {
      const previousRadio = this.radioElements[this.previousIndex];
      // previousRadio.checked = false;
      previousRadio.removeAttribute('checked');
  }

  _handleChange(event) {
    this.previousIndex = this.currentIndex;
    this.currentIndex = event.detail.index;
    this.value = event.detail.value;
    this.uncheckPreviousRadio();
    this.checkCurrentRadio();
    this.dispatchEventChange();
  }

  _handleSlotChange(event) {
    const childNodes = event.target.assignedNodes({ flatten: true });
    childNodes
    .filter(node => node.nodeName === 'DSC-RADIO')
    .forEach((node, index) => {
        node.index = index;
        node.addEventListener('dscChange', this._handleChange.bind(this));
    });
  }

  render () {
    return html`
      <div class="radio-group">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `
  }
}


if (!customElements.get('dsc-radio-group')) { customElements.define('dsc-radio-group', DscRadioGroup); }