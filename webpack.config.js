const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  devServer: {
    contentBase: Path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    openPage: 'index.html',
    port: 9002,
  },
  mode:
    'development',
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  entry: {
    'standalone-mn': './index.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              cacheDirectory: true,
              configFileName: 'tsconfig.json',
              useBabel: true,
              babelOptions: {
                babelrc: false,
                presets: ['@babel/preset-env'],
              },
              babelCore: '@babel/core',
            },
          },
        ],
        exclude: [/\.spec\.ts$/, /\.tmp\.ts$/],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/syntax-dynamic-import',
              '@babel/plugin-proposal-class-properties',
              ['@babel/plugin-proposal-decorators', {legacy: true}],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|otf|ttf|eot|mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/static/',
            },
          },
        ],
      },
      {
        test: /\.html?$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      template: './index.html',
      filename: 'index.html',
      chunks: ['standalone-mn'],
    }),
  ],
};
