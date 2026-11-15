import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends ComponentProps<"input"> {
  isError?: boolean
}

export function Input({
  ref,
  className,
  type = "text",
  isError = false,
  disabled,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      ref={ref}
      disabled={disabled}
      className={cn(
        "flex h-10 w-full rounded-md border bg-white px-3 py-2 text-start text-sm transition-colors",
        "placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus-visible:ring-offset-slate-950",
        isError
          ? "border-rose-500 text-rose-900 focus-visible:ring-rose-500 dark:border-rose-500 dark:text-rose-200"
          : "border-slate-300 text-slate-900 focus-visible:ring-blue-500 focus-visible:ring-offset-white dark:border-slate-700",
        className
      )}
      {...props}
    />
  )
}
