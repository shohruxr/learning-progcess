import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormButton, IconButton } from "./Buttons.tsx";
import Props from "./Props";
import Child from "./DivProps.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormButton />
    {/* <App /> */}
    <Props name="Alex" age={24} />
    <Child>
      <div>
        <h2>This is how people make a sheet using React</h2>
        <p>This is just a WORD to check React</p>
      </div>
    </Child>
    <IconButton />
  </StrictMode>,
);
