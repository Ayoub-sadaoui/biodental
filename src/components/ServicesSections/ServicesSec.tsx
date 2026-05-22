"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { extractPlainText, resolveImage } from "@/lib/cmsHelpers";

const fallbackSections = [
  {
    title: "Préservation des dents",
    description:
      "Chez BioDental, notre approche de la préservation dentaire met l'accent sur le maintien de la santé et de la fonctionnalité de vos dents naturelles.",
    image: "/services/services1.png",
  },
  {
    title: "Implants dentaires",
    description:
      "Les implants dentaires offrent une solution durable et esthétique pour remplacer les dents manquantes.",
    image: "/services/services2.png",
  },
  {
    title: "Prothèses dentaires fixes",
    description:
      "Nos prothèses dentaires fixes, y compris les couronnes et les bridges, sont conçues pour restaurer la solidité et l'apparence des dents endommagées ou manquantes.",
    image: "/services/services3.png",
  },
  {
    title: "Chirurgie orale et pathologie",
    description:
      "BioDental offre des services complets de chirurgie et de pathologie buccales pour traiter les affections dentaires complexes.",
    image: "/services/services4.png",
  },
  {
    title: "ODF orthodontique",
    description:
      "Nos services d'orthodontie visent à corriger les malocclusions dentaires et des mâchoires, améliorant ainsi la fonction et l'apparence.",
    image: "/services/services5.png",
  },
  {
    title: "Denisterie esthétique",
    description:
      "Chez BioDental, nos soins esthétiques subliment votre sourire : blanchiment, facettes, collage, remodelage gingival...",
    image: "/services/services6.png",
  },
];

const ServicesSec = ({
  services,
  settings,
}: {
  services?: any[];
  settings?: any;
}) => {
  const dynamicSections =
    Array.isArray(services) && services.length > 0
      ? services.map((service: any, index: number) => ({
          title:
            extractPlainText(service?.data?.title) || `Service ${index + 1}`,
          description: extractPlainText(service?.data?.description) || "",
          image: resolveImage(
            service?.data?.image,
            fallbackSections[index % fallbackSections.length].image,
          ),
        }))
      : fallbackSections;

  return (
    <section className="max-w-[1000px] mx-auto bg-transparent px-[20px] md:px-0 py-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, type: "spring" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-[2.5rem] md:text-[2.8rem] font-bold font-playfair-important text-[#243520] mb-8 text-center">
          {settings?.data?.services_page_title || "Nos services complets .."}
        </h2>
      </motion.div>
      <div className="flex flex-col gap-16 w-full">
        {dynamicSections.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={`${service.title}-${index}`}
              className="rounded-xl border-[3px] border-[#F7F7F5] max-w-[95vw] w-full flex flex-col md:flex-row p-[32px] md:p-8 gap-8 shadow-md"
            >
              <div
                className={`flex-1 flex justify-center items-center min-w-full md:min-w-[320px] ${isEven ? "md:order-2" : "md:order-1"}`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-3xl object-cover w-full h-[250px] md:h-[370px] max-w-full"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <div
                className={`flex-1 ${isEven ? "md:order-1 md:px-8" : "md:px-0 md:pr-8"}`}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#243520] mb-5">
                  {index + 1}. {service.title}
                </h3>
                <p className="text-base md:text-lg text-[#F7F7F5] font-normal leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ServicesSec;
