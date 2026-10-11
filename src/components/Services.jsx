import React, { useState } from "react";
import { Camera, Film, Sparkles, ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { SERVICE_CATEGORIES } from "../data/services";

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("photography");

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="w-5 h-5 text-gold" />;
      case "Film":
        return <Film className="w-5 h-5 text-photoRed" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gold-light" />;
      default:
        return <Camera className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-cinematic-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-4">
            <span>Our Comprehensive Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Services Tailored for <span className="text-gold-gradient italic">Your Milestones</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory/70 font-light">
            From majestic wedding photography to state-of-the-art cinema and luxury album graphics,
            discover our complete suite of creative offerings.
          </p>

          {/* Category Tabs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-zinc-900/90 rounded-2xl border border-zinc-800 max-w-xl mx-auto">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-gold text-cinematic-black shadow-lg shadow-gold/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                }`}
              >
                {getCategoryIcon(cat.icon)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mb-10 text-center">
          <p className="text-sm font-medium text-gold/90 uppercase tracking-widest">
            {currentCategory.subtitle}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCategory.items.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-gold/50 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-black/30" />
                
                {/* Optional Tag Badge */}
                {service.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-gold border border-gold/30">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>

                {/* Card Action */}
                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 flex items-center gap-1 font-mono uppercase">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                    Available
                  </span>
                  
                  <button
                    onClick={() => onOpenBooking(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-white transition-colors group/btn py-1 px-2.5 rounded-lg hover:bg-gold/10"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-16 glass-card-gold rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Looking for a Customized Wedding Package?
            </h4>
            <p className="text-sm text-zinc-300 mt-1 font-light">
              We offer bespoke combos including photography, full cinematic film, drone, and luxury photo books.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking("Custom Wedding Combo Package")}
            className="whitespace-nowrap px-6 py-3.5 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold/30"
          >
            Get Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
