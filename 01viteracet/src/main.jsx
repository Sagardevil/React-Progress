import React from "react";
import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chai from "./Chai.jsx";

import App from "./App.jsx";
const aa = (
  <a href="https://google.com" target="blank">
    CLick
  </a>
);

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google"
);

createRoot(document.getElementById("root")).render(<App />);
