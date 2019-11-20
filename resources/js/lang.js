

import lang from 'lang.js';

// Translations module (properties file)
import translations from './translations';

const Lang = new lang({
    messages: translations,
    locale: 'en',
    fallback: 'en'
});

export default Lang;