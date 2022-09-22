import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUsHeading = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        my: "2rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "6px",
          background: theme.palette.primary.main,
        }}
      ></Box>
      <Typography color="primary" variant="h6">
        About Us
      </Typography>
    </Box>
  );
};

export default AboutUsHeading;
