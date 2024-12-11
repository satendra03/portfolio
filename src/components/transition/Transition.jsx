import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const transitionRef = useRef(null);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const tl = gsap.timeline();

    setIsVisible(false);

    tl.to(transitionRef.current, {
      duration: 0.5,
      height: '100%',
      top: '0%',
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
    });

    tl.to(transitionRef.current, {
      duration: 0.5,
      height: '0%',
      top: '100%',
      ease: 'power4.inOut',
      delay: 0.3,
      stagger: {
        amount: 0.2,
      },
      onStart: () => {
        gsap.to(contentRef.current, {
          opacity: 1,
          duration: 0.5,
        });
      },
      onComplete: () => {
        setIsVisible(true); 
      },
    });

    return () => {
      tl.kill();
    };
  }, [location]);

  return (
    <>
      <div
        ref={transitionRef}
        className="bg-black"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '0%',
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      />
      
      <div
        ref={contentRef}
        style={{
          opacity: 0,
          transition: 'opacity 0.5s ease',
        }}
      >
        {isVisible && children}
      </div>
    </>
  );
};

export default PageTransition;
