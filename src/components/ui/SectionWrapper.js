import { cn } from "@/lib/utils";

export default function SectionWrapper({
  children,
  id,
  className,
  background = "light",
  ...props
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        background === "light" && "bg-brand-off-white dark:bg-night dark:text-night-text",
        background === "cream" && "bg-brand-cream dark:bg-night-raised dark:text-night-text",
        background === "nude"  && "bg-brand-nude dark:bg-night-muted dark:text-night-text",
        background === "dark"  && "bg-brand-charcoal text-white dark:bg-night-muted dark:text-night-text",
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
