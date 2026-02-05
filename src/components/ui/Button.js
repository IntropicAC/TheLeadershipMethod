import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-brand-charcoal text-white hover:bg-brand-charcoal-dark",
  secondary: "bg-brand-nude text-brand-charcoal hover:bg-brand-cream",
  outline: "border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white",
  ghost: "text-brand-charcoal hover:bg-brand-nude",
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
        "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-brand-charcoal focus:ring-offset-2",
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
