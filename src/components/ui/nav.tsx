"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import "@/app/globals.css";
import { DEFAULT_PHONE_NUMBERS, getPhoneNumbers } from "@/lib/siteContent";
const navItems = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Témoignages", path: "/testimonials" },
];

export function PhonePopup({
  open,
  phoneNumbers = DEFAULT_PHONE_NUMBERS,
}: {
  open: boolean;
  phoneNumbers?: string[];
}) {
  return (
    <div
      className={`fixed w-[192px] border border-white top-[70px] right-[20%]  z-[100] flex flex-col rounded-xl shadow-lg bg-[#9aad92]/90 min-w-[192px] h-[100px] `}
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

export const Nav = ({ settings }: { settings?: any }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumbersList = getPhoneNumbers(settings);
  const navigationItems = settings?.data?.navigation_links?.length
    ? settings.data.navigation_links
    : navItems;

  return (
    <>
      <nav className="fixed  w-[340px]  md:max-w-[670px]  h-16 top-[8px] left-1/2 -translate-x-1/2 z-[50] md:w-full lg:w-full">
        <Card className="h-16  bg-[#9aad92]/60   backdrop-blur-[10px] rounded-[50px] z-[40] overflow-hidden border-[2px] border-[#F7F7F5]">
          <CardContent className="p-0">
            <div className=" w-full h-16 rounded-[50px] flex items-center justify-between px-6">
              <a href="/">
                <img
                  src={
                    typeof settings?.data?.logo === "string"
                      ? settings.data.logo
                      : settings?.data?.logo?.url || "/uploads/logo.png"
                  }
                  alt="BioDental"
                  className=" w-[180px]"
                />
              </a>
              <div className="hidden md:flex gap-[20px] ">
                {navigationItems.map((item: any, index: number) => (
                  <a
                    key={index}
                    href={item.path || item.link?.url || "/"}
                    className="font-medium text-[#f7f7f5] text-[14px] hover:underline hover:text-[#222] focus:underline transition-colors hover:duration-500 duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="relative flex items-center gap-2">
                <button
                  onClick={() => setShowPhone((v) => !v)}
                  className="hidden items-center justify-center w-11 h-11 rounded-full bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none sm:hidden md:flex"
                  aria-label="Afficher les numéros de téléphone"
                  type="button"
                >
                  <FiPhone className="text-[#F7F7F5]" size={23} />
                </button>
                <button
                  className="flex md:hidden items-center justify-center w-[35px] h-[35px] rounded-full  hover:bg-[#222] transition-colors duration-150 focus:outline-none"
                  onClick={() => setMobileMenuOpen(true)}
                  aria-label="Ouvrir le menu"
                  type="button"
                >
                  <FiMenu className="text-[#000]" size={28} />
                </button>
                {/* Overlay for click-away */}

                <PhonePopup open={showPhone} phoneNumbers={phoneNumbersList} />
              </div>
            </div>
          </CardContent>
        </Card>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed top-[8px] left-1/2  py-2 -translate-x-1/2 z-[200] flex flex-col bg-[#9aad92] rounded-xl px-2 gap-4 w-[340px] md:max-w-[670px] md:w-full animate-slideDownAndFadeIn"
          style={{ height: "auto" }}
        >
          <div className="flex items-center justify-between  max-h-[100px] px-2">
            <div className="flex items-center gap-2 max-w-[180px]">
              <a href="/">
                <img
                  src={
                    typeof settings?.data?.logo === "string"
                      ? settings.data.logo
                      : settings?.data?.logo?.url || "/uploads/logo.png"
                  }
                  alt="BioDental"
                />
              </a>
            </div>
            <button
              className="text-4xl text-[#222] p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
              type="button"
            >
              <FiX />
            </button>
          </div>
          <div className="flex flex-col items-center gap-5 flex-1 justify-center mb-4">
            {navigationItems.map((item: any, index: number) => (
              <a
                key={index}
                href={item.path || item.link?.url || "/"}
                className="text-white text-[14px] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* <div className="flex justify-end pr-4 pb-4">
            <button
              onClick={() => setShowPhone((v) => !v)}
              className="flex items-center justify-center w-[43px] h-[43px] rounded-full bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none"
              aria-label="Afficher les numéros de téléphone"
              type="button"
            >
              <FiPhone className="text-[#F7F7F5]" size={25} />
            </button>
             
          </div> */}
        </div>
      )}
      {showPhone && (
        <PhonePopup open={showPhone} phoneNumbers={phoneNumbersList} />
      )}
    </>
  );
};
