import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Image-of-training-session.jpg"
          alt="Leadership training session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-off-white/90 via-brand-off-white/70 to-brand-off-white/90 dark:from-night/95 dark:via-night/80 dark:to-night/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-24">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/Logo.jpg"
            alt={siteConfig.name}
            width={150}
            height={150}
            className="rounded-full shadow-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="font-serif text-display font-bold text-brand-charcoal dark:text-night-text mb-6">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft mb-6 font-light italic">
          {siteConfig.tagline}
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 shadow-card px-8 py-3.5 text-lg bg-brand-charcoal text-white hover:bg-brand-charcoal-dark dark:bg-night-accent dark:text-night dark:hover:bg-brand-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2 dark:focus-visible:ring-night-accent"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown size={32} className="text-brand-charcoal/60" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
