import { Box, Grid, Typography } from "@mui/material";

const Calc02 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        item
        xs={12}
        sm={12}
        md={12}
        marginTop={3}
      >
        <Box
          style={{
            backgroundColor: "whitesmoke",
            textAlign: "left",
            maxWidth: "600px",
          }}
          marginLeft={3.2}
          marginRight={1}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "25px", fontWeight: "700", color: "#333333" }}
            marginY={3}
          >
            Getting started with Tenny Calc
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            In a world where precision and speed matter, our calculator is
            designed to simplify complex calculations and provide quick,
            accurate results at your fingertips. Whether you&apos;re a student
            tackling math problems or a professional in need of a reliable tool,
            my Tenny Calc is here to empower you. Get ready to experience a
            sleek, user-friendly interface that combines functionality with
            elegance, making every calculation an effortless and enjoyable task
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Calc02;
