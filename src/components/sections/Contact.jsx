import React, { useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { INFO } from '../../data/info';
import { Avatar } from '../ui/Avatar';

/* ============================================================
   ICONS
   ============================================================ */
const IconMail = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8l9 6 9-6"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconDoc = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconDownload = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconPhone = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconArrowUpRight = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path d="M7 17L17 7M17 7H8M17 7v9"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

/* ============================================================
   Simple Icons CDN — same source as the marquee tech chips
   Docs: https://simpleicons.org
   ============================================================ */
const BrandIcon = ({ slug, color, size = 16, alt }) => (
    <img
        src={`https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`}
        alt={alt}
        width={size}
        height={size}
        className="brand-icon"
        loading="lazy"
    />
);

/* ============================================================
   CONTACT SECTION
   ============================================================ */
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

                {/* Email pill */}
                <div className="contact-emails">
                    {INFO.emails.map((e) => (
                        <button
                            key={e}
                            className={`email-pill ${copied === e ? 'is-copied' : ''}`}
                            onClick={() => copy(e)}
                        >
                            <IconMail />
                            <span>{copied === e ? t.contact.copied : e}</span>
                            {copied === e ? (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 13l4 4L19 7"
                                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <rect x="9" y="9" width="12" height="12" rx="2"
                                        stroke="currentColor" strokeWidth="2" />
                                    <path d="M5 15V5a2 2 0 012-2h10"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>

                {/* Action chips with brand icons from Simple Icons CDN */}
                <div className="contact-actions">
                    <a
                        href={INFO.cv[lang]}
                        download={INFO.cvFileName[lang]}
                        className="chip chip-cv"
                    >
                        <IconDoc />
                        <span>{t.nav.cv} · {lang.toUpperCase()}</span>
                        <IconDownload />
                    </a>

                    <a href={INFO.phoneHref} className="chip chip-phone">
                        <IconPhone />
                        <span>{INFO.phone}</span>
                    </a>

                    <a
                        href={INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="chip chip-github"
                    >
                        <BrandIcon slug="github" color="181717" size={16} alt="GitHub" />
                        <span>GitHub</span>
                        <IconArrowUpRight />
                    </a>

                    <a
                        href={INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="chip chip-linkedin"
                    >
                        {/* LinkedIn logo officiel — Simple Icons a retiré ce logo en décembre 2024 */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="brand-icon" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                        <IconArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
};