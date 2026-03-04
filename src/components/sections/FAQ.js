"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { faqContent } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWrapper id="faq" background="cream">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-10 text-center">
          {faqContent.title}
        </h2>

        <dl className="space-y-3">
          {faqContent.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="border border-brand-nude/60 dark:border-night-border rounded-lg overflow-hidden"
              >
                <dt>
                  <button
                    id={triggerId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white dark:bg-night-raised hover:bg-brand-cream dark:hover:bg-night-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent"
                  >
                    <span className="font-serif text-subheading font-semibold text-brand-charcoal dark:text-night-text">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-brand-nude/40 dark:bg-night-muted flex items-center justify-center" aria-hidden="true">
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
                    <p className="px-6 pb-5 pt-1 text-brand-charcoal/80 dark:text-night-soft leading-relaxed">
                      {faq.answer}
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
