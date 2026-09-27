export const SITE = {
  title: "Yennyfer Pollock",
  description:
    "Global Business Operations & Market Enablement: Latin America & Caribbean. I help industrial, manufacturing, and technology companies grow international revenue, protect margins, and reduce operational cost.",
  author: "Yennyfer Pollock",
  url: "https://YenPoll.github.io",
  base: "/Yen_Portal",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `${SITE.base}/` },
  { label: "About", href: `${SITE.base}/about` },
  { label: "Core Expertise", href: `${SITE.base}/services` },
  { label: "Experience", href: `${SITE.base}/case-studies` },
  { label: "AI Partnership", href: `${SITE.base}/ai-partnership` },
  { label: "Impact & Economics", href: `${SITE.base}/impact` },
  { label: "Contact", href: `${SITE.base}/contact` },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/yennyfer-pollock",
  email: "mailto:yennyfer.pollock@outlook.com",
  emailDisplay: "yennyfer.pollock@outlook.com",
  resumeRequest: "mailto:yennyfer.pollock@outlook.com?subject=Resume%20request&body=Hello%20Yennyfer%2C%0A%0AI%20would%20like%20to%20request%20your%20resume.%20The%20role%20I%20am%20hiring%20for%20is%3A%0A%0A",
} as const;

export const LOCATION = "United States" as const;
