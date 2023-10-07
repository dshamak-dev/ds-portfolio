import React, { useMemo, useRef } from "react";

export const Image = ({ ...props }) => {
  const ref = useRef();
  const { width, height } = useMemo(() => {
    let width = 0;
    let height = 0;

    return { width, height };
  }, [ref.current]);

  return <img ref={ref} width={width} height={height} {...props} />;
};
