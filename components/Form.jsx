import React from "react";
import { useStyles } from "../styles/formStyle";
import { Container, Button, Typography, Grid, TextField } from "@mui/material";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const classes = useStyles();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

  console.log(formData);
  return (
    <form className={classes.formCont}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="firstName"
            variant="outlined"
            label="First Name"
            className={classes.formInput}
            value={formData.firstName}
            onChange={(e) => handleChange(e)}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="lastName"
            variant="outlined"
            label="Last Name"
            className={classes.formInput}
            value={formData.lastName}
            onChange={(e) => handleChange(e)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            className={classes.formInput}
            variant="outlined"
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Message"
            multiline
            rows={8}
            className={classes.message}
            value={formData.message}
            onChange={(e) => handleChange(e)}

            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button size="large" onClick={(e)=>handleSubmit(e)}>Send Message</Button>
        </Grid>
      </Grid>
    </form>
  );
}
