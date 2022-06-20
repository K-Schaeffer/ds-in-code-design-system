import { html } from 'lit'
import { action } from '@storybook/addon-actions'
import './index.js'

export default {
  title: 'Components/Select'
}

export const Select = ({
  name,
  value,
  label,
  placeholder,
  helperText,
  required,
  disabled,
  error
}) => {

  function _handleFocus () {
    action('dscFocus') ({ value: 'Focus event' })
  }

  function _handleBlur () {
      action('dscBlur') ({ value: 'Blur event' });
  }

  function _handleChange (e) {
      action('dscChange') ({ value: e.detail.value });
  }

  return html`
    <dsc-select
      id="input-text-id"
      .name="${name}"
      .value="${value}"
      .label="${label}"
      .placeholder="${placeholder}"
      .helperText="${helperText}"
      ?required="${required}"
      ?disabled=${disabled}
      ?error="${error}"
      @dsc-focus="${_handleFocus}"
      @dsc-blur="${_handleBlur}"
      @dsc-change="${(event) => _handleChange(event)}"
    >
      <option value="1">Label 1</option>
      <option value="2">Label 2</option>
      <option value="3">Label 3</option>
      <option value="4">Label 4</option>
      <option value="5">Label 5</option>
      <option value="6">Label 6</option>
    </dsc-select>
  `
}

Select.args = {
  value: '',
  label: 'Label',
  placeholder: 'Input text',
  helperText: 'Helper text',
  required: true,
  disabled: false,
  error: false,
}

Select.argTypes = {
  value: {
      name: 'Value',
      description: 'Define o valor do input',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: '' }
      }
  },
  label: {
      name: 'Label',
      description: 'Define a label do input',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: 'Label' }
      }
  },
  placeholder: {
      name: 'Placeholder',
      description: 'Define o placeholder do input',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: 'Input text' }
      }
  },
  helperText: {
      name: 'Helper text',
      description: 'Define a mensagem do input',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: 'Helper text' }
      }
  },
  disabled: {
      name: 'Disabled',
      description: 'Define se o input será desabilitado',
      table: {
          category: 'Modifiers',
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' }
      }
  },
  required: {
    name: 'Required',
    description: 'Define se o input será obrigatório',
    table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
    }
},

  error: {
      name: 'Error',
      description: 'Define se será exibida uma mensagem de erro',
      table: {
          category: 'Modifiers',
          type: { summary: 'boolean' },
          defaultValue: { summary: 'false' }
      }
  },

  dscFocus: {
      description: 'Evento emitido ao dar focus no input text',
      table: {
          type: { summary: 'void' },
          category: 'Events'
      }
  },
  dscBlur: {
      description: 'Evento emitido ao sair do input text',
      table: {
          type: { summary: 'void' },
          category: 'Events'
      }
  },
  dscChange: {
      description: 'Evento emitido ao alterar o valor do input text',
      table: {
          type: { summary: 'string' },
          defaultValue: { summary: '' },
          category: 'Events'
      }
  }
}

Select.parameters = {
  docs: {
      source: {
          code: `<dsc-input-text label="Label" placeholder="Input text"></dsc-input-text>`
      }
  }
}
