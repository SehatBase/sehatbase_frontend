import { makeStyles } from "@material-ui/core";
import bg from "../public/contactBg.png";

const useStyles = makeStyles((theme) => {
  return {
    rootContainer: {
      fontFamily: "Open Sans",
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        height: "auto",
      },
    },
    contactContainer: {
      textAlign: "left",
      padding: "5%",
    },
    contactHeading: {
      fontSize: "36px",
      fontWeight: "700",
      color: "#7428EA",
      textDecoration: "overline",
      margin: "2%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    contactSubHeading: {
      fontSize: "64px",
      fontWeight: "700",
      color: " #FCFCFC",
      margin: "2%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
      },
    },
    normalText: {
      fontSize: "24px",
      fontWeight: "400",
      color: " #FCFCFC",
      margin: "2%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
      },
    },
    icon: {
      color: " #7428EA",
      fontSize: "75px",
      margin: "0 5% 2% 2%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "50px",
      },

    },
    iconCont: {
      display: "flex",
    },
    iconBox:{
      [theme.breakpoints.down("sm")]: {
        marginTop:"30px"
      },
    }
    ,
    paper: {
      width: "550px",
      height: "auto",
      borderRadius: "35px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      }
    },
    formCont: {
      marginTop: "5%",
      flexBasis: "50%",
    },
  };
});

export { useStyles };
