import About from "@/components/About";
import Client from "@/components/Client";
import ContactSection from "@/components/ContactSection";
import Games from "@/components/Games";
import Hero from "@/components/Hero";
import PageTransition from "@/components/PageTransition";
import Reviews from "@/components/Reviews";
import Service from "@/components/Service";
import Technology from "@/components/Technology";

function HomePage() {
  return (
    <>
      <div className="bg-[#050505]">
        <PageTransition>
          <Hero />
          <About />
          <Service />
          <Technology />
          <Games />
          <Client />
          <Reviews />
          <ContactSection/>
          <div></div>
        </PageTransition>
      </div>
    </>
  );
}

export default HomePage;
