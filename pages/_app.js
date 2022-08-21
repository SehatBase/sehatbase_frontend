
import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from 'next/head';
import { muiTheme } from "../config/MuiConfig";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CssBaseline>
      <Head>
        <meta name="viewport" content="minimum-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default MyApp;
