'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#amenities', label: 'Amenities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active link detection
      const sections = navLinks.map(l => l.href.substring(1));
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.mobile-menu-link',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.5, ease: 'power3.out', delay: 0.1 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9995] transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg py-2 md:py-3'
            : 'bg-transparent py-3 md:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link
            href="/"
            className={`text-xl md:text-2xl font-bold transition-colors ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-playfair)', letterSpacing: '-0.02em' }}
          >
            Serene Villa
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-xs md:text-sm font-medium tracking-wide transition-all duration-300 ${
                  scrolled ? 'text-gray-800 hover:text-gray-900' : 'text-white hover:text-white/80'
                } ${
                  activeSection === link.href.substring(1)
                    ? 'after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-[#c5a47e]'
                    : 'after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-[2px] after:bg-[#c5a47e] after:transition-all after:duration-300 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#book"
              className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full font-medium text-xs md:text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-gray-900 text-white hover:bg-gray-700'
                  : 'bg-white text-gray-900 hover:bg-gray-200'
              }`}
              data-cursor-label="Book"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={scrolled ? '#000' : '#fff'}
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9996] bg-[rgba(10,10,10,0.98)] flex flex-col items-center justify-center gap-5 md:hidden">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 p-2 text-white"
            aria-label="Close menu"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="mobile-menu-link text-white text-2xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#book"
            onClick={toggleMenu}
            className="mobile-menu-link bg-white text-gray-900 px-6 py-2.5 rounded-full font-medium text-lg"
          >
            Book Now
          </Link>
        </div>
      )}

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-[9995] w-10 h-10 rounded-full bg-[#c5a47e] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:bg-[#b8946e] ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}