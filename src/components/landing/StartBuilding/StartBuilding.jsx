import { Link } from 'react-router-dom';
import './StartBuilding.css';
import QRCodeImage from '../../../assets/qr-code.png'; // path QR Code

const StartBuilding = () => {
  return (
    <section className="start-building-section">
      <div className="start-building-container">
        {/* Card ungu + QR Code */}
        <div className="start-building-card">
          
          {/* Bagian kiri: teks + tombol */}
          <div className="left-section">
            <h2 className="start-building-title">Kontak Kami</h2>
            <p className="start-building-subtitle">
              Tanyakan bagaimana produk kami bisa membantu Anda
            </p>
            
            <a
  href="https://wa.me/6289530696926?text=Halo Caktadent!"
  target="_blank"
  rel="noopener noreferrer"
  className="start-building-button"
>
  Hubungi lebih lanjut
</a>

          </div>

          {/* Bagian kanan: QR Code */}
          <div className="start-building-qr">
            <img src={QRCodeImage} alt="QR Code" />
            <span className="qr-description">→ Langsung scan untuk join/support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartBuilding;
