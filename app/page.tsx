import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Conditions from "@/components/Conditions";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import BusinessJsonLd from "@/components/BusinessJsonLd";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BusinessJsonLd />
      <Navbar />
      <Hero />
      {/* Fahrzeugauswahl + Buchungsformular teilen sich den State;
          die Konditionen liegen dazwischen (über dem Formular). */}
      <BookingSection between={<Conditions />} />
      <Footer />
    </main>
  );
}
