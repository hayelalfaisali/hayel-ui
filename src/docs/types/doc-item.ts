export interface ComponentProp {
  name: string
  type: string
  defaultValue?: string
  description: string
  required?: boolean
}

export interface ComponentVersion {
  version: string
  date: string
  summary: string
  changes: string[]
}

export interface ComponentDoc {
  id: string
  name: string
  description: string
  category: string
  currentVersion: string
  installCommand: string
  props: ComponentProp[]
  changelog: ComponentVersion[]
}
