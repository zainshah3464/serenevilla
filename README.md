# 🏡 Serene Villa — Luxury Guesthouse & Retreat

![Serene Villa](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)

**A modern, animated, and fully responsive luxury guesthouse website** built with **Next.js**, **GSAP**, **Tailwind CSS**, and **Lenis smooth scrolling**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-serenevilla.vercel.app-c5a47e?style=for-the-badge&logo=vercel)](https://serenevilla.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/zainshah3464/serenevilla)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12+-88ce02?style=for-the-badge&logo=greensock)](https://gsap.com/)

---

## ✨ Overview

Serene Villa is a **demo project** showcasing a high‑end guesthouse website. It features immersive animations, a custom cursor, smooth scrolling, and a responsive layout that adapts elegantly to all devices. The design blends modern typography, luxury aesthetics, and subtle interactions to create a premium user experience.

> **Note:** This is a demo. If you are interested in a complete, fully functional booking system or a similar website for your business, feel free to contact the developer (details below).

---

## 🚀 Live Demo

🔗 **https://serenevilla.vercel.app**

---

## 🎯 Key Features

- **Preloader** with progress percentage and smooth exit
- **Custom animated cursor** with magnetic hover effects
- **Smooth scrolling** powered by Lenis + GSAP ScrollTrigger
- **Dynamic hero** with rotating words, parallax, and mouse movement
- **Animated text reveals** (SplitType + GSAP)
- **Horizontal scroll** for rooms section (desktop) with progress indicator
- **Swipeable mobile rooms** with touch support
- **Testimonials carousel** with auto‑rotate and swipe gestures
- **Lightbox gallery** with keyboard navigation
- **Marquee** with double rows and hover pause
- **Active link highlighting** in navbar
- **Newsletter subscription** form in footer
- **Fully responsive** and mobile‑first
- **SEO optimised** with Open Graph and Twitter cards

---

## 🛠 Tech Stack

| Category       | Technology                          |
|----------------|-------------------------------------|
| Framework      | Next.js 15+ (App Router)            |
| Animations     | GSAP 3.12 + ScrollTrigger + SplitType |
| Smooth Scroll  | Lenis                               |
| Styling        | Tailwind CSS                        |
| Fonts          | Playfair Display, Inter (Google Fonts) |
| Deployment     | Vercel                              |
| Images         | Unsplash (placeholder)              |

---

## 📸 Screenshots

### Hero Section
![Hero](https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop)

### About Section
![About](https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop)

### Rooms – Deluxe Suite
![Deluxe Suite](https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop)

### Garden Room
![Garden Room](https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=2074&auto=format&fit=crop)

### Family Cottage
![Family Cottage](https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop)

### Penthouse
![Penthouse](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop)

### Gallery – Pool Area
![Pool Area](https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2070&auto=format&fit=crop)

---

## 📁 Project Structure

```
serenevilla/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Preloader.tsx
│   ├── CustomCursor.tsx
│   ├── ScrollProgress.tsx
│   ├── SmoothScroll.tsx
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── About.tsx
│   ├── Rooms.tsx
│   ├── Amenities.tsx
│   ├── Gallery.tsx
│   ├── Testimonials.tsx
│   ├── Footer.tsx
│   └── RevealText.tsx
├── public/
│   └── (favicon, manifest, etc.)
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zainshah3464/serenevilla.git
   cd serenevilla
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Customisation

- **Images:** Replace the Unsplash URLs in each component with your own (preferably from a CDN or local `/public` folder).
- **Colors:** Update the primary colour `#c5a47e` in `globals.css` or directly in component class names.
- **Fonts:** Modify `layout.tsx` to use different Google Fonts.
- **Content:** Edit the text inside each component file (`About.tsx`, `Rooms.tsx`, etc.).
- **Animations:** Adjust GSAP durations, delays, and easing in the respective `useLayoutEffect` hooks.

---

## 🚢 Deployment

The easiest way to deploy this project is on **Vercel**:

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel will automatically detect Next.js – no configuration needed.
4. Click **Deploy** and your site will be live in seconds.

For other platforms, ensure you run:
```bash
npm run build
npm run start
```

---

## 👤 Developer Credit

**Designed & Developed by** [Zain Shah](https://zain-main-web.vercel.app)

- 🌐 **Portfolio:** https://zain-main-web.vercel.app
- 💼 **GitHub:** [@zainshah3464](https://github.com/zainshah3464)
- 📸 **Instagram:** [@zainshah3464](https://www.instagram.com/zainshah3464)
- ✉️ **Email:** zainshahzs110@gmail.com

> Full‑Stack Developer & Software Engineer

---

## 📄 License

This project is licensed under the **MIT License**. See below for details.

```
MIT License

Copyright (c) 2025 Zain Shah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🤝 Interested in a Full Project?

This website is a **demo** to showcase design and animation capabilities. If you want a **complete, fully functional** website with booking integration, payment gateways, admin dashboard, or any other custom features, feel free to **contact Zain Shah** via email or social media. He will be happy to discuss your project and provide a tailored solution.

---

⭐ **If you like this project, give it a star on GitHub!** ⭐