import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import List from "../comps/list";
import data from "../data";
import Box from "@material-ui/core/Box";
import zIndex from "@material-ui/core/styles/zIndex";

const useStyles = makeStyles({
  rootContainer: {
    fontFamily: "Open Sans",
    backgroundColor: "#FCFCFC",
    height: "100vh",
    display: "flex",
  },
  innerCont: {
    padding: "10%",
    color: "#7428EA",
  },
  innerCont2: {

    color: "white",
  },
  typoheading1: {
    margin: "0px",
    fontSize: "64px",
    fontWeight: "700",
  },
  typoheading2: {
    margin: "0px",
    fontSize: "32px",
    fontWeight: "700",
  },
  typoheading3: {
    margin: "0px",
    fontSize: "18px",
   },
  bullets: {
    cursor: "pointer",
  },
  circle: {
    backgroundColor: "#7428EA",
    borderRadius: "50%",
    padding: "100px",
    width: "672px",
    height: "643px",
    position: "absolute",
    boxSizing: "border-box",
    top:"51px",
    left:"709px",
    zIndex: "1",
  },
  circle2: {
    backgroundColor: "#7428EA7D",
    borderRadius: "50%",
    padding: "100px",
    width: "672px",
    height: "643px",
    position: "absolute",
    boxSizing: "border-box",
    top: "178px",
    left: "980px",
  }
});

export default function Home() {
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
        <Container className={classes.innerCont}>{list}</Container>
        <Container className={classes.innerCont2}>
          <div className={classes.circle}>
            <Typography className={classes.typoheading2}>FAQs</Typography>
            <Typography className={classes.typoheading1}>Frequently Asked Questions</Typography>
            <Typography className={classes.typoheading3}>Loresm Ipsum Dolaor sit amet consectetur adipisicing elit. Quisquam, quidem.</Typography>
          </div>
          <div className={classes.circle2}></div>
        </Container>
      </Container>
    </div>
  );
}
