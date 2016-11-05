const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

module.exports = {
    devtool: isProd ? 'source-map' : 'inline-source-map',
    context: path.join(__dirname, './src'),
    entry: {
        'index.ios': ['../index.ios.js'],
        'index.android': ['../index.android.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        // path: path.join(__dirname, './build'),
        // filename: '[name].[hash].js',
        // publicPath: '/',
        // sourceMapFilename: '[name].[hash].js.map',
        // chunkFilename: '[id].chunk.js',
    },
    module: {
        rules: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: "source-map-loader" },
            // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
            { test: /\.tsx?$/, exclude: /(\.test.ts$|node_modules)/ , loader: 'react-hot!ts-loader?jsx=true' },
            // { test: /\.tsx?$/, exclude: /(\.test.ts$|node_modules)/ , loaders: ['react-hot', 'ts-loader?jsx=true'] },
            {test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, loader: 'url?limit=50000'}
        ]
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [ ".ts", ".tsx", ".js"],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: './src'
        // hot: true
    }
};