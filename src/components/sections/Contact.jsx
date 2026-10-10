import React, { useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { INFO } from '../../data/info';
import { Avatar } from '../ui/Avatar';

export const Contact = () => {
    const { t, lang } = useT();
    const [ref, visible] = useReveal();
    const [copied, setCopied] = useState('');

    const copy = (email) => {
        navigator.clipboard.writeText(email);
        setCopied(email);
        setTimeout(() => setCopied(''), 2000);
    };

    return (
        <section id="contact" className="contact">
            <div ref={ref} className={`contact-inner ${visible ? 'in' : ''}`}>
                <div className="contact-halo" />
                <div className="contact-avatar">
                    <Avatar size={140} />
                </div>
                <span className="section-tag">{t.sections.contactTag}</span>
                <h2 className="contact-title">{t.sections.contactTitle}</h2>
                <p className="contact-sub">{t.sections.contactSub}</p>

                <div className="contact-emails">
                    {INFO.emails.map((e) => (
                        <button
                            key={e}
                            className={`email-pill ${copied === e ? 'is-copied' : ''}`}
                            onClick={() => copy(e)}
                        >
                            <span>{copied === e ? t.contact.copied : e}</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
                                <path d="M5 15V5a2 2 0 012-2h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </button>
                    ))}
                </div>

                <div className="contact-actions">
                    <a href={INFO.cv[lang]} download={INFO.cvFileName[lang]} className="chip chip-cv">
                        📄 {t.nav.cv} · {lang.toUpperCase()}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href={INFO.phoneHref} className="chip">📞 {INFO.phone}</a>
                    <a href={INFO.github} target="_blank" rel="noreferrer" className="chip">
                        GitHub
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="chip">
                        LinkedIn
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};