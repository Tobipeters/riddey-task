import * as React from "react";
import { progressStyle } from "./ProgressBar.css"

interface IProps {
  value: string;
  max: number;
}

export const ProgressBar = ({ value, max }) => {
  return (
    <progress
      value={value}
      max={max}
      // onChange={(e) => handleChange(e)}
      className={progressStyle}
    />
  );
};
