import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CurrencyProvider } from "./components/context/Currency";
import "react-alice-carousel/lib/alice-carousel.css";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    mode: "dark",
  },
});
root.render(
  <React.StrictMode>
    <CurrencyProvider>
      <ThemeProvider theme={darkTheme}>
      <App />
      </ThemeProvider>
    </CurrencyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
