# AGENTS.md — Development Guidelines & Architectural Rules

This document outlines the mandatory engineering standards for developing and maintaining the `hayel-ui` library. Every AI agent and human contributor must follow these rules without exception.

---

## 1. File Size & Modular Structure
- **Component Limit:** Every component file MUST NOT exceed **100 lines of code**. If it approaches or exceeds 100 lines, immediately decompose it into subcomponents.
- **Hook / Composable Limit:** Every custom hook or composable MUST NOT exceed **100 lines of code**. If it exceeds 100 lines, split it into smaller focused hooks.
- **Logic Separation:** Keep UI presentation separate from complex state and event listeners. Extract state machines, event handlers, and keyboard/focus management into dedicated hook files in `src/hooks/`.

---

## 2. Framework & API Modernity (React 19+)
- **No Deprecated APIs:** Never use legacy or deprecated React APIs.
- **`forwardRef` is Prohibited:** In React 19, `ref` is a standard prop. Functional components must accept `ref` directly (e.g., via `ComponentProps<"button">`). Do not wrap components in `forwardRef` or assign `displayName`.
- **Strict Typing:** All components and hooks must be strictly typed using TypeScript. Export explicit prop interfaces extending native HTML attributes or component schemas.

---

## 3. Design System & Border Radius
- **Mandatory Box Radius:** Every container, card, dialog, input, button, badge, and interactive element MUST use the `rounded-md` class.
- **Override Support:** Always allow style overrides by combining default styles with caller-provided `className` using `cn()` (`clsx` + `tailwind-merge`).

---

## 4. Internationalization & Bidirectional Layout (RTL / LTR)
- **CSS Logical Properties:** Always use CSS logical properties instead of physical directional properties:
  - Use `start` and `end` instead of `left` and `right`.
  - Use `ms-*` / `me-*` (margin inline start/end) instead of `ml-*` / `mr-*`.
  - Use `ps-*` / `pe-*` (padding inline start/end) instead of `pl-*` / `pr-*`.
  - Use `text-start` / `text-end` instead of `text-left` / `text-right`.
  - Use `border-s-*` / `border-e-*` instead of `border-l-*` / `border-r-*`.
  - Use `inset-inline-start` / `inset-inline-end` where applicable.
- All components must render and function seamlessly in both `dir="ltr"` and `dir="rtl"`.

---

## 5. Theme Support (Light & Dark Mode)
- **Dual Theme Support:** Every component must provide high-contrast, beautiful styling in both Light and Dark modes.
- Use Tailwind's `dark:` variant modifiers (e.g., `bg-white dark:bg-slate-900`, `text-slate-900 dark:text-slate-100`, `border-slate-200 dark:border-slate-800`).
- Ensure focus rings, placeholder texts, disabled states, and hover states are tuned for both themes.

---

## 6. Language & Documentation
- **Code & Comments:** All code, comments, JSDocs, commit messages, and documentation files (`README.md`, docs data, playground labels) MUST be written in **English**.
- **Self-Documenting Code:** Write expressive variable and function names. Keep comments concise, clarifying *why* rather than *what*.

---

## 7. Quality Assurance & Testing
- Every component must have automated tests using **Vitest** and **React Testing Library** in a companion `.test.tsx` file.
- Tests must verify:
  1. Default rendering and children.
  2. `rounded-md` class enforcement.
  3. `className` override functionality.
  4. Native React 19 `ref` behavior.
  5. Interactive states (loading, disabled, errors, clicks).
