import classNames from "classnames";
import React, { FC, useRef, useState, useMemo, useEffect } from "react";
import "./marquee.css";

const PX_PER_SECOND = 100;

export const Marquee: FC<any> = ({
  direction = "left",
  children,
}) => {
  const ref = useRef(null);
  const [contentElem, setContentElem] = useState(null);

  const contentWidth = useMemo(() => {
    const rects = contentElem?.getBoundingClientRect();

    if (rects == null) {
      return 0;
    }

    return rects.width;
  }, [contentElem]);

  const duration = Math.floor(contentWidth / PX_PER_SECOND);

  return (
    <div
      ref={ref}
      style={{
        "--marquee-duration": `${duration}s`,
      } as any}
      className={classNames(
        "marquee w-full h-fit relative overflow-hidden",
      )}
    >
      <div
        ref={(elem) => setContentElem(elem)}
        className={classNames(
          "marquee-content relative flex w-fit"
        )}
      >
        {[children, children]}
      </div>
    </div>
  );
};
