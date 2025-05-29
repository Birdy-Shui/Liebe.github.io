document.addEventListener('DOMContentLoaded', function() {
    console.log("🟡 Initializing i18n...");
    
    const i18nConfig = {
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    "japanese_painting": "Japanese Painting",
                    "print": "Print",
                    "water_color": "Watercolor",
                    "oil_painting": "Oil Painting",
                    "something_else": "Something Else",
                    "about": "About"
                }
            },
            ja: {
                translation: {
                    "japanese_painting": "日本画",
                    "print": "版画",
                    "water_color": "水彩画",
                    "oil_painting": "油絵",
                    "something_else": "その他",
                    "about": "About"
                }
            },
            zh: {
                translation: {
                    "japanese_painting": "日本画",
                    "print": "版画",
                    "water_color": "水彩",
                    "oil_painting": "油画",
                    "something_else": "其他",
                    "about": "About"
                }
            }
        }
    };

    i18next.init(i18nConfig)
        .then(() => {
            console.log('✅ i18n ready! Language:', i18next.language);
            applyLanguageSettings(); 
        })
        .catch(console.error);

    function applyLanguageSettings() {
        document.documentElement.lang = i18next.language;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = i18next.t(key);
        });
        
        document.body.classList.remove('lang-en', 'lang-ja', 'lang-zh');
        document.body.classList.add(`lang-${i18next.language}`);
    }

    window.changeLang = function(lang) {
        i18next.changeLanguage(lang)
            .then(() => {
                console.log("🌐 Language switched to:", lang);
                applyLanguageSettings();
            })
            .catch(console.error);
    };
});
