import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import data from "../data";
import List from "./list";
import {useStyles} from "../styles/faqStyle";


export default function Faq() {
    const classes = useStyles();
    const [show, setShow] = useState([true, true, false, false]);
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
          <>
        <div className={classes.rootContainer} >
          <div className={classes.innerCont}>{list}</div>
          <div className={classes.innerCont2}>
            <div className={classes.circle}>
              <Typography className={classes.typoheading2}>— FAQs</Typography>
              <Typography className={classes.typoheading1}>Frequently Asked Questions</Typography>
              <Typography className={classes.typoheading3}>Loreesssm Ipsum Dolaor sit amet consectetur adipisicing elit. Quisquam, quidem.</Typography>
            </div>
            <div className={classes.circle2}></div>
          </div>
        </div>
          </>
    );
  }