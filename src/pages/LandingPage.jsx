import { useEffect, useState } from 'react';
import FeatureCards from '../components/landing/FeatureCards/FeatureCards';
import Testimonials from '../components/landing/Testimonials/Testimonials';
import StartBuilding from '../components/landing/StartBuilding/StartBuilding';
import Announcement from '../components/common/Misc/Announcement';
import Footer from '../components/landing/Footer/Footer';
import Hero from '../components/landing/Hero/Hero';
import heroImage from '../assets/common/hero.webp';
import WhyCaktadent from '../components/landing/WhyCakdent/WhyCakdent';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <section className="landing-wrapper">
      <title>Caktadent - Senyum Sehat dari Limbah yang Bermakna</title>

      <Announcement />
      <Hero />
      <FeatureCards />
      <Testimonials />
      <WhyCaktadent />
      <StartBuilding />
      <Footer />
    </section>
  );
};

export default LandingPage;
