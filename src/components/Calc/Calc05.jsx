import { Box, Divider, Grid, Typography } from "@mui/material";

const Calc05 = () => {
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
            variant="h3"
            sx={{ fontSize: "25px", fontWeight: "500", color: "#333333" }}
            marginY={2.5}
          >
            Harnessing React Hooks for Precise Calculations
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }}>
            <ul className="spaced-list">
              <li>
                <strong>Flexibility and Control:</strong> React hooks provided
                me with unparalleled flexibility and control, allowing me to
                fine-tune calculations to meet my calc&apos;s unique
                requirements.
              </li>
              <li>
                <strong>Reduced Dependencies:</strong> By avoiding external
                libraries, my calc remained lean and efficient, ensuring faster
                load times and improved maintainability.
              </li>
              <li>
                <strong>Enhanced Performance:</strong> Manual calculations
                optimized performance, minimizing re-renders and delivering a
                seamless user experience.
              </li>
              <li>
                <strong>Learning Experience:</strong> Implementing calculations
                with React hooks expanded my expertise, deepening my
                understanding of React&apos;s intricacies.
              </li>
              <li>
                <strong>Tailored Solutions:</strong> Manual calculations enabled
                me to craft custom solutions perfectly tailored to my
                calc&apos;s specific needs.
              </li>
              <li>
                <strong>Testing and Debugging:</strong> React hooks simplified
                testing and debugging, ensuring reliability and accuracy.
              </li>
            </ul>
          </Typography>
          <Typography sx={{ fontSize: "15px", color: "GrayText" }} marginY={2}>
            In conclusion, my strategic choice to harness React hooks for manual
            calculations bore fruit in the form of unparalleled precision and
            performance. This approach granted me the flexibility, control, and
            efficiency I needed to achieve my calc&apos;s objectives. Moreover,
            it elevated my development coding expertise and honed my skills as
            React artisans. By embracing this approach, I not only met but
            exceeded my calc&apos;s needs, delivering a solution that stands as
            a testament to my dedication and mastery.
          </Typography>
        </Box>
      </Grid>
      <Divider variant="middle" sx={{ marginTop: "30px" }} />
    </div>
  );
};

export default Calc05;
