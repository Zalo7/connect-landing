import Navbar     from "@/components/Navbar/Navbar";
import Hero       from "@/components/Hero/Hero";
import Benefits   from "@/components/Benefits/Benefits";
import Plans      from "@/components/Plans/Plans";
import Wifi       from "@/components/Wifi/Wifi";
import About      from "@/components/About/About";
import Coverage   from "@/components/Coverage/Coverage";
import Contact    from "@/components/Contact/Contact";
import FAQ        from "@/components/FAQ/FAQ";
import Footer     from "@/components/Footer/Footer";
import FloatingWA from "@/components/FloatingWA/FloatingWA";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingWA />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <Wifi />
        <About />
        <Coverage />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
