import { Paper, useTheme } from "@mui/material";
import { useResponsive } from "../../hooks";
import NavMenu from "./NavMenu";

const Sidebar = ({ navItems, isMenuOpen }) => {
  const theme = useTheme();
  const { isMobile, isTablet } = useResponsive();

  return (
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
        transform: `translateX(${!isMenuOpen || !isMobile ? "600px" : "0px"})`,
        transition: "transform 0.5s ease-out",
      }}
    >
      <NavMenu navItems={navItems} />
    </Paper>
  );
};

export default Sidebar;
