import { html } from 'lit-html';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
    theme: {
      name: 'Themes',
      description: 'Theme options',
      defaultValue: 'brand-a/theme-1',
      right: true,
      toolbar: {
        icon: 'globe',
        items: [
            { value: 'brand-a/theme-1', title: 'Brand A', right: 'Theme 1' },
            { value: 'brand-a/theme-2', title: 'Brand A', right: 'Theme 2' }
        ],
        showName: true
      }
    },
    mode: {
      name: 'Mode',
      description: 'Mode',
      defaultValue: 'light',
      right: true,
      toolbar: {
        icon: 'globe',
        items: [
            { value: 'light', title: 'Light' },
            { value: 'dark', title: 'Dark' }
        ],
        showName: true
      }
    }
}

export const decorators = [
  (Story, context) => {
    let style = ''

    if (context.args.bgColor) {
      style = `.sb-show-main{ background: #292929 !important;}`
    }

    let splitContext = context.globals.theme.split('/')
    let brand = splitContext[0]
    let theme = splitContext[1]

    if (context.globals.mode == 'dark'){
      style = `.sb-show-main{ background: #292929 !important;}`
    }

   return html`
      <style>${style}</style>
      <div brand=${brand} theme=${theme} mode=${context.globals.mode}>
        <link rel="stylesheet" type="text/css" href="./tokens/globals.css"></link>
        <link rel="stylesheet" type="text/css" href="./tokens/${context.globals.theme}/${context.globals.mode}.css"></link>
        ${Story()}
      </div>
    `
  }
]
