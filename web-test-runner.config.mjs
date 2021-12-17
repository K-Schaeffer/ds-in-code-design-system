import { esbuildPlugin } from "@web/dev-server-esbuild";
import { legacyPlugin } from '@web/dev-server-legacy';

export default {
  /** Test files to run */
  files: 'src/**/*.test.js',

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
        // Inject lit's polyfill-support module into test files, which is required
        // for interfacing with the webcomponents polyfills
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
};
