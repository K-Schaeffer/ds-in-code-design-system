import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import { stub } from 'sinon';
import './index';

describe('Testing Button', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<dsc-button>Label Test</dsc-button>`);
    await expect(element.disabled).to.equal(false);
    await expect(element.loading).to.equal(false);
  });

  it('Test Loading', async() => {
    const element = await fixture(html`<dsc-button loading>Label Test</dsc-button>`);
    await expect(element.loading).to.equal(true);
    await expect(element.shadowRoot.querySelector('button').classList.contains('button--loading')).to.equal(true);
  }),

  it('Test if button click has been called', async () => {
    const element = await fixture(html`<dsc-button>Label Test</dsc-button>`);
    const handleClick = stub(element, '_handleClick');
    element.requestUpdate();
    await element.updateComplete;
    element.shadowRoot.querySelector('button').click();
    expect(handleClick).to.have.been.called;
  });

  it('Test if dscClick has been called', async () => {
    const element = await fixture(html`<dsc-button>Label Test</dsc-button>`);
    const listener = oneEvent(element, 'dscClick');
    element.shadowRoot.querySelector('button').click();
    expect(await listener).to.not.be.empty;
  });
})
