import { MousePointerClick, FormInput, Sparkles } from "lucide-react"

export interface DocsSidebarProps {
  activeId: string
  onSelect: (id: string) => void
}

export function DocsSidebar({ activeId, onSelect }: DocsSidebarProps) {
  const items = [
    { id: "button", name: "Button", icon: MousePointerClick, tag: "Core" },
    { id: "input", name: "Input", icon: FormInput, tag: "Core" },
  ]

  return (
    <aside className="w-full md:w-64 shrink-0 border-e border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 transition-colors">
      <div className="mb-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
          Foundation Components
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          Fully tested and accessible primitives.
        </p>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeId === item.id
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full flex items-center justify-between rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold shadow-xs"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon className={`h-4 w-4 ${isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"}`} />
                <span>{item.name}</span>
              </div>
              <span className="rounded-md bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 text-[10px]">
                {item.tag}
              </span>
            </button>
          )
        })}
      </nav>

      <div className="mt-8 rounded-md bg-slate-50 dark:bg-slate-900/60 p-3 border border-slate-200 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200 mb-1">
          <Sparkles className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>React 19 & RTL Ready</span>
        </div>
        Native ref passing, logical properties, and complete light/dark theme support.
      </div>
    </aside>
  )
}
