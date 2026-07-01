"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { howIHelpContent } from "@/lib/constants";

export default function HowIHelp() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="how-i-help" background="cream">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 md:gap-16 items-start">
        {/* Left column */}
        <div className="md:sticky md:top-28">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-charcoal dark:text-night-text mb-4">
            {howIHelpContent.title}
          </h2>
          <p className="text-brand-charcoal/80 dark:text-night-soft leading-relaxed text-lg">
            {howIHelpContent.intro}
          </p>
          <Link
            href={howIHelpContent.exploreHref}
            className="inline-flex items-center gap-2 mt-6 font-medium text-brand-charcoal dark:text-night-accent hover:gap-3 transition-all duration-200 group"
          >
            {howIHelpContent.exploreLabel}
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Accordion */}
        <dl className="divide-y divide-brand-nude dark:divide-night-border border-t border-b border-brand-nude dark:border-night-border">
          {howIHelpContent.items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `how-i-help-trigger-${index}`;
            const panelId = `how-i-help-panel-${index}`;

            return (
              <div key={index}>
                <dt>
                  <button
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 py-4 text-left hover:text-brand-charcoal-dark dark:hover:text-night-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent"
                  >
                    <span className="font-serif text-lg sm:text-xl font-semibold text-brand-charcoal dark:text-night-text">
                      {item.title}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-nude/50 dark:bg-night-muted flex items-center justify-center" aria-hidden="true">
                      {isOpen
                        ? <Minus size={14} className="text-brand-charcoal dark:text-night-text" strokeWidth={2.5} />
                        : <Plus size={14} className="text-brand-charcoal dark:text-night-text" strokeWidth={2.5} />
                      }
                    </span>
                  </button>
                </dt>

                <dd
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className="grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 text-sm text-brand-charcoal/70 dark:text-night-soft leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </SectionWrapper>
  );
}
