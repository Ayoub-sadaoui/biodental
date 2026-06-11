"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const defaultPanels = [
  {
    kind: "video",
    src: "/uploads/video/vid-simle-2.mp4",
    poster: "/uploads/video/vid-img-2.png",
    alt: "Video 1",
  },
  { kind: "image", src: "/uploads/tesi-page/t-hero-5.png", alt: "Top right hero" },
  { kind: "image", src: "/uploads/tesi-page/t-hero-1.png", alt: "Center hero" },
  { kind: "image", src: "/uploads/tesi-page/t-hero-4.png", alt: "Bottom left hero" },
  {
    kind: "video",
    src: "/uploads/video/vid-smile-1.mp4",
    poster: "/uploads/video/vid-img-1.png",
    alt: "Video 2",
  },
];

const VideoPanel = ({ panel, videoRef }: { panel: any; videoRef?: any }) => {
  if (!panel?.src) {
    return <div className="w-full h-full bg-gray-200" />;
  }
  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      playsInline
      muted
      loop
      poster={panel.poster || "/uploads/video/vid-img-2.png"}
    >
      <source src={panel.src} type="video/mp4" />
    </video>
  );
};

const ImagePanel = ({ panel, priority }: { panel: any; priority?: boolean }) => {
  if (!panel?.src) {
    return <div className="w-full h-full bg-gray-200" />;
  }
  return (
    <Image
      src={panel.src}
      alt={panel.alt || "Media"}
      width={600}
      height={270}
      className="object-cover w-full h-full"
      priority={priority}
    />
  );
};

const MoreImagesSection = ({ pageContent }: { pageContent?: any }) => {
  const panels =
    Array.isArray(pageContent?.more_panels) &&
    pageContent.more_panels.length > 0
      ? pageContent.more_panels
      : defaultPanels;

  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = containerRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            const video = videoRefs.current[index];
            if (video) {
              video.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    containerRefs.current.forEach((container) => {
      if (container) observer.observe(container);
    });

    return () => observer.disconnect();
  }, [panels]);

  const renderVideo = (panel: any, index: number) => (
    <div
      ref={(el) => { containerRefs.current[index] = el; }}
      className="w-full h-full"
    >
      <VideoPanel panel={panel} videoRef={(el: any) => { videoRefs.current[index] = el; }} />
    </div>
  );

  const panelsToRender = panels.slice(5);
  const hasExtra = panelsToRender.length > 0;

  return (
    <section className="w-full py-[24px] px-[34px] md:p-[20px] md:py-20 bg-[#9aae92]">
      <div className="max-w-[1100px] mx-auto">
        <div className="w-full text-center">
          <h1 className="font-playfair-important font-bold text-[#2b3029] text-[34px] md:text-[2.6rem] md:tracking-[-0.8px] leading-tight">
            {pageContent?.more_title || "Et plus…"}
          </h1>
        </div>

        {/* Original 5-item layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 w-full gap-[50px] py-10">
          <div
            ref={(el) => { containerRefs.current[0] = el; }}
            className="w-full md:col-span-2 h-fit md:h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
            style={{ marginRight: "100px" }}
          >
            {panels[0]?.kind === "video"
              ? renderVideo(panels[0], 0)
              : <ImagePanel panel={panels[0]} priority />}
          </div>
          <div className="w-full md:col-start-3 h-[420px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            {panels[1]?.kind === "video"
              ? renderVideo(panels[1], 1)
              : <ImagePanel panel={panels[1]} priority />}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-12">
          <div className="w-full h-[630px] md:row-span-2 rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md">
            {panels[2]?.kind === "video"
              ? renderVideo(panels[2], 2)
              : <ImagePanel panel={panels[2]} priority />}
          </div>
          <div
            ref={(el) => { containerRefs.current[3] = el; }}
            className="w-full md:col-span-2 h-fit md:h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          >
            {panels[3]?.kind === "video"
              ? renderVideo(panels[3], 3)
              : <ImagePanel panel={panels[3]} priority />}
          </div>
          <div
            ref={(el) => { containerRefs.current[4] = el; }}
            className="w-full md:col-span-2 h-fit md:h-[300px] rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md"
          >
            {panels[4]?.kind === "video"
              ? renderVideo(panels[4], 4)
              : <ImagePanel panel={panels[4]} priority />}
          </div>
        </div>

        {/* Extra panels beyond the first 5 */}
        {hasExtra && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] pt-10">
            {panelsToRender.map((panel: any, i: number) => {
              const index = i + 5;
              return (
                <div
                  key={index}
                  ref={(el) => { containerRefs.current[index] = el; }}
                  className={`rounded-[32px] overflow-hidden bg-[#F7F7F5]/10 shadow-md aspect-[4/3] ${
                    panel.kind === "video" ? "md:col-span-2" : ""
                  }`}
                >
                  {panel.kind === "video"
                    ? renderVideo(panel, index)
                    : <ImagePanel panel={panel} />}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default MoreImagesSection;
