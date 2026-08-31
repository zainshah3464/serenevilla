'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description:
      'Spacious suite with mountain view, king bed, and a private balcony overlooking the valley.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop',
    price: '$350',
    size: '45 m²',
    capacity: '2 Guests',
  },
  {
    id: 2,
    name: 'Garden Room',
    description:
      'Cozy room overlooking lush gardens with floor-to-ceiling windows and a reading nook.',
    image:
      'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop',
    price: '$250',
    size: '35 m²',
    capacity: '2 Guests',
  },
  {
    id: 3,
    name: 'Family Cottage',
    description:
      'Two bedrooms, a living area with fireplace, and a private garden — perfect for families.',
    image:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    price: '$450',
    size: '80 m²',
    capacity: '4 Guests',
  },
  {
    id: 4,
    name: 'Penthouse',
    description:
      'Top-floor luxury with panoramic views, a private jacuzzi, and a wraparound terrace.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop',
    price: '$550',
    size: '70 m²',
    capacity: '2 Guests',
  },
];

export default function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 768;

      // Heading reveal
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'rooms-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 60,
        stagger: 0.015,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      // Entry animations for room cards
      const cards = gsap.utils.toArray<HTMLElement>('.room-card');
      if (isDesktop) {
        // Desktop: horizontal scroll with card entry
        gsap.from(cards, {
          opacity: 0,
          x: 100,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        const horizontalTween = gsap.to(cards, {
          xPercent: -100 * (cards.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            end: () => `+=${containerRef.current!.scrollWidth - window.innerWidth}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progressRef.current) {
                progressRef.current.style.width = `${progress * 100}%`;
              }
              const index = Math.round(progress * (cards.length - 1));
              setCurrent(index);
            },
          },
        });

        // Image parallax
        gsap.utils.toArray<HTMLElement>('.room-img').forEach((img) => {
          gsap.to(img, {
            xPercent: -8,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.room-card'),
              containerAnimation: horizontalTween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          });
        });
      } else {
        // Mobile: fade up
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="rooms" ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-[#c5a47e] text-sm uppercase tracking-[0.25em] font-medium">
            Stay With Us
          </span>
          <h2
            ref={headingRef}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 text-gray-900"
          >
            Rooms & Suites
          </h2>
        </div>
      </div>

      {/* Rooms container */}
      <div
        ref={containerRef}
        className="flex md:w-max overflow-x-auto md:overflow-visible md:h-screen no-scrollbar"
      >
        {rooms.map((room) => (
          <div
            key={room.id}
            className="room-card w-full md:w-screen md:h-screen flex flex-col items-center justify-center px-4 md:px-16 py-10 md:py-0 relative shrink-0 snap-center"
          >
            <div className="max-w-5xl w-full">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-2xl h-52 sm:h-72 md:h-[55vh] relative group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-img w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm font-medium">
                    {room.size} · {room.capacity}
                  </span>
                  <span className="text-white text-2xl font-serif">
                    {room.price}
                    <span className="text-sm font-sans"> / night</span>
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="room-details mt-4 md:mt-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
                    {room.name}
                  </h3>
                </div>
                <p className="text-sm md:text-lg text-gray-600 max-w-xl md:text-right">
                  {room.description}
                </p>
              </div>

              {/* Link */}
              <a
                href="#book"
                className="inline-block mt-4 md:mt-6 text-[#c5a47e] font-medium text-sm md:text-base hover:text-gray-900 transition-colors"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar (desktop only) - now absolute inside section */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-[#c5a47e] transition-all duration-300"
          style={{ width: '0%' }}
        />
      </div>

      {/* Dots for mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-4 mb-8">
        {rooms.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              const container = containerRef.current;
              if (container) {
                container.scrollTo({ left: i * window.innerWidth, behavior: 'smooth' });
              }
            }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              current === i ? 'bg-[#c5a47e] w-8' : 'bg-gray-300'
            }`}
            aria-label={`Go to room ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}