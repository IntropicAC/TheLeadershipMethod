import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { DEFAULT_OG_IMAGE, createTwitterMetadata } from "@/lib/seo";

export const metadata = {
  title: "Services",
  description:
    "Leadership coaching, leadership workshops and organisational development support from The Leadership Method. Evidence-based, tailored to your organisation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | The Leadership Method",
    description:
      "Leadership coaching, leadership workshops and organisational development support from The Leadership Method. Evidence-based, tailored to your organisation.",
    url: "https://www.theleadershipmethod.co.uk/services",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: createTwitterMetadata({
    title: "Services | The Leadership Method",
    description:
      "Leadership coaching, leadership workshops and organisational development support from The Leadership Method. Evidence-based, tailored to your organisation.",
  }),
};

const services = [
  {
    title: "Leadership Coaching",
    description:
      "1:1 and team coaching for managers and leaders, focused on navigating change, leading difficult conversations, and building confidence and clarity.",
    href: "/leadership-coaching",
  },
  {
    title: "Leadership Workshops",
    description:
      "Bespoke workshops that build self-awareness, strengthen culture, and develop leadership capability across your team.",
    href: "/leadership-workshops",
  },
  {
    title: "Organisational Development",
    description:
      "Longer-term support including culture diagnostics, departmental packages, and organisational design for sustained change.",
    href: "/organisational-development",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-brand-cream dark:bg-night min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-brand-charcoal/60 dark:text-night-soft hover:text-brand-charcoal dark:hover:text-night-text transition-colors mb-10"
          >
            ← Back to home
          </Link>

          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            Services
          </h1>
          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-12">
            Every organisation is different. My support is tailored to the people, challenges and goals in front of you, drawing on coaching, workshops and organisational development depending on what will make the most difference.
          </p>

          <div className="space-y-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block p-8 bg-brand-cream dark:bg-night-raised rounded-lg hover:bg-brand-nude dark:hover:bg-night-muted transition-colors group"
              >
                <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-2 group-hover:text-brand-charcoal-dark dark:group-hover:text-night-accent transition-colors">
                  {service.title}
                </h2>
                <p className="text-brand-charcoal/70 dark:text-night-soft leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 bg-brand-cream dark:bg-night-raised rounded-lg text-center">
            <h2 className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text mb-3">
              Not sure where to start?
            </h2>
            <p className="text-brand-charcoal/70 dark:text-night-soft mb-6">
              Get in touch and we can talk through what will work best for your organisation.
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
