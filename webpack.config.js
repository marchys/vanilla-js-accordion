const HtmlWebPackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  context: paths.appSrc,
  entry: 'index.js',
  output: {
    path: paths.appDist,
    publicPath: paths.publicPath,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [].concat(paths.appSrc),
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', paths.appSrc],
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: paths.appHtml,
    }),
  ],
};
