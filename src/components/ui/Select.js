import { cn } from "@/lib/utils";

export default function Select({
  label,
  id,
  options,
  error,
  className,
  placeholder = "Select an option",
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
      <select
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border border-brand-charcoal/20 shadow-input",
          "bg-white text-brand-charcoal",
          "dark:bg-night-raised dark:border-night-border dark:text-night-text",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:border-transparent",
          "dark:focus-visible:ring-night-accent dark:focus-visible:ring-offset-night",
          "transition-colors duration-200",
          "appearance-none cursor-pointer",
          error && "border-red-400 focus-visible:ring-red-500 dark:border-red-700",
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p id={`${id}-error`} role="alert" className="text-sm text-red-500 dark:text-red-400">{error}</p>}
    </div>
  );
}
