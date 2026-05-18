import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Focus } from "@/components/focus";
import { Background } from "@/components/background";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Work />
      <Focus />
      <Background />
      <Contact />
      <Footer />
    </main>
  );
}
