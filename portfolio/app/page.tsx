import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Thinking } from "@/components/thinking";
import { Story } from "@/components/story";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Work />
      <Thinking />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}
