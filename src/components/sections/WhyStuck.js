import { Compass, Ban, Users2, RefreshCcw } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { whyStuckContent } from "@/lib/constants";

const icons = [Compass, Ban, Users2, RefreshCcw];

export default function WhyStuck() {
  return (
    <SectionWrapper id="why-stuck" background="light">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-night-text mb-3">
          {whyStuckContent.title}
        </h2>
        <p className="text-brand-charcoal/70 dark:text-night-soft leading-relaxed">
          {whyStuckContent.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {whyStuckContent.items.map((item, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-lg bg-brand-cream dark:bg-night-raised dark:ring-1 dark:ring-night-border"
            >
              <span className="shrink-0 w-10 h-10 rounded-full bg-white dark:bg-night-muted flex items-center justify-center">
                <Icon size={18} strokeWidth={1.75} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-brand-charcoal dark:text-night-text mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 dark:text-night-soft leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
