import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.jsx";
import "./styles/index.css";
import { LanguageProvider } from "./context/LanguageProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      basename={
        import.meta.env.PROD ? "/aleroses.github.io/" : ""
      } /* basename="/aleroses.github.io/" */
    >
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
