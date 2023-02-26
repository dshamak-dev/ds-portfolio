import React, { FC } from "react";

export const AppFooter: FC<any> = () => {
  return (
    <footer className="absolute bottom-0 z-10 px-[3rem] py-[1rem] flex justify-between text-[0.8rem] text-grey_light">
      <span data-copyright="&#169;">last update in February, 2003</span>
    </footer>
  );
};
