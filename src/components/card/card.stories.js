import { html } from 'lit'
import './index.js'

export default {
  title: 'Components/Card'
}

export const Card = () => {

  return html`
  <div style="
    width: 315px;
    height: 320px;
  ">
    <dsc-card>
    </dsc-card>
  </div>
  `
}

Card.argTypes = {
  'dsc-click': {
      description: 'Evento emitido ao clicar no card',
      table: {
          type: { summary: 'void' },
          category: 'Events'
      },
      control: null
  }
}

Card.parameters = {
  docs: {
      source: {
          code: `<dsc-card>[content]</dsc-card>`
      }
  }
}
