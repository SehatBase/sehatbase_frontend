import { Box, Button, Link } from "@mui/material";
import { Container } from "@mui/system";
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
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: "1rem",
      }}
    >
      <Box>
        <Link href="/">Brand</Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        {navItems.links.map(item => (
          <NavItem key={item.text} {...item} />
        ))}

        <Box sx={{ marginLeft: "2.5rem" }}>
          {navItems.buttons.map(item => (
            <Button
              key={item.text}
              size="medium"
              sx={{ paddingX: "1.5rem", textTransform: "none" }}
            >
              <Link href={item.href}>{item.text}</Link>
            </Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
