import { html } from 'lit'
import { expect, fixture } from '@open-wc/testing'
import './index';

describe('Tag', () => {
  it('renders default', async() => {
    const element = await fixture(html`<dsc-tag>Tag Label</dsc-tag>`)

    await expect(element.shadowRoot.querySelector('.dscTag')).is.not.null
  })
})
