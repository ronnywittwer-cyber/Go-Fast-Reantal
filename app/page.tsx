import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Conditions from "@/components/Conditions";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Fahrzeugauswahl + Buchungsformular teilen sich den State */}
      <BookingSection />
      <Conditions />
      <Footer />
    </main>
  );
}
