'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const split = new SplitType(headingRef.current!, {
        types: 'chars',
        charClass: 'footer-char',
      });
      gsap.from(split.chars, {
        opacity: 0,
        y: 60,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });

      gsap.from('.footer-content', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.footer-content-container', start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer
      id="contact"
      ref={sectionRef}
      className="bg-[#0a0a0a] text-white pt-16 md:pt-24 pb-8 md:pb-12 px-4 sm:px-6 md:px-12 overflow-hidden"
    >
      {/* CTA Section */}
      <div className="text-center mb-16 md:mb-24" id="book">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Book Your
          <br />
          Stay Today
        </h2>
        <Link
          href="#"
          className="inline-block bg-[#c5a47e] text-white px-10 md:px-14 py-4 md:py-5 rounded-full font-medium text-base md:text-lg hover:bg-[#b8946e] transition-colors duration-300"
          data-cursor-label="Book"
        >
          Check Availability
        </Link>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 footer-content-container">
        {/* Brand */}
        <div className="footer-content">
          <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Serene Villa
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            123 Mountain Road, Hill Valley, HV 45678
          </p>
          <p className="text-gray-400 mt-2 text-sm md:text-base">contact@serenevilla.com</p>
          <p className="text-gray-400 text-sm md:text-base">+1 (555) 123-4567</p>
        </div>

        {/* Quick Links */}
        <div className="footer-content">
          <h4 className="text-lg md:text-xl mb-4 font-medium">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm md:text-base">
            {['About', 'Rooms', 'Amenities', 'Gallery', 'Reviews'].map((link) => (
              <li key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-content">
          <h4 className="text-lg md:text-xl mb-4 font-medium">Newsletter</h4>
          <p className="text-gray-400 text-sm md:text-base mb-4">
            Subscribe for exclusive offers and updates.
          </p>
          {subscribed ? (
            <p className="text-[#c5a47e] text-sm">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#c5a47e] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#c5a47e] text-white px-4 py-2 rounded-full text-sm hover:bg-[#b8946e] transition-colors"
              >
                Join
              </button>
            </form>
          )}
          <div className="flex gap-3 mt-4">
            {['instagram', 'facebook', 'twitter'].map((social) => (
              <a
                key={social}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#c5a47e] transition-all duration-300 hover:scale-110"
                aria-label={social}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social === 'instagram' && (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  )}
                  {social === 'facebook' && (
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  )}
                  {social === 'twitter' && (
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  )}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()} Serene Villa. All rights reserved.
          </p>
          <div className="text-gray-500 text-xs md:text-sm flex items-center gap-2">
            <span>Designed & Developed by</span>
            <a
              href="https://zain-main-web.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c5a47e] hover:text-white transition-colors font-medium"
            >
              Zain Shah
            </a>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Full-Stack Developer & Software Engineer</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/zainshah3464"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/zainshah3464"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="mailto:zainshahzs110@gmail.com"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}