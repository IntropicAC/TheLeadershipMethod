import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function FeaturedIn() {
  return (
    <SectionWrapper background="light">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest font-medium text-brand-charcoal/50 dark:text-night-soft mb-8">
          As Featured In
        </p>
        <div className="flex items-center justify-center">
          <a
            href="https://www.brainzmagazine.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Brainz Magazine"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            {/* Black logo for light mode */}
            <Image
              src="/images/Black-Brainz-Magazine-Logo.png"
              alt="Brainz Magazine"
              width={220}
              height={80}
              className="h-14 w-auto object-contain dark:hidden"
            />
            {/* White logo for dark mode */}
            <Image
              src="/images/White-Brainz-Magazine-Logo.png"
              alt="Brainz Magazine"
              width={220}
              height={80}
              className="h-14 w-auto object-contain hidden dark:block"
            />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
