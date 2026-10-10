import React, { useEffect, useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { LangToggle } from '../ui/LangToggle';
import { CVButton } from '../ui/CVButton';

export const Navbar = () => {
    const { t } = useT();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', h);
        return () => window.removeEventListener('scroll', h);
    }, []);

    const links = [
        { label: t.nav.work, href: '#work' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.education, href: '#education' },
        { label: t.nav.contact, href: '#contact' },
    ];

    return (
        <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
            <a href="#" className="brand">
                <span className="brand-mark">M</span>
                <span className="brand-text">
                    Mtar<span className="brand-dot">.</span>
                </span>
            </a>
            <div className="nav-menu">
                {links.map((l) => (
                    <a key={l.href} href={l.href} className="nav-item">{l.label}</a>
                ))}
            </div>
            <div className="nav-right">
                <LangToggle />
                <CVButton />
                <a href="#contact" className="nav-hire">
                    <span>{t.nav.hire}</span>
                    <span className="hire-dot" />
                </a>
            </div>
        </nav>
    );
};