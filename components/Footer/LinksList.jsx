import { Box, Link, Typography } from "@mui/material";

const LinksList = ({ heading, links }) => {
  return (
    <Box sx={{ color: "white" }}>
      <Typography variant="h6" fontWeight="bold">
        {heading}
      </Typography>
      <Box marginTop="0.5rem">
        {links.map(link => (
          <Link
            key={link.text}
            href={link.href}
            component="a"
            sx={{ textDecoration: "none" }}
          >
            <Typography color="white" fontWeight="light" variant="body2">
              {link.text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default LinksList;
