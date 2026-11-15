import { useState } from "react"
import { Check, Copy } from "lucide-react"

export interface CodeBlockProps {
  code: string
  title?: string
}

export function CodeBlock({ code, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback if clipboard API is restricted
    }
  }

  return (
    <div className="rounded-md border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden shadow-sm text-left font-mono text-sm" dir="ltr">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/60 text-xs text-slate-400">
        <span>{title || "bash"}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 hover:bg-slate-800 hover:text-white transition-colors"
          title="نسخ الكود"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">تم النسخ!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>نسخ</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto text-xs sm:text-sm">
        <pre className="text-slate-200">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}
