import { style } from "@vanilla-extract/css";
import { vars } from "../../index.css";

export const progressStyle = style({
  width: "100%",
  margin: "0.3rem 0 1.875rem",
  border: "none",
  height: "4px",
  display: "flex",
  appearance: "none",
  selectors: {
    "&::-webkit-progress-bar ": {
      background: "#EBECEC",
    },
    "&::-webkit-progress-value": {
      backgroundColor: vars.color.primary,
      transition: "width .2s linear;",
    },
  },
});
