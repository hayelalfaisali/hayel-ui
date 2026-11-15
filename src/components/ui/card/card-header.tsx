import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export type CardHeaderProps = ComponentProps<"div">
export type CardTitleProps = ComponentProps<"h3">
export type CardDescriptionProps = ComponentProps<"p">

export function CardHeader({ ref, className, ...props }: CardHeaderProps) {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}

export function CardTitle({ ref, className, ...props }: CardTitleProps) {
  return (
    <h3
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight text-slate-900 text-lg dark:text-slate-100", className)}
      {...props}
    />
  )
}

export function CardDescription({ ref, className, ...props }: CardDescriptionProps) {
  return (
    <p
      ref={ref}
      className={cn("text-sm text-slate-500 dark:text-slate-400", className)}
      {...props}
    />
  )
}
