import classNames from "classnames";
import React from "react";
import { useDevice } from "../../hooks/useDevice";
import { useTheme } from "../../hooks/useTheme";
import { PageContentCover } from "../atoms/PageContentCover";

export const AppHeader = () => {
  const { mobile } = useDevice();
  const { isDarkTheme } = useTheme();
  const activePageTitle = "Projects";

  return (
    <nav className={classNames("fixed z-20 top-0 left-0w-full select-none", {
      "mix-blend-difference": mobile
    })}>
      <PageContentCover className="py-[1rem] ">
        <div className="flex justify-between items-center">
          <a className="flex gap-[0.2em] text-[1.2rem] text-yellow uppercase font-semibold">
            <span>D.S</span>
            <span>-</span>
            <span>{activePageTitle}</span>
          </a>
        </div>
      </PageContentCover>
    </nav>
  );
};
