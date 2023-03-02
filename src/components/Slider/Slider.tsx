import * as React from "react";
import { progressStyle } from "./Slider.css";

interface IProps {
  value: string;
  max: number;
}

export const Slider = ({ value, max }) => {
  return (
    <progress
      value={value}
      max={max}
      // onChange={(e) => handleChange(e)}
      className={progressStyle}
    />
  );
};
