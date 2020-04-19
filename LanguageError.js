const config = require('./config');

function translate(term) {
    if (config) {
        console.log({"msmsms": process.env});
        try {
        const languages = process.env.JS_LANGUAGE_ERROR_LANGUAGES && JSON.parse(process.env.JS_LANGUAGE_ERROR_LANGUAGES) || config.translations || {};
        }
        catch(err) {
            console.error('Languages in the environment variable was not defined well.');
            throw err;
        }
        const selectedLanguage = process.env.JS_LANGUAGE_ERROR_SELECTED || config.language || 'hebrew';

        const languageTranslations = languages[selectedLanguage] || {};

        let translation = null;
        let translatedText = term;

        do {
            translation = Object.keys(languageTranslations).find(message => translatedText.indexOf(message) > -1);

            translatedText = translatedText.replace(translation, languageTranslations[translation]);
        }
        while (!!translation);
        return translatedText;
    }
    return term;
}

class LanguageError extends Error {
    /**
     * @param {Error} error 
     */
    constructor(error) {
        super();
        this.message = translate(error.message);
        let selectedLanguage = (config.language || 'hebrew');
        selectedLanguage = selectedLanguage[0].toLocaleUpperCase() + selectedLanguage.slice(1);
        this.name = `${selectedLanguage}-${error.name}`;
        this.stack = error.stack;
        Error.captureStackTrace(this, this.constructor);
    }

    toObject() {
        return Object.assign({
            message: this.message,
            name: this.name,
            stack: this.stack
        }, this);
    }
}

module.exports = LanguageError;