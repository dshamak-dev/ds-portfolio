import { PROJECTS } from "../../constants/project.const";
import React, { FC, useEffect, useMemo, useState } from "react";
import { PageHead } from "../atoms/PageHead";
import { ProjectPreview } from "../molecules/project/ProjectPreview";
import { useDevice } from "../../hooks/useDevice";
import classNames from "classnames";
import { PageContentCover } from "../atoms/PageContentCover";
import { appStore } from "../../stores/AppStore";
import { THEME_TYPE } from "../../constants/themes.const";
import { useTheme } from "../../hooks/useTheme";
import { observer } from "mobx-react";

interface ProjectsPageProps {}

const PROJECTS_LENGTH = PROJECTS.length;
const EVENT_THRESHOLD = 500;

const getDirectionIndex = (current: number, direction: number) => {
  const nextIndex = current + direction;

  if (nextIndex < 0) {
    return PROJECTS_LENGTH - 1;
  }

  if (nextIndex >= PROJECTS_LENGTH) {
    return 0;
  }

  return nextIndex;
};

export const ProjectsPage: FC<ProjectsPageProps> = observer(() => {
  const { mobile } = useDevice();
  const { isDarkTheme } = useTheme();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectList = useMemo(() => {
    return PROJECTS.map((it: any, ind: number) => {
      const active = ind === activeProjectIndex;
      const previous = ind === getDirectionIndex(activeProjectIndex, -1);
      const next = ind === getDirectionIndex(activeProjectIndex, 1);

      return { ...it, active, previous, next };
    });
  }, [PROJECTS, activeProjectIndex]);
  const projectNum = useMemo(() => {
    const num = activeProjectIndex + 1;
    return `${num < 10 ? "0" : ""}${num}`;
  }, [activeProjectIndex]);
  const activeProject = useMemo(
    () => PROJECTS[activeProjectIndex],
    [activeProjectIndex]
  );
  const targetLink = useMemo(() => {
    if (activeProject.links.length === 0) {
      return null;
    }

    return activeProject.links[0];
  }, [activeProject]);

  useEffect(() => {
    appStore.setPageTheme(activeProject.theme as THEME_TYPE);
  }, [activeProject]);

  const handleScroll = (direction: number) => {
    setActiveProjectIndex((current) => getDirectionIndex(current, direction));
  };

  useEffect(() => {
    let lastTrigger = Date.now();

    document.addEventListener("keydown", (event) => {
      const current = Date.now();
      const msPast = current - lastTrigger;

      if (msPast < EVENT_THRESHOLD) {
        return;
      }

      lastTrigger = current;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown": {
          handleScroll(1);
          break;
        }
        case "ArrowLeft":
        case "ArrowUp": {
          handleScroll(-1);
          break;
        }
      }
    });

    document.addEventListener("wheel", (event) => {
      const current = Date.now();
      const msPast = current - lastTrigger;

      if (msPast < EVENT_THRESHOLD) {
        return;
      }

      lastTrigger = current;

      handleScroll(event.deltaY > 0 ? 1 : -1);
    });

    let touchPoints: any = [];

    document.addEventListener("touchmove", (event) => {
      touchPoints.push(event);
    });
    document.addEventListener("touchend", (event) => {
      if (touchPoints == null || touchPoints.length === 0) {
        return;
      }

      const first = touchPoints[0].touches[0];
      const last = touchPoints[touchPoints.length - 1].touches[0];

      const directionX = first.pageX - last.pageX;
      const directionY = first.pageY - last.pageY;
      let direction = 0;

      if (directionX !== 0) {
        direction = directionX > 0 ? 1 : -1;
      } else if (directionY !== 0) {
        direction = directionY > 0 ? 1 : -1;
      }

      handleScroll(direction);
      touchPoints = [];
    });
  }, []);

  return (
    <div
      className={classNames(
        "page",
        isDarkTheme ? "text-white bg-blue_dark" : "text-black bg-white"
      )}
    >
      <PageHead title="Projects" />
      <PageContentCover
        fluid={mobile}
        className={classNames(
          "transition-all duration-500",
          "h-screen w-screen overflow-hidden grid grid-rows-[1fr_auto]"
        )}
      >
        <section
          className={classNames(
            "relative h-full w-full",
            mobile
              ? "flex items-center"
              : "grid grid-cols-[1fr_3fr] gap-[2rem] items-center"
          )}
        >
          <div
            id="project-info-content"
            className={classNames("relative z-10 flex items-center", {
              "px-[1rem]": mobile,
            })}
          >
            <div className="drop-shadow-md">
              <h2
                className={classNames("text-[2.4rem] font-semibold uppercase")}
              >
                {activeProject.title}
              </h2>
              {activeProject.subtitle != null && (
                <h3 className={classNames("text-[1.3rem]")}>
                  {activeProject.subtitle}
                </h3>
              )}
            </div>
          </div>
          <div
            id="project-preview-content"
            className={classNames(
              "block z-0 w-full h-full items-center",
              mobile ? "absolute top-0 left-0" : "relative"
            )}
          >
            {projectList.map((it: any, ind: number) => {
              return (
                <ProjectPreview key={ind} data-index={ind} {...(it as any)} />
              );
            })}
          </div>
        </section>
        <section
          id="project-additional"
          className={classNames(
            "w-full z-10 flex justify-between text-[1.2rem]",
            mobile ? "absolute bottom-[3rem] px-[1rem]" : "relative"
          )}
        >
          {targetLink != null ? (
            <a href={targetLink.url} target="_blank" className="hover:underline">
              {targetLink.text}
            </a>
          ) : (
            <span></span>
          )}
          <span>{projectNum}</span>
        </section>
      </PageContentCover>
    </div>
  );
});
