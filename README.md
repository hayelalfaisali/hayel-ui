# Hayel UI

A modern, headless, open-source, and fully customizable UI component library built with **React 19**, **TypeScript**, and **Tailwind CSS**.

---

## Key Highlights

- **React 19 Native:** Fully embraces modern React 19 standards (`ref` as a prop). Zero legacy or deprecated APIs like `forwardRef`.
- **RTL & LTR Ready:** Crafted with CSS Logical Properties (`start`, `end`, `ms-*`, `me-*`, `ps-*`, `pe-*`) for first-class bidirectional layouts.
- **Dark & Light Mode:** Built-in seamless support for dark and light color schemes across all components.
- **You Own the Code:** Components install directly into your codebase, giving you full control over every line with zero lock-in.
- **Complete Customizability:** Easily override any style using `className` powered by `tailwind-merge` and `clsx`.
- **Consistent Design Language:** Strictly standardized `rounded-md` box radius across all components.
- **Clean Architecture:** Every single component and hook is modular and under 100 lines of code.

---

## Available Components

- **Button:** Highly accessible button with variants (`default`, `secondary`, `destructive`, `outline`, `ghost`, `link`), sizes, loading states, and polymorphic `asChild` support.
- **Input:** Smart text input supporting error states (`isError`), disabled states, and direct Tailwind customization.
- **Card:** Composable card primitive (`Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`).
- **Badge:** Versatile status tags and chips with semantic variants (`default`, `secondary`, `success`, `warning`, `destructive`, `outline`).
- **Modal:** Accessible headless dialog with escape key detection, backdrop click handling, and body scroll lock.

---

## Getting Started

### 1. Run the Interactive Documentation & Playground
```bash
npm install
npm run dev
```

### 2. Run Automated Test Suite
```bash
npm test
```

### 3. Add Components to Any Project via CLI
```bash
node bin/cli.js add button
node bin/cli.js add input
```

---

## Guidelines for Agents & Contributors

Please refer to [AGENTS.md](./AGENTS.md) for architectural rules, file size limits, CSS logical properties conventions, and React 19 standards.
