import { html } from 'lit';
import './index.js'

export default {
  title: 'Components/Link'
}

export const Link = ({ label, href, target, disabled }) => {

  return html`
      <dsc-link
        .href="${href}"
        .target="${target}"
        ?disabled="${disabled}"
      >
          ${label}
      </dsc-link>
  `
}

Link.args = {
    label: 'Default',
    href: 'javascript:void(0);',
    target: '',
    disabled: false
}

Link.argTypes = {
    label: {
        name: 'Label',
        description: 'Define a label do link',
        table: {
            category: 'Custom Inputs',
            type: { summary: 'string' },
            defaultValue: { summary: '' }
        }
    },
    href: {
        name: 'Url',
        description: 'Propriedade que especifica a url que será acessada',
        table: {
            disable:true,
            type: { summary: 'string' },
            defaultValue: { summary: '' },
            category: 'Custom Inputs'
        }
    },
    target: {
        name: 'Target',
        description: 'Propriedade que especifica como abrirá a url vinculada',
        table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: '_self' },
        },
        options: ['New Tab', 'Same Tab'],
        mapping: { 'New Tab': '_blank', 'Same Tab': '_self' },
        control: {
          type: 'select',
        },
    },
    disabled: {
        name: 'Disabled',
        description: 'Define se o link está desabilitado',
        table: {
            category: 'Modifiers',
            type: { summary: 'boolean' },
            defaultValue: { summary: 'false' }
        }
    }
}

Link.parameters = {
    docs: {
        source: {
            code: `<dsc-link>Default</dsc-link>`
        }
    }
}
