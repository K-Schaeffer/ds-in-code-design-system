import { html } from 'lit';
import './index.js';

export default {
  title: 'Components/Tag'
}

export const Tag = ({
  label
}) => {

  return html`
    <dsc-tag>
      ${label}
    </dsc-tag>
  `
}

Tag.args = {
  label: "Tag highlight"
}

Tag.argTypes = {
  label: {
      name: 'Label',
      description: 'Define a label da tag',
      table: {
          category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: '' }
      }
  }
}

Tag.parameters = {
  docs: {
      source: {
          code: `<dsc-tag>Tag highlight</dsc-tag>`
      }
  }
}