import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-cinematic-charcoal relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-3">
            <Heart className="w-3.5 h-3.5 text-photoRed" />
            <span>Client Love &amp; Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Words From Our <span className="text-gold-gradient italic">Happy Families</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light">
            Genuine experiences from couples and families whose sacred memories we had the honour of filming.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-3xl bg-zinc-900/80 border border-zinc-800/80 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          {/* Large Quote Mark */}
          <div className="absolute top-6 right-8 text-gold/15">
            <Quote className="w-16 h-16 sm:w-24 sm:h-24 rotate-180" />
          </div>

          <div className="relative z-10 flex flex-col justify-between min-h-[220px]">
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-6">
              {Array.from({ length: active.stars }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
              <span className="ml-2 text-xs font-mono text-zinc-400">5.0 Star Rating</span>
            </div>

            {/* Quote Body */}
            <p className="text-lg sm:text-2xl font-serif text-white/95 leading-relaxed italic font-light">
              "{active.quote}"
            </p>

            {/* Author Info & Nav */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  {active.name}
                </h4>
                <div className="text-xs text-zinc-400 mt-0.5">
                  <span className="text-gold font-medium">{active.event}</span> • {active.location} ({active.date})
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="p-2.5 rounded-full bg-zinc-800 hover:bg-gold hover:text-black text-zinc-300 border border-zinc-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-zinc-500 px-2">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextReview}
                  className="p-2.5 rounded-full bg-zinc-800 hover:bg-gold hover:text-black text-zinc-300 border border-zinc-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
