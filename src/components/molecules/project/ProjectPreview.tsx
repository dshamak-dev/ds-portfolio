import classNames from "classnames";
import React, { FC, PropsWithChildren, ComponentProps, useMemo } from "react";

interface IComponent extends PropsWithChildren, ComponentProps<any> {
  data: any[];
  active?: boolean;
  next?: boolean;
  previous?: boolean;
  type?: string;
  previewURL?: string;
}

export const ProjectPreview: FC<IComponent> = ({
  active,
  next,
  previous,
  className,
  type,
  previewURL,
  links = [],
  ...other
}) => {
  const targetLink = useMemo(() => {
    if (links.length === 0) {
      return null;
    }

    return links[0].url;
  }, [links]);

  if (!active && !next && !previous) {
    return null;
  }

  const style = useMemo(() => {
    let translate = "0vw, 0vh, 0";

    if (previous) {
      translate = "-120vw, -120vh, 0";
    } else if (next) {
      translate = "120vw, 120vh, 0";
    }

    return {
      transform: `translate3d(${translate})`,
    };
  }, [previous, next, active]);

  return (
    <div
      style={style}
      className={classNames(
        className,
        "project-preview absolute top-0 left-0 w-full h-full transition-all duration-[1s]"
      )}
    >
      <a
        href={targetLink}
        target="_blank"
        style={{
          backgroundImage: previewURL != null ? `url(${previewURL})` : null,
        }}
        className={classNames(
          className,
          "absolute top-0 left-0 w-full h-full transition-all linear duration-[500ms] bg-no-repeat bg-cover",
          {
            "z-0 bg-center opacity-100": active,
            "z-10 bg-top-left opacity-0": next,
            "z-0 bg-right-bottom opacity-0": previous,
          }
        )}
      ></a>
    </div>
  );
};
