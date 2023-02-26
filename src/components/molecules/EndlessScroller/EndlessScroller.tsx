import classNames from "classnames";
import React, { FC, useRef, useState, useMemo, useEffect } from "react";
import "./endless-scroller.css";

const STEP = 0.3;
const SPEED = 5;
const DELAY = (STEP / SPEED) * 100;

export const EndlessScroller: FC<any> = ({
  direction = "left",
  className,
  children,
  on = "hover",
}) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [isPause, setIsPause] = useState(false);
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const [isReset, setIsReset] = useState(true);
  const { scrollStep, scrollDelay } = useMemo(() => {
    return { scrollStep: isReset ? 0 : STEP, scrollDelay: isReset ? 0 : DELAY };
  }, [isReset]);

  const contentWidth = useMemo(() => {
    const rects = contentRef.current?.getBoundingClientRect();

    if (rects == null) {
      return 0;
    }

    return rects.width;
  }, [contentRef.current]);

  const breakPoint = useMemo(() => {
    return contentWidth / 2;
  }, [contentWidth]);

  const [scrollLeft, setScrollLeft] = useState(0);

  const contentStyle = useMemo(() => {
    const style = {
      "--transition-duration": `${scrollDelay}ms`,
      "--content-offset-x": `${scrollLeft}px`,
    } as any;

    if (direction === "left") {
      style.left = 0;
    } else {
      style.right = `${contentWidth / 2}px`;
    }

    return style;
  }, [scrollLeft, scrollDelay, direction]);

  const handleHorScroll = (offsetStep: number) => {
    setScrollLeft((currentOffset) => {
      let nextOffset = currentOffset + offsetStep;

      if (breakPoint > 1) {
        nextOffset = nextOffset % breakPoint;
      }

      if (direction === "left") {
        setIsReset(currentOffset < nextOffset);
      } else {
        setIsReset(currentOffset > nextOffset);
      }

      return nextOffset;
    });
  };

  useEffect(() => {
    if (!isAutoScroll || isPause) {
      return;
    }

    const directionFactor = direction === "left" ? -1 : 1;
    handleHorScroll(scrollStep * directionFactor);

    const interval = setInterval(() => {
      handleHorScroll(scrollStep * directionFactor);
    }, scrollDelay);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoScroll, scrollStep, scrollDelay, breakPoint, direction]);

  const handleHoverEvent = (e: Event) => {
    setIsAutoScroll(e.type === "mouseleave");
  };

  const handleClickEvent = (e: Event) => {
    setIsAutoScroll((it) => !it);
  };

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    switch (on) {
      case "hover": {
        ref.current.addEventListener("mouseenter", handleHoverEvent);
        ref.current.addEventListener("mouseleave", handleHoverEvent);
        break;
      }
      case "click": {
        ref.current.addEventListener("click", handleClickEvent);
        break;
      }
    }

    return () => {
      switch (on) {
        case "hover": {
          ref.current.removeEventListener("mouseenter", handleHoverEvent);
          ref.current.removeEventListener("mouseleave", handleHoverEvent);
          break;
        }
        case "click": {
          ref.current.removeEventListener("click", handleClickEvent);
          break;
        }
      }
    };
  }, [ref.current, on]);

  useEffect(() => {
    document.addEventListener("visibilitychange", function (event) {
      setIsPause(document.hidden);

      console.log("visible", !document.hidden);
    });
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        "endless-scroller w-full h-fit relative overflow-hidden",
        {
          "cursor-pointer": on === "click",
          grayscale: !isAutoScroll,
        }
      )}
    >
      <div
        ref={contentRef}
        style={contentStyle}
        className={classNames(
          "endless-scroller-content relative flex w-fit"
          // isReset ? "" : "animated"
        )}
      >
        {[children, children]}
      </div>
    </div>
  );
};
