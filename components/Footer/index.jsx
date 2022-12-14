import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/system";
import { useResponsive } from "../../hooks";
import FooterBottom from "./FooterBottom";
import FooterLogo from "./FooterLogo";
import LinksList from "./LinksList";

const companyLinks = [
  {
    text: "About Us",
    href: "#",
  },
  {
    text: "Contact Us",
    href: "#",
  },
];
const mobileAppLinks = [
  {
    text: "Features",
    href: "#",
  },
  {
    text: "Video Share",
    href: "#",
  },
  {
    text: "Video Record",
    href: "#",
  },
];

const Footer = () => {
  const theme = useTheme();

  const { isMobile, isTablet } = useResponsive();

  const circleSize = isMobile ? 150 : 300;

  return (
    <>
      <Box sx={{ py: 5 }}></Box>
      <Box
        component="footer"
        sx={{
          background: theme.palette.primary.main,
          position: "relative",
          height: "100%",
          paddingBottom: "2.5rem",
          zIndex: 0,
        }}
      >
        <Container>
          <FooterLogo height={circleSize} width={circleSize} />
          <Box
            sx={{
              width: `${isMobile ? "100%" : isTablet ? "50%" : "50%"}`,
              marginLeft: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "16rem",
              ...(isMobile ? { paddingTop: "2rem" } : {}),
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: `${
                  isMobile ? "space-evenly" : "space-between"
                }`,
                ...(!isMobile && { alignItems: "start", marginRight: "auto" }),
              }}
            >
              <LinksList heading="Mobile app" links={mobileAppLinks} />
              <LinksList heading="Company" links={companyLinks} />
            </Box>
          </Box>
          {/* Horizontal Rule */}
          <Box
            sx={{
              width: "90%",
              borderTop: "2px solid white",
              margin: "1rem auto",
            }}
          ></Box>
          <FooterBottom />
        </Container>
      </Box>
    </>
  );
};

export default Footer;
