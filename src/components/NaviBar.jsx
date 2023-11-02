import { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../styles/NavStyles.css";
import { Transition } from "react-transition-group";

const NaviBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        color={"gray"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <NavLink className="home" to={"/"}>
          <em>tenny</em>
        </NavLink>
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li>
          <NavLink to={"/portfolio"}>portfolio</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>blog</NavLink>
        </li>
        <li>
          <NavLink to={"/resume"}>resume</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <Transition in={true} timeout={400} appear={true}>
          {(state) => (
            <AppBar
              component={"nav"}
              sx={{
                bgcolor: "black",
                transform: `translateY(${state === "entered" ? 0 : "-100%"})`,
                transition: "transform 0.5s",
              }}
            >
              <Toolbar>
                {/* MenuIcon aligned to the right for mobile */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "block", sm: "none" },
                  }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end" // Align the icon to the right
                    onClick={handleDrawerToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>

                <Typography
                  color={"gray"}
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 3 }}
                >
                  <NavLink className="home" to={"/"}>
                    <em>tenny</em>
                  </NavLink>
                </Typography>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <ul className="navigation-menu">
                    <li>
                      <NavLink to={"/about"}>about</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/portfolio"}>portfolio</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/blog"}>blog</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/resume"}>resume</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/contact"}>contact</NavLink>
                    </li>
                  </ul>
                </Box>
              </Toolbar>
            </AppBar>
          )}
        </Transition>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default NaviBar;
