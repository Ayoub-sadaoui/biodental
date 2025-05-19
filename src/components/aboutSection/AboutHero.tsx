'use client'
import React, { useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import "../../styles/heroAnimation.css";
import "animate.css";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
const PHONE_NUMBERS = [
  "07 87 90 78 32",
  "06 59 77 27 37",
];

export function PhonePopup({ open }: { open: boolean }) {
  return (
    <div
      className={`fixed w-[192px] border border-white top-[70px] right-[100px]  z-[100] flex flex-col rounded-xl shadow-lg bg-[#9aad92]/90 min-w-[192px] h-[100px] `}
      style={{ boxShadow: "0 4px 24px 0 #0002" }}
    >
      {PHONE_NUMBERS.map((num, idx) => (
        <a
          key={num}
          href={`tel:${num.replace(/\s/g, "")}`}
          className={`flex border border-white items-center gap-2 px-6 h-1/2 text-[17px] text-[#000] font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === PHONE_NUMBERS.length - 1 ? "rounded-b-xl" : "border-t border-[#e0e7db]"}`}
        >
          <FiPhone className="text-[#fff]" size={18} />
          {num}
        </a>
      ))}
    </div>
  );
}

const AboutHero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

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
            <span className="font-medium">Chez</span>
            <span className="text-[34px] md:text-[55px] italic font-bold font-playfair-important  pl-1 leading-1">
              BioDental
            </span>
            <span className="font-extralight">
              ,"La dentisterie aussi naturelle et rassurante qu'une bouffée
              d'air frais. Ces principes reflètent notre calme assurance, notre
              expertise pointue et notre dévouement au bien-être des patients.
            </span>
          </p>
          <div
            className="relative flex flex-col items-center p-1"
            onMouseLeave={() => setShowPopup(false)}
          >
            <Button
              ref={btnRef}
              className="mt-4 relative bg-[#243520] hover:bg-[#222] text-white rounded-lg py-2 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms]"
              onClick={() => setShowPopup((v) => !v)}
            >
              <span className="text-[16px] leading-[16.8px]  font-normal">
                Prendre rendez-vous
              </span>
              {showPopup && (
                <div
                  ref={popupRef}
                  className="absolute z-[200] top-[-180px] right-[-100px] -translate-x-1/2"
                >
                  <PhonePopup open={showPopup} />
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