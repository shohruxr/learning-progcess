import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormButton, IconButton } from "./Buttons.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormButton />
    <App />
    <IconButton />
  </StrictMode>,
);
