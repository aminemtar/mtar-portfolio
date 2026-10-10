import React from 'react';
import { useMouse } from '../../hooks/useMouse';

export const CursorHalo = () => {
  const { x, y } = useMouse();
  return <div className="cursor-halo" style={{ left: x, top: y }} />;
};