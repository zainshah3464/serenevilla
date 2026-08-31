'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tween = gsap.to(barRef.current, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9997] pointer-events-none"
      style={{ height: '3px', background: 'transparent' }}
    >
      <div
        ref={barRef}
        className="h-full"
        style={{
          background: 'linear-gradient(90deg, #c5a47e, #e8c8a0, #c5a47e)',
          width: '0%',
          borderRadius: '0 2px 2px 0',
          boxShadow: '0 0 10px rgba(197,164,126,0.5)',
        }}
      />
    </div>
  );
}