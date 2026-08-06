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
    label: "About",
    href: "/about",
  },

  {
    label: "SAP ERP",
    href: "/sap-courses",
    megaMenu: [
      {
        label: "Functional Modules",
        items: [
          { label: "SAP MM", href: "/courses/sap-mm" },
          { label: "SAP SD", href: "/courses/sap-sd" },
          { label: "SAP FICO", href: "/courses/sap-fico" },
          { label: "SAP PP", href: "/courses/sap-pp" },
          { label: "SAP QM", href: "/courses/sap-qm" },
          { label: "SAP PM", href: "/courses/sap-pm" },
           { label: "SAP EWM", href: "/courses/sap-ewm" },
        ],
      },
      {
        label: "Technical Modules",
        items: [
          { label: "SAP ABAP", href: "/courses/sap-abap" },
          { label: "SAP BASIS", href: "/courses/sap-basis" },
          { label: "SAP BTP", href: "/courses/sap-btp" },
         
        ],
      },
    ],
  },

  {
    label: "AI & Data Science",
    href: "/ai-data-science",
    children: [
      {
  label: "AI Powered Data Analytics",
  href: "/courses/data-analytics-power-bi",
},
    ],
  },

  {
    label: "Data Engineering",
    href: "/data-engineering",
    children: [
      {
        label: "Azure Data Engineering",
        href: "/courses/azure-data-engineering",
      },
      {
        label: "Snowflake Data Engineering",
        href: "/courses/snowflake-data-engineering",
      },
      {
        label: "Databricks Data Engineering",
        href: "/courses/databricks-data-engineering",
      },
    ],
  },

  {
    label: "Others",
    href: "/others",
    children: [
      {
        label: "Corporate Training",
        href: "courses/corporate-training",
      },
      {
        label: "Workshops",
        href: "/workshops&bootcamps",
      },
    ],
  },

  {
    label: "Testimonials",
    href: "/testimonials",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];