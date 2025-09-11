import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Leaf, Droplet, Sparkles } from "lucide-react";
import "./WhyCakdent.css";

const faqs = [
  {
    title: "Aman & Teruji",
    icon: <ShieldCheck size={22} color="#22c55e" />,
    content: "Sudah melalui uji keamanan BPOM, sehingga dapat digunakan setiap hari dengan aman.",
  },
  {
    title: "Membersihkan & Melindungi",
    icon: <Sparkles size={22} color="#3b82f6" />,
    content: "Kalsium dari cangkang telur membantu menjaga kekuatan gigi, ekstrak sirih sebagai antibakteri alami, dan peppermint menjaga kesegaran napas.",
  },
  {
    title: "Tanpa Bahan Kimia Berbahaya",
    icon: <Leaf size={22} color="#10b981" />,
    content: "Bebas fluoride & SLS, sehingga lebih lembut untuk gusi dan aman untuk semua usia.",
  },
  {
    title: "Ikut Menjaga Lingkungan",
    icon: <Droplet size={22} color="#06b6d4" />,
    content: "Setiap produk berarti limbah cangkang telur & minyak jelantah berkurang dari lingkungan kita.",
  },
];

const WhyCaktadent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const wrapperRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Tutup otomatis ketika klik di luar accordion
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="why-section" ref={wrapperRef}>
      <h2 className="why-title">
        Mengapa Memilih <span className="highlight">Caktadent?</span>
      </h2>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <button
              className="faq-button"
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-left">
                <span className="faq-icon">{faq.icon}</span>
                {faq.title}
              </div>
              <span
                className={`faq-toggle ${openIndex === index ? "open" : ""}`}
              >
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`faq-content ${openIndex === index ? "open" : ""}`}
            >
              <p>{faq.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCaktadent;
