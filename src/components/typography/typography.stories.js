import { html } from 'lit'
import './index.js'

export default {
  title: 'Components/Typography'
}

// heading Story
export const Heading = ({
  size,
  content
}) => {

  return html`
    <dsc-typography
      component="heading"
      variant="h1"
      .size="${size}"
    >
      ${content}
    </dsc-typography>
  `
}
Heading.args = {
  content: 'Heading',
  size: 'display'
}
Heading.argTypes = {
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no heading',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  },
  size: {
    name: 'Size',
    description: 'Indica o tamanho do heading que será renderizado',
    table: {
        category: 'Modifiers',
        type: { summary: 'string' },
        defaultValue: { summary: 'display' }
    },
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg', 'xl', 'display']
  }
}
Heading.parameters = {
  docs: {
      source: {
          code: `<dsc-typography variant="h1" component="heading" size="display">[Content]</dsc-typography>`
      }
  }
}


// Paragraph Story
export const Paragraph = ({
  content
}) => {

  return html`
    <dsc-typography component="paragraph">
      ${content}
    </dsc-typography>
  `
}
Paragraph.args = {
  content: 'Paragraph'
}
Paragraph.argTypes = {
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no paragraph',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  },
}
Paragraph.parameters = {
  docs: {
      source: {
          code: `<dsc-typography component="paragraph">[Content]</dsc-typography>`
      }
  }
}

// Caption Story
export const Caption = ({
  content
}) => {

  return html`
    <dsc-typography component="caption">
      ${content}
    </dsc-typography>
  `
}
Caption.args = {
  content: 'Caption'
}
Caption.argTypes = {
  content: {
    name: 'Content',
    description: 'Indica o texto que será exibido no caption',
    table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' }
    }
  }
}
Caption.parameters = {
  docs: {
      source: {
          code: `<dsc-typography component="caption">[Content]</dsc-typography>`
      }
  }
}
