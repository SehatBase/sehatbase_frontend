import { useMediaQuery } from "@mui/material";


const useResponsive = () => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(
    theme => theme.breakpoints.up("md") && theme.breakpoints.down("lg")
  );

  return { isMobile, isTablet };
};


export default useResponsive;
