import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        [
          // Layout
          "h-9 w-full min-w-0",
          // Softer, premium radius
          "rounded-2xl",
          // Warm surface + subtle border
          "border border-border/70 bg-input/70",
          "px-3 py-1.5",
          // Typography
          "text-sm md:text-[13px] text-foreground placeholder:text-muted-foreground",
          // Transitions
          "transition-colors transition-shadow duration-150 ease-out",
          // Focus state
          "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
          // Disabled
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
          // Validation
          "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
          "dark:aria-invalid:border-destructive/60 dark:aria-invalid:ring-destructive/35",
          // File inputs
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:px-0 file:text-[12px] file:font-medium file:text-foreground",
        ],
        className,
      )}
      {...props}
    />
  );
}

export { Input };
