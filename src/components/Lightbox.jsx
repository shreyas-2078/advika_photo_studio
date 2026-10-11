import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
  onOpenBooking,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn p-2 sm:p-4 md:p-8"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-gold bg-zinc-900/80 px-3 py-1.5 rounded-full border border-gold/30">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="hidden sm:inline text-xs text-zinc-400 uppercase tracking-wider">
            {currentItem?.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white border border-zinc-700 transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 z-20 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white border border-zinc-700 transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] flex flex-col items-center justify-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem?.image}
          alt={currentItem?.title}
          className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-zinc-800"
        />

        {/* Caption & Booking CTA */}
        <div className="mt-4 text-center max-w-2xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-serif font-bold text-white">
              {currentItem?.title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5 line-clamp-1">
              {currentItem?.description}
            </p>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenBooking(currentItem?.categoryLabel || currentItem?.title);
            }}
            className="whitespace-nowrap px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gold hover:bg-gold-light rounded-full transition-all flex items-center gap-1.5 shadow-md shadow-gold/20"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Enquire This Style</span>
          </button>
        </div>
      </div>
    </div>
  );
}
