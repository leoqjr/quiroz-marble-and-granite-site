import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        [
          // Layout
          "flex w-full min-h-24 resize-none",
          // Softer, premium radius
          "rounded-2xl",
          // Warm surface + subtle border
          "border border-border/70 bg-input/70",
          "px-3 py-2",
          // Typography
          "text-sm md:text-[13px] text-foreground placeholder:text-muted-foreground",
          // Transitions
          "transition-colors transition-shadow duration-150 ease-out",
          // Focus state
          "outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-60",
          // Validation
          "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
          "dark:aria-invalid:border-destructive/60 dark:aria-invalid:ring-destructive/35",
        ],
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
