import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        backgroundColor: 'black',
      });
    };

    const hideCursor = (e) => {
      // Check if leaving the viewport
      if (!e.relatedTarget && 
          (e.clientY <= 0 || e.clientX <= 0 || 
           e.clientX >= window.innerWidth || 
           e.clientY >= window.innerHeight)) {
        gsap.to(cursor, {
          opacity: 0,
        });
      }
    };

    const showCursor = () => {
      gsap.to(cursor, {
        opacity: 1
      });
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mouseover", showCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mouseover", showCursor);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-[-10px] left-[-10px] w-6 h-6 rounded-full pointer-events-none z-50"
    />
  );
};

export default CustomCursor;
