const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
            "sass-to-string",
            {
            loader: "sass-loader",
            options: {
                sassOptions: {
                    outputStyle: "compressed",
                },
            }
            }
          ],
      },
      {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  ['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}],
                  ["@babel/plugin-proposal-class-properties"],
                ]
            }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx','.ts','.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'components/[name].js',
    libraryTarget: 'umd',
    library: "ds-in-code-design-system"
  }
}