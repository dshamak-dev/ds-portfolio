import { PROJECTS } from "../../constants/project.const";
import React, { FC, useEffect, useMemo, useState } from "react";
import { PageHead } from "../atoms/PageHead";
import { ProjectPreview } from "../molecules/project/ProjectPreview";

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

export const ProjectsPage: FC<ProjectsPageProps> = () => {
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
  }, []);

  return (
    <>
      <PageHead title="Projects" />
      <main className="h-screen w-screen overflow-hidden p-[3rem] grid grid-rows-[1fr_auto]">
        <section className="h-full flex flex-col justify-between grid grid-cols-[1fr_3fr] gap-[2rem] items-center">
          <div
            id="project-info-content"
            className="relative z-10 flex items-center"
          >
            <div className="">
              <h2 className="text-[2.4rem] font-semibold">Lorem Ipsum</h2>
              <h3 className="text-[1.3rem] text-grey_light">Ipsun dolor est</h3>
            </div>
          </div>
          <div
            id="project-preview-content"
            className="relative z-0 h-full items-center"
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
          className="relative z-10 flex justify-between text-[1.2rem]"
        >
          <span>dshamak.com</span>
          <span>{projectNum}</span>
        </section>
      </main>
    </>
  );
};
