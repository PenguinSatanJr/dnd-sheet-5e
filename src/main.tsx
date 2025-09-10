import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
