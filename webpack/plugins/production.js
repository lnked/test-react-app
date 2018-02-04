'use strict';

const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('webpack-plugin-chunk-manifest');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const cssPath = path.join(__dirname, 'app')

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_output_path,
        fileName: "webpack-manifest.json"
    }),
    new WebpackChunkHash(),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (m) => {
            return m.context && m.context.includes("node_modules");
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        minChunks: (m, c) => {
            return m.resource && (isCommonLib(resource) || c >= 3);
        }
    }),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractCssChunks({
        filename: define.rs_production ? 'css/[name].[contenthash:5].css' : '[name].css',
        allChunks: true,
    }),
    new PurgecssPlugin({
        paths: glob.sync(`${cssPath}/*`)
    }),
    new ScriptExtHtmlWebpackPlugin({
        sync: /vendor/,
        inline: 'manifest',
        preload: ['vendor', 'app'],
        defaultAttribute: 'async'
    })
];

module.exports.config = plugins;
