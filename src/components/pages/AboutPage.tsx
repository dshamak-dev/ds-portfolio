import React, { FC } from 'react';
import { PageHead } from '../atoms/PageHead';

interface AboutPageProps {}

export const AboutPage: FC<AboutPageProps> = () => {
  return (
    <>
      <PageHead title="About" />
      <main></main>
    </>
  );
};
