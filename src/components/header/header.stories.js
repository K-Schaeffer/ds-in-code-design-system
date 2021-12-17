import { html } from 'lit';
import './index.js'

export default {
  title: 'Components/Header'
}

export const Header = () => {

  return html`
  <style>
    @media screen and (max-width: 767px){
      .content{
        min-height: 225px;
      }
    }
  </style>
    <div style="width: 100vw;">
      <dsc-header>
        <div class="content"></div>
      </dsc-header>
    </div>
  `
}

Header.parameters = {
  docs: {
      source: {
          code: `<dsc-header>[content menu]</dsc-header>`
      }
  }
}