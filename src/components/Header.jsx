import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useCurrency } from "./context/Currency";

const useStyles = makeStyles(() => ({
  title: {
    color: "#EEBC1D",
    fontWeight: 800,
    flex: "1",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { currency, setCurrency } = useCurrency();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              className={classes.title}
              onClick={() => navigate("/")}
              variant="h6"
              style={{ fontFamily: "Montserrat" }}
            >
              Crypto Tracker
            </Typography>
            <Select
              variant="outlined"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                height: 40,
                width: 100,
                marginRight: 15,
                fontFamily: "Montserrat",
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
