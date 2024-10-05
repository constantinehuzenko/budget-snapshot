import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  colorSchemes: {
    dark: true,
    light: false,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#8AF3FF",
    },
    secondary: {
      main: "rgb(14, 46, 229)",
    },
    background: {
      default: "#042A2B",
      paper: "#042A2B",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          textTransform: "none",
          borderRadius: "24px",
          backgroundColor: "#7E7F9A",
          color: "white",
          boxShadow: "none",

          // boxShadow: "rgb(38, 0, 255) 0px 0px 1px 0.3px",
        },
        outlined: {
          textTransform: "none",
          borderRadius: "24px",
        },
      },
    },

    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          position: "fixed",
          bottom: "0",
          right: "0",
          width: "100%",
          borderTop: "1px solid #7E7F9A",
          borderRadius: "24px 24px 0 0",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          // backgroundColor: "rgb(25, 36, 52)",
          height: "24px",
          borderRadius: "24px",
        },
        barColorPrimary: {
          // backgroundColor: "rgba(38, 0, 255, 0.3)",
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);
