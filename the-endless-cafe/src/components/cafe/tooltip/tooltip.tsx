import React, { useState, useEffect } from 'react';
import Avatar from '../avatar/avatar';

type Tooltip = React.FC<{ visible: boolean; x: number; y: number; children: React.ReactNode }>;

const Tooltip: Tooltip = ({ visible, x, y, children }) => {
  if (!visible) return null;
  return (
    <div style={{ position: 'fixed', left: `${x}px`, top: `${y}px`, pointerEvents: 'none' }}>
      {children}
    </div>
  );
};

type AvatarData = {
  name: string;
  status: string;
  music: string;
  snack: string;
  sessionTime: number;
}

// 1. Track state
const [mouse, setMouse] = useState({ x: 0, y: 0 });
const [hovered, setHovered] = useState<AvatarData | null>(null);

// 2. Track mouse movement
useEffect(() => {
  const handleMove = (e: MouseEvent) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };
  window.addEventListener('mousemove', handleMove);
  return () => window.removeEventListener('mousemove', handleMove);
}, []);

// 3. Pass hover handler to components
<>
    // 3. Pass hover handler to components
    <div onMouseEnter={() => setHovered({name: '', status: '', music: '', snack: '', sessionTime: 0})} onMouseLeave={() => setHovered(null)}>
        <Avatar name={''} />
    </div>
    // 4. Show tooltip when hovering
    <Tooltip visible={!!hovered} x={mouse.x} y={mouse.y}>
        {hovered && <div>{hovered.name}</div>}
    </Tooltip></>