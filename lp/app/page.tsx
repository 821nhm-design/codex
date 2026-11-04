import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Contact } from "@/components/sections/Contact";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Results } from "@/components/sections/Results";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Results />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
