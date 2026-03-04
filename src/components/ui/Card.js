import { cn } from "@/lib/utils";

export default function Card({
  children,
  variant = "light",
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-lg p-6 transition-all duration-200",
        variant === "light" && "bg-white shadow-card hover:shadow-card-hover dark:bg-night-raised dark:text-night-text dark:ring-1 dark:ring-night-border",
        variant === "dark"  && "bg-brand-charcoal-dark text-white dark:bg-night-muted dark:text-night-text dark:ring-1 dark:ring-night-border",
        variant === "nude"  && "bg-brand-nude dark:bg-night-raised dark:text-night-text dark:ring-1 dark:ring-night-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
