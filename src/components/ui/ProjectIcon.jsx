import React, { useState } from 'react';

/* ============================================================
   ProjectIcon — loads a local brand image or falls back to Simple Icons
   ============================================================ */
export const ProjectIcon = ({ slug, image, color, size = 44, alt = '' }) => {
    const [error, setError] = useState(false);

    const url = image || `https://cdn.simpleicons.org/${slug}${color ? '/' + color.replace('#', '') : ''}`;
    const label = alt || slug || 'Project';

    if (error) {
        return (
            <div
                className="project-icon-fallback"
                style={{
                    width: size,
                    height: size,
                    background: color ? `#${color.replace('#', '')}` : '#7c6bff',
                }}
            >
                <span>{label.charAt(0).toUpperCase()}</span>
            </div>
        );
    }

    return (
        <img
            src={url}
            alt={label}
            width={size}
            height={size}
            className="project-icon-img"
            loading="lazy"
            onError={() => setError(true)}
        />
    );
};