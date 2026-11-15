import { type ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useModalEvents } from "@/hooks/use-modal-events"
import { ModalPortal } from "./modal-portal"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
  closeOnEscape?: boolean
  closeOnBackdropClick?: boolean
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  closeOnEscape = true,
  closeOnBackdropClick = true,
}: ModalProps) {
  useModalEvents({ isOpen, onClose, closeOnEscape })

  if (!isOpen) return null

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
          onClick={closeOnBackdropClick ? onClose : undefined}
          aria-hidden="true"
        />

        {/* Modal Dialog Box - rounded-md with Dark mode */}
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            "relative z-50 w-full max-w-lg rounded-md bg-white p-6 shadow-xl border border-slate-200 text-start",
            "dark:bg-slate-900 dark:border-slate-800 dark:text-slate-100",
            className
          )}
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>}
            <button
              onClick={onClose}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </ModalPortal>
  )
}
