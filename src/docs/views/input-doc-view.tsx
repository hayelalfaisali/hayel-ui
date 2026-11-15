import { useState } from "react"
import { inputDocData } from "../data/input-doc"
import { CodeBlock } from "../components/code-block"
import { PropsTable } from "../components/props-table"
import { ChangelogView } from "../components/changelog-view"
import { InputPlayground } from "../components/playground/input-playground"

export function InputDocView() {
  const [activeTab, setActiveTab] = useState<"preview" | "code" | "props" | "changelog">("preview")

  const usageSnippet = `import { Input } from "@/components/ui/input"

export function LoginForm() {
  return (
    <div className="space-y-3">
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input isError placeholder="Invalid email address" />
    </div>
  )
}`

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{inputDocData.name}</h1>
          <span className="rounded-md bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 text-xs font-semibold px-2 py-0.5">
            {inputDocData.currentVersion}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400">{inputDocData.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs font-medium">
        <button
          onClick={() => setActiveTab("preview")}
          className={`pb-2.5 transition-colors border-b-2 -mb-[1px] ${
            activeTab === "preview" ? "border-blue-600 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Interactive Playground
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`pb-2.5 transition-colors border-b-2 -mb-[1px] ${
            activeTab === "code" ? "border-blue-600 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Installation & Usage
        </button>
        <button
          onClick={() => setActiveTab("props")}
          className={`pb-2.5 transition-colors border-b-2 -mb-[1px] ${
            activeTab === "props" ? "border-blue-600 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Props & Schema
        </button>
        <button
          onClick={() => setActiveTab("changelog")}
          className={`pb-2.5 transition-colors border-b-2 -mb-[1px] ${
            activeTab === "changelog" ? "border-blue-600 text-blue-600 dark:text-blue-400 font-semibold" : "border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
          }`}
        >
          Changelog ({inputDocData.changelog.length})
        </button>
      </div>

      {/* Tab Panels */}
      {activeTab === "preview" && <InputPlayground />}
      {activeTab === "code" && (
        <div className="space-y-4">
          <CodeBlock code={inputDocData.installCommand} title="CLI Install Command" />
          <CodeBlock code={usageSnippet} title="React 19 Usage Example" />
        </div>
      )}
      {activeTab === "props" && <PropsTable props={inputDocData.props} />}
      {activeTab === "changelog" && <ChangelogView changelog={inputDocData.changelog} />}
    </div>
  )
}
