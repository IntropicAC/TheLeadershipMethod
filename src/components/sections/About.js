import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { aboutContent, siteConfig } from "@/lib/constants";

export default function About() {
  return (
    <SectionWrapper id="about" background="light">
      <div className="max-w-3xl mx-auto">
        {/* Mobile: heading on its own line, image floats left with smaller text wrapping around it. Desktop: side-by-side grid. */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-night-text mb-4 md:hidden">
          {aboutContent.title}
        </h2>

        <div className="md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <div className="relative float-left mr-5 mb-3 w-36 sm:w-48 md:float-none md:mr-0 md:mb-0 md:w-full md:max-w-xs md:mx-auto lg:mx-0 aspect-[4/5]">
            <Image
              src="/images/notebook-writing-top-down-view.jpg"
              alt={`${siteConfig.founder} making notes`}
              fill
              className="object-cover rounded-lg shadow-xl"
              sizes="(max-width: 768px) 40vw, 30vw"
            />
          </div>

          <div>
            <h2 className="hidden md:block font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-night-text mb-4">
              {aboutContent.title}
            </h2>

            <p className="text-sm md:text-base text-brand-charcoal/80 dark:text-night-soft leading-relaxed">
              {aboutContent.description}
            </p>

            <p className="text-sm md:text-base text-brand-charcoal/80 dark:text-night-soft leading-relaxed mt-3">
              {aboutContent.description2}
            </p>
          </div>
        </div>

        {/* clear-both ensures badges/logo always sit below the floated image on mobile */}
        <div className="clear-both md:clear-none">
          <div className="flex flex-wrap gap-2 mt-5">
            {aboutContent.credentials.map((credential) => (
              <span
                key={credential}
                className="px-3 py-1.5 bg-brand-nude dark:bg-night-muted rounded-full text-xs font-medium text-brand-charcoal dark:text-night-text"
              >
                {credential}
              </span>
            ))}
          </div>

          {/* Brainz Magazine contributor */}
          <div className="mt-6 pt-5 border-t border-brand-nude dark:border-night-border flex flex-col items-center justify-center gap-2">
            <span className="text-xs md:text-sm uppercase tracking-[0.18em] font-medium text-brand-charcoal/50 dark:text-night-soft whitespace-nowrap">
              As featured in
            </span>
            <a
              href="https://www.brainzmagazine.com/executive-contributor/priyanka-ayodele"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read ${siteConfig.founder}'s Executive Contributor profile on Brainz Magazine`}
              className="group flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src="/images/Black-Brainz-Magazine-Logo.png"
                alt="Brainz Magazine"
                width={320}
                height={110}
                className="h-10 md:h-14 w-auto object-contain dark:hidden"
              />
              <Image
                src="/images/White-Brainz-Magazine-Logo.png"
                alt="Brainz Magazine"
                width={320}
                height={110}
                className="h-10 md:h-14 w-auto object-contain hidden dark:block"
              />
              <span className="text-[11px] md:text-xs font-medium text-brand-charcoal dark:text-night-text underline decoration-brand-charcoal/30 dark:decoration-night-text/30 underline-offset-2 group-hover:decoration-brand-charcoal dark:group-hover:decoration-night-text transition-colors">
                Read my Executive Contributor profile →
              </span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
