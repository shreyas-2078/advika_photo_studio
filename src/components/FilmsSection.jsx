import React, { useState } from "react";
import { Play, Film, Sparkles, Volume2, X, Calendar, Compass, Disc } from "lucide-react";

export default function FilmsSection({ onOpenBooking }) {
  const [activeVideoModal, setActiveVideoModal] = useState(null);

  const featuredFilms = [
    {
      id: "film-1",
      title: "सप्तपदी व पावन विवाह संस्कार — The Grand Wedding Film",
      type: "Featured Cinematic Wedding Film",
      duration: "4K Cinema • 4 min Highlight",
      thumbnail: "/assets/v.jpeg",
      description: "पवित्र यज्ञाच्या साक्षीने संपन्न झालेली सप्तपदी, वैदिक मंत्रोच्चार, भावनिक क्षण आणि राजेशाही मांडणी.",
      highlights: ["Anamorphic 2.39:1 Cinema Ratio", "Soundtrack Mastered in Dolby", "Complete Drone Storyline"],
    },
    {
      id: "film-2",
      title: "Eternal Bond — Romantic Pre-Wedding Film",
      type: "Pre-Wedding Music Film",
      duration: "4K UHD • 2 min Teaser",
      thumbnail: "/assets/twol.jpeg",
      description: "निसर्गाच्या सान्निध्यात वधू-वरांचे हळुवार प्रेम, सिनेमॅटिक स्लो-मोशन आणि मनमोहक संगीत.",
      highlights: ["Sunset Silhouette Grading", "Dynamic Slow Motion 120fps", "Custom Lyric Sync"],
    },
    {
      id: "film-3",
      title: "हास्याचे निखळ क्षण — Candid Reel & Highlights",
      type: "Candid Reel & Teaser",
      duration: "HD 9:16 Vertical • 60 Sec",
      thumbnail: "/assets/q.jpeg",
      description: "मंडपातील आनंदाचे व आपुलकीचे निखळ क्षण, क्लासिक ब्लॅक अँड व्हाईट फ्रेममध्ये जतन.",
      highlights: ["Viral Instagram Format", "Bespoke Sound Effects", "4K Color Graded"],
    },
  ];

  return (
    <section id="films" className="py-24 bg-cinematic-black relative overflow-hidden">
      {/* Top Film Strip Perforation Border */}
      <div className="w-full h-4 bg-zinc-900 border-y border-zinc-800 flex items-center justify-around opacity-60 mb-12">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-3 h-2 bg-black rounded-sm border border-zinc-700/60" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-photoRed/30 text-photoRed text-xs tracking-widest uppercase font-medium mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>Advika Motion Pictures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Cinematic Films that <br />
            <span className="text-gold-gradient italic">Resonate Through Generations</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ivory/70 font-light">
            We don’t just record footage; we direct, score, and edit moving pictures
            that recapture the heartbeats of your most cherished days.
          </p>
        </div>

        {/* Hero Featured Film Showcase */}
        <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group mb-12">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[520px] w-full overflow-hidden">
            <img
              src="/assets/v.jpeg"
              alt="Advika Cinematic Wedding Teaser"
              className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-103 transition-transform duration-700"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            
            {/* Large Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setActiveVideoModal(featuredFilms[0])}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-photoRed/90 hover:bg-photoRed text-white flex items-center justify-center shadow-[0_0_35px_rgba(229,9,20,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 group/play"
                aria-label="Play Featured Film Preview"
              >
                <div className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-40" />
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 text-white fill-current" />
              </button>
            </div>

            {/* Top Film Metadata */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3">
              <span className="text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-gold border border-gold/40 flex items-center gap-2">
                <Disc className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                Featured Premiere
              </span>
              <span className="hidden sm:inline text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-full">
                4K UHD 60FPS CINEMATIC
              </span>
            </div>

            {/* Bottom Showcase Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-2xl">
                <div className="text-xs sm:text-sm text-gold font-medium uppercase tracking-wider">
                  Signature Wedding Teaser
                </div>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-white mt-1">
                  The Grand Regal Wedding of Rohan &amp; Sanika
                </h3>
                <p className="hidden sm:block text-xs sm:text-sm text-zinc-300 mt-2 font-light line-clamp-2">
                  Experience the celebration in 4K anamorphic cinema color science with our master acoustic score.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenBooking("Cinematic Wedding Film Package")}
                  className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-gold/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Film Shoot</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Film Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFilms.map((film) => (
            <div
              key={film.id}
              className="rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-gold/40 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Thumbnail */}
                <div
                  onClick={() => setActiveVideoModal(film)}
                  className="relative aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group/thumb mb-4 border border-zinc-800"
                >
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors" />
                  
                  {/* Miniature Play Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-photoRed text-white flex items-center justify-center shadow-lg group-hover/thumb:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 text-white px-2 py-0.5 rounded">
                    {film.duration}
                  </span>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-photoRed font-semibold">
                  {film.type}
                </div>
                <h4 className="text-base font-serif font-bold text-white mt-1">
                  {film.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-2 font-light leading-relaxed">
                  {film.description}
                </p>

                {/* Film Specs / Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {film.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveVideoModal(film)}
                  className="text-xs text-zinc-300 hover:text-gold flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-photoRed" />
                  <span>Watch Preview</span>
                </button>

                <button
                  onClick={() => onOpenBooking(film.title)}
                  className="text-xs text-gold font-semibold hover:underline"
                >
                  Enquire Film
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Preview Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl border border-gold/30 p-4 sm:p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div>
                <span className="text-[11px] font-mono text-photoRed uppercase tracking-wider">
                  Advika Cinematic Showcase
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  {activeVideoModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Display Container */}
            <div className="relative aspect-video my-4 rounded-xl overflow-hidden bg-black border border-zinc-800 flex items-center justify-center">
              <img
                src={activeVideoModal.thumbnail}
                alt={activeVideoModal.title}
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-photoRed text-white flex items-center justify-center shadow-xl mb-4 animate-pulse">
                  <Film className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-white">
                  4K Cinematic Master Reel Preview
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mt-1 font-light">
                  Direct master copy preview ready for client review. High bitrate 4K video encoding with 5.1 cinematic audio balance.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs text-gold">
                  <span>Contact us to watch the complete uncompressed 4K master films</span>
                </div>
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400">
                Studio Gear: Sony FX3 Cinema Line, DJI Ronin RS3 Pro, DJI Mavic 3 Cine
              </span>
              <button
                onClick={() => {
                  const title = activeVideoModal.title;
                  setActiveVideoModal(null);
                  onOpenBooking(`Cinematography: ${title}`);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Book This Film Style
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Film Strip Perforation Border */}
      <div className="w-full h-4 bg-zinc-900 border-y border-zinc-800 flex items-center justify-around opacity-60 mt-16">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-3 h-2 bg-black rounded-sm border border-zinc-700/60" />
        ))}
      </div>
    </section>
  );
}
