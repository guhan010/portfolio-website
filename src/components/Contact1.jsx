import {
  Box,
  Container,
  Divider,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import about from "../assets/about.webp";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.svg";

const Contact1 = () => {
  return (
    <div style={{ flexGrow: 1, padding: 16 }}>
      <Grid container spacing={2} justifyContent="center" marginY="40px">
        <Slide in={true} direction="right" timeout={700}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              style={{
                padding: "10px",
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content
              }}
            >
              <Typography
                variant="h1"
                className="MuiTypography--h1 MuiTypography-responsiveFontSm"
                sx={{ fontSize: "80px", fontWeight: "700", color: "#333333" }}
              >
                contact..
              </Typography>
            </Box>
            <Box
              style={{
                padding: 16,
                backgroundColor: "whitesmoke",
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "15px" }}>
                Get in touch with me via social media
                <br /> or email.
              </Typography>
            </Box>
            <Box
              style={{
                padding: 10,
                textAlign: "left",
                maxWidth: "400px", // Adjust the maximum width as needed
                margin: "0 auto", // Center align the content,
              }}
            >
              <Container>
                <Grid container spacing={2}>
                  {/* Box 1 */}
                  <Grid item xs={12} sm={12} md={6} lg={6} maxWidth="50%">
                    <a
                      href="https://www.linkedin.com/in/guhan-eswaran-32a5ba254/"
                      className="linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        className="social"
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <img
                          src={linkedin}
                          style={{ height: "30px", width: "30px" }}
                        />
                        LinkedIn
                      </Box>
                    </a>
                  </Grid>

                  {/* Box 2 */}
                  <Grid item xs={12} sm={12} md={6} lg={6} maxWidth="50%">
                    <a
                      href="https://github.com/guhan010"
                      className="github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        className="social"
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <img
                          src={github}
                          style={{ height: "30px", width: "30px" }}
                        />
                        Github
                      </Box>
                    </a>
                  </Grid>

                  {/* Box 3 */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    maxWidth="50%"
                    marginY={2}
                  >
                    <a
                      href="https://twitter.com/__picasso___"
                      className="twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        className="social"
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <img
                          src={twitter}
                          style={{ height: "30px", width: "30px" }}
                        />
                        Twitter
                      </Box>
                    </a>
                  </Grid>

                  {/* Box 4 */}
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    maxWidth="50%"
                    marginY={2}
                  >
                    <a
                      href="https://www.instagram.com/_da_vinci.__/"
                      className="instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Box
                        className="social"
                        display="flex"
                        alignItems="center"
                        gap={1}
                      >
                        <img
                          src={instagram}
                          style={{ height: "30px", width: "30px" }}
                        />
                        Instagram
                      </Box>
                    </a>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Grid>
        </Slide>
        <Slide in={true} direction="left" timeout={700}>
          <Grid item xs={12} sm={6} md={4}>
            <Box style={{ padding: 16, textAlign: "center" }}>
              <img
                src={about}
                alt="Profile Picture"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Box>
          </Grid>
        </Slide>
      </Grid>
      <Divider variant="middle" />
    </div>
  );
};

export default Contact1;
