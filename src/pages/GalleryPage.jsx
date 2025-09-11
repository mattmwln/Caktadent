import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import FadeContent from "../content/Animations/FadeContent/FadeContent";
import Footer from "../components/landing/Footer/Footer";

import photo1 from "../assets/galleryfoto/poto1.jpg";
import photo2 from "../assets/galleryfoto/poto1.jpg";
import photo3 from "../assets/galleryfoto/poto1.jpg";
import photo4 from "../assets/galleryfoto/poto1.jpg";
import photo5 from "../assets/galleryfoto/poto1.jpg";
import photo6 from "../assets/galleryfoto/poto1.jpg";

import "../css/showcase.css";

const GalleryPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const galleryItems = [
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent />",
      image: photo1,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo1,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo2,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo3,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo4,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo5,
    },
    {
      name: "Produk Caktadent",
      using: "Produk Caktadent ",
      image: photo6,
    },
    
  ];

  return (
    <>
      <section className="showcase-wrapper">
        <title>Gallery 🎉</title>

        <div className="showcase-header">
          <h1 className="showcase-title">Galleri Kegiatan</h1>
          <p className="showcase-subtitle">
            Kumpulan dokumentasi kegiatan, momen penting, dan aktivitas yang telah kita lakukan bersama.
          </p>
        </div>

        <FadeContent blur duration={1000} className="fade-grid">
          <div className="grid-container">
            {galleryItems.map((item) => (
              <Box
                as="a"
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="grid-item"
                key={item.url}
              >
                <img
                  className="showcase-img"
                  src={item.image}
                  alt={`Showcase website submitted by: ${item.name ? item.name : "Anonymous"}`}
                />
                <div className="showcase-info">
                  {item.name && <Text className="author">{item.name}</Text>}
                  <Text className="using"> {item.using}</Text>
                </div>
              </Box>
            ))}
          </div>
        </FadeContent>
      </section>

      <Footer />
    </>
  );
};

export default GalleryPage;
