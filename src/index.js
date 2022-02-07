import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
//standard index.js file
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
