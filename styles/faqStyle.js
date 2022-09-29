import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    rootContainer: {
      backgroundColor: "#FCFCFC",
      height: "100vh",
      display: "flex",
      overflow: "hidden",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column-reverse",
      },
    },
    innerCont: {
      padding: "10%",
      color: "#7428EA",
      overflow: "scroll",
      width: "55%",
      [theme.breakpoints.down("sm")]: {
        padding: "5%",
        height: "150%",
      },
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    innerCont2: {
      color: "white",
      [theme.breakpoints.down("sm")]: {
        overflow: "hidden",
        display:"flex",
        alignItems:"center",
        marginTop:"10%"
      },
      position: "relative",
    },
    typoheading1: {
      margin: "0px",
      fontSize: "64px",
      fontWeight: "700",
      [theme.breakpoints.down("sm")]: {
        color: "#7428EA",
        fontSize: "24px",
      },
    },
    typoheading2: {
      margin: "0px",
      fontSize: "32px",
      fontWeight: "700",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    typoheading3: {
      margin: "0px",
      fontSize: "18px",
      [theme.breakpoints.down("sm")]: {
        color: "black",
        fontSize: "14px",
      },
    },
    bullets: {
      cursor: "pointer",
      color: "#FF5F98",
      fontSize: "28px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
      },
    },
    bulletText: {
      fontWeight: "600",
      fontSize: "24px",
      lineHeight: "36px",
      color: "#7428EA",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
      },
    },
    hiddenText: {
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "30px",
      color: "black",
      letterSpacing: "-0.015em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    circle: {
      backgroundColor: "#7428EA",
      borderRadius: "50%",
      padding: "120px",
      width: "672px",
      height: "643px",
      position: "absolute",
      boxSizing: "border-box",
      top: "0px",
      left: "0px",
      zIndex: "1",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "0px",
        padding: "5%",
        margin: "20% 0% 20% 0%",
        backgroundColor: "transparent",
        boxShadow: "none",
      },
    },
    circle2: {
      backgroundColor: "#7428EA7D",
      borderRadius: "50%",
      width: "672px",
      height: "643px",
      position: "absolute",
      boxSizing: "border-box",
      top: "107px",
      left: "271px",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    listDiv: {
      display: "flex",
    },
    listIcon: {
      margin: "4% 3%",
      padding: "2% 0%",
      [theme.breakpoints.down("sm")]: {
        margin: "5% 3%",
      },
    },
  };
});

export { useStyles };
