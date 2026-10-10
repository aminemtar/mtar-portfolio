import React, { useEffect, useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { INFO } from '../../data/info';
import { Avatar } from '../ui/Avatar';

export const Hero = () => {
    const { t, lang } = useT();
    const [typed, setTyped] = useState('');
    const [idx, setIdx] = useState(0);
    const [del, setDel] = useState(false);

    useEffect(() => {
        setTyped('');
        setIdx(0);
        setDel(false);
    }, [lang]);

    useEffect(() => {
        const current = t.hero.roles[idx];
        if (!current) return;
        const speed = del ? 35 : 80;
        const timer = setTimeout(() => {
            if (!del) {
                setTyped(current.slice(0, typed.length + 1));
                if (typed.length === current.length) setTimeout(() => setDel(true), 1600);
            } else {
                setTyped(current.slice(0, typed.length - 1));
                if (typed.length === 0) {
                    setDel(false);
                    setIdx((i) => (i + 1) % t.hero.roles.length);
                }
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [typed, del, idx, t, lang]);

    const s = t.hero.stack;

    return (
        <section className="hero">
            <div className="hero-blobs">
                <div className="blob blob-peach" />
                <div className="blob blob-mint" />
                <div className="blob blob-lavender" />
                <div className="blob blob-sky" />
            </div>

            <div className="hero-inner">
                <div className="hero-top">
                    <Avatar size={110} />
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        {t.hero.badge}
                    </div>
                </div>

                <h1 className="hero-title">
                    <span className="hero-line">{t.hero.hi}</span>
                    <span className="hero-line hero-name">
                        {INFO.firstName} <em>{INFO.lastName}</em>
                    </span>
                </h1>

                <div className="hero-role">
                    <span className="role-static">{t.hero.rolePrefix}</span>
                    <span className="role-typed">
                        {typed}
                        <span className="role-cursor" />
                    </span>
                </div>

                <p className="hero-desc">{t.hero.desc}</p>

                <div className="hero-actions">
                    <a href="#work" className="btn btn-primary">
                        <span>{t.hero.ctaPrimary}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href={INFO.cv[lang]} download={INFO.cvFileName[lang]} className="btn btn-cv">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{t.nav.cv} · {lang.toUpperCase()}</span>
                    </a>
                    <a href="#contact" className="btn btn-soft">
                        <span>{t.hero.ctaSoft}</span>
                    </a>
                </div>

                <div className="hero-socials">
                    <a href={INFO.github} target="_blank" rel="noreferrer" className="social-chip">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>GitHub</span>
                    </a>
                    <a href={INFO.linkedin} target="_blank" rel="noreferrer" className="social-chip">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href={`mailto:${INFO.emails[0]}`} className="social-chip">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <span>Email</span>
                    </a>
                </div>
            </div>

            <div className="hero-card-stack">
                <div className="stack-card stack-1" />
                <div className="stack-card stack-2" />
                <div className="stack-card stack-3">
                    <div className="stack-header">
                        <span className="stack-dot dot-red" />
                        <span className="stack-dot dot-yellow" />
                        <span className="stack-dot dot-green" />
                        <span className="stack-file">mtar.profile</span>
                    </div>
                    <div className="stack-body">
                        <div className="stack-row"><span className="stack-key">{s.role}</span><span className="stack-val">{s.roleVal}</span></div>
                        <div className="stack-row"><span className="stack-key">{s.focus}</span><span className="stack-val">{s.focusVal}</span></div>
                        <div className="stack-row"><span className="stack-key">{s.school}</span><span className="stack-val">{s.schoolVal}</span></div>
                        <div className="stack-row"><span className="stack-key">{s.grade}</span><span className="stack-val stack-green">{s.gradeVal}</span></div>
                        <div className="stack-row"><span className="stack-key">{s.shipped}</span><span className="stack-val">{s.shippedVal}</span></div>
                        <div className="stack-row"><span className="stack-key">{s.stack}</span><span className="stack-val">{s.stackVal}</span></div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>{t.hero.scroll}</span>
                <div className="scroll-bar" />
            </div>
        </section>
    );
};