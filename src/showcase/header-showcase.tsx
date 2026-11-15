import { Sparkles, Terminal } from "lucide-react"

export function HeaderShowcase() {
  return (
    <header className="mb-10 text-center">
      <div className="inline-flex items-center gap-2 rounded-md bg-blue-50 border border-blue-200 px-3 py-1 text-sm text-blue-700 font-medium mb-4">
        <Sparkles className="h-4 w-4" />
        مكتبة المكونات المفتوحة للمشاريع الاحترافية
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Hayel UI
      </h1>
      <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
        مكونات واجهة مستخدم مفتوحة، خفيفة، وسريعة مبنية بـ React و Tailwind CSS مع تحكم كامل وإمكانية تخصيص (Override) بلا قيود.
      </p>
      <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-slate-900 text-slate-200 px-4 py-2 text-xs font-mono">
        <Terminal className="h-4 w-4 text-emerald-400" />
        npx hayel-ui add [component]
      </div>
    </header>
  )
}
