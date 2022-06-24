// import {
//   Container,
//   createTheme,
//   LinearProgress,
//   makeStyles,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   ThemeProvider,
// } from "@material-ui/core";
// import { Pagination } from "@material-ui/lab";
import { Container, createTheme, LinearProgress, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CoinList } from "../config/api";
import { useCurrency } from "./context/Currency";

const useStyles = makeStyles({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "#EEBC1D",
    },
  },
});

const CryptoTable = () => {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol, numberWithCommas } = useCurrency();
  const navigate = useNavigate();

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      type: "dark",
    },
  });

  const fetchcrypto = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCrypto(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchcrypto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  const handleSearch = () => {
    return crypto.filter((coin) => {
      return (
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
    });
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Container>
          <TextField
            label="Search for a Crypto Currency.."
            variant="outlined"
            style={{ margin: "20px 0", width: "100%" }}
            onChange={(e) => setSearch(e.target.value)}
          ></TextField>
          <TableContainer component={Paper}>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "#EEBC1D" }} />
            ) : (
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                  <TableRow>
                    {[
                      "Crypto Currency",
                      "Price",
                      "24h Change",
                      "Market Cap",
                    ].map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "800",
                        }}
                        key={head}
                        align={head === "Crypto Currency" ? "inherit" : "right"}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      const profit = row.price_change_percentage_24h >= 0;
                      return (
                        <TableRow
                          onClick={() => {
                            navigate(`/coins/${row.id}`);
                          }}
                          className={classes.row}
                          key={row.name}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <img
                              src={row?.image}
                              alt={row.name}
                              height="50"
                              style={{ marginBottom: 10 }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.symbol}
                              </span>
                              <span style={{ color: "darkgrey" }}>
                                {row.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            {symbol}
                            {numberWithCommas(row.current_price.toFixed(2))}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 400,
                            }}
                          >
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                          </TableCell>
                          <TableCell align="right">
                            {symbol}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}
                            M
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>
          <Pagination
            count={Math.ceil(handleSearch().length / 10)}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CryptoTable;
