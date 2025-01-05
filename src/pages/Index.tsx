import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Portfolio } from "@/components/Portfolio";
import { ContactForm } from "@/components/ContactForm";

const Index = () => {
  return (
    <main>
      <About />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <ContactForm />
    </main>
  );
};

export default Index;
