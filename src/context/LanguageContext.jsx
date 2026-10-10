import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations.jsx';

const LangCtx = createContext({
    lang: 'en',
    setLang: () => { },
    t: translations.en,
});

export const useT = () => useContext(LangCtx);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        const saved = typeof window !== 'undefined' && localStorage.getItem('portfolio-lang');
        if (saved) return saved;
        const nav = typeof navigator !== 'undefined' ? navigator.language : 'en';
        return nav.startsWith('fr') ? 'fr' : 'en';
    });

    useEffect(() => {
        localStorage.setItem('portfolio-lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const value = { lang, setLang, t: translations[lang] };

    return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
};