import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type CardContentProps = ComponentProps<"div">

export function CardContent({ ref, className, ...props }: CardContentProps) {
  return <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
}
