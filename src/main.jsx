import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globle.css";
import { Analytics } from "@vercel/analytics/react"


import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>
);
