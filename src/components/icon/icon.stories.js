import { html } from 'lit'
import options from 'ds-in-code-assets/dist/assets/icons/exported-assets-list'
import * as icons from 'ds-in-code-assets/dist/assets/icons'
import './index'

export default {
  title: 'Components/Icon'
}

export const Icon = ({ size, icon }) => {
  return html`
    <dsc-icon
      .size="${size}"
      .icon="${icons[icon]}"
    >
    </dsc-icon>
  `
}

Icon.args = {
  size: 'md',
  icon: 'Shapes'
}

Icon.argTypes = {
  size: {
      name: 'Size',
      description: 'Define o tamanho do icon',
      table: {
          category: 'Modifiers',
          type: { summary: 'string' },
          defaultValue: { summary: 'md' }
      },
      control: 'select',
      options: ['sm', 'md', 'lg']
  },
  icon: {
      name: 'Icon',
      description: 'Indica qual o ícone que será usado',
      table: {
          category: 'Modifiers',
          type: { summary: 'object javascript' },
          defaultValue: { summary: '' }
      },
      control: 'select',
      options: options
  }
}

Icon.parameters = {
  docs: {
      source: {
          code: `<dsc-icon size="md" icon="Shape"></dsc-icon>`
      }
  }
}
