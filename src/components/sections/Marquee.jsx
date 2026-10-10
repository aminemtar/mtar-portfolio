import React, { useState } from 'react';

/* ============================================================
   TECH STACK — each item has an icon slug from simpleicons.org
   To add a new tech, just add { name, slug } to this list
   ============================================================ */
const TECH = [
    { name: 'Flutter', slug: 'flutter' },
    { name: 'Dart', slug: 'dart' },
    { name: 'SwiftUI', slug: 'swift' },
    { name: 'Kotlin', slug: 'kotlin' },
    { name: 'React', slug: 'react' },
    { name: 'Angular', slug: 'angular' },
    { name: 'TypeScript', slug: 'typescript' },
    { name: 'JavaScript', slug: 'javascript' },
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'NestJS', slug: 'nestjs' },
    { name: 'Django', slug: 'django' },
    { name: 'Spring Boot', slug: 'springboot' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'Firebase', slug: 'firebase' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Jenkins', slug: 'jenkins' },
    { name: 'Git', slug: 'git' },
    { name: 'GitLab', slug: 'gitlab' },
    { name: 'Grafana', slug: 'grafana' },
    { name: 'Prometheus', slug: 'prometheus' },
    { name: 'TensorFlow', slug: 'tensorflow' },
];

/* ---------- Single tech chip with icon ---------- */
const TechChip = ({ name, slug }) => {
    const [imgError, setImgError] = useState(false);
    const iconUrl = `https://cdn.simpleicons.org/${slug}`;

    return (
        <div className="tech-chip">
            {!imgError && (
                <img
                    src={iconUrl}
                    alt={name}
                    className="tech-chip-icon"
                    loading="lazy"
                    onError={() => setImgError(true)}
                />
            )}
            <span className="tech-chip-name">{name}</span>
        </div>
    );
};

/* ---------- Marquee ---------- */
export const Marquee = () => {
    // Duplicate list so the scroll loops seamlessly (2 groups)
    const items = [...TECH, ...TECH];

    return (
        <div className="marquee">
            <div className="marquee-track">
                {[...Array(2)].map((_, i) => (
                    <div className="marquee-group" key={i}>
                        {items.map((tech, j) => (
                            <TechChip key={`${i}-${j}`} name={tech.name} slug={tech.slug} />
                        ))}
                        <span className="mq-star">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
};