
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "../config/MuiConfig";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CssBaseline>
      <ThemeProvider theme={muiTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CssBaseline>
  );
}

export default MyApp;
