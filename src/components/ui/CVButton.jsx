import React, { useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import { INFO } from '../../data/info';

export const CVButton = () => {
    const { t, lang } = useT();
    const [open, setOpen] = useState(false);
    const ref = useClickOutside(() => setOpen(false));

    // Sélection dynamique selon la langue active
    const cvUrl = INFO.cv[lang];
    const cvName = INFO.cvFileName[lang];

    const handleView = () => {
        // Le hash `#lang=xx` force le navigateur à recharger le PDF
        // (sinon Chrome/Safari réutilisent le cache du dernier PDF ouvert)
        const viewUrl = `${cvUrl}#lang=${lang}`;
        window.open(viewUrl, '_blank', 'noopener,noreferrer');
        setOpen(false);
    };

    return (
        <div className="cv-wrap" ref={ref}>
            <button
                className={`cv-trigger ${open ? 'is-open' : ''}`}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-label="CV options"
            >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="cv-label">{t.nav.cv}</span>
                <span className="cv-lang-badge">{lang.toUpperCase()}</span>
                <svg className="cv-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {open && (
                <div className="cv-menu">
                    <div className="cv-menu-head">
                        <span className="cv-menu-title">{t.cv.title}</span>
                        <span className="cv-menu-lang">{lang === 'en' ? 'English' : 'Français'}</span>
                    </div>

                    {/* Bouton "View online" — utilise cvUrl dynamique */}
                    <button className="cv-option" onClick={handleView}>
                        <span className="cv-option-icon cv-icon-view">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </span>
                        <span className="cv-option-text">
                            <span className="cv-option-title">{t.cv.view}</span>
                            <span className="cv-option-desc">
                                {t.cv.viewDesc} · {lang.toUpperCase()}
                            </span>
                        </span>
                    </button>

                    {/* Bouton "Download" — utilise cvUrl + cvName dynamiques */}
                    <a
                        className="cv-option"
                        href={cvUrl}
                        download={cvName}
                        onClick={() => setOpen(false)}
                    >
                        <span className="cv-option-icon cv-icon-dl">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="cv-option-text">
                            <span className="cv-option-title">{t.cv.download}</span>
                            <span className="cv-option-desc">
                                {t.cv.downloadDesc} · {lang.toUpperCase()}
                            </span>
                        </span>
                    </a>
                </div>
            )}
        </div>
    );
};