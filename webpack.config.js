const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    mode: 'production',
    entry: {
        'icons/fadIcons': './icons/fadIcons.js',
        'icons/falIcons': './icons/falIcons.js',
        'icons/fasIcons': './icons/fasIcons.js',
        'icons/farIcons': './icons/farIcons.js'
    },
    output: {
        filename: '[name].js'
    },
    optimization: {
        minimize: true
    },
    // plugins: [
    //     new BundleAnalyzerPlugin()
    // ]
}