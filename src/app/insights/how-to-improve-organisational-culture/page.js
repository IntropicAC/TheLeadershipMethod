import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "How to Improve Organisational Culture",
  description:
    "Practical, evidence-based approaches to diagnosing culture, identifying what needs to change, and building healthier workplace environments.",
  alternates: { canonical: "/insights/how-to-improve-organisational-culture" },
  openGraph: {
    title: "How to Improve Organisational Culture | The Leadership Method",
    description:
      "Practical, evidence-based approaches to diagnosing culture, identifying what needs to change, and building healthier workplace environments.",
    url: "https://www.theleadershipmethod.co.uk/insights/how-to-improve-organisational-culture",
    images: [{ url: "/images/Image-of-training-session.jpg", width: 1210, height: 1600, alt: "Organisational development session" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Improve Organisational Culture | The Leadership Method",
    description: "Practical, evidence-based approaches to diagnosing culture, identifying what needs to change, and building healthier workplaces.",
    images: [{ url: "/images/Image-of-training-session.jpg", alt: "Organisational development session" }],
  },
};

export default function HowToImproveOrganisationalCulturePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to Insights
          </Link>

          <article>
            <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
              How to Improve Organisational Culture
            </h1>
            <p className="text-sm text-brand-charcoal/50 dark:text-night-soft mb-10">
              By The Leadership Method
            </p>

            <div className="space-y-6 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

              <p>
                Organisational culture is often described as &ldquo;the way things are done around here&rdquo; but that definition undersells its power. Culture shapes how people communicate, how decisions get made, how conflict is handled, and whether people feel safe enough to do their best work. Improving culture is not about values posters or away days. It requires deliberate, sustained effort at multiple levels.
              </p>

              <section aria-labelledby="culture-diagnose">
                <h2 id="culture-diagnose" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Start with a Diagnosis
                </h2>
                <p>
                  Before you can change culture, you need to understand it accurately. This means going beyond engagement surveys and asking deeper questions: What behaviours are actually rewarded here? What do people say when the leader is not in the room? Where does the gap exist between stated values and lived experience?
                </p>
                <p className="mt-3">
                  A proper diagnostic, combining qualitative conversations with structured data, gives you the honest picture needed to make change that sticks. Without it, interventions are often misdirected.
                </p>
              </section>

              <section aria-labelledby="culture-leadership">
                <h2 id="culture-leadership" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Recognise That Leadership Drives Culture
                </h2>
                <p>
                  Culture is largely a product of leadership behaviour. If leaders do not model the behaviours they say they value, the culture will reflect what leaders actually do, not what they say. This means that culture improvement almost always requires leadership development work alongside any team-level interventions.
                </p>
                <p className="mt-3">
                  Managers at every level shape the micro-cultures of their teams. Supporting managers to lead well is therefore one of the highest-leverage culture change activities available.
                </p>
              </section>

              <section aria-labelledby="culture-practical">
                <h2 id="culture-practical" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Make It Practical and Ongoing
                </h2>
                <p>
                  Culture change is not achieved through a one-day workshop or a leadership away day. Meaningful change requires consistent, structured effort over time: creating new shared experiences, reinforcing different behaviours, and removing the systems and norms that sustain the old culture.
                </p>
                <p className="mt-3">
                  The organisations that succeed in changing culture are those that treat it as an ongoing management priority rather than a project with a start and end date.
                </p>
              </section>

              <section aria-labelledby="culture-involve">
                <h2 id="culture-involve" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Involve People at Every Level
                </h2>
                <p>
                  Culture cannot be imposed top-down. The people who experience the culture every day, including frontline staff, middle managers, and team members, need to be involved in shaping what it should look like and how to get there. Co-creation builds ownership and makes change far more likely to last.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
              <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Support for organisational culture change
              </h2>
              <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
                The Leadership Method offers culture diagnostics, workshops, and longer-term organisational development support for teams and organisations across the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/organisational-development"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
                >
                  Organisational Development
                </Link>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-charcoal dark:border-night-accent text-brand-charcoal dark:text-night-accent rounded-md font-medium hover:bg-brand-nude dark:hover:bg-night-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
