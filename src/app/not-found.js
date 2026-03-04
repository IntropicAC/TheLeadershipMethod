import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-brand-off-white dark:bg-night min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <p className="font-serif text-display font-bold text-brand-nude dark:text-night-border leading-none mb-6">
            404
          </p>
          <h1 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            Page not found
          </h1>
          <p className="text-brand-charcoal/70 dark:text-night-soft mb-8">
            The page you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 px-8 py-3.5 text-lg bg-brand-charcoal text-white hover:bg-brand-charcoal-dark dark:bg-night-accent dark:text-night dark:hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2 dark:focus-visible:ring-night-accent"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
