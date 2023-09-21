import { Divider, Grid, Typography } from "@mui/material";
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

const Skills = () => {
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
                fontFamily: "monospace",
                color: "GrayText",
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
              sx={{ bgcolor: "gray", maxWidth: "300px" }}
            >
              Frontend
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
              <img src={html} style={{ width: "54px", height: "54px" }} />
              <img src={css} style={{ width: "54px", height: "54px" }} />
              <img src={react} style={{ width: "46px", height: "46px" }} />
              <img src={bootstrap} style={{ width: "54px", height: "54px" }} />
              <img src={chakraUI} style={{ width: "54px", height: "54px" }} />
              <img src={materialUI} style={{ width: "54px", height: "54px" }} />
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
              sx={{ bgcolor: "palegreen", maxWidth: "300px" }}
            >
              Backend
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
              <img src={nodejs} style={{ width: "60px", height: "60px" }} />
              <img src={mongodb} style={{ width: "60px", height: "60px" }} />
              <img src={mysql} style={{ width: "60px", height: "60px" }} />
              <img src={express} style={{ width: "60px", height: "60px" }} />
              <img src={socketio} style={{ width: "60px", height: "60px" }} />
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
              sx={{ bgcolor: "gray", maxWidth: "300px" }}
            >
              Devops
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
              <img src={git} style={{ width: "48px", height: "48px" }} />
              <img src={github} style={{ width: "48px", height: "48px" }} />
              <img src={npm} style={{ width: "60px", height: "60px" }} />
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
              sx={{ bgcolor: "gray", maxWidth: "300px" }}
            >
              Languages
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
              <img src={javascript} style={{ width: "54px", height: "54px" }} />
              <img src={typescript} style={{ width: "40px", height: "40px" }} />
              <img src={python} style={{ width: "50px", height: "50px" }} />
              <img src={c} style={{ width: "50px", height: "50px" }} />
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
              sx={{ bgcolor: "palegreen", maxWidth: "300px" }}
            >
              Tools and Platforms
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
              <img src={heroku} style={{ width: "50px", height: "50px" }} />
              <img src={azure} style={{ width: "50px", height: "50px" }} />
              <img src={vercel} style={{ width: "55px", height: "55px" }} />
              <img src={vscode} style={{ width: "50px", height: "50px" }} />
              <img src={webpack} style={{ width: "55px", height: "55px" }} />
              <img src={excel} style={{ width: "50px", height: "50px" }} />
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
              sx={{ bgcolor: "palegreen", maxWidth: "300px" }}
            >
              API Testing and Security
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
              <img src={postman} style={{ width: "50px", height: "50px" }} />
              <img src={jest} style={{ width: "50px", height: "50px" }} />
              <img src={oauth} style={{ width: "50px", height: "50px" }} />
              <img src={passportjs} style={{ width: "50px", height: "50px" }} />
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider />
    </>
  );
};

export default Skills;
