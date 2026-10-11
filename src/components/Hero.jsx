import React from "react";
import { Calendar, Compass, Sparkles, ChevronDown, Award, Film } from "lucide-react";

export default function Hero({ onOpenBooking }) {
  const scrollToPortfolio = (e) => {
    e.preventDefault();
    const elem = document.querySelector("#portfolio");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cinematic-black pt-20 pb-16 lg:py-0"
    >
      {/* Background Banner with Cinematic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero-bg.jpg"
          alt="Advika Photo Film & Graphics Cinematic Hero"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 filter brightness-85 contrast-110"
        />
        {/* Layered gradients for cinematic depth and pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-cinematic-black/85 via-cinematic-black/40 to-transparent" />
        <div className="absolute inset-0 bg-radial-vignette opacity-75" />
      </div>

      {/* Camera Viewfinder Overlay Aesthetics */}
      <div className="absolute inset-x-4 sm:inset-x-8 md:inset-x-12 top-24 sm:top-28 bottom-6 sm:bottom-8 pointer-events-none z-10 flex flex-col justify-between">
        {/* Top Viewfinder Details */}
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-zinc-400/80 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-photoRed animate-ping" />
            <span className="text-photoRed font-semibold">REC [4K 60FPS]</span>
            <span className="hidden sm:inline text-zinc-500">| LOG-3 CINEMA</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-zinc-400">NIKON Z6 III</span>
            <span className="hidden md:inline text-zinc-400">DJI RONIN RS3</span>
            <span className="text-gold font-medium">ISO 800</span>
          </div>
        </div>

        {/* Framing Corner Markers */}
        <div className="relative w-full h-full my-auto pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold/40" />

          {/* Center Crosshair Grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-40">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </div>
        </div>

        {/* Bottom Viewfinder Info */}
        <div className="flex items-center justify-between text-[10px] sm:text-xs text-zinc-400 font-mono tracking-wider">
          <span>NIMON, TALUKA SANGAMNER, DIST. AHILYANAGAR</span>
          <span>RUTURAJ &amp; VIVEK WARUNKSHE • ADVIKA STUDIO</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-12 sm:mt-16">
        {/* Prestige Sub-badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-gold/30 backdrop-blur-md mb-6 shadow-lg shadow-black/50">
          <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
          <span className="text-xs sm:text-sm font-medium tracking-widest text-ivory/90 uppercase">
            Advika Photo, Film &amp; Graphics • Capturing Moments, Creating Memories
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>

        {/* Main Title with Serif Elegance */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.08] drop-shadow-2xl">
          Every Frame <br className="hidden sm:inline" />
          <span className="italic font-light text-gold-gradient">Tells a Story.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ivory/80 leading-relaxed font-normal">
          From timeless wedding memories to cinematic films, we capture the moments
          that deserve to last forever with artistic precision and emotional depth.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-cinematic-black font-semibold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.7)] hover:scale-[1.03] active:scale-95 group"
          >
            <Calendar className="w-5 h-5 text-black group-hover:rotate-12 transition-transform" />
            <span>Book Your Shoot</span>
          </button>

          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-ivory border border-zinc-700/80 hover:border-gold/50 backdrop-blur-md font-medium text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-[1.02]"
          >
            <Compass className="w-5 h-5 text-gold" />
            <span>Explore Our Work</span>
          </a>
        </div>

        {/* Quick Highlights / Social Proof Badges */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-gold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">500+</div>
              <div className="text-[11px] text-zinc-400">Weddings Captured</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-photoRed">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">4K UHD</div>
              <div className="text-[11px] text-zinc-400">Cinematic Films</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-gold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">100%</div>
              <div className="text-[11px] text-zinc-400">Bespoke Editing</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-green-500">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold text-white">Drone</div>
              <div className="text-[11px] text-zinc-400">Aerial Perspectives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center pointer-events-none opacity-70">
        <span className="text-[10px] tracking-widest uppercase text-zinc-400 mb-1">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </div>
    </section>
  );
}
