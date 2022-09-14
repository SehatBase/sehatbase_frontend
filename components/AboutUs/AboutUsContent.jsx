import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import CheckVector from "../../public/CheckVector.png";

const AboutUsContent = ({ aboutUsPoints }) => {
  return (
    <>
      <Box>
        <Typography variant="h4" fontWeight="medium" my={1}>
          Sehat Base Telemedicine Company
        </Typography>
        <Typography variant="subtitle1" align="justify" fontWeight="normal">
          SehatBase is an artificially intelligent one-stop disease diagnosis
          and treatment platform which enables users to diagnose disease and
          have an appointment with doctors instantly.
        </Typography>
      </Box>

      {/* About Us List */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "column",
          my: "2rem",
        }}
      >
        {aboutUsPoints.map(point => (
          <ListItem key={point} text={point} />
        ))}
      </Box>

      <Button
        size="large"
        sx={{
          alignSelf: "center",
        }}
      >
        <Typography textTransform="none">More Details</Typography>
      </Button>
    </>
  );
};

const ListItem = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: "1rem",
      }}
    >
      <Image src={CheckVector} width={32} height={33} layout="fixed" />
      <Typography
        variant="body1"
        fontWeight="light"
        sx={{
          marginLeft: "2rem",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default AboutUsContent;
