import { style } from "@vanilla-extract/css";
import { vars } from "../../index.css";

export const sliderContainerStyle = style({
  width: "200px",
  margin: "0 auto",
  textAlign: "center",
});

export const titleStyle = style({
  color: "#242628",
  fontWeight: 700,
  fontSize: "0.875rem",
  lineHeight: "22px",
  margin: "0"
});

export const subtitleStyle = style({
    fontSize: "0.75rem",
    fontWeight: 700,
    color: vars.color.primary,
    margin: "0.375rem 0",
    lineHeight: "16px"
})
