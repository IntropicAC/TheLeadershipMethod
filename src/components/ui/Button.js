import { cn } from "@/lib/utils";

const variants = {
  primary: [
    "bg-brand-charcoal text-white",
    "hover:bg-brand-charcoal-dark",
    "dark:bg-night-accent dark:text-night dark:hover:bg-brand-cream",
  ].join(" "),
  secondary: [
    "bg-brand-nude text-brand-charcoal",
    "hover:bg-brand-cream",
    "dark:bg-night-raised dark:text-night-text dark:hover:bg-night-muted",
  ].join(" "),
  outline: [
    "border-2 border-brand-charcoal text-brand-charcoal",
    "hover:bg-brand-charcoal hover:text-white",
    "dark:border-night-accent dark:text-night-accent dark:hover:bg-night-accent dark:hover:text-night",
  ].join(" "),
  ghost: [
    "text-brand-charcoal hover:bg-brand-nude",
    "dark:text-night-text dark:hover:bg-night-raised",
  ].join(" "),
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-md",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2",
        "dark:focus-visible:ring-night-accent dark:focus-visible:ring-offset-night",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
