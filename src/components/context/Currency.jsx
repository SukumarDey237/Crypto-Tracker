import { createContext, useContext, useEffect, useState } from "react";

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <CurrencyContext.Provider
      value={{ currency, setCurrency, symbol, numberWithCommas }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
