import * as React from "react";
import {
  titleStyle,
  sliderContainerStyle,
  subtitleStyle,
} from "./sliderBox.css";
import { Slider } from "..";

interface IProps {
  progressValue: number;
  maxValue: number;
}

export const SliderBox: React.FC<IProps> = ({ progressValue, maxValue }) => {
  return (
    <section className={sliderContainerStyle}>
      <h5 className={titleStyle}>Current usage</h5>
      <label className={subtitleStyle}>
        {progressValue} out of 10 boards in use
      </label>

      <Slider value={progressValue} max={maxValue} />
    </section>
  );
};
