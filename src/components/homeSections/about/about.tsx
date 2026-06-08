"use client";
import React from "react";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import "animate.css";

import { extractPlainText, resolveImage } from "../../../lib/cmsHelpers";

export const About = ({ homepage }: { homepage?: any }) => {
  const data = homepage?.data || {};
  const aboutTitle = data.about_title || "Derrière chaque sourire confiant";
  const aboutCopy = extractPlainText(data.about_text);
  const aboutImage = resolveImage(data.about_image, "/uploads/image-7.png");

  return (
    <section className="w-full py-20 bg-[#9aae92] px-8 md:px-8 lg:px-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
        className="container flex flex-col md:flex-row items-start gap-[50px] max-w-[1000px] mx-auto"
      >
        <div className="relative w-full md:w-[358px] mt-[20px] min-h-[440px] item-end h-full rounded-[1000px_1000px_8px_8px] bg-cover order-2 md:order-1">
          <Image
            src={aboutImage}
            alt="about"
            fill
            className="object-cover rounded-[1000px_1000px_8px_8px]   "
          />
        </div>

        <div className="flex flex-col w-full md:w-[592px] items-start gap-[34px] order-1 md:order-2">
          <div className="w-full ">
            <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] text-center md:text-left">
              {aboutTitle}
            </h2>
          </div>

          <Card className="w-full bg-transparent border-none shadow-none">
            <CardContent className="p-0 space-y-6 hidden md:block">
              <div className="space-y-1 text-[#f7f7f5] text-[17.3px] tracking-[0.03px] leading-[25.2px] font-[var(--font-manrope)]">
                {aboutCopy}
              </div>
            </CardContent>
            <CardContent className="p-0 space-y-6  block md:hidden">
              <div className="text-[#f7f7f5] text-[16px] tracking-[0.18px] leading-[25.2px]">
                {aboutCopy}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
