import React from "react";
import { Phone, MessageCircle, MapPin, Calendar, Heart, ArrowUp } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { PRIMARY_WHATSAPP_NUMBER, SECONDARY_PHONE_NUMBER, INSTAGRAM_URL, LOCATION_TEXT, GOOGLE_MAPS_URL } from "../utils/whatsapp";

export default function Footer({ onOpenBooking }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 text-ivory border-t border-zinc-800/80 relative overflow-hidden">
      {/* Film Strip Header Accent */}
      <div className="w-full h-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-around opacity-40">
        {Array.from({ length: 32 }).map((_, i) => (
          <div key={i} className="w-2.5 h-1.5 bg-black rounded-xs" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-block">
              <img
                src="/assets/logo.svg"
                alt="Advika Photo, Film & Graphics"
                className="h-12 w-auto object-contain"
              />
            </a>
            <p className="text-xs text-zinc-400 leading-relaxed font-light max-w-sm">
              Capturing Moments, Creating Memories. Premium wedding photography,
              cinematic storytelling, and creative graphics studio based in Sangamner, Maharashtra.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-photoRed text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-photoRed" />
              </a>
              <a
                href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-green-500 text-zinc-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
              </a>
              <a
                href={`tel:+${PRIMARY_WHATSAPP_NUMBER}`}
                className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-gold text-zinc-400 hover:text-white transition-colors"
                aria-label="Call Studio"
              >
                <Phone className="w-4 h-4 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest font-mono">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold transition-colors">About Studio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold transition-colors">Portfolio Gallery</a>
              </li>
              <li>
                <a href="#films" className="hover:text-gold transition-colors">Cinematic Films</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Services Portfolio */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest font-mono">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>• Royal Wedding Photography</li>
              <li>• Pre-Wedding Destination Shoots</li>
              <li>• 4K Cinematic Wedding Films</li>
              <li>• Candid &amp; Traditional Rituals</li>
              <li>• Drone &amp; Aerial Videography</li>
              <li>• Maternity &amp; Baby Milestone Shoots</li>
              <li>• Luxury Photo Albums &amp; Card Design</li>
            </ul>
          </div>

          {/* Contact Details & Action */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest font-mono">
              Studio Desk
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-photoRed shrink-0 mt-0.5" />
                <span>{LOCATION_TEXT}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 95298 38773 / 93092 85266</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 rounded-xl bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Shoot On WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {currentYear} Advika Photo, Film &amp; Graphics. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Nimon • Sangamner • Ahilyanagar</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
