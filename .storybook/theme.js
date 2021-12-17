import { create } from '@storybook/theming';
import logo from './dsc-logo.svg'

export default create({
  base: 'light',


  appBg: '#000000',
  appBorderRadius: '16px',
  textColor: '#292929',
  colorSecondary: '#292929',
  barSelectedColor: '#292929',
  colorPrimary: '#F5F5F5',
  brandTitle: 'Lift DS',
  brandUrl: '/',
  brandImage: logo

});
