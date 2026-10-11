import React, { useEffect, useState } from 'react';
import { ProjectIcon } from './ProjectIcon';

/* ============================================================
   Small store pill — used in the modal
   ============================================================ */
const StorePill = ({ type, href, label }) => {
    const isPlay = type === 'play';
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`store-pill store-pill-${type}`}
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
   ProjectModal
   ============================================================ */
export const ProjectModal = ({ project, onClose }) => {
    const [activeImg, setActiveImg] = useState(0);

    // Reset active image when project changes
    useEffect(() => {
        setActiveImg(0);
    }, [project]);

    // Escape key + body scroll lock
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    const hasGallery = Array.isArray(project.gallery) && project.gallery.length > 0;

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-shell" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                <div className="modal-scroll">
                    {/* ===== HEADER ===== */}
                    <div className="modal-header" style={{ background: project.tint }}>
                        <div className="modal-icon">
                            {project.iconImage || project.iconSlug ? (
                                <ProjectIcon
                                    slug={project.iconSlug}
                                    image={project.iconImage}
                                    color={project.iconColor}
                                    size={project.iconImage ? 72 : 56}
                                    alt={project.title}
                                />
                            ) : (
                                <span style={{ fontSize: '2rem' }}>{project.emoji}</span>
                            )}
                        </div>
                        <div className="modal-header-text">
                            <span className="modal-type">{project.type}</span>
                            <h2 className="modal-title">{project.title}</h2>
                            <span className="modal-date">{project.date}</span>
                        </div>
                    </div>

                    {/* ===== BODY ===== */}
                    <div className="modal-body">
                        {/* Gallery OR fallback gradient */}
                        {hasGallery ? (
                            <div className="modal-gallery">
                                <div className="modal-gallery-main">
                                    <img src={project.gallery[activeImg]} alt={project.title} />
                                </div>
                                {project.gallery.length > 1 && (
                                    <div className="modal-gallery-thumbs">
                                        {project.gallery.map((img, i) => (
                                            <button
                                                key={i}
                                                className={`modal-thumb ${i === activeImg ? 'active' : ''}`}
                                                onClick={() => setActiveImg(i)}
                                                aria-label={`View screenshot ${i + 1}`}
                                            >
                                                <img src={img} alt="" />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div
                                className="modal-gallery-main modal-gallery-fallback"
                                style={{ background: project.tint }}
                            >
                                {project.iconImage || project.iconSlug ? (
                                    <ProjectIcon
                                        slug={project.iconSlug}
                                        image={project.iconImage}
                                        color={project.iconColor}
                                        size={120}
                                        alt={project.title}
                                    />
                                ) : (
                                    <span style={{ fontSize: '4rem' }}>{project.emoji}</span>
                                )}
                            </div>
                        )}

                        {/* Overview */}
                        <div className="modal-section">
                            <h3 className="modal-h3">Overview</h3>
                            <p className="modal-p">
                                {project.longDescription || project.text}
                            </p>
                        </div>

                        {/* Highlights */}
                        {Array.isArray(project.features) && project.features.length > 0 && (
                            <div className="modal-section">
                                <h3 className="modal-h3">Highlights</h3>
                                <ul className="modal-features">
                                    {project.features.map((f) => (
                                        <li key={f}>
                                            <span className="modal-check">✓</span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Tech Stack */}
                        {Array.isArray(project.tags) && project.tags.length > 0 && (
                            <div className="modal-section">
                                <h3 className="modal-h3">Tech Stack</h3>
                                <div className="modal-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Stores */}
                        {Array.isArray(project.stores) && project.stores.length > 0 && (
                            <div className="modal-section">
                                <h3 className="modal-h3">Live on stores</h3>
                                <div className="modal-stores">
                                    {project.stores.map((app, i) => (
                                        <div key={i} className="modal-store-row">
                                            <div className="modal-store-info">
                                                {app.emoji && <span className="modal-store-emoji">{app.emoji}</span>}
                                                <span className="modal-store-name">{app.name}</span>
                                            </div>
                                            <div className="modal-store-links">
                                                {app.play && <StorePill type="play" href={app.play} label="Google Play" />}
                                                {app.appStore && <StorePill type="appStore" href={app.appStore} label="App Store" />}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};