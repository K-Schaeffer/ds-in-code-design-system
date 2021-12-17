const webpackBase = require('../webpack.dev');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/web-components",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    const webpackConfig = webpackBase();
    config.module.rules.push(...webpackConfig.module.rules);
    config.plugins.push(
      new CopyPlugin({
        patterns: [
            {
              from: "node_modules/@meiuca/dsc-design-tokens/dist/css/globals.css",
              to: "tokens/globals.css"
            },
            {
              from: `**/**/*.css`,
              context: `node_modules/@meiuca/dsc-design-tokens/dist/css`,
              to: "tokens/[path]/[name][ext]"
            }
        ]
      })
    );
    return config
  }
};