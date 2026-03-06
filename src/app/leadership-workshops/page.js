import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Leadership Workshops for Teams & Organisations",
  description:
    "Bespoke leadership and management workshops tailored to your team. Build self-awareness, strengthen culture, and develop leadership capability. Delivered in person or online across the UK.",
  alternates: { canonical: "/leadership-workshops" },
  openGraph: {
    title: "Leadership Workshops for Teams & Organisations | The Leadership Method",
    description:
      "Bespoke leadership and management workshops tailored to your team. Build self-awareness, strengthen culture, and develop leadership capability.",
    url: "https://www.theleadershipmethod.co.uk/leadership-workshops",
  },
};

const workshopFaqs = [
  {
    question: "How long does a leadership workshop last?",
    answer:
      "Most workshops run for a half day (3 to 4 hours) or a full day (6 to 7 hours). We can also design shorter focused sessions or multi-day programmes depending on your team's needs and goals.",
  },
  {
    question: "Are workshops delivered in person or online?",
    answer:
      "Both options are available. In-person delivery is offered across the UK, and online sessions are available for remote or hybrid teams. Many organisations opt for a blended approach.",
  },
  {
    question: "Can you create a bespoke workshop for our organisation?",
    answer:
      "Yes. All workshops begin with a conversation about your team's specific challenges, goals, and dynamics. We design content specifically for your organisation rather than delivering generic off-the-shelf material.",
  },
  {
    question: "What sectors do you work with?",
    answer:
      "We work across a wide range of sectors including healthcare, education, corporate, and the third sector. Our approach is adaptable to your specific context and culture.",
  },
];

const workshopFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: workshopFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function LeadershipWorkshopsPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workshopFaqSchema) }}
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
            Leadership Workshops
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-10">
            Bespoke, evidence-based workshops designed to build leadership capability, strengthen team culture, and create lasting change. Every workshop is tailored to your organisation. We do not deliver off-the-shelf content.
          </p>

          <div className="space-y-10 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

            <section aria-labelledby="workshop-culture">
              <h2 id="workshop-culture" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Culture Reset &amp; Values Alignment
              </h2>
              <p>
                This workshop helps teams reconnect with shared purpose, clarify values, and reset the behaviours and norms that shape day-to-day working culture. It is particularly effective for teams experiencing friction, reduced cohesion, or significant change, and for organisations wanting to build a more intentional culture from the ground up.
              </p>
              <p className="mt-3">
                Participants leave with greater clarity about what they collectively stand for and practical tools to sustain cultural change.
              </p>
            </section>

            <section aria-labelledby="workshop-management">
              <h2 id="workshop-management" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Management &amp; Leadership in Practice
              </h2>
              <p>
                Subtitled <em>Leading with Self and System Awareness</em>, this workshop helps managers develop a more conscious understanding of their own leadership style, the wider systems they operate in, and how both influence team performance and wellbeing.
              </p>
              <p className="mt-3">
                Grounded in psychology and real-world leadership challenges, it equips managers with frameworks and self-awareness to lead more effectively, and is particularly useful for new managers or those seeking to develop a more intentional approach.
              </p>
            </section>

            <section aria-labelledby="workshop-bespoke">
              <h2 id="workshop-bespoke" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Bespoke Programmes
              </h2>
              <p>
                We can design multi-session programmes combining workshop delivery, team coaching, and organisational support. These are ideal for organisations looking to invest in sustained leadership development rather than one-off events. Contact us to discuss your goals and we will design a programme around them.
              </p>
            </section>

            <section aria-labelledby="workshop-faq">
              <h2 id="workshop-faq" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-6">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-6">
                {workshopFaqs.map((faq, i) => (
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
              Interested in a workshop for your team?
            </h2>
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
              Get in touch to start a conversation about what your team needs and how we can design something specifically for you.
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
