import { useEffect, useState } from 'react';
import Footer from '../components/landing/Footer/Footer';
import OurMilestones from '../components/achievements/OurMilestones/OurMilestones';
import Impacts from '../components/achievements/Impacts/Impacts';
import ImpactStats from '../components/achievements/ImpactStats/ImpactStats';

const AchievementsPage = () => {
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
    document.title = "Achievement Caktadent";
  }, []);

  return (
    <section className="wrapper">
      <OurMilestones />
      <Impacts />
      <ImpactStats />
      <Footer />
    </section>
  );
};

export default AchievementsPage;
