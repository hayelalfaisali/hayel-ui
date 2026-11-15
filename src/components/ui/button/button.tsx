import React, { type ComponentProps } from "react"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants, type ButtonVariantProps } from "./button.variants"

export interface ButtonProps
  extends ComponentProps<"button">,
    ButtonVariantProps {
  isLoading?: boolean
  asChild?: boolean
}

export function Button({
  ref,
  className,
  variant,
  size,
  isLoading = false,
  disabled,
  children,
  asChild = false,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(classes, (children.props as { className?: string }).className),
    })
  }

  return (
    <button
      ref={ref}
      disabled={disabled || isLoading}
      className={classes}
      {...props}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin text-current" />}
      {children}
    </button>
  )
}
