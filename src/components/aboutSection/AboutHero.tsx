"use client";
import React, { useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import "../../styles/heroAnimation.css";
import "animate.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { DEFAULT_PHONE_NUMBERS, getPhoneNumbers } from "@/lib/siteContent";

export function PhonePopup({
  open,
  phoneNumbers = DEFAULT_PHONE_NUMBERS,
}: {
  open: boolean;
  phoneNumbers?: string[];
}) {
  return (
    <div
      className={`fixed w-[192px] border border-white top-[70px] right-[100px]  z-[100] flex flex-col rounded-xl shadow-lg bg-[#9aad92]/90 min-w-[192px] h-[100px] `}
      style={{ boxShadow: "0 4px 24px 0 #0002" }}
    >
      {phoneNumbers.map((num, idx) => (
        <a
          key={num}
          href={`tel:${num.replace(/\s/g, "")}`}
          className={`flex border border-white items-center gap-2 px-6 h-1/2 text-[17px] text-[#000] font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === phoneNumbers.length - 1 ? "rounded-b-xl" : "border-t border-[#e0e7db]"}`}
        >
          <FiPhone className="text-[#fff]" size={18} />
          {num}
        </a>
      ))}
    </div>
  );
}

const AboutHero = ({
  settings,
  pageContent,
}: {
  settings?: any;
  pageContent?: any;
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const phoneNumbers = getPhoneNumbers(settings);
  const bookingUrl = settings?.data?.booking_url || "#";
  const bookingLabel = settings?.data?.booking_button_label || "Réserver en ligne";
  const heroPrefix = pageContent?.hero_title_prefix || "Chez";
  const heroBrand = pageContent?.hero_title_brand || "BioDental";
  const heroSuffix =
    pageContent?.hero_title_suffix ||
    "La dentisterie aussi naturelle et rassurante qu'une bouffée d'air frais. Ces principes reflètent notre calme assurance, notre expertise pointue et notre dévouement au bien-être des patients.";

  return (
    <div className="about-hero-section relative flex flex-col items-center justify-center min-h-[70vh] w-full px-4 py-16 overflow-hidden">
      {/* Full-screen background gradient */}
      <div className="about-hero-bg-gradient" />
      {/* 3 rotating blurred colored circles */}
      <div className="about-hero-orbit-circle about-hero-orbit-circle-1" />
      <div className="about-hero-orbit-circle about-hero-orbit-circlin e-2" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-3" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-4" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-5" />
      <div className="about-hero-orbit-circle about-hero-orbit-circle-6" />
      <div
        className="text-center max-w-4xl mx-auto flex flex-col items-center justify-center py-10  z-50  animate__animated animate__fadeInUp"
        style={
          {
            "--animate-duration": "1.2s",
            "--animate-timing-function": "spring",
          } as React.CSSProperties
        }
      >
        <div className="py-10">
          <p className="text-[27px] md:text-[40px] text-[#3A4B35] indent-5 ">
            <span className="font-medium">{heroPrefix}</span>
            <span className="text-[34px] md:text-[55px] italic font-bold font-playfair-important  pl-1 leading-1">
              {heroBrand}
            </span>
            <span className="font-extralight">, {heroSuffix}</span>
          </p>
          <div
            className="relative flex flex-row items-center justify-center gap-4 p-1"
            onMouseLeave={() => setShowPopup(false)}
          >
            <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center bg-[#243520] hover:bg-[#222] text-white rounded-lg py-2 px-6 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms] no-underline"
              >
                <span className="text-[16px] leading-[16.8px] font-semibold">
                  {bookingLabel}
                </span>
              </a>
            <Button
              ref={btnRef}
              className="mt-4 relative bg-[#243520] hover:bg-[#222] text-white rounded-lg p-3 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms]"
              onClick={() => setShowPopup((v) => !v)}
              aria-label="Afficher les numéros de téléphone"
            >
              <FiPhone size={22} />
              {showPopup && (
                <div
                  ref={popupRef}
                  className="absolute z-[200] top-[-180px] right-[-100px] -translate-x-1/2"
                >
                  <PhonePopup open={showPopup} phoneNumbers={phoneNumbers} />
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
