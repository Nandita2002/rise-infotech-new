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
  megaMenu?: NavCategory[] // for multi-column dropdowns like SAP Courses
  children?: NavChild[]    // for simple single-column dropdowns
}