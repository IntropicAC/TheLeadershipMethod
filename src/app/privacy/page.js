import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How The Leadership Method collects, uses, and protects your personal data when you use our website or contact us.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "March 2025";

const SITE_URL = "https://theleadershipmethod.co.uk";

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy` },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-brand-charcoal/50 dark:text-night-soft mb-10">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

            <section aria-labelledby="intro-heading">
              <h2 id="intro-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Who we are
              </h2>
              <p>
                The Leadership Method is a professional services business providing leadership
                coaching, workshops, and organisational development. We are the data controller
                for any personal data you provide to us via this website.
              </p>
              <p className="mt-3">
                If you have questions about this policy, contact us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="data-collected-heading">
              <h2 id="data-collected-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                What data we collect
              </h2>
              <p>When you submit the contact form on our website, we collect:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Your name</li>
                <li>Your email address</li>
                <li>The service you are enquiring about</li>
                <li>Your message</li>
              </ul>
              <p className="mt-3">
                We do not use cookies for tracking or analytics, and we do not collect any
                data through passive means (e.g. tracking pixels).
              </p>
            </section>

            <section aria-labelledby="how-used-heading">
              <h2 id="how-used-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                How we use your data
              </h2>
              <p>
                We use the information you provide solely to respond to your enquiry. The legal
                basis for this processing is our legitimate interest in responding to business
                enquiries (Article 6(1)(f) UK GDPR).
              </p>
              <p className="mt-3">
                We do not sell, rent, or share your personal data with third parties for
                marketing purposes.
              </p>
            </section>

            <section aria-labelledby="third-parties-heading">
              <h2 id="third-parties-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Third-party processors
              </h2>
              <p>
                Our contact form uses{" "}
                <a
                  href="https://web3forms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Web3Forms
                </a>{" "}
                to deliver form submissions to our email inbox. Your submission data is
                transmitted to their servers for this purpose. Please refer to the{" "}
                <a
                  href="https://web3forms.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  Web3Forms Privacy Policy
                </a>{" "}
                for information on how they handle data.
              </p>
            </section>

            <section aria-labelledby="retention-heading">
              <h2 id="retention-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Data retention
              </h2>
              <p>
                Enquiry emails are retained in our inbox for as long as reasonably necessary
                to handle your enquiry and any follow-up. If we do not enter into a working
                relationship, we will delete your contact details within 12 months of your
                initial enquiry.
              </p>
            </section>

            <section aria-labelledby="rights-heading">
              <h2 id="rights-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Your rights
              </h2>
              <p>Under UK GDPR you have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing based on legitimate interests</li>
                <li>Lodge a complaint with the ICO at{" "}
                  <a
                    href="https://ico.org.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
                  >
                    ico.org.uk
                  </a>
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-charcoal dark:text-night-accent underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  {siteConfig.email}
                </a>
                .
              </p>
            </section>

            <section aria-labelledby="changes-heading">
              <h2 id="changes-heading" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. Any changes will be reflected on
                this page with an updated date at the top.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
