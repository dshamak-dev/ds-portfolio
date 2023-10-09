import classNames from "classnames";
import React, { useMemo, useRef, useState } from "react";
import { Image } from "src/components/atoms/Image";

export const SpriteImage = ({
  spriteScale = [1, 1],
  spritePosition,
  className = null,
  src,
  ...props
}) => {
  const [el, setEl] = useState(null);
  const spriteStyle = useMemo(() => {
    const width = el?.offsetWidth || 0;
    const height = width;
    const offsetX = width * spritePosition[0];
    const offsetY = height * spritePosition[1];

    return {
      minHeight: `${width}px`,
      backgroundSize: `${width * spriteScale[0]}px ${height * spriteScale[1]}px`,
      backgroundImage: `url(${src})`,
      backgroundPosition: `-${offsetX}px -${offsetY}px`,
    };
  }, [spritePosition, el]);

  return (
    <div ref={(el) => setEl(el)} style={spriteStyle} className={classNames("", className)}>
      <Image {...props} src={src} className="hidden" />
    </div>
  );
};
