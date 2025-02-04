import Hero from "./appComponents/welcome/Hero";
import About from "./appComponents/about";
import Impowerment from "./appComponents/impowerment";
import OrganizationOverview from "./appComponents/missions";
import WhatWeDo from "./appComponents/whatWeDo";
import Contact from "./appComponents/contact";
import Footer from "./appComponents/footer";
import LatestProjects from "./appComponents/latesProject";
import RecentProjects from "./appComponents/recentProject";
import ImpactSection from "./appComponents/impact";
import Testimonials from "./appComponents/testmonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Impowerment />
      <OrganizationOverview />
      <RecentProjects />
      <WhatWeDo />
      <ImpactSection />
      <LatestProjects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
