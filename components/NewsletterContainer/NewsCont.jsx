import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, FormGroup } from "@mui/material";
import { useStyles } from "../../styles/modalStyle";


export default function NewsCont(props) {
  const classes=useStyles()
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };
  return (
    <Container className={classes.innerContainer} maxWidth={"sm"}>
      <Button className={classes.closeButton} onClick={()=>props.handleClose()} >
        X
      </Button>
      <Container className={classes.innerContainer1}>
        <div className={classes.textDiv}>
          <Typography className={classes.typo3}>
            NewsLetter Subscription
          </Typography>
          <Typography className={classes.typo2}>
            Get Latest News And Updates In Your Inbox.
          </Typography>
        </div>
        <div className={classes.inputDiv}>
          <FormGroup row>
            <TextField
              className={classes.textField}
              variant="outlined"
              value={email}
              onChange={handleChange}
            />
            <Button onClick={handleSubmit} variant="contained" disableElevation>
              SUBSCRIBE
            </Button>
          </FormGroup>
        </div>
      </Container>
    </Container>
  );
}
