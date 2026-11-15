import { Layers, Moon, Sun, Languages, Terminal } from "lucide-react"

export interface DocsHeaderProps {
  isDark: boolean
  onToggleTheme: () => void
  isRtl: boolean
  onToggleDirection: () => void
}

export function DocsHeader({
  isDark,
  onToggleTheme,
  isRtl,
  onToggleDirection,
}: DocsHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xs dark:border-slate-800 dark:bg-slate-950/95 transition-colors">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white shadow-xs">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-lg tracking-tight">
                Hayel UI
              </span>
              <span className="rounded-md bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-[10px] font-semibold px-2 py-0.5">
                v0.2.0
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              React 19 Headless Component System
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:inline-flex items-center gap-2 rounded-md bg-slate-900 dark:bg-slate-800 text-slate-200 px-3 py-1.5 text-xs font-mono shadow-xs">
            <Terminal className="h-3.5 w-3.5 text-emerald-400" />
            <span>npx hayel-ui add [component]</span>
          </div>

          {/* Direction Toggle */}
          <button
            onClick={onToggleDirection}
            className="flex items-center gap-1.5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle LTR / RTL"
          >
            <Languages className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>{isRtl ? "RTL (عربي)" : "LTR (English)"}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
