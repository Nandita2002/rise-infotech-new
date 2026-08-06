export interface NavChild {
  label: string
  href: string
}

export interface NavCategory {
  label: string
  items: NavChild[]
}

export interface NavItem {
  label: string
  href: string
  megaMenu?: NavCategory[]
  children?: NavChild[]
}