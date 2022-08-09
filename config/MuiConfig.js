import { createTheme } from "@mui/material";
import NextLink from 'next/link';
import React from "react";

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

const muiTheme = createTheme({
  palette: {
    // Purple
    primary: {
      main: 'rgba(116, 40, 234, 1)',
      contrastText: 'rgba(243, 249, 249, 1)'
    },
    secondary: {
      main: 'rgba(255, 95, 152, 1)',
      contrastText: 'rgba(243, 249, 249, 1)'
    }
  },
  typography: {
    'allVariants': {
      fontWeight: 500,
    },
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
    },
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
  }
});

export { muiTheme };
