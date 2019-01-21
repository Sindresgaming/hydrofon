let mix = require('laravel-mix');

require('laravel-mix-purgecss');
require('laravel-mix-tailwind');
require('laravel-mix-vue-svgicon');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .combine([
        'node_modules/vue/dist/vue.js',
        'node_modules/interactjs/dist/interact.min.js',
        'node_modules/segel/dist/index.js'
    ], 'public/js/vendor.js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin.scss', 'public/css')
    .svgicon('./resources/images/svg')
    .tailwind()
    .purgeCss()
    .version();