export const profile = {
  name: "Gonzalo Viladomiu",
  fullName: "Gonzalo Viladomiu Claraso",
  role: "Technology Manager",
  company: "PUIG",
  location: "Barcelona, Spain",
  email: "gonzaloviladomiu@gmail.com",
  phone: "+34 663 92 15 92",
  linkedin: "https://www.linkedin.com/in/gviladomiu",
  github: "https://github.com/gviladomiu",
  authorization: "European Union",
  languages: ["Spanish (Native)", "Catalan (Native)", "English (C1)"],
  // Short factual intro used in the about block
  about:
    "I lead Consumer Engagement Technology at PUIG, covering global data governance, analytics, AI, consent and the platforms that connect every brand to its consumer. Before PUIG, I delivered CRM and digital transformation programs at Deloitte across insurance, consumer goods and hospitality, and earlier ran network operations for large-scale international events including Mobile World Congress.",
};

// Headline impact metrics — surfaced as their own band right after the hero
export const metrics = [
  { value: "150+", label: "Countries served at PUIG" },
  { value: "8", label: "Global luxury brands in scope" },
  { value: "~10", label: "Years across tech & consulting" },
  { value: "7", label: "People max led in delivery teams" },
];

export const experience = [
  {
    company: "PUIG",
    logo: "/logos/puig.png",
    role: "Consumer Engagement Technology Manager",
    period: "Nov 2024 — Present",
    location: "Barcelona, Spain",
    summary:
      "Global luxury beauty and fashion group present in 150+ countries. Lead data-driven consumer engagement, governance and digital transformation across brands.",
    highlights: [
      "Lead the definition and implementation from scratch of global Data Quality frameworks and processes, including automated monitoring systems in the data mart. Built alerting mechanisms and KPI reporting (completeness, consistency, accuracy, freshness).",
      "Manage global consumer and corporate data governance across retail, marketing, sales and corporate functions, ensuring a Single Consumer View and overall data reliability.",
      "Lead and manage an analytics team working with Looker, delivering dashboards and insights for multiple business teams.",
      "Conduct and supervise AML (Advanced/Automated Machine Learning) analysis to support advanced use cases.",
      "Manage strategic projects such as the Consent Management platform — coordinating external consultancies and providers, balancing GDPR/CCPA compliance with engagement.",
      "Drive B2C Loyalty Program initiatives across brands, implementing IT solutions that enhance consumer relationships.",
      "Define and roll out global Data Capture Guidelines, ensuring standardized, compliant and value-driven data collection across all touchpoints.",
      "Lead Customer Care technology initiatives, aligning regulatory compliance with operational excellence worldwide.",
      "Start leading the Clienteling platform rollout, supporting Beauty Advisors across wholesale and owned retail (B2C).",
      "Own and coordinate the IT roadmap for data and integrations, ensuring prioritization and alignment with business strategy.",
    ],
    stack: ["Looker", "GCP", "Salesforce", "OneTrust", "GDPR/CCPA", "AML", "Data Mart"],
  },
  {
    company: "Deloitte",
    logo: "/logos/deloitte.png",
    role: "IT Consultant",
    period: "May 2022 — Nov 2024",
    location: "Barcelona, Spain",
    summary:
      "Global consulting firm ($60bn+ revenue, 400,000+ employees). Led complex CRM and digital transformation programs across insurance, consumer goods and hospitality.",
    highlights: [
      "Led end-to-end CRM implementations (Salesforce, SAP), owning delivery, technical execution, client relationship and coordination of cross-functional teams.",
      "Acted as PMO Lead in strategic, business-critical programs — establishing governance frameworks, ensuring stakeholder alignment and driving execution excellence.",
      "Defined and executed strategic roadmaps in collaboration with C-level stakeholders, maximizing business value, adoption and long-term impact.",
      "Managed and mentored multidisciplinary teams of 3–7 consultants and engineers.",
      "Served as primary liaison between business and IT, translating business needs into technical solutions.",
      "Developed and presented strategic deliverables and proposals for senior client leadership, contributing to business development.",
      "Built and maintained strong client relationships across multiple engagements.",
    ],
    stack: ["Salesforce", "SAP CX", "PMO", "Agile", "Stakeholder Mgmt"],
  },
  {
    company: "Unitronics",
    logo: "/logos/unitronics.png",
    role: "Network Analyst",
    period: "Jan 2018 — Apr 2022",
    location: "Barcelona, Spain",
    summary:
      "Technology services company supporting large-scale international events, delivering critical network infrastructure and operations.",
    highlights: [
      "Led network operations and performance management for large-scale international events, ensuring high availability, stability and service quality.",
      "Managed and coordinated teams of up to 7 network engineers in high-pressure, real-time environments.",
      "Acted as main point of contact with clients, ensuring SLA alignment, rapid issue resolution and continuous communication.",
      "Oversaw incident management and service request processes, minimizing impact on event operations.",
      "Proactively monitored network performance, identifying risks and implementing preventive and corrective actions.",
      "Proposed and implemented operational improvements and optimization initiatives, enhancing efficiency and service reliability.",
      "Progressed from operational roles to leading network operations, managing teams and acting as a key client liaison.",
    ],
    stack: ["Network Operations", "Team Lead", "Incident Mgmt", "SLA", "Cisco"],
  },
  {
    company: "Fira Barcelona",
    logo: "/logos/fira-barcelona.png",
    role: "Network Technician",
    period: "Feb 2016 — Dec 2017",
    location: "Barcelona, Spain",
    summary:
      "Leading trade fair institution hosting global events. Delivered large-scale connectivity and infrastructure services.",
    highlights: [
      "Supported deployment and operation of network infrastructures for Mobile World Congress, Smart City Expo and IoT Solutions World Congress.",
      "Hands-on experience in network configuration, troubleshooting and real-time support in high-demand, fast-paced environments.",
    ],
    stack: ["Network", "MWC", "Field Engineering"],
  },
];

// Compact, ranked by seniority — UPC incomplete entry removed
export const education = [
  {
    school: "La Salle — Universitat Ramon Llull",
    degree: "Master's in Technology Management and Digital Innovation",
    period: "2024 — 2025",
    detail: "Digital transformation, strategic leadership and emerging technologies.",
  },
  {
    school: "La Salle — Universitat Ramon Llull",
    degree: "Bachelor's in ICT Management Engineering",
    period: "2016 — 2020",
    detail: "Technology and business combined to drive innovation and digital solutions.",
  },
];

export const certifications = [
  "Salesforce Administrator",
  "Salesforce Associate",
  "Salesforce AI",
  "Salesforce Business Analyst",
  "Salesforce Sales Representative",
  "OneTrust Administrator",
  "OpenBootcamp Project Manager",
  "Google Analytics for Business",
  "Cisco CCNA 1",
];

// Reorganized: spoken languages moved to profile metadata
export const stack = [
  {
    category: "Platforms",
    items: ["Salesforce", "SAP CX", "OneTrust", "Looker"],
  },
  {
    category: "Cloud & Data",
    items: ["Google Cloud Platform", "AWS", "Data Mart", "AML / ML", "SQL"],
  },
  {
    category: "Governance & Privacy",
    items: ["GDPR", "CCPA", "Data Quality", "Single Consumer View", "Consent"],
  },
  {
    category: "Delivery",
    items: ["Agile", "PMO", "Jira", "Stakeholder Mgmt"],
  },
];
