export const SITE = {
  title: "Yennyfer Pollock",
  description:
    "Global Business Operations & Market Enablement — Latin America & Caribbean. I help U.S.-based industrial, manufacturing, and technology companies grow international revenue, protect margins, and reduce operational cost.",
  author: "Yennyfer Pollock",
  url: "https://YenPoll.github.io",
  base: "/Yen_Portal",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `${SITE.base}/` },
  { label: "About", href: `${SITE.base}/about` },
  { label: "Services", href: `${SITE.base}/services` },
  { label: "Experience", href: `${SITE.base}/case-studies` },
  { label: "Impact & Economics", href: `${SITE.base}/impact` },
  { label: "Contact", href: `${SITE.base}/contact` },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN",
  email: "mailto:yennyfer.pollock@outlook.com",
} as const;
