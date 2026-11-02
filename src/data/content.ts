// Central content store for the single-page portfolio.
// English copy is calibrated — use verbatim, do not rewrite.

export const SHOW_PHOTO = true;

export const SITE = {
  title: "Yennyfer Pollock",
  role: "Sales Operations & Account Management",
  description:
    "Bilingual Sales Operations and Account Management professional for B2B manufacturers. $26M+ in new business across Latin America, the Caribbean, EMEA and APAC.",
  author: "Yennyfer Pollock",
  url: "https://yenpoll.github.io",
  base: "/Yen_Portal",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Results", href: "#results" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const CONTACT = {
  email: "yennyfer.pollock@outlook.com",
  emailHref: "mailto:yennyfer.pollock@outlook.com",
  resumeRequestHref:
    "mailto:yennyfer.pollock@outlook.com?subject=Resume%20request&body=Hello%20Yennyfer%2C%0A%0AI%20would%20like%20to%20request%20your%20resume.%20The%20role%20I%20am%20hiring%20for%20is%3A%0A%0A",
  linkedin: "https://www.linkedin.com/in/yennyfer-pollock",
  linkedinDisplay: "linkedin.com/in/yennyfer-pollock",
  location: "United States",
} as const;

export const HERO = {
  name: "Yennyfer Pollock",
  role: "Sales Operations & Account Management",
  qualifier: "B2B Manufacturing · Bilingual (EN/ES) · U.S. & International Markets",
  valueLine: "Converting complexity into clarity.",
  bridge:
    "I'm the bridge between the factory and the market — I turn fragmented sales operations into systems that close business and keep customers coming back.",
  proof:
    "$26M+ in new business generated for global manufacturers across Latin America, the Caribbean, EMEA and APAC.",
  credibilityChips: ["United States", "Available for U.S. and remote roles"],
} as const;

export const ABOUT = {
  paragraphs: [
    "Revenue slows down when sales, operations, and channel partners pull in different directions. I've sat at every one of those tables.",
    "I've spent my career inside B2B manufacturers — industrial equipment, commercial LED lighting — as the person the sales team, the factory, and the distributor network all come to. I've been the enabler, the analyst, the systems owner, and the closer. That cross-functional depth means I don't just bridge the gaps between those functions: I see them coming.",
    "What I actually do is unglamorous and it works: I take scattered data, unclear pricing, slow quotes and partners with no front door, and I turn them into systems people trust and use. Then revenue moves.",
    "I lead with questions, not pitches. I'm bilingual (EN/ES), based in the United States, and I'm looking for an in-house team to bring this operating discipline to.",
  ],
} as const;

export const CAPABILITIES = [
  {
    title: "Sales Operations & CRM",
    subtitle: "The system of record that leadership actually trusts.",
    items: [
      "CRM administration & pipeline management (Salesforce)",
      "Sales forecasting & KPI reporting",
      "Data cleanup & process standardization",
      "Quote-to-cash & order management",
    ],
  },
  {
    title: "Account Management & Retention",
    subtitle: "One point of contact, from first question to renewal.",
    items: [
      "End-to-end ownership of the customer relationship",
      "Escalation handling, credit disputes, RMA resolution",
      "Account growth: upsell, renewals and win-back",
      "Advocating for the customer inside the business",
    ],
  },
  {
    title: "Channel & Distributor Growth",
    subtitle: "Partners sell more when someone makes it easy to sell.",
    items: [
      "Distributor & partner onboarding and development",
      "Bilingual enablement, training and sales collateral",
      "OEM program coordination & dropshipment",
      "Third-party logistics (3PL) coordination",
    ],
  },
  {
    title: "Systems, ERP & Process",
    subtitle: "Implementations that people adopt, not just install.",
    items: [
      "SAP ERP implementation & business requirements gathering",
      "PIM implementation (Contentserv)",
      "AI-driven workflows",
      "Six Sigma Green Belt process discipline",
    ],
  },
] as const;

export const RESULTS = [
  { value: "$26M+", label: "in new business generated", attribution: "Cree Lighting & Wacker Neuson · LATAM, Caribbean, EMEA, APAC" },
  { value: "18% → 6%", label: "forecast error, across four countries", attribution: "Wacker Neuson · SAP ERP rollout in Mexico, Chile, Brazil, Peru" },
  { value: "$1.8M", label: "recovered in aged industrial inventory", attribution: "Wacker Neuson · rebate & incentive program design" },
  { value: "50%", label: "faster quote response times", attribution: "Cree Lighting · process standardization & AI-enhanced workflows" },
  { value: "60%", label: "fewer order errors", attribution: "Cree Lighting · process standardization" },
  { value: "500+", label: "SKUs consolidated into one product platform", attribution: "Wacker Neuson · cross-functional PIM implementation" },
  { value: "120+", label: "users onboarded onto SAP ERP", attribution: "Wacker Neuson · bilingual adoption across 4 countries" },
  { value: "40+", label: "channel partners enabled", attribution: "Cree Lighting · bilingual training & certification collateral" },
] as const;

export const RESULTS_VISIBLE_COUNT = 5;

export const COMPANY_LINKS: Record<string, string> = {
  "Cree Lighting USA LLC": "https://www.creelighting.com/",
  "Wacker Neuson SE": "https://www.wackerneuson.com/us/",
};

export const CASE_STUDIES = [
  {
    title: "No front door for the channel",
    company: "Cree Lighting USA LLC",
    period: "2021–2025",
    problem:
      "Growth across Latin America and the Caribbean was capped by channel friction. Distributors and agents had no single point of contact, there was no inside sales process to convert inbound leads, and CRM discipline was missing — slowing onboarding, quoting and deal velocity across the region.",
    whatIDid:
      "I became the single point of contact for distributors and external sales agents. I built a structured process to convert inbound leads into closed sales, paired it with outbound effort and a segmented growth strategy (existing-account expansion, new-customer acquisition, inactive-account win-back), and designed a Salesforce pipeline dashboard backed by a three-month data cleanup.",
    result:
      "$12M+ in new business through distributor signings, agent contracts, enterprise renewals and referrals — including institutional accounts in sports infrastructure and public utilities across Mexico and Central America. Quote response times dropped 50%. Order errors dropped 60%.",
  },
  {
    title: "An ERP rollout that had to work in four countries",
    company: "Wacker Neuson SE",
    period: "2015–2018",
    problem:
      "A new SAP ERP rollout across Mexico, Chile, Brazil and Peru risked low adoption and unpredictable forecasting, with no dedicated regional lead to translate between headquarters and each local market.",
    whatIDid:
      "I served as the regional subject matter specialist, traveling with IT and business analysts to gather business requirements market by market, and drove bilingual adoption with the teams who would use the system every day.",
    result:
      "120+ users onboarded across the four countries, and forecast error dropped from 18% to 6% — giving global sales leadership numbers they could plan against.",
  },
  {
    title: "500+ SKUs and no single source of truth",
    company: "Wacker Neuson SE",
    period: "2018–2020",
    problem:
      "More than 500 SKUs sat scattered across disconnected systems. Product messaging contradicted itself between channels, slowing lead-to-quote conversion and making go-to-market execution unreliable.",
    whatIDid:
      "I led the cross-functional PIM implementation that consolidated 500+ SKUs into a centralized digital platform, working across engineering, marketing and sales — then built the channel enablement materials distributors and reps needed to actually use it.",
    result:
      "Lead-to-quote conversion improved 20%, and the customer journey from discovery to close became measurably shorter and more consistent.",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Bilingual Sales Operations & Support Lead | Account Management",
    company: "Cree Lighting USA LLC · Milwaukee, WI",
    detail: "Commercial LED lighting manufacturer · ~430 employees · $325M revenue",
  },
  {
    role: "Product Marketing Manager",
    company: "Wacker Neuson SE · Milwaukee, WI",
    detail: "Global industrial equipment manufacturer · ~5,800 employees · ~$1.7B revenue",
  },
  {
    role: "International Sales Analyst II, Market Development",
    company: "Wacker Neuson SE · Milwaukee, WI",
    detail: "",
  },
  {
    role: "International Sales Analyst",
    company: "Wacker Neuson SE · Milwaukee, WI",
    detail: "",
  },
] as const;

export const EDUCATION =
  "MBA, Concordia University Wisconsin (in progress) · BA, Management Sciences & Marketing, UNITEC — Valencia, Venezuela";

export const TOOLS = [
  "Salesforce CRM",
  "SAP ERP",
  "SAP Hybris",
  "HubSpot",
  "Power BI",
  "Contentserv PIM",
  "Oracle",
  "Advanced Excel",
  "Google Workspace",
] as const;

export const AI_WORK = {
  paragraphs: [
    "I use AI the way I use any other system: to remove friction and give people back their time. At Cree Lighting, AI-enhanced workflows were part of how quote response times came down 50%. I've since completed AI training through Google Cloud, MIT OpenCourseWare, AWS, the University of Helsinki and Anthropic Academy.",
    "This site is one of the results — I designed and built it myself with Astro, TypeScript and Claude Code.",
  ],
} as const;

export const CERTIFICATIONS = [
  "Sandler Sales Training",
  "Six Sigma Green Belt",
  "HubSpot Sales Enablement",
  "AI Fluency (Anthropic Academy)",
  "AI for Sales (Salesforce)",
  "Machine Learning Essentials (AWS)",
  "PMI Member",
] as const;

export const CONTACT_SECTION = {
  heading: "Let's talk",
  paragraphs: [
    "I'm looking for an in-house role where I can bring this operating discipline to one team — Sales Operations, Account Management, Inside Sales or Channel Operations, with a company that sells something real.",
    "If your revenue is leaking somewhere between the factory and the customer, that's the problem I know how to fix.",
  ],
  resumeNote:
    "I don't post my resume publicly. Email me and tell me what you're hiring for, and I'll send the version that speaks to that role.",
} as const;
