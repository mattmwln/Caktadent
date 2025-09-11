import { useState, useEffect, useRef } from "react";
import CountUp from "../../../content/TextAnimations/CountUp/CountUp";
import "./Impact.css";

const ImpactCard = ({ number, suffix = "", title, desc, isMobile }) => {
  return (
    <div className="impact-card">
      <h2>
        {isMobile ? number + suffix : <CountUp to={number} />} 
      </h2>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Impact = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="impact-section">
      <h1>Our Impacts</h1>
      <div className="impact-grid">
        <ImpactCard
          number={90}
          suffix="kg"
          title="Cangkang telur"
          desc="Berhasil diolah menjadi bahan bermanfaat."
          isMobile={isMobile}
        />
        <ImpactCard
          number={370}
          suffix="L"
          title="Minyak jelantah"
          desc="Diolah kembali, mengurangi pencemaran lingkungan."
          isMobile={isMobile}
        />
        <ImpactCard
          number={30}
          suffix="+"
          title="Keluarga lokal"
          desc="Ikut serta dalam pengumpulan limbah rumah tangga."
          isMobile={isMobile}
        />
        <ImpactCard
          number={350}
          suffix="+"
          title="Senyum sehat"
          desc="Terjaga lewat penggunaan Caktadent."
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default Impact;
