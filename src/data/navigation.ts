import type { NavItem } from '@/types/navigation'

export const contactInfo = {
  phone: '+919876543210',
  displayPhone: '+91 98765 43210',
  email: 'info@riseinfotech.in',
}

export const socialMediaList = [
  { id: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'linkedin', url: 'https://linkedin.com', icon: 'linkedin' },
  { id: 'youtube', url: 'https://youtube.com', icon: 'youtube' },
]

export const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/about',
  },

  {
    label: 'SAP ERP Courses',
    href: '/sap-courses',
    children: [
      { label: 'SAP MM', href: '/courses/sap-mm' },
      { label: 'SAP SD', href: '/courses/sap-sd' },
      { label: 'SAP FICO', href: '/courses/sap-fico' },
      { label: 'SAP EWM', href: '/courses/sap-ewm' },
      { label: 'SAP PP', href: '/courses/sap-pp' },
      { label: 'SAP QM', href: '/courses/sap-qm' },
      { label: 'SAP PM', href: '/courses/sap-pm' },
      { label: 'SAP ABAP', href: '/courses/sap-abap' },
      { label: 'SAP BASIS', href: '/courses/sap-basis' },
      { label: 'SAP BTP', href: '/courses/sap-btp' },
    ],
  },

  {
    label: 'AI & Data Science',
    href: '/ai-data-science',
    children: [
      {
        label: 'Python Programming',
        href: '/courses/python-programming',
      },
      {
        label: 'Data Science',
        href: '/courses/data-science',
      },
      {
        label: 'Machine Learning',
        href: '/courses/machine-learning',
      },
      {
        label: 'Artificial Intelligence',
        href: '/courses/artificial-intelligence',
      },
      {
        label: 'Power BI',
        href: '/courses/power-bi',
      },
    ],
  },

  {
    label: 'Workshops',
    href: '/workshops&bootcamps',
    children: [
      {
        label: 'SAP S/4HANA Migration',
        href: '/workshops/s4hana',
      },
      {
        label: 'SAP Fiori & UI5',
        href: '/workshops/fiori',
      },
      {
        label: 'SAP Certification Prep',
        href: '/workshops/certification',
      },
      {
        label: 'SAP Career Bootcamp',
        href: '/workshops/career',
      },
      {
        label: 'Data Science Bootcamp',
        href: '/workshops/data-science',
      },
      {
        label: 'Power BI Masterclass',
        href: '/workshops/powerbi',
      },
    ],
  },

  {
    label: 'Contact',
    href: '/contact',
  },
]