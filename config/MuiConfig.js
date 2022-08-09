import { createTheme } from "@mui/material";
import { deepmerge } from "@mui/utils";
import React from "react";
import NextLink from 'next/link';

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, style, ...other } = props;
  return (
    <NextLink
      ref={ref}
      href={href}
      style={{ ...style, textDecoration: "none", color: "inherit" }}
      {...other}
    />
  );
});
LinkBehavior.displayName = 'LinkBehavior';

const linkTheme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});


const uiTheme = createTheme({
  palette: {
    // Purple
    primary: {
      main: 'rgba(116, 40, 234, 1)'
    },
    // White
    secondary: {
      main: 'rgba(243, 249, 249, 0.18)',
    },
    // Pink
    info: {
      main: 'rgba(255, 95, 152, 1)'
    }
  },
  typography: {
    fontFamily: [
      'Open Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          backgroundColor: 'primary',
          fontFamily: 'Montserrat',
          textTransform: 'none'
        },
        variant: 'contained'
      }
    }
  }
});

const muiTheme = createTheme(deepmerge(uiTheme, linkTheme));

export { muiTheme };



