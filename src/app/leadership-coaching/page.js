import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";

export const metadata = {
  title: "Leadership Coaching for Managers & Executives",
  description:
    "1:1 and team leadership coaching grounded in psychology and evidence-based practice. Support for managers and leaders to grow with confidence and clarity.",
  alternates: { canonical: "/leadership-coaching" },
  openGraph: {
    title: "Leadership Coaching for Managers & Executives | The Leadership Method",
    description:
      "1:1 and team leadership coaching grounded in psychology and evidence-based practice. Support for managers and leaders to grow with confidence and clarity.",
    url: "https://www.theleadershipmethod.co.uk/leadership-coaching",
  },
};

const coachingFaqs = [
  {
    question: "Who is leadership coaching suitable for?",
    answer:
      "Leadership coaching is suitable for anyone in a management or leadership role, from first-time managers to senior leaders. It is particularly valuable during role transitions, periods of organisational change, or when leaders want to develop a more intentional and effective approach.",
  },
  {
    question: "How is coaching different from a training workshop?",
    answer:
      "Coaching is a confidential, one-to-one (or small group) conversation focused on your specific goals, challenges, and context. Unlike workshops, which work at a team or group level, coaching provides space for deep, personalised reflection and development.",
  },
  {
    question: "How many coaching sessions are typically recommended?",
    answer:
      "Most coaching engagements involve between four and eight sessions, depending on goals and pace. We begin with an initial conversation to understand your needs and agree a structure that works for you.",
  },
  {
    question: "Is coaching available online?",
    answer:
      "Yes. Coaching sessions are available both in person and online, making them accessible regardless of your location across the UK.",
  },
];

const coachingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: coachingFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function LeadershipCoachingPage() {
  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coachingFaqSchema) }}
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
            Leadership Coaching
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-10">
            Personalised coaching to help managers and leaders develop clarity, confidence, and impact. Our approach is grounded in psychology and evidence-based practice, with every engagement tailored to your specific goals and context.
          </p>

          <div className="space-y-10 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

            <section aria-labelledby="coaching-individuals">
              <h2 id="coaching-individuals" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                1:1 Leadership &amp; Management Coaching
              </h2>
              <p>
                Our 1:1 coaching sessions provide dedicated space for individual leaders to reflect, plan, and grow. Whether you are stepping into a new role, navigating a challenging team dynamic, or seeking to develop your leadership style, coaching offers the focused support you need to move forward with intention.
              </p>
              <p className="mt-3">
                Sessions draw on psychology, organisational development principles, and practical leadership frameworks to help you understand your own patterns of behaviour and lead more effectively.
              </p>
            </section>

            <section aria-labelledby="coaching-teams">
              <h2 id="coaching-teams" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Team Coaching
              </h2>
              <p>
                For small leadership teams of up to four people, team coaching creates a shared space for leaders to work through challenges together, align on goals, and develop collective capability. This is particularly effective for management teams who want to build stronger working relationships and a more consistent approach to leadership across their organisation.
              </p>
            </section>

            <section aria-labelledby="coaching-approach">
              <h2 id="coaching-approach" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Our Approach
              </h2>
              <p>
                {siteConfig.name} was founded by {siteConfig.founder} ({siteConfig.credentials}), whose background in psychology and organisational design informs every coaching engagement. We do not use generic frameworks or off-the-shelf tools. We listen first, then work with you to design a coaching experience that meets you where you are.
              </p>
              <p className="mt-3">
                Coaching is available in person across the UK or online, with flexible scheduling to work around your commitments.
              </p>
            </section>

            <section aria-labelledby="coaching-faq">
              <h2 id="coaching-faq" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-6">
                Frequently Asked Questions
              </h2>
              <dl className="space-y-6">
                {coachingFaqs.map((faq, i) => (
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
              Ready to start your coaching journey?
            </h2>
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
              Get in touch to arrange a no-obligation initial conversation about how leadership coaching can support you or your team.
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
                Explore Workshops
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
