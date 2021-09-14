import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.demonswap.fi/contact-us",
      },
      {
        label: "Blog",
        href: "https://demonswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.demonswap.fi/contact-us/telegram",
      },
      {
        label: "DEMON",
        href: "https://docs.demonswap.fi/tokenomics/demon",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://demonswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.demonswap.fi/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.demonswap.fi/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.demonswap.fi/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/demonswap",
      },
      {
        label: "Documentation",
        href: "https://docs.demonswap.fi",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@demonswap-1/s/demonswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.demonswap.fi/help/faq#is-demonswap-safe-has-demonswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.demonswap.fi/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/demonswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/demonswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/DemonSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/DemonSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/DemonSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/demonswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/demonswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/demonswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/DemonSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/DemonswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/demonswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/demonswapfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/DemonSwapAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/DemonSwapWhales",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/demonswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/demonswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/demonswap/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
