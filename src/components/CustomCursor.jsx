import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [variant, setVariant] = useState('default'); // default | view | button

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    const touch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(touch);
    if (touch) return;

    document.body.classList.add('custom-cursor-active');

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target;
      if (target.closest?.('[data-cursor="view"]')) setVariant('view');
      else if (target.closest?.('button, a')) setVariant('button');
      else setVariant('default');
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (isTouch) return null;

  const sizes = { default: 14, button: 22, view: 64 };
  const size = sizes[variant];

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] flex items-center justify-center rounded-full border border-bronze/70 mix-blend-difference"
      style={{
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        width: size,
        height: size,
        backgroundColor: variant === 'view' ? 'rgba(184,147,95,0.15)' : 'transparent',
      }}
      transition={{ type: 'tween', duration: 0.15 }}
    >
      {variant === 'view' && (
        <span className="font-display text-[10px] tracking-[0.2em] text-bone">VIEW</span>
      )}
    </motion.div>
  );
}
