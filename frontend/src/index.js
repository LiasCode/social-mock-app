import React from "react";
import ReactDom from "react-dom/client";
import "normalize.css";
import App from "./App";

const $domRoot = document.querySelector("#root");
const reactRoot = ReactDom.createRoot($domRoot);

reactRoot.render(<App />);
