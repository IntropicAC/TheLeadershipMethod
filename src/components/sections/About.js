import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { aboutContent, siteConfig } from "@/lib/constants";

export default function About() {
  return (
    <SectionWrapper id="about" background="cream">
      <div className="max-w-3xl mx-auto">
        {/* Heading sits above everything, full width */}
        <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-6">
          {aboutContent.title}
        </h2>

        {/* Float container — image floats left, text wraps beside and below it */}
        <div className="overflow-hidden">
          <div className="relative float-left mr-7 mb-4 w-[130px] sm:w-[185px] md:w-[210px]">
            <Image
              src="/images/Priyanka-about-us.jpg"
              alt={`${siteConfig.founder} - Founder of ${siteConfig.name}`}
              width={210}
              height={263}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 -bottom-3 -right-3 -z-10 border-2 border-brand-nude dark:border-night-border rounded-lg" />
          </div>

          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed">
            {aboutContent.description}
          </p>

          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mt-4">
            {aboutContent.description2}
          </p>

          {/* clear-both ensures credentials always sit below the image */}
          <div className="clear-both flex flex-wrap gap-3 mt-6">
            <span className="px-4 py-2 bg-brand-nude dark:bg-night-muted rounded-full text-sm font-medium text-brand-charcoal dark:text-night-text">
              Psychology Degree
            </span>
            <span className="px-4 py-2 bg-brand-nude dark:bg-night-muted rounded-full text-sm font-medium text-brand-charcoal dark:text-night-text">
              CMgr MCMI
            </span>
            <span className="px-4 py-2 bg-brand-nude dark:bg-night-muted rounded-full text-sm font-medium text-brand-charcoal dark:text-night-text">
              Assoc. CIPD
            </span>
          </div>

          {/* Brainz Magazine contributor */}
          <div className="mt-8 pt-6 border-t border-brand-nude dark:border-night-border flex items-center justify-center gap-2">
            <span className="text-sm uppercase tracking-[0.18em] font-medium text-brand-charcoal/50 dark:text-night-soft whitespace-nowrap">
              As featured in
            </span>
            <a
              href="https://www.brainzmagazine.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brainz Magazine — Contributor"
              className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/images/Black-Brainz-Magazine-Logo.png"
                alt="Brainz Magazine"
                width={320}
                height={110}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain dark:hidden"
              />
              <Image
                src="/images/White-Brainz-Magazine-Logo.png"
                alt="Brainz Magazine"
                width={320}
                height={110}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain hidden dark:block"
              />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
