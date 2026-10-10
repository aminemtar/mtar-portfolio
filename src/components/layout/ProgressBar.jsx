import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ProgressBar = () => {
  const p = useScrollProgress();
  return (
    <div className="progress-rail">
      <div className="progress-fill" style={{ width: `${p * 100}%` }} />
    </div>
  );
};