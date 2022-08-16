import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const FooterBottom = ({ isMobile, isTablet }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: `${isMobile ? "100%" : isTablet ? "60%" : "50%"}`,
        ...(isMobile ? { marginX: "auto" } : { marginLeft: "auto" }),
        flexDirection: isMobile ? "column" : "row",
        justifyContent: `${isTablet ? "space-evenly" : "space-between"}`,
        alignItems: "center",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "center" : "start",
        }}
      >
        {!isMobile && (
          <Typography
            color="white"
            fontWeight="light"
            variant="body2"
            marginRight="0.25rem"
            sx={{ whiteSpace: "nowrap" }}
          >
            Follow Us
          </Typography>
        )}
        <SocialLinks />
      </Box>
      <Typography
        width="100%"
        color="white"
        fontWeight="light"
        marginY={isMobile ? "1rem" : "0.5rem"}
        variant="body2"
        sx={{
          whiteSpace: "nowrap",
          textAlign: `${isMobile ? "center" : "right"}`,
        }}
      >
        © SehatBase, Inc. 2022. We love our users!
      </Typography>
    </Box>
  );
};

function SocialLinks() {
  return (
    <Box
      sx={{
        width: "50%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Link href="#" component="a">
        <Image src="/linkedin.png" height={24} width={24} alt="linkedin" />
      </Link>
      <Link href="#" component="a">
        <Image src="/instagram.png" height={24} width={24} alt="instagram" />
      </Link>
      <Link href="#" component="a">
        <Image src="/facebook.png" height={24} width={24} alt="facebook" />
      </Link>
      <Link href="#" component="a">
        <Image src="/twitter.png" height={24} width={24} alt="twitter" />
      </Link>
    </Box>
  );
}

export default FooterBottom;
