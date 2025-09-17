import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Reviews from "./components/Reviews";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Pricing />
      <Reviews />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  );
}
