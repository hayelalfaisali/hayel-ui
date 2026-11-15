import { useState } from "react"
import { Button, type ButtonVariantProps } from "@/components/ui/button"

type Variant = NonNullable<ButtonVariantProps["variant"]>
type Size = NonNullable<ButtonVariantProps["size"]>

export function ButtonPlayground() {
  const [variant, setVariant] = useState<Variant>("default")
  const [size, setSize] = useState<Size>("md")
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const variants: Variant[] = ["default", "secondary", "destructive", "outline", "ghost", "link"]
  const sizes: Size[] = ["sm", "md", "lg"]

  return (
    <div className="space-y-4">
      {/* Live Preview Stage */}
      <div className="min-h-[160px] flex items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs transition-colors">
        <Button
          variant={variant}
          size={size}
          isLoading={isLoading}
          disabled={disabled}
        >
          Interactive Button
        </Button>
      </div>

      {/* Controls */}
      <div className="grid gap-3 sm:grid-cols-2 rounded-md bg-slate-50 dark:bg-slate-900/60 p-4 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
        <div>
          <label className="font-semibold block mb-1.5">Variant:</label>
          <div className="flex flex-wrap gap-1.5">
            {variants.map((v) => (
              <button
                key={v}
                onClick={() => setVariant(v)}
                className={`rounded-md px-2.5 py-1 font-mono transition-colors ${
                  variant === v
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="font-semibold block mb-1.5">Size:</label>
          <div className="flex gap-1.5">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`rounded-md px-2.5 py-1 font-mono transition-colors ${
                  size === s
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2 border-t border-slate-200 dark:border-slate-800">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isLoading}
              onChange={(e) => setIsLoading(e.target.checked)}
              className="rounded-md"
            />
            <span>Loading State (isLoading)</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={disabled}
              onChange={(e) => setDisabled(e.target.checked)}
              className="rounded-md"
            />
            <span>Disabled</span>
          </label>
        </div>
      </div>
    </div>
  )
}
