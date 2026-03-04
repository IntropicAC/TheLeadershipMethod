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
        variant === "light" && "bg-white shadow-card hover:shadow-card-hover dark:bg-night-raised dark:text-night-text",
        variant === "dark"  && "bg-brand-charcoal-dark text-white dark:bg-night-muted dark:text-night-text",
        variant === "nude"  && "bg-brand-nude dark:bg-night-raised dark:text-night-text",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
