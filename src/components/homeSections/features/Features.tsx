"use client";
import Health from "@/components/ui/animatedIcons/Health";
import { Card, CardContent } from "../../ui/card";
import Flower2 from "@/components/ui/animatedIcons/Flower2";
import Dentist from "@/components/ui/animatedIcons/dentist";
import Yoga from "@/components/ui/animatedIcons/yoga";

export const Features = ({ issevice }: { issevice?: boolean }) => {
  // Define card data for mapping
  const featureCards = [
    {
      id: 1,
      title: "Priorité au patient.",
      description: [
        "BioDental : Votre bien-être avant tout. ",
        "Traitements personnalisés, pas",
        "commerciaux",
      ],
      borderColor: "border-[#9aae92]",
      lottieIcon: <Health />,
    },
    {
      id: 2,
      title: "Dentisterie naturelle",
      description: [
        "Nous utilisons des matériaux et des",
        "techniques biocompatibles qui",
        "s'alignent avec les processus",
      ],
      borderColor: "border-[#243520]",
      lottieIcon: <Flower2 />,
    },
    {
      id: 3,
      title: "Technologie avancée",
      description: [
        "Nous utilisons une technologie dentaire",
        "de pointe pour fournir des traitements",
        "précis et efficaces.",
      ],
      borderColor: "border-[#9aae92]",
      lottieIcon: <Dentist />,
    },
    {
      id: 4,
      title: "Dentisterie sans anxiété",
      description: [
        "votre bien-être prime sur les intérêts",
        "commerciaux, garantissant des",
        "traitements adaptés à vos besoins",
      ],
      borderColor: "border-[#9aae92]",
      lottieIcon: <Yoga />,
    },
  ];

  return (
    <section
      className={`w-full py-20 bg-[#f7f7f5] px-[30px] md:px-[30px] lg:px-0 ${issevice ? "pt-32" : ""}`}
    >
      <div className="container mx-auto max-w-6xl ">
        <h2 className="text-center font-playfair-important  text-[34px] md:text-[50px] font-bold text-[#2b3029] tracking-[-0.80px] leading-[60px] mb-12 font-serif">
          Pourquoi choisir Biodental?
        </h2>

        <div className="flex flex-col  justify-center gap-8 w-full md:max-w-[480px] mx-auto">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className={`rounded-xl overflow-hidden border-2 ${card.borderColor} shadow-none`}
            >
              <CardContent className="pt-[16px] pb-[24px] md:py-[20px]  px-[24px]  md:px-[16px]">
                <div className="flex items-center gap-4">
                  <div className=" flex items-center max-w-[100px] ">
                    {card.lottieIcon}
                  </div>
                  <div className="flex flex-col gap-4 md:gap-6 w-full">
                    <h3 className="text-[#243520] text-[28px] leading-[33.6px] font-normal ">
                      {card.title}
                    </h3>
                    <div className="flex flex-col">
                      {card.description.map((line, i) => (
                        <p
                          key={i}
                          className="font-normal text-[#2b3029] text-[16px] md:text-[17.3px] md:tracking-[0.18px] md:leading-[25.2px] "
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
