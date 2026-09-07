<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://serenevilla.vercel.app">
    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=200&h=80&auto=format&fit=crop" alt="Serene Villa Logo" width="200" height="80">
  </a>

  <h1 align="center">SERENE VILLA — Luxury Guesthouse & Retreat</h1>

  <p align="center">
    A modern, animated, and fully responsive luxury guesthouse website built with Next.js, GSAP, Tailwind CSS, and Lenis smooth scrolling.
    <br />
    <a href="https://serenevilla.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/zainshah3464/serenevilla">GitHub Repository</a>
    ·
    <a href="https://github.com/zainshah3464/serenevilla/issues">Report Bug</a>
    ·
    <a href="https://github.com/zainshah3464/serenevilla/issues">Request Feature</a>
  </p>
</div>

<!-- BADGES -->
<p align="center">
  <a href="https://github.com/zainshah3464/serenevilla/actions">
    <img src="https://img.shields.io/github/actions/workflow/status/zainshah3464/serenevilla/deploy.yml?style=flat-square" alt="Build Status">
  </a>
  <a href="https://serenevilla.vercel.app">
    <img src="https://img.shields.io/github/deployments/zainshah3464/serenevilla/production?style=flat-square&label=vercel" alt="Deployment">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/zainshah3464/serenevilla?style=flat-square" alt="License">
  </a>
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
  <img src="https://img.shields.io/badge/GSAP-3-green?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP">
  <img src="https://img.shields.io/badge/Lenis-smooth%20scroll-orange?style=for-the-badge" alt="Lenis">
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#environment-variables">Environment Variables</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#key-components">Key Components</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#customization">Customization</a></li>
    <li><a href="#performance-optimizations">Performance Optimizations</a></li>
    <li><a href="#mobile-responsiveness">Mobile Responsiveness</a></li>
    <li><a href="#accessibility">Accessibility</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#changelog">Changelog</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#code-style">Code Style</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#developer">Developer</a></li>
    <li><a href="#support">Support</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

**Serene Villa** is a luxury guesthouse and retreat website that delivers an immersive digital experience. It combines modern typography, high‑quality imagery, and refined animations to evoke tranquility and elegance. The project showcases advanced front‑end techniques—custom cursor, smooth scrolling, horizontal room sections, and scroll‑driven reveals—all built with **Next.js**, **GSAP**, **Tailwind CSS**, and **Lenis**.

> **Note:** This is a front‑end demo. If you're interested in a full‑fledged booking system or a custom website for your hospitality business, contact the developer (details below).

<p align="center">
  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" alt="Serene Villa Demo" width="80%">
</p>

---

## Features

- 🏡 **Preloader** – Progress percentage with smooth exit animation.
- 🖱️ **Custom Animated Cursor** – Magnetic hover effects and click feedback.
- 🚀 **Smooth Scrolling** – Lenis integrated with GSAP ScrollTrigger for buttery scroll.
- 🎬 **Dynamic Hero** – Rotating words, parallax, and mouse‑movement interactions.
- ✨ **Animated Text Reveals** – SplitType + GSAP for cinematic typography.
- 🛏️ **Horizontal Scroll Rooms** – Desktop horizontal scrolling with progress indicator; swipeable on mobile.
- 💬 **Testimonials Carousel** – Auto‑rotate, swipe gestures, and keyboard navigation.
- 🖼️ **Lightbox Gallery** – Full‑screen image preview with keyboard support.
- 🎠 **Double Marquee** – Continuous scrolling text with hover pause.
- 📌 **Active Nav Link Highlighting** – Automatically updates based on scroll position.
- 📧 **Newsletter Subscription** – Footer form with client‑side validation.
- 📱 **Fully Responsive** – Mobile‑first approach, touch‑friendly interactions.
- 🔍 **SEO Optimised** – Open Graph, Twitter Cards, and semantic HTML.

---

## Tech Stack

| Category          | Technology                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| **Framework**     | [Next.js 15+](https://nextjs.org/) (App Router)                                                 |
| **Language**      | [TypeScript 5](https://www.typescriptlang.org/)                                                 |
| **Styling**       | [Tailwind CSS 4](https://tailwindcss.com/)                                                      |
| **Animations**    | [GSAP 3.12](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) + [SplitType](https://split-type.github.io/) |
| **Smooth Scroll** | [Lenis](https://lenis.studiofreight.com/)                                                       |
| **Fonts**         | [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) & [Inter](https://fonts.google.com/specimen/Inter) |
| **Icons**         | Custom inline SVG (no external icon library)                                                    |
| **Deployment**    | [Vercel](https://vercel.com/)                                                                   |

---

## Getting Started

### Prerequisites

- Node.js (v18.17 or later)
- npm / yarn / pnpm / bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/zainshah3464/serenevilla.git
   cd serenevilla
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL for SEO and metadata | No | `http://localhost:3000` |
| *(None required for this demo)* | | | |

No mandatory environment variables are needed. To override the site URL, create a `.env.local` file and set `NEXT_PUBLIC_SITE_URL`.

---

## Project Structure

```
serenevilla/
├── app/
│   ├── layout.tsx          # Root layout with metadata & fonts
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles & custom animations
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
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Key Components

### Hero Section
- Dynamic rotating words (GSAP + SplitType).
- Parallax and mouse movement interactions.
- CTA buttons with magnetic hover.

### Rooms Section
- Desktop: horizontal scroll with progress indicator.
- Mobile: swipeable cards with snap.
- Each room card has image, title, and details.

### Gallery Section
- Grid of images with hover zoom.
- Lightbox modal with keyboard navigation.

### Testimonials Section
- Auto‑rotating carousel with swipe gestures.
- Star ratings, avatars, and customer feedback.

### Custom Cursor
- Dot follows instantly; ring follows with lerp.
- Magnetic effect on interactive elements.
- Disabled on touch devices.

### Preloader
- Progress percentage with smooth counting.
- Letter‑by‑letter logo entrance.
- Curtain‑style exit.

---

## How It Works

### Animation Pipeline
1. **Lenis** creates smooth scroll, synced with GSAP via `gsap.ticker`.
2. **GSAP ScrollTrigger** listens to Lenis scroll events.
3. **SplitType** splits text into characters/lines for staggered reveals.
4. **Custom Cursor** uses its own RAF loop, idle detection, and magnetic transforms.

### Data Flow
- All content is stored locally in component files (no CMS).
- Images are loaded from Unsplash and can be replaced.

---

## Customization

- **Images:** Replace Unsplash URLs in each component with your own.
- **Colors:** Modify the primary colour `#c5a47e` in `globals.css` or Tailwind classes.
- **Fonts:** Change Google Fonts in `layout.tsx`.
- **Content:** Edit text directly in the component files.
- **Animations:** Tweak GSAP durations, delays, and easing in `useLayoutEffect` hooks.

---

## Performance Optimizations

- **Code Splitting:** Automatic by Next.js; no heavy third‑party libraries.
- **GPU Transforms:** All animations use `transform` and `opacity`.
- **RAF Cleanup:** All `requestAnimationFrame` loops cancelled on unmount.
- **Lenis + GSAP Sync:** Integrated via `gsap.ticker`.
- **Reduced Motion:** Respects `prefers-reduced-motion`.
- **Font Optimization:** `next/font` with subsetting.
- **Image Lazy Loading:** Uses `next/image` with proper sizing.

---

## Mobile Responsiveness

- Fluid typography using `clamp()`.
- Touch‑friendly buttons and interactive elements.
- Horizontal scroll replaced by swipeable cards on mobile.
- Menu and galleries collapse gracefully.
- `pointer: coarse` detection disables custom cursor on touch devices.

---

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- ARIA labels on interactive elements.
- Keyboard navigation for lightbox and carousels.
- Sufficient colour contrast and focus states.
- `prefers-reduced-motion` support.

---

## Troubleshooting

### Animations not running?
- Ensure GSAP and Lenis are properly initialised in `SmoothScroll.tsx`.
- Check console for errors.

### Images not loading?
- Verify internet connection (Unsplash images).
- Replace with local images if needed.

### Build errors?
- Delete `node_modules` and `package-lock.json`, then `npm install`.
- Use Node v18.17+.

---

## Roadmap

- [x] Preloader with progress
- [x] Custom cursor
- [x] Smooth scrolling
- [x] Horizontal rooms section
- [x] Testimonials carousel
- [ ] Add booking system integration
- [ ] Multi‑language support
- [ ] CMS for room content
- [ ] Unit and E2E testing

---

## Changelog

### v1.0.0 (Feb 2026)
- Initial release
- All animations and sections implemented
- Responsive design and SEO optimised

---

## Testing

```bash
npm run lint
npx tsc --noEmit
# No unit tests yet — planned for v2.0
```

> **Note:** `npx tsc --noEmit` runs a TypeScript type check without requiring a dedicated script.

---

## Code Style

- **ESLint** — `next lint` (Next.js default)
- **Prettier** — If you use Prettier, consider adding a `.prettierrc` with your preferred options (e.g., `{"singleQuote": true, "semi": false}`). Currently no Prettier config is included in the repository.
- **Commit Convention** — Conventional Commits (`feat:`, `fix:`, `docs:`)

---

## Deployment

### Deploy on Vercel

1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com).
3. Set framework preset to **Next.js**.
4. Deploy – no additional configuration needed.

### Deploy on Netlify

#### Option 1: Using the Next.js Plugin (Recommended)

1. Add `@netlify/plugin-nextjs` to your project:
   ```bash
   npm install -D @netlify/plugin-nextjs
   ```
2. In your `netlify.toml` (create if missing), add:
   ```toml
   [[plugins]]
   package = "@netlify/plugin-nextjs"
   ```
3. Push to GitHub and connect your repo to Netlify.
4. Netlify will automatically build and deploy your Next.js site.

#### Option 2: Static Export

1. Update `next.config.ts` to enable static export:
   ```ts
   const nextConfig = {
     output: 'export',
   };
   export default nextConfig;
   ```
2. Build the project:
   ```bash
   npm run build
   ```
3. In Netlify, set:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Deploy.

---

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## Developer

**Zain Shah**  
*Full‑Stack Developer & Software Engineer*

A passionate developer focused on creating immersive, high‑performance web experiences. This project showcases advanced front‑end techniques with animations, smooth scrolling, and luxury design.

- **Portfolio:** [zain-main-web.vercel.app](https://zain-main-web.vercel.app/)
- **GitHub:** [@zainshah3464](https://github.com/zainshah3464)
- **Instagram:** [@zainshah3464](https://www.instagram.com/zainshah3464)
- **Email:** [zainshahzs110@gmail.com](mailto:zainshahzs110@gmail.com)

---

## Support

For issues or feature requests, use [GitHub Issues](https://github.com/zainshah3464/serenevilla/issues).  
Direct contact: [Email](mailto:zainshahzs110@gmail.com)

---

## FAQ

### Q: Can I use this project for my own guesthouse?
**A:** Absolutely! Replace the placeholder content with your own and adjust the design to match your brand.

### Q: Where do the images come from?
**A:** They are from Unsplash. For production, use your own high‑quality photographs.

### Q: Is there a backend?
**A:** No, this is a front‑end only demo. No database or server‑side logic.

### Q: Does it include a booking system?
**A:** Not yet. It's a showcase of design and animation. A booking system can be added on request.

---

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Lenis Smooth Scroll](https://lenis.studiofreight.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SplitType](https://split-type.github.io/)
- [Unsplash](https://unsplash.com/) for placeholder images
- [Google Fonts](https://fonts.google.com/) for typography