import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Insights on Leadership & Organisational Development",
  description:
    "Articles and perspectives on leadership coaching, organisational culture, and management development from The Leadership Method.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights on Leadership & Organisational Development | The Leadership Method",
    description:
      "Articles and perspectives on leadership coaching, organisational culture, and management development.",
    url: "https://www.theleadershipmethod.co.uk/insights",
  },
};

const articles = [
  {
    slug: "benefits-of-leadership-coaching",
    title: "The Benefits of Leadership Coaching",
    description:
      "How 1:1 leadership coaching helps managers build self-awareness, improve team relationships, and lead with greater confidence and clarity.",
  },
  {
    slug: "how-to-improve-organisational-culture",
    title: "How to Improve Organisational Culture",
    description:
      "Practical, evidence-based approaches to diagnosing culture, identifying what needs to change, and building healthier workplace environments.",
  },
  {
    slug: "when-to-use-leadership-workshops-for-teams",
    title: "When to Use Leadership Workshops for Teams",
    description:
      "A guide to when team leadership workshops are the right intervention, and how to make sure they create lasting change rather than a one-day uplift.",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            Insights
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-12">
            Perspectives on leadership, organisational culture, and management development from The Leadership Method.
          </p>

          <ul className="space-y-8" role="list">
            {articles.map((article) => (
              <li key={article.slug}>
                <article>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group block p-6 bg-white dark:bg-night-raised rounded-lg shadow-card dark:ring-1 dark:ring-night-border hover:bg-brand-cream dark:hover:bg-night-muted transition-colors"
                  >
                    <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-2 group-hover:underline underline-offset-2">
                      {article.title}
                    </h2>
                    <p className="text-brand-charcoal/70 dark:text-night-soft text-sm leading-relaxed">
                      {article.description}
                    </p>
                    <span className="inline-block mt-4 text-sm font-medium text-brand-charcoal dark:text-night-accent group-hover:underline underline-offset-2">
                      Read article →
                    </span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-16 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-4">
              Interested in working with us?
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-brand-charcoal text-white dark:bg-night-accent dark:text-night rounded-md font-medium hover:bg-brand-charcoal-dark dark:hover:bg-brand-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
