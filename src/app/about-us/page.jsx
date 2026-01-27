import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import WhoWeAre from "@/components/about/WhoWeAre";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ServiceSummaryAccordion from "@/components/about/ServiceSummaryAccordion";
import ServiceAreaWall from "@/components/about/ServiceAreaWall";
import ReviewsWall from "@/components/about/ReviewsWall";
export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <MissionSection />
      <WhoWeAre /> {/* New high-detail component */}
      <WhyChooseUs />

      <ServiceSummaryAccordion /> {/* New high-detail component */}
      <ReviewsWall /> {/* New high-detail component */}
      
    </main>
  );
}