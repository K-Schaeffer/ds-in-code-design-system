import { LitElement, html, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import style from './style.scss';

export default class DscTypography extends LitElement {

  static get styles(){
    return unsafeCSS(style);
  }

  static get properties() {
    return {
      component: { type: String },
      variant: { type: String },
      size: { type: String }
    }
  }

  constructor() {
    super();
    this.component = '';
    this.variant = '';
    this.size = '';
  }

  get headingPatternSize() {
    return ['xs', 'sm', 'md', 'lg', 'xl', 'display'].includes(this.size) ? this.size : 'display';
  }

  get headingPatternVariant() {
      return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(this.variant) ? this.variant : 'h1';
  }

  get patternComponent() {
      return ['heading', 'paragraph', 'caption'].includes(this.component) ? this.component : 'heading';
  }

  renderHeading() {
    return html`${
        unsafeHTML(`<${this.headingPatternVariant}
                    class="typography typography-heading typography-heading--${this.headingPatternSize}">
                        <slot></slot>
                    </${this.headingPatternVariant}>`)}`;
  }


  renderParagraph() {
    return html`<p class="typography typography-paragraph"><slot></slot></p>`;
  }

  renderCaption() {
    return html`<span class="typography typography-caption"><slot></slot></span>`;
  }

  render() {
    return html`${
        this.patternComponent === 'heading' ? this.renderHeading() :
        this.patternComponent === 'paragraph' ? this.renderParagraph() :
        this.renderCaption()
    }`;
  }
}

if (!customElements.get('dsc-typography')) { customElements.define('dsc-typography', DscTypography); }