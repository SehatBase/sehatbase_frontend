import { Box, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useResponsive } from "../../hooks";
import AboutUsContent from "./AboutUsContent";
import AboutUsHeading from "./AboutUsHeading";
import { AboutUsImage } from "./AboutUsImage";

const aboutUsPoints = [];

const AboutUs = () => {
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        py: isMobile && "2rem",
        justifyContent: "space-between",
        background: theme.palette.primary.contrastText,
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: "100%",
          position: "relative",
        }}
      >
        <AboutUsImage reductionFactor={isMobile ? 0.6 : isTablet ? 0.8 : 1} />
      </Box>

      <Container
        sx={{
          width: isMobile ? "100%" : "50%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {/* About Us */}
        <AboutUsHeading />

        {/* About Us Content */}
        <AboutUsContent aboutUsPoints={aboutUsPoints} />
      </Container>
    </Box>
  );
};

export default AboutUs;
