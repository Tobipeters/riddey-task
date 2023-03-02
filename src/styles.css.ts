import { style } from "@vanilla-extract/css";
import { vars, flexCenter } from "./index.css";

export const appStyle = style({
  backgroundColor: "#808080",
  width: "100%",
  height: "100vh",
  ...flexCenter,
});

export const cardStyle = style({
  backgroundColor: vars.color.secondary,
  fontFamily: vars.font.name,
  padding: "1.875rem 1.25rem",
  boxShadow: "0px 10px 40px rgba(0, 0, 0, 0.12)",
  width: "320px",
  "@media":{
    "screen and (max-width: 350px)":{
      width: "280px",
    }
  }
});

export const iconHolderStyle = style({
  width: "86px",
  height: "86px",
  border: "1px solid #D8D9D9",
  margin: "0 auto",
  ...flexCenter,
});

export const titleStyle = style({
  margin: "0.875rem 0.95rem 0.375rem",
  fontWeight: 700,
  fontSize: "1.25rem",
  lineHeight: "24px",
  textAlign: "center",
  color: vars.color.typography.title,
  "@media":{
    "screen and (max-width: 350px)":{
      margin: "0.875rem 0 0.375rem",
    }
  }
});

export const detailStyle = style({
  color: vars.color.typography.para,
  textAlign: "center",
  fontSize: "0.875rem",
  fontWeight: 400,
  lineHeight: "22px",
  margin: "0",
});
