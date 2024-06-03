import React, { FC } from "react";
import cx from "classnames";

import Icon from "./images/close.svg?react";
import "./style.css";

interface Props {
  className: string; // <---?
  onClick?: () => void;
}

export const Close: FC<Props> = ({ className, onClick }) => (
  <div className={cx("close", className)} onClick={onClick}>
    <Icon className="close--icon" />
  </div>
);
