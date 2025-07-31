import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     xs: true; // Keep the existing breakpoints
//     sm: true;
//     md: true;
//     lg: true;
//     xl: true;
//     xxl: true; // Add your custom breakpoint
//     xxxl: true; // Add another custom breakpoint
//   }
// }

const typography = {
  fontFamily: "Inter, serif",
};

export const lightTheme = createTheme({
  typography,
  palette: {
    mode: "light",
    primary: {
      main: "#10768a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f99d1c",
      dark: "#e08b18",
      contrastText: "#ffffff",
    },
    error: {
      main: "#ba1a1a",
    },
    action: {
      selected: "#d7f1ff",
    },
    background: {
      default: "#f7f8fc",
      paper: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  typography,
  palette: {
    mode: "dark",
    primary: {
      main: "#80d2e8", // A softer, calming blue for the main color
    },
    secondary: {
      main: "#adccd5", // Warm accent color for contrast
    },
    error: {
      main: "#ffb4ab",
    },
    background: {
      default: "#121212",
      paper: "#1E1E1E",
    },
  },
});
