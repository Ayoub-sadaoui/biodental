"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { motion } from "framer-motion";
import { extractPlainText, resolveImage } from "../../lib/cmsHelpers";
import "../../styles/scrollbar.css";

export const AboutSec = ({
  homepage,
  pageContent,
}: {
  homepage?: any;
  pageContent?: any;
}) => {
  const data = pageContent || homepage?.data || {};
  const aboutTitle = data.about_title || "Derrière chaque sourire confiant";
  const aboutImage = resolveImage(data.about_image, "/image-7.png");
  const aboutCopy =
    extractPlainText(data.about_text) ||
    "Chez BioDental, nous pensons que la grande dentisterie commence par l'écoute. Depuis l'obtention de mon diplôme en 2019 à Annaba, j'ai poursuivi une formation avancée en petite chirurgie, en endodontie mécanisée et en implantologie — mais ce qui définit véritablement mon travail, c'est le lien humain derrière chaque cas.";

  return (
    <section className="w-full py-20 bg-[#9aae92] px-8 md:px-8 lg:px-0">
      <motion.div
        className="container flex flex-col md:flex-row items-start gap-[50px] max-w-[1000px] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="relative w-full md:w-[358px] h-[440px] rounded-[1000px_1000px_8px_8px] bg-cover bg-center order-2 md:order-1"
          style={{ backgroundImage: `url(${aboutImage})` }}
        />

        <div className="flex flex-col w-full md:w-[592px] items-start gap-[34px] order-1 md:order-2">
          <div className="w-full ">
            <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] text-center md:text-left leading-[60px]">
              {aboutTitle}
            </h2>
          </div>

          <Card className="w-full bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6 hidden md:block">
              <div
                className="space-y-1 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-2 md:pr-4"
                style={{ scrollbarGutter: "stable" }}
              >
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)] whitespace-pre-line">
                  {aboutCopy}
                </p>
              </div>
            </CardContent>
            <CardContent className="p-0 space-y-6 block md:hidden">
              <div
                className="space-y-1 max-h-[200px] md:max-h-[300px] overflow-y-auto pr-2 md:pr-4"
                style={{ scrollbarGutter: "stable" }}
              >
                <p className="text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)] whitespace-pre-line">
                  {aboutCopy}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
