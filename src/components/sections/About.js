import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { aboutContent, siteConfig } from "@/lib/constants";

export default function About() {
  return (
    <SectionWrapper id="about" background="cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative order-1 lg:order-1">
          <div className="relative aspect-[4/5] max-w-[240px] sm:max-w-[290px] lg:max-w-[340px] mx-auto lg:mx-0">
            <Image
              src="/images/priyanka-headshot.jpg"
              alt={`${siteConfig.founder} - Founder of ${siteConfig.name}`}
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 290px, 340px"
              className="object-cover rounded-lg shadow-xl"
            />
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-nude dark:border-night-border rounded-lg -z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="order-2 lg:order-2">
          <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-6">
            {aboutContent.title}
          </h2>

          <p className="text-body-lg text-brand-charcoal/80 dark:text-night-soft leading-relaxed mb-6">
            {aboutContent.description}
          </p>

          {/* Credentials */}
          <div className="flex flex-wrap gap-3 mt-8">
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
        </div>
      </div>
    </SectionWrapper>
  );
}
