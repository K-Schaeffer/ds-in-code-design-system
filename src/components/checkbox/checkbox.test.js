import { html } from 'lit';
import { expect, fixture, oneEvent } from '@open-wc/testing';
import './index';

describe('Testing Checkbox', () => {
  it('Test default props', async() => {
    const element = await fixture(html`<dsc-checkbox></dsc-checkbox>`);
    await expect(element.id).to.equal('dsc-checkbox');
    await expect(element.name).to.equal('dsc-checkbox');
    await expect(element.label).to.equal('');
    await expect(element.checked).to.equal(false);
    await expect(element.required).to.equal(false);
    await expect(element.disabled).to.equal(false);
  });
});
