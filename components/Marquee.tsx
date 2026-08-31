'use client';
import { useRef } from 'react';

const items = [
  'Luxury',
  'Peace',
  'Nature',
  'Comfort',
  'Elegance',
  'Serenity',
  'Hospitality',
  'Wellness',
];

const repeatedItems = [...items, ...items, ...items, ...items];

export default function Marquee() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const pauseRow = (rowRef: React.RefObject<HTMLDivElement | null>) => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = 'paused';
    }
  };

  const resumeRow = (rowRef: React.RefObject<HTMLDivElement | null>) => {
    if (rowRef.current) {
      rowRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    <section className="relative py-10 md:py-14 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(197,164,126,0.05),transparent_60%)]" />
      </div>

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a47e]/40 to-transparent" />
      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c5a47e]/40 to-transparent" />

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      <div className="relative flex flex-col gap-4 md:gap-6">
        {/* Row 1 - moving left */}
        <div
          className="marquee-mask overflow-hidden"
          onMouseEnter={() => pauseRow(row1Ref)}
          onMouseLeave={() => resumeRow(row1Ref)}
        >
          <div
            ref={row1Ref}
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap w-max"
            style={{
              animation: 'marquee-left 40s linear infinite',
              willChange: 'transform',
            }}
          >
            {repeatedItems.map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-10">
                <span
                  className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.25em] text-white/70 hover:text-[#c5a47e] transition-colors duration-300 cursor-default"
                >
                  {item}
                </span>
                <span className="text-[#c5a47e]/60 text-lg md:text-xl">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - moving right */}
        <div
          className="marquee-mask overflow-hidden"
          onMouseEnter={() => pauseRow(row2Ref)}
          onMouseLeave={() => resumeRow(row2Ref)}
        >
          <div
            ref={row2Ref}
            className="flex items-center gap-6 md:gap-10 whitespace-nowrap w-max"
            style={{
              animation: 'marquee-right 35s linear infinite',
              willChange: 'transform',
            }}
          >
            {repeatedItems.map((item, i) => (
              <span key={i} className="flex items-center gap-6 md:gap-10">
                <span
                  className="text-sm md:text-base lg:text-lg font-medium uppercase tracking-[0.25em] text-white/40 hover:text-[#c5a47e] transition-colors duration-300 cursor-default"
                >
                  {item}
                </span>
                <span className="text-[#c5a47e]/40 text-lg md:text-xl">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}