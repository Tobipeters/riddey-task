import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme("#root", {
  color: {
    primary: "#E26559",
    secondary: "#ffffff",
    typography: {
      title: "#3C4043",
      para: "#636669",
    },
  },
  font: {
    name: "Montserrat",
  },
});

// Reuseablee object
export const flexCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
