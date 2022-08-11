import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import data from "../data";
import List from "./List";


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
      width: "250px",
      height: "250px",
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
      width: "250px",
      height: "250px",
      top: "51px",
      left: "107px",
    },
  }
}})
export default function Faq() {
    const classes = useStyles();
    const [show, setShow] = useState([true, true, false, false]);
    console.log(show);
    function handleClick(id) {
      setShow(
        show.map((item, index) => {
          if (index === id) {
            return !item;
          }
          return item;
        })
      );
    }
    const list = data.map((item) => {
      return (
        <List
          key={item.id}
          id={item.id}
          comment={item.comment}
          show={show[item.id]}
          handleClick={handleClick}
          classes={classes}
        />
      );
    });
    return (
      <div>
        <Container className={classes.rootContainer} maxWidth={false}>
          <Container className={classes.innerCont} maxWidth={false}>{list}</Container>
          <Container className={classes.innerCont2} maxWidth={false}>
            <div className={classes.circle}>
              <Typography className={classes.typoheading2}>— FAQs</Typography>
              <Typography className={classes.typoheading1}>Frequently Asked Questions</Typography>
              <Typography className={classes.typoheading3}>Loresm Ipsum Dolaor sit amet consectetur adipisicing elit. Quisquam, quidem.</Typography>
            </div>
            <div className={classes.circle2}></div>
          </Container>
        </Container>
      </div>
    );
  }