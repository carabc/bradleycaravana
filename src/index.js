import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

/*
Colors:
Blue: #193549
Blue Highlight: #1F4662
Blue Highlight2: #234E6D
Blue Dark: #122738
Yellow: #ffc600
Orange: #ff9d00
Hot Pink: #ff0088
Blush Pink: #ff628c
*/
const theme = createTheme({
  palette: {
    primary: {
      main: "#193549", // component color
      type: "#fff", // type color
    },
    secondary: {
      main: "#122738", // body color
    },
    highlight: {
      yellow: "#ffc600", // type highlight
      orange: "#ff9d00", // type highlight
      blueHighlight: "#234E6D",
      blueHighlightSecondary: "#1F4662",
      pink: "#ff0088",
      lightPink: "#ff628c",
    },
    transBg: {
      orange: "rgba(255, 157, 0, 0.1)",
      blue: "rgba(31, 70, 98, 0.1)",
      yellow: "rgba(255, 198, 0, 0.1)",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </ThemeProvider>,
);
