import { style } from "@vanilla-extract/css";
import { vars } from "../../index.css";

export const progressStyle = style({
  width: "100%",
  margin: "0.3rem 0 1.875rem",
  border: "none",
  height: "4px",
  display: "flex",
  appearance: "none",
  transition: "width  .2s linear !important",
  WebkitTransition: "width .2s linear !important",

  selectors: {
    "&::-webkit-progress-bar ": {
      background: "#EBECEC",
      transition: "width  .2s linear !important",
      WebkitTransition: "width .2s linear !important",
    },
    "&::-webkit-progress-value": {
      backgroundColor: vars.color.primary,
      transition: "all .2s linear",
      WebkitTransition: "all .2s linear",
    },
    // Firefox fallback
    "&::-moz-progress-bar": {
      backgroundColor: vars.color.primary,
      transition: "width  .2s linear !important",
      WebkitTransition: "width .2s linear !important",
    },
    "&::-ms-fill": {
      backgroundColor: vars.color.primary,
    },
  },
});
