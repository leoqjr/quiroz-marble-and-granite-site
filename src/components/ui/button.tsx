import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import * as React from "react";

const buttonVariants = cva(
  [
    "group/button inline-flex shrink-0 items-center justify-center",
    // Softer, more luxurious pill radius by default
    "rounded-full border border-transparent bg-clip-padding",
    "text-[11px] font-medium uppercase tracking-[0.16em] whitespace-nowrap",
    "transition-all duration-200 ease-out outline-none select-none",
    // Focus + active
    "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/60",
    "active:not-aria-[haspopup]:translate-y-px",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-60",
    // Validation
    "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/25",
    "dark:aria-invalid:border-destructive/60 dark:aria-invalid:ring-destructive/40",
    // Icon defaults
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary: warm charcoal pill
        default:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md",

        // Outline: light, elegant border with subtle fill on hover
        outline:
          "border-border bg-background text-foreground hover:bg-muted/70 hover:-translate-y-0.5 hover:shadow-sm aria-expanded:bg-muted aria-expanded:text-foreground",

        // Secondary: light stone surface
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-sm aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",

        // Ghost: text‑only with soft stone hover
        ghost:
          "bg-transparent text-foreground hover:bg-muted/60 hover:-translate-y-0.5 aria-expanded:bg-muted aria-expanded:text-foreground",

        // Destructive: subtle, not screaming
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/50 focus-visible:ring-destructive/25 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",

        // Link: for inline text links only
        link: "text-primary underline underline-offset-4 hover:text-primary/90",
      },
      size: {
        // Default: good for CTAs (hero, cards)
        default:
          "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        // Extra small: chips, filters, badges
        xs: "h-7 gap-1 px-3 text-[10px] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3",

        // Small: secondary CTAs
        sm: "h-8 gap-1 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",

        // Large: hero CTAs if you want them extra prominent
        lg: "h-10 gap-1.5 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",

        // Icon-only variants
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
