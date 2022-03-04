import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import './index';

describe('Testing Tag', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<dsc-tag>Tag Label</dsc-tag>`);
    await expect(element.shadowRoot.querySelector('.tag')).is.not.null;
  });
});
