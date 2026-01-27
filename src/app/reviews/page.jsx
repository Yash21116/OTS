import React from 'react'
import AboutHero from "@/components/about/AboutHero";
import ServiceSummaryAccordion from "@/components/about/ServiceSummaryAccordion";
import ServiceAreaWall from "@/components/about/ServiceAreaWall";
import ReviewsWall from "@/components/about/ReviewsWall";

export default function ReviewPage() {
  return (
    <main>
        <AboutHero />
        <ReviewsWall />
        <ServiceSummaryAccordion />
       
    </main>
  );
}

