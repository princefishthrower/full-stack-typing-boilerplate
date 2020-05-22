const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    filename: path.join(__dirname, 'dist', 'public', 'index.html'),
});

const serverConfig = {
    entry: {
        server: path.join(__dirname, 'src', 'Server.ts'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [nodeExternals()],
    node: {
        dns: 'empty',
        child_process: 'empty',
        fs: 'empty',
        crypto: 'empty',
        net: 'empty',
        tls: 'empty',
        __dirname: false,
    },
}

const reactAppConfig = {
    entry: {
        index: path.join(__dirname, 'src', 'index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', 'public')
    },
    plugins: [
        htmlPlugin
    ]
}

module.exports = [
    serverConfig, reactAppConfig
];