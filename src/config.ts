import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blogelogeluren.netlify.app/", // replace this with your deployed domain
  author: "turpelurpeluren",
  desc: "Just getting my thoughts out there... while learning :00",
  title: "blogelogeluren",
  ogImage: "blogeloge-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = []; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: false,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Website",
    href: "https://turpelurpeluren.online",
    linkTitle: ` ${SITE.author} on the web`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/turpeluren",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/turpelurpeluren/",
    linkTitle: `${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "Kofi",
    href: "https://ko-fi.com/turpelurpeluren",
    linkTitle: `${SITE.author} on Ko-fi`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/turpeluren",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCp84o6z4oaivyHp9REwZT6g",
    linkTitle: `${SITE.author} on YouTube`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Facebook`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
