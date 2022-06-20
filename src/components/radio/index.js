import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import style from './style.scss';
import bullet from 'ds-in-code-assets/dist/assets/icons/bullet';
import '../icon'

export default class DscRadio extends LitElement {

  static get styles(){
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      id: { type: String },
      name: { type: String },
      label: { type: String },
      checked: { type: Boolean },
      required: { type: Boolean },
      disabled: { type: Boolean },
      value: { type: String },
      index: { type: Number }
    }
  }

  constructor() {
    super();
    this.index = 0;
    this.value = '';
    this.id = 'dsc-radio';
    this.name = 'dsc-radio';
    this.label = '';
    this.checked = false;
    this.required = false;
    this.disabled = false;
  }

  get hiddenInput() {
    return this.shadowRoot?.querySelector('input');
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
        if (propName === 'checked' && oldValue !== undefined) {
          console.log(this.checked);
          this.hiddenInput.checked = this.checked;
        }
    });
  }

  _handleClick() {
    this.checked = true;
    this._handleDispatchEvent();
  }

  _handleDispatchEvent = () => {
    this.dispatchEvent(new CustomEvent('dscChange', {
      detail: {
          checked: this.checked,
          index: this.index,
          value: this.value
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <label
        class="${classMap({
          [`radio`]: true,
          [`radio--checked`]: this.checked,
          [`radio--disabled`]: this.disabled,
        })}"
        for="${this.name}"
      >
        <input
          type="radio"
          .id="${this.id}"
          .name="${this.name}"
          .value="${this.value}"
          ?disabled=${this.disabled}
          ?checked=${this.checked}
          ?required=${this.required}
          aria-checked=${this.checked}
          @click="${this._handleClick}"
        >
        <span class="radio-checkmark">
          ${ this.checked ?
              html`<dsc-icon .icon="${bullet}" size="sm"></dsc-icon>`
            : null
          }
        </span>
        ${this.label}
      </label>
    `
  }
}

if (!customElements.get('dsc-radio')) { customElements.define('dsc-radio', DscRadio);}