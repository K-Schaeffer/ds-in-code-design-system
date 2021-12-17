import { html } from 'lit';
import { expect, fixture } from '@open-wc/testing';
import './index';

describe('Testing Button', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<dsc-button>Label Test</dsc-button>`);
    await expect(element.disabled).to.equal(false);
    await expect(element.loading).to.equal(false);
  })
})
