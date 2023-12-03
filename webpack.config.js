const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

// const options = {
//   // overrideConfigFile: './.eslintrc', // Path to custom ESLint configuration file
//   files: ['src/**/*.js'], // Specify files/directories to include for linting
//   emitError: true, // Make build fail on ESLint errors
//   emitWarning: true, // Emit a warning on ESLint errors
//   formatter: 'stylish', // Use a specific output formatter
//   threads: 2, // Number of threads to use for running ESLint (for concurrent linting)
//   // Other options...
// };

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log(`mode is: ${mode}`);

  return {
    mode,
    entry: './src/index.js',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.jpe?g|png$/,
          exclude: /node_modules/,
          use: ['url-loader', 'file-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      // new ESLintWebpackPlugin(options),
    ],
    devServer: {
      open: true,
    },
  };
};
