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
    <Box
      component="footer"
      sx={{
        background: theme.palette.primary.main,
        position: "relative",
        height: "100%",
        paddingBottom: "2.5rem",
      }}
    >
      <Container>
        <FooterLogo height={circleSize} width={circleSize} />
        <Box
          sx={{
            width: `${isMobile ? "100%" : isTablet ? "60%" : "50%"}`,
            marginLeft: "auto",
            display: "flex",
            justifyContent: `${isMobile ? "space-evenly" : "space-between"}`,
            alignItems: "center",
            height: "16rem",
            ...(isMobile ? { paddingTop: "2rem" } : {}),
          }}
        >
          <LinksList heading="Mobile app" links={mobileAppLinks} />
          <LinksList heading="Company" links={companyLinks} />
        </Box>
        <Box
          sx={{
            width: "100%",
            borderTop: "2px solid white",
            margin: "1rem",
          }}
        ></Box>
        <FooterBottom isMobile={isMobile} isTablet={isTablet} />
      </Container>
    </Box>
  );
};

export default Footer;
