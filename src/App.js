import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import NoRoute from "./components/NoRoute";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    minHeight: "100vh",
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
