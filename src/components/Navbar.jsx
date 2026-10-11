import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ArrowRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { PRIMARY_WHATSAPP_NUMBER, INSTAGRAM_URL } from "../utils/whatsapp";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Our Films", href: "#films" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cinematic-black/95 backdrop-blur-md border-b border-cinematic-border/80 shadow-2xl py-3"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Advika Photo, Film & Graphics Home"
          >
            <img
              src="/assets/logo.svg"
              alt="Advika Photo, Film & Graphics"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:+${PRIMARY_WHATSAPP_NUMBER}`}
              className="text-xs text-ivory/70 hover:text-gold flex items-center gap-1.5 transition-colors border border-zinc-800 rounded-full px-3 py-1.5 bg-zinc-900/50"
              title="Call studio directly"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>+91 95298 38773</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-gold hover:bg-gold-light rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Book Your Shoot
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 text-xs font-semibold bg-gold text-black rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory hover:text-gold rounded-lg transition-colors bg-zinc-900/60 border border-zinc-800"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-cinematic-black border-l border-cinematic-border p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <img
                  src="/assets/logo.svg"
                  alt="Advika"
                  className="h-10 w-auto"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between text-base font-medium text-ivory/90 hover:text-gold py-2 px-3 rounded-lg hover:bg-zinc-900/50 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Footer CTA */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-black bg-gold hover:bg-gold-light rounded-xl transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Your Shoot
              </button>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2">
                <a
                  href={`tel:+${PRIMARY_WHATSAPP_NUMBER}`}
                  className="hover:text-gold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  +91 95298 38773
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-photoRed" />
                  @advika_visuals
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
