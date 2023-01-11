let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js').setPublicPath('dist')
    .postCss('resoursec/css/app.css', 'public/css'[
            require('tailwindcss')
        ])
