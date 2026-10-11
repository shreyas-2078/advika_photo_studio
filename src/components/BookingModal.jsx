import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, MapPin, Phone, User, Mail, DollarSign, Users, Sparkles, Send, CheckCircle2, ChevronRight, AlertCircle, Home } from "lucide-react";
import { ALL_SERVICES_LIST } from "../data/services";
import { generateWhatsAppUrl, PRIMARY_WHATSAPP_NUMBER } from "../utils/whatsapp";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    services: initialService ? [initialService] : ["Wedding Photography"],
    date: "",
    time: "10:00 AM",
    location: "",
    duration: "Full Day (8-10 Hours)",
    people: "100-300 Guests",
    budget: "₹50,000 - ₹1,00,000",
    requirements: "",
  });

  const [step, setStep] = useState(1); // 1: Personal Details, 2: Shoot Details, 3: Review & Send
  const [errors, setErrors] = useState({});

  // Sync initialService prop if changed
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        services: [initialService],
      }));
    }
  }, [initialService]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Today's date string for min date attribute
  const todayStr = new Date().toISOString().split("T")[0];

  const validateStep1 = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.mobile.trim()) {
      errs.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
      errs.mobile = "Please enter a valid 10-digit Indian mobile number";
    }
    if (!formData.address.trim()) errs.address = "Address is required";
    if (!formData.city.trim()) errs.city = "City or Village is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs = {};
    if (!formData.services || formData.services.length === 0) {
      errs.services = "Please select at least one service";
    }
    if (!formData.date) errs.date = "Preferred date is required";
    if (!formData.location.trim()) errs.location = "Shoot location or venue is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      if (exists) {
        // keep at least one
        if (prev.services.length === 1) return prev;
        return { ...prev, services: prev.services.filter((s) => s !== serviceName) };
      } else {
        return { ...prev, services: [...prev.services, serviceName] };
      }
    });
  };

  const handleProceedWhatsApp = () => {
    const whatsappUrl = generateWhatsAppUrl(formData);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-zinc-950 border border-gold/40 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-zinc-900/90 border-b border-zinc-800 p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Book Your Shoot Experience
              </h3>
              <p className="text-xs text-zinc-400">
                Advika Photo, Film &amp; Graphics • Direct Studio Booking
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        <div className="bg-zinc-900/50 px-6 py-3 border-b border-zinc-800/80 flex items-center justify-between text-xs">
          <div className={`flex items-center gap-2 ${step >= 1 ? "text-gold font-semibold" : "text-zinc-500"}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? "bg-gold text-black font-bold" : "bg-zinc-800"}`}>
              1
            </span>
            <span>Personal Details</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <div className={`flex items-center gap-2 ${step >= 2 ? "text-gold font-semibold" : "text-zinc-500"}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? "bg-gold text-black font-bold" : "bg-zinc-800"}`}>
              2
            </span>
            <span>Shoot Details</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <div className={`flex items-center gap-2 ${step >= 3 ? "text-gold font-semibold" : "text-zinc-500"}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? "bg-gold text-black font-bold" : "bg-zinc-800"}`}>
              3
            </span>
            <span>Confirm &amp; WhatsApp</span>
          </div>
        </div>

        {/* Form Body with Smooth Step Transition */}
        <div className="p-6 sm:p-8 max-h-[72vh] overflow-y-auto">
          {/* STEP 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="mb-2">
                <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">
                  Step 1: Your Contact Information
                </h4>
                <p className="text-xs text-zinc-400">
                  Please provide accurate details so our team can follow up with availability.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-photoRed">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Nilesh Gaikwad"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border ${errors.fullName ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                </div>
                {errors.fullName && <p className="text-[11px] text-photoRed mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Mobile Number (WhatsApp) <span className="text-photoRed">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3.5 rounded-l-xl border border-r-0 border-zinc-800 bg-zinc-800/80 text-zinc-300 text-sm font-mono">
                    +91
                  </span>
                  <input
                    type="tel"
                    maxLength="10"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })}
                    placeholder="95298 38773"
                    className={`w-full px-4 py-2.5 rounded-r-xl bg-zinc-900 border ${errors.mobile ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                </div>
                {errors.mobile && <p className="text-[11px] text-photoRed mt-1">{errors.mobile}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-zinc-500 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nilesh@example.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    City / Village / Taluka <span className="text-photoRed">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Sangamner / Nimon"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border ${errors.city ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                  {errors.city && <p className="text-[11px] text-photoRed mt-1">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Full Address / Landmark <span className="text-photoRed">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="e.g. Near Ganpati Temple, Main Road"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border ${errors.address ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                  {errors.address && <p className="text-[11px] text-photoRed mt-1">{errors.address}</p>}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Shoot Details */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="mb-2">
                <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">
                  Step 2: Event &amp; Shoot Specifications
                </h4>
                <p className="text-xs text-zinc-400">
                  Select the services and timings to help us customize camera crews.
                </p>
              </div>

              {/* Service Selection Pills */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Select Required Services (Multiple Allowed) <span className="text-photoRed">*</span>
                </label>
                <div className="flex flex-wrap gap-2 max-h-36 overflow-y-auto p-2 bg-zinc-900/60 rounded-xl border border-zinc-800">
                  {ALL_SERVICES_LIST.map((srv) => {
                    const isSelected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                          isSelected
                            ? "bg-gold text-black border-gold font-semibold shadow-sm"
                            : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:border-zinc-500"
                        }`}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {srv}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="text-[11px] text-photoRed mt-1">{errors.services}</p>}
              </div>

              {/* Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Shoot Date <span className="text-photoRed">*</span>
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-900 border ${errors.date ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                  {errors.date && <p className="text-[11px] text-photoRed mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Time / Muhurat
                  </label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    placeholder="e.g. 10:00 AM or Morning Muhurat"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  />
                </div>
              </div>

              {/* Shoot Venue / Location */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Shoot Location / Venue <span className="text-photoRed">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Hotel Rajwada Banquet / Outdoor Resort, Sangamner"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border ${errors.location ? "border-photoRed" : "border-zinc-800"} focus:border-gold focus:outline-none text-white text-sm`}
                  />
                </div>
                {errors.location && <p className="text-[11px] text-photoRed mt-1">{errors.location}</p>}
              </div>

              {/* Duration & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  >
                    <option value="Half Day (4-5 Hours)">Half Day (4-5 Hours)</option>
                    <option value="Full Day (8-10 Hours)">Full Day (8-10 Hours)</option>
                    <option value="2-Day Wedding Ceremony">2-Day Wedding Ceremony</option>
                    <option value="3-Day Grand Wedding">3-Day Grand Wedding</option>
                    <option value="Custom Duration">Custom Duration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm"
                  >
                    <option value="₹15,000 - ₹35,000 (Portraits/Mini)">₹15,000 - ₹35,000 (Portraits/Mini)</option>
                    <option value="₹35,000 - ₹65,000 (Pre-Wedding/Events)">₹35,000 - ₹65,000 (Pre-Wedding/Events)</option>
                    <option value="₹65,000 - ₹1,20,000 (Standard Wedding)">₹65,000 - ₹1,20,000 (Standard Wedding)</option>
                    <option value="₹1,20,000 - ₹2,50,000+ (Royal Cinema Package)">₹1,20,000 - ₹2,50,000+ (Royal Cinema)</option>
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Additional Notes &amp; Specific Rituals
                </label>
                <textarea
                  rows="2"
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Need drone footage, specific traditional rituals, drone entry, album copies, etc."
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-gold focus:outline-none text-white text-sm resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Review & WhatsApp Confirmation */}
          {step === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="mb-2">
                <h4 className="text-sm font-semibold text-gold uppercase tracking-wider">
                  Step 3: Review Your Booking Enquiry
                </h4>
                <p className="text-xs text-zinc-400">
                  Please review the details below. Clicking continue will open WhatsApp with your prefilled enquiry.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-5 rounded-2xl bg-zinc-900/90 border border-gold/30 space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
                  <span className="text-zinc-400 uppercase font-mono">Client Name</span>
                  <span className="font-bold text-white text-sm">{formData.fullName}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
                  <span className="text-zinc-400 uppercase font-mono">Mobile Number</span>
                  <span className="font-semibold text-gold">+91 {formData.mobile}</span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-zinc-800 text-xs">
                  <span className="text-zinc-400 uppercase font-mono">Selected Services</span>
                  <span className="font-medium text-white text-right max-w-xs">
                    {formData.services.join(", ")}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-3 border-b border-zinc-800 text-xs">
                  <div>
                    <span className="text-zinc-400 uppercase font-mono block">Event Date</span>
                    <span className="font-semibold text-white">{formData.date}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 uppercase font-mono block">Preferred Time</span>
                    <span className="font-semibold text-white">{formData.time}</span>
                  </div>
                </div>

                <div className="flex items-start justify-between text-xs">
                  <span className="text-zinc-400 uppercase font-mono">Location / Venue</span>
                  <span className="font-medium text-white text-right max-w-xs">
                    {formData.location}, {formData.city}
                  </span>
                </div>
              </div>

              {/* Trust & Dispatch Notice */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div className="text-xs text-zinc-300">
                  <strong className="text-white">Direct WhatsApp Dispatch:</strong> Your enquiry will open directly in 
                  WhatsApp with studio director (+91 95298 38773). We will check crew schedule and reply with package pricing instantly.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="bg-zinc-900/90 border-t border-zinc-800 p-5 sm:p-6 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              Back
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              Cancel
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-full bg-gold hover:bg-gold-light text-cinematic-black font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md shadow-gold/20 flex items-center gap-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleProceedWhatsApp}
              className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-green-500/30 flex items-center gap-2 animate-bounce-subtle"
            >
              <Send className="w-4 h-4" />
              <span>Continue on WhatsApp →</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
