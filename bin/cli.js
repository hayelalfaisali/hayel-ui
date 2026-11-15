#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")

const COMPONENTS = {
  button: {
    source: "src/components/ui/button",
    target: "src/components/ui/button",
  },
  input: {
    source: "src/components/ui/input",
    target: "src/components/ui/input",
  },
  card: {
    source: "src/components/ui/card",
    target: "src/components/ui/card",
  },
  badge: {
    source: "src/components/ui/badge",
    target: "src/components/ui/badge",
  },
  modal: {
    source: "src/components/ui/modal",
    target: "src/components/ui/modal",
    extra: [{ source: "src/hooks/use-modal-events.ts", target: "src/hooks/use-modal-events.ts" }],
  },
}

function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file))
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

function copyUtils(targetDir) {
  const utilsSrc = path.join(ROOT, "src/lib/utils.ts")
  const utilsDest = path.join(targetDir, "src/lib/utils.ts")
  if (!fs.existsSync(utilsDest)) {
    fs.mkdirSync(path.dirname(utilsDest), { recursive: true })
    fs.copyFileSync(utilsSrc, utilsDest)
    console.log("✔ Created src/lib/utils.ts")
  }
}

const [,, cmd, name] = process.argv

if (cmd !== "add" || !name || !COMPONENTS[name]) {
  console.log("Usage: hayel-ui add <component>")
  console.log(`Available components: ${Object.keys(COMPONENTS).join(", ")}`)
  process.exit(1)
}

const targetDir = process.cwd()
copyUtils(targetDir)

const comp = COMPONENTS[name]
copyRecursive(path.join(ROOT, comp.source), path.join(targetDir, comp.target))
console.log(`✔ Added ${name} to ${comp.target}`)

if (comp.extra) {
  for (const item of comp.extra) {
    copyRecursive(path.join(ROOT, item.source), path.join(targetDir, item.target))
    console.log(`✔ Added dependency: ${item.target}`)
  }
}

console.log("Done! You have 100% control over the source code.")
