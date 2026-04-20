import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Highlights />
      <Faq/>
    </main>
  );
}
