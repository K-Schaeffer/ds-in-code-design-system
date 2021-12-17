import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import style from './style.scss';

export default class DscSwitch extends LitElement {

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
    }
  }

  constructor() {
    super();
    this.id = 'dsc-switch';
    this.name = 'dsc-switch';
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
          this.hiddenInput.checked = this.checked;
          this._handleDispatchEvent();
        }
    });
  }

  _handleChange() {
    this.checked = !this.checked;
    this._handleDispatchEvent();
  }

  _handleDispatchEvent = () => {
    this.dispatchEvent(new CustomEvent('dscChange', {
      detail: {
          checked: this.checked
      },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <label
        class="${classMap({
          [`switch`]: true,
          [`switch--checked`]: this.checked,
          [`switch--disabled`]: this.disabled,
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
        <span class="switch-checkmark"></span>
        ${this.label}
      </label>
    `
  }
}

if (!customElements.get('dsc-switch')) { customElements.define('dsc-switch', DscSwitch);}