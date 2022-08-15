import React from "react";
import { Container } from "@mui/material";

export default function ContactUs() {
  return (
    <Container>
      <Container>
        <h1>Contact Us</h1>
      </Container>
      <Container>
        <form id="message">
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Email Adress"></input>
          <input type="submit" value="Submit"></input>
        </form>
        <textarea rows="4" cols="50" name="message" form="message">
          Message
        </textarea>
      </Container>
    </Container>
  );
}
