import { THEME_TYPE } from "./themes.const";

const SEED_BASE = Date.now();

export interface IProject {
  type: "image" | "link";
  previewURL: string;
  theme: THEME_TYPE;
}

export const PROJECTS: IProject[] = [
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 1}/600/600`,
    theme: "dark",
  },
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 2}/600/600`,
    theme: "light",
  },
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 3}/600/600`,
    theme: "dark",
  },
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 4}/600/600`,
    theme: "light",
  },
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 5}/600/600`,
    theme: "light",
  },
  {
    type: "image",
    previewURL: `https://picsum.photos/seed/${SEED_BASE + 6}/600/600`,
    theme: "dark",
  },
];
