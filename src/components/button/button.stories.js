import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Button'
}

export const Button = ({
  label,
  disabled,
  loading
}) => {

  return html`
    <dsc-button
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      ${label}
    </dsc-button>
  `
}

Button.args = {
  label: "Button Primary",
  disabled: false,
  loading: false
}

Button.argTypes = {
  label: {
      name: 'Label',
      description: 'Define a label do button',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: 'Button Label' }
      }
  },
  disabled: {
      name: 'Disabled',
      description: 'Define se o button está desabilitado',
      table: {
          category: 'Modifiers',
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' }
      }
  },
  loading: {
      name: 'Loading',
      description: 'Define se o button está loading',
      table: {
          category: 'Modifiers',
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' }
      }
  },

  dscClick: {
      description: 'Evento emitido ao clicar no botão',
      table: {
          type: { summary: 'void' },
          category: 'Events'
      }
  }
}

Button.parameters = {
  docs: {
      source: {
          code: `<dsc-button size="lg">Button Label</dsc-button>`
      }
  }
}