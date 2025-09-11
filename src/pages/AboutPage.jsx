import { useEffect, useState } from 'react';
import Footer from '../components/landing/Footer/Footer';
import TentangKami from '../components/about/TentangKami/TentangKami';
import VisiMisi from '../components/about/VisiMisi/VisiMisi';
import WhyCaktadent from '../components/landing/WhyCakdent/WhyCakdent';

const AboutPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // ✅ set title di sini
  useEffect(() => {
    document.title = "Tentang Kami - Senyum Sehat dari Limbah yang Bermakna";
  }, []);

  return (
    <section className="wrapper">
      <TentangKami />
      <VisiMisi />
      <WhyCaktadent />
      <Footer />
    </section>
  );
};

export default AboutPage;
