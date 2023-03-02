import { style } from "@vanilla-extract/css";
import { vars, flexCenter } from "../../index.css";

const opacityForAll = {
  filter: "alpha(opacity=40)", // IE 5-7
  opacity: "0.4",
};

export const buttonStyle = style({
  backgroundColor: vars.color.primary,
  color: vars.color.secondary,
  height: "46px",
  width: "100%",
  fontSize: "0.875rem",
  fontWeight: 700,
  transition: "all 0.2s ease",
  border: "none",
  cursor: "pointer",
  ...flexCenter,
  selectors: {
    "&:hover": {
      backgroundColor: "#b55147",
    },
    "&:active": {
      backgroundColor: "#883d35",
    },
    "&:disabled": {
      ...opacityForAll,
    },
    "&[disabled]": {
      ...opacityForAll,
    },
  },
});
