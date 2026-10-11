import React, { useState } from "react";
import { openWhatsAppDirect } from "../utils/whatsapp";

function WhatsAppBrandIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.405z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    openWhatsAppDirect("Hello Advika Photo, Film & Graphics! I would like to enquire about a booking and packages.");
  };

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Sleek Tooltip appearing on hover */}
      <div
        className={`hidden sm:flex flex-col items-end pointer-events-none transition-all duration-300 transform ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-3 pointer-events-none"
        }`}
      >
        <div className="px-4 py-2 rounded-2xl bg-zinc-950/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
              Online • त्वरित संपर्क
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-xs font-medium text-white/95 mt-0.5">
            WhatsApp वर थेट संपर्क साधा
          </p>
        </div>
      </div>

      {/* Main Floating Action Button with Animated Sonar Ripple */}
      <div className="relative group">
        {/* Animated Sonar Ripple Wave 1 */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none animate-sonar-1"
          aria-hidden="true"
        />

        {/* Animated Sonar Ripple Wave 2 */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none animate-sonar-2"
          aria-hidden="true"
        />

        {/* Floating Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#075E54] via-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_6px_30px_rgba(37,211,102,0.55)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.85)] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
          aria-label="Chat on WhatsApp with Advika Photo, Film & Graphics"
        >
          {/* Authentic WhatsApp Icon with smooth micro-interaction */}
          <WhatsAppBrandIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:rotate-12 group-hover:scale-105 transition-transform duration-300 drop-shadow-md" />

          {/* Active Status Glowing Green Dot */}
          <span
            className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-zinc-950 rounded-full shadow-sm animate-pulse"
            aria-hidden="true"
          />
        </button>
      </div>
    </aside>
  );
}
