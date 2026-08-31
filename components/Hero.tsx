'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const rotatingWords = ['Serenity', 'Luxury', 'Peace', 'Comfort'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const rotatingRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax + zoom
      gsap.to('.hero-bg', {
        yPercent: 30,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Overlay fade
      gsap.to('.hero-overlay', {
        opacity: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Content container subtle scale entrance
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 2.4 }
      );

      // Heading split text
      const split = new SplitType(headingRef.current!, {
        types: 'chars,words',
        charClass: 'hero-char',
      });

      gsap.from(split.chars, {
        opacity: 0,
        y: 120,
        rotateX: -80,
        stagger: 0.025,
        duration: 1.4,
        ease: 'power4.out',
        delay: 2.8, // Slightly later than before
      });

      // Subtitle
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 3.4 }
      );

      // Rotating word animation
      if (rotatingRef.current) {
        let currentIndex = 0;
        const rotate = () => {
          gsap.to(rotatingRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            onComplete: () => {
              currentIndex = (currentIndex + 1) % rotatingWords.length;
              rotatingRef.current!.textContent = rotatingWords[currentIndex];
              gsap.fromTo(
                rotatingRef.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
              );
            },
          });
        };
        const interval = setInterval(rotate, 3000);
        return () => clearInterval(interval);
      }

      // Scroll indicator
      gsap.fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 4 }
      );
      gsap.to('.scroll-indicator', {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
        delay: 4.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    gsap.to('.hero-bg', { x, y, duration: 1, ease: 'power2.out' });
    gsap.to('.hero-content', { x: -x * 0.3, y: -y * 0.3, duration: 1 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden bg-[#0a0a0a]"
    >
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      <div className="hero-overlay absolute inset-0 bg-black/40" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8 hero-content"
      >
        <div className="max-w-5xl mx-auto">
          <h1
            ref={headingRef}
            className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[1.05] tracking-tight font-bold"
          >
            Escape to
            <br />
            <span ref={rotatingRef} className="text-[#c5a47e] inline-block">
              {rotatingWords[0]}
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-2xl font-light max-w-2xl mx-auto text-white/80"
          >
            A luxury guesthouse nestled in nature, designed for those
            who seek peace, elegance, and unforgettable moments.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white/70 scroll-indicator flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}