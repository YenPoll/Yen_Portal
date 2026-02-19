export const SITE = {
  title: "Yen Portal",
  description:
    "Professional portfolio and consultancy — helping professionals and companies grow through strategic advisory, training, and hands-on expertise.",
  author: "Yen",
  url: "https://YOUR_USERNAME.github.io/Yen_Portal",
  base: "/Yen_Portal",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: `${SITE.base}/` },
  { label: "About", href: `${SITE.base}/about` },
  { label: "Services", href: `${SITE.base}/services` },
  { label: "Case Studies", href: `${SITE.base}/case-studies` },
  { label: "Writing", href: `${SITE.base}/writing` },
  { label: "Contact", href: `${SITE.base}/contact` },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/YOUR_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_USERNAME",
  email: "mailto:your@email.com",
} as const;
