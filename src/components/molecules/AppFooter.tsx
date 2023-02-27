import React, { FC } from "react";
import { PageContentCover } from "../atoms/PageContentCover";

export const AppFooter: FC<any> = () => {
  return (
    <footer className="absolute bottom-0 z-10">
      <PageContentCover className="py-[1rem] flex justify-between text-[0.8rem] text-grey_light">
        <span data-copyright="&#169;">last update in February, 2023</span>
      </PageContentCover>
    </footer>
  );
};
