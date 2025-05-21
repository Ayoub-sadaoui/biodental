"use client";
import React from "react";
import BeforeAfterSlider from "./CustomBeforeAfterSlider";
import "react-before-after-slider-component/dist/build.css";
import { motion } from "framer-motion";
import "./CustomBeforeAfterSlider.scss";

const beforeAfterPairs = [
  {
    before: "/before-after/before 1.png",
    after: "/before-after/after 1.png",
  },
  {
    before: "/before-after/before 2.png",
    after: "/before-after/after 2.png",
  },
  {
    before: "/before-after/before 3.png",
    after: "/before-after/after 3.png",
  },
  {
    before: "/before-after/before 4.png",
    after: "/before-after/after 4.png",
  },
  {
    before: "/before-after/before 5.png",
    after: "/before-after/after 5.png",
  },
  {
    before: "/before-after/before 6.jpeg",
    after: "/before-after/after 6.jpeg",
  },
  {
    before: "/before-after/before 7.jpeg",
    after: "/before-after/after 7.jpeg",
  },
];

// CSS to ensure consistent image display
const customStyles = `
  .before-after-slider, 
  .before-after-slider__first-photo-container, 
  .before-after-slider__second-photo-container {
    height: 100% !important;
  }
  
  .image-container {
    aspect-ratio: 4/3;
    height: auto !important;
    max-height: 180px;
  }
`;

const GallerySection = () => (
  <section
    className="w-full py-12 px-[50px] md:px-0"
    style={{ background: "#9AAF94" }}
  >
    <style dangerouslySetInnerHTML={{ __html: customStyles }} />
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, type: "spring" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2
        className="max-w-2xl mx-auto mb-12 font-playfair-important text-[#2b3029] font-black text-4xl md:text-5xl text-center tracking-tight animate__animated animate__fadeInUp"
        style={{ fontWeight: 900 }}
      >
        Voir nos patients heureux
      </h2>
    </motion.div>
    <div
      className="mx-auto grid gap-4 md:gap-x-[100px] md:gap-y-[50px] w-full md:w-[83vw]"
      style={{
        maxWidth: 1150,
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      }}
    >
      {beforeAfterPairs.map((pair, idx) => (
        <div
          key={idx}
          className="w-full image-container rounded-xl overflow-hidden"
          style={{ height: "180px" }}
        >
          <BeforeAfterSlider
            firstImage={{ imageUrl: pair.before, alt: "Avant" }}
            secondImage={{ imageUrl: pair.after, alt: "Après" }}
            className="w-full h-full custom-delimiter-icon"
            delimiterIconStyles={{
              width: 56,
              height: 56,
              backgroundColor: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(255,255,255,0.24)",
              borderRadius: "50%",
              position: "relative",
              boxShadow: "0 0 8px 2px rgba(0,0,0,0.10)",
            }}
          />
        </div>
      ))}
    </div>
  </section>
);

export default GallerySection;
