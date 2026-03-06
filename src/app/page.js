import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import { faqContent } from "@/lib/constants";

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
  },
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
        <About />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
