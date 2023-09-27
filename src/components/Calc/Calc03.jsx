import { Box, Divider, Grid, Typography } from "@mui/material";

const Calc03 = () => {
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
            Style Evolution
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            <strong>Simplicity in Design:</strong> My calculator project has
            been meticulously crafted using React.js and CSS to provide a
            user-friendly and straightforward experience. I understand that
            sometimes, less is more, and my design philosophy reflects just
            that. With a clean and minimalist layout, my simple calculator lets
            you focus on what truly matters: solving equations with ease.
            Embracing the beauty of simplicity, I&apos;ve created a calculator
            that gets the job done efficiently and intuitively.
          </Typography>
        </Box>
      </Grid>
      <Divider variant="middle" sx={{ marginTop: "35px" }} />
    </div>
  );
};

export default Calc03;
