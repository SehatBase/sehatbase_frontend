import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { Box, IconButton, Link } from "@mui/material";
import { Container } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import { useResponsive } from "../../hooks";
import NavMenu from "./NavMenu";
import Sidebar from "./Sidebar";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isMobile, isTablet } = useResponsive();

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
            <NavMenu navItems={navItems} />
          ) : (
            <IconButton color="primary" onClick={() => setIsMenuOpen(p => !p)}>
              {isMenuOpen ? <CloseTwoToneIcon /> : <MenuTwoToneIcon />}
            </IconButton>
          )}
        </Box>
      </Container>

      <Sidebar isMenuOpen={isMenuOpen} navItems={navItems} />
    </Box>
  );
};

export default Navbar;
