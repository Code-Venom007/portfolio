// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: "#8BC83F",
    },
    secondary: {
      main: "#ff4081",
    },
    grey: {
      main: "#F5F4F8",
    },
    text: {
      main: "#F5F4F8",
      highlight: "#234F68",
      light: "#FFFFFF"
    },
    blue: {
      main: "#003087",
      highlight: "#012169",
      light: "#009CDE"
    },
    background: {
      grey: "#A1A5C1",
      highlight: "#234F68",
      light: "#e8e5ef",
      dark: ""
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif", // Customize font family
    fontSize: 16, // Customize default font size
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    }
  }
  // Add more customizations as needed
});

export default theme;
