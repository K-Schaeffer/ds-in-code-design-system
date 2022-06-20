import { html } from 'lit'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/client-api'
import './index.js'

export default {
  title: 'Components/Checkbox'
}

export const Checkbox = ({
  label,
  checked,
  disabled
}) => {

  const [, updateArgs] = useArgs()

  function _handleChange(e) {
    updateArgs({ checked: e.detail.checked })
    action('dsc-change') ({ checked: e.detail.checked })
}

  return html`
    <dsc-checkbox
      .label="${label}"
      ?checked="${checked}"
      ?disabled="${disabled}"
      @dsc-change="${(event) => _handleChange(event)}"
    ></dsc-checkbox>

  `
}

Checkbox.args = {
  label: 'Label',
  checked: false,
  disabled: false
}

Checkbox.argTypes = {
  label: {
    name: 'Label',
    description: 'Define a label do checkbox',
    table: {
      category: 'Custom Inputs',
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  checked: {
    name: 'Checked',
    description: 'Define se o checkbox está checado',
    table: {
      category: 'Modifiers',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
  disabled: {
    name: 'Disabled',
    description: 'Define se o checkbox está desabilitado',
    table: {
      category: 'Modifiers',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
}

Checkbox.parameters = {
  docs: {
      source: {
          code: `<dsc-checkbox label="Label" checked="false"></dsc-checkbox>`
      }
  }
}
