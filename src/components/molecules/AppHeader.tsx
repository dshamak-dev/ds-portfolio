import React from "react";

export const AppHeader = () => {
  const activePageTitle = "Projects";

  return (
    <nav className="fixed z-20 top-0 left-0 px-[3rem] py-[1rem] w-full select-none">
      <a className="flex gap-[0.2em] text-[1.2rem] text-yellow uppercase font-semibold">
        <span>D.S</span>
        <span>-</span>
        <span>{activePageTitle}</span>
      </a>
    </nav>
  );
};
