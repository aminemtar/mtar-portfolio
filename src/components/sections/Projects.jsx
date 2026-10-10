import React, { useRef, useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';

const ProjectCard = ({ project, index }) => {
    const [ref, visible] = useReveal();
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});

    const onMove = (e) => {
        if (!cardRef.current) return;
        const r = cardRef.current.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rx = ((r.height / 2 - y) / r.height) * 8;
        const ry = ((x - r.width / 2) / r.width) * 8;
        setStyle({
            transform: `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`,
        });
    };
    const onLeave = () => setStyle({ transform: 'perspective(1200px)' });

    return (
        <article
            ref={ref}
            className={`project ${visible ? 'project-visible' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                ref={cardRef}
                className="project-inner"
                style={style}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
            >
                <div className="project-top" style={{ background: project.tint }}>
                    <div className="project-badge">{project.type}</div>
                    <div className="project-emoji">{project.emoji}</div>
                    <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
                </div>
                <div className="project-body">
                    <div className="project-date">{project.date}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-text">{project.text}</p>
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export const Projects = () => {
    const { t } = useT();
    const [ref, visible] = useReveal();

    return (
        <section id="work" className="section">
            <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
                <span className="section-tag">{t.sections.workTag}</span>
                <h2 className="section-title">{t.sections.workTitle}</h2>
                <p className="section-sub">{t.sections.workSub}</p>
            </div>
            <div className="projects-grid">
                {t.projects.map((p, i) => (
                    <ProjectCard key={p.title} project={p} index={i} />
                ))}
            </div>
        </section>
    );
};