import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/globals.css";
import "./styles/responsive.css";
import "./styles/hero.css"
import "./styles/header.css"
import "./styles/regional-map.css"
import "./styles/projects.css"
import "./styles/ProjectDetails.css"
import "./styles/about.css"
import "./styles/experience.css"
import "./styles/contact.css"
import "./styles/footer.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);