import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import './index.js'

export default {
  title: 'Components/Switch'
}

export const Switch = ({
  label,
  checked,
  disabled
}) => {

  const [, updateArgs] = useArgs();

  function _handleChange(e) {
    updateArgs({ checked: e.detail.checked });
    action('dsc-change')({ checked: e.detail.checked });
}

  return html`
    <dsc-switch
      .label="${label}"
      ?checked="${checked}"
      ?disabled="${disabled}"
      @dsc-change="${(event) => _handleChange(event)}"
    ></dsc-switch>
  `
}

Switch.args = {
  label: 'Label',
  checked: false,
  disabled: false
}

Switch.argTypes = {
  label: {
    name: 'Label',
    description: 'Define a label do switch',
    table: {
      category: 'Custom Inputs',
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  checked: {
    name: 'Checked',
    description: 'Define se o switch está checado',
    table: {
      category: 'Modifiers',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  disabled: {
    name: 'Disabled',
    description: 'Define se o switch está desabilitado',
    table: {
      category: 'Modifiers',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
}

Switch.parameters = {
  docs: {
      source: {
          code: `<dsc-switch label="Label" checked="false"></dsc-switch>`
      }
  }
}
