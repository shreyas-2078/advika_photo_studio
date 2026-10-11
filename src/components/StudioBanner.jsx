import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Eye, Sparkles, CheckCircle2, Award, Camera, ShieldCheck } from "lucide-react";
import { PRIMARY_WHATSAPP_NUMBER, SECONDARY_PHONE_NUMBER, INSTAGRAM_URL, LOCATION_TEXT } from "../utils/whatsapp";

export default function StudioBanner({ onOpenBooking }) {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);

  return (
    <section className="py-12 bg-gradient-to-b from-cinematic-black via-zinc-950 to-cinematic-charcoal relative overflow-hidden border-b border-zinc-800/80">
      {/* Ambient Gold Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-photoRed/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-zinc-900/90 via-zinc-950/90 to-zinc-900/90 border-2 border-gold/40 shadow-[0_10px_50px_rgba(0,0,0,0.8)] p-4 sm:p-6 lg:p-8">
          
          {/* Top Label & Studio Credits */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800/80 mb-5">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-gold/10 text-gold border border-gold/30">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </span>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gold font-semibold">
                  अधिकृत स्टुडिओ बॅनर • Official Studio Brand Banner
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                  Advika Photo, Film &amp; Graphics
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 rounded-full border border-zinc-800 hidden sm:inline">
                संस्थापक: ऋतुराज व विवेक वारुंखशे
              </span>
              <button
                onClick={() => setIsBannerModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold/20 hover:bg-gold text-gold hover:text-black border border-gold/40 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Full Banner View</span>
              </button>
            </div>
          </div>

          {/* Majestic Banner Image Container */}
          <div 
            onClick={() => setIsBannerModalOpen(true)}
            className="group relative rounded-2xl overflow-hidden bg-black border border-zinc-800 hover:border-gold/60 cursor-pointer shadow-2xl transition-all duration-500"
          >
            <img
              src="/assets/x.jpeg"
              alt="Advika Photo Film & Graphics Official Studio Banner - Ruturaj & Vivek Warunkshe"
              className="w-full h-auto object-cover object-center group-hover:scale-[1.01] transition-transform duration-500 filter brightness-100 contrast-105"
            />
            {/* Subtle Hover Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/40 text-gold text-xs font-semibold flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>क्लिक करून मोठे बॅनर पहा (Click to Enlarge)</span>
              </div>
            </div>
          </div>

          {/* Quick Contact & Info Bar directly below banner */}
          <div className="mt-6 pt-5 border-t border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            
            {/* Left: Contact Numbers */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gold/10 text-gold border border-gold/20">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  थेट संपर्क (Direct Call)
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <a
                    href="tel:+919529838773"
                    className="text-xs sm:text-sm font-bold text-white hover:text-gold transition-colors"
                  >
                    95298 38773
                  </a>
                  <span className="text-zinc-600">•</span>
                  <a
                    href="tel:+919309285266"
                    className="text-xs sm:text-sm font-bold text-white hover:text-gold transition-colors"
                  >
                    93092 85266
                  </a>
                </div>
              </div>
            </div>

            {/* Middle: Studio Location */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-photoRed/10 text-photoRed border border-photoRed/20">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  स्टुडिओ पत्ता (Studio Location)
                </div>
                <div className="text-xs sm:text-sm font-medium text-white truncate max-w-[260px]">
                  निमोन, ता. संगमनेर, जि. अहिल्यानगर
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center justify-start md:justify-end gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-ivory border border-zinc-700 hover:border-photoRed text-xs font-medium tracking-wide transition-colors"
              >
                @ADVIKA_VISUALS
              </a>

              <button
                onClick={() => onOpenBooking()}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-cinematic-black font-semibold text-xs uppercase tracking-wider hover:scale-[1.03] active:scale-95 transition-all shadow-md shadow-gold/20"
              >
                Book Shoot
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Studio Banner */}
      {isBannerModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsBannerModalOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-zinc-950 rounded-2xl border-2 border-gold/40 p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
              <div>
                <span className="text-[11px] font-mono text-gold uppercase tracking-wider">
                  Advika Photo, Film &amp; Graphics
                </span>
                <h4 className="text-base sm:text-lg font-serif font-bold text-white">
                  Official Studio Flex Banner
                </h4>
              </div>
              <button
                onClick={() => setIsBannerModalOpen(false)}
                className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="relative rounded-xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center">
              <img
                src="/assets/x.jpeg"
                alt="Advika Full Official Banner"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
              <span>ऋतुराज संजय वारुंखशे &amp; विवेक संजय वारुंखशे | संपर्क: 95298 38773 / 93092 85266</span>
              <button
                onClick={() => {
                  setIsBannerModalOpen(false);
                  onOpenBooking("Official Studio Banner Package");
                }}
                className="px-5 py-2 rounded-full bg-gold hover:bg-gold-light text-black font-semibold text-xs uppercase tracking-wider transition-all"
              >
                Book With Studio Desk
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
