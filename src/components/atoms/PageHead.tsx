import React, { FC } from "react";
import { Helmet } from "react-helmet";

export const PageHead: FC<any> = ({ title, children }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Dmitry Shamak - {title}</title>
      {children}
    </Helmet>
  );
};
