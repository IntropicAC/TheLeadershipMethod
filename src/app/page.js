import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyStuck from "@/components/sections/WhyStuck";
import HowIHelp from "@/components/sections/HowIHelp";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { faqContent } from "@/lib/constants";
import { DEFAULT_OG_IMAGE, createTwitterMetadata } from "@/lib/seo";

export const metadata = {
  title: "Leadership Coaching & Workshops | The Leadership Method",
  description:
    "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Leadership Coaching & Workshops | The Leadership Method",
    description:
      "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
    url: "https://www.theleadershipmethod.co.uk/",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: createTwitterMetadata({
    title: "Leadership Coaching & Workshops | The Leadership Method",
    description:
      "Evidence-based leadership coaching, workshops and organisational development support to help leaders and teams build healthier workplace cultures.",
  }),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqContent.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <Hero />
        <WhyStuck />
        <HowIHelp />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
