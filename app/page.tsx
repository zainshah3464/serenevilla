// app/page.tsx
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Amenities from '@/components/Amenities';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Preloader />
            <CustomCursor />
            <ScrollProgress />
            <SmoothScroll />
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <About />
                <Rooms />
                <Amenities />
                <Gallery />
                <Testimonials />
            </main>
            <Footer />
        </>
    );
}