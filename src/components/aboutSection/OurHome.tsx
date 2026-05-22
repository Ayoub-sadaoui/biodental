import Image from "next/image";

const OurHome = ({ pageContent }: { pageContent?: any }) => {
  const visionTitle = pageContent?.vision_title || "Notre vision";
  const visionText =
    pageContent?.vision_text ||
    "Redéfinir la dentisterie comme une expérience sereine et humaine — où les patients se sentent sincèrement pris en charge, confiants dans leur sourire et connectés à une forme plus naturelle de santé et de beauté.";
  const visionImage = pageContent?.vision_image || "/ourhome/home1.png";
  const missionTitle = pageContent?.mission_title || "Notre mission";
  const missionText =
    pageContent?.mission_text ||
    "Offrir des soins dentaires précis et naturels, entièrement axés sur la santé et le confort de nos patients — alliant expertise moderne, empathie et simplicité esthétique.";
  const missionImage = pageContent?.mission_image || "/ourhome/home2.png";

  return (
    <section className="w-full px-[20px] md:px-0 py-20 bg-[#9aae92]">
      <div className="container max-w-[1000px] mx-auto flex flex-col md:flex-row items-center md:items-center gap-[100px]">
        <div className="text-center md:text-left flex-1 flex flex-col justify-center h-[380px] order-2 md:order-1 md:justify-center md:gap-[20px]">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] leading-[60px] mb-2">
            {visionTitle}
          </h2>
          <p className="text-[#f7f7f5] font-medium text-[21px] md:text-[24px] max-w-[400px] mt-0 leading-[30px]">
            {visionText}
          </p>
        </div>

        <div className="text-center md:text-left flex-1 flex justify-end items-start order-1 md:order-2">
          <div className="w-full md:w-[480px] h-[380px] rounded-[32px] overflow-hidden">
            <Image
              src={visionImage}
              alt={visionTitle}
              width={480}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="text-center md:text-left container max-w-[1000px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-[100px] pt-[60px] md:pt-24">
        <div className="flex-1 flex justify-end items-start order-2 md:order-1">
          <div className="w-[350px] md:w-[480px] h-[380px] md:h-[380px] rounded-[32px] overflow-hidden">
            <Image
              src={missionImage}
              alt={missionTitle}
              width={480}
              height={340}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center h-[380px] order-1 md:order-2 md:gap-[20px]">
          <h2 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[50px] tracking-[-0.80px] leading-[60px] mb-2">
            {missionTitle}
          </h2>
          <p className="text-[#f7f7f5] font-medium text-[21px] md:text-[24px] max-w-[400px] mt-0 leading-[30px]">
            {missionText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurHome;
