import type { NavItem } from '@/types/navigation'

export const contactInfo = {
  phone: '+919876543210',
  displayPhone: '+91 98765 43210',
  email: 'info@riseinfotech.in',
}

export const socialMediaList = [
  { id: 'facebook', url: 'https://facebook.com', icon: 'facebook' },
  { id: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
  { id: 'linkedin', url: 'https://linkedin.com', icon: 'linkedin' },
  { id: 'youtube', url: 'https://youtube.com', icon: 'youtube' },
]

export const navItems: NavItem[] = [
  { label: 'About Us', href: '/about' },
  {
    label: 'SAP ERP Courses',
    href: '/courses',
    megaMenu: [
      {
        label: 'Functional Modules',
        items: [
          { label: 'SAP MM', href: '/courses/sap-mm' },
          { label: 'SAP SD', href: '/courses/sap-sd' },
          { label: 'SAP FICO', href: '/courses/sap-fico' },
          { label: 'SAP EWM', href: '/courses/sap-ewm' },
          { label: 'SAP TM', href: '/courses/sap-tm' },
          { label: 'SAP PP', href: '/courses/sap-pp' },
          { label: 'SAP QM', href: '/courses/sap-qm' },
          { label: 'SAP PM', href: '/courses/sap-pm' },
          { label: 'SAP PS', href: '/courses/sap-ps' },
          { label: 'SAP HR / HCM', href: '/courses/sap-hcm' },
          { label: 'SAP SRM', href: '/courses/sap-srm' },
          { label: 'SAP CRM', href: '/courses/sap-crm' },
          { label: 'SAP PLM', href: '/courses/sap-plm' },
          { label: 'SAP Ariba', href: '/courses/sap-ariba' },
        ],
      },
      {
        label: 'Technical Modules',
        items: [
          { label: 'SAP ABAP', href: '/courses/sap-abap' },
          { label: 'SAP BASIS', href: '/courses/sap-basis' },
          { label: 'SAP Security / GRC', href: '/courses/sap-security' },
          { label: 'SAP BI / BW', href: '/courses/sap-bibw' },
          { label: 'SAP BTP', href: '/courses/sap-btp' },
        ],
      },
    ],
  },
  { label: 'Other Courses', href: '/other-courses' },
  { label: 'Corporate Training', href: '/corporate' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact Us', href: '/contact' },
]