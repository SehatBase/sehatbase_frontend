import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Navbar from "../components/Navbar";
import { muiTheme } from "../config/MuiConfig";
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <ContactUs />
    </>
  );
}
