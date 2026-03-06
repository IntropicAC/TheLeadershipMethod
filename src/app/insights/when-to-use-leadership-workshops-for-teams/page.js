import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// TODO: This article is a draft. Once the content is fully written and reviewed,
// remove the `robots: noindex` line below and add this URL to sitemap.js.
export const metadata = {
  title: "When to Use Leadership Workshops for Teams",
  description:
    "A guide to when team leadership workshops are the right intervention, and how to make sure they create lasting change rather than a one-day uplift.",
  alternates: { canonical: "/insights/when-to-use-leadership-workshops-for-teams" },
  robots: { index: false, follow: true },
};

export default function WhenToUseLeadershipWorkshopsPage() {
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
              When to Use Leadership Workshops for Teams
            </h1>
            <p className="text-sm text-brand-charcoal/50 dark:text-night-soft mb-10">
              By The Leadership Method
            </p>

            <div className="space-y-6 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">

              <p>
                Leadership workshops can be one of the most effective interventions available to teams and organisations, but only when they are the right tool for the situation. Used well, they create shared understanding, build capability, and shift how a team works together. Used poorly, they provide a brief motivational boost that fades within weeks. The difference lies in timing, design, and follow-through.
              </p>

              <section aria-labelledby="when-good-fit">
                <h2 id="when-good-fit" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  When Workshops Are the Right Fit
                </h2>
                <p>
                  Leadership workshops work well when there is a genuine, shared need that a group learning experience can address. For example, when a team lacks shared language around leadership and culture, when managers are new to the role and need foundational frameworks, or when a team is going through change and needs to reconnect with its purpose and values.
                </p>
                <p className="mt-3">
                  They are also effective as part of a longer development programme, where the workshop creates a foundation that coaching, ongoing conversations, and manager support can build on over time.
                </p>
              </section>

              <section aria-labelledby="when-not-fit">
                <h2 id="when-not-fit" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  When Workshops Are Not Enough on Their Own
                </h2>
                <p>
                  Workshops are unlikely to create lasting change if the underlying issue is a structural or systemic problem, such as consistently poor management behaviour, a toxic leadership culture, or misaligned incentives. In these cases, a workshop may surface important conversations, but will not resolve the root cause.
                </p>
                <p className="mt-3">
                  Similarly, if senior leaders do not model the values and behaviours covered in the workshop, the team will receive a contradictory message that undermines the learning. Senior buy-in and role-modelling are essential for workshops to have lasting impact.
                </p>
              </section>

              <section aria-labelledby="making-it-stick">
                <h2 id="making-it-stick" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  Making Workshop Learning Stick
                </h2>
                <p>
                  The most effective workshops are designed with transfer in mind: not just what happens in the room, but what happens in the weeks and months that follow. This means building in practical takeaways, follow-up conversations, and accountability mechanisms that help participants apply what they have learned.
                </p>
                <p className="mt-3">
                  At The Leadership Method, every workshop is tailored to the specific team and context, with no generic content. We also support clients to think about how to sustain the learning beyond the day itself, whether through follow-up coaching, manager support, or planned check-ins.
                </p>
              </section>

              <section aria-labelledby="bespoke-design">
                <h2 id="bespoke-design" className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                  The Case for Bespoke Design
                </h2>
                <p>
                  Off-the-shelf workshops can seem cost-effective, but they often miss the nuances that matter most. A workshop designed around your team&apos;s specific challenges, language, and culture will land very differently from one built for a generic audience. Participants can tell the difference, and it affects how seriously they take the content.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
              <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
                Explore bespoke leadership workshops
              </h2>
              <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
                The Leadership Method designs and delivers leadership workshops tailored to your team&apos;s specific needs and context.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/leadership-workshops"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
                >
                  View Workshop Offerings
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
