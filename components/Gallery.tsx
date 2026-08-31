'use client';
import { useLayoutEffect, useRef, useState, useEffect } from 'react'; // <-- FIX: added useEffect
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2070&auto=format&fit=crop', alt: 'Guesthouse exterior', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop', alt: 'Pool area', span: '' },
  { src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop', alt: 'Fine dining', span: '' },
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2070&auto=format&fit=crop', alt: 'Room view', span: '' },
  { src: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2070&auto=format&fit=crop', alt: 'Spa treatment', span: 'md:col-span-2' },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'gallery-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.015,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      const items = gsap.utils.toArray<HTMLElement>('.gallery-item');
      items.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.08,
            scrollTrigger: { trigger: item, start: 'top 85%' },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightbox === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox((prev) => (prev === null ? 0 : (prev + 1) % images.length));
      if (e.key === 'ArrowLeft') setLightbox((prev) => (prev === null ? images.length - 1 : (prev - 1 + images.length) % images.length));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f5f0eb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#c5a47e] text-sm uppercase tracking-[0.25em] font-medium">Visual Journey</span>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-gray-900"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] sm:auto-rows-[230px] md:auto-rows-[280px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item overflow-hidden rounded-xl shadow-lg ${img.span} relative group cursor-pointer`}
              onClick={() => setLightbox(i)}
              data-hover
              data-cursor-label="View"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[10000] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-[#c5a47e] transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#c5a47e] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#c5a47e] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) => (prev === null ? 0 : (prev + 1) % images.length));
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}