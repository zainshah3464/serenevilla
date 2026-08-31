'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 38, suffix: '+', label: 'Years of Excellence', decimals: 0 },
  { value: 24, suffix: '', label: 'Luxury Rooms', decimals: 0 },
  { value: 15, suffix: 'k+', label: 'Happy Guests', decimals: 0 },
  { value: 4.9, suffix: '★', label: 'Guest Rating', decimals: 1 },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'about-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 80,
        rotateX: -40,
        stagger: 0.015,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      gsap.from('.about-text', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.about-text-container', start: 'top 80%' },
      });

      // Slight delay before image reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.6,
          delay: 0.2,
          ease: 'power4.inOut',
          scrollTrigger: { trigger: imageRef.current, start: 'top 85%' },
        }
      );

      if (window.innerWidth > 768) {
        gsap.to('.about-img-inner', {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      gsap.from('.stat-number', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
      });

      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-value') || '0');
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.textContent = obj.val.toFixed(decimals) + suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-36 px-4 sm:px-6 md:px-12 bg-[#f5f0eb] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="mb-4">
            <span className="text-[#c5a47e] text-sm uppercase tracking-[0.25em] font-medium">
              Our Story
            </span>
          </div>
          <h2
            ref={headingRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8 text-gray-900 leading-tight"
          >
            A Story of
            <br />
            Hospitality
          </h2>
          <div className="about-text-container space-y-4">
            <p className="about-text text-base md:text-lg text-gray-700 leading-relaxed">
              Nestled in the rolling hills, Serene Villa has been a haven
              for travelers since 1985. Our guesthouse blends rustic charm
              with modern luxury, offering an experience that feels both
              timeless and contemporary.
            </p>
            <p className="about-text text-base md:text-lg text-gray-700 leading-relaxed">
              Every corner is designed to evoke warmth, comfort, and a deep
              connection with nature. Whether you seek a peaceful retreat or
              a romantic getaway, our doors are open.
            </p>
            {expanded && (
              <p className="about-text text-base md:text-lg text-gray-700 leading-relaxed">
                Our dedicated team ensures every guest feels at home, offering
                personalized service and unforgettable experiences. From the moment
                you arrive, you&apos;ll be surrounded by the beauty of nature and
                the comfort of thoughtful amenities.
              </p>
            )}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-[#c5a47e] font-medium text-sm md:text-base hover:text-gray-900 transition-colors"
            >
              {expanded ? 'Show Less' : 'Read More'}
            </button>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div
                  className="stat-number text-3xl sm:text-4xl md:text-5xl font-bold text-[#c5a47e]"
                  data-value={stat.value}
                  data-suffix={stat.suffix}
                  data-decimals={stat.decimals}
                >
                  0{stat.suffix}
                </div>
                <div className="text-xs md:text-sm text-gray-500 mt-1 md:mt-2 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={imageRef}
          className="order-1 md:order-2 relative h-72 sm:h-96 md:h-[550px] overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury guesthouse interior"
            className="about-img-inner w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}