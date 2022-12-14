import { Link, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";
import { hrefToText } from "../../utils/NavLinksHelper";

const NavItem = ({ text, href, isMobile }) => {
  const theme = useTheme();
  const router = useRouter();

  const isActive = hrefToText(router.pathname) === text;

  return (
    <Box
      sx={{ ":hover": { opacity: "80%" } }}
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link href={href} component="a" sx={{ textDecoration: "none" }}>
        <Typography
          color={isMobile ? "white" : "primary"}
          textTransform={"none"}
          variant={`${isMobile ? "body1" : "body2"}`}
          sx={{
            cursor: "pointer",
          }}
        >
          {text}
        </Typography>
      </Link>
      {isActive && (
        <Box
          sx={{
            background: theme.palette.secondary.main,
            height: "3px",
          }}
        ></Box>
      )}
    </Box>
  );
};

export default NavItem;
