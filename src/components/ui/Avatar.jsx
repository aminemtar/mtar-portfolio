import React, { useState } from 'react';
import { INFO } from '../../data/info';

export const Avatar = ({ size = 280 }) => {
    const [error, setError] = useState(false);
    const initials = `${INFO.firstName[0]}${INFO.lastName[0]}`;

    return (
        <div className="avatar-wrap" style={{ width: size, height: size }}>
            <div className="avatar-orbit" />
            <div className="avatar-ring" />
            <div className="avatar-photo">
                {!error ? (
                    <img
                        src={INFO.photo}
                        alt={`${INFO.firstName} ${INFO.lastName}`}
                        onError={() => setError(true)}
                    />
                ) : (
                    <div className="avatar-fallback">
                        <span>{initials}</span>
                    </div>
                )}
            </div>
        </div>
    );
};