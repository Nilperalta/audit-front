import Hero from './sections/Hero';
import Features from './sections/Features';
// Cada compañero agrega su sección aquí (ver sections/README.md):
// import Features from './sections/Features';
// import WhyAudit from './sections/WhyAudit';
// import Faq from './sections/Faq';
// import FinalCta from './sections/FinalCta';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Features /> */}
      {/* <WhyAudit /> */}
      {/* <Faq /> */}
      {/* <FinalCta /> */}
    </>
  );
}
