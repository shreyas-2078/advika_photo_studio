import React from "react";
import { Sparkles, Camera, Film, Eye, Users, Wand2, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyChooseUs({ onOpenBooking }) {
  const pillars = [
    {
      icon: <Sparkles className="w-6 h-6 text-gold" />,
      title: "Creative Storytelling",
      desc: "Every couple and event possesses a distinct soul. We construct an emotional narrative around your unique journey rather than following cookie-cutter templates.",
    },
    {
      icon: <Camera className="w-6 h-6 text-gold-light" />,
      title: "Professional Photography",
      desc: "Prime full-frame glass, dedicated lighting engineers, and years of seasoned expertise ensure immaculate portraits in both bright sun and twilight halls.",
    },
    {
      icon: <Film className="w-6 h-6 text-photoRed" />,
      title: "Cinematic Video Production",
      desc: "Shot on high-end cinema line cameras with custom LUTs, gimbal stability, and aerial drone vistas to deliver true cinema grandeur.",
    },
    {
      icon: <Eye className="w-6 h-6 text-gold" />,
      title: "Attention to Every Detail",
      desc: "From the micro-embroidery of your bridal attire to the spontaneous tear of joy in a mother’s eye, no subtle moment escapes our lenses.",
    },
    {
      icon: <Users className="w-6 h-6 text-gold-light" />,
      title: "Personalized Client Experience",
      desc: "We coordinate with you personally prior to the shoot, scoping venues, planning wardrobes, and scheduling timelines for a stress-free celebration.",
    },
    {
      icon: <Wand2 className="w-6 h-6 text-photoRed" />,
      title: "High-Quality Editing",
      desc: "Rigorous post-production with skin-texture preservation, balanced color palettes, and royal hardcover album designs that stay timeless.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-cinematic-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Advika Distinction</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Why Discerning Families <br />
            <span className="text-gold-gradient italic">Trust Our Studio</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory/70 font-light">
            We don’t treat your wedding or event as just another project on the calendar.
            We treat it as a sacred legacy to be passed down through generations.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-gold/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold/50 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>PILLAR 0{index + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
