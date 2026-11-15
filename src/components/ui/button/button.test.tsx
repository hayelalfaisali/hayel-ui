import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { createRef } from "react"
import { Button } from "./button"

describe("Button component", () => {
  it("renders button with children text", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies rounded-md box radius by default", () => {
    render(<Button>Rounded</Button>)
    const btn = screen.getByRole("button")
    expect(btn.classList.contains("rounded-md")).toBe(true)
  })

  it("allows className override using tailwind-merge", () => {
    render(<Button className="bg-red-500 hover:bg-red-600">Custom</Button>)
    const btn = screen.getByRole("button")
    expect(btn.classList.contains("bg-red-500")).toBe(true)
    expect(btn.classList.contains("bg-blue-600")).toBe(false)
  })

  it("handles onClick events", () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("disables button when disabled or isLoading is true", () => {
    const handleClick = vi.fn()
    const { rerender } = render(<Button disabled onClick={handleClick}>Disabled</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toBeDisabled()
    fireEvent.click(btn)
    expect(handleClick).not.toHaveBeenCalled()

    rerender(<Button isLoading onClick={handleClick}>Loading</Button>)
    expect(btn).toBeDisabled()
  })

  it("supports React 19 native ref passing without forwardRef", () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
