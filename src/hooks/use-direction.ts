import { useEffect, useState } from "react"

export type Direction = "ltr" | "rtl"

export interface UseDirectionReturn {
  direction: Direction
  isRtl: boolean
  toggleDirection: () => void
  setDirection: (dir: Direction) => void
}

export function useDirection(initial: Direction = "rtl"): UseDirectionReturn {
  const [direction, setDirection] = useState<Direction>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("hayel-ui-dir") as Direction) || initial
    }
    return initial
  })

  useEffect(() => {
    document.documentElement.dir = direction
    localStorage.setItem("hayel-ui-dir", direction)
  }, [direction])

  const toggleDirection = () => {
    setDirection((prev) => (prev === "rtl" ? "ltr" : "rtl"))
  }

  return {
    direction,
    isRtl: direction === "rtl",
    toggleDirection,
    setDirection,
  }
}
