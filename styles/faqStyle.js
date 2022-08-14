import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme)=>{
  return {
  rootContainer: {
    fontFamily: "Open Sans",
    backgroundColor: "#FCFCFC",
    height: "100vh",
    display: "flex",
  },
  innerCont: {
    padding: "10%",
    color: "#7428EA",
    overflow: "scroll",
    [theme.breakpoints.down('sm')]:{
      padding: "5%",
    },
    "&::-webkit-scrollbar": {
        display: "none",
    }
  },
  innerCont2: {
    color: "white",
    overflow:"hidden",
    position:"relative",
  },
  typoheading1: {
    margin: "0px",
    fontSize: "64px",
    fontWeight: "700",
    [theme.breakpoints.down('sm')]:{
        display: "none",
    },
  },
  typoheading2: {
    margin: "0px",
    fontSize: "32px",
    fontWeight: "700",
    [theme.breakpoints.down('sm')]:{
        fontSize:"26px",
    },
  },
  typoheading3: {
    margin: "0px",
    fontSize: "18px",
    [theme.breakpoints.down('sm')]:{
      display:"none",
    },
   },
  bullets: {
    cursor: "pointer",
    color: "#FF5F98",
    fontSize:"24px",
    [theme.breakpoints.down('sm')]:{
      fontSize:"16px",
    }, 
  },
  bulletText: {
    fontWeight: "600",
    fontSize:"24px",
    lineHeight: "36px",
    color: "#7428EA",
    [theme.breakpoints.down('sm')]:{
      fontSize:"20px",
    }, 
  },
  hiddenText:{
    fontWeight: "400",
    fontSize:"18px",
    lineHeight: "30px",
    color:"black",
    letterSpacing: "-0.015em",
    [theme.breakpoints.down('sm')]:{
      fontSize:"16px",
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
    top:"0px",
    left:"0px",
    zIndex: "1",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down('sm')]:{
      padding:"50px",
      width: "210px",
      height: "210px",
      textAlign: "left",
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
    [theme.breakpoints.down('sm')]:{
      width: "210px",
      height: "210px",
      top: "51px",
      left: "107px",
    },
  }
}})

export { useStyles };
