import Header from "./components/Header";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Approaches from "./components/Approaches";
import Topics from "./components/Topics";
import Locations from "./components/Locations";
import Training from "./components/Training";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MapSection from "./components/Map";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <About />
        <Approaches />
        <Topics />
        <Locations />
        <Training />
        <Faq />
        <Cta />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
