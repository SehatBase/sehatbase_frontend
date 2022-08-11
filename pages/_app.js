
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "../config/MuiConfig";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  return <Component {...pageProps}>

  </Component>
=======
  return (
    <CssBaseline>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CssBaseline>
  );
>>>>>>> main
}

export default MyApp;
