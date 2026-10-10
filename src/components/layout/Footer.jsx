import React from 'react';
import { useT } from '../../context/LanguageContext';
import { INFO } from '../../data/info';

export const Footer = () => {
    const { t, lang } = useT();
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <span className="brand-mark">M</span>
                    {INFO.firstName} {INFO.lastName}
                </div>
                <div className="footer-meta">
                    © {new Date().getFullYear()} · {t.contact.footerMade} {INFO.location[lang]}
                </div>
                <a href="#" className="footer-top">{t.contact.backTop}</a>
            </div>
        </footer>
    );
};