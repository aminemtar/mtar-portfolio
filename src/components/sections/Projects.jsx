import React, { useRef, useState } from 'react';
import { useT } from '../../context/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { ProjectIcon } from '../ui/ProjectIcon';
import { ProjectModal } from '../ui/ProjectModal';

/* ============================================================
   Store pill — Play Store / App Store mini buttons
   ============================================================ */
const StorePill = ({ type, href, label }) => {
    const isPlay = type === 'play';
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`store-pill store-pill-${type}`}
            aria-label={`Open on ${isPlay ? 'Google Play' : 'App Store'}`}
            onClick={(e) => e.stopPropagation()}
        >
            {isPlay ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.6 1.8L13.7 12 3.6 22.2a1.5 1.5 0 01-.6-1.2V3a1.5 1.5 0 01.6-1.2z" />
                    <path d="M14.9 13.2l2.7 2.7-9.8 5.6 7.1-8.3z" />
                    <path d="M17.6 8.1l4.2 2.4c.9.5.9 1.5 0 2l-4.2 2.4-3.1-3.1 3.1-3.7z" />
                </svg>
            ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
            )}
            <span>{label}</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="store-pill-arrow">
                <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </a>
    );
};

/* ============================================================
   MiniGallery — 3 thumbnails + "+N" more tile
   ============================================================ */
const MiniGallery = ({ images, tint, label }) => {
    if (!images || images.length === 0) return null;

    const preview = images.slice(0, 3);
    const extra = Math.max(0, images.length - 3);

    return (
        <div className="project-gallery-preview">
            <div className="project-gallery-label">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                    <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor" />
                    <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{label}</span>
            </div>

            <div className="project-gallery-thumbs">
                {preview.map((img, i) => (
                    <div key={i} className="project-thumb">
                        <img src={img} alt="" loading="lazy"  />
                    </div>
                ))}

                {extra > 0 && (
                    <div className="project-thumb project-thumb-more" style={{ background: tint }}>
                        <span>+{extra}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

/* ============================================================
   ProjectCard
   ============================================================ */
const ProjectCard = ({ project, index, onOpen, galleryLabel }) => {
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

    const hasStores = Array.isArray(project.stores) && project.stores.length > 0;
    const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

    return (
        <article
            ref={ref}
            className={`project ${visible ? 'project-visible' : ''} ${hasStores ? 'project-featured' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => onOpen(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
        >
            <div
                ref={cardRef}
                className="project-inner"
                style={style}
                onMouseMove={onMove}
                onMouseLeave={onLeave}
            >
                {/* Top visual with icon from CDN */}
                <div className="project-top" style={{ background: project.tint }}>
                    <div className="project-badge">{project.type}</div>
                    <div className="project-icon-wrap">
                        {project.iconImage || project.iconSlug ? (
                            <ProjectIcon
                                slug={project.iconSlug}
                                image={project.iconImage}
                                color={project.iconColor}
                                size={project.iconImage ? 72 : 56}
                                alt={project.title}
                            />
                        ) : (
                            <span className="project-emoji">{project.emoji}</span>
                        )}
                    </div>
                    <div className="project-num">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="project-body">
                    <div className="project-date">{project.date}</div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-text">{project.text}</p>

                    {/* Tech stack */}
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>

                    {/* Mini gallery preview */}
                    {hasGallery && (
                        <MiniGallery
                            images={project.gallery}
                            tint={project.tint}
                            label={galleryLabel || 'Screenshots'}
                        />
                    )}

                    {/* Stores */}
                    {hasStores && (
                        <div className="project-stores">
                            <div className="stores-header">
                                <span className="stores-live">
                                    <span className="live-dot" />
                                    {project.storesLabel}
                                </span>
                            </div>
                            <div className="stores-list">
                                {project.stores.map((app, i) => (
                                    <div key={i} className="store-app">
                                        <div className="store-app-head">
                                            {app.emoji && <span className="store-app-emoji">{app.emoji}</span>}
                                            <span className="store-app-name">{app.name}</span>
                                        </div>
                                        <div className="store-app-links">
                                            {app.play && <StorePill type="play" href={app.play} label="Google Play" />}
                                            {app.appStore && <StorePill type="appStore" href={app.appStore} label="App Store" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="project-cta">
                        <span>View details</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </article>
    );
};

/* ============================================================
   Projects section
   ============================================================ */
export const Projects = () => {
    const { t } = useT();
    const [ref, visible] = useReveal();
    const [activeProject, setActiveProject] = useState(null);

    return (
        <>
            <section id="work" className="section">
                <div ref={ref} className={`section-head ${visible ? 'in' : ''}`}>
                    <span className="section-tag">{t.sections.workTag}</span>
                    <h2 className="section-title">{t.sections.workTitle}</h2>
                    <p className="section-sub">{t.sections.workSub}</p>
                </div>

                <div className="projects-grid">
                    {t.projects.map((p, i) => (
                        <ProjectCard
                            key={p.title}
                            project={p}
                            index={i}
                            onOpen={setActiveProject}
                            galleryLabel={t.sections.galleryLabel}
                        />
                    ))}
                </div>
            </section>

            {activeProject && (
                <ProjectModal
                    project={activeProject}
                    onClose={() => setActiveProject(null)}
                />
            )}
        </>
    );
};