let mix = require('laravel-mix');

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

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(['bootstrap', 'jquery', 'vue', 'popper.js', 'lodash', 'moment', 'v-animate-css', 'vuex','element-ui'])

    .sass('resources/assets/sass/app.scss', 'public/css').options({
    processCssUrls: false

});

if (mix.inProduction()) {
    mix.version();
}


mix.browserSync("127.0.0.1:8000");
