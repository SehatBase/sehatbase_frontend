import { Box, useTheme } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useResponsive } from "../../hooks";
import AboutUsDoctor from "../../public/AboutUsDoctor.png";

export const AboutUsImage = ({ reductionFactor = 1 }) => {
  const theme = useTheme();
  const [wf, hf] = [reductionFactor, reductionFactor];
  const { isMobile, isTablet } = useResponsive();

  return (
    <Box
      sx={{
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "relative",
          marginTop: `${7.5 * reductionFactor}%`,
          width: `${625 * wf}px`,
          height: `${625 * hf}px`,
          borderRadius: "50%",
          background: theme.palette.primary.main,
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          height: "90%",
          width: isTablet ? "70%" : isMobile ? "80%" : "90%",
          bottom: "0",
        }}
      >
        <Image src={AboutUsDoctor} alt="Doctor" layout="fill" />
        <Box
          sx={{
            background: theme.palette.primary.main,
            height: `${10 * hf}px`,
            width: "100%",
            position: "absolute",
            bottom: "0",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
