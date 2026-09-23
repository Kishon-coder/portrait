import { useRef, useState, useCallback } from 'react';

/**
 * Lightweight CSS-only 3D tilt: tracks the mouse position over an element
 * and returns a transform string, so no WebGL / Three.js is needed for the
 * "mouse-follow tilt" effect used across the hero and gallery cards.
 *
 * @param {number} intensity - max rotation in degrees
 */
export function useMouseTilt(intensity = 10) {
  const ref = useRef(null);
  const [style, setStyle] = useState({ transform: 'rotateX(0deg) rotateY(0deg)' });

  const onMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateY = x * intensity * 2;
      const rotateX = -y * intensity * 2;
      setStyle({
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
      });
    },
    [intensity]
  );

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)' });
  }, []);

  return { ref, style, onMouseMove, onMouseLeave };
}
