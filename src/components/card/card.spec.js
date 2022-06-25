import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';
import './index';

describe('Card', () => {
  it('renders default', async() => {
    const element = await fixture(html`<dsc-card></dsc-card>`)

    await expect(element.shadowRoot.querySelector('.dscCard')[0]).is.not.null
  })

  it('calls click handler', async () => {
    const element = await fixture(html`<dsc-card></dsc-card>`)
    const handleClick = stub(element, '_handleClick')

    element.requestUpdate()
    await element.updateComplete

    element.shadowRoot.querySelector('.dscCard').click()

    expect(handleClick).to.have.been.called
  })

  it('emits dsc-click event', async () => {
    const element = await fixture(html`<dsc-card></dsc-card>`)
    const listener = oneEvent(element, 'dsc-click')

    element.shadowRoot.querySelector('.dscCard').click()

    expect(await listener).to.not.be.empty
  })
})
