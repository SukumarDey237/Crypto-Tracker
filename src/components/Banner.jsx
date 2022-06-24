// import { Container, Typography, makeStyles } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Carousel from "./Carousel";
const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(https://bit.ly/3LEns0v)",
    backgroundSize: "cover"
  },
  overlay: {
    height: 400,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  }
}));
const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <div className={classes.overlay}>
        <Container className={classes.bannerContent}>
          <div className={classes.tagline}>
            <Typography
              variant="h2"
              style={{
                fontWeight: 800,
                marginBottom: 15
              }}
            >
              Crypto Tracker
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "darkgrey"
              }}
            >
              Get all the info regarding your favorite Crypto Currency
            </Typography>
          </div>
          <Carousel />
        </Container>
      </div>
    </div>
  );
};

export default Banner;
