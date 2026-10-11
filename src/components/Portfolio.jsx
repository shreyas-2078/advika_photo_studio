import React, { useState } from "react";
import { Maximize2, Sparkles, Filter } from "lucide-react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "../data/portfolio";
import Lightbox from "./Lightbox";

export default function Portfolio({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = activeCategory === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="py-24 bg-cinematic-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Curated Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Moments Captured, <span className="text-gold-gradient italic">Forever Preserved</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory/70 font-light">
            Explore our signature portfolio of royal weddings, scenic pre-wedding adventures,
            emotional ceremonies, and high-fashion portraiture.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-gold text-cinematic-black font-semibold shadow-md shadow-gold/20"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid with Editorial Masonry Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 grid-flow-row-dense">
          {filteredItems.map((item, index) => {
            const isWide = item.aspect === "wide";
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-gold/40 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 ${
                  isWide ? "sm:col-span-2" : "col-span-1"
                }`}
              >
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden ${
                  isWide ? "aspect-[16/9] sm:aspect-[21/10]" : "aspect-[3/4]"
                }`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-ivory/90 border border-white/10">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-zinc-300 group-hover:text-gold group-hover:scale-110 transition-all border border-white/10">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 font-light">
                    {item.description}
                  </p>
                  <span className="inline-block mt-2 text-[11px] text-gold font-medium uppercase tracking-wider underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view full image
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Gallery Bottom Note */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-mono tracking-wider">
          SHOWCASING {filteredItems.length} OF {PORTFOLIO_ITEMS.length} CURATED FRAMES • HIGH RESOLUTION
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={filteredItems}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        onOpenBooking={onOpenBooking}
      />
    </section>
  );
}
