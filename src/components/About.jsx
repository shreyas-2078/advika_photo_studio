import React from "react";
import { Camera, Film, Palette, CheckCircle2, HeartHandshake, MapPin } from "lucide-react";

export default function About({ onOpenBooking }) {
  const stats = [
    { label: "Weddings Captured", value: "500+" },
    { label: "Cinematic Films", value: "250+" },
    { label: "Happy Families", value: "1,200+" },
    { label: "Years of Craft", value: "8+" },
  ];

  return (
    <section id="about" className="py-24 bg-cinematic-charcoal relative overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-photoRed/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Multi-Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 aspect-[4/5] max-w-[85%]">
                <img
                  src="/assets/a.jpeg"
                  alt="Advika Traditional Maharashtrian Bride Antarpat"
                  className="w-full h-full object-cover object-center filter brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold bg-black/70 px-2.5 py-1 rounded backdrop-blur-md border border-gold/30">
                    शुभ विवाह — अंतरपाट सोहळा
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Accent Image */}
              <div className="absolute -bottom-8 -right-2 sm:-right-4 w-[60%] sm:w-[55%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-gold/40 z-20">
                <img
                  src="/assets/twol.jpeg"
                  alt="Royal Couple Portrait"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="text-[10px] text-ivory/90 font-medium tracking-wide">
                    Eternal Bond • कपल पोट्रेट
                  </span>
                </div>
              </div>

              {/* Floating Camera Equipment Badge */}
              <div className="absolute -top-4 right-6 sm:right-12 glass-card-gold p-3 rounded-xl shadow-xl flex items-center gap-3 z-20">
                <div className="p-2 bg-gold/20 rounded-lg text-gold">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Cine-Grade Gear</div>
                  <div className="text-[11px] text-zinc-400">Nikon Z6 III • DJI Ronin RS3</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Studio Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium">
              <span>About Advika Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Your Story. Our Vision. <br />
              <span className="text-gold-gradient italic font-light">Timeless Memories.</span>
            </h2>

            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Nestled in Nimon (Sangamner, Ahilyanagar), <strong className="text-white font-medium">Advika Photo, Film &amp; Graphics</strong>, founded by <strong className="text-gold font-medium">ऋतुराज संजय वारुंखशे</strong> आणि <strong className="text-gold font-medium">विवेक संजय वारुंखशे</strong>, is 
              a premium creative studio dedicated to capturing the most sacred and heartfelt chapters of your life. 
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We blend traditional Maharashtrian wedding rituals with modern cinematic filmmaking, candid photography, and 
              bespoke graphic designing. अंतरपाट, कन्यादान, सप्तपदी ते डोहाळे जेवण आणि बाळगोपाळांचे गोड क्षण — प्रत्येक सोहळा आम्ही एका अलौकिक कलाकृतीप्रमाणे जतन करतो.
            </p>

            {/* Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Camera className="w-5 h-5 text-gold mb-2" />
                <h4 className="text-sm font-semibold text-white">Photography</h4>
                <p className="text-xs text-zinc-400 mt-1">Candid, Traditional &amp; Fashion</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Film className="w-5 h-5 text-photoRed mb-2" />
                <h4 className="text-sm font-semibold text-white">Cinematography</h4>
                <p className="text-xs text-zinc-400 mt-1">4K Films, Teasers &amp; Drone</p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <Palette className="w-5 h-5 text-gold-light mb-2" />
                <h4 className="text-sm font-semibold text-white">Creative Graphics</h4>
                <p className="text-xs text-zinc-400 mt-1">Albums, Branding &amp; Prints</p>
              </div>
            </div>

            {/* Animated / Verified Stats Grid */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((item, idx) => (
                <div key={idx} className="text-left">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">
                    {item.value}
                  </div>
                  <div className="text-xs text-zinc-400 mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-gold/30"
              >
                Plan Your Shoot With Us
              </button>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="w-4 h-4 text-photoRed" />
                <span>Sangamner • Ahilyanagar • Across Maharashtra</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
