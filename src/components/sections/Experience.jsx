import React from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

export const Experience = () => {
  const { t } = useT();
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section">
      <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
        <span className="section-tag">{t.sections.expTag}</span>
        <h2 className="section-title">{t.sections.expTitle}</h2>
      </div>
      <div className="timeline">
        {t.experience.map((it, i) => (
          <div
            key={it.company}
            className={`tl-item ${visible ? 'in' : ''}`}
            style={{ transitionDelay: `${i * 130}ms` }}
          >
            <div className="tl-node">
              <span className="tl-dot" />
              {i !== t.experience.length - 1 && <span className="tl-line" />}
            </div>
            <div className="tl-card">
              <div className="tl-head">
                <div>
                  <h3 className="tl-role">{it.role}</h3>
                  <div className="tl-company">{it.company}</div>
                </div>
                <span className="tl-period">{it.period}</span>
              </div>
              <ul className="tl-points">
                {it.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};