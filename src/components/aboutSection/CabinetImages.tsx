import Image from "next/image";
const fallbackImages = [
  "/cabinet/cabinet1.png",
  "/cabinet/cabinet2.png",
  "/cabinet/cabinet3.png",
  "/cabinet/cabinet4.png",
  "/cabinet/cabinet5.png",
  "/cabinet/cabinet6.png",
  "/cabinet/cabinet7.png",
  "/cabinet/cabinet8.png",
  "/cabinet/cabinet9.png",
  "/cabinet/cabinet10.png",
  "/cabinet/cabinet11.png",
];

const CabinetImages = ({ pageContent }: { pageContent?: any }) => {
  const cabinetImages =
    Array.isArray(pageContent?.cabinet_images) &&
    pageContent.cabinet_images.length > 0
      ? pageContent.cabinet_images
      : fallbackImages;
  return (
    <div className="w-full py-0 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[40px] py-10">
        <div
          className="w-full md:col-span-2 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          style={{ marginRight: "100px" }}
        >
          <Image
            src={cabinetImages[0]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[1]}
            alt="Salle d'attente"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
        <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[2]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[3]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-2 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[4]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[5]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
        {/* Left: Images stacked vertically */}
        <div className="w-full md:col-span-2 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[6]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[7]}
            alt="Salle d'attente"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
        <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[8]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-span-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[9]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-2 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[10] || cabinetImages[9]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="w-full md:col-start-3 md:row-start-2 h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
          <Image
            src={cabinetImages[10] || cabinetImages[9]}
            alt="Cabinet appareil"
            width={600}
            height={270}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default CabinetImages;
