import { createTheme } from "@mui/material";
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from "react";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, style, ...other } = props;
  return (
    <NextLink
      ref={ref}
      href={href}
      passHref={true}
      style={{ ...style, textDecoration: "none", color: "inherit", }}
      {...other}
    />
  );
});
LinkBehavior.displayName = 'LinkBehavior';
LinkBehavior.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.shape({
      hash: PropTypes.string,
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    PropTypes.string,
  ]).isRequired,
};

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
  }
});

export { muiTheme };
