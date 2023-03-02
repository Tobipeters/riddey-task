import { style } from "@vanilla-extract/css";
import { vars, flexCenter } from "../../index.css";

const noMarginInline = {
  display: "inline",
  margin: "0",
};

export const ListContanerStyle = style({
  width: "200px",
  display: "flex",
  flexDirection: "column",
  margin: "1.25rem auto 2rem",
  rowGap: "1.25rem",
  paddingLeft: "0"
});

export const ListSytle = style({
  display: "flex",
  gap: "0 0.375rem",
});

export const checkListStyle = style({
  margin: "0",
  border: "1px solid #D8D9D9",
  borderRadius: "50%",
  minWidth: "22px",
  minHeight: "22px",
  width: "22px",
  height: "22px",
  ...flexCenter,
});

export const textHolderStyle = style({
  fontSize: "0.75rem",
  lineHeight: "16px",
});

export const titleStyle = style({
  fontWeight: 700,
  color: vars.color.typography.title,
  ...noMarginInline,
});

export const detailStyle = style({
  fontWeight: 400,
  color: vars.color.typography.para,
  ...noMarginInline,
});
