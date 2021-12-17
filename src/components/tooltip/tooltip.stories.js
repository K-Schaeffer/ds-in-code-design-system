import { html } from 'lit';
import './index';
import '../typography';

export default {
    title: 'Components/Tooltip'
}

export const Tooltip = ({ label, placement, bgColor }) => {
    return html`
                <div style="width: 450px; height: 600px; display: flex; justify-content: center;">
                    <dsc-tooltip
                        .label="${label}"
                        .placement="${placement}"
                    >
                        <dsc-typography component="paragraph" size="small">
                            Passe o mouse aqui para ver o tooltip.
                        </dsc-typography>
                    </dsc-tooltip>
                </div>
            `;
}

Tooltip.args = {
    label: 'Tooltip text here...',
    placement: 'top'
}

Tooltip.argTypes = {
    label: {
        name: 'Label',
        description: 'Define a label do tooltip',
        table: {
            category: 'Custom Inputs',
            type: { summary: 'string' },
            defaultValue: { summary: 'Label' }
        }
    },
    placement: {
        name: 'Placement',
        description: 'Posição do tooltip.',
        table: {
            category: 'Custom Inputs',
          type: { summary: 'string' },
          defaultValue: { summary: '' }
        },
        control: 'select',
        options: [
          'bottom-end',
          'bottom-start',
          'bottom',
          'left-end',
          'left-start',
          'left',
          'right-end',
          'right-start',
          'right',
          'top-end',
          'top-start',
          'top'
        ]
    }
}

Tooltip.parameters = {
    docs: {
        source: {
            code: `<dsc-tooltip label="Texto do tooltip">Tooltip text here...</dsc-tooltip>`
        }
    }
}