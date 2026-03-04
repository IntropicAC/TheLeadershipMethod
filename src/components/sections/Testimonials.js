"use client";

import { useState, useCallback, useSyncExternalStore } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { testimonialsContent } from "@/lib/constants";
import { cn } from "@/lib/utils";

function TestimonialCard({ testimonial }) {
  return (
    <article className="bg-white dark:bg-night-raised rounded-lg p-8 shadow-card relative h-full flex flex-col">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6">
        <div className="w-10 h-10 bg-brand-nude dark:bg-night-muted rounded-full flex items-center justify-center">
          <Quote size={20} className="text-brand-charcoal dark:text-night-accent" aria-hidden="true" />
        </div>
      </div>

      <blockquote className="flex-1 mt-4">
        <p className="text-brand-charcoal/80 dark:text-night-soft italic leading-relaxed mb-6">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <footer className="border-t border-brand-nude dark:border-night-border pt-4">
        <p className="font-semibold text-brand-charcoal dark:text-night-text">
          {testimonial.author}
        </p>
        {testimonial.role && (
          <p className="text-sm text-brand-charcoal/60 dark:text-night-soft">
            {testimonial.role}
          </p>
        )}
      </footer>
    </article>
  );
}

export default function Testimonials() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const items = testimonialsContent.testimonials;
  const total = items.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    },
    [prev, next]
  );

  /* ── No-JS / SSR: static grid ──────────────────────────────────────────── */
  if (!mounted) {
    return (
      <SectionWrapper id="testimonials" background="cream">
        <div className="text-center mb-12">
          <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
            {testimonialsContent.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((testimonial, index) => (
            <div key={index} className="pt-4">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </SectionWrapper>
    );
  }

  /* ── JS-enhanced: carousel ─────────────────────────────────────────────── */
  return (
    <SectionWrapper id="testimonials" background="cream">
      <div className="text-center mb-12">
        <h2 className="font-serif text-heading font-bold text-brand-charcoal dark:text-night-text mb-4">
          {testimonialsContent.title}
        </h2>
      </div>

      {/* Carousel region */}
      <div
        role="region"
        aria-label="Testimonials carousel"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        className="relative max-w-2xl mx-auto"
      >
        {/* Slide track — CSS Grid stacking: all slides share the same cell */}
        <div
          className="grid pt-4"
          style={{ gridTemplateColumns: "1fr", gridTemplateRows: "1fr" }}
        >
          {items.map((testimonial, index) => {
            const isCurrent = index === current;
            return (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${total}`}
                aria-hidden={!isCurrent}
                // React 19 expects inert as a boolean prop
                inert={!isCurrent}
                className={cn(
                  "col-start-1 row-start-1 transition-opacity",
                  reducedMotion ? "duration-0" : "duration-500",
                  isCurrent ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            );
          })}
        </div>

        {/* sr-only live region — announces position only on user action */}
        <p
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          Testimonial {current + 1} of {total}
        </p>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full bg-brand-nude dark:bg-night-muted flex items-center justify-center text-brand-charcoal dark:text-night-text hover:bg-brand-charcoal hover:text-white dark:hover:bg-night-accent dark:hover:text-night transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2"
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          {/* Pill dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {items.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === current}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => goTo(index)}
                className={cn(
                  "rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2",
                  index === current
                    ? "w-6 h-2.5 bg-brand-charcoal dark:bg-night-accent"
                    : "w-2.5 h-2.5 bg-brand-nude dark:bg-night-border hover:bg-brand-charcoal/40 dark:hover:bg-night-soft"
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full bg-brand-nude dark:bg-night-muted flex items-center justify-center text-brand-charcoal dark:text-night-text hover:bg-brand-charcoal hover:text-white dark:hover:bg-night-accent dark:hover:text-night transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal dark:focus-visible:ring-night-accent focus-visible:ring-offset-2"
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
