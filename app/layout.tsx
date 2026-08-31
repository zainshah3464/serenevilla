import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://serenevilla.com'),
  title: {
    default: 'Serene Villa — Luxury Guesthouse & Retreat',
    template: '%s | Serene Villa',
  },
  description:
    'A luxury guesthouse nestled in nature, offering peace, elegance, and unforgettable experiences. Book your stay today.',
  applicationName: 'Serene Villa',
  authors: [{ name: 'Zain Shah', url: 'https://zain-main-web.vercel.app' }],
  generator: 'Next.js',
  keywords: [
    'luxury guesthouse',
    'boutique hotel',
    'nature retreat',
    'serene villa',
    'spa resort',
    'romantic getaway',
    'mountain lodge',
    'hospitality',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Zain Shah',
  publisher: 'Serene Villa',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230a0a0a'/%3E%3Ctext x='50' y='65' font-family='Georgia, serif' font-size='55' fill='%23c5a47e' text-anchor='middle'%3ESV%3C/text%3E%3C/svg%3E",
        type: 'image/svg+xml',
      },
    ],
    shortcut: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230a0a0a'/%3E%3Ctext x='50' y='65' font-family='Georgia, serif' font-size='55' fill='%23c5a47e' text-anchor='middle'%3ESV%3C/text%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230a0a0a'/%3E%3Ctext x='50' y='65' font-family='Georgia, serif' font-size='55' fill='%23c5a47e' text-anchor='middle'%3ESV%3C/text%3E%3C/svg%3E",
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: 'https://serenevilla.com',
    title: 'Serene Villa — Luxury Guesthouse & Retreat',
    description:
      'A luxury guesthouse nestled in nature, offering peace, elegance, and unforgettable experiences. Book your stay today.',
    siteName: 'Serene Villa',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Serene Villa — Luxury Guesthouse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serene Villa — Luxury Guesthouse & Retreat',
    description:
      'A luxury guesthouse nestled in nature, offering peace, elegance, and unforgettable experiences.',
    creator: '@zainshah3464',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900 selection:bg-[#c5a47e] selection:text-white">
        {children}
      </body>
    </html>
  );
}