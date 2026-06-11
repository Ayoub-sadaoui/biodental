"use client";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { PhonePopup } from "../../testimonialSections/testimonialsherosection";
import { useRef, useState } from "react";
import { FiPhone } from "react-icons/fi";

export const CTA = ({ homepage, settings }: { homepage?: any; settings?: any }) => {
  const data = homepage?.data || {};
  const settingsData = settings?.data || {};
  const [showPopup, setShowPopup] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const bookingUrl = settingsData.booking_url || "#";
  const bookingLabel = settingsData.booking_button_label || "Réserver en ligne";
  return (
    <section className="w-full py-[60px] md:py-20 bg-[#9aae92] px-8 md:px-0 lg:px-0">
      <Card className="max-w-4xl mx-auto  border-none shadow-none">
        <CardContent className="flex flex-col items-center justify-center space-y-6 text-center p-0">
          <h1 className="text-[34px] md:text-[53px]  font-[1000] text-[#2b3029] tracking-[-0.80px] leading-[55px] font-playfair-important pb-1">
            {data.cta_title || "Prêt à transformer votre sourire?"}
          </h1>
          <p className="text-[22px]  font-normal text-white ">
            {data.cta_description ||
              "Voir les rendez-vous disponibles et profitez de la dentisterie bien faite."}
          </p>
          <div
            className="relative flex flex-row items-center gap-4 p-1"
            onMouseLeave={() => setShowPopup(false)}
          >
            <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#243520] rounded-lg py-2 px-6 shadow-[0px_0.71px_0.71px_-0.62px_#00000026,0px_1.81px_1.81px_-1.25px_#00000024,0px_3.62px_3.62px_-1.88px_#00000024,0px_6.87px_6.87px_-2.5px_#00000021,0px_13.65px_13.65px_-3.12px_#0000001a,0px_30px_30px_-3.75px_#0000000d] transition-colors duration-[400ms] no-underline"
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
                  <PhonePopup open={showPopup} />
                </div>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
