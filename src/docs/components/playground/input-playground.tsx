import { useState } from "react"
import { Input } from "@/components/ui/input"

export function InputPlayground() {
  const [placeholder, setPlaceholder] = useState("Enter your email address...")
  const [isError, setIsError] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [customOverride, setCustomOverride] = useState(false)

  return (
    <div className="space-y-4">
      {/* Live Preview Stage */}
      <div className="min-h-[160px] flex flex-col items-center justify-center rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs max-w-md mx-auto w-full transition-colors">
        <label className="text-xs font-medium text-slate-700 dark:text-slate-300 w-full mb-1 text-start">
          Email Address
        </label>
        <Input
          placeholder={placeholder}
          isError={isError}
          disabled={disabled}
          className={customOverride ? "border-purple-500 bg-purple-50/30 dark:bg-purple-950/20 focus-visible:ring-purple-600" : ""}
        />
        {isError && (
          <span className="text-xs text-rose-600 dark:text-rose-400 w-full mt-1 text-start">
            Please enter a valid email address.
          </span>
        )}
      </div>

      {/* Controls */}
      <div className="grid gap-3 sm:grid-cols-2 rounded-md bg-slate-50 dark:bg-slate-900/60 p-4 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
        <div>
          <label className="font-semibold block mb-1">Placeholder Text:</label>
          <input
            type="text"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
            className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-900 dark:text-slate-100"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={isError}
              onChange={(e) => setIsError(e.target.checked)}
              className="rounded-md"
            />
            <span>Error State (isError)</span>
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
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={customOverride}
              onChange={(e) => setCustomOverride(e.target.checked)}
              className="rounded-md"
            />
            <span>Custom className Override</span>
          </label>
        </div>
      </div>
    </div>
  )
}
