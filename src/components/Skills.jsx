import { Grid, Box } from "@mui/material";

const Skills = () => {
  return (
    <Grid container spacing={2} mx={3}>
      <Grid item xs={12} sm={12} md={12} mr ={2}>
        <Box sx={{ bgcolor: "tan" }}>Technologies I&apos;ve Worked with</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "teal" }}>frontend</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "coral" }}>backend</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box sx={{ bgcolor: "yellow" }}>devops</Box>
      </Grid>
    </Grid>
  );
};

export default Skills;
