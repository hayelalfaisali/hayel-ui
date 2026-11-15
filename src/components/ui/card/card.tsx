import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type CardProps = ComponentProps<"div">

export function Card({ ref, className, ...props }: CardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "rounded-md border border-slate-200 bg-white text-slate-900 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100",
        className
      )}
      {...props}
    />
  )
}
