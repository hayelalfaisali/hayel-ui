import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type CardFooterProps = ComponentProps<"div">

export function CardFooter({ ref, className, ...props }: CardFooterProps) {
  return (
    <div
      ref={ref}
      className={cn("flex items-center p-6 pt-0", className)}
      {...props}
    />
  )
}
