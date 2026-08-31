'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo text
      gsap.to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power4.out',
        delay: 0.2,
      });

      // Animate progress bar and percentage
      const counter = { val: 0 };
      gsap.to(counter, {
        val: 100,
        duration: 2.2,
        ease: 'power2.inOut',
        delay: 0.4,
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(counter.val)}%`;
          }
        },
      });

      gsap.to(barRef.current, {
        width: '100%',
        duration: 2.2,
        ease: 'power2.inOut',
        delay: 0.4,
      });

      // Exit animation
      gsap.to(preloaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 2.8,
        onComplete: () => {
          setIsLoading(false);
          // Ensure ScrollTrigger recalculates positions
          ScrollTrigger.refresh();
        },
      });
    }, preloaderRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex items-center justify-center"
    >
      <div className="text-center text-white w-64">
        <div
          ref={textRef}
          className="font-serif text-4xl md:text-6xl font-bold opacity-0 translate-y-10 mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Serene Villa
        </div>
        <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div
            ref={barRef}
            className="h-full bg-[#c5a47e]"
            style={{ width: '0%' }}
          />
        </div>
        <div className="mt-2 text-right text-sm text-white/60">
          <span ref={percentRef}>0%</span>
        </div>
      </div>
    </div>
  );
}