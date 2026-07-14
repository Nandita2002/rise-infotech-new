
export interface CurriculumModule {
  title: string
  points: string[]
}

export interface Course {
  id: string
  slug: string

  // Hero
  title: string
  subtitle: string

  // Images
  bannerImage: string
  overviewImage: string

  // Overview
  description: string

  // Content Sections
  whoCanLearn: string[]
  whatYouWillLearn: string[]

  // Curriculum
  curriculum: CurriculumModule[]
}

// ── Course data ──────────────────────────────────────────────
// NOTE: SAP ERP catalog trimmed to the 10 approved courses:
// MM, SD, FICO, PP, QM, PM, EWM, ABAP, BASIS, BTP.
// Data Science courses are untouched (separate section, not part of this trim).
export const courses: Course[] = [
{
  id: "mm",
  slug: "sap-mm",

  title: "SAP MM",
  subtitle: "Materials Management",

  bannerImage: "/sapmm.png",
  overviewImage: "/sapmm.png",

  description:
    "SAP MM covers the procurement and materials lifecycle inside SAP from purchase requisitions to invoice verification and inventory management.",

  whoCanLearn: [
    "Supply Chain Professionals",
    "Procurement Officers",
    "Inventory Managers",
    "Production Planners",
    "SAP Consultants",
    "Finance Professionals",
    "Career Changers",
    "Students & Graduates",
    "Working Professionals",
  ],

  whatYouWillLearn: [
    "SAP ERP Overview",
    "SAP Architecture",
    "Enterprise Structure",
    "Material Master",
    "Vendor Master",
    "Purchasing",
    "Inventory Management",
    "Invoice Verification",
    "MRP",
    "Stock Transport Order",
    "SAP Fiori",
    "Data Migration",
    "Support Project",
  ],

  curriculum: [
    {
      title: "Module 1",
      points: [
        "Enterprise Structure",
        "Master Data",
      ],
    },
    {
      title: "Module 2",
      points: [
        "Procurement",
        "Inventory Management",
      ],
    },
  ],
},
{
  id: "sap-sd",
  slug: "sap-sd",

  title: "SAP SD",
  subtitle: "SAP S/4HANA Sales & Distribution",

  bannerImage: "/sapsd.png",
  overviewImage: "/sapsd.png",

  description:
    "SAP Sales and Distribution (SAP SD) is a core functional module in SAP ERP that manages the complete Order-to-Cash (OTC) process, including sales order processing, shipping, billing, pricing, and customer management. This course provides comprehensive training in SAP S/4HANA Sales with hands-on configuration, real-time business scenarios, implementation concepts, and project-based learning to prepare learners for successful SAP careers.",

  whoCanLearn: [
    "Sales & Marketing Professionals",
    "Distribution & Logistics Managers",
    "IT Professionals",
    "SAP Functional Consultants",
    "Finance & Accounting Professionals",
    "Working Professionals",
    "Career Switchers",
    "Students & Graduates"
  ],

  whatYouWillLearn: [
    "SAP ERP Overview",
    "Introduction to SAP SD",
    "SAP System Landscape",
    "SAP Architecture",
    "SAP Functional & Technical Modules Overview",
    "SAP SD Enterprise Structure",
    "Master Data Configuration",
    "Standard Business Process Configuration",
    "Special Business Process Configuration",
    "Sales Documents & Controls",
    "Pricing Procedure",
    "Basic Functions",
    "Credit Management",
    "Output Determination",
    "Copy Controls",
    "Cross-Module Integration with MM, FICO & PP",
    "SAP SD Configuration",
    "Real-Time Project Scenarios",
    "Overview of SAP Implementation Projects",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Data Migration",
    "Enhancements",
    "RICEFW Custom Objects",
    "SAP Fiori Applications Overview",
    "Technical Terminologies",
    "Project Documentation (BPML, KDS, FIT-GAP, FSD & User Manuals)",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP ERP & SAP SD Fundamentals",
      points: [
        "SAP ERP Overview",
        "Introduction to SAP SD",
        "SAP System Landscape",
        "SAP Architecture",
        "Functional & Technical Modules"
      ]
    },
    {
      title: "Module 2: Enterprise Structure & Master Data",
      points: [
        "Enterprise Structure",
        "Customer Master",
        "Material Master",
        "Partner Functions",
        "Master Data Configuration"
      ]
    },
    {
      title: "Module 3: Sales Process Configuration",
      points: [
        "Sales Documents",
        "Standard Sales Process",
        "Special Sales Process",
        "Pricing Procedure",
        "Basic Functions"
      ]
    },
    {
      title: "Module 4: Advanced SAP SD",
      points: [
        "Credit Management",
        "Output Determination",
        "Copy Controls",
        "Cross-Module Integration (MM, PP & FICO)"
      ]
    },
    {
      title: "Module 5: SAP S/4HANA Implementation",
      points: [
        "SAP Activate Methodology",
        "SAP S/4HANA Overview",
        "SAP Fiori Applications",
        "Transport Requests",
        "Testing & Test Scripts",
        "Data Migration"
      ]
    },
    {
      title: "Module 6: Real-Time Projects & Support",
      points: [
        "Implementation Project",
        "Support Project",
        "Enhancements",
        "RICEFW Objects",
        "Technical Terminologies",
        "Project Documentation"
      ]
    }
  ]
},
{
  id: "sap-fico",
  slug: "sap-fico",

  title: "SAP FICO",
  subtitle: "SAP S/4HANA Finance",

  bannerImage: "/sapfico.png",
  overviewImage: "/sapfico.png",

  description:
    "SAP FICO (Financial Accounting & Controlling) is one of the most widely used functional modules in SAP ERP, enabling organizations to manage financial accounting, reporting, budgeting, cost control, and profitability analysis. This course covers SAP S/4HANA Finance with practical configuration, real-time business scenarios, implementation methodology, and project-based learning to prepare learners for finance and SAP consulting careers.",

  whoCanLearn: [
    "Finance & Accounting Professionals",
    "Chartered Accountants (CA)",
    "MBA Finance Students",
    "Business Analysts",
    "SAP Functional Consultants",
    "Working Professionals",
    "Career Switchers",
    "Students & Graduates"
  ],

  whatYouWillLearn: [
    "SAP ERP Overview",
    "SAP Architecture",
    "SAP Functional & Technical Modules Overview",
    "Introduction to SAP FICO",
    "SAP System Landscape",
    "Enterprise Structure",
    "General Ledger (GL) Accounting",
    "Accounts Payable (AP)",
    "Accounts Receivable (AR)",
    "Asset Accounting",
    "Bank Accounting",
    "Cost Element Accounting",
    "Cost Center Accounting",
    "Profit Center Accounting",
    "Product Cost Controlling",
    "Profitability Analysis (CO-PA)",
    "Cross-Module Integration with MM, SD, PP, PM & EWM",
    "SAP S/4HANA Finance Overview",
    "SAP Fiori Applications",
    "Real-Time Project Scenarios",
    "SAP Project Lifecycle",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Data Migration",
    "Enhancements",
    "Technical Terminologies",
    "Project Documentation (BPML, KDS, FIT-GAP, FSD & User Manuals)",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP ERP & SAP FICO Fundamentals",
      points: [
        "SAP ERP Overview",
        "Introduction to SAP FICO",
        "SAP System Landscape",
        "SAP Architecture",
        "Functional & Technical Modules"
      ]
    },
    {
      title: "Module 2: Financial Accounting (FI)",
      points: [
        "Enterprise Structure",
        "General Ledger (GL)",
        "Accounts Payable (AP)",
        "Accounts Receivable (AR)",
        "Asset Accounting",
        "Bank Accounting"
      ]
    },
    {
      title: "Module 3: Controlling (CO)",
      points: [
        "Cost Element Accounting",
        "Cost Center Accounting",
        "Profit Center Accounting",
        "Product Cost Controlling",
        "Profitability Analysis (CO-PA)"
      ]
    },
    {
      title: "Module 4: Integration & SAP S/4HANA",
      points: [
        "Integration with MM",
        "Integration with SD",
        "Integration with PP",
        "Integration with PM",
        "Integration with EWM",
        "SAP S/4HANA Finance",
        "SAP Fiori Applications"
      ]
    },
    {
      title: "Module 5: SAP Implementation",
      points: [
        "Real-Time Project Scenarios",
        "SAP Project Lifecycle",
        "SAP Activate Methodology",
        "Transport Requests",
        "Testing & Test Scripts",
        "Data Migration"
      ]
    },
    {
      title: "Module 6: Support & Documentation",
      points: [
        "Enhancements",
        "Technical Terminologies",
        "BPML",
        "KDS",
        "FIT-GAP",
        "FSD",
        "User Manuals",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-ewm",
  slug: "sap-ewm",

  title: "SAP EWM",
  subtitle: "SAP S/4HANA Extended Warehouse Management",

  bannerImage: "/sapewm.png",
  overviewImage: "/sapewm.png",

  description:
    "SAP Extended Warehouse Management (SAP EWM) is an advanced warehouse management solution within SAP S/4HANA that helps organizations optimize warehouse operations, inventory management, inbound and outbound logistics, and supply chain processes. This course provides hands-on training in SAP EWM with real-time business scenarios, warehouse configuration, implementation methodology, and project-based learning to prepare learners for careers in warehouse and supply chain management.",

  whoCanLearn: [
    "Students & Graduates",
    "Warehouse Professionals",
    "Logistics Professionals",
    "Supply Chain Managers",
    "Inventory Managers",
    "IT Professionals",
    "SAP Functional Consultants",
    "Working Professionals"
  ],

  whatYouWillLearn: [
    "Introduction to SAP EWM",
    "Warehouse Stock Management",
    "Warehouse Organizational Structure",
    "Warehouse Document Types",
    "Inbound Processing",
    "Outbound Processing",
    "Put-Away Strategies",
    "Picking Strategies",
    "Internal Warehouse Movements",
    "Multi-Step Warehouse Processes",
    "Physical Inventory Process",
    "Warehouse Monitoring",
    "Warehouse Reporting",
    "Exception Handling",
    "Cross Docking",
    "Yard Management",
    "Automatic Warehouse Configuration",
    "Real-Time Project Scenarios",
    "SAP S/4HANA & SAP Fiori Overview",
    "SAP ECC vs SAP S/4HANA",
    "SPRO Path vs SAP Easy Access",
    "SAP Project Lifecycle",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Interfaces & Enhancements"
  ],

  curriculum: [
    {
      title: "Module 1: SAP EWM Fundamentals",
      points: [
        "Introduction to SAP EWM",
        "Warehouse Management Overview",
        "Warehouse Organizational Structure",
        "Warehouse Stock Management",
        "Warehouse Document Types"
      ]
    },
    {
      title: "Module 2: Warehouse Operations",
      points: [
        "Inbound Processing",
        "Outbound Processing",
        "Put-Away Processing",
        "Picking Strategies",
        "Internal Warehouse Movements",
        "Multi-Step Warehouse Processes"
      ]
    },
    {
      title: "Module 3: Advanced Warehouse Management",
      points: [
        "Physical Inventory",
        "Warehouse Monitoring",
        "Warehouse Reporting",
        "Exception Handling",
        "Cross Docking",
        "Yard Management"
      ]
    },
    {
      title: "Module 4: SAP S/4HANA & Integration",
      points: [
        "SAP S/4HANA Overview",
        "SAP Fiori Applications",
        "SAP ECC vs SAP S/4HANA",
        "SPRO Path vs Easy Access",
        "Automatic Configuration"
      ]
    },
    {
      title: "Module 5: SAP Implementation",
      points: [
        "Real-Time Project Scenarios",
        "SAP Project Lifecycle",
        "SAP Activate Methodology",
        "Transport Requests",
        "Testing & Test Scripts"
      ]
    },
    {
      title: "Module 6: Interfaces & Support",
      points: [
        "Interfaces",
        "Enhancements",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-pp",
  slug: "sap-pp",

  title: "SAP PP",
  subtitle: "SAP S/4HANA Production Planning",

  bannerImage: "/sappp.png",
  overviewImage: "/sappp.png",

  description:
    "SAP Production Planning (SAP PP) is a core module in SAP S/4HANA that enables organizations to efficiently plan, schedule, execute, and monitor manufacturing operations. It integrates production planning with inventory, procurement, sales, and quality management to optimize manufacturing processes and resource utilization. This course provides hands-on training in SAP PP through real-time business scenarios, configuration, implementation concepts, and project-based learning.",

  whoCanLearn: [
    "Production Planners & Managers",
    "Manufacturing Professionals",
    "Operations Professionals",
    "Business Analysts",
    "SAP Functional Consultants",
    "Working Professionals",
    "Students & Graduates",
    "Career Switchers"
  ],

  whatYouWillLearn: [
    "SAP ERP Overview",
    "Introduction to SAP PP",
    "SAP System Landscape",
    "SAP Architecture",
    "SAP Functional & Technical Modules Overview",
    "SAP PP Organizational Structure",
    "Master Data",
    "Production Planning Cycle",
    "Demand Management",
    "Make-to-Stock (MTS)",
    "Make-to-Order (MTO)",
    "Material Requirements Planning (MRP)",
    "Capacity Planning & Leveling",
    "Long-Term Planning (LTP)",
    "Production Orders",
    "Order Confirmation",
    "Order Settlement & Closure",
    "Automatic Configuration",
    "Real-Time Project Scenarios",
    "SAP S/4HANA & SAP Fiori Overview",
    "SAP ECC vs SAP S/4HANA",
    "SPRO Path vs SAP Easy Access",
    "SAP Project Lifecycle",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Interfaces & Enhancements",
    "Technical Terminologies",
    "Project Documentation (BPML, KDS, FIT-GAP, FSD & User Manuals)",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP PP Fundamentals",
      points: [
        "SAP ERP Overview",
        "Introduction to SAP PP",
        "SAP System Landscape",
        "SAP Architecture",
        "SAP Functional & Technical Modules"
      ]
    },
    {
      title: "Module 2: Organizational Structure & Master Data",
      points: [
        "SAP PP Organizational Structure",
        "Material Master",
        "Bill of Materials (BOM)",
        "Work Centers",
        "Routings",
        "Production Versions"
      ]
    },
    {
      title: "Module 3: Production Planning",
      points: [
        "Production Planning Cycle",
        "Demand Management",
        "Make-to-Stock (MTS)",
        "Make-to-Order (MTO)",
        "Material Requirements Planning (MRP)",
        "Capacity Planning & Leveling",
        "Long-Term Planning (LTP)"
      ]
    },
    {
      title: "Module 4: Production Execution",
      points: [
        "Production Orders",
        "Order Confirmation",
        "Order Settlement",
        "Production Order Closure",
        "Automatic Configuration"
      ]
    },
    {
      title: "Module 5: SAP S/4HANA Implementation",
      points: [
        "Real-Time Project Scenarios",
        "SAP Project Lifecycle",
        "SAP Activate Methodology",
        "SAP S/4HANA Overview",
        "SAP Fiori Applications",
        "SAP ECC vs SAP S/4HANA",
        "SPRO Path vs Easy Access",
        "Transport Requests",
        "Testing & Test Scripts"
      ]
    },
    {
      title: "Module 6: Support & Documentation",
      points: [
        "Interfaces",
        "Enhancements",
        "Technical Terminologies",
        "BPML",
        "KDS",
        "FIT-GAP",
        "FSD",
        "User Manuals",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-qm",
  slug: "sap-qm",

  title: "SAP QM",
  subtitle: "SAP S/4HANA Quality Management",

  bannerImage: "/sapqm.png",
  overviewImage: "/sapqm.png",

  description:
    "SAP Quality Management (SAP QM) is a core module in SAP S/4HANA that enables organizations to plan, monitor, inspect, and improve product quality throughout the manufacturing and supply chain lifecycle. It integrates seamlessly with procurement, production, inventory, sales, and maintenance processes to ensure products meet quality standards and regulatory requirements. This course provides practical training in SAP QM through real-time business scenarios, configuration, implementation concepts, and project-based learning.",

  whoCanLearn: [
    "Quality Managers & Engineers",
    "Quality Assurance Professionals",
    "Quality Control Engineers",
    "Manufacturing Professionals",
    "Business Analysts",
    "SAP Functional Consultants",
    "Working Professionals",
    "Students & Graduates"
  ],

  whatYouWillLearn: [
    "Introduction to SAP QM",
    "SAP ERP Overview",
    "SAP System Landscape",
    "SAP Architecture",
    "SAP Functional & Technical Modules Overview",
    "Quality Planning",
    "Quality Inspection",
    "Inspection Types",
    "Inspection Lots",
    "Inspection Methods",
    "Quality Notifications",
    "Defect Management",
    "Quality Certificates",
    "Quality Documentation",
    "Supplier Quality Management",
    "Audit Management",
    "Quality Control Processes",
    "Integration with MM",
    "Integration with PP",
    "Integration with PM",
    "Integration with SD",
    "SAP S/4HANA & SAP Fiori Overview",
    "Real-Time Project Scenarios",
    "SAP Project Lifecycle",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Data Migration",
    "Enhancements",
    "Technical Terminologies",
    "Project Documentation (BPML, KDS, FIT-GAP, FSD & User Manuals)",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP QM Fundamentals",
      points: [
        "Introduction to SAP QM",
        "SAP ERP Overview",
        "SAP System Landscape",
        "SAP Architecture",
        "SAP Functional & Technical Modules"
      ]
    },
    {
      title: "Module 2: Quality Planning & Inspection",
      points: [
        "Quality Planning",
        "Inspection Types",
        "Inspection Lots",
        "Inspection Methods",
        "Quality Inspection Process"
      ]
    },
    {
      title: "Module 3: Quality Control & Notifications",
      points: [
        "Quality Notifications",
        "Defect Management",
        "Quality Certificates",
        "Quality Documentation",
        "Supplier Quality Management",
        "Audit Management"
      ]
    },
    {
      title: "Module 4: Integration & SAP S/4HANA",
      points: [
        "Integration with MM",
        "Integration with PP",
        "Integration with PM",
        "Integration with SD",
        "SAP S/4HANA Overview",
        "SAP Fiori Applications"
      ]
    },
    {
      title: "Module 5: SAP Implementation",
      points: [
        "Real-Time Project Scenarios",
        "SAP Project Lifecycle",
        "SAP Activate Methodology",
        "Transport Requests",
        "Testing & Test Scripts",
        "Data Migration"
      ]
    },
    {
      title: "Module 6: Support & Documentation",
      points: [
        "Enhancements",
        "Technical Terminologies",
        "BPML",
        "KDS",
        "FIT-GAP",
        "FSD",
        "User Manuals",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-pm",
  slug: "sap-pm",

  title: "SAP PM",
  subtitle: "SAP S/4HANA Plant Maintenance",

  bannerImage: "/sappm.png",
  overviewImage: "/sappm.png",

  description:
    "SAP Plant Maintenance (SAP PM) is a core module in SAP S/4HANA that enables organizations to efficiently manage maintenance activities for equipment, machinery, and technical assets. It supports preventive, corrective, and breakdown maintenance while improving asset reliability, minimizing downtime, and optimizing maintenance costs. This course provides practical training in SAP PM through real-time business scenarios, configuration, implementation concepts, and project-based learning.",

  whoCanLearn: [
    "Maintenance Managers",
    "Maintenance Engineers & Technicians",
    "Plant Engineers",
    "Asset Management Professionals",
    "Business Analysts",
    "SAP Functional Consultants",
    "Working Professionals",
    "Students & Graduates"
  ],

  whatYouWillLearn: [
    "Introduction to SAP PM",
    "SAP ERP Overview",
    "SAP System Landscape",
    "SAP Architecture",
    "SAP Functional & Technical Modules Overview",
    "Equipment Management",
    "Technical Objects Management",
    "Functional Locations",
    "Maintenance Planning",
    "Preventive Maintenance",
    "Corrective Maintenance",
    "Breakdown Maintenance",
    "Maintenance Work Orders",
    "Scheduling & Resource Management",
    "Maintenance Execution",
    "Spare Parts Management",
    "Maintenance Notifications",
    "Asset Lifecycle Management",
    "Integration with MM",
    "Integration with PP",
    "Integration with QM",
    "Integration with FICO",
    "SAP S/4HANA & SAP Fiori Overview",
    "Real-Time Project Scenarios",
    "SAP Project Lifecycle",
    "SAP Activate Methodology",
    "SAP S/4HANA (On-Premise & Cloud) Overview",
    "Transport Requests (TR Movements)",
    "Software Testing Types",
    "Test Script Preparation & Execution",
    "Data Migration",
    "Enhancements",
    "Technical Terminologies",
    "Project Documentation (BPML, KDS, FIT-GAP, FSD & User Manuals)",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP PM Fundamentals",
      points: [
        "Introduction to SAP PM",
        "SAP ERP Overview",
        "SAP System Landscape",
        "SAP Architecture",
        "SAP Functional & Technical Modules"
      ]
    },
    {
      title: "Module 2: Technical Objects",
      points: [
        "Equipment Management",
        "Functional Locations",
        "Technical Objects",
        "Asset Structure"
      ]
    },
    {
      title: "Module 3: Maintenance Management",
      points: [
        "Maintenance Planning",
        "Preventive Maintenance",
        "Corrective Maintenance",
        "Breakdown Maintenance",
        "Maintenance Notifications",
        "Maintenance Work Orders"
      ]
    },
    {
      title: "Module 4: Maintenance Execution",
      points: [
        "Scheduling & Resource Management",
        "Maintenance Execution",
        "Spare Parts Management",
        "Asset Lifecycle Management",
        "Integration with MM, PP, QM & FICO"
      ]
    },
    {
      title: "Module 5: SAP S/4HANA Implementation",
      points: [
        "Real-Time Project Scenarios",
        "SAP Project Lifecycle",
        "SAP Activate Methodology",
        "SAP S/4HANA Overview",
        "SAP Fiori Applications",
        "Transport Requests",
        "Testing & Test Scripts",
        "Data Migration"
      ]
    },
    {
      title: "Module 6: Support & Documentation",
      points: [
        "Enhancements",
        "Technical Terminologies",
        "BPML",
        "KDS",
        "FIT-GAP",
        "FSD",
        "User Manuals",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-abap",
  slug: "sap-abap",

  title: "SAP ABAP",
  subtitle: "Advanced Business Application Programming",

  bannerImage: "/sapabap.png",
  overviewImage: "/sapabap.png",

  description:
    "SAP ABAP (Advanced Business Application Programming) is SAP's proprietary programming language used to develop, customize, and extend SAP applications. It enables developers to create reports, interfaces, enhancements, forms, workflows, and business applications across SAP ERP and SAP S/4HANA systems. This course provides practical hands-on training in ABAP development with real-world programming scenarios, debugging techniques, and implementation projects.",

  whoCanLearn: [
    "Software Developers",
    "Java/.NET Developers",
    "SAP Technical Consultants",
    "Business Analysts",
    "Working Professionals",
    "Engineering Students",
    "Students & Graduates",
    "Career Switchers"
  ],

  whatYouWillLearn: [
    "Introduction to SAP ABAP",
    "SAP Architecture",
    "SAP Development Environment",
    "ABAP Workbench",
    "ABAP Data Dictionary",
    "Programming Constructs",
    "Internal Tables",
    "Modularization Techniques",
    "Reports Programming",
    "Forms & SmartForms",
    "Adobe Forms",
    "Enhancements & Modifications",
    "User Exits",
    "Customer Exits",
    "BADI",
    "Object-Oriented ABAP (OOABAP)",
    "Database Access (Open SQL)",
    "ALV Reports",
    "Function Modules",
    "RFC & BAPI",
    "Interfaces",
    "IDocs",
    "Debugging Techniques",
    "Performance Optimization",
    "Testing",
    "SAP S/4HANA Development Overview",
    "Real-Time Project",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP ABAP Fundamentals",
      points: [
        "SAP Overview",
        "ABAP Architecture",
        "Development Environment",
        "ABAP Workbench",
        "Data Dictionary"
      ]
    },
    {
      title: "Module 2: ABAP Programming",
      points: [
        "Programming Constructs",
        "Internal Tables",
        "Modularization",
        "Reports",
        "ALV Reports"
      ]
    },
    {
      title: "Module 3: Advanced Development",
      points: [
        "Forms",
        "SmartForms",
        "Adobe Forms",
        "Enhancements",
        "User Exits",
        "BADI"
      ]
    },
    {
      title: "Module 4: Database & Integration",
      points: [
        "Open SQL",
        "Function Modules",
        "RFC",
        "BAPI",
        "IDocs",
        "Interfaces"
      ]
    },
    {
      title: "Module 5: Object-Oriented ABAP",
      points: [
        "Classes",
        "Objects",
        "Inheritance",
        "Polymorphism",
        "Exception Handling"
      ]
    },
    {
      title: "Module 6: Projects & Support",
      points: [
        "Debugging",
        "Performance Tuning",
        "Testing",
        "Real-Time Project",
        "Support Project"
      ]
    }
  ]
},
{
  id: "sap-basis",
  slug: "sap-basis",

  title: "SAP BASIS",
  subtitle: "Business Application Software Integrated Solution",

  bannerImage: "/sapbasis.png",
  overviewImage: "/sapbasis.png",

  description:
    "SAP BASIS is the technical foundation of SAP systems responsible for installation, configuration, administration, monitoring, security, upgrades, and performance optimization. It enables SAP applications to run efficiently while ensuring system availability, scalability, and reliability. This course provides practical training in SAP BASIS administration using real-world system management scenarios and implementation projects.",

  whoCanLearn: [
    "System Administrators",
    "SAP Technical Consultants",
    "Database Administrators",
    "Network Administrators",
    "IT Support Engineers",
    "Cloud Administrators",
    "Working Professionals",
    "Students & Graduates"
  ],

  whatYouWillLearn: [
    "Introduction to SAP BASIS",
    "SAP System Architecture",
    "SAP Landscape Management",
    "Application Administration",
    "Database Administration",
    "SAP Installation",
    "System Configuration",
    "User Administration",
    "Authorization Management",
    "System Security",
    "Performance Tuning",
    "System Monitoring",
    "Patch Management",
    "Kernel Upgrade",
    "SAP Upgrade",
    "Backup & Recovery",
    "Transport Management System (TMS)",
    "Interface Management",
    "OS/DB Migration",
    "Load Balancing",
    "SAP S/4HANA Administration",
    "Root Cause Analysis",
    "Hardening & Security",
    "High Availability",
    "Real-Time Project",
    "Support Project"
  ],

  curriculum: [
    {
      title: "Module 1: SAP BASIS Fundamentals",
      points: [
        "SAP Architecture",
        "System Landscape",
        "SAP Installation",
        "System Configuration",
        "Application Administration"
      ]
    },
    {
      title: "Module 2: Administration",
      points: [
        "Database Administration",
        "User Administration",
        "Authorizations",
        "Transport Management",
        "Interface Management"
      ]
    },
    {
      title: "Module 3: Performance & Security",
      points: [
        "Performance Tuning",
        "System Monitoring",
        "Load Balancing",
        "Security",
        "Hardening"
      ]
    },
    {
      title: "Module 4: Upgrades & Migration",
      points: [
        "Patch Management",
        "Kernel Upgrade",
        "SAP Upgrade",
        "OS/DB Migration",
        "Backup & Recovery"
      ]
    },
    {
      title: "Module 5: SAP S/4HANA Administration",
      points: [
        "SAP S/4HANA Overview",
        "Landscape Management",
        "High Availability",
        "Root Cause Analysis"
      ]
    },
    {
      title: "Module 6: Projects & Support",
      points: [
        "Real-Time Project",
        "Support Project",
        "Troubleshooting",
        "Best Practices"
      ]
    }
  ]
},
{
  id: "sap-btp",
  slug: "sap-btp",

  title: "SAP BTP",
  subtitle: "SAP Business Technology Platform",

  bannerImage: "/sapbtp.png",
  overviewImage: "/sapbtp.png",

  description:
    "SAP Business Technology Platform (SAP BTP) is SAP's cloud platform that enables organizations to build, integrate, extend, and innovate business applications. It combines application development, database and data management, analytics, AI, automation, and integration services into a unified platform. This course provides hands-on training in SAP BTP using real-world business scenarios, cloud-native development, integrations, and enterprise implementation projects.",

  whoCanLearn: [
    "IT Professionals & System Administrators",
    "Software Developers",
    "Application Architects",
    "Data Analysts & Data Scientists",
    "Business Analysts & Consultants",
    "SAP Consultants",
    "Project Managers",
    "Digital Transformation Professionals",
    "Students & Graduates",
    "Entrepreneurs & Tech Startups"
  ],

  whatYouWillLearn: [
    "Introduction to SAP BTP",
    "Overview of SAP Business Technology Platform",
    "SAP BTP Architecture",
    "Database & Data Management",
    "SAP HANA Cloud",
    "SAP Data Warehouse Cloud",
    "SAP Data Intelligence",
    "Application Development",
    "SAP Business Application Studio",
    "SAP Extension Suite",
    "Low-Code / No-Code Development",
    "SAP Integration Suite",
    "Process Integration",
    "API Management",
    "Security & Compliance",
    "Security Best Practices",
    "Identity & Access Management",
    "DevOps & CI/CD",
    "Continuous Integration & Continuous Deployment",
    "Cloud Deployment Strategies",
    "Internet of Things (IoT)",
    "Robotic Process Automation (RPA)",
    "Artificial Intelligence Services",
    "Machine Learning Services",
    "Multi-Cloud Deployments",
    "Hybrid Cloud Architecture",
    "Application Deployment",
    "Real-World Business Use Cases",
    "Hands-on Projects & Case Studies"
  ],

  curriculum: [
    {
      title: "Module 1: SAP BTP Fundamentals",
      points: [
        "Introduction to SAP BTP",
        "SAP BTP Overview",
        "SAP BTP Architecture",
        "Global Account & Subaccounts",
        "Cloud Foundry Environment"
      ]
    },
    {
      title: "Module 2: Data & Database Services",
      points: [
        "SAP HANA Cloud",
        "SAP Data Warehouse Cloud",
        "SAP Data Intelligence",
        "Database Management",
        "Data Modeling"
      ]
    },
    {
      title: "Module 3: Application Development",
      points: [
        "SAP Business Application Studio",
        "SAP Extension Suite",
        "CAP Model",
        "Low-Code / No-Code Development",
        "Application Deployment"
      ]
    },
    {
      title: "Module 4: Integration & Security",
      points: [
        "SAP Integration Suite",
        "Process Integration",
        "API Management",
        "Identity & Access Management",
        "Security Best Practices",
        "Compliance"
      ]
    },
    {
      title: "Module 5: Intelligent Technologies",
      points: [
        "Artificial Intelligence",
        "Machine Learning",
        "Internet of Things (IoT)",
        "Robotic Process Automation (RPA)",
        "Multi-Cloud & Hybrid Architecture"
      ]
    },
    {
      title: "Module 6: DevOps & Projects",
      points: [
        "CI/CD Pipelines",
        "DevOps Best Practices",
        "Cloud Deployment",
        "Real-World Projects",
        "Hands-on Case Studies"
      ]
    }
  ]
}

]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getRelatedCourses(course: Course, limit = 3): Course[] {
  return courses
    .filter((c) => c.slug !== course.slug)
    .slice(0, limit)
}