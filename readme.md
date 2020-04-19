# Javascript Language Error Package
✔ For bored developers, from bored developer.

# How to use it

### config.js
Contains the defaults configuration like: 
```javascript
module.exports = {
    language: 'hebrew', // The selected language
    translations: {
        hebrew: { // The key could be anything, add your language here 😊
            // The translation is <from>: <to>, you should use real js errors for your key.
            'null': 'ערך ריק',
        },
        french: {},
        klingone: {}
    },
};
```
### index.js / your code
You should use the error as:

```javascript 
    try {
        // This section will throw an error (I hope not)        
    }
    catch (err) {
        // The usage of HebrewError is like:
        throw new HebrewError(err);
    }

```

# The exception will look like:
```javascript
HebrewError: אינני יכול להחיל את סגולה 'gever' מ ערך ריק
```

# Add Your Language

set your environment 'JS_LANGUAGE_ERROR_LANGUAGES' with JSON.stringify(...) of your language translation object.
```javascript
JSON.stringify({
    hebrew: {
        'of': 'מ',
        'null': 'ערך ריק',
        'property': 'סגולה',
        'defined': 'הוצהר',
        'is not': 'אינו',
        'unexpected token': 'אנלא ציפיתי לאסימון',
        'cannot read': 'לא ניתן לקרא את',
        'Cannot set': 'אינני יכול להחיל את',
        'maximum': 'תקרה עליונה',
        'exceeded': 'הוחרגה',
        'object': 'אובייקט',
        'at': 'ב',
        'error': 'שגיאה',
        'exception': 'חריגה',
    }
})
```
### For example:
```batch
set JS_LANGUAGE_ERROR_LANGUAGES='{"hebrew":{"of":"מ","null":"ערך ריק","property":"סגולה","defined":"הוצהר","is not":"אינו","unexpected token":"אנלא ציפיתי לאסימון","cannot read":"לא ניתן לקרא את","Cannot set":"אינני יכול להחיל את","maximum":"תקרה עליונה","exceeded":"הוחרגה","object":"אובייקט","at":"ב","error":"שגיאה","exception":"חריגה"}}'
```

# Select language
set your environment 'JS_LANGUAGE_ERROR_SELECTED' with the name of your language (as specified as key in the languages object).### For example:
```batch
set JS_LANGUAGE_ERROR_SELECTED='hebrew'
```
