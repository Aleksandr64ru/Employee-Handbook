import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";

const appElement = document.getElementById("app") as HTMLElement; 

const app = ReactDOMClient.createRoot(appElement);

app.render(<App />);