import classNames from 'classnames';
import React, { FC } from 'react';
import { useDevice } from '../../hooks/useDevice';

export const PageContentCover: FC<any> = ({ fluid = false, children, className, ...other }) => {
  const { mobile } = useDevice();

  return <div {...other} className={classNames(className, {
    [ mobile ? "p-[1rem]" : "p-[3rem]"]: !fluid
  })}>{children}</div>
};