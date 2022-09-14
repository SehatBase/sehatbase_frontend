import { Box, Button, Link, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useResponsive } from "../../hooks";

const HeroSection = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    setNavbarHeight(
      Number(window.innerHeight) -
        Number(document.querySelector("#navbar").clientHeight)
    );
  }, []);

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: navbarHeight,
      }}
    >
      <Image
        alt="background"
        src="/background-base.svg"
        layout="fill"
        objectFit="cover"
      />
      {!isMobile && (
        <>
          <Image
            alt="rectangle"
            src="/rectangle.svg"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
          <Box
            sx={{
              position: "relative",
              height: "80%",
              width: "100%",
              marginTop: "auto",
            }}
          >
            <Image
              alt="doctors"
              src="/doctors.png"
              layout="fill"
              objectFit="contain"
              objectPosition="right"
            />
          </Box>
        </>
      )}
      <Box
        sx={{
          position: "absolute",
          height: "90%",
          width: `${isMobile ? "100%" : "70%"}`,
          zIndex: 10,
        }}
      >
        <Box
          component="main"
          height="100%"
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            height="70%"
            width={`${isMobile ? "90%" : "60%"}`}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: `${isMobile ? "center" : "start"}`,
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              component="h1"
            >
              On a Pursuit of <br /> Better Medicine
            </Typography>
            <Typography
              variant={`${isMobile ? "body1" : isTablet ? "h6" : "h5"}`}
              fontWeight="regular"
              component="desc"
              textAlign={isMobile && "justify"}
            >
              This is open to everyone every day and provides primary health
              care and cutting-edge medicine in a central location.
            </Typography>
            <Link href="/join-us">
              <Button sx={{ paddingX: "3rem", textTransform: "none" }}>
                Join Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
