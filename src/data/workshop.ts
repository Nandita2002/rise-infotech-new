import {
  FlaskConical,
  Layers,
  Award,
  UserCircle,
  BrainCircuit,
  BarChart2,
} from 'lucide-react'

export interface Workshop {
  id: string
  slug: string
  title: string
  subtitle: string
  icon: React.ElementType
  iconBg: string
  iconColor: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  students: string
  badge?: string
  summary: string
  description: string
  highlights: string[]
  eligibility: string
  agenda: { title: string; points: string[] }[]
  takeaways: string[]
}

export const workshops: Workshop[] = [
  {
    id: 'ws-s4',
    slug: 's4hana',
    title: 'SAP S/4HANA Migration',
    subtitle: '2-day intensive workshop',
    icon: FlaskConical,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    duration: '2 Days',
    level: 'Advanced',
    students: '300+',
    badge: 'Weekend Batch',
    summary: 'Understand migration paths, tools, and pitfalls for S/4HANA.',
    description:
      'A focused, hands-on workshop on moving from SAP ECC to S/4HANA — covering conversion vs. new implementation strategies, the Readiness Check, and common data migration challenges consultants face on real projects.',
    highlights: [
      'Compare Brownfield vs. Greenfield migration approaches',
      'Run through the SAP Readiness Check process',
      'Understand Simplification Items and custom code impact',
      'Walk through a sample cutover plan',
    ],
    eligibility: 'Working SAP consultants and project team members involved in S/4HANA projects.',
    agenda: [
      { title: 'Day 1 — Strategy & Assessment', points: ['ECC vs S/4HANA architecture differences', 'Migration approach selection', 'SAP Readiness Check walkthrough'] },
      { title: 'Day 2 — Execution & Cutover', points: ['Simplification items & custom code checks', 'Data migration tools (SUM, DMO)', 'Cutover planning & go-live checklist'] },
    ],
    takeaways: ['Workshop workbook & checklists', 'Certificate of participation', 'Access to a private Q&A session'],
  },
  {
    id: 'ws-fiori',
    slug: 'fiori',
    title: 'SAP Fiori & UI5',
    subtitle: 'Build modern SAP apps',
    icon: Layers,
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    duration: '3 Days',
    level: 'Intermediate',
    students: '240+',
    badge: 'Weekend Batch',
    summary: 'Build and deploy a working Fiori app from scratch.',
    description:
      'A hands-on introduction to SAPUI5 and Fiori Elements. You will build a small end-to-end Fiori application backed by OData, then deploy it to a Fiori Launchpad, learning the same patterns used in production SAP UX projects.',
    highlights: [
      'Understand SAPUI5 MVC architecture',
      'Build apps using Fiori Elements templates',
      'Consume OData services in a UI5 app',
      'Deploy and configure a Fiori Launchpad tile',
    ],
    eligibility: 'Developers with basic JavaScript/HTML/CSS knowledge; SAP background helpful but not required.',
    agenda: [
      { title: 'Day 1 — UI5 Foundations', points: ['SAPUI5 architecture (MVC)', 'Views, controllers & fragments', 'Setting up Business Application Studio'] },
      { title: 'Day 2 — Fiori Elements & OData', points: ['List Report & Object Page templates', 'Consuming OData V2/V4 services', 'Annotations for UI behavior'] },
      { title: 'Day 3 — Deployment', points: ['Fiori Launchpad configuration', 'App deployment to BTP', 'Testing & troubleshooting'] },
    ],
    takeaways: ['A working Fiori app you built yourself', 'Reusable project template', 'Certificate of participation'],
  },
  {
    id: 'ws-cert',
    slug: 'certification',
    title: 'SAP Certification Prep',
    subtitle: 'Crack SAP cert in first attempt',
    icon: Award,
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    duration: '1 Week',
    level: 'Intermediate',
    students: '560+',
    badge: 'High Success Rate',
    summary: 'Structured revision and mock tests for your SAP certification.',
    description:
      'An intensive, exam-focused week that consolidates your module knowledge, walks through the certification blueprint topic by topic, and runs full-length timed mock exams with detailed answer reviews.',
    highlights: [
      'Topic-wise revision aligned to the certification blueprint',
      'Daily mock tests with instant scoring',
      'Detailed review of incorrect answers',
      'Exam-day strategy and time management tips',
    ],
    eligibility: 'Learners who have completed a functional/technical SAP course and are preparing for certification.',
    agenda: [
      { title: 'Days 1–3 — Blueprint Revision', points: ['Topic-wise recap by weightage', 'Concept clarification sessions', 'Practice question sets'] },
      { title: 'Days 4–6 — Mock Exams', points: ['Full-length timed mock tests', 'Answer review & explanation', 'Weak-area focused revision'] },
      { title: 'Day 7 — Final Prep', points: ['Exam strategy & time management', 'Last-minute doubt clearing', 'Registration guidance'] },
    ],
    takeaways: ['Certification revision notes', 'Full mock test bank', 'One-on-one doubt clearing session'],
  },
  {
    id: 'ws-resume',
    slug: 'career',
    title: 'SAP Career Bootcamp',
    subtitle: 'Resume, LinkedIn & mock interviews',
    icon: UserCircle,
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    duration: '2 Days',
    level: 'Beginner',
    students: '780+',
    badge: 'Free',
    summary: 'Get interview-ready with a resume, LinkedIn, and mock rounds.',
    description:
      'A practical, free workshop to help SAP learners and job seekers present themselves well: build an ATS-friendly resume, optimize a LinkedIn profile, and go through a mock technical/HR interview with feedback.',
    highlights: [
      'Build an ATS-friendly SAP resume',
      'Optimize your LinkedIn profile for recruiter visibility',
      'Practice with a mock technical interview',
      'Get personalized feedback from a trainer',
    ],
    eligibility: 'Open to all SAP learners and job seekers; no prior workshop attendance required.',
    agenda: [
      { title: 'Day 1 — Resume & LinkedIn', points: ['ATS-friendly resume structure', 'Highlighting SAP projects & skills', 'LinkedIn profile optimization'] },
      { title: 'Day 2 — Mock Interviews', points: ['Technical Q&A practice', 'HR round simulation', 'Individual feedback session'] },
    ],
    takeaways: ['Polished resume draft', 'LinkedIn optimization checklist', 'Personalized feedback notes'],
  },
  {
    id: 'ws-ds',
    slug: 'data-science',
    title: 'Data Science Bootcamp',
    subtitle: 'End-to-end ML project workshop',
    icon: BrainCircuit,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    duration: '3 Days',
    level: 'Intermediate',
    students: '420+',
    badge: 'Weekend Batch',
    summary: 'Build a complete ML project from raw data to results.',
    description:
      'A fast-paced, project-driven weekend workshop where you take a real dataset from raw form to a working machine learning model, covering the practical workflow data scientists use daily.',
    highlights: [
      'Clean and explore a real-world dataset',
      'Engineer features and select an appropriate model',
      'Train, evaluate, and tune an ML model',
      'Present results with clear visualizations',
    ],
    eligibility: 'Learners with basic Python knowledge.',
    agenda: [
      { title: 'Day 1 — Data Prep', points: ['Data cleaning & EDA', 'Feature engineering', 'Handling missing/imbalanced data'] },
      { title: 'Day 2 — Modeling', points: ['Model selection', 'Training & cross-validation', 'Hyperparameter tuning'] },
      { title: 'Day 3 — Results', points: ['Model evaluation metrics', 'Visualization of results', 'Project presentation'] },
    ],
    takeaways: ['A completed ML project for your portfolio', 'Reusable project notebook', 'Certificate of participation'],
  },
  {
    id: 'ws-power',
    slug: 'powerbi',
    title: 'Power BI Masterclass',
    subtitle: 'Dashboards & advanced analytics',
    icon: BarChart2,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    duration: '2 Days',
    level: 'Beginner',
    students: '610+',
    badge: 'New',
    summary: 'Go from raw data to a polished, interactive Power BI dashboard.',
    description:
      'A focused, hands-on weekend session on building professional Power BI dashboards: data modeling, DAX measures, and visual design, ending with a portfolio-ready dashboard project.',
    highlights: [
      'Import and model data from multiple sources',
      'Write practical DAX measures',
      'Design a clean, interactive dashboard',
      'Publish and share reports',
    ],
    eligibility: 'Comfortable with Excel; no prior Power BI experience required.',
    agenda: [
      { title: 'Day 1 — Data & DAX', points: ['Power Query data import & cleaning', 'Data modeling & relationships', 'Core DAX measures'] },
      { title: 'Day 2 — Dashboard Design', points: ['Visualization best practices', 'Interactive filters & drill-throughs', 'Publishing & sharing'] },
    ],
    takeaways: ['A completed dashboard project', 'DAX cheat sheet', 'Certificate of participation'],
  },
]

export function getWorkshopBySlug(slug: string): Workshop | undefined {
  return workshops.find((w) => w.slug === slug)
}