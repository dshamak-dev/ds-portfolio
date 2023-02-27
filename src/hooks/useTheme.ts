import { useMemo } from "react";
import { THEME_TYPE } from "../constants/themes.const";
import { appStore } from "../stores/AppStore";

export const useTheme = () => {
  const theme: THEME_TYPE = appStore.pageTheme;
  const isDarkTheme: boolean = useMemo(() => theme === "dark", [theme]);

  return { theme, isDarkTheme };
};
