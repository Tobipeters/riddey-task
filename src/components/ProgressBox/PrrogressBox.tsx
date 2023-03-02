import * as React from "react";
import {
  titleStyle,
  sliderContainerStyle,
  subtitleStyle,
} from "./ProgressBox.css";
import { ProgressBar } from "..";

interface IProps {
  progressValue: number;
  maxValue: number;
}

export const ProgressBox: React.FC<IProps> = ({ progressValue, maxValue }) => {
  return (
    <section className={sliderContainerStyle}>
      <h5 className={titleStyle}>Current usage</h5>
      <label className={subtitleStyle}>
        {progressValue} out of 10 boards in use
      </label>

      <ProgressBar value={progressValue} max={maxValue} />
    </section>
  );
};
