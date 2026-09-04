import { LucideIcon } from "lucide-react"

export interface NavComponent {
  title: string
  description: string
  logo?: string
  href: string
  icon?: LucideIcon
}

export interface NavItem {
  name: string
  href?: string
  icon?: LucideIcon
  isHyperlink: boolean
  components?: NavComponent[]
}