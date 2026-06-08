import * as React from "react";
import { extractPlainText } from "../../../lib/cmsHelpers";
import { Card, CardContent } from "../../ui/card";
import { motion } from "framer-motion";

import { RiArrowRightSFill as ArrowIcon } from "react-icons/ri";

export const Services = ({
  homepage,
  services,
}: {
  homepage?: any;
  services?: any[];
}) => {
  const data = homepage?.data || {};

  const toText = (value: any, fallback = "") => {
    if (!value) return fallback;
    // Handle Tina rich-text AST root
    if (typeof value === "object" && value.type === "root") {
      return extractPlainText(value) || fallback;
    }
    if (Array.isArray(value)) {
      return (
        value
          .map((block: any) => block?.text)
          .filter(Boolean)
          .join(" ") || fallback
      );
    }
    return value || fallback;
  };

  const fallbackTopRowServices = [
    {
      id: 1,
      title: "Préservation dentaire",
      description:
        "Des traitements doux pour réparer et protéger vos dents naturelles.",
      image: "/uploads/image-3.png",
      cta_label: "More",
    },
    {
      id: 2,
      title: "Implants dentaires",
      description: "Permanent solutions to remplacer les dents manquantes.",
      image: "/uploads/image-4.png",
      cta_label: "More",
    },
    {
      id: 3,
      title: "Prothèses dentaires",
      description:
        "Couronnes et bridges personnalisés : durabilité et esthétique naturelle.",
      image: "/uploads/image-5.png",
      cta_label: "More",
    },
  ];

  const fallbackBottomRowServices = [
    {
      id: 4,
      title: "Chirurgie orale et",
      description: "Soins spécialisés pour problèmes dentaires complexes.",
      image: "/uploads/image.png",
      cta_label: "More",
    },
    {
      id: 5,
      title: "Orthodontie (ODF)",
      description:
        "Alignez les dents et les mâchoires pour un sourire plus sain et plus confiant.",
      image: "/uploads/image-1.png",
      cta_label: "More",
    },
    {
      id: 6,
      title: "Dentisterie esthétique",
      description:
        "Améliorer l'apparence de vos dents pour un sourire rayonnant.",
      image: "/uploads/image-2.png",
      cta_label: "More",
    },
  ];

  const mappedServices =
    Array.isArray(services) && services.length > 0
      ? services.map((service: any, index: number) => ({
          id: index + 1,
          title: toText(service.data?.title, `Service ${index + 1}`),
          description: toText(service.data?.description, ""),
          image:
            service.data?.image?.url ||
            fallbackTopRowServices[index % 6]?.image ||
            "/uploads/image-3.png",
          price: toText(service.data?.price, ""),
          cta_label: service.data?.cta_label || "More",
        }))
      : [...fallbackTopRowServices, ...fallbackBottomRowServices];

  const topRowServices = mappedServices.slice(0, 3);
  const bottomRowServices = mappedServices.slice(3, 6);

  return (
    <section className="w-full py-16 px-[24px] bg-[#9aae92] ">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16 relative">
          <div className="flex flex-col items-center mb-0  md:mb-16 relative w-fit ">
            <div className="text-[34px] md:text-[50px] tracking-[-0.80px] leading-[40px] font-black text-[#2b3029] font-playfair-important text-center relative px-6">
              {data.services_title || (
                <>
                  Que faisons-nous pour prendre soin
                  <br />
                  de votre sourire?
                </>
              )}
            </div>
            <div
              className="w-[30px] md:w-[57px] h-[30px] md:h-[57px] absolute right-[33px] md:right-[-40px] -top-0 md:top-[-10px] rotate-y-180 bg-cover"
              style={{ backgroundImage: "url(/uploads/image-6.png)" }}
            />
          </div>
        </div>

        {/* Top row of services */}
        <div className="flex flex-wrap justify-center gap-[60px] mb-16">
          {topRowServices.map((service) => (
            <Card
              key={service.id}
              className="w-[350px] md:w-[293px] h-[450px] border-4 border-solid border-[#f7f7f5] rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[350px] md:w-[269px] h-[250px] mx-2 mt-2 object-cover rounded-lg"
              />
              <CardContent className="p-3  px-[12px]">
                <div className="mb-3">
                  <h3 className="text-[24px] tracking-[-0.80px] leading-[33.6px] font-semibold text-[#2b3029] ">
                    {service.title}
                  </h3>
                </div>
                <div className="mb-3">
                  <p className="text-[17.3px] tracking-[0.18px] leading-[25.2px] font-normal text-[#f7f7f5]">
                    {service.description}
                  </p>
                </div>

                <div className="flex justify-end px-2">
                  <a
                    className="flex justify-center items-center text-[#243520] hover:#000 gap-1 font-playfair-important"
                    href="/services"
                  >
                    <span className="text-[19px] tracking-[0.19px] leading-[26.6px] font-normal ">
                      {service.cta_label || "More"}
                    </span>
                    <ArrowIcon className="w-[18px]  mt-1 mr-2 " />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom row of services */}
        <div className="flex flex-wrap justify-center gap-[60px]">
          {bottomRowServices.map((service) => (
            <Card
              key={service.id}
              className="w-[350px] md:w-[293px] h-[450px] border-4 border-solid border-[#f7f7f5] rounded-lg overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-[350px] md:w-[269px] h-[250px] mx-2 mt-2 object-cover rounded-lg"
              />
              <CardContent className="p-3 px-[12px] ">
                <div className="mb-3">
                  <h3 className="text-[26px] tracking-[-0.80px] leading-[33.6px] font-semibold text-[#2b3029]">
                    {service.title}
                  </h3>
                </div>
                <div className="mb-3 ">
                  <p className="text-[17.3px] tracking-[0.18px] leading-[25.2px] font-normal text-[#f7f7f5]">
                    {service.description}
                  </p>
                </div>
                <div className="flex justify-end px-2">
                  <a
                    className="flex justify-center items-center text-[#243520] hover:text-[#000] gap-1 font-playfair-important "
                    href="/services"
                  >
                    <span className="text-[19px] tracking-[0.19px] leading-[26.6px] font-normal ">
                      {service.cta_label || "More"}
                    </span>
                    <ArrowIcon className="w-[18px]  mt-1 mr-2 " />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
