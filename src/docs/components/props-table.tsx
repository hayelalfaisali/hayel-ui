import type { ComponentProp } from "../types/doc-item"

export interface PropsTableProps {
  props: ComponentProp[]
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="rounded-md border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs transition-colors">
      <div className="overflow-x-auto">
        <table className="w-full text-start text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-semibold">
            <tr>
              <th className="py-3 px-4 text-start">Prop</th>
              <th className="py-3 px-4 text-start">Type</th>
              <th className="py-3 px-4 text-start">Default</th>
              <th className="py-3 px-4 text-start">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-sans">
            {props.map((p) => (
              <tr key={p.name} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                <td className="py-3 px-4 font-mono font-medium text-blue-600 dark:text-blue-400 text-xs">
                  {p.name}
                </td>
                <td className="py-3 px-4 font-mono text-xs text-slate-700 dark:text-slate-300 bg-slate-50/40 dark:bg-slate-950/40">
                  {p.type}
                </td>
                <td className="py-3 px-4 font-mono text-xs text-slate-500 dark:text-slate-400">
                  {p.defaultValue || "-"}
                </td>
                <td className="py-3 px-4 text-xs text-slate-600 dark:text-slate-300">
                  {p.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
