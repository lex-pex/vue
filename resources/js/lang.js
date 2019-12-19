

import lang from 'lang.js';

// Json Dictionary Module (properties file)
import props from './properties';

const Lang = new lang({

    messages: props,

    // not necessary parameters

    locale: 'en',  // the current localization
    fallback: 'en' // the default for fail cases

});

export default Lang;

/*
 *
 * On changes localization/property files of Laravel there is
 * a need to rewrite properties file use the console command
 *
 *  __ " php artisan lang:js resources/js/properties.js --no-lib " __
 *
 */

