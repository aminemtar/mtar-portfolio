import React from 'react';
import { useT } from '../../context/LanguageContext';

export const LangToggle = () => {
    const { lang, setLang } = useT();
    return (
        <button
            className="lang-toggle"
            onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
            aria-label="Toggle language"
        >
            <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
            <span className={`lang-option ${lang === 'fr' ? 'active' : ''}`}>FR</span>
            <span
                className="lang-slider"
                style={{ transform: `translateX(${lang === 'en' ? 0 : 100}%)` }}
            />
        </button>
    );
};