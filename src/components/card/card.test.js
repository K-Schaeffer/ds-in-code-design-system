import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';
import './index';

describe('Testing Card', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<dsc-card></dsc-card>`);
    await expect(element.shadowRoot.querySelector('.card')[0]).is.not.null;
  });

  it('Test if card click has been called', async () => {
    const element = await fixture(html`<dsc-card></dsc-card>`);
    const handleClick = stub(element, '_handleClick');
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector('.card').click();
    expect(handleClick).to.have.been.called;
  });

  it('Test if dscClick has been called', async () => {
    const element = await fixture(html`<dsc-card></dsc-card>`);
    const listener = oneEvent(element, 'dscClick');
    element.shadowRoot.querySelector('.card').click();
    expect(await listener).to.not.be.empty;
  });
})
