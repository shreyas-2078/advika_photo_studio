import React, { useState } from "react";
import { Phone, MessageCircle, MapPin, Send, Mail, Clock, CheckCircle } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { PRIMARY_WHATSAPP_NUMBER, SECONDARY_PHONE_NUMBER, INSTAGRAM_URL, LOCATION_TEXT, GOOGLE_MAPS_URL, generateWhatsAppUrl } from "../utils/whatsapp";

export default function Contact({ onOpenBooking }) {
  const [quickForm, setQuickForm] = useState({
    name: "",
    phone: "",
    service: "Wedding Photography",
    message: "",
  });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    const url = generateWhatsAppUrl({
      fullName: quickForm.name,
      mobile: quickForm.phone,
      services: [quickForm.service],
      requirements: quickForm.message,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-cinematic-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-gold text-xs tracking-widest uppercase font-medium mb-3">
            <MapPin className="w-3.5 h-3.5 text-photoRed" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white">
            Let's Create Something <span className="text-gold-gradient italic">Unforgettable</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-400 font-light">
            Have an upcoming wedding, ceremony, or creative project? Contact our studio directly
            or drop an instant message on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Studio Contacts & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Phone Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-gold/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gold/10 text-gold border border-gold/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Call Us Directly
                  </h4>
                  <div className="mt-2 space-y-1">
                    <a
                      href="tel:+919529838773"
                      className="block text-lg font-bold text-white hover:text-gold transition-colors"
                    >
                      +91 95298 38773 <span className="text-xs font-normal text-gold ml-2">(Primary)</span>
                    </a>
                    <a
                      href="tel:+919309285266"
                      className="block text-lg font-bold text-white hover:text-gold transition-colors"
                    >
                      +91 93092 85266
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-green-500/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Instant WhatsApp Chat
                  </h4>
                  <p className="text-sm text-zinc-300 mt-1">
                    Send your dates and get an instant quotation.
                  </p>
                  <a
                    href={`https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Advika Photo, Film & Graphics! I would like to enquire about your services.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-xs font-semibold text-green-400 hover:text-green-300 uppercase tracking-wider"
                  >
                    <span>Start Chat on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-photoRed/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-photoRed/10 text-photoRed border border-photoRed/20">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Follow Our Visuals
                  </h4>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-base font-bold text-white hover:text-photoRed transition-colors"
                  >
                    @advika_visuals
                  </a>
                  <p className="text-xs text-zinc-400 mt-1">
                    Daily reels, wedding highlights, and behind-the-scenes.
                  </p>
                </div>
              </div>
            </div>

            {/* Location & Map Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-gold/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-zinc-800 text-gold border border-zinc-700">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                    Studio Location
                  </h4>
                  <p className="text-sm text-white font-medium mt-1">
                    {LOCATION_TEXT}
                  </p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-gold hover:underline uppercase tracking-wider"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-2xl relative">
              <div className="mb-8">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Send a Quick Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Fill in your basic details below to initiate an instant chat with our booking desk.
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    placeholder="e.g. Rahul Shinde"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Mobile Number (WhatsApp) *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-zinc-800 bg-zinc-800/80 text-zinc-300 text-sm">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder="98765 43210"
                      className="w-full px-4 py-3 rounded-r-xl bg-zinc-950 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Primary Service of Interest
                  </label>
                  <select
                    value={quickForm.service}
                    onChange={(e) => setQuickForm({ ...quickForm, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  >
                    <option value="Wedding Photography">Wedding Photography</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                    <option value="Cinematic Wedding Films">Cinematic Wedding Films</option>
                    <option value="Candid Photography">Candid Photography</option>
                    <option value="Maternity & Baby Shoot">Maternity &amp; Baby Shoot</option>
                    <option value="Album Design & Graphics">Album Design &amp; Graphics</option>
                    <option value="Commercial & Event Shoot">Commercial &amp; Event Shoot</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-300 mb-2">
                    Shoot Date or Message (Optional)
                  </label>
                  <textarea
                    rows="3"
                    value={quickForm.message}
                    onChange={(e) => setQuickForm({ ...quickForm, message: e.target.value })}
                    placeholder="Tell us about your event date, venue, or questions..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenBooking()}
                    className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs sm:text-sm tracking-wide transition-colors"
                  >
                    Full Detailed Form
                  </button>
                </div>

                <p className="text-[11px] text-zinc-500 text-center pt-2">
                  🔒 We respect your privacy. Inquiries are sent directly to our studio via WhatsApp.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
