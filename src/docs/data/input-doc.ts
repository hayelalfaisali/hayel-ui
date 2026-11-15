import type { ComponentDoc } from "../types/doc-item"

export const inputDocData: ComponentDoc = {
  id: "input",
  name: "Input",
  description: "A flexible and accessible text input component supporting error states, disabled states, dark mode, and CSS logical properties.",
  category: "Forms & Inputs",
  currentVersion: "v0.2.0",
  installCommand: "npx hayel-ui add input",
  props: [
    {
      name: "type",
      type: "string",
      defaultValue: "'text'",
      description: "HTML input type (text, email, password, number...)",
    },
    {
      name: "isError",
      type: "boolean",
      defaultValue: "false",
      description: "Applies error border colors and focus indicators",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Disables interaction and reduces opacity",
    },
    {
      name: "className",
      type: "string",
      description: "Tailwind CSS classes to override default styling",
    },
    {
      name: "ref",
      type: "React.Ref<HTMLInputElement>",
      description: "Direct reference to the input DOM element (React 19 native ref)",
    },
  ],
  changelog: [
    {
      version: "v0.2.0",
      date: "2026-11-15",
      summary: "React 19 upgrade, dark mode, and logical properties",
      changes: [
        "Removed deprecated forwardRef in favor of React 19 direct ref prop.",
        "Added full dark mode styling and dark focus rings.",
        "Switched to text-start and logical inline padding for RTL support.",
      ],
    },
    {
      version: "v0.1.0",
      date: "2026-11-10",
      summary: "Initial input component release",
      changes: [
        "Built baseline input supporting native HTML attributes and error states.",
      ],
    },
  ],
}
