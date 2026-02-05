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
          className="text-sm font-medium text-brand-charcoal"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border border-gray-300",
          "bg-white text-brand-charcoal",
          "focus:outline-none focus:ring-2 focus:ring-brand-charcoal focus:border-transparent",
          "transition-all duration-200",
          "appearance-none cursor-pointer",
          error && "border-red-500 focus:ring-red-500",
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
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
