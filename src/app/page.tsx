import { About } from "@/components/About";
import { ExamSessions } from "@/components/ExamSessions";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadMagnet } from "@/components/LeadMagnet";
import { LessonLogistics } from "@/components/LessonLogistics";
import { Packages } from "@/components/Packages";
import { Prerequisites } from "@/components/Prerequisites";
import { Programs } from "@/components/Programs";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Prerequisites />
        <Programs />
        <Packages />
        <LessonLogistics />
        <ExamSessions />
        <HowItWorks />
        <About />
        <LeadMagnet />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
