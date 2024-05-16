import React from "react";
import { SSRProvider } from "@salutejs/plasma-web";
import { GlobalStyle } from "./components/GlobalStyle.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/global.module.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SSRProvider>
      <App />
      <GlobalStyle />
    </SSRProvider>
    ,
  </React.StrictMode>
);
