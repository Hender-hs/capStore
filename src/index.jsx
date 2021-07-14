import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Providers from "./providers";
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
      <BrowserRouter>
        <App />
        <GlobalStyle />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
