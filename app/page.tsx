import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Navbar from "@/components/sections/navbar/navbar";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
    </section>
  );
}
