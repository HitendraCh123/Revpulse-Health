"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  Play,
  Pause,
  Menu,
  ShieldCheck,
  Award,
  CheckCircle2,
  Cpu,
  Database,
  Layers,
  Activity,
  Lock,
  Sparkles,
  FileText,
  Building2,
  Mail,
  Briefcase,
  Globe,
  Phone,
  MapPin,
  Clock,
  Users,
  BarChart3,
  BookOpen,
} from "lucide-react";

const HERO_IMG = "/images/hero.jpg";
const DEMO_IMG = "/images/demo.jpg";
const R37_IMG = "/images/r37.jpg";
const CMD_IMG = "/images/cmd.jpg";
const TEAM_IMG = "/images/team.jpg";
const NODES_IMG = "/images/nodes.jpg";

const HERO_SLIDES = [
  {
    id: "revenue-os",
    tag: "01 / REVPULSE CORE PLATFORM",
    title: "The Healthcare Revenue OS for real-time adjudication",
    subtitle:
      "Unifying cloud-native medical billing SaaS, automated claim scrubbing, and certified RCM advisory across 140+ health systems and specialty groups.",
    image: HERO_IMG,
    alt: "Healthcare professionals in modern clinical facility corridor",
    ctaPrimary: "SEE HOW REVPULSE CORE WORKS",
    targetPage: "phare-os",
  },
  {
    id: "command-center",
    tag: "02 / COMMAND CENTER & PAYER MATRIX",
    title: "Turn payer complexity into real-time financial control",
    subtitle:
      "Validating 4.2M+ payer transactions every day against 18,400+ live rules with 98.7%+ clean claim readiness across pre-bill and post-bill workflows.",
    image: CMD_IMG,
    alt: "Modern healthcare technology operations command center",
    ctaPrimary: "EXPLORE CLAIM SCRUBBER",
    targetPage: "sol-audit",
  },
  {
    id: "r37-lab",
    tag: "03 / PULSEAI APPLIED LAB",
    title: "Autonomous AI agents built for clinical & financial scale",
    subtitle:
      "Purpose-trained medical coding and denial prevention reasoning models that eliminate administrative drag and accelerate reimbursements.",
    image: TEAM_IMG,
    alt: "Hospital executives and clinician reviewing tablet in glass atrium",
    ctaPrimary: "DISCOVER PULSEAI LAB",
    targetPage: "r37",
  },
];

const CLIENT_LOGOS = [
  { name: "Meridian Health Network", region: "Midwest • 18 Hospitals" },
  { name: "Pacific Crest Medical", region: "West Coast • Multi-Specialty" },
  { name: "Beacon Valley Health", region: "Academic Health System" },
  { name: "Summit Care Partners", region: "Northeast • 42 Clinics" },
  { name: "Clearwater Regional", region: "Integrated Care Network" },
];

const TESTIMONIALS = [
  {
    quote:
      "We are investing in technologies and operating models that strengthen financial integrity, support our billing workforce and enhance patient trust. We chose RevPulse Health because it pairs deep revenue cycle consulting expertise with modern medical billing SaaS.",
    name: "Elena Vance, CPA",
    title: "Chief Financial Officer",
    org: "Meridian Health Network",
    orgSub: "INTEGRATED HEALTH SYSTEM",
  },
  {
    quote:
      "What sets RevPulse Health apart is a unified cloud platform that brings together clinical documentation intelligence, live payer rules, and a single data layer to enable faster, cleaner claim submissions.",
    name: "Dr. Marcus Sterling",
    title: "Chief Revenue Officer",
    org: "Pacific Crest Medical",
    orgSub: "MULTI-SPECIALTY GROUP",
  },
  {
    quote:
      "RevPulse Health has been a pivotal partner, helping us reduce A/R days by 39% and recover millions in silent payer underpayments so our clinicians stay focused on patient care.",
    name: "Hannah Lindqvist",
    title: "Chief Executive Officer",
    org: "Beacon Valley Health",
    orgSub: "HEALTH & SERVICES",
  },
];

const METRICS = [
  { value: "$48B+", label: "net patient revenue managed on RevPulse Core" },
  { value: "98.7%+", label: "first-pass clean claim acceptance rate" },
  { value: "4.2M+", label: "payer transactions processed every day" },
  { value: "-39%", label: "average reduction in days in A/R" },
];

const PHARE_ACCORDION = [
  {
    id: "overview",
    tag: "RevPulse Core Overview",
    title: "Medical billing meets applied AI",
    description:
      "RevPulse Core is the product of decades of revenue cycle wisdom combined with hands-on RCM consulting and modern cloud SaaS. It connects fragmented billing workflows so your teams get speed and scale without losing financial precision.",
    highlight: "all",
  },
  {
    id: "command",
    tag: "Command center",
    title: "Putting revenue cycle leaders in control",
    description:
      "The RevPulse Command Center gives CFOs and billing directors live visibility into clean claim yield, denial trends, and payer turnaround times—turning operational insights into immediate cash-flow action.",
    highlight: "command",
  },
  {
    id: "foundations",
    tag: "RevPulse Core Foundations",
    title: "Built on a unified cloud foundation",
    description:
      "Three foundations power every workflow: a Unified Health Data Vault, Payer Matrix's living encyclopedia of payer rules, and PulseAI's clinical reasoning engine—working together for faster, cleaner reimbursement.",
    highlight: "foundations",
  },
  {
    id: "data",
    tag: "RevPulse Core, Data Vault",
    title: "With full EHR & clinical data context",
    description:
      "Unified Health Data Vault harmonizes clinical, financial, and operational records via HL7 and FHIR APIs, creating complete context for automated billing.",
    highlight: "data",
  },
  {
    id: "atlas",
    tag: "Payer Matrix",
    title: "Informed by 18,400+ live payer insights",
    description:
      "Payer Matrix tracks published commercial, Medicare, and Medicaid policies alongside observed payer adjudication behavior to scrub every claim before submission.",
    highlight: "atlas",
  },
  {
    id: "intelligence",
    tag: "PulseAI Engine",
    title: "Powered by purpose-built RCM intelligence",
    description:
      "PulseAI is a proprietary reasoning engine built specifically for medical coding, prior authorization, and denial prevention—learning from every remittance to get sharper over time.",
    highlight: "intelligence",
  },
  {
    id: "modules",
    tag: "RevPulse Core Modules",
    title: "Designed with modular flexibility",
    description:
      "RevPulse Core can be adopted end-to-end or by targeted module, addressing healthcare's toughest bottlenecks from prior authorization and coding to denial appeals and underpayment recovery.",
    highlight: "modules",
  },
];

const PHARE_MODULES_SLIDER = [
  {
    stage: "PRE-BILL",
    name: "Prior Authorization",
    route: "sol-prior-auth",
    headline: "Eliminate delays before care is delivered",
    desc: "Automates 270/271 eligibility checks and electronic prior authorization packet assembly using real-time Payer Matrix rules.",
    impact: "68% faster authorization turnaround",
    image: CMD_IMG,
  },
  {
    stage: "PRE-BILL",
    name: "Utilization Management",
    route: "sol-um",
    headline: "Align clinical necessity with payer criteria",
    desc: "Evaluates inpatient vs. observation status and medical necessity in real time across the full patient chart.",
    impact: "Faster level-of-care determinations",
    image: TEAM_IMG,
  },
  {
    stage: "PRE-BILL",
    name: "CDI & Coding",
    route: "sol-cdi",
    headline: "Clinical Documentation Integrity at scale",
    desc: "Reasons over unstructured physician notes to validate ICD-10-CM, CPT, and DRG specificity and prevent downstream downgrades.",
    impact: "98.7% first-pass coding accuracy",
    image: NODES_IMG,
  },
  {
    stage: "PRE-BILL",
    name: "Pre-Bill Audit",
    route: "sol-audit",
    headline: "Pre-submission scrubbing & compliance",
    desc: "Validates claims against 18,400+ NCCI, modifier, and payer policy edits in milliseconds prior to clearinghouse submission.",
    impact: "54% drop in front-end rejections",
    image: R37_IMG,
  },
  {
    stage: "POST-BILL",
    name: "Denials",
    route: "sol-denials",
    headline: "Autonomous root-cause & appeal generation",
    desc: "Compresses clinical denial appeal preparation from 60 minutes to 15 minutes with EHR chart citations and payer policy references.",
    impact: "3.2x clinician appeal productivity",
    image: DEMO_IMG,
  },
  {
    stage: "POST-BILL",
    name: "Recovery",
    route: "sol-recovery",
    headline: "Underpayment detection & variance recovery",
    desc: "Audits 100% of 835 remittances against contracted fee schedules to identify and recover underpaid claims across all service lines.",
    impact: "$3.8M avg annual variance recovered",
    image: HERO_IMG,
  },
];

const BELIEFS = [
  {
    num: "01",
    title: "Prevention beats rework every time.",
    body: "We believe in upstream pre-bill automation, powered by live payer rules and clinical reasoning across the entire revenue cycle.",
  },
  {
    num: "02",
    title: "A unified data view is essential.",
    body: "Effective medical billing requires connecting clinical EHR charts, payer contracts, and remittance analytics in one system.",
  },
  {
    num: "03",
    title: "SaaS + domain strategists unlock true ROI.",
    body: "Pairing cloud automation with AAPC-certified coders and healthcare CPAs eliminates administrative drag and accelerates cash flow.",
  },
];

const R37_CAPABILITIES = [
  {
    tag: "01 / PAYER INTELLIGENCE",
    title: "Payer Policy Matrix Engine",
    desc: "AI agents monitor over 18,400 ongoing commercial, Medicare, and Medicaid policy changes to turn policy shifts into pre-bill scrubbing rules.",
    image: NODES_IMG,
  },
  {
    tag: "02 / AUTONOMOUS CODING",
    title: "ICD-10 & CPT Coding Accuracy",
    desc: "Translates complex operative and clinical language into exact payer billing codes and modifiers before claim submission.",
    image: CMD_IMG,
  },
  {
    tag: "03 / CONTRACT MODELING",
    title: "Next-Generation Payer Contract Analysis",
    desc: "Digitizes multi-tier DRG, APC, and RBRVS fee schedules to flag zero-balance underpayments down to the CPT line item.",
    image: R37_IMG,
  },
  {
    tag: "04 / CLINICAL REASONING",
    title: "Clinical Denial Prevention",
    desc: "Scores every encounter for medical necessity denial risk proactively by aligning clinical documentation with payer criteria.",
    image: TEAM_IMG,
  },
  {
    tag: "05 / PATIENT BILLING",
    title: "Digital Patient Financial Concierge",
    desc: "Simplifies patient billing with upfront Good Faith Estimates, SMS text-to-pay, and automated Medicaid coverage discovery.",
    image: DEMO_IMG,
  },
  {
    tag: "06 / INTEROPERABILITY",
    title: "Bi-Directional HL7 & FHIR Sync",
    desc: "Connects seamlessly with Epic, Oracle Health, Athenahealth, and eClinicalWorks without disrupting clinical documentation.",
    image: HERO_IMG,
  },
];

const R37_TEAM = [
  { name: "Dr. Aris Thorne, MD", role: "Chief Medical & CDI Officer" },
  { name: "Elena Vance, CPA", role: "Managing Director, RCM Consulting" },
  { name: "Devon Brooks", role: "VP of Revenue SaaS Architecture" },
  { name: "Priya Nair, CPC", role: "Director of Coding Compliance" },
  { name: "Marcus Holloway", role: "Head of Payer Contract Analytics" },
  { name: "Claire Beaumont", role: "VP of Client Transformation" },
  { name: "Samuel Okafor", role: "Lead AI & FHIR Interoperability Architect" },
  { name: "Natalie Chen", role: "Director of Denial Recovery Operations" },
];

const KLAS_AWARDS = [
  { year: "2026", title: "Extended Business Office", rank: "TOP RATED" },
  { year: "2026", title: "Ambulatory & Hospital RCM SaaS", rank: "LEADER" },
  { year: "2026", title: "Underpayment Recovery Services", rank: "EXCELLENCE" },
];

const NEWS_ITEMS = [
  {
    id: "revpulse-core-4",
    category: "PRESS RELEASE",
    date: "November 2026",
    title:
      "RevPulse Health Launches RevPulse Core 4.0 with Six Connected Pre-Bill & Post-Bill Modules",
    image: CMD_IMG,
    summary:
      "RevPulse Health introduced RevPulse Core 4.0 spanning Pre-bill (Prior Authorization, Utilization Management, CDI, Audit) and Post-bill (Denials, Recovery) workflows, unified by the RevPulse Command Center, Data Vault, Payer Matrix, and PulseAI.",
    highlights: [
      "Unifies clinical, financial, and operational context across the entire claim lifecycle.",
      "Reduces front-end clearinghouse rejections by up to 54% within 60 days of deployment.",
      "Built for integrated health systems, ambulatory surgery centers, and multi-specialty groups.",
    ],
  },
  {
    id: "meridian-partnership",
    category: "PRESS RELEASE",
    date: "October 2026",
    title:
      "Meridian Health Network Cuts A/R Days by 39% and Recovers $4.6M Using RevPulse Core",
    image: TEAM_IMG,
    summary:
      "Meridian Health Network deployed RevPulse Core and RevPulse Health's RCM consulting team across 18 hospitals and 65 outpatient clinics to modernize coding, scrubbing, and payer contract recovery.",
    highlights: [
      "Reduced average days in Accounts Receivable from 56 days to 34 days.",
      "Recovered $4.6M in silent payer contract underpayments across surgical and imaging lines.",
      "Tripled appeal throughput using PulseAI clinical appeal packet automation.",
    ],
  },
  {
    id: "medicaid-enrollment",
    category: "UPDATE",
    date: "September 2026",
    title:
      "RevPulse Health Expands Patient Financial Access with Automated Coverage Discovery",
    image: NODES_IMG,
    summary:
      "New patient financial experience capabilities automatically screen self-pay encounters for active Medicaid and commercial coverage while providing instant Good Faith Estimates.",
    highlights: [
      "Increases point-of-service and mobile self-service patient collections by 31%.",
      "Automates No Surprises Act compliant out-of-pocket cost estimates prior to care.",
      "Reduces bad-debt write-offs and streamlines financial assistance qualification.",
    ],
  },
  {
    id: "ai-orchestration",
    category: "INDUSTRY INSIGHTS",
    date: "August 2026",
    title:
      "The 2026 CFO Playbook: Shifting from Reactive Denials to Pre-Bill Prevention",
    image: R37_IMG,
    summary:
      "Discover how healthcare CFOs are combining pre-bill payer rule scrubbing with certified clinical documentation audits to protect operating margins in 2026.",
    highlights: [
      "Addresses rising Medicare Advantage medical necessity and inpatient-vs-observation audits.",
      "Benchmarks clean claim yield, cost-to-collect, and net collection rate across specialties.",
      "Outlines co-managed staffing models for lean hospital business offices.",
    ],
  },
  {
    id: "trust-attestation",
    category: "PRESS RELEASE",
    date: "July 2026",
    title:
      "RevPulse Health Completes 2026 SOC 2 Type II & HITRUST CSF Security Certifications",
    image: DEMO_IMG,
    summary:
      "RevPulse Health reaffirmed its zero-trust healthcare data governance commitment with clean SOC 2 Type II and HITRUST audits across all cloud billing and AI pipelines.",
    highlights: [
      "End-to-end AES-256 encryption at rest and TLS 1.3 in transit under executed BAAs.",
      "Zero customer PHI used to train external third-party foundation models.",
      "Granular role-based access controls and immutable audit logs for every claim action.",
    ],
  },
];

const SOLUTIONS_MENU = {
  preBill: [
    {
      id: "sol-prior-auth",
      name: "Prior Authorization",
      desc: "Automated 270/271 eligibility checks and electronic prior authorization packet assembly before care.",
    },
    {
      id: "sol-um",
      name: "Utilization Management",
      desc: "Real-time medical necessity alignment and inpatient vs. observation level-of-care guidance.",
    },
    {
      id: "sol-cdi",
      name: "CDI",
      desc: "Clinical Documentation Integrity powered by AI reasoning over the full unstructured patient chart.",
    },
    {
      id: "sol-audit",
      name: "Audit",
      desc: "Pre-submission claim scrubbing against 18,400+ NCCI, LCD/NCD, and commercial payer edits.",
    },
  ],
  postBill: [
    {
      id: "sol-denials",
      name: "Denials",
      desc: "Autonomous root-cause clustering and evidence-backed clinical appeal packet generation.",
    },
    {
      id: "sol-recovery",
      name: "Recovery",
      desc: "Line-item CPT underpayment detection and aged 90+ day A/R liquidation.",
    },
  ],
  partnerships: {
    id: "sol-consulting",
    name: "Consulting & Partnerships",
    desc: "Helping providers reduce costs, renegotiate payer contracts, and scale co-managed billing.",
  },
};

const RESOURCES_MENU = [
  {
    id: "res-all",
    label: "All Insights & Resources",
    filter: "ALL",
    desc: "Complete library of RevPulse Health research, case studies, and releases.",
  },
  {
    id: "res-newsroom",
    label: "Newsroom & Releases",
    filter: "PRESS RELEASE",
    desc: "Product announcements, platform milestones, and compliance updates.",
  },
  {
    id: "res-insights",
    label: "CFO Playbooks & Insights",
    filter: "INDUSTRY INSIGHTS",
    desc: "Executive guides on denial prevention, coding compliance, and KPI benchmarks.",
  },
  {
    id: "res-updates",
    label: "Client Outcomes & Updates",
    filter: "UPDATE",
    desc: "Verified hospital and specialty group financial transformation stories.",
  },
];

const COMPANY_MENU = [
  {
    id: "comp-about",
    label: "About RevPulse Health",
    desc: "Our leadership, clinical coding heritage, and 140+ health system footprint.",
  },
  {
    id: "comp-vision",
    label: "Revenue Operating System Vision",
    desc: "Our 2030 roadmap for touchless, real-time healthcare claims adjudication.",
  },
  {
    id: "comp-trust",
    label: "Compliance & Trust Center",
    desc: "HIPAA BAA governance, SOC 2 Type II, HITRUST CSF, and zero-trust AI isolation.",
  },
  {
    id: "comp-careers",
    label: "Careers",
    desc: "Join AAPC-certified coders, healthcare CPAs, and cloud RCM engineers.",
  },
];

// Rich, deep, comprehensive content for EVERY dropdown page (expanded with deliverables, benchmark tables, integrations & FAQs)
const DROPDOWN_PAGES = {
  "sol-prior-auth": {
    eyebrow: "PRE-BILL SOLUTION • 01",
    title: "Automated Eligibility & Prior Authorization",
    lead: "Eliminate front-end registration denials before care is delivered. RevPulse Core verifies primary, secondary, and tertiary coverage in under 1.2 seconds and automates electronic prior authorization submissions across commercial and Medicare Advantage plans.",
    image: CMD_IMG,
    imageAlt: "RevPulse Core prior authorization operations center",
    stats: [
      { value: "68%", label: "faster prior authorization turnaround" },
      { value: "< 1.2s", label: "real-time 270/271 eligibility verification" },
      { value: "-61%", label: "reduction in front-end eligibility rejections" },
    ],
    pillars: [
      {
        num: "01",
        title: "Automated Scheduling-Triggered Verification",
        body: "Queries commercial, Medicare Advantage, and Medicaid payers automatically upon appointment booking to confirm active coverage, deductible accumulators, copays, and Coordination of Benefits (COB).",
      },
      {
        num: "02",
        title: "Payer Matrix Authorization Requirement Check",
        body: "Cross-checks ordered CPT/HCPCS codes against 18,400+ live payer rules to flag when prior authorization is mandatory and prevent unapproved surgeries, imaging, or specialty infusions.",
      },
      {
        num: "03",
        title: "Clinical Packet Assembly & 278 EDI Submission",
        body: "Extracts supporting clinical notes, imaging, and lab results directly from the EHR, submits via electronic prior auth (ePA), and writes approval numbers back to the claim.",
      },
    ],
    deliverables: [
      "Real-time X12 270/271 batch & single-patient eligibility checks at scheduling and check-in",
      "Automated electronic Prior Authorization (278 EDI & direct payer portal automation)",
      "No Surprises Act compliant Good Faith Estimate (GFE) patient cost estimator",
      "Self-pay coverage discovery uncovering hidden active Medicaid or commercial policies",
      "Automated authorization expiration alerts and surgical schedule protection queues",
      "Bi-directional write-back into Epic, Oracle Health, Athenahealth, and eClinicalWorks",
    ],
    comparison: [
      {
        metric: "Eligibility Verification Speed",
        legacy: "12–18 mins manual portal lookup",
        revpulse: "1.2 seconds automated 270/271",
      },
      {
        metric: "Prior Auth Packet Assembly",
        legacy: "45+ mins manual chart faxing",
        revpulse: "Under 4 mins automated EHR extraction",
      },
      {
        metric: "Front-End Registration Denials",
        legacy: "6.4% – 9.2% of gross claims",
        revpulse: "Under 1.4% first-pass rejection rate",
      },
    ],
    faqs: [
      {
        q: "Which EHRs and clearinghouses does Prior Authorization integrate with?",
        a: "RevPulse Core connects natively via HL7, FHIR R4, and X12 EDI with Epic, Oracle Health (Cerner), Athenahealth, eClinicalWorks, NextGen, and Meditech, plus Availity, Change Healthcare, and Waystar.",
      },
      {
        q: "How quickly can a hospital or specialty group deploy pre-service automation?",
        a: "Standard EHR and payer clearinghouse connections go live in 3 to 4 weeks with zero disruption to front-desk scheduling staff.",
      },
    ],
  },
  "sol-um": {
    eyebrow: "PRE-BILL SOLUTION • 02",
    title: "Utilization Management & Level-of-Care Intelligence",
    lead: "Ensure every inpatient admission and observation stay meets payer medical necessity criteria from day one—preventing costly status downgrades, concurrent denials, and uncompensated hospital days.",
    image: TEAM_IMG,
    imageAlt: "Clinicians and utilization review specialists collaborating",
    stats: [
      { value: "44%", label: "fewer inpatient-to-observation downgrades" },
      { value: "2.8x", label: "faster concurrent clinical chart reviews" },
      { value: "99.1%", label: "medical necessity documentation alignment" },
    ],
    pillars: [
      {
        num: "01",
        title: "Real-Time Admission Status Guidance",
        body: "Evaluates vitals, lab acuity, comorbidities, and clinical progress notes against InterQual, MCG, and payer-specific medical necessity criteria at the moment of admission.",
      },
      {
        num: "02",
        title: "Automated Payer Concurrent Review Packets",
        body: "Compiles structured clinical summaries for payer utilization review nurses, cutting administrative phone and portal time for hospital case managers by over 60%.",
      },
      {
        num: "03",
        title: "Physician Advisor Escalation Queue",
        body: "Flags borderline short-stay cases early so physician advisors can intervene before discharge and protect rightful inpatient DRG reimbursement.",
      },
    ],
    deliverables: [
      "Real-time Emergency Department to Inpatient vs. Observation status scoring",
      "Automated Medicare Two-Midnight Rule & Medicare Advantage clinical criteria checks",
      "One-click clinical summary packets for concurrent payer utilization reviews",
      "Length-of-Stay (LOS) variance alerts and discharge bottleneck tracking",
      "Peer-to-peer physician advisor briefing packets with exact chart citations",
      "Post-discharge Condition Code 44 audit trail and compliance documentation",
    ],
    comparison: [
      {
        metric: "Concurrent Chart Review Time",
        legacy: "35–50 mins per inpatient admission",
        revpulse: "12 mins with AI clinical synthesis",
      },
      {
        metric: "Inpatient Status Downgrades",
        legacy: "11% – 16% of short-stay admissions",
        revpulse: "Reduced by 44% within 90 days",
      },
      {
        metric: "Peer-to-Peer Preparation",
        legacy: "Manual physician chart hunting",
        revpulse: "Auto-assembled clinical evidence brief",
      },
    ],
    faqs: [
      {
        q: "Does RevPulse support both InterQual and MCG clinical criteria?",
        a: "Yes. Our Utilization Management engine aligns clinical documentation against InterQual, MCG, and payer-specific Medicare Advantage medical necessity policies.",
      },
      {
        q: "How does this help case management nurses?",
        a: "Instead of manually reading 200-page charts to summarize vitals and labs for payers, nurses receive an automated, timestamped clinical summary ready for payer submission.",
      },
    ],
  },
  "sol-cdi": {
    eyebrow: "PRE-BILL SOLUTION • 03",
    title: "Clinical Documentation Integrity (CDI) & Autonomous Coding",
    lead: "Translate complex clinical narratives into accurate ICD-10-CM, CPT, and DRG assignments. PulseAI reads the entire longitudinal patient chart to capture true clinical acuity and eliminate undercoding.",
    image: NODES_IMG,
    imageAlt: "PulseAI clinical documentation neural network",
    stats: [
      { value: "98.7%", label: "first-pass coding accuracy rate" },
      { value: "+14%", label: "appropriate Case Mix Index (CMI) capture" },
      { value: "3.5x", label: "faster chart-to-bill coding throughput" },
    ],
    pillars: [
      {
        num: "01",
        title: "Longitudinal Chart NLP Analysis",
        body: "Reads operative notes, pathology, radiology reads, and discharge summaries to surface undocumented comorbidities (CC/MCC) and surgical specificity.",
      },
      {
        num: "02",
        title: "Compliant, Non-Leading Physician Queries",
        body: "Generates concise, AHIMA/ACDIS-compliant clarification queries directly inside the clinician workflow when diagnosis specificity is incomplete.",
      },
      {
        num: "03",
        title: "AAPC-Certified Coder Co-Pilot",
        body: "Auto-codes routine outpatient visits with high confidence while routing complex surgical encounters to certified coders with inline chart evidence.",
      },
    ],
    deliverables: [
      "Autonomous ICD-10-CM, CPT-4, HCPCS Level II, and modifier assignment",
      "Concurrent inpatient & outpatient CDI specificity alerts (CC/MCC capture)",
      "Built-in OIG compliance guardrails against upcoding or unbundling",
      "Specialty-trained models for Orthopedics, Cardiology, Oncology, and Radiology",
      "Coder productivity & accuracy QA dashboards with full audit trails",
      "Reduced Discharged Not Final Billed (DNFB) backlog days",
    ],
    comparison: [
      {
        metric: "Chart-to-Bill Coding Lag",
        legacy: "5 – 9 days DNFB hold",
        revpulse: "Under 24 hours automated coding",
      },
      {
        metric: "First-Pass Coding Accuracy",
        legacy: "89% – 92% industry average",
        revpulse: "98.7% verified accuracy",
      },
      {
        metric: "CC / MCC Specificity Capture",
        legacy: "Missed in ~18% of complex charts",
        revpulse: "100% chart-wide clinical scan",
      },
    ],
    faqs: [
      {
        q: "Are physician queries compliant with AHIMA and ACDIS guidelines?",
        a: "Strictly. Every query generated by PulseAI is non-leading, presents multiple clinical options supported by chart indicators, and maintains a complete compliance audit trail.",
      },
      {
        q: "Can our in-house coding team review AI-suggested codes?",
        a: "Yes. You control the confidence thresholds—allowing low-complexity encounters to auto-finalize while routing complex surgical or inpatient cases to your coders with highlighted evidence.",
      },
    ],
  },
  "sol-audit": {
    eyebrow: "PRE-BILL SOLUTION • 04",
    title: "Pre-Bill Claim Scrubber & Compliance Audit",
    lead: "Catch coding errors, modifier conflicts, and payer-specific billing quirks in milliseconds—before claims ever leave your system for the clearinghouse.",
    image: R37_IMG,
    imageAlt: "Pre-bill claim audit rules matrix",
    stats: [
      { value: "98.7%+", label: "clean claim rate on first submission" },
      { value: "18,400+", label: "live commercial & government payer edits" },
      {
        value: "-54%",
        label: "reduction in front-end clearinghouse rejections",
      },
    ],
    pillars: [
      {
        num: "01",
        title: "X12 837I / 837P Structural & Credential Validation",
        body: "Audits NPIs, taxonomy codes, place-of-service indicators, and rendering provider enrollments to eliminate technical rejections.",
      },
      {
        num: "02",
        title: "NCCI, Modifier & LCD/NCD Medical Necessity Checks",
        body: "Verifies bundling rules, Modifier 25/59/XE/XS/XP/XU appropriateness, and local/national Medicare coverage determinations.",
      },
      {
        num: "03",
        title: "Proprietary Payer Behavior Rules",
        body: "Applies unwritten payer adjudication rules learned from millions of historical remits—catching edge-case denials standard scrubbers miss.",
      },
    ],
    deliverables: [
      "Sub-second batch and real-time API claim scrubbing prior to 837 submission",
      "One-click inline claim correction workspace for billing specialists",
      "Weekly automated rule updates for Medicare, Medicaid, and top 250 commercial payers",
      "Pre-submission denial risk score on every individual CPT/HCPCS claim line",
      "Provider credentialing & payer enrollment cross-check before billing",
      "Custom hospital and specialty-group edit rule builder",
    ],
    comparison: [
      {
        metric: "Active Payer Scrubbing Rules",
        legacy: "~2,500 static clearinghouse edits",
        revpulse: "18,400+ dynamic clinical & payer rules",
      },
      {
        metric: "First-Pass Clean Claim Yield",
        legacy: "86% – 91% average",
        revpulse: "98.7%+ clean claim acceptance",
      },
      {
        metric: "Modifier 25 / 59 Audit Accuracy",
        legacy: "Manual sampling only",
        revpulse: "100% pre-bill automated validation",
      },
    ],
    faqs: [
      {
        q: "How is RevPulse's Claim Scrubber different from a standard clearinghouse scrubber?",
        a: "Standard clearinghouses only check basic X12 formatting and basic NCCI edits. RevPulse scrubs against clinical documentation, LCD/NCD medical necessity, and payer-specific adjudication quirks.",
      },
      {
        q: "How often are payer rules updated?",
        a: "Our Payer Matrix team and automated policy crawlers update Medicare, Medicaid, and commercial payer rules every week.",
      },
    ],
  },
  "sol-denials": {
    eyebrow: "POST-BILL SOLUTION • 01",
    title: "AI Denial Management & Autonomous Clinical Appeals",
    lead: "Turn denied claims into recovered revenue. RevPulse Core clusters denials by root cause and drafts evidence-backed clinical appeal letters in under 60 seconds.",
    image: DEMO_IMG,
    imageAlt: "Billing specialists reviewing denial appeal analytics",
    stats: [
      { value: "3.2x", label: "faster clinical appeal packet assembly" },
      { value: "74%", label: "overturn rate on medical necessity appeals" },
      { value: "-39%", label: "reduction in total days in A/R" },
    ],
    pillars: [
      {
        num: "01",
        title: "835 ERA Root-Cause Clustering & Triage",
        body: "Ingests electronic remittance files and prioritizes denials by dollar value, payer appeal deadline countdown, and historical overturn probability.",
      },
      {
        num: "02",
        title: "One-Click Evidence-Backed Appeal Letters",
        body: "PulseAI extracts exact physician notes, lab thresholds, and payer medical policy citations into a formatted appeal packet ready for submission.",
      },
      {
        num: "03",
        title: "Closed-Loop Pre-Bill Prevention",
        body: "Every overturned denial feeds new validation logic back into your Pre-Bill Audit scrubber so recurring payer denial patterns are stopped upstream.",
      },
    ],
    deliverables: [
      "Automated 835 ERA parsing and payer-specific appeal timely-filing countdowns",
      "AI-generated clinical necessity, coding dispute, and timely-filing appeal letters",
      "Payer, specialty, and ordering-provider denial root-cause heatmaps",
      "Automated medical record attachment bundling for electronic payer portals",
      "Dedicated RN & certified coder escalation support for complex peer reviews",
      "Upstream scrubber rule generation to prevent repeat denials",
    ],
    comparison: [
      {
        metric: "Appeal Packet Preparation Time",
        legacy: "45 – 75 mins per clinical appeal",
        revpulse: "Under 60 seconds AI-drafted packet",
      },
      {
        metric: "Medical Necessity Overturn Rate",
        legacy: "38% – 45% average",
        revpulse: "74% overturn rate with chart citations",
      },
      {
        metric: "Timely Filing Write-Offs",
        legacy: "2.5% – 4% of denied volume",
        revpulse: "Near-zero with automated SLA alerts",
      },
    ],
    faqs: [
      {
        q: "Can RevPulse handle both technical denials and clinical medical necessity denials?",
        a: "Yes. Technical denials (missing modifiers, COB, duplicate flags) are routed for rapid corrected-claim resubmission, while clinical denials get full EHR-cited appeal letters.",
      },
      {
        q: "Do you offer managed appeal services if our internal team is short-staffed?",
        a: "Yes. Our denial recovery specialists and clinical RNs can work your denial queues directly inside RevPulse Core on a co-managed or contingency basis.",
      },
    ],
  },
  "sol-recovery": {
    eyebrow: "POST-BILL SOLUTION • 02",
    title: "Underpayment Detection & Aged A/R Recovery",
    lead: "Payers routinely underpay contracted rates by 3% to 9% through silent bundling and fee-schedule miscalculations. RevPulse audits 100% of remittances down to the CPT line.",
    image: HERO_IMG,
    imageAlt: "Hospital revenue recovery leadership team",
    stats: [
      { value: "$3.8M", label: "average annual payer variance recovered" },
      { value: "100%", label: "line-by-line 835 remittance contract audit" },
      { value: "60 Days", label: "typical sprint to liquidate 90+ day A/R" },
    ],
    pillars: [
      {
        num: "01",
        title: "Contract & Fee-Schedule Digitization",
        body: "Models your exact Medicare, Medicaid, and commercial payer agreements—including DRG base rates, stop-loss outliers, implants, and ASC tiers.",
      },
      {
        num: "02",
        title: "Zero-Balance Remittance Variance Audit",
        body: "Compares actual 835 payments against expected contracted reimbursement to surface silent underpayments and improper contractual write-offs.",
      },
      {
        num: "03",
        title: "Dedicated Recovery & Legacy A/R Squads",
        body: "Deploys specialized recovery analysts with itemized variance schedules to collect owed balances on aged 90+, 180+, and 365+ day claims.",
      },
    ],
    deliverables: [
      "Automated contract modeling for DRG, APC, ASC, per-diem, and RBRVS fee schedules",
      "Zero-balance account lookback audits (up to 24-month payer lookback windows)",
      "Dedicated legacy A/R clean-up and payer escalation squads",
      "High-cost implant, drug (J-code), and stop-loss outlier reimbursement verification",
      "Payer yield scorecard analytics to arm your team for contract renewals",
      "Automated secondary & tertiary crossover billing",
    ],
    comparison: [
      {
        metric: "Remittance Contract Audit Scope",
        legacy: "Random 5% manual sample",
        revpulse: "100% automated CPT-level 835 audit",
      },
      {
        metric: "Silent Underpayment Recovery",
        legacy: "Often written off as contractual",
        revpulse: "$3.8M avg annual cash recovered",
      },
      {
        metric: "90+ Day Aged A/R Backlog",
        legacy: "22% – 30% of total A/R",
        revpulse: "Reduced below 11% within 90 days",
      },
    ],
    faqs: [
      {
        q: "How far back can you audit zero-balance accounts for underpayments?",
        a: "Depending on your state laws and payer contracts, we routinely audit 12 to 24 months of historical 835 remittances to recover silent underpayments.",
      },
      {
        q: "How long does it take to model our payer contracts?",
        a: "Our contract engineering team digitizes and validates your top 15 payer contracts within 21 business days.",
      },
    ],
  },
  "sol-consulting": {
    eyebrow: "CONSULTING & PARTNERSHIPS",
    title: "Healthcare RCM Consulting, Coding Audits & Managed Services",
    lead: "Partner with healthcare CPAs, AAPC-certified coders, and former health-system CFOs to re-engineer revenue cycle workflows, renegotiate payer contracts, and scale billing operations.",
    image: TEAM_IMG,
    imageAlt: "RevPulse Health strategic RCM advisory team",
    stats: [
      { value: "4.5x", label: "guaranteed minimum consulting ROI" },
      { value: "100%", label: "AAPC & AHIMA certified audit specialists" },
      { value: "30 Days", label: "comprehensive HFMA MAP Key diagnostic" },
    ],
    pillars: [
      {
        num: "01",
        title: "Payer Contract Renegotiation & Fee Modeling",
        body: "Models proposed payer rate changes across your actual CPT/DRG procedure mix so executive leadership negotiates from hard financial data.",
      },
      {
        num: "02",
        title: "Independent OIG & Coding Compliance Audits",
        body: "Conducts deep-dive chart audits across E/M, surgical, and specialty service lines to mitigate compliance risk and eliminate undercoding.",
      },
      {
        num: "03",
        title: "Co-Managed Billing & Extended Business Office",
        body: "Embeds RevPulse specialists to manage complex segments—including Workers' Comp, MVA, VA/Tricare, or full end-to-end medical billing.",
      },
    ],
    deliverables: [
      "30-Day HFMA MAP Key Revenue Cycle Diagnostic & Financial Opportunity Roadmap",
      "Independent OIG & payer coding compliance audits (ICD-10, CPT, E/M, Surgical)",
      "Payer contract rate benchmarking and fee-schedule renegotiation advisory",
      "EHR revenue cycle workflow optimization (Epic Resolute, Athena, eCW, NextGen)",
      "Full-service outsourced medical billing & Extended Business Office (EBO) staffing",
      "Interim VP of Revenue Cycle & Patient Financial Services leadership",
    ],
    comparison: [
      {
        metric: "Diagnostic Turnaround",
        legacy: "3 – 4 months traditional consulting",
        revpulse: "30-day data-driven diagnostic",
      },
      {
        metric: "Implementation Support",
        legacy: "Static slide deck recommendations",
        revpulse: "Hands-on execution + RevPulse Core SaaS",
      },
      {
        metric: "Specialty Billing Coverage",
        legacy: "Generalist staffing",
        revpulse: "Dedicated specialty-certified pods",
      },
    ],
    faqs: [
      {
        q: "Can we engage RevPulse Health for consulting without switching our billing software?",
        a: "Yes. Our RCM consulting, coding compliance audits, and payer contract advisory teams work directly inside your existing EHR/PM environment or alongside RevPulse Core.",
      },
      {
        q: "Do you support specialty physician practices and ASCs as well as hospitals?",
        a: "Absolutely. We have dedicated advisory and managed billing teams for multi-specialty medical groups, ASCs, behavioral health, orthopedics, cardiology, and oncology.",
      },
    ],
  },
  "comp-about": {
    eyebrow: "COMPANY • ABOUT US",
    title: "20+ Years of Revenue Cycle Mastery Meets Cloud-Native SaaS",
    lead: "RevPulse Health transforms financial performance and patient billing experience for integrated health systems, hospitals, and specialty physician groups nationwide.",
    image: HERO_IMG,
    imageAlt: "RevPulse Health modern clinical headquarters",
    stats: [
      { value: "140+", label: "health systems & specialty groups served" },
      { value: "$48B+", label: "net patient revenue managed annually" },
      { value: "99.4%", label: "annual enterprise client retention" },
    ],
    pillars: [
      {
        num: "01",
        title: "Built by Operators & Technologists",
        body: "Founded by health-system CFOs, certified medical coders, and cloud engineers who understand both clinical nuance and payer adjudication.",
      },
      {
        num: "02",
        title: "Specialty-Wide Operational Depth",
        body: "Tailored workflows for acute-care hospitals, ASCs, orthopedics, cardiology, oncology, radiology, and multi-specialty medical groups.",
      },
      {
        num: "03",
        title: "Transparent, Outcome-Aligned Accountability",
        body: "Every partnership is anchored to live Command Center benchmarks—clean claim rate, days in A/R, net collection yield, and cost-to-collect.",
      },
    ],
    deliverables: [
      "24/7 U.S. & global follow-the-sun medical billing and coding operations",
      "Dedicated client success executive & clinical coding lead for every account",
      "Transparent, outcome-aligned SaaS and co-managed service agreements",
      "Active leadership across HFMA, MGMA, AAPC, and AHIMA standards",
      "SOC 2 Type II & HITRUST CSF certified cloud infrastructure",
      "Proven 90-day onboarding methodology across all major EHRs",
    ],
    comparison: [
      {
        metric: "Operating Model",
        legacy: "Siloed software OR manual agency",
        revpulse: "Unified SaaS + certified RCM experts",
      },
      {
        metric: "Client Retention Rate",
        legacy: "~82% industry average",
        revpulse: "99.4% annual enterprise retention",
      },
      {
        metric: "Time to Measurable Cash Lift",
        legacy: "9 – 12 months",
        revpulse: "First 60 – 90 days post go-live",
      },
    ],
    faqs: [
      {
        q: "Where is RevPulse Health headquartered and where are your teams located?",
        a: "RevPulse Health is headquartered in Chicago with regional operations hubs in Austin, Nashville, and Bengaluru—enabling 24/7 follow-the-sun claim processing.",
      },
      {
        q: "What size healthcare organizations do you work with?",
        a: "We serve multi-hospital health systems, academic medical centers, ambulatory surgery centers, and specialty physician groups with 15+ providers.",
      },
    ],
  },
  "comp-vision": {
    eyebrow: "COMPANY • VISION",
    title: "Revenue Operating System Vision: Real-Time Adjudication",
    lead: "Healthcare spends over $400 billion annually on billing friction. Our vision is an intelligent operating layer where clinical documentation and payer reimbursement align automatically.",
    image: CMD_IMG,
    imageAlt: "RevPulse Health real-time adjudication command center",
    stats: [
      { value: "< 24h", label: "target chart-to-clean-claim turnaround" },
      { value: "85%", label: "routine billing tasks automated by PulseAI" },
      {
        value: "Zero",
        label: "tolerance for avoidable administrative denials",
      },
    ],
    pillars: [
      {
        num: "01",
        title: "Ambient Clinical-to-Billing Translation",
        body: "Capturing medical necessity and coding specificity automatically during clinical documentation so providers focus on care, not billing codes.",
      },
      {
        num: "02",
        title: "Shared Payer-Provider Rule Alignment",
        body: "Embedding live payer coverage criteria directly into pre-bill workflows so claims satisfy adjudication policies before submission.",
      },
      {
        num: "03",
        title: "Dignified Patient Financial Clarity",
        body: "Delivering upfront out-of-pocket estimates and compassionate digital payment options for every patient encounter.",
      },
    ],
    deliverables: [
      "FHIR R4 & X12 278 real-time payer interoperability architecture",
      "Continuous self-learning Payer Matrix updated weekly",
      "Open API ecosystem for hospital ERP, EHR, and clearinghouse partners",
      "Quarterly CFO Revenue Integrity Benchmark Reports",
      "Human-in-the-loop AI governance with explainable code citations",
      "Zero-trust PHI isolation across every AI model",
    ],
    comparison: [
      {
        metric: "Claim Adjudication Cycle",
        legacy: "30 – 65 days batch processing",
        revpulse: "Real-time pre-bill clearance",
      },
      {
        metric: "Rule Maintenance",
        legacy: "Manual spreadsheet updates",
        revpulse: "Continuous AI policy ingestion",
      },
      {
        metric: "Patient Billing Experience",
        legacy: "Surprise paper bills months later",
        revpulse: "Upfront digital cost transparency",
      },
    ],
    faqs: [
      {
        q: "How does RevPulse Health keep humans in control of AI automation?",
        a: "Every automated coding or appeal recommendation includes direct sentence-level citations back to the EHR chart and payer policy, with configurable human sign-off thresholds.",
      },
    ],
  },
  "comp-trust": {
    eyebrow: "COMPANY • TRUST CENTER",
    title: "HIPAA, SOC 2 Type II & HITRUST CSF Security Governance",
    lead: "As AI reshapes healthcare operations, how we safeguard Protected Health Information (PHI) matters more than ever. RevPulse Health operates under zero-trust security and strict data isolation.",
    image: NODES_IMG,
    imageAlt: "Zero-trust HIPAA data encryption network",
    stats: [
      { value: "AES-256", label: "encryption at rest & TLS 1.3 in transit" },
      { value: "99.99%", label: "cloud platform availability SLA" },
      { value: "0%", label: "client PHI used to train public AI models" },
    ],
    pillars: [
      {
        num: "01",
        title: "AICPA SOC 2 Type II & HITRUST CSF Certified",
        body: "Independently audited annually across security, availability, processing integrity, confidentiality, and HIPAA Privacy & Security Rules.",
      },
      {
        num: "02",
        title: "Isolated Single-Tenant AI Inference",
        body: "PulseAI models execute inside HIPAA-compliant VPCs under executed Business Associate Agreements (BAAs)—never sharing data across tenants.",
      },
      {
        num: "03",
        title: "Enterprise SSO, RBAC & Immutable Audit Trails",
        body: "Supports SAML 2.0 / OIDC SSO, granular role-based PHI masking, and complete audit logs for every human and AI action.",
      },
    ],
    deliverables: [
      "Executed HIPAA Business Associate Agreement (BAA) for every client",
      "Annual third-party penetration testing and continuous vulnerability scanning",
      "24/7 Security Operations Center (SOC) monitoring and incident response",
      "Full SOC 2 Type II & HITRUST reports available under NDA for vendor security review",
      "Customer-managed encryption keys (CMEK) & regional data residency options",
      "Role-based access controls (RBAC) with least-privilege enforcement",
    ],
    comparison: [
      {
        metric: "AI Model Data Isolation",
        legacy: "Shared public LLM APIs",
        revpulse: "Single-tenant HIPAA VPC isolation",
      },
      {
        metric: "Encryption Standards",
        legacy: "Basic transport TLS only",
        revpulse: "AES-256 at rest + TLS 1.3 + CMEK",
      },
      {
        metric: "Compliance Attestations",
        legacy: "Self-attested checklists",
        revpulse: "Audited SOC 2 Type II & HITRUST CSF",
      },
    ],
    faqs: [
      {
        q: "Is client PHI ever used to train external foundation models?",
        a: "Never. All PulseAI inference occurs within isolated, BAA-covered cloud enclaves with zero data retention by external model providers.",
      },
    ],
  },
  "comp-careers": {
    eyebrow: "COMPANY • CAREERS",
    title: "Careers at RevPulse Health: Build What Matters",
    lead: "Join AAPC-certified medical coders, healthcare CPAs, clinical informaticists, and cloud engineers transforming the unit economics of healthcare.",
    image: TEAM_IMG,
    imageAlt: "RevPulse Health team collaborating in modern office",
    stats: [
      { value: "Hybrid", label: "flexible remote & regional hub model" },
      {
        value: "100%",
        label: "paid CPC, CCS & FHFMA certification sponsorship",
      },
      { value: "4.9/5", label: "team satisfaction & retention score" },
    ],
    pillars: [
      {
        num: "01",
        title: "Senior Certified Inpatient & Surgical Coder (CPC / CCS)",
        body: "Audit complex multi-specialty operative charts, validate DRG assignments, and partner with PulseAI engineers to refine coding models.",
      },
      {
        num: "02",
        title: "Healthcare Revenue Cycle Consultant (CPA / FHFMA)",
        body: "Lead 30-day revenue diagnostics, payer contract variance models, and A/R turnaround engagements for hospital CFOs.",
      },
      {
        num: "03",
        title: "Staff Full-Stack & FHIR Interoperability Engineer (Next.js)",
        body: "Architect high-throughput HL7/FHIR pipelines, X12 837/835 parsers, and real-time analytics dashboards in RevPulse Core. Apply: careers@revpulsehealth.com",
      },
    ],
    deliverables: [
      "Comprehensive medical, dental, vision, and mental wellness coverage from Day 1",
      "Annual CEU stipend and 100% paid exam fees for CPC, CCS, CPMA, and FHFMA",
      "Modern MacBook/workstation setup, home-office stipend, and flexible schedules",
      "Annual performance bonuses and equity participation for full-time team members",
      "Structured career ladders across Coding, RCM Consulting, and Engineering",
      "Direct talent inquiries: careers@revpulsehealth.com",
    ],
    comparison: [
      {
        metric: "Certification & CEU Support",
        legacy: "Out-of-pocket coder expense",
        revpulse: "100% company-sponsored + paid study days",
      },
      {
        metric: "Work Flexibility",
        legacy: "Rigid cubicle shifts",
        revpulse: "Remote-first & flexible regional hubs",
      },
      {
        metric: "Tooling & Workflow",
        legacy: "Clunky green-screen terminals",
        revpulse: "Modern cloud RevPulse Core workspace",
      },
    ],
    faqs: [
      {
        q: "How can certified coders or engineers apply?",
        a: "Send your resume or LinkedIn profile to careers@revpulsehealth.com or submit an inquiry through our Contact page—our talent team responds within 48 hours.",
      },
    ],
  },
};

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showBanner, setShowBanner] = useState(true);
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [testimonialAuto, setTestimonialAuto] = useState(true);
  const [activePhareIdx, setActivePhareIdx] = useState(0);
  const [moduleSlideIdx, setModuleSlideIdx] = useState(0);
  const [newsSlideIdx, setNewsSlideIdx] = useState(0);
  const [r37SlideIdx, setR37SlideIdx] = useState(0);
  const [teamSlideIdx, setTeamSlideIdx] = useState(0);
  const [resourceFilter, setResourceFilter] = useState("ALL");

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Interactive Contact Page & Demo Modal State
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState(
    "Free 48-Hour RCM Audit",
  );
  const [demoForm, setDemoForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    ehrSystem: "Epic",
    monthlyClaims: "10,000 – 50,000 claims/mo",
    interest: "RevPulse Core Full Platform",
    notes: "",
  });

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [detailModal, setDetailModal] = useState(null);
  const [consentModalOpen, setConsentModalOpen] = useState(false);
  const [consentPrefs, setConsentPrefs] = useState({
    essential: true,
    analytics: true,
    personalization: false,
  });
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(""), 3500);
    return () => clearTimeout(t);
  }, [toastMsg]);

  useEffect(() => {
    if (!heroPlaying) return;
    const interval = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroPlaying]);

  useEffect(() => {
    if (!testimonialAuto) return;
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [testimonialAuto]);

  const navigateTo = (page, sectionId = null) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoModalOpen(false);
      setDemoSubmitted(false);
      setToastMsg(
        "Demo request received. A RevPulse Health specialist will reach out shortly.",
      );
    }, 1200);
  };

  const handleContactPageSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setToastMsg(
      "Your inquiry has been routed to our Healthcare Revenue Solutions team.",
    );
  };

  const activeHero = HERO_SLIDES[heroSlideIdx];
  const activePhare = PHARE_ACCORDION[activePhareIdx];
  const currentTestimonial = TESTIMONIALS[testimonialIdx];

  const searchableItems = [
    {
      label: "RevPulse Core Overview & Architecture",
      page: "phare-os",
      type: "Platform",
    },
    {
      label: "Pre-Bill: Prior Authorization",
      page: "sol-prior-auth",
      type: "Solutions",
    },
    {
      label: "Pre-Bill: Utilization Management",
      page: "sol-um",
      type: "Solutions",
    },
    {
      label: "Pre-Bill: CDI & Autonomous Coding",
      page: "sol-cdi",
      type: "Solutions",
    },
    {
      label: "Pre-Bill: Claim Scrubber & Compliance Audit",
      page: "sol-audit",
      type: "Solutions",
    },
    {
      label: "Post-Bill: AI Denial Management",
      page: "sol-denials",
      type: "Solutions",
    },
    {
      label: "Post-Bill: Underpayment & A/R Recovery",
      page: "sol-recovery",
      type: "Solutions",
    },
    {
      label: "RCM Consulting & Partnerships",
      page: "sol-consulting",
      type: "Advisory",
    },
    { label: "PulseAI Applied Lab", page: "r37", type: "Innovation" },
    { label: "About RevPulse Health", page: "comp-about", type: "Company" },
    {
      label: "Revenue Operating System Vision",
      page: "comp-vision",
      type: "Company",
    },
    {
      label: "HIPAA & HITRUST Trust Center",
      page: "comp-trust",
      type: "Security",
    },
    {
      label: "Careers at RevPulse Health",
      page: "comp-careers",
      type: "Careers",
    },
    {
      label: "Contact & Request a Free RCM Audit",
      page: "contact",
      type: "Contact",
    },
    ...NEWS_ITEMS.map((n) => ({
      label: n.title,
      page: "res-all",
      type: n.category,
      news: n,
    })),
  ].filter(
    (item) =>
      item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  const filteredNews =
    resourceFilter === "ALL"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((n) => n.category === resourceFilter);

  const visibleNewsCards = [0, 1, 2].map(
    (offset) => NEWS_ITEMS[(newsSlideIdx + offset) % NEWS_ITEMS.length],
  );

  const isResourcePage = currentPage.startsWith("res-");
  const activeResourceMeta =
    RESOURCES_MENU.find((r) => r.id === currentPage) || RESOURCES_MENU[0];

  return (
    <div className="min-h-screen bg-[#F4F4EE] text-[#111111] antialiased selection:bg-[#0052FF] selection:text-white font-sans-clean">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-editorial { font-family: 'Newsreader', Georgia, 'Times New Roman', serif; }
        .font-sans-clean { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .font-tech-mono { font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace; }
        @keyframes marqueeSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeSlide 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-page-enter {
          animation: fadeSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-lg bg-[#0B1315] px-4 py-3 text-sm font-medium text-white shadow-2xl border border-white/15 animate-page-enter">
          <CheckCircle2 className="h-4 w-4 text-[#0052FF] shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      {/* {showBanner && (
        <div className="relative z-40 bg-[#0052FF] text-white px-4 py-2.5 text-xs sm:text-sm">
          <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-3 pr-8 text-center">
            <span className="font-normal">
              RevPulse Health launches RevPulse Core 4.0 with six connected pre-bill and post-bill medical billing modules.
            </span>
            <button
              onClick={() => setDetailModal({ type: "news", item: NEWS_ITEMS[0] })}
              className="inline-flex items-center gap-1 font-tech-mono text-xs uppercase tracking-wider underline underline-offset-4 hover:opacity-80 shrink-0"
            >
              Read the news <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            aria-label="Dismiss announcement"
            onClick={() => setShowBanner(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/15 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )} */}

      {/* Shared Sticky Header */}
      <header
        className="sticky top-0 z-30 w-full bg- backdrop-blur-lg border-b border-white/10 px-4 sm:px-8 py-3.5 text-white"
        style={{ background: "black" }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <button
            onClick={() => navigateTo("home")}
            className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:opacity-90 transition font-editorial"
          >
            RevPulse Health
          </button>

          {/* Center Pill Nav */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 rounded-full bg-white/10 border border-white/15 px-3 py-1.5"
          >
            <button
              onClick={() => navigateTo("phare-os")}
              className={`px-3.5 py-1.5 font-tech-mono text-xs uppercase tracking-wider rounded-full transition ${
                currentPage === "phare-os"
                  ? "bg-[#0052FF] text-white"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              REVPULSE CORE
            </button>

            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "solutions" ? null : "solutions",
                  )
                }
                className={`inline-flex items-center gap-1 px-3.5 py-1.5 font-tech-mono text-xs uppercase tracking-wider rounded-full transition ${
                  currentPage.startsWith("sol-")
                    ? "bg-[#0052FF] text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                SOLUTIONS <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute left-0 top-full mt-3 w-[520px] rounded-2xl bg-[#0F1719] border border-white/15 p-6 shadow-2xl text-left z-50">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="font-tech-mono text-[11px] uppercase tracking-widest text-white/50 mb-3">
                        Pre-bill
                      </p>
                      <div className="space-y-2.5">
                        {SOLUTIONS_MENU.preBill.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => navigateTo(s.id)}
                            className="block w-full text-left group"
                          >
                            <div className="text-sm font-medium text-white group-hover:text-[#4D88FF] transition">
                              {s.name}
                            </div>
                            <div className="text-xs text-white/60 line-clamp-1">
                              {s.desc}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="font-tech-mono text-[11px] uppercase tracking-widest text-white/50 mb-3">
                          Post-bill
                        </p>
                        <div className="space-y-2.5">
                          {SOLUTIONS_MENU.postBill.map((s) => (
                            <button
                              key={s.id}
                              onClick={() => navigateTo(s.id)}
                              className="block w-full text-left group"
                            >
                              <div className="text-sm font-medium text-white group-hover:text-[#4D88FF] transition">
                                {s.name}
                              </div>
                              <div className="text-xs text-white/60 line-clamp-1">
                                {s.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          navigateTo(SOLUTIONS_MENU.partnerships.id)
                        }
                        className="mt-4 pt-4 border-t border-white/10 text-left group"
                      >
                        <div className="text-sm font-medium text-white group-hover:text-[#4D88FF] transition flex items-center gap-1">
                          {SOLUTIONS_MENU.partnerships.name}{" "}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                        <div className="text-xs text-white/60">
                          {SOLUTIONS_MENU.partnerships.desc}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => navigateTo("r37")}
              className={`px-3.5 py-1.5 font-tech-mono text-xs uppercase tracking-wider rounded-full transition ${
                currentPage === "r37"
                  ? "bg-[#0052FF] text-white"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              PULSEAI LAB
            </button>

            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "resources" ? null : "resources",
                  )
                }
                className={`inline-flex items-center gap-1 px-3.5 py-1.5 font-tech-mono text-xs uppercase tracking-wider rounded-full transition ${
                  isResourcePage
                    ? "bg-[#0052FF] text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                RESOURCES <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openDropdown === "resources" && (
                <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl bg-[#0F1719] border border-white/15 p-4 shadow-2xl text-left z-50 space-y-1">
                  {RESOURCES_MENU.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setResourceFilter(item.filter);
                        navigateTo(item.id);
                      }}
                      className="block w-full text-left px-3 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 rounded-lg transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === "company" ? null : "company")
                }
                className={`inline-flex items-center gap-1 px-3.5 py-1.5 font-tech-mono text-xs uppercase tracking-wider rounded-full transition ${
                  currentPage.startsWith("comp-")
                    ? "bg-[#0052FF] text-white"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                COMPANY <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {openDropdown === "company" && (
                <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl bg-[#0F1719] border border-white/15 p-4 shadow-2xl text-left z-50 space-y-1">
                  {COMPANY_MENU.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className="block w-full text-left px-3 py-2 text-sm text-white/85 hover:text-white hover:bg-white/10 rounded-lg transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => navigateTo("contact")}
              className={`hidden sm:inline-flex items-center justify-center rounded-md border px-4 py-2 font-tech-mono text-xs uppercase tracking-wider transition ${
                currentPage === "contact"
                  ? "bg-[#0052FF] border-[#0052FF] text-white"
                  : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
              }`}
            >
              CONTACT
            </button>
            <button
              aria-label="Search site"
              onClick={() => setSearchModalOpen(true)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================== RICH DEDICATED PAGES FOR EVERY DROPDOWN LINK (SOLUTIONS & COMPANY) ==================== */}
      {DROPDOWN_PAGES[currentPage] &&
        (() => {
          const dp = DROPDOWN_PAGES[currentPage];
          const isSol = currentPage.startsWith("sol-");
          const navGroup = isSol
            ? [
                ...SOLUTIONS_MENU.preBill,
                ...SOLUTIONS_MENU.postBill,
                SOLUTIONS_MENU.partnerships,
              ]
            : COMPANY_MENU.map((c) => ({ id: c.id, name: c.label }));

          return (
            <main
              key={currentPage}
              className="animate-page-enter bg-[#F4F4EE] py-20 px-4 sm:px-8"
            >
              <div className="max-w-[1400px] mx-auto">
                {/* Sub-pill switcher */}
                <div className="flex flex-wrap gap-2 mb-12">
                  {navGroup.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className={`px-4 py-2 rounded-full font-tech-mono text-xs uppercase tracking-wider transition ${
                        currentPage === item.id
                          ? "bg-[#0052FF] text-white"
                          : "bg-[#EBEAE3] text-[#111111] hover:bg-[#DFDDD3]"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
                  <div className="lg:col-span-7">
                    <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
                      <span className="inline-block h-2.5 w-2.5 bg-[#0052FF]" />{" "}
                      {dp.eyebrow}
                    </span>
                    <h1 className="text-4xl sm:text-6xl font-normal leading-[1.08] mb-6 font-editorial text-[#111111]">
                      {dp.title}
                    </h1>
                    <p className="text-lg text-[#111111]/80 leading-relaxed mb-8 max-w-2xl">
                      {dp.lead}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => setDemoModalOpen(true)}
                        className="inline-flex items-center gap-2 rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-6 py-3.5 font-tech-mono text-xs uppercase tracking-wider text-white transition shadow-lg shadow-[#0052FF]/20"
                      >
                        REQUEST A DEMO <ArrowRight className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => navigateTo("contact")}
                        className="inline-flex items-center gap-2 rounded-md bg-[#EBEAE3] hover:bg-[#DFDDD3] border border-[#111111]/15 px-6 py-3.5 font-tech-mono text-xs uppercase tracking-wider text-[#111111] transition"
                      >
                        SCHEDULE 48-HR AUDIT
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden border border-[#111111]/10 shadow-md bg-[#0B1315]">
                      <img
                        src={dp.image}
                        alt={dp.imageAlt}
                        className="w-full h-72 object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* 3-Metric Bar */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                  {dp.stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-xl bg-[#EBEAE3] border border-[#111111]/8 p-7 flex flex-col justify-between min-h-[144px]"
                    >
                      <div className="text-4xl sm:text-5xl font-normal tracking-tight text-[#111111] font-editorial">
                        {st.value}
                      </div>
                      <div className="text-sm text-[#111111]/75 mt-4">
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3-Pillar Architecture List */}
                <div className="mb-16">
                  <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
                    <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />{" "}
                    HOW IT WORKS
                  </span>
                  <div className="divide-y divide-[#111111]/12 border-t border-b border-[#111111]/12">
                    {dp.pillars.map((p) => (
                      <div
                        key={p.num}
                        className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline"
                      >
                        <div className="lg:col-span-1 font-tech-mono text-xs text-[#0052FF] font-semibold">
                          {p.num}
                        </div>
                        <div className="lg:col-span-5 text-2xl sm:text-3xl font-normal text-[#111111] font-editorial">
                          {p.title}
                        </div>
                        <div className="lg:col-span-6 text-base text-[#111111]/75 leading-relaxed">
                          {p.body}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expanded Section: Key Deliverables & Capabilities Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                  <div className="lg:col-span-6 rounded-2xl bg-[#EBEAE3] border border-[#111111]/10 p-8 sm:p-10">
                    <span className="font-tech-mono text-xs uppercase tracking-widest text-[#0052FF]">
                      INCLUDED CAPABILITIES
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-normal mt-2 mb-6 font-editorial">
                      Core Deliverables &amp; Workflow Features
                    </h2>
                    <ul className="space-y-4">
                      {dp.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm sm:text-base text-[#111111]/85"
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#0052FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benchmark Comparison Card */}
                  <div className="lg:col-span-6 rounded-2xl bg-[#0B1315] text-white p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                        PERFORMANCE BENCHMARK
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-normal mt-2 mb-6 font-editorial">
                        Legacy Workflow vs. RevPulse Health
                      </h2>
                      <div className="divide-y divide-white/12 border-t border-b border-white/12">
                        {dp.comparison.map((row) => (
                          <div key={row.metric} className="py-4">
                            <div className="font-tech-mono text-xs uppercase tracking-wider text-white/60 mb-1.5">
                              {row.metric}
                            </div>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div className="text-white/55 line-through">
                                {row.legacy}
                              </div>
                              <div className="text-[#4D88FF] font-semibold">
                                {row.revpulse}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-8 pt-4 flex items-center justify-between">
                      <span className="text-xs text-white/60">
                        HIPAA &amp; SOC 2 Type II Certified
                      </span>
                      <button
                        onClick={() => navigateTo("contact")}
                        className="inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider text-white hover:text-[#4D88FF]"
                      >
                        Get custom ROI projection{" "}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Frequently Asked Questions for this specific page */}
                {dp.faqs && dp.faqs.length > 0 && (
                  <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/10 p-8 sm:p-10">
                    <span className="font-tech-mono text-xs uppercase tracking-widest text-[#111111]/65">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-normal mt-2 mb-6 font-editorial">
                      Implementation &amp; Compliance Details
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {dp.faqs.map((faq) => (
                        <div
                          key={faq.q}
                          className="rounded-xl bg-[#F4F4EE] p-6 border border-[#111111]/8"
                        >
                          <h3 className="text-lg font-semibold text-[#111111] mb-2">
                            {faq.q}
                          </h3>
                          <p className="text-sm text-[#111111]/75 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </main>
          );
        })()}

      {/* ==================== PAGE: HOME ==================== */}
      {currentPage === "home" && (
        <main className="animate-page-enter">
          {/* Full-Bleed Hero Image + Content Slider */}
          <section className="relative flex flex-col justify-end overflow-hidden bg-[#0B1315] text-white text-center">
            {HERO_SLIDES.map((slide, idx) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === heroSlideIdx
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`h-full w-full object-cover object-center transition-transform duration-[12000ms] ease-out ${
                    idx === heroSlideIdx && heroPlaying
                      ? "scale-105"
                      : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1315]/55 via-[#0B1315]/50 to-" />
              </div>
            ))}

            <div className="relative z-20 max-w-[1000px] w-full mx-auto px-4 sm:px-8 pb-20 pt-20">
              <div key={activeHero.id} className="animate-page-enter">
                <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF] mb-4 bg-[#0B1315]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#0052FF]" />
                  {activeHero.tag}
                </span>

                <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-normal leading-[1.05] tracking-tight text-white mb-5 font-editorial">
                  {activeHero.title}
                </h1>

                <p className="text-base sm:text-xl text-white/80 mb-9 leading-relaxed">
                  {activeHero.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="block justify-between text-center">
                  <button
                    onClick={() => navigateTo(activeHero.targetPage)}
                    className="inline-flex items-center gap-2 rounded-md bg-white/18 hover:bg-white/28 backdrop-blur-md border border-white/20 px-5 py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition mr-5"
                  >
                    {activeHero.ctaPrimary}
                  </button>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center gap-2 rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-5 py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition shadow-lg shadow-[#0052FF]/25 ml-5"
                  >
                    REQUEST A DEMO <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {/* Hero Slider Controls */}
              <div
                className="flex items-center gap-3 bg-[#0B1315]/65 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-2"
                style={{ width: "fit-content; margin:auto; margin-top:40px;" }}
              >
                <button
                  aria-label="Previous hero slide"
                  onClick={() => {
                    setHeroPlaying(false);
                    setHeroSlideIdx(
                      (p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
                    );
                  }}
                  className="p-1.5 rounded-full hover:bg-white/15 transition"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      aria-label={`Go to slide ${idx + 1}`}
                      onClick={() => {
                        setHeroPlaying(false);
                        setHeroSlideIdx(idx);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === heroSlideIdx
                          ? "w-8 bg-[#0052FF]"
                          : "w-2 bg-white/35 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
                <button
                  aria-label="Next hero slide"
                  onClick={() => {
                    setHeroPlaying(false);
                    setHeroSlideIdx((p) => (p + 1) % HERO_SLIDES.length);
                  }}
                  className="p-1.5 rounded-full hover:bg-white/15 transition"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <span className="h-4 w-px bg-white/20 mx-0.5" />
                <button
                  aria-label={
                    heroPlaying ? "Pause hero slider" : "Play hero slider"
                  }
                  onClick={() => setHeroPlaying(!heroPlaying)}
                  className="p-1.5 rounded-full hover:bg-white/15 transition"
                >
                  {heroPlaying ? (
                    <Pause className="h-3.5 w-3.5" />
                  ) : (
                    <Play className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </section>

          {/* Who We Are + Marquee Logo Slider + Testimonial Carousel */}
          <section
            id="who-we-are"
            className="bg-[#F4F4EE] py-20 sm:py-28 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto">
              <Reveal>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
                  <div className="lg:col-span-3">
                    <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75">
                      <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />
                      WHO WE ARE
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <p className="text-2xl sm:text-4xl leading-[1.26] text-[#111111] font-normal font-editorial">
                      RevPulse Health has spent more than two decades working
                      alongside health system revenue cycle teams, learning from
                      every claim, denial and payer decision. Today, 140+ health
                      systems and specialty groups rely on RevPulse Health to
                      get paid right the first time.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Smooth Infinite Client Logo Slider */}
              <div className="overflow-hidden mb-10 py-2">
                <div className="animate-marquee gap-4">
                  {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                    <div
                      key={`${client.name}-${idx}`}
                      className="flex flex-col items-center justify-center h-24 w-64 shrink-0 rounded-xl bg-[#EBEAE3] border border-[#111111]/8 px-6 hover:border-[#0052FF]/40 transition"
                    >
                      <span className="text-lg font-semibold tracking-tight text-[#111111]/85 font-editorial">
                        {client.name}
                      </span>
                      <span className="font-tech-mono text-[10px] uppercase tracking-widest text-[#111111]/45 mt-1">
                        {client.region}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Carousel Card */}
              <Reveal delay={100}>
                <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/8 p-8 sm:p-12 lg:p-14">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-8">
                      <blockquote
                        key={testimonialIdx}
                        className="text-xl sm:text-3xl leading-[1.34] text-[#111111] font-normal mb-8 font-editorial animate-page-enter"
                      >
                        &ldquo;{currentTestimonial.quote}&rdquo;
                      </blockquote>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          aria-label="Previous testimonial"
                          onClick={() => {
                            setTestimonialAuto(false);
                            setTestimonialIdx(
                              (prev) =>
                                (prev - 1 + TESTIMONIALS.length) %
                                TESTIMONIALS.length,
                            );
                          }}
                          className="h-9 w-9 rounded-full border border-[#111111]/20 bg-white/70 hover:bg-white flex items-center justify-center transition"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                          aria-label="Next testimonial"
                          onClick={() => {
                            setTestimonialAuto(false);
                            setTestimonialIdx(
                              (prev) => (prev + 1) % TESTIMONIALS.length,
                            );
                          }}
                          className="h-9 w-9 rounded-full border border-[#111111]/20 bg-white/70 hover:bg-white flex items-center justify-center transition"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                        <span className="font-tech-mono text-xs text-[#111111]/70 ml-1">
                          {testimonialIdx + 1} / {TESTIMONIALS.length}
                        </span>
                        <div className="flex items-center gap-1.5 ml-3">
                          {TESTIMONIALS.map((_, i) => (
                            <button
                              key={i}
                              aria-label={`Slide ${i + 1}`}
                              onClick={() => {
                                setTestimonialAuto(false);
                                setTestimonialIdx(i);
                              }}
                              className={`h-1.5 rounded-full transition-all ${
                                i === testimonialIdx
                                  ? "w-6 bg-[#0052FF]"
                                  : "w-2 bg-[#111111]/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 lg:border-l lg:border-[#111111]/12 lg:pl-10 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block font-tech-mono text-[10px] uppercase tracking-widest text-[#0052FF] bg-[#0052FF]/10 px-2.5 py-1 rounded">
                          {currentTestimonial.orgSub}
                        </span>
                        <div className="text-2xl font-bold text-[#111111] mt-2 font-editorial">
                          {currentTestimonial.org}
                        </div>
                      </div>
                      <div className="text-base font-semibold text-[#111111]">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-sm text-[#111111]/70">
                        {currentTestimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* 4-Stat Metrics Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {METRICS.map((m, idx) => (
                  <Reveal key={m.label} delay={idx * 75}>
                    <div className="rounded-xl bg-[#EBEAE3] border border-[#111111]/8 p-7 flex flex-col justify-between min-h-[156px] hover:-translate-y-1 transition-transform">
                      <div className="text-4xl sm:text-5xl font-normal tracking-tight text-[#111111] font-editorial">
                        {m.value}
                      </div>
                      <div className="text-sm text-[#111111]/75 mt-4">
                        {m.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* RevPulse Core Interactive Dark Section + Visual Module Slider */}
          <section
            id="phare-os"
            className="bg-[#0B1315] text-white py-24 sm:py-32 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto">
              <Reveal>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/12">
                  <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-white/70 mb-5">
                      <span className="inline-block h-2.5 w-2.5 bg-[#0052FF]" />
                      INTRODUCING
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.08] tracking-tight font-editorial">
                      RevPulse Core: Healthcare Revenue Intelligence. Built for
                      zero claim leakage.
                    </h2>
                  </div>
                  <div>
                    <button
                      onClick={() => navigateTo("phare-os")}
                      className="inline-flex items-center gap-2 rounded-full bg-white text-[#0B1315] hover:bg-white/90 px-6 py-3 font-tech-mono text-xs uppercase tracking-wider font-medium transition"
                    >
                      <ArrowRight className="h-4 w-4" /> EXPLORE REVPULSE CORE
                    </button>
                  </div>
                </div>
              </Reveal>

              {/* Visual Image + Content Module Slider right inside Home */}
              <Reveal delay={80}>
                <div className="rounded-2xl bg-[#111C1F] border border-white/15 overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[360px] overflow-hidden">
                    <img
                      key={PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                      src={PHARE_MODULES_SLIDER[moduleSlideIdx].image}
                      alt={PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                      className="h-full w-full object-cover animate-page-enter"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/85 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                      <span className="font-tech-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0052FF] text-white">
                        {PHARE_MODULES_SLIDER[moduleSlideIdx].stage} •{" "}
                        {PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                      </span>
                      <span className="font-tech-mono text-xs text-white/80">
                        {moduleSlideIdx + 1} / {PHARE_MODULES_SLIDER.length}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                          CONNECTED MODULE SHOWCASE
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            aria-label="Previous module"
                            onClick={() =>
                              setModuleSlideIdx(
                                (p) =>
                                  (p - 1 + PHARE_MODULES_SLIDER.length) %
                                  PHARE_MODULES_SLIDER.length,
                              )
                            }
                            className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            aria-label="Next module"
                            onClick={() =>
                              setModuleSlideIdx(
                                (p) => (p + 1) % PHARE_MODULES_SLIDER.length,
                              )
                            }
                            className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-4xl font-normal mb-3 font-editorial">
                        {PHARE_MODULES_SLIDER[moduleSlideIdx].headline}
                      </h3>
                      <p className="text-white/75 text-base leading-relaxed mb-6">
                        {PHARE_MODULES_SLIDER[moduleSlideIdx].desc}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-lg bg-[#0B1315] border border-white/10 px-4 py-2.5 font-tech-mono text-xs text-[#4D88FF]">
                          <CheckCircle2 className="h-4 w-4" />
                          {PHARE_MODULES_SLIDER[moduleSlideIdx].impact}
                        </div>
                        <button
                          onClick={() =>
                            navigateTo(
                              PHARE_MODULES_SLIDER[moduleSlideIdx].route,
                            )
                          }
                          className="inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider text-white hover:text-[#4D88FF]"
                        >
                          Learn more <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                      {PHARE_MODULES_SLIDER.map((m, idx) => (
                        <button
                          key={m.name}
                          onClick={() => setModuleSlideIdx(idx)}
                          className={`px-3 py-1.5 rounded-full font-tech-mono text-[11px] transition ${
                            idx === moduleSlideIdx
                              ? "bg-[#0052FF] text-white"
                              : "bg-white/5 text-white/65 hover:bg-white/15"
                          }`}
                        >
                          {m.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 divide-y divide-white/12 border-t border-b border-white/12">
                  {PHARE_ACCORDION.map((item, idx) => {
                    const isOpen = idx === activePhareIdx;
                    return (
                      <div key={item.id} className="py-5">
                        <button
                          onClick={() => setActivePhareIdx(idx)}
                          className="w-full flex items-center justify-between text-left gap-4 group"
                        >
                          <div>
                            <span className="block font-tech-mono text-[11px] uppercase tracking-widest text-[#4D88FF] mb-1">
                              {item.tag}
                            </span>
                            <span
                              className={`text-xl sm:text-2xl font-normal transition font-editorial ${
                                isOpen
                                  ? "text-white"
                                  : "text-white/60 group-hover:text-white/90"
                              }`}
                            >
                              {item.title}
                            </span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 shrink-0 text-white/60 transition-transform ${
                              isOpen ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/75 animate-page-enter">
                            {item.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right Column: Interactive Architecture */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-[#111C1F] border border-white/12 p-6 sm:p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-tech-mono text-xs uppercase tracking-widest text-white/60">
                        REVPULSE CORE ARCHITECTURE
                      </span>
                      <span className="font-tech-mono text-xs text-[#4D88FF] bg-[#0052FF]/15 px-3 py-1 rounded-full border border-[#0052FF]/30">
                        {activePhare.tag}
                      </span>
                    </div>

                    <div
                      className={`rounded-xl p-4 mb-4 border transition-all ${
                        activePhare.highlight === "command" ||
                        activePhare.highlight === "all"
                          ? "bg-[#0052FF]/20 border-[#0052FF]"
                          : "bg-white/5 border-white/10 opacity-65"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Activity className="h-4 w-4 text-[#4D88FF]" />
                          <span className="font-tech-mono text-xs uppercase tracking-wider font-semibold">
                            RevPulse Command Center
                          </span>
                        </div>
                        <span className="text-xs text-white/65">
                          Live Performance &amp; Resource Steering
                        </span>
                      </div>
                    </div>

                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 transition-all ${
                        activePhare.highlight === "modules" ||
                        activePhare.highlight === "all"
                          ? "opacity-100"
                          : "opacity-75"
                      }`}
                    >
                      <div className="rounded-xl p-4 border bg-white/8 border-white/20">
                        <div className="font-tech-mono text-[11px] uppercase tracking-widest text-[#4D88FF] mb-3">
                          Pre-Bill Modules
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {SOLUTIONS_MENU.preBill.map((mod) => (
                            <button
                              key={mod.id}
                              onClick={() => navigateTo(mod.id)}
                              className="text-left rounded-lg bg-[#0B1315]/80 hover:bg-[#0052FF]/25 border border-white/10 hover:border-[#0052FF]/60 px-3 py-2 text-xs font-medium text-white transition"
                            >
                              {mod.name}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl p-4 border bg-white/8 border-white/20">
                        <div className="font-tech-mono text-[11px] uppercase tracking-widest text-[#4D88FF] mb-3">
                          Post-Bill Modules
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {SOLUTIONS_MENU.postBill.map((mod) => (
                            <button
                              key={mod.id}
                              onClick={() => navigateTo(mod.id)}
                              className="text-left rounded-lg bg-[#0B1315]/80 hover:bg-[#0052FF]/25 border border-white/10 hover:border-[#0052FF]/60 px-3 py-2 text-xs font-medium text-white transition"
                            >
                              {mod.name}
                            </button>
                          ))}
                        </div>
                        <div className="mt-3 text-[11px] text-white/55">
                          6 connected modules • Real-time adjudication workflow
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        {
                          id: "data",
                          icon: Database,
                          title: "Unified Data Vault",
                          sub: "Unified clinical, financial & operational context",
                        },
                        {
                          id: "atlas",
                          icon: Layers,
                          title: "Payer Matrix",
                          sub: "Published rules & observed payer behavior",
                        },
                        {
                          id: "intelligence",
                          icon: Cpu,
                          title: "PulseAI Engine",
                          sub: "Purpose-built RCM clinical reasoning AI",
                        },
                      ].map((f) => {
                        const Icon = f.icon;
                        const highlighted =
                          activePhare.highlight === "all" ||
                          activePhare.highlight === "foundations" ||
                          activePhare.highlight === f.id;
                        return (
                          <div
                            key={f.id}
                            className={`rounded-xl p-4 border transition-all ${
                              highlighted
                                ? "bg-[#0052FF]/15 border-[#0052FF]/80"
                                : "bg-white/5 border-white/10 opacity-55"
                            }`}
                          >
                            <Icon className="h-4 w-4 text-[#4D88FF] mb-2" />
                            <div className="text-sm font-medium text-white">
                              {f.title}
                            </div>
                            <div className="text-xs text-white/65 mt-1 leading-snug">
                              {f.sub}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Beliefs */}
          <section
            id="our-beliefs"
            className="bg-[#F4F4EE] py-20 sm:py-28 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto">
              <Reveal>
                <div className="max-w-3xl mb-14">
                  <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
                    <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />
                    OUR BELIEFS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-normal leading-[1.14] text-[#111111] font-editorial">
                    We&apos;re creating a new era in medical billing and revenue
                    cycle management driven by three core beliefs.
                  </h2>
                </div>
              </Reveal>

              <div className="divide-y divide-[#111111]/12 border-t border-b border-[#111111]/12 mb-10">
                {BELIEFS.map((b, i) => (
                  <Reveal key={b.num} delay={i * 80}>
                    <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline">
                      <div className="lg:col-span-1 font-tech-mono text-xs text-[#111111]/50">
                        {b.num}
                      </div>
                      <div className="lg:col-span-5 text-2xl sm:text-3xl font-normal text-[#111111] font-editorial">
                        {b.title}
                      </div>
                      <div className="lg:col-span-6 text-base text-[#111111]/75 leading-relaxed">
                        {b.body}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <button
                onClick={() => navigateTo("sol-consulting")}
                className="inline-flex items-center gap-2 rounded-full bg-[#EBEAE3] hover:bg-[#DFDDD3] border border-[#111111]/12 px-6 py-3 font-tech-mono text-xs uppercase tracking-wider text-[#111111] transition"
              >
                <ArrowRight className="h-4 w-4" /> EXPLORE OUR CONSULTING &amp;
                PARTNERSHIP MODELS
              </button>
            </div>
          </section>

          {/* PulseAI Lab Section */}
          <section
            id="r37-lab"
            className="bg-[#F4F4EE] pb-20 sm:pb-28 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
                    <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />
                    REVPULSE HEALTH&apos;S AI LAB
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-normal leading-[1.14] text-[#111111] font-editorial">
                    PulseAI Lab is building technology that&apos;s transforming
                    the unit economics of healthcare.
                  </h2>
                </div>
              </Reveal>

              <div className="relative rounded-2xl overflow-hidden h-[280px] sm:h-[380px] mb-12 bg-[#0B1315] group">
                <img
                  src={R37_IMG}
                  alt="PulseAI Lab architectural neural visualization"
                  className="h-full w-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl sm:text-8xl font-bold tracking-tighter text-white font-editorial">
                      PulseAI
                    </div>
                    <div className="font-tech-mono text-xs uppercase tracking-[0.25em] text-white/75 mt-2">
                      APPLIED RCM LAB
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#111111] font-editorial">
                    An innovation engine
                  </h3>
                </div>
                <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-[#111111]/80 leading-relaxed">
                  <p>
                    PulseAI Lab is RevPulse Health&apos;s applied AI lab to
                    transform healthcare financial performance. Our dedicated
                    team of technologists, AAPC-certified coders, and revenue
                    cycle experts build and scale AI solutions aimed at
                    achieving comprehensive pre-bill accuracy and real-time
                    adjudication.
                  </p>
                  <p>
                    We deploy clinical reasoning, coding, and payer policy
                    models as part of an integrated system that allocates
                    routine work to autonomous agents and complex appeals to
                    specialists—resulting in increased revenue, reduced
                    cost-to-collect, and faster cash velocity.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => navigateTo("r37")}
                      className="inline-flex items-center gap-2 rounded-md bg-[#111111] hover:bg-[#2a2a2a] px-6 py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition"
                    >
                      OUR TECHNOLOGY <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Center */}
          <section
            id="trust-center"
            className="bg-[#F4F4EE] pb-20 sm:pb-24 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto border-t border-[#111111]/12 pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
                    <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />
                    OUR COMMITMENT TO EXCELLENCE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-normal leading-[1.2] text-[#111111] mb-7 font-editorial">
                    As AI reshapes healthcare operations, the way we protect
                    data matters more than ever. RevPulse Health is committed to
                    HIPAA security, compliance and transparency.
                  </h2>
                  <button
                    onClick={() => navigateTo("comp-trust")}
                    className="inline-flex items-center gap-2 rounded-md bg-[#111111] hover:bg-[#2a2a2a] px-5 py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition"
                  >
                    <ArrowUpRight className="h-4 w-4" /> VISIT OUR TRUST CENTER
                  </button>
                </div>

                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/8 p-8 flex flex-col items-center justify-center text-center min-h-[190px]">
                    <div className="h-14 w-14 rounded-full bg-[#0052FF]/12 flex items-center justify-center mb-3">
                      <ShieldCheck className="h-7 w-7 text-[#0052FF]" />
                    </div>
                    <div className="font-tech-mono text-sm font-bold tracking-wider text-[#111111]">
                      AICPA SOC
                    </div>
                    <div className="text-xs text-[#111111]/65 mt-1">
                      SOC 2 Type II Attested
                    </div>
                  </div>

                  <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/8 p-8 flex flex-col items-center justify-center text-center min-h-[190px]">
                    <div className="h-14 w-14 rounded-full bg-[#0052FF]/12 flex items-center justify-center mb-3">
                      <Lock className="h-7 w-7 text-[#0052FF]" />
                    </div>
                    <div className="font-tech-mono text-sm font-bold tracking-wider text-[#111111]">
                      HITRUST CSF
                    </div>
                    <div className="text-xs text-[#111111]/65 mt-1">
                      CSF &amp; HIPAA Certified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry Recognition */}
          <section
            id="klas-awards"
            className="bg-[#F4F4EE] pb-20 sm:pb-28 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/8 p-8 sm:p-12 lg:p-14">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <h2 className="text-2xl sm:text-4xl font-normal text-[#111111] mb-8 font-editorial">
                      RevPulse Health recognized across healthcare finance
                      categories for 2026
                    </h2>
                    <div className="flex flex-wrap gap-4">
                      {KLAS_AWARDS.map((award) => (
                        <div
                          key={award.title}
                          className="flex flex-col items-center justify-center text-center h-36 w-36 rounded-full bg-[#0B1315] text-white p-4 border-2 border-[#0052FF]/60 shadow-md hover:scale-105 transition-transform"
                        >
                          <Award className="h-5 w-5 text-[#4D88FF] mb-1" />
                          <span className="font-tech-mono text-[10px] uppercase tracking-widest text-[#4D88FF]">
                            {award.year} {award.rank}
                          </span>
                          <span className="text-[11px] font-medium leading-tight mt-1">
                            {award.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-5 lg:border-l lg:border-[#111111]/12 lg:pl-10">
                    <h3 className="text-2xl font-normal text-[#111111] mb-3 font-editorial">
                      Proven Financial Impact
                    </h3>
                    <p className="text-sm sm:text-base text-[#111111]/75 leading-relaxed mb-6">
                      We&apos;re proud to be recognized across healthcare
                      revenue cycle management, reflecting our continued
                      commitment to delivering measurable cash-flow lift by
                      combining deep domain consulting with innovative medical
                      billing SaaS.
                    </p>
                    <button
                      onClick={() => navigateTo("res-all")}
                      className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-white/80 border border-[#111111]/15 px-5 py-2.5 font-tech-mono text-xs uppercase tracking-wider text-[#111111] transition"
                    >
                      <ArrowRight className="h-4 w-4" /> READ THE NEWS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Demo CTA Banner */}
          <section
            id="demo-cta"
            className="bg-[#F4F4EE] pb-20 sm:pb-28 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <h2 className="text-3xl sm:text-5xl font-normal leading-[1.14] text-[#111111] mb-5 font-editorial">
                  As revenue cycle challenges evolve, your partner should too
                </h2>
                <p className="text-base sm:text-lg text-[#111111]/75 mb-8 max-w-xl">
                  We invite you to see for yourself what&apos;s possible when
                  revenue cycle consulting expertise meets AI-powered medical
                  billing SaaS.
                </p>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-6 py-3.5 font-tech-mono text-xs uppercase tracking-wider text-white transition shadow-lg shadow-[#0052FF]/20"
                >
                  <ArrowRight className="h-4 w-4" /> REQUEST A DEMO
                </button>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-[#111111]/10 shadow-sm">
                  <img
                    src={DEMO_IMG}
                    alt="Healthcare finance executive having a discussion with a colleague at a laptop"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Latest News Image Card Slider */}
          <section
            id="latest-news"
            className="bg-[#F4F4EE] pb-24 sm:pb-32 px-4 sm:px-8"
          >
            <div className="max-w-[1400px] mx-auto border-t border-[#111111]/12 pt-16">
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                  <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-3">
                    <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />
                    NEWS &amp; INSIGHTS
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-normal text-[#111111] font-editorial">
                    The latest from RevPulse Health
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    aria-label="Previous news"
                    onClick={() =>
                      setNewsSlideIdx(
                        (p) => (p - 1 + NEWS_ITEMS.length) % NEWS_ITEMS.length,
                      )
                    }
                    className="h-10 w-10 rounded-full border border-[#111111]/20 bg-white hover:bg-[#EBEAE3] flex items-center justify-center transition"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next news"
                    onClick={() =>
                      setNewsSlideIdx((p) => (p + 1) % NEWS_ITEMS.length)
                    }
                    className="h-10 w-10 rounded-full border border-[#111111]/20 bg-white hover:bg-[#EBEAE3] flex items-center justify-center transition"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => navigateTo("res-all")}
                    className="ml-2 inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider text-[#0052FF] hover:underline"
                  >
                    View all <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleNewsCards.map((news) => (
                  <button
                    key={news.id}
                    onClick={() => setDetailModal({ type: "news", item: news })}
                    className="group text-left rounded-2xl bg-[#EBEAE3] border border-[#111111]/8 overflow-hidden hover:border-[#111111]/25 hover:-translate-y-1 transition-all flex flex-col animate-page-enter"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-[#0B1315]">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/85 via-[#0B1315]/25 to-transparent" />
                      <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                        <span className="font-tech-mono text-[10px] uppercase tracking-widest bg-[#0052FF] px-2.5 py-1 rounded">
                          {news.category}
                        </span>
                        <span className="font-tech-mono text-xs text-white/80">
                          {news.date}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-normal leading-snug text-[#111111] group-hover:text-[#0052FF] transition font-editorial mb-2">
                          {news.title}
                        </h3>
                        <p className="text-sm text-[#111111]/70 line-clamp-2">
                          {news.summary}
                        </p>
                      </div>
                      <div className="mt-5 inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider text-[#111111]/80 group-hover:text-[#0052FF]">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}

      {/* ==================== PAGE: REVPULSE CORE (RICH EXPANDED CONTENT) ==================== */}
      {currentPage === "phare-os" && (
        <main className="animate-page-enter bg-[#0B1315] text-white py-20 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF] mb-4">
              <span className="inline-block h-2.5 w-2.5 bg-[#0052FF]" />{" "}
              REVPULSE CORE PLATFORM
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal leading-[1.08] max-w-4xl mb-6 font-editorial">
              RevPulse Core: Healthcare Revenue Intelligence. Built for zero
              claim leakage.
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mb-12">
              Six connected pre-bill and post-bill modules powered by Unified
              Data Vault, Payer Matrix, and PulseAI Engine—turning visibility
              into real-time financial control.
            </p>

            {/* 6-Module Visual Image + Content Slider */}
            <div className="rounded-2xl bg-[#111C1F] border border-white/15 overflow-hidden mb-16 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[300px]">
                <img
                  key={PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                  src={PHARE_MODULES_SLIDER[moduleSlideIdx].image}
                  alt={PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                  className="h-full w-full object-cover animate-page-enter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="font-tech-mono text-[11px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#0052FF] text-white">
                    {PHARE_MODULES_SLIDER[moduleSlideIdx].stage}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                        CONNECTED MODULES SLIDER ({moduleSlideIdx + 1} /{" "}
                        {PHARE_MODULES_SLIDER.length})
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-normal mt-1 font-editorial">
                        {PHARE_MODULES_SLIDER[moduleSlideIdx].name}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        aria-label="Previous module"
                        onClick={() =>
                          setModuleSlideIdx(
                            (p) =>
                              (p - 1 + PHARE_MODULES_SLIDER.length) %
                              PHARE_MODULES_SLIDER.length,
                          )
                        }
                        className="h-10 w-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        aria-label="Next module"
                        onClick={() =>
                          setModuleSlideIdx(
                            (p) => (p + 1) % PHARE_MODULES_SLIDER.length,
                          )
                        }
                        className="h-10 w-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-normal font-editorial mb-4">
                    {PHARE_MODULES_SLIDER[moduleSlideIdx].headline}
                  </h3>
                  <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-6">
                    {PHARE_MODULES_SLIDER[moduleSlideIdx].desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#0B1315] border border-white/10 px-4 py-2.5 font-tech-mono text-xs text-[#4D88FF]">
                      <CheckCircle2 className="h-4 w-4" />
                      {PHARE_MODULES_SLIDER[moduleSlideIdx].impact}
                    </div>
                    <button
                      onClick={() =>
                        navigateTo(PHARE_MODULES_SLIDER[moduleSlideIdx].route)
                      }
                      className="inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider text-white hover:text-[#4D88FF]"
                    >
                      Open module details <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                  {PHARE_MODULES_SLIDER.map((m, idx) => (
                    <button
                      key={m.name}
                      onClick={() => setModuleSlideIdx(idx)}
                      className={`px-3.5 py-1.5 rounded-full font-tech-mono text-xs transition ${
                        idx === moduleSlideIdx
                          ? "bg-[#0052FF] text-white"
                          : "bg-white/5 text-white/65 hover:bg-white/15"
                      }`}
                    >
                      {m.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Expanded Three-Layer Foundation Cards & EHR Interoperability Matrix */}
            <div className="mb-16">
              <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                CORE SYSTEM LAYERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal mt-2 mb-8 font-editorial">
                Three foundational engines powering every claim
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    tag: "LAYER 01",
                    title: "Unified Health Data Vault",
                    desc: "Ingests HL7 v2, FHIR R4, and X12 837/835/270/271 streams in real time, harmonizing EHR clinical notes with payer remittance histories into one clean patient financial graph.",
                  },
                  {
                    icon: Layers,
                    tag: "LAYER 02",
                    title: "Payer Matrix Encyclopedia",
                    desc: "Tracks 18,400+ commercial, Medicare Advantage, and Medicaid coverage policies, LCD/NCD guidelines, and NCCI edits—updated weekly by our payer intelligence analysts.",
                  },
                  {
                    icon: Cpu,
                    tag: "LAYER 03",
                    title: "PulseAI Clinical Reasoning",
                    desc: "Domain-specialized medical coding and denial prevention models trained to verify DRG/CPT specificity and assemble chart-cited appeal packets in under 60 seconds.",
                  },
                ].map((layer) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.title}
                      className="rounded-2xl bg-[#111C1F] border border-white/12 p-8"
                    >
                      <Icon className="h-6 w-6 text-[#4D88FF] mb-4" />
                      <div className="font-tech-mono text-[11px] uppercase tracking-widest text-white/50 mb-1">
                        {layer.tag}
                      </div>
                      <h3 className="text-2xl font-normal font-editorial mb-3">
                        {layer.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {layer.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* EHR & Clearinghouse Ecosystem Strip */}
            <div className="rounded-2xl bg-[#111C1F] border border-white/15 p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                  TURNKEY INTEROPERABILITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal mt-1 mb-2 font-editorial">
                  Native connectors for leading EHRs &amp; clearinghouses
                </h3>
                <p className="text-sm text-white/70 max-w-2xl">
                  Deploy RevPulse Core alongside Epic, Oracle Health,
                  Athenahealth, eClinicalWorks, NextGen, Meditech, Availity, and
                  Waystar in under 4 weeks.
                </p>
              </div>
              <button
                onClick={() => setDemoModalOpen(true)}
                className="shrink-0 inline-flex items-center gap-2 rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-6 py-3.5 font-tech-mono text-xs uppercase tracking-wider text-white transition"
              >
                SCHEDULE TECHNICAL DEMO <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ==================== PAGE: PULSEAI LAB (RICH EXPANDED CONTENT) ==================== */}
      {currentPage === "r37" && (
        <main className="animate-page-enter bg-[#0B1315] text-white py-20 px-4 sm:px-8">
          <div className="max-w-[1400px] mx-auto">
            <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF] mb-4">
              <span className="inline-block h-2.5 w-2.5 bg-[#0052FF]" /> PULSEAI
              APPLIED LAB
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal leading-[1.08] max-w-4xl mb-6 font-editorial">
              Redefining the frontiers of revenue cycle automation
            </h1>
            <p className="text-lg text-white/75 max-w-2xl mb-12">
              PulseAI Lab is RevPulse Health&apos;s applied AI lab—engineering
              clinical coding validators, payer policy parsers, and autonomous
              appeal agents at enterprise scale.
            </p>

            {/* Frontier AI Capabilities Image + Content Slider */}
            <div className="rounded-2xl bg-[#111C1F] border border-white/15 overflow-hidden mb-14 grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[280px]">
                <img
                  key={R37_CAPABILITIES[r37SlideIdx].title}
                  src={R37_CAPABILITIES[r37SlideIdx].image}
                  alt={R37_CAPABILITIES[r37SlideIdx].title}
                  className="h-full w-full object-cover animate-page-enter"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1315]/80 via-transparent to-transparent" />
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                      FRONTIER CAPABILITIES ({r37SlideIdx + 1} /{" "}
                      {R37_CAPABILITIES.length})
                    </span>
                    <div className="flex gap-2">
                      <button
                        aria-label="Previous capability"
                        onClick={() =>
                          setR37SlideIdx(
                            (p) =>
                              (p - 1 + R37_CAPABILITIES.length) %
                              R37_CAPABILITIES.length,
                          )
                        }
                        className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        aria-label="Next capability"
                        onClick={() =>
                          setR37SlideIdx(
                            (p) => (p + 1) % R37_CAPABILITIES.length,
                          )
                        }
                        className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="font-tech-mono text-xs text-white/55 mb-2">
                    {R37_CAPABILITIES[r37SlideIdx].tag}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-normal mb-4 font-editorial">
                    {R37_CAPABILITIES[r37SlideIdx].title}
                  </h2>
                  <p className="text-white/75 text-lg max-w-3xl leading-relaxed">
                    {R37_CAPABILITIES[r37SlideIdx].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* All 6 AI Lab Capabilities Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
              {R37_CAPABILITIES.map((cap, idx) => (
                <button
                  key={cap.title}
                  onClick={() => setR37SlideIdx(idx)}
                  className={`text-left rounded-2xl p-6 border transition ${
                    r37SlideIdx === idx
                      ? "bg-[#0052FF]/15 border-[#0052FF]"
                      : "bg-[#111C1F] border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="font-tech-mono text-[10px] uppercase tracking-widest text-[#4D88FF] mb-2">
                    {cap.tag}
                  </div>
                  <h3 className="text-xl font-normal font-editorial text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    {cap.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Leadership & Engineering Team Slider */}
            <div className="rounded-2xl bg-[#111C1F] border border-white/15 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-editorial">
                  Distinguished engineers &amp; RCM technologists
                </h3>
                <div className="flex gap-2">
                  <button
                    aria-label="Previous team members"
                    onClick={() =>
                      setTeamSlideIdx(
                        (p) => (p - 1 + R37_TEAM.length) % R37_TEAM.length,
                      )
                    }
                    className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next team members"
                    onClick={() =>
                      setTeamSlideIdx((p) => (p + 1) % R37_TEAM.length)
                    }
                    className="h-9 w-9 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[0, 1, 2, 3].map((offset) => {
                  const member =
                    R37_TEAM[(teamSlideIdx + offset) % R37_TEAM.length];
                  return (
                    <div
                      key={member.name}
                      className="rounded-xl bg-[#0B1315] border border-white/10 p-5"
                    >
                      <div className="font-editorial text-xl text-white">
                        {member.name}
                      </div>
                      <div className="font-tech-mono text-[11px] uppercase tracking-wider text-[#4D88FF] mt-2">
                        {member.role}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ==================== PAGE: RESOURCES (4 DISTINCT DROPDOWN VIEWS + FEATURED SPOTLIGHT) ==================== */}
      {isResourcePage && (
        <main
          key={currentPage}
          className="animate-page-enter bg-[#F4F4EE] py-20 px-4 sm:px-8"
        >
          <div className="max-w-[1400px] mx-auto">
            <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/75 mb-4">
              <span className="inline-block h-2.5 w-2.5 bg-[#111111]" />{" "}
              INSIGHTS &amp; RESOURCES
            </span>
            <h1 className="text-4xl sm:text-6xl font-normal leading-[1.08] mb-4 font-editorial">
              {activeResourceMeta.label}
            </h1>
            <p className="text-lg text-[#111111]/75 max-w-2xl mb-8">
              {activeResourceMeta.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {RESOURCES_MENU.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setResourceFilter(cat.filter);
                    navigateTo(cat.id);
                  }}
                  className={`px-4 py-2 rounded-full font-tech-mono text-xs uppercase tracking-wider transition ${
                    currentPage === cat.id
                      ? "bg-[#0052FF] text-white"
                      : "bg-[#EBEAE3] text-[#111111] hover:bg-[#DFDDD3]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Featured Spotlight Banner */}
            {filteredNews[0] && (
              <div className="rounded-2xl bg-[#0B1315] text-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-10 border border-white/10">
                <div className="lg:col-span-5 relative min-h-[260px]">
                  <img
                    src={filteredNews[0].image}
                    alt={filteredNews[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <span className="font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF]">
                      FEATURED • {filteredNews[0].category} •{" "}
                      {filteredNews[0].date}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-normal mt-2 mb-4 font-editorial">
                      {filteredNews[0].title}
                    </h2>
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                      {filteredNews[0].summary}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() =>
                        setDetailModal({ type: "news", item: filteredNews[0] })
                      }
                      className="inline-flex items-center gap-2 rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-5 py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition"
                    >
                      READ FULL REPORT <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <button
                  key={news.id}
                  onClick={() => setDetailModal({ type: "news", item: news })}
                  className="group text-left rounded-2xl bg-[#EBEAE3] border border-[#111111]/10 overflow-hidden hover:border-[#0052FF]/50 transition flex flex-col justify-between"
                >
                  <div className="h-44 w-full overflow-hidden bg-[#0B1315] relative">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between font-tech-mono text-[11px] uppercase tracking-widest text-[#0052FF] mb-3">
                        <span>{news.category}</span>
                        <span className="text-[#111111]/50">{news.date}</span>
                      </div>
                      <h3 className="text-xl font-normal leading-snug mb-3 font-editorial group-hover:text-[#0052FF] transition">
                        {news.title}
                      </h3>
                      <p className="text-sm text-[#111111]/70 line-clamp-3">
                        {news.summary}
                      </p>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1.5 font-tech-mono text-xs uppercase tracking-wider">
                      Read article <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* ==================== PAGE: UPGRADED, MORE ATTRACTIVE CONTACT & AUDIT PAGE ==================== */}
      {currentPage === "contact" && (
        <main className="animate-page-enter bg-[#F4F4EE]">
          {/* Dark Hero Strip matching site's top aesthetic */}
          <section className="bg-[#0B1315] text-white py-16 sm:py-24 px-4 sm:px-8 border-b border-white/10">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#4D88FF] mb-4 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <Mail className="h-3.5 w-3.5" /> CONNECT WITH REVPULSE HEALTH
                </span>
                <h1 className="text-4xl sm:text-6xl font-normal leading-[1.08] mb-5 font-editorial">
                  Let&apos;s unlock your organization&apos;s trapped revenue
                </h1>
                <p className="text-base sm:text-xl text-white/75 max-w-2xl leading-relaxed">
                  Whether you want a personalized walkthrough of RevPulse Core
                  4.0, a complimentary 48-hour claim denial diagnostic, or payer
                  contract advisory—our healthcare finance strategists are
                  ready.
                </p>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#111C1F] border border-white/12 p-6">
                  <Clock className="h-5 w-5 text-[#4D88FF] mb-3" />
                  <div className="text-2xl font-editorial text-white">
                    &lt; 4 Hours
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    Average specialist response time
                  </div>
                </div>
                <div className="rounded-2xl bg-[#111C1F] border border-white/12 p-6">
                  <ShieldCheck className="h-5 w-5 text-[#4D88FF] mb-3" />
                  <div className="text-2xl font-editorial text-white">
                    HIPAA BAA
                  </div>
                  <div className="text-xs text-white/60 mt-1">
                    Protected diagnostic file sharing
                  </div>
                </div>
                <div className="rounded-2xl bg-[#111C1F] border border-white/12 p-6 col-span-2 flex items-center justify-between">
                  <div>
                    <div className="font-tech-mono text-[11px] uppercase tracking-widest text-[#4D88FF]">
                      DIRECT ENTERPRISE DESK
                    </div>
                    <div className="text-base font-medium text-white mt-1">
                      solutions@revpulsehealth.com • +1 (800) 555-0194
                    </div>
                  </div>
                  <Phone className="h-5 w-5 text-white/50 shrink-0" />
                </div>
              </div>
            </div>
          </section>

          {/* Main Interactive Consultation Form + Office & Onboarding Roadmap */}
          <section className="py-16 sm:py-24 px-4 sm:px-8">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Visual + What Happens Next + Regional Hubs */}
              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-2xl overflow-hidden border border-[#111111]/10 shadow-sm relative">
                  <img
                    src={DEMO_IMG}
                    alt="RevPulse Health team reviewing financial performance"
                    className="w-full h-64 object-cover"
                  />
                  <div className="bg-[#0B1315] text-white p-6">
                    <div className="font-tech-mono text-[10px] uppercase tracking-widest text-[#4D88FF] mb-1">
                      WHAT HAPPENS NEXT
                    </div>
                    <div className="text-lg font-editorial">
                      3-Step Complimentary Revenue Cycle Diagnostic
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/10 p-7 space-y-5">
                  {[
                    {
                      step: "01",
                      title: "15-Minute Discovery & KPI Alignment",
                      desc: "Share your current EHR, payer mix, and top denial or A/R bottlenecks with a senior RCM architect.",
                    },
                    {
                      step: "02",
                      title: "48-Hour De-Identified 837/835 Sample Audit",
                      desc: "We run a sample remit file through RevPulse Core to quantify clean-claim upside and silent payer underpayments.",
                    },
                    {
                      step: "03",
                      title: "Executive ROI & Implementation Roadmap",
                      desc: "Receive a custom financial business case with guaranteed 90-day clean claim and cash-acceleration milestones.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <span className="font-tech-mono text-xs font-bold px-2.5 py-1 rounded bg-[#0052FF] text-white shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#111111]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#111111]/70 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Regional Hubs */}
                <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/10 p-7">
                  <div className="flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#111111]/70 mb-4">
                    <MapPin className="h-4 w-4 text-[#0052FF]" /> REGIONAL
                    OPERATIONS HUBS
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="rounded-xl bg-[#F4F4EE] p-4 border border-[#111111]/8">
                      <div className="font-semibold text-[#111111]">
                        Chicago HQ
                      </div>
                      <div className="text-xs text-[#111111]/65 mt-1">
                        222 W. Merchandise Mart Plaza, Suite 1200, Chicago, IL
                      </div>
                    </div>
                    <div className="rounded-xl bg-[#F4F4EE] p-4 border border-[#111111]/8">
                      <div className="font-semibold text-[#111111]">
                        Nashville RCM Center
                      </div>
                      <div className="text-xs text-[#111111]/65 mt-1">
                        501 Commerce Street, Suite 900, Nashville, TN
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Multi-Option Consultation Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#EBEAE3] border border-[#111111]/12 p-8 sm:p-10 shadow-sm">
                  <div className="mb-6">
                    <span className="font-tech-mono text-xs uppercase tracking-widest text-[#0052FF]">
                      STEP 1 • SELECT YOUR GOAL
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-normal mt-1 font-editorial">
                      How can RevPulse Health help your team?
                    </h2>
                  </div>

                  {/* Interactive Inquiry Type Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
                    {[
                      "Free 48-Hour RCM Audit",
                      "RevPulse Core SaaS Demo",
                      "RCM Consulting & Staffing",
                    ].map((goal) => (
                      <button
                        type="button"
                        key={goal}
                        onClick={() => {
                          setSelectedInquiryType(goal);
                          setDemoForm({ ...demoForm, interest: goal });
                        }}
                        className={`px-4 py-3 rounded-xl font-tech-mono text-[11px] uppercase tracking-wider text-left transition border ${
                          selectedInquiryType === goal
                            ? "bg-[#0052FF] text-white border-[#0052FF] shadow-md"
                            : "bg-white text-[#111111] border-[#111111]/15 hover:border-[#0052FF]/50"
                        }`}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>

                  {contactSubmitted ? (
                    <div className="rounded-2xl bg-white border border-[#0052FF]/30 p-10 text-center animate-page-enter">
                      <div className="h-14 w-14 rounded-full bg-[#0052FF]/12 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-[#0052FF]" />
                      </div>
                      <h3 className="text-2xl font-normal font-editorial mb-2">
                        Request Confirmed for{" "}
                        {demoForm.organization || "Your Organization"}
                      </h3>
                      <p className="text-sm text-[#111111]/75 max-w-md mx-auto mb-6">
                        Thank you, {demoForm.firstName || "Partner"}. A RevPulse
                        Health Revenue Strategist specializing in{" "}
                        <strong>{demoForm.ehrSystem}</strong> will reach out to{" "}
                        <strong>{demoForm.email}</strong> within 4 business
                        hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setContactSubmitted(false)}
                        className="rounded-md bg-[#0B1315] text-white px-5 py-2.5 font-tech-mono text-xs uppercase tracking-wider"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleContactPageSubmit}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            First Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Elena"
                            value={demoForm.firstName}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                firstName: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          />
                        </div>
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            Last Name *
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Vance"
                            value={demoForm.lastName}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                lastName: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="evance@healthsystem.org"
                            value={demoForm.email}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                email: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          />
                        </div>
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            Direct Phone
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 (312) 555-0148"
                            value={demoForm.phone}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                phone: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                          Hospital, Health System, or Medical Group *
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Meridian Health Network"
                          value={demoForm.organization}
                          onChange={(e) =>
                            setDemoForm({
                              ...demoForm,
                              organization: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            Primary EHR / PM System
                          </label>
                          <select
                            value={demoForm.ehrSystem}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                ehrSystem: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          >
                            <option>Epic</option>
                            <option>Oracle Health (Cerner)</option>
                            <option>Athenahealth</option>
                            <option>eClinicalWorks</option>
                            <option>NextGen Healthcare</option>
                            <option>Meditech / Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                            Monthly Claim Volume
                          </label>
                          <select
                            value={demoForm.monthlyClaims}
                            onChange={(e) =>
                              setDemoForm({
                                ...demoForm,
                                monthlyClaims: e.target.value,
                              })
                            }
                            className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                          >
                            <option>Under 10,000 claims/mo</option>
                            <option>10,000 – 50,000 claims/mo</option>
                            <option>50,000 – 250,000 claims/mo</option>
                            <option>250,000+ claims/mo (Enterprise)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block font-tech-mono text-[11px] uppercase tracking-wider text-[#111111]/70 mb-1.5">
                          Primary Revenue Cycle Priorities
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your denial rate goals, prior authorization bottlenecks, A/R backlog, or coding compliance needs..."
                          value={demoForm.notes}
                          onChange={(e) =>
                            setDemoForm({ ...demoForm, notes: e.target.value })
                          }
                          className="w-full rounded-lg border border-[#111111]/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#0052FF]"
                        />
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#111111]/60 pt-1">
                        <span className="flex items-center gap-1.5">
                          <Lock className="h-3.5 w-3.5 text-[#0052FF]" />{" "}
                          Protected by 256-bit encryption &amp; HIPAA BAA
                        </span>
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-md bg-[#0052FF] hover:bg-[#0044D6] py-4 font-tech-mono text-xs uppercase tracking-wider text-white transition shadow-lg shadow-[#0052FF]/20"
                      >
                        SUBMIT {selectedInquiryType.toUpperCase()} REQUEST →
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* Dark Footer */}
      <footer className="bg-[#0B1315] text-white pt-16 pb-12 px-4 sm:px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/12">
            <div className="lg:col-span-4">
              <button
                onClick={() => navigateTo("home")}
                className="text-3xl font-bold tracking-tight text-white font-editorial"
              >
                RevPulse Health
              </button>
              <p className="mt-4 text-sm text-white/60 max-w-xs">
                The Healthcare Revenue OS for real-time adjudication &amp;
                automated medical billing.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-tech-mono text-xs uppercase tracking-widest text-white/50 mb-4">
                  Platform
                </h4>
                <ul className="space-y-2.5 font-tech-mono text-xs uppercase tracking-wider text-white/85">
                  <li>
                    <button
                      onClick={() => navigateTo("comp-vision")}
                      className="hover:text-white"
                    >
                      Revenue Operating System Vision
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("phare-os")}
                      className="hover:text-white"
                    >
                      RevPulse Core
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("sol-prior-auth")}
                      className="hover:text-white"
                    >
                      Pre-Bill Solutions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("sol-denials")}
                      className="hover:text-white"
                    >
                      Post-Bill Solutions
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-tech-mono text-xs uppercase tracking-widest text-white/50 mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5 font-tech-mono text-xs uppercase tracking-wider text-white/85">
                  <li>
                    <button
                      onClick={() => navigateTo("res-newsroom")}
                      className="hover:text-white"
                    >
                      Newsroom
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("res-insights")}
                      className="hover:text-white"
                    >
                      Industry Insights
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("home", "who-we-are")}
                      className="hover:text-white"
                    >
                      Customer Stories
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("comp-careers")}
                      className="hover:text-white"
                    >
                      Careers
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => navigateTo("contact")}
                      className="hover:text-white"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-tech-mono text-xs uppercase tracking-widest text-white/50 mb-4">
                  Follow
                </h4>
                <ul className="space-y-2.5 font-tech-mono text-xs uppercase tracking-wider text-white/85">
                  {["LinkedIn", "YouTube", "X", "Facebook", "Instagram"].map(
                    (social) => (
                      <li key={social}>
                        <button
                          onClick={() =>
                            setToastMsg(`Opening RevPulse Health on ${social}`)
                          }
                          className="hover:text-white"
                        >
                          {social}
                        </button>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/55">
            <div>© 2026 RevPulse Health</div>
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() =>
                  setDetailModal({
                    type: "legal",
                    item: {
                      title: "Privacy Policy",
                      body: "RevPulse Health is committed to protecting the privacy and security of healthcare organizations, partners, and website visitors.",
                    },
                  })
                }
                className="hover:text-white"
              >
                Privacy Policy
              </button>
              <button
                onClick={() =>
                  setDetailModal({
                    type: "legal",
                    item: {
                      title: "Terms of Use",
                      body: "By accessing RevPulse Health digital properties and RevPulse Core documentation, you agree to RevPulse Health's standard enterprise terms of use.",
                    },
                  })
                }
                className="hover:text-white"
              >
                Terms of Use
              </button>
              <button
                onClick={() => setConsentModalOpen(true)}
                className="hover:text-white"
              >
                Consent Preferences
              </button>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="text-white/80 hover:text-white font-medium"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1315] text-white p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-2xl font-bold font-editorial">
                RevPulse Health
              </span>
              <button
                aria-label="Close mobile menu"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Home", page: "home" },
                { label: "RevPulse Core", page: "phare-os" },
                { label: "Prior Authorization", page: "sol-prior-auth" },
                { label: "Utilization Management", page: "sol-um" },
                { label: "CDI & Coding", page: "sol-cdi" },
                { label: "Pre-Bill Audit", page: "sol-audit" },
                { label: "Denials", page: "sol-denials" },
                { label: "Recovery", page: "sol-recovery" },
                { label: "Consulting & Partnerships", page: "sol-consulting" },
                { label: "PulseAI Lab", page: "r37" },
                { label: "Resources", page: "res-all" },
                { label: "About RevPulse Health", page: "comp-about" },
                { label: "Trust Center", page: "comp-trust" },
                { label: "Contact", page: "contact" },
              ].map((nav) => (
                <button
                  key={nav.label}
                  onClick={() => navigateTo(nav.page)}
                  className="block w-full text-left py-2.5 border-b border-white/10 text-lg font-editorial"
                >
                  {nav.label}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setDemoModalOpen(true);
            }}
            className="w-full rounded-md bg-[#0052FF] py-3.5 font-tech-mono text-xs uppercase tracking-wider text-white mt-8"
          >
            REQUEST A DEMO →
          </button>
        </div>
      )}

      {/* Request a Demo Modal */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl bg-[#F4F4EE] text-[#111111] p-6 sm:p-8 shadow-2xl border border-[#111111]/10 relative">
            <button
              aria-label="Close modal"
              onClick={() => setDemoModalOpen(false)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/8"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#0052FF] mb-2">
              <span className="inline-block h-2 w-2 bg-[#0052FF]" /> REQUEST A
              DEMO
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal mb-2 font-editorial">
              See RevPulse Core in action
            </h3>
            <p className="text-sm text-[#111111]/70 mb-6">
              Connect with RevPulse Health to explore how RevPulse Core and
              PulseAI agents transform revenue cycle performance.
            </p>

            {demoSubmitted ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="h-12 w-12 text-[#0052FF] mx-auto mb-3" />
                <div className="text-lg font-medium">
                  Thank you for your interest
                </div>
                <p className="text-sm text-[#111111]/70 mt-1">
                  Your demo request has been submitted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="text"
                    placeholder="First name"
                    value={demoForm.firstName}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, firstName: e.target.value })
                    }
                    className="w-full rounded-lg border border-[#111111]/20 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0052FF]"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last name"
                    value={demoForm.lastName}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, lastName: e.target.value })
                    }
                    className="w-full rounded-lg border border-[#111111]/20 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0052FF]"
                  />
                </div>
                <input
                  required
                  type="email"
                  placeholder="Work email"
                  value={demoForm.email}
                  onChange={(e) =>
                    setDemoForm({ ...demoForm, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#111111]/20 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0052FF]"
                />
                <input
                  required
                  type="text"
                  placeholder="Health system or organization"
                  value={demoForm.organization}
                  onChange={(e) =>
                    setDemoForm({ ...demoForm, organization: e.target.value })
                  }
                  className="w-full rounded-lg border border-[#111111]/20 bg-white px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#0052FF]"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#0052FF] hover:bg-[#0044D6] py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition"
                >
                  SUBMIT REQUEST →
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
          <div className="w-full max-w-xl rounded-2xl bg-[#0F1719] text-white border border-white/15 p-6 shadow-2xl">
            <div className="flex items-center gap-3 pb-4 border-b border-white/12">
              <Search className="h-5 w-5 text-white/60" />
              <input
                autoFocus
                type="text"
                placeholder="Search RevPulse Core, PulseAI Lab, solutions, news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-base text-white placeholder-white/40 focus:outline-none"
              />
              <button
                aria-label="Close search"
                onClick={() => setSearchModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 max-h-80 overflow-y-auto space-y-1.5">
              {searchableItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setSearchModalOpen(false);
                    if (item.news)
                      setDetailModal({ type: "news", item: item.news });
                    else navigateTo(item.page);
                  }}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/10 text-left transition"
                >
                  <span className="text-sm text-white/90">{item.label}</span>
                  <span className="font-tech-mono text-[10px] uppercase tracking-widest text-[#4D88FF]">
                    {item.type}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {detailModal && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-2xl bg-[#F4F4EE] text-[#111111] p-6 sm:p-8 shadow-2xl border border-[#111111]/10 relative">
            <button
              aria-label="Close details"
              onClick={() => setDetailModal(null)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-black/8"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-flex items-center gap-2 font-tech-mono text-xs uppercase tracking-widest text-[#0052FF] mb-3">
              <FileText className="h-3.5 w-3.5" />
              {detailModal.type === "news"
                ? detailModal.item.category
                : detailModal.group || detailModal.type.toUpperCase()}
            </span>

            <h3 className="text-2xl sm:text-3xl font-normal leading-snug mb-4 font-editorial">
              {detailModal.item.title || detailModal.item.name}
            </h3>

            <p className="text-sm sm:text-base text-[#111111]/80 leading-relaxed mb-5">
              {detailModal.item.summary ||
                detailModal.item.description ||
                detailModal.item.body}
            </p>

            {detailModal.item.highlights && (
              <ul className="space-y-2 mb-6 border-t border-[#111111]/10 pt-4">
                {detailModal.item.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2.5 text-sm text-[#111111]/80"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#0052FF] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDetailModal(null)}
                className="rounded-md border border-[#111111]/20 px-4 py-2 font-tech-mono text-xs uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setDetailModal(null);
                  setDemoModalOpen(true);
                }}
                className="rounded-md bg-[#0052FF] hover:bg-[#0044D6] px-4 py-2 font-tech-mono text-xs uppercase tracking-wider text-white"
              >
                Request a Demo →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Consent Preferences Modal */}
      {consentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#F4F4EE] text-[#111111] p-6 shadow-2xl border border-[#111111]/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-normal font-editorial">
                Consent Preferences
              </h3>
              <button
                onClick={() => setConsentModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/8"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-3 mb-6">
              <label className="flex items-center justify-between p-3 rounded-lg bg-[#EBEAE3]">
                <span className="text-sm font-medium">Essential Cookies</span>
                <input
                  type="checkbox"
                  checked={consentPrefs.essential}
                  disabled
                  className="accent-[#0052FF]"
                />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg bg-[#EBEAE3] cursor-pointer">
                <span className="text-sm font-medium">
                  Analytics &amp; Performance
                </span>
                <input
                  type="checkbox"
                  checked={consentPrefs.analytics}
                  onChange={(e) =>
                    setConsentPrefs({
                      ...consentPrefs,
                      analytics: e.target.checked,
                    })
                  }
                  className="accent-[#0052FF]"
                />
              </label>
              <label className="flex items-center justify-between p-3 rounded-lg bg-[#EBEAE3] cursor-pointer">
                <span className="text-sm font-medium">Personalization</span>
                <input
                  type="checkbox"
                  checked={consentPrefs.personalization}
                  onChange={(e) =>
                    setConsentPrefs({
                      ...consentPrefs,
                      personalization: e.target.checked,
                    })
                  }
                  className="accent-[#0052FF]"
                />
              </label>
            </div>
            <button
              onClick={() => {
                setConsentModalOpen(false);
                setToastMsg("Consent preferences saved.");
              }}
              className="w-full rounded-md bg-[#0B1315] py-2.5 font-tech-mono text-xs uppercase tracking-wider text-white"
            >
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Client Portal Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0F1719] text-white p-6 sm:p-8 shadow-2xl border border-white/15 relative">
            <button
              onClick={() => setLoginModalOpen(false)}
              className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <Building2 className="h-5 w-5 text-[#4D88FF]" />
              <span className="font-tech-mono text-xs uppercase tracking-widest text-white/60">
                REVPULSE CORE PORTAL
              </span>
            </div>
            <h3 className="text-2xl font-normal mb-5 font-editorial">
              Sign in to RevPulse Health
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoginModalOpen(false);
                setToastMsg(
                  "SSO redirect simulated for RevPulse Health Enterprise Portal.",
                );
              }}
              className="space-y-4"
            >
              <input
                required
                type="email"
                placeholder="Enterprise email"
                className="w-full rounded-lg border border-white/20 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#0052FF]"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-[#0052FF] hover:bg-[#0044D6] py-3 font-tech-mono text-xs uppercase tracking-wider text-white transition"
              >
                Continue with SSO →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
