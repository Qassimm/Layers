import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import LogoTicker from "../sections/LogoTicker";
import Introduction from "../sections/Introduction";
import Features from "../sections/Features";
import Integration from "../sections/Integrations";
import FAQs from "../sections/FAQs";
import CallToAction from "../sections/CallToAction";
import Footer from "../sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker /> 
      <Introduction />
      <Features />
      <Integration />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
