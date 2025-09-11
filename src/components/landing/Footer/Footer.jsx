import FadeContent from '../../../content/Animations/FadeContent/FadeContent';
import LogoImg from '../../../assets/logo1.svg';
import {
  AiFillHeart,
  AiOutlineWhatsApp,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineShop
} from 'react-icons/ai';
import { SiShopee } from 'react-icons/si';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FadeContent blur duration={600}>
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-left">
            <img src={LogoImg} alt="Logo " className="footer-logo" />
            <p className="footer-description">
             Senyum Sehat dari Limbah yang Bermakna<AiFillHeart className="footer-heart" /> {' '}
            </p>
        
            <p className="footer-copyright">© {new Date().getFullYear()} Caktadent</p>
          </div>

          <div className="footer-right">
  <div className="footer-links">
    <a
  href="#"
  className="footer-link"
  onClick={(e) => {
    e.preventDefault(); // mencegah reload
    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll ke atas smooth
  }}
>
  Home
</a>
    <a href="about"  rel="noopener noreferrer" className="footer-link">
      About
    </a>
    <Link to="/achievements" className="footer-link">
     Achievements
    </Link>
    <Link to="/gallery" className="footer-link">
      Gallery
    </Link>
  </div>

  <div className="footer-socials">
    <a href="https://wa.me/6289530696926" target="_blank" rel="noopener noreferrer" className="footer-icon">
  <AiOutlineWhatsApp />
</a>
    <a href="https://www.instagram.com/caktadent.id/" target="_blank" rel="noopener noreferrer" className="footer-icon">
      <AiOutlineInstagram />
    </a>
    <a href="mailto:caktadent.id@gmail.com" className="footer-icon">
      <AiOutlineMail />
    </a>
    <a href=" https://id.shp.ee/a6UdvFx " target="_blank" rel="noopener noreferrer" className="footer-icon">
      <SiShopee />
    </a>
    <a href="https://www.tokopedia.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
      <AiOutlineShop />
    </a>
  </div>
</div>

        </div>
      </footer>
    </FadeContent>
  );
};

export default Footer;
