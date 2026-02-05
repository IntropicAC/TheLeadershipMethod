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
          className="text-sm font-medium text-brand-charcoal"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border border-gray-300",
          "bg-white text-brand-charcoal",
          "focus:outline-none focus:ring-2 focus:ring-brand-charcoal focus:border-transparent",
          "placeholder:text-gray-400",
          "transition-all duration-200 resize-none",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
