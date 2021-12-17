import { html } from 'lit';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import './index.js'
import './radio-group.js'

export default {
  title: 'Components/Radio'
}

export const Radio = ({
  label,
  checked,
  disabled
}) => {


  function _handleChange(e) {
    action('lftChange')({ value: e.detail.value });
}

  return html`
    <dsc-radio-group
      @dscChange="${(event) => _handleChange(event)}"
    >

      <dsc-radio
        .label="${label}"
        checked
        ?disabled="${disabled}"
      ></dsc-radio>

      <dsc-radio
        .label="${label}"
        ?disabled="${disabled}"
      ></dsc-radio>
    </dsc-radio-group>
  `
}

Radio.args = {
  label: 'Label',
  name: 'radio',
  disabled: false
}

Radio.argTypes = {
  label: {
    name: 'Label',
    description: 'Define a label do radio button',
    table: {
      category: 'Custom Inputs',
      type: { summary: 'string' },
      defaultValue: { summary: '' }
    }
  },
  disabled: {
    name: 'Disabled',
    description: 'Define se o radio está desabilitado',
    table: {
      category: 'Modifiers',
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' }
    }
  },
}

Radio.parameters = {
  docs: {
      source: {
          code: `<dsc-radio label="Label" checked="false"></dsc-radio>`
      }
  }
}