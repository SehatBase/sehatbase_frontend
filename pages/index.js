import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import Features from '../components/Features/features';
import Navbar from "../components/Navbar";
import { muiTheme } from "../config/MuiConfig";


export default function Home() {
  return (
    <>
    <Features/>
    </>
    
  );
}
