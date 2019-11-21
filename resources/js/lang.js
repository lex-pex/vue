

import lang from 'lang.js';

// Json Dictionary Module (properties file)
import props from './properties';

const Lang = new lang({
    messages: props,
    locale: 'en',
    fallback: 'en'
});

export default Lang;

/*
 * On changes localization/property files of Laravel there is
 * a need to rewrite properties file use the console command
 * ___ " php artisan lang:js resources/js/properties.js --no-lib " ___
 */

