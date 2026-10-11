import React from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

export const Education = () => {
    const { t } = useT();
    const [ref, visible] = useReveal();
    const { esprit, lycee, certs } = t.education;

    return (
        <section id="education" className="section">
            <div ref={ref} className={`edu-wrap ${visible ? 'in' : ''}`}>
                <div className="edu-card">
                    <span className="section-tag">{t.sections.eduTag}</span>
                    <h2 className="section-title">{t.sections.eduTitle}</h2>
                    <div className="edu-entry" style={{ marginBottom: '1rem' }}>
                        <div className="edu-badge">
                            <img src={`${import.meta.env.BASE_URL}esprit.jpeg`} alt="ESPRIT" />
                        </div>
                        <div>
                            <h3 className="edu-school">{esprit.school}</h3>
                            <p className="edu-program">{esprit.program}</p>
                            <p className="edu-note">{esprit.note}</p>
                        </div>
                    </div>
                    <div className="edu-entry">
                        <div className="edu-badge">🏫</div>
                        <div>
                            <h3 className="edu-school">{lycee.school}</h3>
                            <p className="edu-program">{lycee.program}</p>
                            <p className="edu-note">{lycee.note}</p>
                        </div>
                    </div>
                </div>
                <div className="cert-card">
                    <span className="section-tag">{t.sections.certTag}</span>
                    <div className="cert-list">
                        {certs.map((c, i) => (
                            <div key={c.name} className="cert-row" style={{ transitionDelay: `${i * 100}ms` }}>
                                <span className="cert-check">✓</span>
                                <div>
                                    <div className="cert-name">{c.name}</div>
                                    <div className="cert-by">{c.by}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};