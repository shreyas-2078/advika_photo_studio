import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StudioBanner from "./components/StudioBanner";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import FilmsSection from "./components/FilmsSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingProcess from "./components/BookingProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenBooking = (serviceName = "") => {
    setSelectedService(serviceName || "");
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService("");
  };

  return (
    <div className="min-h-screen bg-cinematic-black text-ivory selection:bg-gold selection:text-cinematic-black font-sans antialiased overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenBooking={handleOpenBooking} />
        <StudioBanner onOpenBooking={handleOpenBooking} />
        <About onOpenBooking={handleOpenBooking} />
        <Services onOpenBooking={handleOpenBooking} />
        <Portfolio onOpenBooking={handleOpenBooking} />
        <FilmsSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs onOpenBooking={handleOpenBooking} />
        <BookingProcess onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Luxury Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Comprehensive Multi-Step Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
