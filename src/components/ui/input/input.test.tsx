import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { createRef } from "react"
import { Input } from "./input"

describe("Input component", () => {
  it("renders with placeholder and accepts user typing", () => {
    render(<Input placeholder="Username" />)
    const input = screen.getByPlaceholderText("Username")
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: "hayel" } })
    expect(input).toHaveValue("hayel")
  })

  it("applies rounded-md box radius", () => {
    render(<Input placeholder="Radius test" />)
    const input = screen.getByPlaceholderText("Radius test")
    expect(input.classList.contains("rounded-md")).toBe(true)
  })

  it("applies error styles when isError is true", () => {
    render(<Input isError placeholder="Error input" />)
    const input = screen.getByPlaceholderText("Error input")
    expect(input.classList.contains("border-rose-500")).toBe(true)
  })

  it("disables input when disabled is true", () => {
    render(<Input disabled placeholder="Disabled input" />)
    const input = screen.getByPlaceholderText("Disabled input")
    expect(input).toBeDisabled()
  })

  it("supports React 19 native ref forwarding", () => {
    const ref = createRef<HTMLInputElement>()
    render(<Input ref={ref} placeholder="Ref input" />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    ref.current?.focus()
    expect(document.activeElement).toBe(ref.current)
  })
})
