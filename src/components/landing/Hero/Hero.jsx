import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SplitText from '../../../content/TextAnimations/SplitText/SplitText';
import landingBlur from '../../../assets/svg/landing-blur.svg';
import { GoArrowRight } from 'react-icons/go';
import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import logoImage from '../../../assets/logo.svg'; 

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? <span className={rest.className}>{text}</span> : <SplitText text={text} {...rest} />;

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="landing-content">
      

      <div className="hero-main-content">
 <h1 className="landing-title">
          <img 
            src={logoImage} 
            alt="Cangkang Ranjungan Jelantah Dental" 
            className="hero-logo-img" 
          />
        </h1>
        <h1 className="landing-title">
          <ResponsiveSplitText
            isMobile={isMobile}
            text="Senyum Sehat dari"
            className="hero-split"
            splitType="chars"
            delay={30}
            duration={2}
            ease="elastic.out(0.5, 0.3)"
          />
          <br />
          <ResponsiveSplitText
            isMobile={isMobile}
            text="Limbah yang Bermakna"
            className="hero-split"
            splitType="chars"
            delay={30}
            duration={2}
            ease="elastic.out(0.5, 0.3)"
          />
        </h1>

        

        <Link to={'/text-animations/split-text'} className="landing-button">
          <span>Organic Extract</span>
          <div className="button-arrow-circle">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="#4c1d95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

