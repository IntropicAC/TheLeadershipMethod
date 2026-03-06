import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// TODO: This article is a draft. Once the content is fully written and reviewed,
// remove the `robots: noindex` line below and add this URL to sitemap.js.
export const metadata = {
  title: "The Benefits of Leadership Coaching",
  description:
    "How 1:1 leadership coaching helps managers build self-awareness, improve team relationships, and lead with greater confidence and clarity.",
  alternates: { canonical: "/insights/benefits-of-leadership-coaching" },
  robots: { index: false, follow: true },
};

export default function BenefitsOfLeadershipCoachingPage() {
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
              The Benefits of Leadership Coaching
            </h1>
            <p className="text-sm text-brand-charcoal/50 dark:text-night-soft mb-10">
              By The Leadership Method
            </p>

            <div className="space-y-6 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

              <p>
                Leadership coaching has become one of the most effective tools available to organisations that want to develop capable, self-aware, and resilient leaders. Unlike generic leadership training programmes, coaching provides a personalised space for leaders to reflect deeply, work through real challenges, and build skills that transfer directly into their day-to-day roles.
              </p>

              <section aria-labelledby="benefit-self-awareness">
                <h2 id="benefit-self-awareness" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Building Self-Awareness
                </h2>
                <p>
                  One of the most consistent outcomes of leadership coaching is increased self-awareness. Through regular, structured reflection, leaders develop a clearer understanding of their own behaviours, triggers, and patterns, and how these affect the people around them. This kind of self-knowledge is foundational to effective leadership, because you cannot change what you cannot see.
                </p>
              </section>

              <section aria-labelledby="benefit-relationships">
                <h2 id="benefit-relationships" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Improving Team Relationships
                </h2>
                <p>
                  When leaders understand themselves better, they tend to relate to others more effectively. Coaching helps leaders develop empathy, improve how they give feedback, have more constructive conversations, and build stronger working relationships with their teams. These changes often ripple outwards, improving team morale, cohesion, and performance.
                </p>
              </section>

              <section aria-labelledby="benefit-confidence">
                <h2 id="benefit-confidence" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Leading with Greater Confidence and Clarity
                </h2>
                <p>
                  Many leaders, particularly those new to management or stepping into more senior roles, carry significant uncertainty about how to lead well. Coaching provides a space to process this uncertainty, develop a clearer sense of direction, and build the confidence to act with greater intention. Leaders who have been through coaching often describe feeling less reactive and more purposeful in how they approach their role.
                </p>
              </section>

              <section aria-labelledby="benefit-org-outcomes">
                <h2 id="benefit-org-outcomes" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Organisational Outcomes
                </h2>
                <p>
                  The benefits of coaching are not limited to the individual leader. Organisations that invest in coaching typically see improvements in engagement, retention, and performance across the teams led by those who have been coached. Good leadership has a direct and measurable impact on the wellbeing and effectiveness of everyone around it, making leadership coaching one of the highest-leverage investments an organisation can make.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
              <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Interested in leadership coaching?
              </h2>
              <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
                Find out how The Leadership Method can support you or your organisation through 1:1 or team coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/leadership-coaching"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
                >
                  Explore Leadership Coaching
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
