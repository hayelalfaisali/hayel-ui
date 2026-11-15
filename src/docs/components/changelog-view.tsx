import { History, Sparkles } from "lucide-react"
import type { ComponentVersion } from "../types/doc-item"

export interface ChangelogViewProps {
  changelog: ComponentVersion[]
}

export function ChangelogView({ changelog }: ChangelogViewProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-base">
        <History className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        <span>Component Version History</span>
      </div>

      <div className="relative border-s-2 border-slate-200 dark:border-slate-800 ms-3 ps-6 space-y-8">
        {changelog.map((ver) => (
          <div key={ver.version} className="relative">
            {/* Timeline dot using logical inset */}
            <span className="absolute -start-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 dark:bg-blue-500 shadow-xs" />

            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="rounded-md bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-2 py-0.5 text-xs font-mono font-bold">
                {ver.version}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{ver.date}</span>
            </div>

            <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">{ver.summary}</p>

            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {ver.changes.map((change, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
