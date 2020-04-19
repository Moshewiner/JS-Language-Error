const LanguageError = require('./LanguageError');

function main() {
    try {
        // x.a = 3;
        const t = null;
        t['gever'] = 4;
        
    }
    catch (err) {
        throw new LanguageError(err);
    }
}

main();