import classNames from "classnames";
import React from "react";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import { Image } from "src/components/atoms/Image";
import {
  landingClients,
  landingWorks,
} from "src/namespaces/landing/landing.config";

const gridClassName = classNames({
  "grid grid-cols-[4fr_5fr] px-8 gap-20": !isMobile,
  "flex flex-col px-4 gap-4 text-center": isMobile,
});

export const LandingPage = () => {
  return (
    <div className="py-8">
      <Helmet>
        <title>Dmitry Shamak </title>
        <meta
          name="description"
          content="React developer | JavaScript | TypeScript | Front-End | Unity 3D"
        />
      </Helmet>
      <article className={classNames("flex flex-col gap-8")}>
        <section
          className={classNames(gridClassName, {
            "flex flex-col-reverse": isMobile,
          })}
        >
          <div>
            <h1 className="mb-4">
              Bring <span className="text-highlight">your ideas</span> to life
              with my help
            </h1>
            <p className="mb-8">
              Focusing on details and understanding the goals are the keys to a
              idea implementation
            </p>
            <button>contact me</button>
          </div>
          <div>
            <Image
              alt="profile image"
              aria-label="shamak dmitry photo"
              src="/uploads/profile-image.webp"
              className={classNames(
                "rounded-full mx-auto max-w-full w-40 md:w-full md:max-w-[40vw]"
              )}
            />
          </div>
        </section>
        <section className={classNames(gridClassName)}>
          <div>
            <h2 className="mb-8">About me</h2>
            <p className="text-grey_light">
              I am experienced React developer with over 9 years of hands-on
              practice in crafting robust, efficient, and maintainable web
              applications. I am passionate about building user-friendly
              interfaces and scalable applications that meet the diverse needs
              of clients and end-users.
            </p>
          </div>
          <div className="content-separator">
            <h3>Skills</h3>
            <ul>
              <li>react js</li>
              <li>html, css</li>
              <li>javascript, typescript</li>
              <li>Unity3d, C#</li>
            </ul>
          </div>
        </section>
        <section className={classNames(gridClassName)}>
          <div>
            <h2 className="mb-8">Works</h2>
            <p className="text-grey_light flex flex-wrap gap-4">
              {landingClients.map(({ url, text }, ind) => {
                return (
                  <a key={ind} target="_blank" href={url} aria-label={text} className="hover:text-highlight">
                    {text}
                  </a>
                );
              })}
            </p>
          </div>
          <div className="content-separator">
            <ul className="grid grid-cols-3 gap-4">
              {landingWorks.map((it, ind) => {
                return (
                  <li key={ind} className="w-full">
                    <a
                      href={it.url}
                      aria-label={it.text}
                      className="block w-full min-h-fit h-20 text-center bg-black opacity-50 hover:opacity-100"
                    >
                      {it.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
};
