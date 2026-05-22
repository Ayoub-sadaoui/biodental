"use client";
import CabinetImages from "./CabinetImages";
import { motion } from "framer-motion";

const Cabinet = ({ pageContent }: { pageContent?: any }) => {
  const cabinetTitle =
    pageContent?.cabinet_title || "Où le confort rencontre l'art.";

  return (
    <section className="w-full p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1050px] mx-auto">
        <motion.div
          className="w-full text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[50px] md:tracking-[-0.8px] leading-tight">
            {cabinetTitle}
          </h1>
        </motion.div>
        {/* Cabinet images */}
        <CabinetImages pageContent={pageContent} />
      </div>
    </section>
  );
};

export default Cabinet;
