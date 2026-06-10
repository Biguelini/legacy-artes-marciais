import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Benefits from "@/components/sections/Benefits";
import Modalities from "@/components/sections/Modalities";
import Gallery from "@/components/sections/Gallery";
import Timeline from "@/components/sections/Timeline";
import Instructors from "@/components/sections/Instructors";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import LocationMap from "@/components/sections/LocationMap";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AnalyticsTracker from "@/components/ui/AnalyticsTracker";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "name": "Legacy Artes Marciais",
  "image": "https://legacyartesmarciais.com.br/og-image.jpg",
  "@id": "https://legacyartesmarciais.com.br/#organization",
  "url": "https://legacyartesmarciais.com.br",
  "telephone": "+5511999999999",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Paulista, 1000",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.561349,
    "longitude": -46.652194
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "06:00",
      "closes": "22:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "sameAs": [
    "https://instagram.com",
    "https://youtube.com",
    "https://facebook.com"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <AnalyticsTracker />

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Stats />
        <Benefits />
        <Modalities />
        <Gallery />
        <Timeline />
        <Instructors />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <LocationMap />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
