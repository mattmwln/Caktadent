import './TentangKami.css';
import SplitText from '../../../content/TextAnimations/SplitText/SplitText'; 
import tentangImage from '../../../assets/logo.svg'; // ganti sesuai lokasi logo

const ResponsiveSplitText = ({ isMobile, text, ...rest }) =>
  isMobile ? <span className={rest.className}>{text}</span> : <SplitText text={text} {...rest} />;

const TentangKami = () => {
  return (
    <section className="tentang-section">
      <div className="tentang-container">
        <div className="tentang-card">
          
          {/* Kiri: teks */}
          <div className="tentang-left">
            <h2 className="tentang-title">
              <ResponsiveSplitText text="Tentang Kami" direction="left" />
            </h2>
            <p className="tentang-desc">
              Caktadent lahir dari mimpi sederhana: bagaimana limbah bisa menjadi berkah. Kami menghadirkan inovasi pasta gigi ramah lingkungan berbahan dasar cangkang telur dan minyak jelantah, dua limbah rumah tangga yang sering terabaikan, namun kaya manfaat bila diolah dengan benar.
            </p>
            <p className="tentang-desc">
              Caktadent tidak hanya berfokus pada produk, tetapi juga pada pemberdayaan masyarakat. Kami melibatkan ibu-ibu PKK di Muara Enim sebagai tenaga kerja utama dalam proses produksi, sekaligus membuka ruang bagi anak muda lokal untuk berkontribusi dalam pengembangan teknologi dan paten produk.
            </p>
          </div>

          {/* Kanan: logo */}
          <div className="tentang-right">
            <img src={tentangImage} alt="Logo Caktadent" className="tentang-logo" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TentangKami;
