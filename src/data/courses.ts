import {
  Award,
  Settings,
  Database,
  ShoppingCart,
  DollarSign,
  Package,
  Truck,
  Factory,
  CheckSquare,
  Wrench,
  Code2,
  Cloud,
  BrainCircuit,
  PieChart,
} from 'lucide-react'

// ── Types ────────────────────────────────────────────────────
export interface CurriculumModule {
  title: string
  points: string[]
}

export interface Course {
  id: string
  slug: string
  title: string
  subtitle: string
  category: 'functional' | 'technical' | 'datascience'
  icon: React.ElementType
  iconBg: string
  iconColor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: string
  badge?: string
  price: number
  summary: string
  description: string
  highlights: string[]
  eligibility: string
  tools: string[]
  careerRoles: string[]
  curriculum: CurriculumModule[]
}

// ── Course data ──────────────────────────────────────────────
// NOTE: SAP ERP catalog trimmed to the 10 approved courses:
// MM, SD, FICO, PP, QM, PM, EWM, ABAP, BASIS, BTP.
// Data Science courses are untouched (separate section, not part of this trim).
export const courses: Course[] = [
  // ── Functional ──────────────────────────────────────────
  {
    id: 'mm',
    slug: 'sap-mm',
    title: 'SAP MM',
    subtitle: 'Materials Management',
    category: 'functional',
    icon: Package,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    duration: '8 Weeks',
    level: 'Intermediate',
    students: '1200+',
    badge: 'Most Popular',
    price: 22000,
    summary: 'Master procurement, inventory, and vendor management in SAP.',
    description:
      'SAP MM covers the procurement and materials lifecycle inside SAP, from purchase requisitions and vendor evaluation to goods receipt, invoice verification, and inventory valuation. You will work in a live SAP S/4HANA sandbox, configuring the module end to end while mapping every screen back to a real procure-to-pay process.',
    highlights: [
      'Configure the procure-to-pay cycle from PR to invoice',
      'Manage master data: material master, vendor master, info records',
      'Handle inventory management, stock transfers, and physical inventory',
      'Integrate MM with FI, SD, and WM/EWM',
    ],
    eligibility: 'Graduates in commerce, supply chain, or engineering; working professionals in procurement or logistics.',
    tools: ['SAP S/4HANA', 'SAP GUI', 'Fiori Apps'],
    careerRoles: ['SAP MM Consultant', 'Procurement Analyst', 'Inventory Planner', 'SAP Support Analyst'],
    curriculum: [
      { title: 'Organizational Structure & Master Data', points: ['Enterprise structure in MM', 'Material master & vendor master', 'Purchasing info records & source lists'] },
      { title: 'Procurement Process', points: ['Purchase requisition to purchase order', 'Release strategies & approvals', 'Goods receipt & invoice verification'] },
      { title: 'Inventory Management', points: ['Stock types & movement types', 'Transfer postings & stock transport orders', 'Physical inventory & cycle counting'] },
      { title: 'Valuation & Account Determination', points: ['Material valuation methods', 'Automatic account determination', 'Split valuation'] },
      { title: 'Special Procurement', points: ['Subcontracting & consignment', 'Third-party & stock transfer processes', 'Pipeline procurement'] },
      { title: 'Integration & Reporting', points: ['MM-FI and MM-SD integration', 'Fiori apps for procurement', 'Standard MIS reports & analytics'] },
    ],
  },
  {
    id: 'sd',
    slug: 'sap-sd',
    title: 'SAP SD',
    subtitle: 'Sales & Distribution',
    category: 'functional',
    icon: ShoppingCart,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    duration: '8 Weeks',
    level: 'Intermediate',
    students: '980+',
    price: 22000,
    summary: 'Run the order-to-cash cycle from inquiry to billing.',
    description:
      'SAP SD trains you on the complete order-to-cash process: pricing, availability checks, delivery, billing, and credit management. The course builds a working sales organization structure and walks through real business scenarios drawn from distribution-heavy industries.',
    highlights: [
      'Configure sales organization, distribution channels & divisions',
      'Set up pricing procedures and condition techniques',
      'Manage delivery, shipping, and billing documents',
      'Handle credit management and returns processing',
    ],
    eligibility: 'Graduates with a sales, marketing, or business background; professionals in distribution or retail.',
    tools: ['SAP S/4HANA', 'SAP GUI', 'Fiori Apps'],
    careerRoles: ['SAP SD Consultant', 'Order Management Analyst', 'Sales Operations Specialist'],
    curriculum: [
      { title: 'Enterprise Structure & Master Data', points: ['Sales org, distribution channel, division', 'Customer & material master for sales', 'Condition master data'] },
      { title: 'Sales Order Processing', points: ['Inquiry, quotation & sales order', 'Availability check (ATP)', 'Incompletion procedure'] },
      { title: 'Pricing & Taxation', points: ['Condition technique & pricing procedures', 'Discounts, surcharges & tax determination', 'GST configuration basics'] },
      { title: 'Shipping & Delivery', points: ['Delivery document processing', 'Picking, packing & goods issue', 'Route determination'] },
      { title: 'Billing', points: ['Billing document types', 'Invoice, credit & debit memos', 'Revenue account determination'] },
      { title: 'Credit Management & Integration', points: ['Simple & advanced credit management', 'SD-MM and SD-FI integration', 'Reporting with Fiori apps'] },
    ],
  },
  {
    id: 'fico',
    slug: 'sap-fico',
    title: 'SAP FICO',
    subtitle: 'Finance & Controlling',
    category: 'functional',
    icon: DollarSign,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    duration: '10 Weeks',
    level: 'Intermediate',
    students: '1100+',
    badge: 'High Demand',
    price: 26000,
    summary: 'Build financial and management accounting expertise in SAP.',
    description:
      'SAP FICO combines Financial Accounting and Controlling into one of the most in-demand SAP skill sets. You will configure the general ledger, accounts payable/receivable, asset accounting, and cost/profit-center accounting, then connect it all to New Asset Accounting and Universal Journal in S/4HANA.',
    highlights: [
      'Configure GL, AP, AR, and Asset Accounting',
      'Set up cost center, profit center, and internal order accounting',
      'Work with the Universal Journal in S/4HANA',
      'Prepare month-end and year-end closing activities',
    ],
    eligibility: 'Commerce/finance graduates, CAs, MBAs, and working accountants moving into SAP.',
    tools: ['SAP S/4HANA', 'SAP GUI', 'Fiori Apps'],
    careerRoles: ['SAP FICO Consultant', 'Finance Analyst', 'Business Process Analyst - Finance'],
    curriculum: [
      { title: 'Financial Accounting Basics', points: ['Enterprise structure & chart of accounts', 'GL master data & document posting', 'Fiscal year variants & posting periods'] },
      { title: 'Accounts Payable & Receivable', points: ['Vendor & customer master data', 'Payment terms & automatic payment program', 'Dunning procedures'] },
      { title: 'Asset Accounting', points: ['Asset classes & depreciation areas', 'Acquisition, transfer & retirement', 'Depreciation runs'] },
      { title: 'Controlling', points: ['Cost element & cost center accounting', 'Internal orders', 'Profit center accounting'] },
      { title: 'Product Costing & Profitability', points: ['Cost estimates & material costing', 'CO-PA basics', 'Variance analysis'] },
      { title: 'Closing & Reporting', points: ['Month-end and year-end close', 'Universal Journal & New Asset Accounting', 'Financial reporting in Fiori'] },
    ],
  },
  {
    id: 'pp',
    slug: 'sap-pp',
    title: 'SAP PP',
    subtitle: 'Production Planning',
    category: 'functional',
    icon: Factory,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    duration: '8 Weeks',
    level: 'Intermediate',
    students: '620+',
    price: 22000,
    summary: 'Plan, schedule, and execute manufacturing processes in SAP.',
    description:
      'SAP PP covers demand management, MRP, and shop floor execution for discrete and process manufacturing. The course builds a complete production cycle from sales forecast to finished-goods confirmation.',
    highlights: [
      'Configure BOMs, routings, and work centers',
      'Run MRP and interpret planning results',
      'Execute production orders and confirmations',
      'Understand PP integration with MM and QM',
    ],
    eligibility: 'Engineering graduates and professionals from manufacturing/production backgrounds.',
    tools: ['SAP S/4HANA', 'SAP GUI'],
    careerRoles: ['SAP PP Consultant', 'Production Planner', 'Manufacturing Systems Analyst'],
    curriculum: [
      { title: 'Master Data', points: ['Bill of materials (BOM)', 'Work centers & routings', 'Production versions'] },
      { title: 'Demand & Material Planning', points: ['Demand management', 'MRP run & evaluation', 'Lot sizing procedures'] },
      { title: 'Production Execution', points: ['Production order processing', 'Goods issue & confirmations', 'Order settlement'] },
      { title: 'Process Manufacturing Basics', points: ['Process orders overview', 'Repetitive manufacturing', 'PP-QM and PP-MM integration'] },
    ],
  },
  {
    id: 'qm',
    slug: 'sap-qm',
    title: 'SAP QM',
    subtitle: 'Quality Management',
    category: 'functional',
    icon: CheckSquare,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    duration: '6 Weeks',
    level: 'Intermediate',
    students: '340+',
    price: 18000,
    summary: 'Implement quality inspection and control processes end to end.',
    description:
      'SAP QM covers quality planning, inspection processing, and quality notifications integrated with procurement and production. You will build inspection plans and master data used across incoming, in-process, and outgoing quality checks.',
    highlights: [
      'Set up inspection types, plans, and catalogs',
      'Process inspection lots and results recording',
      'Configure quality notifications',
      'Understand QM integration with MM and PP',
    ],
    eligibility: 'Quality assurance professionals and engineering graduates.',
    tools: ['SAP S/4HANA', 'SAP GUI'],
    careerRoles: ['SAP QM Consultant', 'Quality Systems Analyst'],
    curriculum: [
      { title: 'QM Master Data', points: ['Inspection types & plans', 'Catalogs, codes & selected sets', 'Quality info records'] },
      { title: 'Inspection Processing', points: ['Inspection lot creation', 'Results recording & usage decision', 'Sample management'] },
      { title: 'Quality Notifications', points: ['Notification types', 'Complaint processing', 'Corrective/preventive actions'] },
      { title: 'Integration', points: ['QM-MM and QM-PP integration', 'Certificates of analysis', 'Reporting'] },
    ],
  },
  {
    id: 'pm',
    slug: 'sap-pm',
    title: 'SAP PM',
    subtitle: 'Plant Maintenance',
    category: 'functional',
    icon: Wrench,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    duration: '6 Weeks',
    level: 'Intermediate',
    students: '290+',
    price: 18000,
    summary: 'Manage preventive and breakdown maintenance for plant equipment.',
    description:
      'SAP PM covers equipment and functional location master data, maintenance planning, and order execution. The course focuses on preventive maintenance strategies and breakdown maintenance processes used across asset-intensive industries.',
    highlights: [
      'Structure equipment and functional locations',
      'Configure maintenance plans and strategies',
      'Process maintenance orders and notifications',
      'Understand PM integration with MM and FI',
    ],
    eligibility: 'Maintenance and reliability engineers, mechanical/electrical graduates.',
    tools: ['SAP S/4HANA', 'SAP GUI'],
    careerRoles: ['SAP PM Consultant', 'Maintenance Systems Analyst'],
    curriculum: [
      { title: 'Master Data', points: ['Functional locations & equipment', 'Bills of material for maintenance', 'Task lists'] },
      { title: 'Preventive Maintenance', points: ['Maintenance strategies & plans', 'Scheduling & deadline monitoring', 'Maintenance items'] },
      { title: 'Maintenance Execution', points: ['Notifications & order processing', 'Spare parts & MM integration', 'Order completion & history'] },
      { title: 'Reporting', points: ['Maintenance history analysis', 'PM-FI integration for costs', 'Fiori maintenance apps'] },
    ],
  },
  {
    id: 'ewm',
    slug: 'sap-ewm',
    title: 'SAP EWM',
    subtitle: 'Extended Warehouse Management',
    category: 'functional',
    icon: Truck,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    duration: '6 Weeks',
    level: 'Advanced',
    students: '450+',
    price: 24000,
    summary: 'Design and run high-volume, automated warehouse operations.',
    description:
      'SAP EWM goes beyond standard inventory management to model complex warehouse layouts, automated storage systems, and labor management. The course focuses on the S/4HANA embedded EWM architecture used in modern distribution centers.',
    highlights: [
      'Model warehouse structure: storage types, sections & bins',
      'Configure inbound, outbound, and internal warehouse processes',
      'Set up wave management and resource/task management',
      'Understand EWM integration with MM and TM',
    ],
    eligibility: 'SAP MM/WM consultants and supply chain professionals seeking specialization.',
    tools: ['SAP S/4HANA Embedded EWM', 'SAP GUI'],
    careerRoles: ['SAP EWM Consultant', 'Warehouse Systems Analyst'],
    curriculum: [
      { title: 'EWM Foundations', points: ['EWM vs classic WM', 'Warehouse structure setup', 'Storage bin & section configuration'] },
      { title: 'Inbound Processing', points: ['ASN & goods receipt in EWM', 'Putaway strategies', 'Quality inspection integration'] },
      { title: 'Outbound Processing', points: ['Outbound delivery order processing', 'Wave management', 'Picking strategies & packing'] },
      { title: 'Resource & Labor Management', points: ['Task & resource management', 'Labor management basics', 'RF framework overview'] },
      { title: 'Integration', points: ['EWM-MM and EWM-TM integration', 'Yard management basics', 'Reporting & monitoring'] },
    ],
  },

  // ── Technical ───────────────────────────────────────────
  {
    id: 'abap',
    slug: 'sap-abap',
    title: 'SAP ABAP',
    subtitle: 'Advanced Business App Programming',
    category: 'technical',
    icon: Code2,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    duration: '12 Weeks',
    level: 'Advanced',
    students: '870+',
    badge: 'Most Popular',
    price: 28000,
    summary: 'Learn to build custom SAP programs, reports, and enhancements.',
    description:
      'SAP ABAP is SAP\'s core programming language. This course takes you from procedural ABAP to object-oriented ABAP and modern RAP (RESTful ABAP Programming) development for S/4HANA, including reports, forms, and enhancement techniques used on every SAP implementation.',
    highlights: [
      'Write reports, module pools, and Smart Forms',
      'Master Object-Oriented ABAP (OOABAP)',
      'Build enhancements: user exits, BAdIs, and enhancement points',
      'Get introduced to RAP and Fiori-based development',
    ],
    eligibility: 'Computer science/IT graduates and developers from any programming background.',
    tools: ['SAP GUI', 'ABAP Development Tools (Eclipse)', 'SAP S/4HANA'],
    careerRoles: ['SAP ABAP Developer', 'SAP Technical Consultant', 'RAP/Fiori Developer'],
    curriculum: [
      { title: 'ABAP Fundamentals', points: ['ABAP Workbench & data dictionary', 'Internal tables & control structures', 'Modularization: subroutines & function modules'] },
      { title: 'Reports & Dialog Programming', points: ['Classical & interactive reports', 'ALV reporting', 'Module pool programming'] },
      { title: 'Object-Oriented ABAP', points: ['Classes, interfaces & inheritance', 'Exception handling', 'Design patterns in ABAP'] },
      { title: 'Forms & Interfaces', points: ['Smart Forms & Adobe Forms', 'BAPI & RFC basics', 'IDoc processing overview'] },
      { title: 'Enhancements', points: ['User exits & customer exits', 'BAdIs & enhancement spots', 'Enhancement framework'] },
      { title: 'S/4HANA & RAP', points: ['CDS views basics', 'RAP-based application development', 'Fiori Elements overview'] },
    ],
  },
  {
    id: 'basis',
    slug: 'sap-basis',
    title: 'SAP BASIS',
    subtitle: 'System Administration',
    category: 'technical',
    icon: Settings,
    iconBg: 'bg-slate-50',
    iconColor: 'text-slate-600',
    duration: '10 Weeks',
    level: 'Intermediate',
    students: '540+',
    price: 24000,
    summary: 'Administer, monitor, and maintain SAP system landscapes.',
    description:
      'SAP BASIS covers the technical administration layer that keeps every SAP system running: installation, transport management, client administration, and performance monitoring across development, quality, and production landscapes.',
    highlights: [
      'Install and configure SAP systems and clients',
      'Manage the Transport Management System (TMS)',
      'Monitor system performance and troubleshoot issues',
      'Handle user administration and system security basics',
    ],
    eligibility: 'IT infrastructure professionals, system administrators, and CS/IT graduates.',
    tools: ['SAP NetWeaver', 'SAP GUI', 'SAP Solution Manager'],
    careerRoles: ['SAP Basis Administrator', 'SAP System Administrator'],
    curriculum: [
      { title: 'SAP Architecture', points: ['Three-tier architecture', 'Application & database server components', 'Instance & work process concepts'] },
      { title: 'System Administration', points: ['Client administration', 'User & authorization basics', 'Background job scheduling'] },
      { title: 'Transport Management', points: ['TMS configuration', 'Transport requests & landscape', 'Change and release management'] },
      { title: 'Monitoring & Maintenance', points: ['Performance monitoring (ST03, ST22, SM50)', 'Database administration basics', 'Backup & recovery concepts'] },
    ],
  },
  {
    id: 'btp',
    slug: 'sap-btp',
    title: 'SAP BTP',
    subtitle: 'Business Technology Platform',
    category: 'technical',
    icon: Cloud,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    duration: '8 Weeks',
    level: 'Advanced',
    students: '320+',
    badge: 'New',
    price: 26000,
    summary: 'Extend and integrate SAP systems on the cloud platform.',
    description:
      'SAP BTP is SAP\'s platform-as-a-service for building extensions, integrations, and AI-driven applications around a core SAP system. The course covers SAP Integration Suite, extension development with CAP, and Fiori/UI5 basics.',
    highlights: [
      'Build integrations using SAP Integration Suite',
      'Develop extensions with the Cloud Application Programming (CAP) model',
      'Understand SAP BTP services: HANA Cloud, Workflow, Extension Suite',
      'Get introduced to SAPUI5/Fiori app development',
    ],
    eligibility: 'Developers and technical consultants with programming fundamentals.',
    tools: ['SAP BTP', 'SAP Integration Suite', 'SAP Business Application Studio'],
    careerRoles: ['SAP BTP Developer', 'Integration Consultant', 'Cloud Extension Developer'],
    curriculum: [
      { title: 'BTP Foundations', points: ['BTP account & subaccount structure', 'Service catalog overview', 'Cloud Foundry basics'] },
      { title: 'Integration Suite', points: ['Integration flows', 'API management basics', 'Connectivity & security'] },
      { title: 'Extension Development', points: ['CAP model fundamentals', 'HANA Cloud basics', 'Deploying CAP applications'] },
      { title: 'UI & Workflow', points: ['SAPUI5/Fiori basics', 'SAP Build Workflow', 'AI/automation services overview'] },
    ],
  },

  // ── Data Science (unchanged — separate section) ─────────
  {
    id: 'ds',
    slug: 'data-science',
    title: 'Data Science',
    subtitle: 'Python, ML & Statistical Analysis',
    category: 'datascience',
    icon: BrainCircuit,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    duration: '16 Weeks',
    level: 'Intermediate',
    students: '890+',
    badge: 'New',
    price: 32000,
    summary: 'Go from Python fundamentals to end-to-end data science projects.',
    description:
      'This program covers the full data science workflow: Python programming, statistics, data wrangling, visualization, and machine learning, capped with real-world capstone projects across domains like finance, retail, and healthcare.',
    highlights: [
      'Master Python, NumPy, Pandas & data visualization',
      'Apply statistics and hypothesis testing to real data',
      'Build and evaluate supervised and unsupervised ML models',
      'Complete an end-to-end capstone project and portfolio',
    ],
    eligibility: 'Graduates from any background with basic logical/analytical aptitude; no prior coding required.',
    tools: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter'],
    careerRoles: ['Data Scientist', 'Data Analyst', 'ML Engineer (entry-level)'],
    curriculum: [
      { title: 'Python Programming', points: ['Core Python syntax & data structures', 'NumPy & Pandas for data manipulation', 'Working with APIs and files'] },
      { title: 'Statistics & EDA', points: ['Descriptive & inferential statistics', 'Hypothesis testing', 'Exploratory data analysis & visualization'] },
      { title: 'Machine Learning', points: ['Regression & classification', 'Clustering & dimensionality reduction', 'Model evaluation & tuning'] },
      { title: 'Capstone Project', points: ['End-to-end project on real data', 'Model deployment basics', 'Portfolio & presentation'] },
    ],
  },
  {
    id: 'ml',
    slug: 'machine-learning',
    title: 'Machine Learning',
    subtitle: 'Supervised, Unsupervised & Deep Learning',
    category: 'datascience',
    icon: BrainCircuit,
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    duration: '12 Weeks',
    level: 'Advanced',
    students: '640+',
    price: 30000,
    summary: 'Build and deploy machine learning and deep learning models.',
    description:
      'This course dives deep into ML algorithms and neural networks, covering the math and intuition behind each model alongside hands-on implementation in Python. You will build, tune, and deploy models using industry-standard frameworks.',
    highlights: [
      'Implement supervised & unsupervised learning algorithms',
      'Build neural networks with TensorFlow/Keras',
      'Apply feature engineering and model tuning techniques',
      'Deploy models with basic MLOps practices',
    ],
    eligibility: 'Learners with prior Python and statistics fundamentals (or completion of the Data Science course).',
    tools: ['Python', 'Scikit-learn', 'TensorFlow/Keras', 'Jupyter'],
    careerRoles: ['Machine Learning Engineer', 'Data Scientist', 'AI Developer'],
    curriculum: [
      { title: 'ML Foundations', points: ['Bias-variance tradeoff', 'Regression & classification algorithms', 'Ensemble methods'] },
      { title: 'Unsupervised Learning', points: ['Clustering (K-means, hierarchical)', 'Dimensionality reduction (PCA)', 'Anomaly detection'] },
      { title: 'Deep Learning', points: ['Neural network fundamentals', 'CNNs & RNNs overview', 'Training with TensorFlow/Keras'] },
      { title: 'Deployment', points: ['Model serialization', 'Basic API deployment', 'Monitoring model performance'] },
    ],
  },
  {
    id: 'bi',
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    subtitle: 'Power BI, Tableau & Data Visualization',
    category: 'datascience',
    icon: PieChart,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    duration: '8 Weeks',
    level: 'Beginner',
    students: '720+',
    badge: 'High Demand',
    price: 18000,
    summary: 'Turn raw data into dashboards that drive decisions.',
    description:
      'This course teaches you to model, transform, and visualize data using Power BI and Tableau. You will build interactive dashboards and learn DAX for calculated measures, finishing with a portfolio-ready analytics project.',
    highlights: [
      'Connect, clean, and model data in Power BI/Tableau',
      'Write DAX formulas for calculated measures',
      'Design interactive dashboards and reports',
      'Apply visualization best practices for storytelling',
    ],
    eligibility: 'Anyone comfortable with Excel; no coding background required.',
    tools: ['Power BI', 'Tableau', 'DAX', 'Excel'],
    careerRoles: ['BI Analyst', 'Data Analyst', 'Reporting Specialist'],
    curriculum: [
      { title: 'Data Modeling', points: ['Connecting to data sources', 'Data cleaning with Power Query', 'Relationships & star schema'] },
      { title: 'DAX & Calculations', points: ['Calculated columns & measures', 'Time intelligence functions', 'Common DAX patterns'] },
      { title: 'Dashboard Design', points: ['Visualization best practices', 'Interactive filters & drill-throughs', 'Tableau dashboard basics'] },
      { title: 'Capstone Project', points: ['End-to-end BI project', 'Publishing & sharing reports', 'Presentation to stakeholders'] },
    ],
  },
  {
    id: 'sql',
    slug: 'sql',
    title: 'SQL & Database',
    subtitle: 'SQL, PostgreSQL & Database Design',
    category: 'datascience',
    icon: Database,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    duration: '6 Weeks',
    level: 'Beginner',
    students: '1100+',
    price: 12000,
    summary: 'Query, design, and manage relational databases confidently.',
    description:
      'This course builds strong SQL fundamentals — querying, joins, aggregation, and subqueries — alongside relational database design principles using PostgreSQL, preparing you for any data-focused role.',
    highlights: [
      'Write SQL queries: joins, subqueries, window functions',
      'Design normalized relational database schemas',
      'Optimize queries and understand indexing basics',
      'Practice on real-world datasets',
    ],
    eligibility: 'Open to beginners; no prior database experience required.',
    tools: ['PostgreSQL', 'SQL', 'pgAdmin'],
    careerRoles: ['Data Analyst', 'Database Developer', 'Backend Developer'],
    curriculum: [
      { title: 'SQL Fundamentals', points: ['SELECT, WHERE, ORDER BY', 'Joins & set operations', 'Aggregate functions & GROUP BY'] },
      { title: 'Advanced SQL', points: ['Subqueries & CTEs', 'Window functions', 'Views & stored procedures'] },
      { title: 'Database Design', points: ['Normalization', 'Keys & constraints', 'ER diagrams'] },
      { title: 'Performance', points: ['Indexing basics', 'Query optimization', 'Real-world project'] },
    ],
  },
  {
    id: 'python',
    slug: 'python',
    title: 'Python for Data',
    subtitle: 'NumPy, Pandas & Data Wrangling',
    category: 'datascience',
    icon: Code2,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    duration: '8 Weeks',
    level: 'Beginner',
    students: '950+',
    price: 15000,
    summary: 'Build a strong Python foundation for data-focused roles.',
    description:
      'This course teaches Python programming with a data focus: core syntax, NumPy for numerical computing, and Pandas for data wrangling, ending with hands-on data cleaning and analysis projects.',
    highlights: [
      'Master Python syntax, functions, and data structures',
      'Perform numerical computing with NumPy',
      'Clean, transform, and analyze data with Pandas',
      'Automate data workflows with scripts',
    ],
    eligibility: 'Open to complete beginners; no prior programming experience required.',
    tools: ['Python', 'NumPy', 'Pandas', 'Jupyter'],
    careerRoles: ['Junior Data Analyst', 'Python Developer', 'Data Wrangler'],
    curriculum: [
      { title: 'Python Basics', points: ['Variables, control flow & functions', 'Lists, dicts, tuples & sets', 'File handling'] },
      { title: 'NumPy', points: ['Arrays & vectorized operations', 'Broadcasting', 'Linear algebra basics'] },
      { title: 'Pandas', points: ['DataFrames & Series', 'Data cleaning & transformation', 'Merging & grouping data'] },
      { title: 'Applied Project', points: ['Real-world dataset cleaning', 'Exploratory analysis', 'Reporting findings'] },
    ],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug)
}

export function getRelatedCourses(course: Course, limit = 3): Course[] {
  return courses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, limit)
}