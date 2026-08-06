
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

   // NEW
  brochure: string
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

  bannerImage: "/courses/MM.jpg",
  overviewImage: "/courses/MM.jpg",

  description:
    "SAP Materials Management (MM) is a core module of the SAP ERP system, also known as SAP S/4 HANA - Sourcing and Procurement. It manages every aspect of material handling within an organization, including procurement, inventory control, goods receipt, and invoice verification. By integrating seamlessly with other SAP modules such as Finance (FI), Controlling (CO), Production Planning (PP), and Sales & Distribution (SD), SAP MM ensures smooth coordination across departments and provides complete visibility of material flow.",

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
  brochure: "/brochures/SAP-MM.pdf"
},
{
  id: "sap-sd",
  slug: "sap-sd",

  title: "SAP SD",
  subtitle: "SAP S/4HANA Sales & Distribution",

  bannerImage: "/courses/SD.jpg",
  overviewImage: "/courses/SD.jpg",

  description:
    "SAP Sales and Distribution (SD) is a core module within the SAP ERP system that handles all processes related to order-to-cash (OTC) cycle, encompassing sales, distribution, and billing. It is designed to facilitate efficient management of the sales and distribution activities of an organization",

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
      ],
     
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
  ],
   brochure: "/brochures/SAP-SD.pdf"
},
{
  id: "sap-fico",
  slug: "sap-fico",

  title: "SAP FICO",
  subtitle: "SAP S/4HANA Finance",

  bannerImage: "/courses/FICO.jpg",
  overviewImage: "/courses/FICO.jpg",

  description:
    "SAP Financial Accounting and Controlling (FICO) is a core SAP ERP module designed to manage an organization’s financial transactions and cost control. Accounts Payable handles vendor payments and liabilities, Accounts Receivable manages customer billing and incoming payments, and Controlling (CO) supports internal cost management, budgeting, and profitability analysis. SAP FICO is tightly integrated with other SAP modules: • FI–MM: Financial postings for procurement and inventory • FI–SD: Revenue accounting and customer receivables from sales • FI–PP: Production cost tracking and variance postings",

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
      ],
      
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
  ],
  brochure: "/brochures/SAP-FICO.pdf"
},
{
  id: "sap-ewm",
  slug: "sap-ewm",

  title: "SAP EWM",
  subtitle: "SAP S/4HANA Extended Warehouse Management",

  bannerImage: "/courses/EWM.jpg",
  overviewImage: "/courses/EWM.jpg",

  description:
    "SAP Extended Warehouse Management (EWM) is a comprehensive warehouse management solution integrated within the SAP Supply Chain Management (SCM) suite. It is designed to optimize warehouse operations and provide real-time visibility into inventory and warehouse processes.",

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
  ],
  brochure: "/brochures/SAP-EWM.pdf"
},
{
  id: "sap-pp",
  slug: "sap-pp",

  title: "SAP PP",
  subtitle: "SAP S/4HANA Production Planning",

  bannerImage: "/courses/pp.jpg",
  overviewImage: "/courses/pp.jpg",

  description:
    "SAP Production Planning (PP) is a key module within the SAP ERP system that focuses on the planning and management of production processes. It is designed to integrate various production-related activities, streamline manufacturing operations, and optimize the use of resources.",

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
      ],
      
    }
  ],
  brochure: "/brochures/SAP-PP.pdf"
},
{
  id: "sap-qm",
  slug: "sap-qm",

  title: "SAP QM",
  subtitle: "SAP S/4HANA Quality Management",

  bannerImage: "/courses/QM.jpg",
  overviewImage: "/courses/QM.jpg",

  description:
    "SAP Quality Management (QM) is a module within the SAP ERP system that supports quality planning, quality assurance, and quality control activities in an organization. It integrates various quality processes across business functions to ensure that products meet defined quality standards and comply with regulatory requirements.",

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
  ],
  brochure: "/brochures/SAP-QM.pdf"
},
{
  id: "sap-pm",
  slug: "sap-pm",

  title: "SAP PM",
  subtitle: "SAP S/4HANA Plant Maintenance",

  bannerImage: "/courses/PM.jpg",
  overviewImage: "/courses/PM.jpg",

  description:
    "SAP Plant Maintenance (PM) is a module within the SAP ERP system that focuses on managing maintenance activities in an organization's plants or facilities. It supports the efficient planning, execution, and monitoring of all maintenance tasks, ensuring that assets are kept in optimal working condition to minimize downtime and maximize productivity.",

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
  ],
  brochure: "/brochures/data-analytics-power-bi.pdf"
},
{
  id: "sap-abap",
  slug: "sap-abap",

  title: "SAP ABAP",
  subtitle: "Advanced Business Application Programming",

  bannerImage: "/courses/ABAP.jpg",
  overviewImage: "/courses/ABAP.jpg",

  description:
    "SAP ABAP (Advanced Business Application Programming) is a high-level programming language created by SAP SE for developing applications on the SAP platform. ABAP is the primary language used for programming the SAP R/3 system, which includes modules such as Financial Accounting (FI), Sales and Distribution (SD), and Materials Management (MM). It allows developers to create custom reports, interfaces, forms, workflows, and enhancements tailored to the specific needs of an organization.",

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
  ],
  brochure: "/brochures/data-analytics-power-bi.pdf"
},
{
  id: "sap-basis",
  slug: "sap-basis",

  title: "SAP BASIS",
  subtitle: "Business Application Software Integrated Solution",

  bannerImage: "/courses/BASIS.jpg",
  overviewImage: "/courses/BASIS.jpg",

  description:
    "SAP Basis is the technical foundation that enables SAP applications to function smoothly. It includes middleware programs and tools that support the interoperability and portability of SAP applications across systems and databases. SAP Basis is essential for the administration of the SAP environment, encompassing activities such as system installation, configuration, load balancing, and performance tuning.",

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
  ],
  brochure: "/brochures/SAP-BASIS.pdf"
},
{
  id: "sap-btp",
  slug: "sap-btp",

  title: "SAP BTP",
  subtitle: "SAP Business Technology Platform",

  bannerImage: "/courses/BTP.jpg",
  overviewImage: "/courses/BTP.jpg",

  description:
    "SAP BTP (Business Technology Platform) is SAP's integrated offering designed to help organizations transform their business processes by leveraging cloud technologies. It's a comprehensive suite of tools, services, and solutions that enable companies to innovate, integrate, and extend their SAP and third-party applications in the cloud",

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
  ],
  brochure: "/brochures/SAP-BTP.pdf"
},


{
  id: "data-analytics-power-bi",
  slug: "data-analytics-power-bi",

  title: "AI Powered Data Analytics",

  subtitle:
    "Master Data Analytics, SQL, Python, Excel & Power BI with Real-Time Projects",

  bannerImage: "/dataanalytics.jpg",

  overviewImage: "/dataanalytics.jpg",

  description:
    "The AI Powered Data Analytics course at Rise Infotech is designed to help students and professionals build a successful career in data analytics and business intelligence. This comprehensive training covers Advanced Excel, SQL, Python for Data Analysis, Power BI, DAX, Data Visualization, Dashboard Development, and AI-powered analytics techniques. Through practical assignments, live industry projects, and case studies.",

  whoCanLearn: [
    "Engineering Students",
    "Degree & MBA Students",
    "Fresh Graduates",
    "Working Professionals",
    "Business Analysts",
    "Software Developers",
    "MIS Executives",
    "Finance Professionals",
    "Marketing Professionals",
    "Anyone interested in Data Analytics"
  ],

 whatYouWillLearn: [
  "SQL for Data Analysis",
  "Python Programming",
  "Power BI Dashboard Development",
  "Generative AI Fundamentals",
  "Advanced Microsoft Excel",
],

  curriculum: [
    {
      title: "Module 1: Data Analytics Fundamentals",
      points: [
        "Introduction to Data Analytics",
        "Types of Data",
        "Business Analytics Process",
        "Analytics Lifecycle",
        "Real-world Use Cases"
      ]
    },
    {
      title: "Module 2: Advanced Excel",
      points: [
        "Excel Functions & Formulas",
        "Lookup Functions",
        "Pivot Tables",
        "Pivot Charts",
        "Conditional Formatting",
        "Dashboard Creation"
      ]
    },
    {
      title: "Module 3: SQL for Data Analytics",
      points: [
        "Database Concepts",
        "SQL Queries",
        "Joins",
        "Group By",
        "Subqueries",
        "Views & Functions"
      ]
    },
    {
      title: "Module 4: Python for Data Analytics",
      points: [
        "Python Basics",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Data Cleaning",
        "Exploratory Data Analysis"
      ]
    },
    {
      title: "Module 5: Power BI",
      points: [
        "Power BI Desktop",
        "Importing Data",
        "Data Transformation",
        "Power Query",
        "Relationships",
        "Data Modeling"
      ]
    },
    {
      title: "Module 6: DAX & Visualization",
      points: [
        "Calculated Columns",
        "Measures",
        "KPIs",
        "Charts",
        "Interactive Dashboards",
        "Business Reports"
      ]
    },
    {
      title: "Module 7: Real-Time Projects",
      points: [
        "Sales Dashboard",
        "HR Analytics Dashboard",
        "Finance Dashboard",
        "Retail Analytics",
        "Executive KPI Dashboard"
      ]
    },
    {
      title: "Module 8: Career Preparation",
      points: [
        "Resume Building",
        "LinkedIn Profile Optimization",
        "Mock Interviews",
        "Case Study Discussions",
        "Placement Assistance"
      ]
    }
  ],

  brochure: "/brochures/AI-POWERED-DATA-ANALYTICS.pdf"
},
{
  id: "azure-data-engineering",
  slug: "azure-data-engineering",

  title: "Azure Data Engineering",
  subtitle:
    "Master Azure Data Factory, Databricks, Spark, SQL, Python & Microsoft Fabric with Real-Time Projects",

  bannerImage: "/Azure.png",
  overviewImage: "/Azure.png",

  description:
    "Azure Data Engineering is one of the most in-demand cloud careers, enabling organizations to build scalable, secure, and high-performance data platforms. This course provides practical training in SQL, Python, Apache Spark, Azure Data Factory, Azure Synapse Analytics, Azure Data Lake, Databricks, Delta Lake, and Microsoft Fabric. Through real-time projects and industry-focused learning, students gain the skills required to design modern data pipelines, process big data, and build cloud-native data engineering solutions.",

  whoCanLearn: [
    "Engineering Students",
    "Degree Students",
    "MBA Students",
    "Fresh Graduates",
    "Working Professionals",
    "Software Developers",
    "Data Analysts",
    "BI Professionals",
    "Cloud Enthusiasts",
    "Anyone interested in Data Engineering"
  ],

  whatYouWillLearn: [
    "Data Engineering Fundamentals",
    "Advanced SQL",
    "Python Programming",
    "Azure Fundamentals",
    "Azure Data Factory",
    "Azure Data Lake Storage",
    "Azure Synapse Analytics",
    "Azure Databricks",
    "Apache Spark & PySpark",
    "Delta Lake",
    "Microsoft Fabric",
    "Real-Time Data Pipelines",
    "Cloud Data Engineering Projects",
    "Interview Preparation"
  ],

  curriculum: [
    {
      title: "Module 1: Data Engineering Introduction",
      points: [
        "Introduction to Data Engineering",
        "Data Engineering Lifecycle",
        "Roles & Responsibilities",
        "Modern Data Architecture"
      ]
    },
    {
      title: "Module 2: SQL Fundamentals",
      points: [
        "DDL, DML, DCL & TCL",
        "SQL Functions",
        "Joins",
        "Grouping & Sorting",
        "Subqueries & CTE",
        "Views",
        "Stored Procedures",
        "User Defined Functions",
        "Indexes & Performance",
        "Advanced SQL"
      ]
    },
    {
      title: "Module 3: Azure Basics",
      points: [
        "Azure Fundamentals",
        "Azure Services Overview",
        "Cloud Concepts",
        "Azure Resource Management"
      ]
    },
    {
      title: "Module 4: Python Overview",
      points: [
        "Environment Setup",
        "Data Types",
        "Operators",
        "Flow Control",
        "Loops",
        "Collections",
        "Functions",
        "File Handling"
      ]
    },
    {
      title: "Module 5: Apache Spark",
      points: [
        "Spark Architecture",
        "Spark Core",
        "Spark SQL",
        "DataFrames",
        "Structured APIs",
        "Data Sources",
        "PySpark",
        "Spark Streaming"
      ]
    },
    {
      title: "Module 6: Azure Storage & Data Lake",
      points: [
        "Azure Key Vault",
        "Azure Data Factory",
        "Azure Data Lake",
        "Azure Synapse Analytics",
        "Azure Databricks"
      ]
    },
    {
      title: "Module 7: Delta Lake & Microsoft Fabric",
      points: [
        "Delta Lake",
        "Delta Tables",
        "Microsoft Fabric",
        "Modern Data Platform"
      ]
    },
    {
      title: "Module 8: AI & Career Preparation",
      points: [
        "AI Data Agents",
        "Databricks Genie",
        "Conversational Analytics",
        "Real-Time Projects",
        "Resume Building",
        "Interview Preparation"
      ]
    }
  ],

  brochure: "/brochures/AZURE-DATA-ENGINEERING.pdf"
},
{
  id: "snowflake-data-engineering",
  slug: "snowflake-data-engineering",

  title: "Snowflake Data Engineering",

  subtitle:
    "Master Snowflake, DBT, Snowpark, Snowpipe & Cortex AI with Real-Time Projects",

  bannerImage: "/Snowflake.png",

  overviewImage: "/Snowflake.png",

  description:
    "Build your career in Cloud Data Engineering with our comprehensive Snowflake Data Engineering course. Learn to design, build, and optimize scalable cloud data warehouses using Snowflake. Gain hands-on experience with Snowflake SQL, Snowpipe, Streams, Tasks, Snowpark, DBT, and Snowflake Cortex AI. Work on real-time projects while mastering ETL/ELT pipelines, query optimization, and cloud-native data engineering. Designed for students, freshers, and professionals, this course prepares you for industry-ready Data Engineering roles.",

  whoCanLearn: [
    "Engineering Students",
    "Degree Students",
    "MBA Students",
    "Fresh Graduates",
    "Working Professionals",
    "SQL Developers",
    "Data Analysts",
    "Business Intelligence Professionals",
    "Aspiring Data Engineers",
    "Anyone interested in Cloud Data Engineering"
  ],

  whatYouWillLearn: [
    "Snowflake Cloud Data Warehouse",
    "Virtual Warehouses",
    "Snowflake SQL",
    "Database Design & Schemas",
    "Zero Copy Cloning",
    "Time Travel",
    "Snowpipe",
    "Streams & Tasks",
    "Snowpark",
    "DBT (Data Build Tool)",
    "ETL & ELT Pipelines",
    "Query Optimization",
    "Snowflake Cortex AI",
    "Real-Time Projects",
    "Interview Preparation"
  ],

  curriculum: [
    {
      title: "Module 1: Snowflake Cloud Data Warehouse",
      points: [
        "Cloud Data Warehouse Concepts",
        "Virtual Warehouses",
        "Databases & Schemas",
        "Storage Architecture",
        "Data Loading",
        "Cloning & Time Travel"
      ]
    },
    {
      title: "Module 2: Snowflake SQL",
      points: [
        "DDL & DML",
        "Query Optimization",
        "Views",
        "Stored Procedures",
        "Functions",
        "Performance Tuning"
      ]
    },
    {
      title: "Module 3: Snowpipe, Streams & Tasks",
      points: [
        "Continuous Data Ingestion",
        "Incremental Data Loads",
        "Automation",
        "Scheduling",
        "Data Pipelines"
      ]
    },
    {
      title: "Module 4: Snowpark & DBT",
      points: [
        "Snowpark Framework",
        "Python Integration",
        "DBT Fundamentals",
        "ELT Pipelines",
        "Transformations"
      ]
    },
    {
      title: "Module 5: Snowflake Cortex AI",
      points: [
        "AI Features",
        "Generative AI",
        "Data Intelligence",
        "Conversational Analytics"
      ]
    },
    {
      title: "Module 6: Real-Time Project 1",
      points: [
        "Cloud Data Warehouse Implementation",
        "ETL Pipeline Development",
        "Hands-on Project"
      ]
    },
    {
      title: "Module 7: Real-Time Project 2",
      points: [
        "Enterprise Data Engineering Project",
        "Optimization",
        "Deployment"
      ]
    },
    {
      title: "Module 8: Career Preparation",
      points: [
        "Resume Building",
        "Interview Preparation",
        "Mock Interviews",
        "Industry Best Practices"
      ]
    }
  ],

  brochure: "/brochures/SNOWFLAKE-DATA-ENGINEERING.pdf"
},
{
  id: "databricks-data-engineering",
  slug: "databricks-data-engineering",

  title: "Databricks Data Engineering",

  subtitle:
    "Master Databricks, PySpark, Delta Lake, Kafka & Modern Data Engineering with Real-Time Projects",

  bannerImage: "/databricks.png",

  overviewImage: "/databricks.png",

  description:
    "Become a job-ready Data Engineer by mastering the Databricks Data Intelligence Platform. This course provides hands-on training in Databricks Architecture, Apache Spark, PySpark, Spark SQL, Delta Lake, Event Hub, Kafka, workflow automation, and CI/CD integrations. Through practical assignments and a real-time E-commerce project, you'll gain the skills required to build scalable data pipelines and modern analytics solutions for enterprise environments.",

  whoCanLearn: [
    "Engineering Students",
    "Degree Students",
    "MBA Students",
    "Fresh Graduates",
    "Working Professionals",
    "SQL Developers",
    "Data Analysts",
    "Software Engineers",
    "Aspiring Data Engineers",
    "Cloud Professionals"
  ],

  whatYouWillLearn: [
    "Databricks Architecture",
    "Python Programming",
    "PySpark",
    "Spark SQL",
    "Apache Spark",
    "Delta Lake",
    "Delta Tables",
    "Databricks Notebooks",
    "SQL Server (T-SQL)",
    "Event Hub",
    "Apache Kafka",
    "Workflow Automation",
    "CI/CD Integration",
    "Real-Time E-Commerce Project",
    "Interview Preparation"
  ],

  curriculum: [
    {
      title: "Module 1: SQL Server (T-SQL)",
      points: [
        "SQL Fundamentals",
        "DDL & DML",
        "Joins",
        "Views",
        "Stored Procedures",
        "Performance Optimization"
      ]
    },
    {
      title: "Module 2: Databricks Engineering",
      points: [
        "Databricks Architecture",
        "Databricks Workspace",
        "Databricks Notebooks",
        "Apache Spark",
        "PySpark",
        "Spark SQL",
        "Delta Lake",
        "Delta Tables",
        "Workflow Automation",
        "Event Hub",
        "Apache Kafka",
        "CI/CD Integration"
      ]
    },
    {
      title: "Module 3: Python for Data Engineering",
      points: [
        "Python Basics",
        "Data Processing",
        "Functions",
        "File Handling",
        "Python Libraries",
        "PySpark Programming"
      ]
    },
    {
      title: "Module 4: Delta Lake",
      points: [
        "Delta Tables",
        "Data Versioning",
        "ACID Transactions",
        "Time Travel",
        "Optimization"
      ]
    },
    {
      title: "Module 5: Streaming & Messaging",
      points: [
        "Apache Kafka",
        "Azure Event Hub",
        "Real-Time Data Processing",
        "Streaming Pipelines"
      ]
    },
    {
      title: "Module 6: Real-Time Project",
      points: [
        "End-to-End E-Commerce Project",
        "Data Ingestion",
        "ETL Pipeline",
        "Data Transformation",
        "Analytics Dashboard"
      ]
    },
    {
      title: "Module 7: Deployment & DevOps",
      points: [
        "Job Scheduling",
        "Workflow Automation",
        "CI/CD Pipeline",
        "Production Deployment"
      ]
    },
    {
      title: "Module 8: Career Preparation",
      points: [
        "Resume Building",
        "Interview Questions",
        "Mock Interviews",
        "Industry Best Practices"
      ]
    }
  ],

  brochure: "/brochures/DATABRICKS-DATA-ENGINEERING.pdf"
},
{
  id: "corporate-training",
  slug: "corporate-training",

  title: "Corporate Training",

  subtitle:
    "Upskill Your Workforce with Industry-Focused Corporate Training Programs",

  bannerImage: "/corporatetraining.png",

  overviewImage: "/corporatetraining.png",

  description:
    "Rise Infotech provides customized Corporate Training programs designed to enhance employee skills and improve organizational productivity. Our training is delivered by industry experts through instructor-led sessions, hands-on workshops, real-time projects, and practical case studies. We offer online, offline, and on-site corporate training across SAP ERP, Data Analytics, Cloud Technologies, Data Engineering, Artificial Intelligence, Software Development, and other emerging technologies. Each program is tailored to your organization's goals, ensuring measurable business outcomes and workforce excellence.",


  whoCanLearn: [
    "Corporate Employees",
    "IT Teams",
    "Business Analysts",
    "Project Managers",
    "HR & L&D Teams",
    "Fresh Graduate Hiring Batches",
    "Software Developers",
    "Data Professionals",
    "SAP Consultants",
    "Organizations of All Sizes"
  ],

  whatYouWillLearn: [
    "Customized Learning Paths",
    "SAP ERP Training",
    "AI Powered Data Analytics",
    "Azure Data Engineering",
    "Snowflake Data Engineering",
    "Databricks Data Engineering",
    "Artificial Intelligence",
    "Cloud Technologies",
    "Software Development",
    "Hands-on Labs",
    "Real-Time Projects",
    "Certification Guidance",
    "Productivity Best Practices",
    "Industry Case Studies"
  ],

  curriculum: [
    {
      title: "Training Needs Assessment",
      points: [
        "Skill Gap Analysis",
        "Business Requirement Gathering",
        "Customized Training Plan",
        "Learning Roadmap"
      ]
    },
    {
      title: "Technical Training Programs",
      points: [
        "SAP ERP",
        "Cloud Computing",
        "Data Engineering",
        "Artificial Intelligence",
        "Software Development"
      ]
    },
    {
      title: "Hands-on Practical Sessions",
      points: [
        "Real-Time Projects",
        "Case Studies",
        "Industry Use Cases",
        "Live Demonstrations"
      ]
    },
    {
      title: "Assessment & Evaluation",
      points: [
        "Assignments",
        "Practical Assessments",
        "Knowledge Evaluation",
        "Performance Tracking"
      ]
    },
    {
      title: "Certification Support",
      points: [
        "Certification Guidance",
        "Exam Preparation",
        "Learning Resources"
      ]
    },
    {
      title: "Post Training Support",
      points: [
        "Q&A Sessions",
        "Learning Materials",
        "Mentorship",
        "Technical Assistance"
      ]
    }
  ],

  brochure: "/brochures/CORPORATE-TRAINING.pdf"
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