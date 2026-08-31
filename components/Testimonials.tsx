'use client';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  { quote: 'The most peaceful stay I have ever had. The views, the food, the hospitality — everything was absolutely perfect.', author: 'Sarah L.', location: 'London, UK', rating: 5 },
  { quote: 'A hidden gem! The rooms are beautifully designed and the staff goes above and beyond. We will definitely return.', author: 'Michael R.', location: 'New York, USA', rating: 5 },
  { quote: "We came for a weekend and didn't want to leave. The bonfire night under the stars was absolutely magical.", author: 'Emily & Tom', location: 'Sydney, AU', rating: 5 },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'testimonial-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.015,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Animate on change
  useEffect(() => {
    gsap.fromTo(
      '.testimonial-item',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [current]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      else setCurrent((prev) => (prev + 1) % testimonials.length);
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 md:py-36 px-4 sm:px-6 md:px-12 bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-5xl mx-auto testimonials-container">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#c5a47e] text-sm uppercase tracking-[0.25em] font-medium">Guest Reviews</span>
          <h2
            ref={headingRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-gray-900"
          >
            What Guests Say
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="testimonial-item text-center px-4 md:px-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#c5a47e">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl font-light italic text-gray-700 leading-relaxed mb-6">
              "{testimonials[current].quote}"
            </p>
            <p className="text-base md:text-lg font-medium text-gray-900">{testimonials[current].author}</p>
            <p className="text-sm text-gray-500 mt-1">{testimonials[current].location}</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#c5a47e] w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}