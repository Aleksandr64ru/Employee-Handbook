import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App";


const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />)