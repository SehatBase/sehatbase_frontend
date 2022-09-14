import React from "react";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from "../../styles/modalStyle";
import { TextField, FormGroup } from "@mui/material";
import { useEffect } from "react";

export default function Newsletter() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 10000);
  }, []);

  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <div>
      <Button className={classes.none}></Button>
        <Modal open={open} onClose={handleClose}>
            <Container className={classes.innerContainer}>
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
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    disableElevation
                  >
                    SUBSCRIBE
                  </Button>
                </FormGroup>
              </div>
            </Container>
        </Modal>
    </div>
  );
}
