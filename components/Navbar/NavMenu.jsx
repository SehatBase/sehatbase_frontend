import { Box, Button, Link, useTheme } from "@mui/material";
import { useResponsive } from "../../hooks";
import NavItem from "./NavItem";

const NavMenu = ({ navItems }) => {
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsive();

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
};

export default NavMenu;
