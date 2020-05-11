const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        server: './src/Server.ts',
        migrations: './src/Migrations/Migrations.ts',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
        dns: 'empty',
        child_process: 'empty',
        fs: 'empty',
        crypto: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
};
