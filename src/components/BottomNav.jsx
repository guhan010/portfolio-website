import { Box, Typography } from "@mui/material";

const BottomNav = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#EBEBEB",
        color: "#757575",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 100px 20px ",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: "10px",
          fontFamily: "sans-serif",
          fontWeight: "400",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        &copy; Guhan Eswaran
      </Typography>
      <Typography sx={{ fontSize: "10px" }}>All Rights Reserved</Typography>
    </Box>
  );
};

export default BottomNav;
