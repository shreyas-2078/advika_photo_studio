import React from "react";
import { MessageSquare, Camera, Sparkles, CheckCircle, ArrowRight, Calendar } from "lucide-react";

export default function BookingProcess({ onOpenBooking }) {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Story",
      desc: "Share your vision, preferred event dates, and dream location through our easy WhatsApp enquiry form.",
      icon: <MessageSquare className="w-5 h-5 text-gold" />,
    },
    {
      num: "02",
      title: "Choose Your Shoot",
      desc: "Select from curated photography, full cinematic films, drone coverage, or comprehensive royal packages.",
      icon: <Camera className="w-5 h-5 text-photoRed" />,
    },
    {
      num: "03",
      title: "Discuss Your Requirements",
      desc: "Connect directly with our creative director to customize shooting schedules, moods, and specific ritual preferences.",
      icon: <Sparkles className="w-5 h-5 text-gold" />,
    },
    {
      num: "04",
      title: "Capture Your Memories",
      desc: "Relax and enjoy your special celebration while our team documents every sacred moment with cinematic beauty.",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
    },
  ];

  return (
    <section className="py-20 bg-cinematic-black relative border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-3">
            <span>Seamless Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Simple 4-Step <span className="text-gold-gradient italic">Booking Journey</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light">
            Reserving your date with Advika Photo, Film &amp; Graphics is effortless and transparent.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif font-extrabold text-gold/30">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-serif font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-700">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold/20"
          >
            <Calendar className="w-4 h-4" />
            <span>Plan Your Shoot</span>
          </button>
        </div>

      </div>
    </section>
  );
}
