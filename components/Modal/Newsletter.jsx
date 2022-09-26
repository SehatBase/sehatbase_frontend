import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useStyles } from "../../styles/modalStyle";
import { TextField, FormGroup } from "@mui/material";
import { useEffect } from "react";
import NewsCont from "../NewsletterContainer/NewsCont";

export default function Newsletter() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1000);
  }, []);

  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button className={classes.none}></Button>
      <Modal open={open} onClose={handleClose}>
        <NewsCont handleClose={handleClose} />
      </Modal>
    </div>
  );
}
