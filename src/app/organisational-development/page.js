import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Organisational Development & Culture Support",
  description:
    "Culture diagnostics, departmental support packages and organisational design to build healthier, higher-performing workplaces. Evidence-based OD support for UK organisations.",
  alternates: { canonical: "/organisational-development" },
  openGraph: {
    title: "Organisational Development & Culture Support | The Leadership Method",
    description:
      "Culture diagnostics, departmental support packages and organisational design to build healthier, higher-performing workplaces.",
    url: "https://www.theleadershipmethod.co.uk/organisational-development",
  },
};

const odFaqs = [
  {
    question: "What is organisational development?",
    answer:
      "Organisational development (OD) is a planned, evidence-based approach to improving an organisation's effectiveness through its people, culture, and structure. It focuses on how teams work together, how leadership is practiced, and how the systems and behaviours in an organisation either support or hinder performance and wellbeing.",
  },
  {
    question: "How long does a culture support package run?",
    answer:
      "Our departmental culture packages typically run over six months, allowing enough time for meaningful change to take root. The format includes a diagnostic phase, targeted interventions (workshops, coaching, and facilitated team sessions), and a review phase to assess progress.",
  },
  {
    question: "What is included in a leadership diagnostic?",
    answer:
      "Our leadership and engagement diagnostics gather qualitative and quantitative data about how leadership is currently experienced in your organisation, including team perceptions, management behaviours, and cultural norms. The findings inform a tailored action plan.",
  },
  {
    question: "Can you support organisational design work?",
    answer:
      "Yes. We can support organisational design and strategy projects, including restructures, team redesign, and culture change programmes. We work alongside your HR or leadership team to ensure changes are grounded in evidence and people-centred.",
  },
];

const odFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: odFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function OrganisationalDevelopmentPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(odFaqSchema) }}
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
            Organisational Development &amp; Culture Support
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-10">
            Longer-term, evidence-based support for organisations looking to improve their culture, strengthen leadership at every level, and build the conditions for sustained performance. We work with you, not just for you.
          </p>

          <div className="space-y-10 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

            <section aria-labelledby="od-culture-packages">
              <h2 id="od-culture-packages" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                6-Month Departmental Culture Packages
              </h2>
              <p>
                Our culture packages are designed for teams and departments looking to make a sustained shift in how they work together. Over six months, we combine diagnostics, facilitated workshops, coaching, and check-ins to help your team build healthier, more effective ways of working.
              </p>
              <p className="mt-3">
                This is not a one-off intervention. It is a structured, ongoing partnership that gives change the time and support it needs to stick.
              </p>
            </section>

            <section aria-labelledby="od-diagnostics">
              <h2 id="od-diagnostics" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Leadership &amp; Engagement Diagnostics
              </h2>
              <p>
                Understanding where you are is the first step to meaningful change. Our leadership and engagement diagnostics provide a clear, evidence-based picture of the current state of leadership and culture in your organisation, covering what is working well and where the real challenges lie.
              </p>
              <p className="mt-3">
                Diagnostic findings inform a prioritised, practical action plan designed specifically for your context.
              </p>
            </section>

            <section aria-labelledby="od-design">
              <h2 id="od-design" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Organisational Design &amp; Strategy Support
              </h2>
              <p>
                For organisations going through significant change such as restructures, growth, or strategic shifts, we provide support to ensure that people and culture are central to the process. We work with leadership teams to design organisations that are set up for success, not just operationally, but in terms of how people experience working there.
              </p>
              <p className="mt-3">
                {siteConfig.founder}&apos;s background in organisational design and development ({siteConfig.credentials}) underpins this work, drawing on both theory and practical experience.
              </p>
            </section>

            <section aria-labelledby="od-faq">
              <h2 id="od-faq" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-6">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-6">
                {odFaqs.map((faq, i) => (
                  <div key={i}>
                    <dt className="font-semibold text-brand-charcoal dark:text-night-text mb-1">
                      {faq.question}
                    </dt>
                    <dd className="text-brand-charcoal/80 dark:text-night-soft">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

          </div>

          {/* CTA */}
          <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
            <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
              Let&apos;s talk about your organisation
            </h2>
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
              Every engagement starts with a conversation. Get in touch to discuss how we can support your organisation&apos;s development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
              >
                Get in Touch
              </Link>
              <Link
                href="/leadership-workshops"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-charcoal dark:border-night-accent text-brand-charcoal dark:text-night-accent rounded-md font-medium hover:bg-brand-nude dark:hover:bg-night-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
              >
                View Workshops
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
