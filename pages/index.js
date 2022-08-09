import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Navbar from "../components/Navbar";
import { muiTheme } from "../config/MuiConfig";

export default function Home() {
  return (
    <ThemeProvider theme={muiTheme}>
      <Navbar />
    </ThemeProvider>
  );
}
