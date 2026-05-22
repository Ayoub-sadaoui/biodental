"use client";
import Image from "next/image";
import { useElementOnScreen } from "@/hooks/useElementOnScreen";

const defaultPanels = [
  {
    kind: "video",
    src: "/video/vid-simle-2.mp4",
    poster: "/video/vid-img-2.png",
    alt: "Video 1",
  },
  { kind: "image", src: "/tesi-page/t-hero-5.png", alt: "Top right hero" },
  { kind: "image", src: "/tesi-page/t-hero-1.png", alt: "Center hero" },
  { kind: "image", src: "/tesi-page/t-hero-4.png", alt: "Bottom left hero" },
  {
    kind: "video",
    src: "/video/vid-smile-1.mp4",
    poster: "/video/vid-img-1.png",
    alt: "Video 2",
  },
];

const MoreImagesSection = ({ pageContent }: { pageContent?: any }) => {
  const video1 = useElementOnScreen({ threshold: 0.5 });
  const video2 = useElementOnScreen({ threshold: 0.5 });
  const panels =
    Array.isArray(pageContent?.more_panels) &&
    pageContent.more_panels.length > 0
      ? pageContent.more_panels
      : defaultPanels;

  const renderPanel = (
    panel: any,
    imageProps?: { priority?: boolean },
    videoRef?: any,
  ) => {
    if (panel.kind === "video") {
      return (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          playsInline
          muted
          loop
          poster={panel.poster || "/video/vid-img-2.png"}
        >
          <source src={panel.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <Image
        src={panel.src}
        alt={panel.alt || "Media"}
        width={600}
        height={270}
        className="object-cover w-full h-full"
        priority={imageProps?.priority}
      />
    );
  };

  return (
    <section className="w-full py-[24px] px-[34px] md:p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1100px] mx-auto">
        <div className="w-full text-center ">
          <h1 className="font-playfair-important  font-bold text-[#2b3029] text-[34px] md:text-[2.6rem] md:tracking-[-0.8px] leading-tight">
            {pageContent?.more_title || "Et plus…"}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
          {/* Left: Video */}
          <div
            ref={video1.containerRef}
            className="w-full md:col-span-2 h-fit  md:h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
            style={{ marginRight: "100px" }}
          >
            {renderPanel(panels[0], undefined, video1.videoRef)}
          </div>
          <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            {renderPanel(panels[1], { priority: true })}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
          <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            {renderPanel(panels[2], { priority: true })}
          </div>
          <div className="w-full md:col-span-2 h-fit  md:h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            {renderPanel(panels[3], { priority: true })}
          </div>
          <div
            ref={video2.containerRef}
            className="w-full md:col-span-2  h-fit  md:h-[300px] rounded-[32px]  overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          >
            {renderPanel(panels[4], undefined, video2.videoRef)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreImagesSection;
