import React from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

export const Skills = () => {
    const { t } = useT();
    const [ref, visible] = useReveal();
    const colors = ['#7c9cff', '#ff9bb8', '#8fe1b8', '#c8a8ff', '#ffc48f', '#7fdcb0'];

    return (
        <section id="skills" className="section">
            <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
                <span className="section-tag">{t.sections.skillsTag}</span>
                <h2 className="section-title">{t.sections.skillsTitle}</h2>
            </div>
            <div className="skills-grid">
                {t.skillGroups.map((g, i) => (
                    <div
                        key={g.title}
                        className={`skill-card ${visible ? 'in' : ''}`}
                        style={{ transitionDelay: `${i * 100}ms` }}
                    >
                        <div className="skill-card-head">
                            <span className="skill-dot" style={{ background: colors[i] }} />
                            <h3>{g.title}</h3>
                        </div>
                        <div className="skill-pills">
                            {g.items.map((it) => (
                                <span key={it} className="pill" style={{ borderColor: colors[i] + '55' }}>
                                    {it}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};