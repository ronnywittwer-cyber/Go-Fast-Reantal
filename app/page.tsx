import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Conditions from "@/components/Conditions";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import BusinessJsonLd from "@/components/BusinessJsonLd";
import SpeedBand from "@/components/SpeedBand";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BusinessJsonLd />
      <Navbar />
      <Hero />
      <SpeedBand />
      {/* Fahrzeugauswahl + Buchungsformular teilen sich den State;
          die Konditionen liegen dazwischen (über dem Formular). */}
      <BookingSection between={<Conditions />} />
      <Faq />
      <Footer />
    </main>
  );
}
