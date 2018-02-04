'use strict';

const webpack = require('webpack');
const SvgStore = require('webpack-svgstore-plugin');

const plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new SvgStore({
        svg: {
            xmlns: 'http://www.w3.org/2000/svg',
            style: 'position:absolute; width: 0;height:0'
        },
        svgoOptions: {
            plugins: [
                { sortAttrs: true },
                { removeTitle: true },
                { removeDesc: true },
                { removeViewBox: false },
                { removeDoctype: true },
                { removeMetadata: true },
                { removeComments: true },
                { removeEmptyText: true },
                { removeEmptyAttrs: true },
                { removeHiddenElems: true },
                { removeStyleElement: true },
                { removeEditorsNSData: true },
                { removeEmptyContainers: true },
                { removeUselessDefs: true },
                { removeXMLProcInst: true },
                { removeDimensions: true },
                { cleanupNumericValues: {
                    floatPrecision: 2
                }},
                { cleanupIDs: {
                    minify: false
                }},
                { js2svg: {
                    pretty: true
                }},
                { convertColors: {
                    names2hex: true,
                    rgb2hex: true
                }},
                { removeAttrs: {
                    attrs: ["id", "class", "data-name", "stroke", "fill", "fill-rule"]
                } },
                { removeStyleElement: true },
                { removeScriptElement: true },
                { removeUselessStrokeAndFill: true }
            ]
        },
        prefix: ''
    })
];

module.exports.config = plugins;
