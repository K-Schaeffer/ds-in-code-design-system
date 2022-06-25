import { esbuildPlugin } from "@web/dev-server-esbuild";
import { legacyPlugin } from '@web/dev-server-legacy';

export default {
  files: 'src/**/*.spec.js',
  plugins: [
    esbuildPlugin({
      loaders: {
        '.scss': 'text',
        '.svg': 'text',
        '.png': 'dataurl'
      }
    }),
    legacyPlugin({
      polyfills: {
        webcomponents: true,
        custom: [
          {
            name: 'lit-polyfill-support',
            path: 'node_modules/lit/polyfill-support.js',
            test: "!('attachShadow' in Element.prototype)",
            module: false,
          },
        ],
      },
    }),
  ]
}
