import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "About Priyanka Ayodele & The Leadership Method",
  description:
    "Meet Priyanka Ayodele (CMgr MCMI, Assoc. CIPD), founder of The Leadership Method. Evidence-based leadership coaching, workshops and organisational development rooted in psychology.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Priyanka Ayodele & The Leadership Method",
    description:
      "Evidence-based leadership coaching, workshops and organisational development founded by Priyanka Ayodele (CMgr MCMI, Assoc. CIPD).",
    url: "https://www.theleadershipmethod.co.uk/about",
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
      name: "About",
      item: "https://www.theleadershipmethod.co.uk/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            About The Leadership Method
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-10">
            The Leadership Method was founded on a simple belief: that better leadership creates better organisations, and better organisations create better experiences for everyone in them.
          </p>

          <div className="space-y-10 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

            <section aria-labelledby="about-founder">
              <h2 id="about-founder" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-4">
                Meet {siteConfig.founder}
              </h2>

              <div className="flex flex-col sm:flex-row gap-8 items-start mb-6">
                <div className="relative shrink-0 w-48 h-56 sm:w-40 sm:h-48">
                  <Image
                    src="/images/priyanka-headshot.jpg"
                    alt={`${siteConfig.founder}, Founder of ${siteConfig.name}`}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                    sizes="(max-width: 640px) 192px, 160px"
                  />
                </div>
                <div>
                  <p>
                    {siteConfig.founder} is the founder of {siteConfig.name}. She holds a Psychology degree, a Chartered Manager qualification (CMgr MCMI), and an Associate CIPD membership, all of which she draws on to design evidence-based programmes that go beyond surface-level training.
                  </p>
                  <p className="mt-3">
                    With experience working in mental health and organisational design and development, Priyanka brings a distinctive perspective to leadership, treating people as whole human beings operating within complex systems, not just roles to be optimised.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {["Psychology Degree", "CMgr MCMI", "Assoc. CIPD", "Mental Health Experience", "Organisational Design"].map(
                  (credential) => (
                    <span
                      key={credential}
                      className="px-4 py-2 bg-brand-nude dark:bg-night-muted rounded-full text-sm font-medium text-brand-charcoal dark:text-night-text"
                    >
                      {credential}
                    </span>
                  )
                )}
              </div>
            </section>

            <section aria-labelledby="about-approach">
              <h2 id="about-approach" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Our Approach
              </h2>
              <p>
                Everything we do is evidence-based and tailored. We do not deliver generic content or off-the-shelf programmes. Before any workshop, coaching engagement, or organisational project begins, we take time to understand your specific context, challenges, and goals.
              </p>
              <p className="mt-3">
                Our work spans leadership coaching for individuals and teams, bespoke leadership workshops, and longer-term organisational development and culture support. Across all of these, the aim is the same: to help organisations reduce hidden costs, improve retention, and increase performance by focusing on what really matters: good management and healthy workplace cultures.
              </p>
            </section>

            <section aria-labelledby="about-values">
              <h2 id="about-values" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                What We Believe
              </h2>
              <ul className="space-y-3 list-none">
                {[
                  "Leadership is learnable. With the right support, anyone can develop their capability.",
                  "Culture is built through behaviour, not posters. Sustainable change comes from practical, human-centred work.",
                  "Evidence matters. Our frameworks are grounded in psychology and organisational science.",
                  "Every organisation is different. Tailored approaches outperform generic ones every time.",
                ].map((belief, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1.5 w-2 h-2 rounded-full bg-brand-charcoal dark:bg-night-accent" />
                    <span>{belief}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
            <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
              Work with us
            </h2>
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
              Whether you are looking for leadership coaching, a workshop for your team, or longer-term organisational support, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
              <Link
                href="/leadership-coaching"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-charcoal dark:border-night-accent text-brand-charcoal dark:text-night-accent rounded-md font-medium hover:bg-brand-nude dark:hover:bg-night-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
              >
                Explore Coaching
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
