import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact The Leadership Method",
  description:
    "Get in touch to discuss leadership coaching, workshops or organisational development support. We work with organisations and individuals across the UK.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact The Leadership Method",
    description:
      "Get in touch to discuss leadership coaching, workshops or organisational development support.",
    url: "https://www.theleadershipmethod.co.uk/contact",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.theleadershipmethod.co.uk/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://www.theleadershipmethod.co.uk/contact",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen">
        {/* Intro header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            Get in Touch
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed">
            Ready to discuss leadership coaching, a workshop for your team, or organisational development support? We would love to hear from you. Fill in the form below or reach out directly.
          </p>

          {/* Internal links to service pages */}
          <nav aria-label="Service pages" className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/leadership-coaching"
              className="text-sm font-medium text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Leadership Coaching
            </Link>
            <span className="text-brand-charcoal/30 dark:text-night-border" aria-hidden="true">·</span>
            <Link
              href="/leadership-workshops"
              className="text-sm font-medium text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Leadership Workshops
            </Link>
            <span className="text-brand-charcoal/30 dark:text-night-border" aria-hidden="true">·</span>
            <Link
              href="/organisational-development"
              className="text-sm font-medium text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Organisational Development
            </Link>
          </nav>
        </div>

        {/* Reuse the existing Contact section component */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
