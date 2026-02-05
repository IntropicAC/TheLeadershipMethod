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
        variant === "light" && "bg-white shadow-sm hover:shadow-md",
        variant === "dark" && "bg-brand-charcoal-dark text-white",
        variant === "nude" && "bg-brand-nude",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
