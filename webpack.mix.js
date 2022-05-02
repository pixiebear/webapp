const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.css('resources/css/bootstrap.css', 'public/css')
    .css('resources/css/bootstrap-responsive.css', 'public/css');


    mix.webpackConfig({ stats: { hash: true, version: true, timings: true, children: true,  errors: true,  errorDetails: true, warnings: true, chunks: true, modules: false, reasons: true, source: true, publicPath: true, } });
