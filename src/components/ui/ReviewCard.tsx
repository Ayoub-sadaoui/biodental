import * as React from "react";
import { extractPlainText } from "@/lib/cmsHelpers";

interface ReviewCardProps {
  avatar: string; // Initial or image URL
  name: string;
  rating: number;
  text: any;
  platform?: "google" | "instagram" | "facebook";
}

export const ReviewCard = ({
  avatar,
  name,
  rating,
  text,
  platform,
}: ReviewCardProps) => (
  <div className="relative w-[350px] h-[180px] bg-[#b8ccaf] text-[#243520] custom-radius px-[12px] pb-[16px] pt-[30px]  flex flex-col justify-between overflow-visible">
    {/* Platform icon, top right, slightly rotated */}
    <span className="absolute -top-4 -right-4 z-10 rotate-12">
      {platform === "google" ? (
        <img
          src="/icons/google-maps.avif"
          alt="google maps"
          className="w-[35px] h-[35px]"
        />
      ) : platform === "instagram" ? (
        <img
          src="/icons/instagram.avif"
          alt="instagram"
          className="w-[35px] h-[35px]"
        />
      ) : (
        <img
          src="/icons/facebook.avif"
          alt="facebook"
          className="w-[35px] h-[35px]"
        />
      )}
    </span>
    {/*text*/}
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-min h-min">
        <div className="flex justify-start w-full h-[22px] relative">
          <span className="font-playfair-important font-extrabold text-[30px]  text-white">
            "
          </span>
        </div>
        <div className="text-[18px] font-normal leading-snug w-[210px] text-white pt-[10px] mb-[-10px]">
          {typeof text === "string" ? text : extractPlainText(text)}
        </div>
        <div className="flex justify-end w-full h-[22px] relative ">
          <span className="font-playfair-important font-extrabold text-[30px] ">
            "
          </span>
        </div>
      </div>
    </div>
    {/* Avatar and name */}
    <div className="flex items-center gap-1 mt-auto">
      {avatar.endsWith(".png") ||
      avatar.endsWith(".jpg") ||
      avatar.endsWith(".jpeg") ? (
        <img
          src={avatar}
          alt={name}
          className="w-[37px] h-[37px] rounded-full object-cover bg-[#e15b64]"
        />
      ) : (
        <div className="w-[37px] h-[37px] rounded-full bg-[#e15b64] flex items-center justify-center text-lg font-bold text-white">
          {avatar}
        </div>
      )}
      <span className="text-[12px] text-[#243520] opacity-70 font-medium ml-2">
        {name}
      </span>
    </div>
    {/* Stars, right-aligned */}
    <div className="flex items-center gap-1 absolute bottom-6 right-8">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < rating
              ? "text-white font-bold text-[14px]"
              : "text-white/40 font-bold text-[14px]"
          }
        >
          ★
        </span>
      ))}
    </div>
    {/* Speech bubble tail */}
  </div>
);
