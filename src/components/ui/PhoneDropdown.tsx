import { useState } from "react";
import { Phone } from "lucide-react";
import { DEFAULT_PHONE_NUMBERS } from "@/lib/siteContent";

export default function PhoneDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-green-900 text-white p-2 rounded-full flex items-center justify-center"
      >
        <Phone size={20} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 right-0 bg-green-200 rounded-xl shadow-md w-52 p-2 space-y-2 transition-all">
          <div className="flex items-center justify-between border-b pb-1">
            <Phone size={16} />
            <span className="ml-2 font-semibold">
              {DEFAULT_PHONE_NUMBERS[0]}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <Phone size={16} />
            <span className="ml-2 font-semibold">
              {DEFAULT_PHONE_NUMBERS[1]}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
