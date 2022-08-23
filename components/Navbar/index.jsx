import { useTheme } from "@emotion/react";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import NavItem from "./NavItem";

export const navItems = {
  links: [
    {
      text: "Home",
      href: "/",
      isActive: true,
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "About Us",
      href: "/about-us",
    },
    {
      text: "FAQs",
      href: "/faqs",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ],
  buttons: [
    {
      text: "Book An Appointment",
      href: "/book-appointment",
    },
  ],
};

const Navbar = () => {
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(
    theme => theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );

  return (
    <Box id="navbar" sx={{ overflow: "hidden" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <Link href="/">
            <Image src="/brand.png" alt="Sehatbase" height={64} width={84} />
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "end" : "space-between",
            width: `${isTablet ? "70%" : "60%"}`,
          }}
        >
          {/* Conditional Rendering */}
          {!isMobile ? (
            <NavMenu isMobile={isMobile} />
          ) : (
            <IconButton color="primary" onClick={() => setIsMenuOpen(p => !p)}>
              {isMenuOpen ? <CloseTwoToneIcon /> : <MenuTwoToneIcon />}
            </IconButton>
          )}
        </Box>
      </Container>

      {/* Sidebar */}
      <Paper
        sx={{
          border: `10px solid ${theme.palette.primary}`,
          position: "absolute",
          right: 0,
          overflow: "hidden",
          zIndex: 100,
          background: theme.palette.primary.main,
          width: "max(33.3%, 300px)",
          height: "75vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-evenly",
          transform: `translateX(${
            !isMenuOpen || !isMobile ? "600px" : "0px"
          })`,
          transition: "transform 0.5s ease-out",
        }}
      >
        <NavMenu isMobile={isMobile} />
      </Paper>
    </Box>
  );
};

function NavMenu({ isMobile }) {
  const theme = useTheme();
  return (
    <>
      {navItems.links.map(item => (
        <NavItem key={item.text} {...item} isMobile={isMobile} />
      ))}

      <Box sx={{ ...(!isMobile && { marginLeft: "2.5rem" }) }}>
        {navItems.buttons.map(item => (
          <Link key={item.text} href={item.href}>
            <Button
              size="medium"
              variant="contained"
              sx={{
                paddingX: "1.5rem",
                ...(isMobile && {
                  background: theme.palette.primary.contrastText,
                  color: theme.palette.primary.main,
                }),
                textTransform: "none",
                ":hover": isMobile && {
                  color: theme.palette.primary.contrastText,
                },
              }}
            >
              {item.text}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default Navbar;
