import React from 'react';
import GlassIcons from '../../../content/Components/GlassIcons/GlassIcons';
import { FiTarget } from 'react-icons/fi';
import '../../../content/Components/GlassIcons/GlassIcons.css';
import './VisiMisi.css';
import SpotlightCard from '../../../content/Components/SpotlightCard/SpotlightCard'; // sesuaikan path

const VisiMisi = () => {
  const misiList = [
    'Menghadirkan produk pasta gigi berkualitas dari bahan alami dan daur ulang limbah.',
    'Memberdayakan masyarakat lokal, khususnya ibu rumah tangga dan pemuda, dalam proses produksi & inovasi.',
    'Membawa dampak nyata dalam mengurangi limbah rumah tangga serta meningkatkan kesadaran hidup berkelanjutan.',
  ];

  return (
    <div className="visi-misi-container">
      <h1>Visi & Misi</h1>

      <div className="visi-misi-layout">
        {/* Visi */}
        <SpotlightCard spotlightColor="rgba(99, 102, 241, 0.2)" className="visi-section">
          <div className="text">
            <h2>Visi</h2>
            <p>
              Menjadi pionir produk perawatan gigi berbahan ramah lingkungan di Indonesia,
              dan menciptakan ekosistem usaha yang menguntungkan bagi manusia dan bumi
            </p>
          </div>
        </SpotlightCard>

        {/* Misi */}
        <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.15)" className="misi-section">
          <h2>Misi</h2>
          <ol className="misi-list">
            {misiList.map((misi, index) => (
              <li key={index} className="misi-item">
                <span className={`misi-number misi-number-${index + 1}`}>{index + 1}</span>
                {misi}
              </li>
            ))}
          </ol>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default VisiMisi;
