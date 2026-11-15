import type { ComponentDoc } from "../types/doc-item"

export const buttonDocData: ComponentDoc = {
  id: "button",
  name: "Button",
  description: "An interactive button supporting multiple variants and sizes with loading states, polymorphic asChild rendering, and native React 19 ref support.",
  category: "Foundation",
  currentVersion: "v0.2.0",
  installCommand: "npx hayel-ui add button",
  props: [
    {
      name: "variant",
      type: "'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'",
      defaultValue: "'default'",
      description: "Visual style variant of the button",
    },
    {
      name: "size",
      type: "'sm' | 'md' | 'lg' | 'icon'",
      defaultValue: "'md'",
      description: "Dimensions, padding, and font size",
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultValue: "false",
      description: "Displays a spinning loader icon and disables the button",
    },
    {
      name: "asChild",
      type: "boolean",
      defaultValue: "false",
      description: "Merges button classes into a child element (e.g., Next.js Link or <a>)",
    },
    {
      name: "className",
      type: "string",
      description: "Tailwind CSS classes to override default styling",
    },
    {
      name: "ref",
      type: "React.Ref<HTMLButtonElement>",
      description: "Direct reference to the button DOM element (React 19 native ref)",
    },
  ],
  changelog: [
    {
      version: "v0.2.0",
      date: "2026-11-15",
      summary: "React 19 native ref, dark mode, and RTL logical properties",
      changes: [
        "Removed deprecated forwardRef in favor of React 19 direct ref prop.",
        "Added comprehensive dark mode color variants.",
        "Adopted CSS logical properties (start, end, ps, pe) for bidirectional support.",
        "Standardized box radius to rounded-md.",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-11-10",
      summary: "Initial foundational release",
      changes: [
        "Created base button component with CVA variants.",
        "Added automatic spinner loading state using Lucide icon.",
      ],
    },
  ],
}
