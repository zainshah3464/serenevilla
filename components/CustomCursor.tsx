'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');
  const isFirstMove = useRef(true);

  useEffect(() => {
    const checkDevice = () => setIsDesktop(window.innerWidth > 768);
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const moveDot = (e: MouseEvent) => {
      if (isFirstMove.current) {
        isFirstMove.current = false;
        gsap.set([dotRef.current, ringRef.current, labelRef.current], {
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
        });
        return;
      }
      // Dot follows instantly
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
      // Ring follows smoothly
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out',
      });
      // Label follows if not hovering
      if (labelRef.current && !hovering) {
        gsap.to(labelRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-hover]');
      if (interactive) {
        setHovering(true);
        const labelText = interactive.getAttribute('data-cursor-label');
        if (labelText) {
          setLabel(labelText);
          gsap.to(labelRef.current, { scale: 1, opacity: 1, duration: 0.3 });
        } else {
          setLabel('');
          gsap.to(labelRef.current, { scale: 0, opacity: 0, duration: 0.3 });
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [data-hover]')) {
        setHovering(false);
        setLabel('');
        gsap.to(labelRef.current, { scale: 0, opacity: 0, duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', moveDot);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveDot);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isDesktop, hovering]);

  useEffect(() => {
    if (!ringRef.current || !dotRef.current || !labelRef.current) return;
    if (hovering) {
      gsap.to(ringRef.current, {
        scale: 1.8,
        borderColor: 'rgba(197,164,126,0.9)',
        backgroundColor: 'rgba(197,164,126,0.1)',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(dotRef.current, {
        scale: 0.5,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(ringRef.current, {
        scale: 1,
        borderColor: '#c5a47e',
        backgroundColor: 'transparent',
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(dotRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [hovering, label]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#c5a47e',
          borderRadius: '50%',
          top: 0,
          left: 0,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: '28px',
          height: '28px',
          border: '2px solid #c5a47e',
          borderRadius: '50%',
          top: 0,
          left: 0,
          opacity: 0,
          transform: 'translate(-50%, -50%)',
          willChange: 'transform, border-color, background-color',
          transition: 'background-color 0.3s, border-color 0.3s',
        }}
      />
      {/* Label */}
      <div
        ref={labelRef}
        className="fixed z-[9998] pointer-events-none flex items-center justify-center text-white text-xs font-medium uppercase tracking-wider"
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(4px)',
          top: 0,
          left: 0,
          opacity: 0,
          transform: 'scale(0) translate(-50%, -50%)',
          willChange: 'transform, opacity',
        }}
      >
        {label}
      </div>
    </>
  );
}