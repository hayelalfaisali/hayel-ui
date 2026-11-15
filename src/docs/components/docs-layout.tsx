import { useState } from "react"
import { useTheme } from "@/hooks/use-theme"
import { useDirection } from "@/hooks/use-direction"
import { DocsHeader } from "./docs-header"
import { DocsSidebar } from "./docs-sidebar"
import { ButtonDocView } from "../views/button-doc-view"
import { InputDocView } from "../views/input-doc-view"

export function DocsLayout() {
  const [activeId, setActiveId] = useState<string>("button")
  const { isDark, toggleTheme } = useTheme()
  const { isRtl, toggleDirection } = useDirection("ltr")

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <DocsHeader
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isRtl={isRtl}
        onToggleDirection={toggleDirection}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        <DocsSidebar activeId={activeId} onSelect={setActiveId} />
        <main className="flex-1 p-6 sm:p-8 bg-white dark:bg-slate-950 min-w-0 transition-colors">
          <div className="max-w-3xl">
            {activeId === "button" && <ButtonDocView />}
            {activeId === "input" && <InputDocView />}
          </div>
        </main>
      </div>
    </div>
  )
}
