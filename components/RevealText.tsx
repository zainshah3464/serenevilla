'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span';
  delay?: number;
}

export default function RevealText({ children, className = '', as: Tag = 'h2', delay = 0 }: RevealTextProps) {
  const textRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const split = new SplitType(textRef.current!, { types: 'chars,words' });
    gsap.from(split.chars, {
      opacity: 0,
      y: 80,
      rotateX: -90,
      stagger: 0.02,
      duration: 1,
      delay,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
      },
    });
  }, [delay]);

  return (
    <Tag ref={textRef as any} className={className}>
      {children}
    </Tag>
  );
}