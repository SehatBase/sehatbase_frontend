import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import data from "../data";
import List from "./list";
import {useStyles} from "../styles/faqStyle";
import useMediaQuery from "@mui/material/useMediaQuery";


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
          question={item.question}
          text={item.text}
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
              <Typography className={classes.typoheading3}>Loreesssm Ipsum Dolaor sit amet consectetur adipisicing elit. Quisquam, quidem.</Typography>
            </div>
            <div className={classes.circle2}></div>
          </Container>
        </Container>
      </div>
    );
  }