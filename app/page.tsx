import { Nav } from "@/components/nav";
import { Hero, Metrics } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Stack } from "@/components/stack";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Metrics />
      <Experience />
      <Education />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
