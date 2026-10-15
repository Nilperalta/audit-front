import Hero from './sections/Hero';
import Features from './sections/Features';
import WhyAudit from './sections/WhyAudit';
// Cada compañero agrega su sección aquí (ver sections/README.md):
import Faq from './sections/Faq';
// import FinalCta from './sections/FinalCta';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <WhyAudit />
      <Faq />
      {/* <FinalCta /> */}
    </>
  );
}
