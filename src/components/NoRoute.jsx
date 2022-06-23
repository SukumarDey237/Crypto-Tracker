import { Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: 250,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 10,
  },
  button: {
    border: "1px solid #fff",
    textTransform: "none",
  },
}));
const NoRoute = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.text}>There is nothing here !</h3>
      <Button className={classes.button} variant="outlined" color="info">
        <Link to="/">Goto Home Page</Link>
      </Button>
    </div>
  );
};

export default NoRoute;
