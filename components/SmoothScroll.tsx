'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.8,
      wheelMultiplier: 1,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Refresh after fonts and images load
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const timeout = setTimeout(refresh, 1000);

    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(timeout);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}