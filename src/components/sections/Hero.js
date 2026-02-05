import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Image-of-training-session.jpg"
          alt="Leadership training session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-off-white/90 via-brand-off-white/70 to-brand-off-white/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
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
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal mb-6">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-brand-charcoal/80 mb-10 font-light italic">
          {siteConfig.tagline}
        </p>

        {/* CTA Button */}
        <Button size="lg" className="shadow-lg">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown size={32} className="text-brand-charcoal/60" />
        </a>
      </div>
    </section>
  );
}
