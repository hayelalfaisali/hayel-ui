import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { badgeVariants, type BadgeVariantProps } from "./badge.variants"

export interface BadgeProps
  extends ComponentProps<"div">,
    BadgeVariantProps {}

export function Badge({ ref, className, variant, ...props }: BadgeProps) {
  return (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  )
}
