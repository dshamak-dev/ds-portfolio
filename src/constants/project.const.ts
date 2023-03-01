import { THEME_TYPE } from "./themes.const";

const SEED_BASE = Date.now();

export interface IProject {
  title: string;
  subtitle?: string;
  previewURL: string;
  theme: THEME_TYPE;
  links?: { source: string; url: string; text: string }[];
}

// https://picsum.photos/seed/THE_SEED/600/600

export const PROJECTS: IProject[] = [
  {
    title: "Shmat Art",
    subtitle: "PORTFOLIO  WEBSITE",
    previewURL: `/assets/uploads/shmat-art.preview.webp`,
    links: [
      {
        source: "link",
        url: "https://beta.shmat.art/",
        text: "shmat.art",
      },
    ],
    theme: "dark",
  },
  {
    title: "Sideways 6",
    subtitle: "Business improve app",
    previewURL: `/assets/uploads/s6.preview.webp`,
    links: [
      {
        source: "link",
        url: "https://www.sideways6.com/",
        text: "s6.com",
      },
    ],
    theme: "light",
  },
  {
    title: "Make A Bag",
    subtitle: "Custom Bags App",
    previewURL: `/assets/uploads/make-a-bag.preview.webp`,
    links: [
      {
        source: "instagram",
        url: "https://www.instagram.com/makeabag.official/",
        text: "@makeabag",
      },
    ],
    theme: "dark",
  },
];
