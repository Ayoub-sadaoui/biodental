"use client";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import Link from "next/link";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";
import { FacebookLogo, InstagramLogo, TiktokLogo } from "phosphor-react";
import { extractPlainText } from "../../../lib/cmsHelpers";
import { getPhoneContacts } from "@/lib/siteContent";

export const Footer = ({ settings }: { settings?: any }) => {
  const footerLinks =
    settings?.data?.footer_links?.length > 0
      ? settings.data.footer_links
      : [
          { label: "Privacy Policy", link: { url: "#" } },
          { label: "Accessibility Statement", link: { url: "#" } },
        ];

  const socialLinks =
    settings?.data?.social_links?.length > 0
      ? settings.data.social_links
      : [
          {
            platform: "facebook",
            link: {
              url: "https://web.facebook.com/Biodental.Dr.Fetnaci.S/?_rdc=1&_rdr#",
            },
          },
          {
            platform: "instagram",
            link: {
              url: "https://www.instagram.com/dr.fetnaci_sofiane?igsh=MW12N3YwZmh5ajBqdA%3D%3D",
            },
          },
          {
            platform: "tiktok",
            link: {
              url: "https://www.tiktok.com/@biodental_dr.fetnaci?_t=8W1xx07WI0E&_r=1",
            },
          },
        ];

  const footerCopy =
    extractPlainText(settings?.data?.footer_text) ||
    "© BioDental clinic 2024 | Privacy Policy | Accessibility Statement";
  const footerCredit =
    settings?.data?.footer_credit || "Made by Ayoub SADAOUI";
  const footerServices =
    settings?.data?.footer_services?.length > 0
      ? settings.data.footer_services
      : ["Orthodontie", "Cosmetic", "Surgical"];

  // State for phone panel
  const [showPhonePanel, setShowPhonePanel] = useState(false);
  const phoneNumbers = getPhoneContacts(settings);

  return (
    <>
      <footer className="w-full  overflow-hidden bg-[#F7F7F5] border border-[#83967b] rounded-[8px] px-[30px] md:px-[80px]   py-9  mx-auto">
        <div className="flex flex-col md:flex-row justify-between item-center gap-[32px] md:gap-0">
          {/* Main CTA Button */}
          <div className="flex align-center justify-center order-last md:order-first">
            <div className="flex flex-col items-center justify-center md:hidden xl:flex  order-last md:order-first">
              <button className="w-[250px] h-[40px] bg-[#263820] text-white rounded-[6px] shadow font-bold text-[20px] flex items-center justify-center">
                {settings?.data?.cta_button_label || "Prendre rendez-vous"}
              </button>
            </div>
          </div>
          {/* Footer Navigation Sections */}
          <div className="flex flex-col md:flex-row w-full pl-3 justify-between md:justify-center md:gap-[65px] gap-8 order-first md:order-last">
            {/* lines and contact section*/}
            <div className="flex gap-2 justify-between w-[333px]">
              {/* lines */}
              <div className="flex flex-col ">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Liens
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  {footerLinks.map((item: any) => (
                    <li key={item.label}>
                      <a
                        href={item.link?.url || "#"}
                        className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px] hover:underline"
                        target={item.link?.target || undefined}
                        rel={item.link?.target ? "noreferrer" : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* contact */}
              <div className="flex flex-col">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Contact
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  <li className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.8px]">
                    {settings?.data?.primary_phone || "+213 7 87 90 78 32"}
                  </li>
                  <li>
                    <a
                      href={`mailto:${settings?.data?.email || "biodental.dr.fetnaci@gmail.com"}`}
                      className="text-[16px] text-[#0F1F0D] font-normal tracking-[-0.95px] hover:underline"
                    >
                      {settings?.data?.email ||
                        "biodental.dr.fetnaci@gmail.com"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* services and social section*/}
            <div className="flex justify-start md:justify-between  md:item-center  w-[310px] ">
              {/* services */}
              <div className="flex flex-col w-[125px]">
                <h3 className="text-[22px] text-[#51634B] font-[500]  text-left">
                  Services
                </h3>
                <ul className="flex flex-col gap-1 text-left">
                  {footerServices.map((service: string, index: number) => (
                    <li
                      key={service}
                      className={`text-[16px] text-[#0F1F0D] ${index === 0 ? "font-[500]" : "font-normal"} tracking-[-0.8px]`}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="flex flex-col ">
                <h3 className="text-[22px] text-[#51634B]  font-[500] mb-1 text-left">
                  Social
                </h3>
                <div className="flex gap-4 mt-1">
                  {socialLinks.map((item: any) => {
                    const iconProps = {
                      size: 40,
                      weight: "duotone" as const,
                      color: "#222",
                    };

                    return (
                      <a
                        key={item.platform}
                        href={item.url || item.link?.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.platform}
                      >
                        {item.platform === "facebook" && (
                          <FacebookLogo {...iconProps} />
                        )}
                        {item.platform === "instagram" && (
                          <InstagramLogo {...iconProps} />
                        )}
                        {item.platform === "tiktok" && (
                          <TiktokLogo {...iconProps} />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="flex justify-center items-center ">
          <div className="flex flex-col md:flex-row justify-between font-[460] items-center mt-6 text-[15px] w-full">
            <div className="mb-2 md:mb-0 flex flex-wrap items-center gap-1 tracking-[-0.77px] text-[#51634B]">
              <span className="">{footerCopy}</span>
            </div>
            <div className="flex items-center gap-2 font-normal text-right underline">
              <a href="#" className="text-[#2266ff] hover:underline">
                {footerCredit}
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Fixed phone button and panel for mobile */}
      <div className="md:hidden">
        {/* Phone panel */}
        {showPhonePanel && (
          <div className="fixed bottom-[180px] right-6 z-50 flex flex-col rounded-xl border border-[#b2c2a6] bg-[#83967b] 83967b  min-w-[180px]">
            {phoneNumbers.map((item, idx) => (
              <a
                key={item.number}
                href={item.href}
                className={`flex items-center gap-2 ${idx === 0 ? "border-b-[1.5px] border-white" : ""} px-4 py-2 text-[#000]  h-[52px] text-base font-medium ${idx === 0 ? "rounded-t-xl" : ""} ${idx === phoneNumbers.length - 1 ? "rounded-b-xl" : "border-t border-white"}`}
                style={{ minWidth: 160 }}
              >
                <FiPhone className="text-[#fff]" size={18} />
                <span>{item.number}</span>
              </a>
            ))}
          </div>
        )}
        {/* Floating phone button */}
        <motion.button
          className="fixed bottom-[120px] right-6 z-50 flex items-center justify-center w-[47px] h-[47px] rounded-full bg-[#243520] hover:bg-[#222] transition-colors duration-150 focus:outline-none shadow-lg"
          aria-label="Afficher les numéros de téléphone"
          type="button"
          onClick={() => setShowPhonePanel((v) => !v)}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragElastic={0.5}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
          whileDrag={{ scale: 1.1, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          dragSnapToOrigin
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            mass: 1,
          }}
        >
          <FiPhone className="text-[#F7F7F5]" size={28} />
        </motion.button>
      </div>
    </>
  );
};
