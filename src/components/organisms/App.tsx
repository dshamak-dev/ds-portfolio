import React from "react";
import { AppHeader } from "../molecules/AppHeader";
import { AppRouter } from "../molecules/AppRouter";
import { PageHead } from "../atoms/PageHead";
import { AppFooter } from "../molecules/AppFooter";

export const App = () => {
  return (
    <>
      <PageHead title="Home">
        <link rel="canonical" href="http://dshamak.com/projects" />
      </PageHead>
      <AppHeader />
      <AppRouter />
      <AppFooter />
    </>
  );
};
