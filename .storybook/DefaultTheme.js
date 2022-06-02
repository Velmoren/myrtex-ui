import { create } from '@storybook/theming';

export default create({
  base: 'dark',
  brandTitle: 'MYRTEX',
  brandUrl: 'https://myrtex.com',
  brandImage: 'https://i.postimg.cc/mk3PBLcP/logo.png',
  brandTarget: '_self',

  // colorPrimary: 'hotpink',
  // colorSecondary: 'deepskyblue',

  // UI
  appBg: '#02163B',
  appContentBg: '#02163B',
  appBorderColor: '#007aff',
  appBorderRadius: 4,

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: 'monospace',
  //
  // // Text colors
  // textColor: 'black',
  // textInverseColor: 'rgba(255,255,255,0.9)',
  //
  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#EB2448',
  barBg: '#02163B',
});
