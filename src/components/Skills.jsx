import { Divider, Grid, Tooltip, Typography } from "@mui/material";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import react from "../assets/react.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import typescript from "../assets/typescript.svg";
import nodejs from "../assets/nodejs.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import npm from "../assets/npm.svg";
import python from "../assets/python.svg";
import bootstrap from "../assets/bootstrap.svg";
import postman from "../assets/postman.svg";
import vscode from "../assets/vscode.svg";
import c from "../assets/c.svg";
import oauth from "../assets/oauth.svg";
import passportjs from "../assets/passportjs.svg";
import socketio from "../assets/socketio.svg";
import webpack from "../assets/webpack.svg";
import chakraUI from "../assets/chakraUI.svg";
import materialUI from "../assets/materialUI.svg";
import heroku from "../assets/heroku.svg";
import azure from "../assets/azure.svg";
import vercel from "../assets/vercel.svg";
import excel from "../assets/excel.svg";
import jest from "../assets/jest.svg";
import "../styles/tooltipStyles.css";

const Skills = () => {
  const zoomIn = (e) => {
    e.currentTarget.style.transform = "scale(1.2)";
  };

  const zoomOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };
  return (
    <>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
        }}
      >
        <Grid
          container
          spacing={4}
          textAlign="center"
          sx={{ margin: "0 32px 32px 0" }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "sans-serif",
                color: "grey",
                marginY: "10px",
              }}
            >
              Technologies I&apos;ve Worked with
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start", // Center-align content horizontally
              gap: 3, // Add some spacing between images
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              frontend
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginX: "20px",
                gap: 2,
              }}
              maxWidth="250px"
            >
              <Tooltip
                title="HTML"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={html}
                  style={{
                    width: "54px",
                    height: "54px",
                    transition: "transform 0.2s",
                  }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="CSS"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={css}
                  style={{ width: "54px", height: "54px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="React"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={react}
                  style={{ width: "46px", height: "46px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Bootstrap"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={bootstrap}
                  style={{ width: "54px", height: "54px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Chakra UI"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={chakraUI}
                  style={{ width: "54px", height: "54px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Material UI"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={materialUI}
                  style={{ width: "54px", height: "54px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center-align content horizontally
              gap: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              backend
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginX: "20px",
                gap: 2,
              }}
              maxWidth="250px"
            >
              <Tooltip
                title="Node Js"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={nodejs}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Mongo DB"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={mongodb}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="MySql"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={mysql}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Express Js"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={express}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Socket.IO"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={socketio}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start", // Center-align content horizontally
              gap: 3, // Add some spacing between images
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              devops
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginX: "20px",
                gap: 2,
              }}
              maxWidth="250px"
            >
              <Tooltip
                title="Git"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={git}
                  style={{ width: "48px", height: "48px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Github"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={github}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Node Package Manager"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={npm}
                  style={{ width: "60px", height: "60px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start", // Center-align content horizontally
              gap: 3, // Add some spacing between images
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              languages
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                marginX: "20px",
                gap: 2,
              }}
              maxWidth="250px"
            >
              <Tooltip
                title="JavaScript"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={javascript}
                  style={{ width: "54px", height: "54px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="TypeScript"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={typescript}
                  style={{ width: "40px", height: "40px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Python"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={python}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="C Programming"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={c}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start", // Center-align content horizontally
              gap: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              tools and platforms
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                marginX: "20px",
                maxWidth: "250px",
              }}
            >
              <Tooltip
                title="Heroku"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={heroku}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Microsoft Azure"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={azure}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Vercel"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={vercel}
                  style={{ width: "55px", height: "55px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="VS Code"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={vscode}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Webpack"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={webpack}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Microsoft Excel"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={excel}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start", // Center-align content horizontally
              gap: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ maxWidth: "300px" }}
              className="skills"
            >
              API testing and security
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                marginX: "23px",
                maxWidth: "250px",
              }}
            >
              <Tooltip
                title="Postman API"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={postman}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Jest"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={jest}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="OAuth"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={oauth}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
              <Tooltip
                title="Passport JS"
                arrow
                classes={{ tooltip: "custom-tooltip" }}
              >
                <img
                  src={passportjs}
                  style={{ width: "50px", height: "50px" }}
                  onMouseOver={zoomIn}
                  onMouseLeave={zoomOut}
                />
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider />
    </>
  );
};
export default Skills;
