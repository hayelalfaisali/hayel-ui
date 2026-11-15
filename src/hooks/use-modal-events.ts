import { useEffect } from "react"

export interface UseModalEventsProps {
  isOpen: boolean
  onClose: () => void
  closeOnEscape?: boolean
}

export function useModalEvents({
  isOpen,
  onClose,
  closeOnEscape = true,
}: UseModalEventsProps): void {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose, closeOnEscape])
}
