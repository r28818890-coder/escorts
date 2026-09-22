import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Spring ko fast rakha hai taaki lag na ho
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.2 };
  
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor, { passive: true });

    // Clickable elements detection
    const updateClickables = () => {
      const clickables = document.querySelectorAll('button, a, input, .group, [role="button"], .cursor-pointer');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    updateClickables();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%',
      }}
      // mix-blend-difference se button ke upar cursor sharp dikhega
      // backdrop-blur hata diya hai taaki dhundhla-pan khatam ho jaye
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block mix-blend-difference will-change-transform transition-[width,height] duration-200 ease-out ${
        isHovered 
          ? 'w-12 h-12 bg-white border-none shadow-none' 
          : 'w-4 h-4 bg-orange-600'
      }`}
    >
      {/* Inner dot for precision when not hovering */}
      {!isHovered && (
        <div className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full" />
      )}
    </motion.div>
  );
};

export default CustomCursor;