import React from "react";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useStyles } from "../../styles/modalStyle";
import { TextField, FormGroup } from "@mui/material";

export default function Newsletter() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = React.useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  }

  return (
    <div>
      <Button onMouseEnter={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container className={classes.modalContainer} maxWidth={false}>
          <Typography className={classes.typo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Typography>
          <Container className={classes.innerContainer} maxWidth={false}>
            <div className={classes.textDiv}>
              <Typography className={classes.typo2}>
                Get Latest News And Updates In Your Inbox.
              </Typography>
              <Typography className={classes.typo3}>
                NewsLetter Subscription
              </Typography>
            </div>
            <div className={classes.inputDiv}>
              <FormGroup row>
                <TextField className={classes.textField} variant="outlined" value={email} onChange={handleChange} />
                <Button onClick={handleSubmit} variant="contained" disableElevation>
                  SUBSCRIBE
                </Button>
              </FormGroup>
            </div>
          </Container>
        </Container>
      </Modal>
    </div>
  );
}
