import { html } from 'lit'
import { action } from '@storybook/addon-actions';
import './index.js'

export default {
  title: 'Components/Textarea'
}

export const Textarea = ({
  name,
  value,
  label,
  placeholder,
  helperText,
  required,
  disabled,
  error,
  autocomplete,
  maxlength
}) => {

  function _handleFocus() {
    action('dscFocus')({ value: 'Focus event' });
  }

  function _handleBlur() {
      action('dscBlur')({ value: 'Blur event' });
  }

  function _handleChange(e) {
      action('dscChange')({ value: e.detail.value });
  }

  return html`
    <dsc-textarea
      id="input-text-id"
      .name="${name}"
      .value="${value}"
      .label="${label}"
      .placeholder="${placeholder}"
      .helperText="${helperText}"
      ?required="${required}"
      ?disabled="${disabled}"
      ?error="${error}"
      ?autocomplete="${autocomplete}"
      .maxlength="${maxlength}"
      @dscFocus="${_handleFocus}"
      @dscBlur="${_handleBlur}"
      @dscChange="${(event) => _handleChange(event)}"
    ></dsc-textarea>
  `
}

Textarea.args = {
  value: '',
  label: 'Label',
  placeholder: 'Type here...',
  helperText: 'Helper text',
  disabled: false,
  maxlength: 100,
  error: false,
}

Textarea.argTypes = {
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
  maxlength: {
      name: 'Max Length',
      description: 'Define a quantidade máxima de caracteres',
      control: { max: 999 },
      table: {
          category: 'Custom Inputs',
          type: { summary: 'number' },
          defaultValue: { summary: '100' }
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

Textarea.parameters = {
  docs: {
      source: {
          code: `<dsc-textarea label="Label" placeholder="Input text"></dsc-textarea>`
      }
  }
}