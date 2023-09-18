import { Grid, Box, Typography, makeStyles, Paper } from "@mui/material";
import about from "../assets/about.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const AboutIntro = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <Typography variant="h6">tenny</Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutIntro;
