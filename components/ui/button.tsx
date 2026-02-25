import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md border text-xs font-medium tracking-[0.16em] uppercase transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-primary/60 bg-primary/15 text-primary shadow-[0_0_18px_rgba(198,160,246,0.16)] hover:bg-primary/22 hover:border-primary",
        destructive:
          "border-destructive/60 bg-destructive/15 text-destructive hover:bg-destructive/22 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border-border bg-background/55 hover:border-primary/60 hover:bg-accent/40 hover:text-primary dark:bg-background/35",
        secondary:
          "border-border bg-secondary/60 text-secondary-foreground hover:bg-secondary/85",
        ghost:
          "border-transparent text-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
