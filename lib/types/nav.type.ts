
export interface NavComponent {
  title: string
  description: string
  logo?: string
  href: string
}

export interface NavItem {
  name: string
  href?: string
  icon?: string
  isHyperlink: boolean
  components?: NavComponent[]
}
