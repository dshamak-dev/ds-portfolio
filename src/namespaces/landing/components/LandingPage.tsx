import classNames from "classnames";
import React, { useCallback } from "react";
import { isMobile } from "react-device-detect";
import { Helmet } from "react-helmet";
import { Image } from "src/components/atoms/Image";
import { SpriteImage } from "src/components/molecules/SpriteImage";
import {
  landingWorks,
  socialLinks,
} from "src/namespaces/landing/landing.config";

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
  interface LinkHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto";
  }
}

const email = "dmitry.shamak.dev@gmail.com";
const emailUrl = `mailto:${email}`;
const profileUrl = "https://www.linkedin.com/in/dmitry-shamak-0b3b5486";

export const LandingPage = () => {
  const renderSocialLink = useCallback(
    ({ name, url, imageUrl, spriteScale, spritePosition, ...other }) => {
      return (
        <a key={name} target="_blank" href={url} aria-label={name} {...other}>
          <SpriteImage
            loading="lazy"
            alt={`${name} icon`}
            aria-label={`${name} icon`}
            src={imageUrl}
            spriteScale={spriteScale}
            spritePosition={spritePosition}
          />
        </a>
      );
    },
    []
  );

  return (
    <div className="py-8">
      <Helmet>
        <title>Dmitry Shamak </title>
        <meta
          name="description"
          content="React developer | JavaScript | TypeScript | Front-End | Unity 3D"
        />
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/uploads/profile-image.webp"
          type="image/webp"
        ></link>
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/uploads/social_icons_sprite.webp"
          type="image/webp"
        ></link>
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/uploads/works_sprite.webp"
          type="image/webp"
        ></link>
      </Helmet>
      <article className={classNames("flex flex-col gap-14 md:gap-8")}>
        <section
          className={classNames({
            "grid grid-cols-[4fr_5fr] px-12 gap-20": !isMobile,
            "flex flex-col-reverse px-6 gap-6 text-center": isMobile,
          })}
        >
          <div>
            <h1 className="mb-4">
              Bring <span className="text-highlight">your ideas</span> to life
              with my help
            </h1>
            <p className="mb-8">
              Focusing on details and understanding the goals are the keys to
              idea implementation
            </p>
            <div
              className={classNames("flex", {
                "flex-col gap-8": isMobile,
                "items-center gap-8": !isMobile,
              })}
            >
              <a
                aria-label="contact me"
                className="button block"
                href={isMobile ? emailUrl : profileUrl}
                target={isMobile ? "_top" : "_blank"}
              >
                <span role="link" aria-label="contact me">
                  contact me
                </span>
              </a>
              <div className="flex justify-center md:justify-start gap-12 md:gap-8">
                {socialLinks.map((it) => {
                  return renderSocialLink({
                    ...it,
                    className: classNames(
                      "relative block hover:text-highlight p-2 box-content",
                      {
                        "w-4 h-4": !isMobile,
                        "w-6 h-6 ": isMobile,
                      }
                    ),
                  });
                })}
              </div>
            </div>
          </div>
          <div className="h-40 min-h-fit md:h-auto">
            <Image
              alt="profile image"
              aria-label="shamak dmitry photo"
              src={
                isMobile
                  ? "/uploads/profile-image_small.webp"
                  : "/uploads/profile-image.webp"
              }
              className={classNames(
                "rounded-full mx-auto max-w-full w-40 md:w-full md:max-w-[40vw]"
              )}
            />
          </div>
        </section>
        <section
          className={classNames({
            "grid grid-cols-[4fr_5fr] px-12 gap-20": !isMobile,
            "flex flex-col px-6 gap-6 text-center": isMobile,
          })}
        >
          <div>
            <h2 className="mb-6 md:mb-8">About me</h2>
            <p className="flex flex-col gap-3 text-grey_light">
              <span>
                I am experienced React developer with over 9 years of hands-on
                practice.
              </span>
              <span>
                Focused on delivery and product values, careful with details and
                code readability, and finding optimal solutions to the task.
              </span>
            </p>
          </div>
          <div
            className={classNames({
              "content-separator": !isMobile,
            })}
          >
            {isMobile ? null : <h3 className="mb-4">Skills</h3>}
            <ul
              className={classNames({
                "custom-list": !isMobile,
                "flex gap-2 flex-wrap justify-center": isMobile,
              })}
            >
              <li>react js</li>
              <li>html css</li>
              <li>javascript typescript</li>
              <li>Unity3d C#</li>
            </ul>
          </div>
        </section>
        <section
          className={classNames("flex flex-col", {
            "px-12": !isMobile,
            "px-6 text-center": isMobile,
          })}
        >
          <div
            className={classNames({
              "grid grid-cols-[4fr_5fr] gap-20": !isMobile,
              "flex flex-col text-center": isMobile,
            })}
          >
            <h2 className="mb-8">Recent Works</h2>
            <div
              className={classNames({
                "content-separator": !isMobile,
              })}
            ></div>
          </div>

          <div>
            <ul
              className={classNames("grid", {
                "grid-cols-3 gap-4": isMobile,
                "grid-cols-5 gap-6": !isMobile,
              })}
            >
              {landingWorks.map(
                (
                  {
                    url,
                    imageUrl,
                    spriteScale,
                    spritePosition,
                    text,
                    className,
                  },
                  ind
                ) => {
                  return (
                    <li key={ind} className="w-full">
                      <a
                        target="_blank"
                        href={url}
                        aria-label={text}
                        className="relative block w-full min-h-fit text-center bg-black opacity-50 hover:opacity-100"
                      >
                        <SpriteImage
                          loading="lazy"
                          alt={`${text} image`}
                          aria-label={`${text} image`}
                          className={classNames("", className)}
                          src={imageUrl}
                          spriteScale={spriteScale}
                          spritePosition={spritePosition}
                        />
                      </a>
                    </li>
                  );
                }
              )}
              <li className="w-full">
                <a
                  target="_blank"
                  href={profileUrl}
                  aria-label="see all"
                  className="relative w-full h-full flex items-center justify-center text-highlight text-center opacity-100"
                >
                  <span>see all</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
      <footer>
        <div
          className={classNames("flex items-center mt-12 text-xs gap-4", {
            "px-12 justify-end": !isMobile,
            "px-6 text-center justify-center": isMobile,
          })}
        >
          {isMobile ? (
            renderSocialLink({
              url: emailUrl,
              name: "email",
              imageUrl: "/uploads/social_icons_sprite.webp",
              spriteScale: [4, 1],
              spritePosition: [3, 0],
              target: "_top",
              className: classNames(
                "relative block hover:text-highlight p-2 box-content",
                {
                  "w-4 h-4": !isMobile,
                  "w-6 h-6 ": isMobile,
                }
              ),
            })
          ) : (
            <a target="_top" href={emailUrl} aria-label={email}>
              <span role="link" aria-label={email}>
                {email}
              </span>
            </a>
          )}
          {socialLinks.map((it) => {
            return renderSocialLink({
              ...it,
              className: classNames(
                "relative block hover:text-highlight p-2 box-content",
                {
                  "w-4 h-4": !isMobile,
                  "w-6 h-6 ": isMobile,
                }
              ),
            });
          })}
        </div>
      </footer>
    </div>
  );
};
