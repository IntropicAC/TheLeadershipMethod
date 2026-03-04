import { cn } from "@/lib/utils";

export default function Textarea({
  label,
  id,
  error,
  className,
  rows = 4,
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-brand-charcoal dark:text-night-text"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border border-brand-charcoal/20 shadow-input",
          "bg-white text-brand-charcoal",
          "dark:bg-night-raised dark:border-night-border dark:text-night-text",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:border-transparent",
          "dark:focus-visible:ring-night-accent dark:focus-visible:ring-offset-night",
          "placeholder:text-brand-charcoal/40 dark:placeholder:text-night-soft",
          "transition-colors duration-200 resize-none",
          error && "border-red-400 focus-visible:ring-red-500 dark:border-red-700",
          className
        )}
        {...props}
      />
      {error && <p id={`${id}-error`} role="alert" className="text-sm text-red-500 dark:text-red-400">{error}</p>}
    </div>
  );
}
