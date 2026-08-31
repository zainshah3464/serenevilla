'use client';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: '🌊', title: 'Infinity Pool', description: 'Overlooking the valley with heated water year-round.' },
  { icon: '🌿', title: 'Organic Garden', description: 'Fresh produce harvested daily for our restaurant.' },
  { icon: '🍽️', title: 'Fine Dining', description: 'Chef-curated menus featuring local ingredients.' },
  { icon: '💆', title: 'Spa & Wellness', description: 'Massage, yoga sessions, and meditation spaces.' },
  { icon: '🏔️', title: 'Adventure Tours', description: 'Hiking, cycling, and guided nature exploration.' },
  { icon: '🔥', title: 'Bonfire Nights', description: 'Under the starry sky with warm drinks and stories.' },
];

export default function Amenities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'amenity-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 50,
        stagger: 0.015,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      // Cards fade up with stagger
      gsap.from('.amenity-card', {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.amenities-grid', start: 'top 85%' },
      });

      // 3D tilt on hover
      gsap.utils.toArray<HTMLElement>('.amenity-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -8;
          const rotateY = ((x - centerX) / centerX) * 8;
          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 600,
            scale: 1.03,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="amenities"
      ref={sectionRef}
      className="py-20 md:py-36 px-4 sm:px-6 md:px-12 bg-[#0a0a0a] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#c5a47e] text-sm uppercase tracking-[0.25em] font-medium">
            What We Offer
          </span>
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-white"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Luxury Amenities
          </h2>
        </div>

        <div className="amenities-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {amenities.map((item, i) => (
            <div
              key={i}
              className="amenity-card relative p-6 md:p-8 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 overflow-hidden"
              data-cursor-label={item.title}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#c5a47e]/10 rounded-full blur-2xl group-hover:bg-[#c5a47e]/20 transition-colors duration-500" />
              <div className="amenity-icon text-4xl mb-4 md:mb-6">{item.icon}</div>
              <h3
                className="text-lg md:text-xl mb-2 md:mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}