import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center bg-brand-cream dark:bg-night overflow-hidden pt-20 pb-10 sm:pt-24 sm:pb-12 lg:min-h-screen lg:py-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-x-20 lg:gap-y-8 items-center">
          {/* Heading + copy */}
          <div className="order-1 lg:order-1 lg:col-start-1 lg:row-start-1 max-w-xl mx-auto text-center lg:mx-0 lg:text-left">
            <h1 className="font-serif text-2xl sm:text-5xl lg:text-6xl font-bold leading-[1.2] sm:leading-[1.1] text-brand-charcoal dark:text-night-text mb-3 sm:mb-6">
              Leadership that changes how your organisation performs
            </h1>

            <p className="text-sm sm:text-xl text-brand-charcoal/75 dark:text-night-soft font-light leading-relaxed">
              I help organisations improve performance through stronger leadership, healthier cultures and sustainable organisational change. Every approach is built around your organisation&apos;s people, challenges and goals.
            </p>
          </div>

          {/* Image */}
          <div className="order-2 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative w-full lg:max-w-full my-5 sm:my-6 lg:my-0">
            <div className="relative aspect-[16/9] sm:aspect-[6/5] w-full rounded-lg shadow-xl overflow-hidden">
              <Image
                src="/images/Pri-working-on-laptop-image.jpg"
                alt="Priyanka Ayodele, founder of The Leadership Method, working at her laptop"
                fill
                className="object-cover object-[center_40%] sm:object-[center_15%]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="order-3 lg:order-3 lg:col-start-1 lg:row-start-2 flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto items-center lg:mx-0 lg:items-stretch">
            <a
              href="#contact"
              className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 shadow-card px-6 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-lg bg-brand-charcoal text-white hover:bg-brand-charcoal-dark dark:bg-night-accent dark:text-night dark:hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2 dark:focus-visible:ring-night-accent"
            >
              Work With Me
            </a>
            <a
              href="#how-i-help"
              className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 px-6 py-2.5 sm:px-8 sm:py-3.5 text-sm sm:text-lg border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2 dark:focus-visible:ring-night-accent"
            >
              Explore How I Help
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#why-stuck" aria-label="Scroll to next section">
          <ChevronDown size={32} className="text-brand-charcoal/60 dark:text-night-soft" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
