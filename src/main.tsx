import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <ThemeProvider theme={theme}> */}
      <HashRouter>
        <App />
      </HashRouter>
      {/* </ThemeProvider> */}
    </ThemeProvider>
  </StrictMode>
);
