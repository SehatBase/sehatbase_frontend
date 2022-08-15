import React from "react";
import { Container, Button, Typography, Paper } from "@mui/material";
import { useStyles } from "../styles/contactStyle";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Form from "./Form";

export default function ContactUs() {
  const classes = useStyles();
  return (
    <Container className={classes.rootContainer} maxWidth={false}>
      <Container className={classes.contactContainer}>
        <Typography className={classes.contactHeading}>CONTACT US</Typography>
        <Typography className={classes.contactSubHeading}>
          Get In Touch With Us!
        </Typography>
        <Typography className={classes.normalText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </Typography>
        <div className={classes.iconCont}>
          <WhatsAppIcon className={classes.icon}></WhatsAppIcon>
          <div>
            <Typography className={classes.normalText}>
              <b>What's App Chat</b>
            </Typography>
            <Typography className={classes.normalText}>
              XXXXXXXXXXXXXXX
            </Typography>
          </div>
        </div>
        <div>
          <div className={classes.iconCont}>
            <WhatsAppIcon className={classes.icon}></WhatsAppIcon>
            <div>
              <Typography className={classes.normalText}>
                <b>Skype Meet</b>
              </Typography>
              <Typography className={classes.normalText}>
                example@SehatBase.com
              </Typography>
            </div>
          </div>
        </div>
      </Container>
      <Container className={classes.formCont}>
        <Paper className={classes.paper}>
          <Form />
        </Paper>
      </Container>
    </Container>
  );
}
