import { useState, useCallback } from "react"

export interface UseDisclosureProps {
  defaultIsOpen?: boolean
  onOpen?: () => void
  onClose?: () => void
}

export interface UseDisclosureReturn {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export function useDisclosure({
  defaultIsOpen = false,
  onOpen,
  onClose,
}: UseDisclosureProps = {}): UseDisclosureReturn {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)

  const open = useCallback(() => {
    setIsOpen(true)
    onOpen?.()
  }, [onOpen])

  const close = useCallback(() => {
    setIsOpen(false)
    onClose?.()
  }, [onClose])

  const toggle = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev
      if (next) onOpen?.()
      else onClose?.()
      return next
    })
  }, [onOpen, onClose])

  return { isOpen, open, close, toggle }
}
